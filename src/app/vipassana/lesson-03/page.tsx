// src/app/vipassana/lesson-03/page.tsx
import IntrospectionCard from "@/components/ui/IntrospectionCard";
import Link from "next/link";
import { FaArrowRight, FaRegDotCircle, FaCheckCircle } from "react-icons/fa";

export default function Lesson0103() {
  const senses = [
    { subject: "ตาเห็นรูป", object: "รูป", senseType: "ตา" },
    { subject: "หูได้ยินเสียง", object: "เสียง", senseType: "หู" },
    { subject: "จมูกได้กลิ่น", object: "กลิ่น", senseType: "จมูก" },
    { subject: "ลิ้นได้รส", object: "รส", senseType: "ลิ้น" },
    { subject: "กายสัมผัส", object: "สัมผัส", senseType: "กาย" },
    { subject: "ใจคิดนึก", object: "ความคิด", senseType: "ใจ" },
  ];

  const aggregates = [
    { name: "รูป ร่างกาย", detail: "" },
    { name: "เวทนา", detail: "ความพอใจ ไม่พอใจ" },
    { name: "สัญญา", detail: "ความจำ" },
    { name: "สังขาร", detail: "ความคิด" },
    { name: "วิญญาณ", detail: "ความรู้" },
  ];

  const natureRefrain = "เป็นธรรมชาติชนิดหนึ่ง เกิดจากเหตุปัจจัย มาประชุมปรุงแต่งชั่วคราว แล้วแตกสลาย ไม่เที่ยง เป็นทุกข์ เป็นอนัตตา ไม่มีตัวตนเป็นของตนเอง ไม่ควรไปยึดมั่นถือมั่นว่า สิ่งนั้นเป็นของเรา เป็นเรา เป็นตัวตนของเรา ไม่เที่ยงเกิดดับ";

  const detailedRefrain = "อย่างใดอย่างหนึ่ง ที่เป็นอดีต อนาคต และปัจจุบัน ภายในหรือภายนอก หยาบหรือละเอียด เลวหรือประณีต ไกลหรือใกล้ ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง เกิดจากเหตุปัจจัย มาประชุมปรุงแต่งชั่วคราว แล้วแตกสลาย ไม่มีตัวตนเป็นของตนเอง ไม่ควรไปยึดมั่นถือมั่น ว่าสิ่งนั้นเป็นของเรา เป็นเรา เป็นตัวตนของเรา ไม่เที่ยงเกิดดับ";

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-dhamma-blue font-bold tracking-widest uppercase text-sm">วิปัสสนาภาวนา</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">ฝึกเห็นตามจริง</h2>
          <p className="text-slate-500 text-lg">การพิจารณาด้วยปัญญาและการจดจ่อ</p>
          <div className="w-24 h-1 bg-dhamma-blue mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนที่ 1: ฝึกเห็นตามจริง (จริงไหม—-จริง) */}
        <div className="space-y-4 mb-16">
          <h4 className="text-center text-slate-400 font-medium mb-8 uppercase tracking-widest">ส่วนที่ ๑: ฝึกถาม-ตอบในใจ</h4>
          {senses.map((s, i) => (
            <IntrospectionCard key={i}>
              <p className="text-2xl font-bold text-dhamma-blue mb-6">{s.subject} {s.object}ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ</p>
              <div className="space-y-4 text-xl text-slate-600 leading-relaxed">
                <p>สิ่งที่มาปรากฏทาง{s.senseType} เป็นเพียงแค่{s.object}</p>
                <p>เกิดจากเหตุปัจจัย มาประชุมกันชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ <span className="text-dhamma-gold font-bold ml-2">จริงไหม?—จริง</span></p>
                <p className="pt-4 border-t border-slate-100">ตัวฉันไม่เที่ยงเกิดดับ ตัวฉันเป็นเพียงรูป</p>
                <p>เกิดจากเหตุปัจจัย มาประชุมกันชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ <span className="text-dhamma-gold font-bold ml-2">จริงไหม?—จริง</span></p>
              </div>
            </IntrospectionCard>
          ))}
        </div>

        {/* ส่วนที่ 2: ฝึกจดจ่อการเกิดดับ (1...10) */}
        <div className="space-y-4 mb-16">
          <h4 className="text-center text-slate-400 font-medium mb-8 uppercase tracking-widest">ส่วนที่ ๒: ฝึกจดจ่อต่อเนื่อง</h4>
          {senses.map((s, i) => (
            <IntrospectionCard key={i} highlight={i % 2 === 0}>
              <p className="text-2xl font-bold mb-6">{s.subject} {s.object}ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ</p>
              <div className="space-y-4 text-xl leading-relaxed opacity-90">
                <p>สิ่งที่มาปรากฏทาง{s.senseType} เป็นเพียงแค่{s.object}</p>
                <p>เกิดจากเหตุปัจจัย มาประชุมกันชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ</p>
                <p className="pt-4 border-t border-white/20">ตัวฉันไม่เที่ยงเกิดดับ ตัวฉันเป็นเพียงรูป</p>
                <p>เกิดจากเหตุปัจจัย มาประชุมกันชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ</p>
                <p className="text-2xl font-mono tracking-[0.3em] font-bold mt-4 text-center">
                  1...2...3...4...5...6...7...8...9...10
                </p>
              </div>
            </IntrospectionCard>
          ))}
        </div>

        {/* ส่วนที่ 3: พิจารณาความเป็นอนัตตา */}
        <div className="space-y-4 mb-16">
          <h4 className="text-center text-slate-400 font-medium mb-8 uppercase tracking-widest">ส่วนที่ ๓: พิจารณาความเป็นอนัตตา</h4>
          {senses.map((s, i) => (
            <IntrospectionCard key={i}>
              <p className="text-2xl font-bold text-dhamma-blue mb-4">{s.subject} {s.object}ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ</p>
              <p className="text-xl text-slate-600 leading-relaxed">
                <span className="font-bold text-slate-800">{s.object}</span>{natureRefrain}
              </p>
            </IntrospectionCard>
          ))}
        </div>

        {/* ส่วนที่ 4: สรุปขันธ์ 5 (ไตรลักษณ์) */}
        <IntrospectionCard title="สรุปขันธ์ 5 โดยไตรลักษณ์">
          <div className="space-y-6">
            {aggregates.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <FaCheckCircle className="text-dhamma-blue mt-1 flex-shrink-0" />
                <p className="text-xl text-slate-700">
                  <span className="font-bold">{item.name}</span> {item.detail && `(${item.detail})`} ไม่เที่ยง เป็นทุกข์ เป็นอนัตตา ไม่มีตัวตนเป็นของตนเอง ไม่เที่ยงเกิดดับ
                </p>
              </div>
            ))}
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 5: พิจารณาขันธ์ 5 โดยละเอียด */}
        <div className="space-y-4 mb-16">
          <h4 className="text-center text-slate-400 font-medium mb-8 uppercase tracking-widest">ส่วนที่ ๔: พิจารณาขันธ์ 5 โดยละเอียด</h4>
          {aggregates.map((item, i) => (
            <IntrospectionCard key={i}>
              <p className="text-2xl font-bold text-dhamma-blue mb-4 flex items-center gap-3">
                <FaRegDotCircle className="text-blue-300 text-sm" />
                {item.name}
              </p>
              <p className="text-xl text-slate-600 leading-relaxed">
                {detailedRefrain}
              </p>
            </IntrospectionCard>
          ))}
        </div>

        {/* ส่วนที่ 6: อุปาทานขันธ์ 5 */}
        <IntrospectionCard highlight={true}>
          <p className="text-2xl md:text-3xl text-center leading-relaxed font-medium">
            อุปทานขันธ์ 5 เป็นธรรมชาติชนิดหนึ่ง <br />
            เกิดจากเหตุปัจจัย มาประชุมปรุงแต่งชั่วคราว แล้วแตกสลาย <br />
            ไม่มีตัวตนเป็นของตนเอง ไม่ควรไปยึดมั่นถือมั่น ว่าสิ่งนั้นเป็นของเรา เป็นเรา เป็นตัวตนของเรา ไม่เที่ยงเกิดดับ
          </p>
        </IntrospectionCard>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/vipassana/lesson-04" 
            className="inline-flex items-center gap-3 bg-dhamma-blue hover:bg-blue-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-blue-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: การพิจารณาอินทรีย์ 6
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}