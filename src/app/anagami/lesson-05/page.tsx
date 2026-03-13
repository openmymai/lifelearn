// src/app/anagami/lesson-05/page.tsx
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
  FaInfinity
} from "react-icons/fa6";

export default function AnagamiLesson05() {
  const introspectionData = [
    {
      action: "ตาเห็นรูป",
      icon: <FaEye />,
      color: "text-amber-600"
    },
    {
      action: "หูได้ยินเสียง",
      icon: <FaEarListen />,
      color: "text-amber-600"
    },
    {
      action: "จมูกได้กลิ่น",
      icon: <FaWind />,
      color: "text-amber-600"
    },
    {
      action: "ลิ้นได้รส",
      icon: <FaUtensils />,
      color: "text-amber-600"
    },
    {
      action: "กายสัมผัส",
      icon: <FaHandPointer />,
      color: "text-amber-600"
    },
    {
      action: "ใจคิดนึก",
      icon: <FaBrain />,
      color: "text-amber-600"
    },
  ];

  const natureRefrain = "เป็นธรรมชาติชนิดหนึ่ง ไม่เที่ยงเกิดดับ";
  const finalCease = "ดับไม่เหลือ";

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">หลักสูตรอนาคามีผล</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">วิปัสสนาภาวนา</h2>
          <p className="text-slate-500 text-lg">พิจารณาขันธ์ 5 อินทรีย์ 6 (ระดับดับไม่เหลือ)</p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* รายการพิจารณาแยกตามอินทรีย์ */}
        <div className="space-y-10">
          {introspectionData.map((item, i) => (
            <IntrospectionCard key={i}>
              {/* หัวข้ออายตนะ */}
              <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-5">
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center shadow-sm text-xl">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800">{item.action}</h3>
              </div>

              <div className="space-y-4 text-xl md:text-2xl leading-relaxed">
                {/* บรรทัดที่ 1: โลกและชีวิต (ผ่านผัสสะ) */}
                <p className="text-slate-700">
                  <span className="font-bold text-amber-800">{item.action}</span> โลกและชีวิต {natureRefrain} <span className="text-amber-600 font-bold underline decoration-2 underline-offset-4">{finalCease}</span>
                </p>

                {/* บรรทัดที่ 2: ตัวฉัน */}
                <p className="text-slate-700">
                  <span className="font-bold text-dhamma-blue">ตัวฉัน</span> โลกและชีวิต {natureRefrain} <span className="text-amber-600 font-bold underline decoration-2 underline-offset-4">{finalCease}</span>
                </p>

                {/* บรรทัดที่ 3: โลกและชีวิต (สภาวะรวม) */}
                <p className="text-slate-700">
                  โลกและชีวิต {natureRefrain} <span className="text-amber-600 font-bold underline decoration-2 underline-offset-4">{finalCease}</span>
                </p>

                {/* บรรทัดที่ 4: นามขันธ์ 4 (เน้นเป็นพิเศษ) */}
                <div className="mt-6 bg-slate-900 text-amber-100 p-6 rounded-2xl shadow-inner border-l-4 border-amber-500">
                  <p className="font-light">
                    <span className="font-bold text-white">เวทนา สัญญา สังขาร วิญญาณ</span> <br className="md:hidden" />
                    {natureRefrain} <span className="text-amber-400 font-bold">{finalCease}เหมือนกัน</span>
                  </p>
                </div>
              </div>
            </IntrospectionCard>
          ))}
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/anagami/lesson-06" 
            className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-amber-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}