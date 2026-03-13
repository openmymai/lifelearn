// src/app/extra/past-present-future/lesson-02/page.tsx
import IntrospectionCard from "@/components/ui/IntrospectionCard";
import Link from "next/link";
import { 
  FaArrowRight, 
  FaClock, 
  FaHourglassHalf, 
  FaInfinity,
  FaQuoteLeft,
  FaEye,
  FaBrain
} from "react-icons/fa6";

export default function PastPresentFutureLesson02() {
  // ฟังก์ชันช่วยจัดรูปแบบส่วนปฏิบัติ โดยแยก Logic ระหว่าง จักษุ และ ใจ ให้ตรงตามบทท่องเดิม
  const PracticeRefrain = ({ sense }: { sense: string }) => {
    const isJai = sense === "ใจ";
    
    return (
      <div className="bg-teal-50/50 p-6 rounded-2xl border-l-4 border-teal-500 mt-4 space-y-2 shadow-inner">
        <p className="text-teal-800 font-bold">อริยสาวกผู้ได้สดับแล้ว เห็นอยู่อย่างนี้</p>
        
        {/* บรรทัดที่ 1: การจัดการช่องว่างและคำว่า "ใน" */}
        <p className="text-slate-700">
          {isJai ? "ย่อมไม่มีเยื่อใยในใจ ที่เป็นอดีต" : "ย่อมไม่มีเยื่อใย ในจักษุที่เป็นอดีต"}
        </p>
        
        {/* บรรทัดที่ 2: "ไม่เพลิดเพลินจักษุ" vs "ไม่เพลิดเพลินในใจ" */}
        <p className="text-slate-700">
          {isJai ? "ไม่เพลิดเพลินในใจ ที่เป็นอนาคต" : "ไม่เพลิดเพลินจักษุ ที่เป็นอนาคต"}
        </p>
        
        {/* บรรทัดที่ 3: "เพื่อดับจักษุ" vs "เพื่อดับซึ่งใจ" */}
        <p className="text-teal-700 font-bold underline decoration-2 underline-offset-4">
          ย่อมปฏิบัติเพื่อเบื่อหน่าย เพื่อคลายกำหนัด {isJai ? "เพื่อดับซึ่งใจที่เป็นปัจจุบัน" : "เพื่อดับจักษุที่เป็นปัจจุบัน"}
        </p>
      </div>
    );
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-teal-600 font-bold tracking-widest uppercase text-sm">วิปัสสนาภาวนาเพิ่มเติม</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">อดีต อนาคต ปัจจุบัน</h2>
          <p className="text-slate-500 text-lg italic">พิจารณาอายตนะภายในทั้งสามกาล</p>
          <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* บทนำ */}
        <div className="mb-12 text-center">
          <p className="text-xl text-slate-600 font-medium italic">ดูกรภิกษุทั้งหลาย</p>
        </div>

        {/* --- ส่วนที่ 1: อนิจจสูตร (ไม่เที่ยง) --- */}
        <IntrospectionCard>
          <div className="flex items-center gap-4 mb-8 border-b border-teal-100 pb-5">
            <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center shadow-sm text-xl">
              <FaHourglassHalf />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800">อนิจจสูตร</h3>
              <p className="text-sm text-teal-600 font-medium">ว่าด้วยความเป็นอนิจจัง แห่งอายตนะภายในทั้งสามกาล</p>
            </div>
          </div>

          <div className="space-y-10 text-xl leading-relaxed text-slate-700">
            <div className="space-y-4">
              <p className="flex items-center gap-2 font-bold text-slate-800"><FaEye className="text-teal-500" /> จักษุที่เป็นอดีตและอนาคต เป็นของไม่เที่ยง</p>
              <p className="pl-6 italic text-slate-500">จะกล่าวไปใยถึงจักษุ ที่เป็นปัจจุบันเล่า</p>
              <PracticeRefrain sense="จักษุ" />
            </div>

            <div className="pt-8 border-t border-slate-100 space-y-4">
              <p className="flex items-center gap-2 font-bold text-slate-800"><FaBrain className="text-teal-500" /> หู จมูก ลิ้น กาย ใจ ที่เป็นอดีตและอนาคต เป็นของไม่เที่ยง</p>
              <p className="pl-6 italic text-slate-500">จะกล่าวไปใย ถึงใจที่เป็นปัจจุบันเล่า</p>
              <PracticeRefrain sense="ใจ" />
            </div>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 2: ทุกข์สูตร (เป็นทุกข์) --- */}
        <IntrospectionCard>
          <div className="flex items-center gap-4 mb-8 border-b border-teal-100 pb-5">
            <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center shadow-sm text-xl">
              <FaClock />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800">ทุกข์สูตร</h3>
              <p className="text-sm text-teal-600 font-medium">ว่าด้วยความเป็นทุกข์ แห่งอายตนะภายในทั้งสามกาล</p>
            </div>
          </div>

          <div className="space-y-10 text-xl leading-relaxed text-slate-700">
            <div className="space-y-4">
              <p className="flex items-center gap-2 font-bold text-slate-800"><FaEye className="text-teal-500" /> จักษุที่เป็นอดีตและอนาคต เป็นทุกข์</p>
              <p className="pl-6 italic text-slate-500">จะกล่าวไปใย ถึงจักษุที่เป็นปัจจุบันเล่า</p>
              <PracticeRefrain sense="จักษุ" />
            </div>

            <div className="pt-8 border-t border-slate-100 space-y-4">
              <p className="flex items-center gap-2 font-bold text-slate-800"><FaBrain className="text-teal-500" /> หู จมูก ลิ้น กาย ใจ ที่เป็นอดีตและอนาคต เป็นทุกข์</p>
              <p className="pl-6 italic text-slate-500">จะกล่าวไปใยถึงใจ ที่เป็นปัจจุบันเล่า</p>
              <PracticeRefrain sense="ใจ" />
            </div>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 3: อนัตตาสูตร (ไม่ใช่ตัวตน) --- */}
        <IntrospectionCard>
          <div className="flex items-center gap-4 mb-8 border-b border-teal-100 pb-5">
            <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center shadow-sm text-xl">
              <FaInfinity />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800">อนัตตาสูตร</h3>
              <p className="text-sm text-teal-600 font-medium">ว่าด้วยความเป็นอนัตตา แห่งอายตนะภายใน ทั้งสามกาล</p>
            </div>
          </div>

          <div className="space-y-10 text-xl leading-relaxed text-slate-700">
            <div className="space-y-4">
              <p className="flex items-center gap-2 font-bold text-slate-800"><FaEye className="text-teal-500" /> จักษุที่เป็นอดีตและอนาคต เป็นอนัตตา</p>
              <p className="pl-6 italic text-slate-500">จะกล่าวไปใย ถึงจักษุที่เป็นปัจจุบันเล่า</p>
              <PracticeRefrain sense="จักษุ" />
            </div>

            <div className="pt-8 border-t border-slate-100 space-y-4">
              <p className="flex items-center gap-2 font-bold text-slate-800"><FaBrain className="text-teal-500" /> หู จมูก ลิ้น กาย ใจ ที่เป็นอดีตและอนาคต เป็นอนัตตา</p>
              <p className="pl-6 italic text-slate-500">จะกล่าวไปใยถึงใจ ที่เป็นปัจจุบันเล่า</p>
              <PracticeRefrain sense="ใจ" />
            </div>
          </div>
        </IntrospectionCard>

        {/* ส่วนสรุปปิดท้าย */}
        <div className="mt-16">
          <IntrospectionCard highlight={true}>
            <div className="flex flex-col items-center text-center space-y-6 py-4">
              <FaQuoteLeft className="text-teal-200 text-4xl opacity-50" />
              <p className="text-2xl md:text-3xl font-medium leading-relaxed text-white">
                "ย่อมไม่มีเยื่อใยในอดีต ไม่เพลิดเพลินในอนาคต <br className="hidden md:block" />
                ย่อมปฏิบัติเพื่อดับสภาวะที่เป็นปัจจุบัน"
              </p>
              <div className="w-16 h-1 bg-teal-400 rounded-full"></div>
              <p className="text-teal-100 uppercase tracking-widest text-sm font-bold">หัวใจแห่งการพิจารณากาลทั้งสาม</p>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/extra/past-present-future/lesson-03" 
            className="inline-flex items-center gap-3 bg-teal-600 hover:bg-teal-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-teal-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: พาหิรอนิจจาสูตร
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}