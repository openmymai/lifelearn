// src/app/extra/anicca-dukkha-anatta/lesson-07/page.tsx
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
  FaCircleNodes
} from "react-icons/fa6";

export default function ExtraLesson07() {
  const introspectionData = [
    {
      action: "ตาเห็นรูปการเคลื่อนไหวทางตา",
      organ: "ตา",
      icon: <FaEye />,
      color: "text-emerald-600 bg-emerald-50"
    },
    {
      action: "หูได้ยินเสียงการเคลื่อนไหวทางหู",
      organ: "หู",
      icon: <FaEarListen />,
      color: "text-emerald-600 bg-emerald-50"
    },
    {
      action: "จมูกได้กลิ่นการเคลื่อนไหวทางจมูก",
      organ: "จมูก",
      icon: <FaWind />,
      color: "text-emerald-600 bg-emerald-50"
    },
    {
      action: "ลิ้นได้รสการเคลื่อนไหวทางลิ้น",
      organ: "ลิ้น",
      icon: <FaUtensils />,
      color: "text-emerald-600 bg-emerald-50"
    },
    {
      action: "กายสัมผัสการเคลื่อนไหวทางกาย",
      organ: "กาย",
      icon: <FaHandPointer />,
      color: "text-emerald-600 bg-emerald-50"
    },
    {
      action: "ใจคิดนึกการเคลื่อนไหวทางใจ",
      organ: "ใจ",
      icon: <FaBrain />,
      color: "text-emerald-600 bg-emerald-50"
    },
  ];

  // บทพิจารณาซ้ำ (Refrain) คงเนื้อหาเดิมทุกตัวอักษร
  const refrain = (
    <div className="space-y-6 mt-6">
      <p className="text-slate-600 text-xl leading-relaxed">
        เพราะโลกและชีวิตกระทบสัมผัสกัน เป็นธรรมชาติชนิดหนึ่ง<br />
        เกิดจากเหตุปัจจัย มาประชุมกันชั่วคราว แล้วแตกสลาย<br />
        ไม่มีตัวตนเป็นของตนเอง
      </p>
      
      <div className="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-500 shadow-inner">
        <p className="text-emerald-800 font-bold text-xl md:text-2xl leading-relaxed">
          ไม่ควรไปยึดมั่นถือมั่น ว่านั่นเป็นของเรา เป็นเรา เป็นตัวตนของเรา <br className="hidden md:block" />
          ไม่เที่ยงเกิดดับ <span className="text-emerald-600 underline decoration-2 underline-offset-8">ดับไม่เหลือ</span>
        </p>
      </div>

      <p className="text-center text-2xl font-bold text-emerald-900 pt-2">
        ว่างเปล่าจากตนหรือจากของของตน
      </p>
    </div>
  );

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">วิปัสสนาภาวนาเพิ่มเติม</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">ความเป็นอนัตตาแห่งอายตนะภายนอก</h2>
          <p className="text-slate-500 text-lg italic">"โลกและชีวิตกระทบสัมผัสกัน..."</p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* รายการพิจารณาแยกตามอายตนะ */}
        <div className="space-y-10">
          {introspectionData.map((item, i) => (
            <IntrospectionCard key={i}>
              {/* หัวข้ออายตนะ */}
              <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-5">
                <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center shadow-sm text-xl`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">{item.action} เกิดขึ้นแล้ว</h3>
                  <p className="text-sm text-emerald-600/60 uppercase tracking-wider font-medium flex items-center gap-2">
                    <FaCircleNodes size={12} />
                  </p>
                </div>
              </div>

              <div className="text-xl md:text-2xl leading-relaxed">
                {refrain}
              </div>
            </IntrospectionCard>
          ))}
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/extra/anicca-dukkha-anatta/lesson-08" 
            className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-emerald-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: ทรงแสดงธรรมเพื่อความเป็นผู้อยู่ผู้เดียว
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}