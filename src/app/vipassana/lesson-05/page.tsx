// src/app/vipassana/lesson-05/page.tsx
import IntrospectionCard from "@/components/ui/IntrospectionCard";
import Link from "next/link";
import { 
  FaArrowRight, FaLink, FaDna, FaCompass, 
  FaEye, FaEarListen, FaWind, FaUtensils, FaHandPointer, FaBrain,
  FaUserSecret, FaCommentDots, FaHandBackFist, FaCircleQuestion
} from "react-icons/fa6";
import { FaWalking } from "react-icons/fa"

export default function Lesson0105() {
  // 1. ขันธ์ 5 แบบเหตุปัจจัย
  const aggregateChain = [
    { title: "รูป -> เวทนา", cause: "รูปร่างกาย", effect: "เวทนาความพอใจไม่พอใจ" },
    { title: "เวทนา -> สัญญา", cause: "เวทนาความพอใจไม่พอใจ", effect: "สัญญาความจำ" },
    { title: "สัญญา -> สังขาร", cause: "สัญญาความจำ", effect: "สังขารความคิด" },
    { title: "สังขาร -> วิญญาณ", cause: "สังขารความคิด", effect: "วิญญาณความรู้" },
  ];

  // 2. หมวดหมู่ธรรมชาติ
  const natureCategories = [
    { title: "อวัยวะภายใน ภายนอก", icon: <FaDna /> },
    { title: "อายตนะภายใน (ตา หู จมูก ลิ้น กาย ใจ)", icon: <FaCompass /> },
    { title: "อายตนะภายนอก (รูป เสียง กลิ่น รส สัมผัส ธรรมารมณ์)", icon: <FaLink /> },
    { title: "ธาตุ 4 (ดิน น้ำ ลม ไฟ)", icon: <FaHandPointer /> },
  ];

  // 3. อินทรีย์ 6 (เพิ่มฟิลด์ organ เพื่อแก้ปัญหาคำขาด)
  const sensoryImpact = [
    { action: "ตาเห็นรูป", organ: "ตา", type: "รูปธรรม", icon: <FaEye />, color: "text-blue-600" },
    { action: "หูได้ยินเสียง", organ: "หู", type: "รูปธรรม", icon: <FaEarListen />, color: "text-emerald-600" },
    { action: "จมูกได้กลิ่น", organ: "จมูก", type: "รูปธรรม", icon: <FaWind />, color: "text-orange-600" },
    { action: "ลิ้นได้รส", organ: "ลิ้น", type: "รูปธรรม", icon: <FaUtensils />, color: "text-rose-600" },
    { action: "กายสัมผัส", organ: "กาย", type: "รูปธรรม", icon: <FaHandPointer />, color: "text-indigo-600" },
    { action: "ใจคิดนึก", organ: "ใจ", type: "นามธรรม", icon: <FaBrain />, color: "text-purple-600" },
  ];

  // 4. มโนกรรมและการกระทำ
  const actions = [
    { label: "มโนกรรม", icon: <FaBrain /> },
    { label: "ตัวกู ของกู", icon: <FaUserSecret /> },
    { label: "ความอวดดี", icon: <FaArrowRight className="-rotate-45" /> },
    { label: "ความอิจฉาริษยา", icon: <FaArrowRight className="rotate-45" /> },
    { label: "ปากพูด", icon: <FaCommentDots /> },
    { label: "เท้าเดิน", icon: <FaWalking /> },
    { label: "มือจับ", icon: <FaHandBackFist /> },
  ];

  const natureRefrain = "ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง เกิดจากเหตุปัจจัยมาประชุมปรุงแต่งชั่วคราว แล้วแตกสลาย ไม่มีตัวตนเป็นของตนเอง ไม่ควรไปยึดมั่นถือมั่น ว่าสิ่งนั้นเป็นของเรา เป็นเรา เป็นตัวตนของเรา ไม่เที่ยงเกิดดับ";

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-dhamma-blue font-bold tracking-widest uppercase text-sm">วิปัสสนาภาวนา</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">การพิจารณาอินทรีย์ 6 และขันธ์ 5</h2>
          <div className="w-24 h-1 bg-dhamma-blue mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนที่ 1: ขันธ์ 5 แบบเหตุปัจจัย */}
        <IntrospectionCard highlight={true} title="พิจารณาเหตุปัจจัยของขันธ์ 5">
          <p className="text-center text-xl mb-8 opacity-90 leading-relaxed">ตัวฉันไม่เที่ยงเกิดดับ ตัวฉันคือ รูป เวทนา สัญญา สังขาร วิญญาณ ไม่เที่ยง เป็นทุกข์ เป็นอนัตตา</p>
          <div className="space-y-8">
            {aggregateChain.map((item, i) => (
              <div key={i} className="bg-white/10 p-6 rounded-2xl border border-white/20">
                <p className="text-xl md:text-2xl leading-relaxed">
                  <span className="font-bold">{item.cause}ไม่เที่ยง</span> เป็นเหตุเป็นปัจจัย ให้เกิด{item.effect} <br />
                  <span className="text-blue-200 italic">เมื่อเหตุปัจจัยไม่เที่ยง {item.effect}จะเที่ยงได้อย่างไร</span>
                </p>
              </div>
            ))}
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 2: หมวดหมู่ธรรมชาติ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {natureCategories.map((cat, i) => (
            <IntrospectionCard key={i}>
              <div className="flex items-center gap-4 mb-4 text-dhamma-blue">
                <span className="text-2xl">{cat.icon}</span>
                <h4 className="text-xl font-bold">{cat.title}</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">{natureRefrain}</p>
            </IntrospectionCard>
          ))}
        </div>

        {/* ส่วนที่ 3: อินทรีย์ 6 (แก้ไขส่วนที่คำขาดแล้ว) */}
        <div className="space-y-6 mb-16">
          <h4 className="text-center text-slate-400 font-medium mb-8 uppercase tracking-widest">พิจารณาสิ่งที่มากระทบสัมผัส</h4>
          {sensoryImpact.map((s, i) => (
            <IntrospectionCard key={i}>
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 ${s.color}`}>
                  {s.icon}
                </div>
                <p className="text-2xl font-bold text-slate-800">{s.action} รูปไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ</p>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed">
                สิ่งที่มากระทบสัมผัสทาง<span className="font-bold text-slate-800">{s.organ}</span> เป็นเพียง<span className="font-bold text-dhamma-blue">{s.type}ชนิดหนึ่ง</span> <br />
                เกิดจากเหตุปัจจัย มาประชุมปรุงแต่งชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ
              </p>
            </IntrospectionCard>
          ))}
          <IntrospectionCard highlight={true}>
            <p className="text-xl md:text-2xl text-center leading-relaxed">
              สิ่งทั้งปวงที่มากระทบสัมผัส ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง <br />
              {natureRefrain}
            </p>
          </IntrospectionCard>
        </div>

        {/* ส่วนที่ 4: มโนกรรมและการกระทำ */}
        <div className="space-y-4 mb-16">
          <h4 className="text-center text-slate-400 font-medium mb-8 uppercase tracking-widest">พิจารณากรรมและการกระทำ</h4>
          {actions.map((item, i) => (
            <IntrospectionCard key={i}>
              <div className="flex items-center gap-4 mb-4 text-dhamma-blue">
                <span className="text-xl">{item.icon}</span>
                <p className="text-2xl font-bold">{item.label}ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ</p>
              </div>
              <div className="space-y-2 text-xl text-slate-600 leading-relaxed">
                <p>{item.label}ไม่มีตัวตนเป็นของตนเอง กำลังจะแตกสลาย ไม่เที่ยงเกิดดับ</p>
                <p>ตัวฉันไม่เที่ยงเกิดดับ ตัวฉันไม่มีตัวตนเป็นของตนเอง กำลังจะแตกสลาย ไม่เที่ยงเกิดดับ</p>
              </div>
            </IntrospectionCard>
          ))}
        </div>

        {/* ส่วนที่ 5: มโนกรรมและการกระทำ (ถาม-ตอบ) */}
        <div className="space-y-4 mb-16 bg-blue-50 p-8 rounded-[3rem]">
          <h4 className="text-center text-blue-400 font-bold mb-8 uppercase tracking-widest flex items-center justify-center gap-2">
            <FaCircleQuestion /> ฝึกเห็นตามจริง
          </h4>
          {actions.map((item, i) => (
            <IntrospectionCard key={i} highlight={i % 2 === 0}>
              <p className="text-xl font-bold mb-4">{item.label}ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ</p>
              <div className="space-y-3 text-lg opacity-90 leading-relaxed">
                <p>{item.label}ไม่มีตัวตนเป็นของตนเอง กำลังจะแตกสลาย ไม่เที่ยงเกิดดับ <span className="font-bold text-dhamma-gold">จริงไหม...จริง</span></p>
                <p>ตัวฉันไม่เที่ยงเกิดดับ ตัวฉันไม่มีตัวตนเป็นของตนเอง กำลังจะแตกสลาย ไม่เที่ยงเกิดดับ <span className="font-bold text-dhamma-gold">จริงไหม...จริง</span></p>
              </div>
            </IntrospectionCard>
          ))}
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/vipassana/lesson-06" 
            className="inline-flex items-center gap-3 bg-dhamma-blue hover:bg-blue-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-blue-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: ฝึกเอาความจริงไปใช้
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}