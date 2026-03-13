// src/app/extra/anicca-dukkha-anatta/lesson-02/page.tsx
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

export default function ExtraLesson02() {
  const sensesData = [
    { name: "จักษุ", icon: <FaEye />, color: "text-emerald-600 bg-emerald-50" },
    { name: "หู", icon: <FaEarListen />, color: "text-emerald-600 bg-emerald-50" },
    { name: "จมูก", icon: <FaWind />, color: "text-emerald-600 bg-emerald-50" },
    { name: "ลิ้น", icon: <FaUtensils />, color: "text-emerald-600 bg-emerald-50" },
    { name: "กาย", icon: <FaHandPointer />, color: "text-emerald-600 bg-emerald-50" },
    { name: "ใจ", icon: <FaBrain />, color: "text-emerald-600 bg-emerald-50" },
  ];

  // บทพิจารณาซ้ำ (Refrain) คงเนื้อหาเดิมทุกตัวอักษร
  const refrain = (
    <div className="space-y-4 mt-4">
      <p className="text-slate-700 font-medium">สิ่งใดเป็นทุกข์สิ่งนั้นเป็นอนัตตา</p>
      <p className="text-slate-500 italic">สิ่งใดเป็นอนัตตา สิ่งนั้นท่านทั้งหลาย พึงเห็นด้วยปัญญา อันชอบตามความเป็นจริง อย่างนี้ว่า</p>
      <div className="bg-emerald-50/50 p-6 rounded-2xl border-l-4 border-emerald-500 space-y-3 shadow-inner">
        <p>ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง</p>
        <p>เกิดจากเหตุปัจจัย มาประชุมปรุงแต่งกันชั่วคราว แล้วแตกสลาย ไม่มีตัวตนเป็นของตนเอง</p>
        <p className="text-emerald-700 font-bold">ไม่ควรเห็นว่าสิ่งนั้น เป็นของเรา เป็นเรา เป็นตัวตนของเรา ไม่เที่ยงเกิดดับ ดับไม่เหลือ</p>
        <p className="text-emerald-800 font-bold underline decoration-2 underline-offset-8">ว่างเปล่าจากตนหรือจากของๆตน</p>
      </div>
    </div>
  );

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">วิปัสสนาภาวนาเพิ่มเติม</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">ความเป็นทุกข์แห่งอายตนะภายใน</h2>
          <p className="text-slate-500 text-lg italic">"จักษุเป็นทุกข์..."</p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* บทนำ */}
        <div className="mb-12 text-center">
          <p className="text-xl text-slate-600 font-medium">พระพุทธเจ้าตรัสไว้ว่า</p>
        </div>

        {/* รายการพิจารณาอายตนะภายใน 6 */}
        <div className="space-y-10">
          {sensesData.map((s, i) => (
            <IntrospectionCard key={i}>
              <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-5">
                <div className={`w-12 h-12 ${s.color} rounded-2xl flex items-center justify-center shadow-sm text-xl`}>
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800">{s.name}เป็นทุกข์</h3>
              </div>
              <div className="text-xl md:text-2xl leading-relaxed">
                {refrain}
              </div>
            </IntrospectionCard>
          ))}
        </div>

        {/* ส่วนสรุป: การหลุดพ้นของอริยสาวก */}
        <div className="mt-16">
          <IntrospectionCard highlight={true}>
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaQuoteLeft className="text-emerald-200 text-4xl opacity-50" />
              <p className="text-2xl md:text-3xl font-medium leading-relaxed text-white">
                อริยสาวก ผู้ได้สดับแล้วเห็นอยู่อย่างนี้ <br />
                ย่อมเบื่อหน่ายแม้ในจักษุ ย่อมเบื่อหน่ายแม้ในหู ย่อมเบื่อหน่ายแม้ในจมูก <br />
                ย่อมเบื่อหน่ายแม้ในลิ้น ย่อมเบื่อหน่ายแม้ในกาย ย่อมเบื่อหน่ายแม้ในใจ
              </p>
              
              <div className="bg-white/10 p-8 rounded-3xl border border-white/20 w-full space-y-4">
                <p className="text-xl text-emerald-100">เมื่อเบื่อหน่ายย่อมคลายกำหนัด เพราะคลายกำหนัดย่อมหลุดพ้น</p>
                <p className="text-2xl font-bold text-white">เมื่อหลุดพ้นแล้วย่อมมีญาณหยั่งรู้ว่าหลุดพ้นแล้ว</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-left">
                {[
                  "รู้ชัดว่าชาติสิ้นแล้ว",
                  "พรหมจรรย์อยู่จบแล้ว",
                  "กิจที่ควรทำ ทำเสร็จแล้ว",
                  "กิจอื่นเพื่อความเป็นอย่างนี้มิได้มี"
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-emerald-700/50 p-4 rounded-xl border border-emerald-500/30">
                    <FaCheckDouble className="text-emerald-300" />
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
            href="/extra/anicca-dukkha-anatta/lesson-03" 
            className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-emerald-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: ความเป็นอนัตตาแห่งอายตนะภายใน
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}