// src/app/extra/past-present-future/lesson-03/page.tsx
import IntrospectionCard from "@/components/ui/IntrospectionCard";
import Link from "next/link";
import { 
  FaArrowRight, 
  FaHourglassHalf, 
  FaClock, 
  FaInfinity,
  FaQuoteLeft,
  FaEye,
  FaBrain,
  FaLayerGroup
} from "react-icons/fa6";

export default function PastPresentFutureLesson03() {
  // ฟังก์ชันช่วยจัดรูปแบบส่วนปฏิบัติสำหรับอายตนะภายนอก (คงเนื้อหาเดิมทุกตัวอักษร)
  const PracticeRefrain = ({ object }: { object: string }) => (
    <div className="bg-teal-50/50 p-6 rounded-2xl border-l-4 border-teal-500 mt-4 space-y-2 shadow-inner">
      <p className="text-teal-800 font-bold">อริยสาวกผู้ได้สดับแล้วเห็นอยู่อย่างนี้</p>
      <p className="text-slate-700">ย่อมไม่มีเยื่อใยใน{object}ที่เป็นอดีต</p>
      <p className="text-slate-700">ไม่เพลิดเพลินใน{object}ที่เป็นอนาคต</p>
      <p className="text-teal-700 font-bold underline decoration-2 underline-offset-4 leading-relaxed">
        ย่อมปฏิบัติเพื่อเบื่อหน่ายเพื่อคลายกำหนัด เพื่อดับ{object === "รูป" ? "รูป" : "ซึ่งธรรมารณ์"}ที่เป็นปัจจุบัน
      </p>
    </div>
  );

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-teal-600 font-bold tracking-widest uppercase text-sm">วิปัสสนาภาวนาเพิ่มเติม</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">พาหิรอนิจจาสูตร</h2>
          <p className="text-slate-500 text-lg italic">พิจารณาอายตนะภายนอกทั้งสามกาล</p>
          <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* บทนำ */}
        <div className="mb-12 text-center">
          <p className="text-xl text-slate-600 font-medium italic">ดูกรภิกษุทั้งหลาย</p>
        </div>

        {/* --- ส่วนที่ 1: ความเป็นอนิจจัง (ไม่เที่ยง) --- */}
        <IntrospectionCard>
          <div className="flex items-center gap-4 mb-8 border-b border-teal-100 pb-5">
            <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center shadow-sm text-xl">
              <FaHourglassHalf />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800">ความเป็นอนิจจัง</h3>
              <p className="text-sm text-teal-600 font-medium">แห่งอายตนะภายนอกทั้งสามกาล</p>
            </div>
          </div>

          <div className="space-y-10 text-xl leading-relaxed text-slate-700">
            {/* รูป */}
            <div className="space-y-4">
              <p className="flex items-center gap-2 font-bold text-slate-800"><FaEye className="text-teal-500" /> รูปที่เป็นอดีตและอนาคตเป็นของไม่เที่ยง</p>
              <p className="pl-6 italic text-slate-500">จะกล่าวไปใยถึงรูปที่เป็นปัจจุบันเล่า</p>
              <PracticeRefrain object="รูป" />
            </div>

            {/* เสียง กลิ่น รส โผฏฐัพพะ ธรรมารมณ์ */}
            <div className="pt-8 border-t border-slate-100 space-y-4">
              <p className="flex items-center gap-2 font-bold text-slate-800"><FaBrain className="text-teal-500" /> เสียง กลิ่น รส โผฏฐัพพะ ธรรมารมณ์</p>
              <p className="pl-6">ที่เป็นอดีตและอนาคตเป็นของไม่เที่ยง</p>
              <p className="pl-6 italic text-slate-500">จะกล่าวไปใยถึงที่ปัจจุบันเล่า</p>
              <PracticeRefrain object="ธรรมารมณ์" />
            </div>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 2: ความเป็นทุกข์ (เป็นทุกข์) --- */}
        <IntrospectionCard>
          <div className="flex items-center gap-4 mb-8 border-b border-teal-100 pb-5">
            <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center shadow-sm text-xl">
              <FaClock />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800">ความเป็นทุกข์</h3>
              <p className="text-sm text-teal-600 font-medium">แห่งอายตนะภายนอกทั้งสามกาล</p>
            </div>
          </div>

          <div className="space-y-10 text-xl leading-relaxed text-slate-700">
            <div className="space-y-4">
              <p className="flex items-center gap-2 font-bold text-slate-800"><FaEye className="text-teal-500" /> รูปที่เป็นอดีตและอนาคตเป็นทุกข์</p>
              <p className="pl-6 italic text-slate-500">จะกล่าวไปใยถึงรูปที่เป็นปัจจุบันเล่า</p>
              <PracticeRefrain object="รูป" />
            </div>

            <div className="pt-8 border-t border-slate-100 space-y-4">
              <p className="flex items-center gap-2 font-bold text-slate-800"><FaBrain className="text-teal-500" /> เสียง กลิ่น รส โผฏฐัพพะ ธรรมารมณ์</p>
              <p className="pl-6">ที่เป็นอดีตและอนาคตเป็นทุกข์</p>
              <p className="pl-6 italic text-slate-500">จะกล่าวไปใยถึงที่ปัจจุบันเล่า</p>
              <PracticeRefrain object="ธรรมารมณ์" />
            </div>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 3: ความเป็นอนัตตา (ไม่ใช่ตัวตน) --- */}
        <IntrospectionCard>
          <div className="flex items-center gap-4 mb-8 border-b border-teal-100 pb-5">
            <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center shadow-sm text-xl">
              <FaInfinity />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800">ความเป็นอนัตตา</h3>
              <p className="text-sm text-teal-600 font-medium">แห่งอายตนะภายนอกทั้งสามกาล</p>
            </div>
          </div>

          <div className="space-y-10 text-xl leading-relaxed text-slate-700">
            <div className="space-y-4">
              <p className="flex items-center gap-2 font-bold text-slate-800"><FaEye className="text-teal-500" /> รูปที่เป็นอดีตและอนาคตเป็นอนัตตา</p>
              <p className="pl-6 italic text-slate-500">จะกล่าวไปใยถึงรูปที่เป็นปัจจุบันเล่า</p>
              <PracticeRefrain object="รูป" />
            </div>

            <div className="pt-8 border-t border-slate-100 space-y-4">
              <p className="flex items-center gap-2 font-bold text-slate-800"><FaBrain className="text-teal-500" /> เสียง กลิ่น รส โผฏฐัพพะ ธรรมารมณ์</p>
              <p className="pl-6">ที่เป็นอดีตและอนาคตเป็นอนัตตา</p>
              <p className="pl-6 italic text-slate-500">จะกล่าวไปใยถึงที่ปัจจุบันเล่า</p>
              <PracticeRefrain object="ธรรมารมณ์" />
            </div>
          </div>
        </IntrospectionCard>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/extra/past-present-future/lesson-04" 
            className="inline-flex items-center gap-3 bg-teal-600 hover:bg-teal-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-teal-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: สัมโพธสูตรที่ 1
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}