// src/app/extra/anicca-dukkha-anatta/lesson-04/page.tsx
import IntrospectionCard from "@/components/ui/IntrospectionCard";
import Link from "next/link";
import { 
  FaEye, 
  FaEarListen, 
  FaWind, 
  FaUtensils, 
  FaHandPointer, 
  FaBrain, 
  FaArrowRight,
  FaQuoteLeft,
  FaCheckDouble
} from "react-icons/fa6";

export default function ExtraLesson04() {
  const externalSenses = [
    { name: "รูป", icon: <FaEye />, color: "text-emerald-600 bg-emerald-50" },
    { name: "เสียง", icon: <FaEarListen />, color: "text-emerald-600 bg-emerald-50" },
    { name: "กลิ่น", icon: <FaWind />, color: "text-emerald-600 bg-emerald-50" },
    { name: "รส", icon: <FaUtensils />, color: "text-emerald-600 bg-emerald-50" },
    { name: "โผฏฐัพพะ", icon: <FaHandPointer />, color: "text-emerald-600 bg-emerald-50" },
    { name: "ธรรมารมณ์", icon: <FaBrain />, color: "text-emerald-600 bg-emerald-50" },
  ];

  // บทพิจารณาหัวใจสำคัญ (คงเนื้อหาเดิมทุกตัวอักษร)
  const insightRefrain = (
    <div className="bg-emerald-50/50 p-6 rounded-2xl border-l-4 border-emerald-500 my-4 shadow-inner">
      <p className="text-2xl md:text-3xl text-emerald-800 font-bold text-center leading-relaxed">
        นั่นไม่ใช่ของเรา นั่นไม่เป็นเรา <br className="md:hidden" /> นั่นไม่ใช่ตัวตนของเรา
      </p>
    </div>
  );

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">วิปัสสนาภาวนาเพิ่มเติม</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">ความเป็นอนิจจังแห่งอายตนะภายนอก</h2>
          <p className="text-slate-500 text-lg italic">"รูปเป็นของไม่เที่ยง..."</p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* บทนำ */}
        <div className="mb-12 text-center">
          <p className="text-xl text-slate-600 font-medium italic">พระพุทธเจ้าตรัสไว้ว่า</p>
        </div>

        {/* ส่วนที่ 1: พิจารณารูป */}
        <IntrospectionCard>
          <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-5">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shadow-sm text-xl">
              <FaEye />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">รูปเป็นของไม่เที่ยง</h3>
          </div>
          <div className="space-y-4 text-xl md:text-2xl leading-relaxed text-slate-700">
            <p>สิ่งใดไม่เที่ยงสิ่งนั้นเป็นทุกข์</p>
            <p>สิ่งใดเป็นทุกข์สิ่งนั้นเป็นอนัตตา</p>
            <p className="text-slate-500 italic text-lg">สิ่งใดเป็นอนัตตาสิ่งนั้นท่านทั้งหลาย พึงเห็นด้วยปัญญา อันชอบตามความเป็นจริงอย่างนี้ว่า</p>
            {insightRefrain}
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 2: พิจารณาอายตนะภายนอกที่เหลือ */}
        <IntrospectionCard>
          <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-5">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center border-2 border-white shadow-sm"><FaEarListen size={14}/></div>
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center border-2 border-white shadow-sm"><FaWind size={14}/></div>
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center border-2 border-white shadow-sm"><FaUtensils size={14}/></div>
            </div>
            <h3 className="text-2xl font-bold text-slate-800">เสียง กลิ่น รส โผฏฐัพพะ ธรรมารมณ์</h3>
          </div>
          <div className="space-y-4 text-xl md:text-2xl leading-relaxed text-slate-700">
            <p>เป็นของไม่เที่ยง</p>
            <p>สิ่งใดไม่เที่ยงสิ่งนั้นเป็นทุกข์</p>
            <p>สิ่งใดเป็นทุกข์สิ่งนั้นเป็นอนัตตา</p>
            <p className="text-slate-500 italic text-lg">สิ่งใดเป็นอนัตตา สิ่งนั้นท่านทั้งหลายพึงเห็น ด้วยปัญญาอันชอบตามความเป็นจริง อย่างนี้ว่า</p>
            {insightRefrain}
          </div>
        </IntrospectionCard>

        {/* ส่วนสรุป: การหลุดพ้นของอริยสาวก */}
        <div className="mt-16">
          <IntrospectionCard highlight={true}>
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaQuoteLeft className="text-emerald-200 text-4xl opacity-50" />
              <p className="text-2xl md:text-3xl font-medium leading-relaxed text-white">
                เมื่ออริยสาวก ผู้ได้สดับแล้วเห็นอยู่อย่างนี้
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
                {externalSenses.map((s, idx) => (
                  <div key={idx} className="bg-white/10 p-4 rounded-2xl border border-white/20 flex flex-col items-center gap-2">
                    <span className="text-emerald-300">{s.icon}</span>
                    <span className="text-sm md:text-base">ย่อมเบื่อหน่ายแม้ใน{s.name}</span>
                  </div>
                ))}
              </div>

              <div className="bg-emerald-800/50 p-8 rounded-3xl border border-emerald-500/30 w-full space-y-4">
                <p className="text-xl text-emerald-100">เมื่อเบื่อหน่ายย่อมคลายกําหนัด เพราะคลายกําหนัดย่อมหลุดพ้น</p>
                <p className="text-2xl font-bold text-white underline decoration-amber-400 underline-offset-8">เมื่อหลุดพ้นแล้ว ย่อมมีญาณหยั่งรู้ว่าหลุดพ้นแล้ว</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-left">
                {[
                  "รู้ชัดว่าชาติสิ้นแล้ว",
                  "พรหมจรรย์อยู่จบแล้ว",
                  "กิจที่ควรทํา..ทําเสร็จแล้ว",
                  "กิจอื่นเพื่อความเป็นอย่างนี้มิได้มี"
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                    <FaCheckDouble className="text-emerald-400" />
                    <span className="text-lg">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/extra/anicca-dukkha-anatta/lesson-05" 
            className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-emerald-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: ความเป็นทุกข์แห่งอายตนะภายนอก
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}