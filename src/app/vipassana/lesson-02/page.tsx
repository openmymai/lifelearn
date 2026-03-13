// src/app/vipassana/lesson-02/page.tsx
import IntrospectionCard from "@/components/ui/IntrospectionCard";
import Link from "next/link";
import { FaArrowRight, FaRegDotCircle } from "react-icons/fa";

export default function Lesson0102() {
  // ส่วนที่ 1: สรุปอินทรีย์ 6
  const sensesSummary = [
    "ตาเห็นรูป รูปไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ",
    "หูได้ยินเสียง เสียงไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ",
    "จมูกได้กลิ่น กลิ่นไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ",
    "ลิ้นได้รส รสไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ",
    "กายสัมผัส ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ",
    "ใจคิดนึก ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ",
  ];

  // ส่วนที่ 2: อินทรีย์ 6 โดยละเอียด
  const detailedSenses = [
    { subject: "ตาเห็นรูป", object: "รูป" },
    { subject: "หูได้ยินเสียง", object: "เสียง" },
    { subject: "จมูกได้กลิ่น", object: "กลิ่น" },
    { subject: "ลิ้นได้รส", object: "รส" },
    { subject: "กายสัมผัส", object: "สัมผัส" },
    { subject: "ใจคิดนึก", object: "ความคิด" },
  ];

  // ส่วนที่ 3: ร่างกายและสิ่งของ
  const bodyAndItems = [
    "ใบหน้า", "คอ", "อก", "ท้อง", "แขน", "ขา", 
    "เสื้อ", "กระดุม", "กางเกง", "ซิป", "ตะขอ", "ถุงเท้า"
  ];

  const causeEffectRefrain = "เกิดจากเหตุปัจจัย มาประชุมปรุงแต่งชั่วคราว แล้วแตกสลาย";
  const selfRefrain = "ตัวฉันไม่เที่ยงเกิดดับ ตัวฉันเกิดจากเหตุปัจจัย มาประชุมปรุงแต่งชั่วคราว แล้วแตกสลาย";

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-dhamma-blue font-bold tracking-widest uppercase text-sm">วิปัสสนาภาวนา</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">ตามทันตัวเรา</h2>
          <p className="text-slate-500 text-lg">พิจารณาเหตุปัจจัยและการแตกสลาย</p>
          <div className="w-24 h-1 bg-dhamma-blue mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนที่ 1: สรุปอินทรีย์ 6 (Highlight Card) */}
        <IntrospectionCard highlight={true}>
          <div className="grid gap-4 text-center">
            {sensesSummary.map((text, i) => (
              <p key={i} className="text-xl md:text-2xl font-medium">{text}</p>
            ))}
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 2: พิจารณาอินทรีย์ 6 (เหตุปัจจัย) */}
        <div className="space-y-4 mb-12">
          <h4 className="text-center text-slate-400 font-medium mb-8 uppercase tracking-tighter">พิจารณาอินทรีย์ 6</h4>
          {detailedSenses.map((item, i) => (
            <IntrospectionCard key={i}>
              <p className="text-2xl font-bold text-dhamma-blue mb-4 flex items-center gap-3">
                <FaRegDotCircle className="text-blue-300 text-sm" />
                {item.subject}
              </p>
              <div className="space-y-4 text-xl text-slate-600 leading-relaxed">
                <p>
                  <span className="font-bold text-slate-800">{item.object}ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ</span>
                </p>
                <p>
                  {item.object}{causeEffectRefrain}
                </p>
                <p className="text-blue-700 font-medium">
                  {selfRefrain}
                </p>
              </div>
            </IntrospectionCard>
          ))}
        </div>

        {/* ส่วนที่ 3: พิจารณาร่างกายและสิ่งที่สวมใส่ */}
        <div className="space-y-4 mb-12">
          <h4 className="text-center text-slate-400 font-medium mb-8 uppercase tracking-tighter">พิจารณาร่างกายและสิ่งของ</h4>
          {bodyAndItems.map((name, i) => (
            <IntrospectionCard key={i}>
              <p className="text-2xl font-bold text-dhamma-blue mb-4 flex items-center gap-3">
                <FaRegDotCircle className="text-blue-300 text-sm" />
                {name}
              </p>
              <div className="space-y-4 text-xl text-slate-600 leading-relaxed">
                <p>
                  <span className="font-bold text-slate-800">{name}ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ</span>
                </p>
                <p>
                  {name}{causeEffectRefrain}
                </p>
                <p className="text-blue-700 font-medium">
                  {selfRefrain}
                </p>
              </div>
            </IntrospectionCard>
          ))}
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/vipassana/lesson-03" 
            className="inline-flex items-center gap-3 bg-dhamma-blue hover:bg-blue-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-blue-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: ฝึกเห็นตามจริง
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}