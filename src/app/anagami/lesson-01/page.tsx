// src/app/anagami/lesson-01/page.tsx
import IntrospectionCard from "@/components/ui/IntrospectionCard";
import Link from "next/link";
import { 
  FaEye, 
  FaEarListen, 
  FaWind, 
  FaUtensils, 
  FaHandPointer, 
  FaBrain, 
  FaArrowRight 
} from "react-icons/fa6";

export default function AnagamiLesson01() {
  const introspectionData = [
    {
      action: "ตาเห็นรูป",
      icon: <FaEye className="text-lg" />,
      color: "bg-amber-50 text-amber-600" // ใช้โทนสีทอง/น้ำตาลทองสำหรับหลักสูตรอนาคามี
    },
    {
      action: "หูได้ยินเสียง",
      icon: <FaEarListen className="text-lg" />,
      color: "bg-amber-50 text-amber-600"
    },
    {
      action: "จมูกได้กลิ่น",
      icon: <FaWind className="text-lg" />,
      color: "bg-amber-50 text-amber-600"
    },
    {
      action: "ลิ้นได้รส",
      icon: <FaUtensils className="text-lg" />,
      color: "bg-amber-50 text-amber-600"
    },
    {
      action: "กายสัมผัส",
      icon: <FaHandPointer className="text-lg" />,
      color: "bg-amber-50 text-amber-600"
    },
    {
      action: "ใจคิดนึก",
      icon: <FaBrain className="text-lg" />,
      color: "bg-amber-50 text-amber-600"
    },
  ];

  const refrain = "โลกและชีวิต กระทบสัมผัส เป็นธรรมชาติชนิดหนึ่ง ไม่เที่ยงเกิดดับ";
  const finalRefrain = "ดับไม่เหลือ";

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header - ปรับเส้นใต้เป็นสีทอง */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">หลักสูตรอนาคามีผล</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">วิปัสสนาภาวนา</h2>
          <p className="text-slate-500 text-lg">พิจารณาขันธ์ 5 อินทรีย์ 6 (ระดับละเอียด)</p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* รายการพิจารณาแยกตามอินทรีย์ */}
        <div className="space-y-8">
          {introspectionData.map((item, i) => (
            <IntrospectionCard key={i}>
              <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-5">
                <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center shadow-sm`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800">{item.action}</h3>
              </div>

              <div className="space-y-8 text-xl md:text-2xl leading-relaxed">
                {/* ส่วนที่ 1: โลกและชีวิต */}
                <div className="relative pl-6 border-l-2 border-slate-200">
                  <p className="text-slate-700">
                    <span className="font-bold text-dhamma-blue">{item.action}</span> {refrain} 
                    <span className="ml-2 text-amber-600 font-bold underline decoration-2 underline-offset-4">
                      {finalRefrain}
                    </span>
                  </p>
                </div>

                {/* ส่วนที่ 2: ตัวฉัน */}
                <div className="relative pl-6 border-l-2 border-amber-400 bg-amber-50/30 py-4 rounded-r-xl">
                  <p className="text-slate-700">
                    <span className="font-bold text-amber-700">ตัวฉัน</span> {refrain} 
                    <span className="ml-2 text-amber-600 font-bold underline decoration-2 underline-offset-4">
                      {finalRefrain}
                    </span>
                  </p>
                </div>
              </div>
            </IntrospectionCard>
          ))}
        </div>

        {/* Navigation Button - ปรับเป็นสีทอง/น้ำตาลทอง */}
        <div className="mt-20 text-center">
          <Link 
            href="/anagami/lesson-02" 
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