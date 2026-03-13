// src/app/anagami/lesson-08/page.tsx
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
  FaCircleQuestion
} from "react-icons/fa6";

export default function AnagamiLesson08() {
  const sensesData = [
    {
      title: "จักษุวิญญาณ",
      organ: "จักษุ",
      object: "รูป",
      vijnana: "จักษุวิญญาณ",
      samphassa: "จักษุสัมผัส",
      icon: <FaEye />,
      color: "text-amber-600"
    },
    {
      title: "โสตะวิญญาณ",
      organ: "หู",
      object: "เสียง",
      vijnana: "โสตวิญญาณ",
      samphassa: "โสตสัมผัส",
      icon: <FaEarListen />,
      color: "text-amber-600"
    },
    {
      title: "ฆานะวิญญาณ",
      organ: "จมูก",
      object: "กลิ่น",
      vijnana: "ฆานวิญญาณ",
      samphassa: "ฆานสัมผัส",
      icon: <FaWind />,
      color: "text-amber-600"
    },
    {
      title: "ชิวหาวิญญาณ",
      organ: "ลิ้น",
      object: "รส",
      vijnana: "ชิวหาวิญญาณ",
      samphassa: "ชิวหาสัมผัส",
      icon: <FaUtensils />,
      color: "text-amber-600"
    },
    {
      title: "กายวิญญาณ",
      organ: "กาย",
      object: "สัมผัส",
      vijnana: "กายวิญญาณ",
      samphassa: "กายสัมผัส",
      icon: <FaHandPointer />,
      color: "text-amber-600"
    },
    {
      title: "มโนวิญญาณ",
      organ: "ใจ",
      object: "ธรรมารมณ์",
      objectSpecial: "ธรรมทั้งหลายก็", // ฟิลด์พิเศษสำหรับบทท่องทางใจ
      vijnana: "มโนวิญญาณ",
      samphassa: "มโนสัมผัส",
      icon: <FaBrain />,
      color: "text-amber-600"
    },
  ];

  const impermanentRefrain = "ไม่เที่ยง มีความแปรปรวน มีความเป็นอย่างอื่น";
  const unstableRefrain = "หวั่นไหว และอาพาธ ไม่เที่ยง มีความแปรปรวน มีความเป็นอย่างอื่น";

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">หลักสูตรอนาคามีผล</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">วิปัสสนากำหนดรู้ส่วน 2 อย่าง</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนนำ */}
        <IntrospectionCard highlight={true}>
          <div className="flex items-center gap-4 mb-6">
            <FaCircleQuestion className="text-3xl text-amber-200" />
            <h3 className="text-2xl font-bold text-white">วิญญาณเกิดขึ้นอย่างไร?</h3>
          </div>
          <div className="text-xl md:text-2xl leading-relaxed text-white/90">
            <p>วิญญาณเกิดขึ้น เพราะอาศัยส่วนสอง</p>
            <p className="mt-2 font-light italic">วิญญาณเกิดขึ้น เพราะอาศัยส่วนสองเป็นอย่างไร</p>
          </div>
        </IntrospectionCard>

        <div className="h-12"></div>

        {/* รายการพิจารณาแยกตามอายตนะ */}
        <div className="space-y-12">
          {sensesData.map((s, i) => (
            <IntrospectionCard key={i}>
              <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-5">
                <div className={`w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center shadow-sm text-xl`}>
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800">{s.title}</h3>
              </div>

              <div className="space-y-6 text-xl leading-relaxed">
                {/* ส่วนที่ 1: การเกิดขึ้นของวิญญาณ (ปรับปรุง Logic ข้อความ) */}
                <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-amber-500">
                  <p className="font-bold text-amber-800 mb-4">
                    {s.vijnana} ย่อมเกิดขึ้น เพราะอาศัย{s.organ}และ{s.object}
                  </p>
                  <div className="space-y-2 text-slate-700">
                    <p><span className="font-semibold">{s.organ}</span>{impermanentRefrain}</p>
                    {/* ถ้าเป็นทางใจ ให้ใช้ "ธรรมทั้งหลายก็" ถ้าเป็นอย่างอื่นให้ใช้ชื่อ object ปกติ */}
                    <p>
                      <span className="font-semibold">
                        {s.objectSpecial ? s.objectSpecial : s.object}
                      </span>
                      {impermanentRefrain}
                    </p>
                    <p className="text-amber-700 font-medium italic">ส่วนสองอย่างนี้{unstableRefrain}</p>
                  </div>
                </div>

                {/* ส่วนที่ 2: ความไม่เที่ยงของวิญญาณ */}
                <div className="space-y-4">
                  <p className="font-bold text-slate-800">{s.vijnana}{impermanentRefrain}</p>
                  <p className="font-semibold text-slate-800">แม้เหตุปัจจัยเพื่อความเกิดขึ้น แห่ง{s.vijnana}ก็{impermanentRefrain}</p>
                  <p className="text-dhamma-blue font-bold italic">
                    ก็{s.vijnana}ที่เกิดขึ้นแล้ว เพราะอาศัยเหตุปัจจัยอันไม่เที่ยง จักเป็นของเที่ยงได้แต่ไหน
                  </p>
                </div>

                {/* ส่วนที่ 3: สัมผัส */}
                <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
                  <p className="text-slate-800 mb-4">
                    ความประจวบ ความประชุม ความพร้อมกันแห่งธรรมทั้งสามนี้แล เรียกว่า<span className="font-bold text-amber-700">{s.samphassa}</span>
                  </p>
                  <div className="space-y-2 text-slate-600">
                    <p>แม้{s.samphassa}ก็{impermanentRefrain}</p>
                    <p>แม้เหตุปัจจัยเพื่อความเกิดขึ้น แห่ง{s.samphassa}ก็{impermanentRefrain}</p>
                    <p className="text-amber-700 font-bold italic">
                      ก็{s.samphassa}ที่เกิดขึ้นแล้ว เพราะอาศัยปัจจัยอันไม่เที่ยง จักเป็นของเที่ยงได้แต่ไหน
                    </p>
                  </div>
                </div>

                {/* ส่วนที่ 4: ผลต่อเนื่อง */}
                <div className="pt-6 border-t border-slate-100">
                  <p className="text-slate-800 font-medium mb-4">
                    บุคคลอันผัสสะกระทบแล้วย่อมรู้สึก อันผัสสะกระทบแล้วย่อมคิด อันผัสสะกระทบแล้วย่อมจำ
                  </p>
                  <p className="text-amber-600 font-bold text-center bg-amber-50 py-4 rounded-xl shadow-inner">
                    แม้ธรรมเหล่านี้ก็{unstableRefrain} <br />
                    <span className="text-2xl underline decoration-2 underline-offset-8">ไม่เที่ยงเกิดดับ ดับไม่เหลือ</span>
                  </p>
                </div>

                {/* บทสรุปเฉพาะของมโนวิญญาณ */}
                {s.organ === "ใจ" && (
                  <div className="mt-8 p-6 bg-slate-900 text-white rounded-2xl text-center border-b-4 border-amber-500">
                    <p className="text-xl font-bold">
                      มโนวิญญาณย่อมเกิดขึ้น เพราะอาศัยส่วนสองอย่างด้วยประการฉะนี้แล
                    </p>
                  </div>
                )}
              </div>
            </IntrospectionCard>
          ))}
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/anagami/lesson-09" 
            className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-amber-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: กำหนดรู้ธรรมที่เนื่องด้วยอายตนะ 6
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}