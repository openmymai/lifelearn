// src/app/extra/anicca-dukkha-anatta/lesson-15/page.tsx
import IntrospectionCard from "@/components/ui/IntrospectionCard";
import Link from "next/link";
import { 
  FaArrowRight, 
  FaTree, 
  FaCircleQuestion, 
  FaCircleXmark, 
  FaCircleCheck, 
  FaEye, 
  FaBrain,
  FaQuoteLeft
} from "react-icons/fa6";

export default function ExtraLesson15() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">วิปัสสนาภาวนาเพิ่มเติม</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">เหตุปัจจัยอะไรให้ปรินิพพาน</h2>
          <p className="text-slate-500 text-lg italic">บทสนทนาระหว่างพระผู้มีพระภาคและอุคคคฤหบดี</p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนที่ 1: บทนำและคำถามของอุคคคฤหบดี */}
        <IntrospectionCard>
          <div className="flex items-center gap-3 mb-6 text-emerald-700 border-b pb-4">
            <FaTree className="text-2xl" />
            <h3 className="text-2xl font-bold">ณ ป่ามหาวัน</h3>
          </div>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700 italic">
            <p>สมัยหนึ่งพระผู้มีพระภาค ประทับอยู่ ณ กูฎาคารศาลา ในป่ามหาวันใกล้พระนครเวสาลี</p>
            <p>ครั้งนั้นแล อุคค คฤหบดีชาวเมืองเวสาลี ได้เข้าไปเฝ้าพระผู้มีพระภาค ถึงที่ประทับ ครั้นแล้วได้ทูลถามพระผู้มีพระภาค</p>
            
            <div className="bg-emerald-50 p-8 rounded-3xl border-l-4 border-emerald-500 not-italic shadow-inner">
              <p className="text-emerald-900 font-bold mb-4 flex items-center gap-2">
                <FaCircleQuestion className="text-emerald-600" /> ข้าแต่พระองค์ผู้เจริญ
              </p>
              <p className="text-2xl text-slate-800 leading-relaxed">
                เหตุปัจจัยอะไรหนอแล เป็นเครื่องให้สัตว์บางพวก ในโลกนี้ไม่ปรินิพพานในปัจจุบัน<br />
                อนึ่ง เหตุปัจจัยอะไร เป็นเครื่องให้สัตว์บางพวก ในโลกนี้ปรินิพพานในปัจจุบัน
              </p>
            </div>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 2: เหตุปัจจัยที่ไม่ปรินิพพาน (ฝ่ายหลง) */}
        <IntrospectionCard>
          <div className="flex items-center gap-4 mb-8 text-rose-700 border-b border-rose-100 pb-5">
            <FaCircleXmark className="text-3xl" />
            <h3 className="text-2xl font-bold">เหตุปัจจัยที่ไม่ปรินิพพาน</h3>
          </div>
          
          <div className="space-y-8 text-xl leading-relaxed text-slate-700">
            <p className="font-medium text-emerald-700">พระผู้มีพระภาคตรัสว่า มีอยู่แลคฤหบดี</p>
            
            {/* ทางตา */}
            <div className="space-y-4">
              <p className="flex items-center gap-2 font-bold text-slate-800"><FaEye className="text-blue-500" /> รูปทั้งหลายอันบุคคลพึงรู้แจ้ง ด้วยจักษุ</p>
              <p className="pl-6 border-l-2 border-slate-200">อันน่าปรารถนาน่าใคร่น่าพอใจ น่ารัก ชักให้ใคร่ ชวนให้กำหนัด</p>
              <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100 space-y-3">
                <p className="text-rose-800 font-bold">หากว่าภิกษุเพลิดเพลิน หมกมุ่น พัวพันรูปนั้น</p>
                <p>เมื่อภิกษุนั้นเพลิดเพลิน หมกมุ่น พัวพันรูปนั้นอยู่ วิญญาณอันอาศัยซึ่งตัณหานั้นก็ย่อมมี อุปาทานอันอาศัยซึ่งตัณหานั้นก็ย่อมมี</p>
                <p className="text-center text-2xl font-black text-rose-700 pt-2">ภิกษุผู้มีอุปาทานย่อมไม่ปรินิพพาน</p>
              </div>
            </div>

            {/* ทางใจ */}
            <div className="space-y-4">
              <p className="flex items-center gap-2 font-bold text-slate-800"><FaBrain className="text-purple-500" /> เสียง กลิ่น รส โผฏฐัพพะ และธรรมารมณ์</p>
              <p className="pl-6 border-l-2 border-slate-200">อันบุคคลพึงรู้แจ้งด้วยใจ อันน่าปรารถนาน่าใคร่ น่าพอใจ น่ารักชักให้ใคร่ ชวนให้กำหนัด</p>
              <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100 space-y-3">
                <p className="text-rose-800 font-bold">หากว่าภิกษุ เพลิดเพลิน หมกมุ่นพัวพันธรรมารมณ์นั้น</p>
                <p>เมื่อภิกษุนั้นเพลิดเพลิน หมกมุ่น พัวพันธรรมารมณ์นั้นอยู่ วิญญาณอันอาศัยซึ่งตัณหานั้นก็ย่อมมี อุปาทานอาศัยซึ่งปัญหานั้นก็ย่อมมี</p>
                <p className="text-center text-2xl font-black text-rose-700 pt-2">ภิกษุผู้มีอุปาทานย่อมไม่ปรินิพพาน</p>
              </div>
            </div>

            <p className="text-center font-bold text-slate-500 pt-4">ดูกรคฤหบดีเหตุปัจจัยนี้แล เป็นเครื่องให้สัตว์บางพวก ในโลกนี้ไม่ปรินิพพานในปัจจุบัน</p>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 3: เหตุปัจจัยที่ปรินิพพาน (ฝ่ายปัญญา) */}
        <IntrospectionCard highlight={true}>
          <div className="flex items-center gap-4 mb-8 text-white border-b border-white/20 pb-5">
            <FaCircleCheck className="text-3xl text-amber-300" />
            <h3 className="text-2xl font-bold">เหตุปัจจัยที่ปรินิพพาน</h3>
          </div>

          <div className="space-y-10 text-xl leading-relaxed text-white/90">
            <p className="font-medium text-emerald-200">ดูกรและคฤหบดี</p>

            {/* ทางตา */}
            <div className="space-y-4">
              <p className="font-bold text-white">รูปอันบุคคลพึงรู้แจ้งด้วยจักษุ</p>
              <p className="opacity-80">อันน่าปรารถนาน่าใคร่น่าพอใจ น่ารัก ชักให้ใคร่ ชวนให้กำหนัด</p>
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20 space-y-3">
                <p className="text-amber-300 font-bold">หากว่าภิกษุไม่เพลิดเพลิน ไม่หมกมุ่นไม่พัวพันรูปนั้น</p>
                <p>เมื่อภิกษุนั้นไม่เพลิดเพลิน ไม่หมกมุ่นไม่พัวพันรูปนั้นอยู่ วิญญาณอาศัยซึ่งตัณหานั้นก็ย่อมไม่มี อุปาทานอันอาศัยซึ่งตัณหา นั้นก็ย่อมไม่มี</p>
                <p className="text-center text-2xl font-black text-white pt-2 underline decoration-amber-400 underline-offset-8">ภิกษุผู้ไม่มีอุปทานย่อมปรินิพพาน</p>
              </div>
            </div>

            {/* ทางใจ */}
            <div className="space-y-4">
              <p className="font-bold text-white">เสียง กลิ่น รส โผฏฐัพพะ และธรรมารมณ์</p>
              <p className="opacity-80">อันบุคคลพึงรู้แจ้งด้วยใจ อันน่าปรารถนาน่าใคร่ น่าพอใจ น่ารัก ชักให้ใคร่ ชวนให้กำหนัด</p>
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20 space-y-3">
                <p className="text-amber-300 font-bold">หากภิกษุไม่เพลิดเพลิน ไม่หมกมุ่น ไม่พัวพันธรรมารมณ์นั้น</p>
                <p>เมื่อภิกษุนั้นไม่เพลินไม่หมกมุ่น ไม่พัวพันในธรรมารมณ์นั้นอยู่ วิญญาณอันอาศัยซึ่งตัณหานั้นก็ย่อมไม่มี อุปาทานอันอาศัยซึ่งตัณหานั้นก็ย่อมไม่มี</p>
                <p className="text-center text-2xl font-black text-white pt-2 underline decoration-amber-400 underline-offset-8">ภิกษุผู้ไม่มีอุปาทานย่อมปรินิพพาน</p>
              </div>
            </div>
          </div>
        </IntrospectionCard>

        {/* ส่วนสรุปปิดท้ายหมวด */}
        <div className="mt-16">
          <IntrospectionCard>
            <div className="flex flex-col items-center text-center space-y-6 py-4">
              <FaQuoteLeft className="text-emerald-200 text-4xl opacity-50" />
              <p className="text-2xl md:text-3xl font-medium leading-relaxed text-slate-800">
                "เอาใจใส่ไม่เที่ยงเกิดดับตลอดเวลา <br className="hidden md:block" />
                บล็อกวจีกรรมกายกรรมไม่มีผลเป็นบุญเป็นบาป"
              </p>
              <div className="w-16 h-1 bg-emerald-500 rounded-full"></div>
              <p className="text-emerald-600 font-bold uppercase tracking-widest text-sm">จบหมวดความเป็นอนิจจัง ทุกขัง อนัตตา</p>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/extra/past-present-future" 
            className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-emerald-200 hover:-translate-y-1"
          >
            เข้าสู่หมวด: อดีต ปัจจุบัน อนาคต
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}