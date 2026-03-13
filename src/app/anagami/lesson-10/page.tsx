// src/app/anagami/lesson-10/page.tsx
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
  FaLayerGroup
} from "react-icons/fa6";

export default function AnagamiLesson10() {
  const introspectionData = [
    { action: "ตาเห็นรูป", icon: <FaEye />, color: "text-amber-600" },
    { action: "หูได้ยินเสียง", icon: <FaEarListen />, color: "text-amber-600" },
    { action: "จมูกได้กลิ่น", icon: <FaWind />, color: "text-amber-600" },
    { action: "ลิ้นได้รส", icon: <FaUtensils />, color: "text-amber-600" },
    { action: "กายสัมผัส", icon: <FaHandPointer />, color: "text-amber-600" },
    { action: "ใจคิดนึก", icon: <FaBrain />, color: "text-amber-600" },
  ];

  const natureRefrain = "เป็นธรรมชาติชนิดหนึ่ง ไม่เที่ยงเกิดดับ ดับไม่เหลือ";
  const classificationRefrain = "โลกและชีวิตไม่ว่า เป็นอดีต อนาคต และปัจจุบัน ภายในหรือภายนอก หยาบหรือละเอียด เลวหรือประณีต ไกลหรือใกล้";
  const finalRefrain = "ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง ไม่เที่ยงเกิดดับ ดับไม่เหลือเหมือนกัน";

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">หลักสูตรอนาคามีผล</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">วิปัสสนาภาวนา</h2>
          <p className="text-slate-500 text-lg">พิจารณาขันธ์ 5 อินทรีย์ 6</p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* รายการพิจารณาแยกตามอายตนะ */}
        <div className="space-y-12">
          {introspectionData.map((item, i) => (
            <IntrospectionCard key={i}>
              {/* หัวข้ออายตนะ */}
              <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-5">
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center shadow-sm text-xl">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800">{item.action}</h3>
              </div>

              <div className="space-y-10 text-xl md:text-2xl leading-relaxed">
                
                {/* ส่วนที่ 1: โลกและชีวิต (ผ่านผัสสะ) */}
                <div className="space-y-4">
                  <p className="text-slate-700">
                    <span className="font-bold text-amber-800">{item.action}</span> โลกและชีวิต {natureRefrain}
                  </p>
                  <p className="text-slate-700">
                    โลกและชีวิต {natureRefrain}
                  </p>
                  <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-slate-300 italic text-slate-500 text-lg md:text-xl">
                    {classificationRefrain}
                  </div>
                  <p className="text-amber-600 font-bold text-center pt-2">
                    {finalRefrain}
                  </p>
                </div>

                {/* เส้นคั่นบางๆ ระหว่างส่วน */}
                <div className="flex justify-center opacity-20">
                  <FaLayerGroup />
                </div>

                {/* ส่วนที่ 2: ตัวฉัน โลกและชีวิต */}
                <div className="space-y-4">
                  <p className="text-slate-700">
                    <span className="font-bold text-dhamma-blue">ตัวฉัน</span> โลกและชีวิต {natureRefrain}
                  </p>
                  <p className="text-slate-700">
                    โลกและชีวิต {natureRefrain}
                  </p>
                  <div className="bg-amber-50/50 p-6 rounded-2xl border-l-4 border-amber-400 italic text-amber-700/70 text-lg md:text-xl">
                    {classificationRefrain}
                  </div>
                  <p className="text-amber-600 font-bold text-center pt-2 underline decoration-2 underline-offset-8">
                    {finalRefrain}
                  </p>
                </div>

              </div>
            </IntrospectionCard>
          ))}
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/anagami/lesson-11" 
            className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-amber-200 hover:-translate-y-1"
          >
            โลกและชีวิตความรู้สึกเป็นอันเดียวกัน
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}