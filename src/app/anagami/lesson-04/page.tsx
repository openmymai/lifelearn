// src/app/anagami/lesson-04/page.tsx
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

export default function AnagamiLesson04() {
  const introspectionData = [
    {
      action: "ตาเห็นรูป",
      object: "รูป",
      senseType: "ตา",
      icon: <FaEye />,
      color: "text-amber-600"
    },
    {
      action: "หูได้ยินเสียง",
      object: "เสียง",
      senseType: "หู",
      icon: <FaEarListen />,
      color: "text-amber-600"
    },
    {
      action: "จมูกได้กลิ่น",
      object: "กลิ่น",
      senseType: "จมูก",
      icon: <FaWind />,
      color: "text-amber-600"
    },
    {
      action: "ลิ้นได้รส",
      object: "รส",
      senseType: "ลิ้น",
      icon: <FaUtensils />,
      color: "text-amber-600"
    },
    {
      action: "กายสัมผัส",
      object: "สัมผัส",
      senseType: "กาย",
      icon: <FaHandPointer />,
      color: "text-amber-600"
    },
    {
      action: "ใจคิดนึก",
      object: "ความคิด",
      senseType: "ใจคิดนึก",
      icon: <FaBrain />,
      color: "text-amber-600"
    },
  ];

  const causeRefrain = "เกิดจากเหตุปัจจัย มาประชุมปรุงแต่งกันชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ";
  const finalCease = "ดับไม่เหลือ";

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">หลักสูตรอนาคามีผล</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">กำหนดรู้อินทรีย์ 6</h2>
          <p className="text-slate-500 text-lg">พิจารณาตามความเป็นจริงเพื่อถอนความยึดมั่นในสมมติ</p>
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

              <div className="space-y-6 text-xl md:text-2xl leading-relaxed">
                {/* ส่วนที่ 1: สภาวะธรรมชาติ */}
                <p className="text-slate-700">
                  <span className="font-bold text-amber-800">{item.action}</span> {item.object}เป็นธรรมชาติชนิดหนึ่ง
                </p>
                <p className="text-slate-600 italic text-lg md:text-xl">
                  {causeRefrain} <span className="text-amber-600 font-bold underline decoration-2 underline-offset-4">{finalCease}</span>
                </p>

                {/* ส่วนที่ 2: การถอนสมมติ (Highlight Box) */}
                <div className="bg-slate-900 text-amber-100 p-8 rounded-3xl shadow-inner relative overflow-hidden">
                  <FaLayerGroup className="absolute right-4 bottom-4 text-white/5 text-6xl" />
                  <p className="text-center font-light leading-relaxed relative z-10">
                    ไม่มีตัวตน สัตว์ บุคคล ชื่อ สิ่งของ <br />
                    ใน{item.object === "ความคิด" ? "ใจคิดนึก" : item.object}ที่{item.object === "ความคิด" ? "คิดนึก" : item.senseType === "ตา" ? "เห็น" : item.senseType === "หู" ? "ได้ยิน" : item.senseType === "จมูก" ? "ได้กลิ่น" : item.senseType === "ลิ้น" ? "ได้รส" : "สัมผัส"}
                  </p>
                </div>

                {/* ส่วนที่ 3: บทสรุปความจริง */}
                <p className="text-center text-dhamma-blue font-bold pt-4">
                  ความจริงเป็นธรรมชาติชนิดหนึ่ง <br />
                  <span className="text-amber-600">ไม่เที่ยงเกิดดับ {finalCease}</span>
                </p>
              </div>
            </IntrospectionCard>
          ))}
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/anagami/lesson-05" 
            className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-amber-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: พิจารณาขันธ์ 5 อินทรีย์ 6
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}