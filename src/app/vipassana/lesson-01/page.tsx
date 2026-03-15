// src/app/vipassana/lesson-01/page.tsx
import IntrospectionCard from '@/components/ui/IntrospectionCard';
import Link from 'next/link';
import { FaArrowRight, FaRegDotCircle } from 'react-icons/fa';

export default function Lesson0101() {
  const sensesSummary = [
    'ตาเห็นรูป รูปไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ',
    'หูได้ยินเสียง เสียงไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ',
    'จมูกได้กลิ่น กลิ่นไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ',
    'ลิ้นได้รส รสไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ',
    'กายสัมผัส ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ',
    'ใจคิดนึก ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ',
  ];

  const detailedSenses = [
    { subject: 'ตาเห็นรูป', object: 'รูป' },
    { subject: 'หูได้ยินเสียง', object: 'เสียง' },
    { subject: 'จมูกได้กลิ่น', object: 'กลิ่น' },
    { subject: 'ลิ้นได้รส', object: 'รส' },
    { subject: 'กายสัมผัส', object: 'สัมผัส' },
    { subject: 'ใจคิดนึก', object: 'ความคิด' },
  ];

  const aggregates = [
    { name: 'รูป', detail: 'ร่างกาย' },
    { name: 'เวทนา', detail: 'ความพอใจไม่พอใจ' },
    { name: 'สัญญา', detail: 'ความจำ' },
    { name: 'สังขาร', detail: 'ความคิด' },
    { name: 'วิญญาณ', detail: 'ความรู้' },
  ];

  // Refrain สำหรับอินทรีย์ 6 (มี ไม่เที่ยง เป็นทุกข์ เป็นอนัตตา)
  const sensesRefrain =
    'เป็นธรรมชาติชนิดหนึ่ง เกิดจากเหตุปัจจัย มาประชุมปรุงแต่งชั่วคราว แล้วแตกสลาย ไม่เที่ยง เป็นทุกข์ เป็นอนัตตา ไม่มีตัวตนเป็นของตนเอง ไม่ควรไปยึดมั่นถือมั่นว่า สิ่งนั้นเป็นของเรา เป็นเรา เป็นตัวตนของเรา ไม่เที่ยงเกิดดับ';

  // Refrain สำหรับขันธ์ 5 (ไม่มี ไม่เที่ยง เป็นทุกข์ เป็นอนัตตา)
  const aggregatesRefrain =
    'ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง เกิดจากเหตุปัจจัย มาประชุมปรุงแต่งชั่วคราว แล้วแตกสลาย ไม่มีตัวตนเป็นของตนเอง ไม่ควรไปยึดมั่นถือมั่น ว่าสิ่งนั้นเป็นของเรา เป็นเรา เป็นตัวตนของเรา ไม่เที่ยงเกิดดับ';

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-dhamma-blue font-bold tracking-widest uppercase text-sm">
            วิปัสสนาภาวนา
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">
            พิจารณาขันธ์ 5 และอินทรีย์ 6
          </h2>
          <p className="text-slate-500 text-lg">พิจารณาขันธ์ 5 และอินทรีย์ 6</p>
          <div className="w-24 h-1 bg-dhamma-blue mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนที่ 1: สรุปอินทรีย์ 6 */}
        <IntrospectionCard highlight={true}>
          <div className="grid gap-4 text-center">
            {sensesSummary.map((text, i) => (
              <p key={i} className="text-xl md:text-2xl font-medium">
                {text}
              </p>
            ))}
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 2: พิจารณาอินทรีย์ 6 โดยละเอียด (เพิ่มส่วน "ตัวฉัน" แทรกเข้าไป) */}
        <div className="space-y-4 mb-12">
          <h4 className="text-center text-slate-400 font-medium mb-8 uppercase tracking-tighter">
            พิจารณาอินทรีย์ 6 โดยละเอียด
          </h4>
          {detailedSenses.map((item, i) => (
            <IntrospectionCard key={i}>
              <p className="text-2xl font-bold text-dhamma-blue mb-6 flex items-center gap-3 border-b border-slate-50 pb-4">
                <FaRegDotCircle className="text-blue-300 text-sm" />
                {item.subject} {item.object}ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ
              </p>

              <div className="space-y-6 text-xl text-slate-600 leading-relaxed">
                {/* พิจารณาสิ่งที่ถูกรู้ (รูป, เสียง, ฯลฯ) */}
                <p>
                  <span className="font-bold text-slate-800">{item.object}</span>
                  {sensesRefrain}
                </p>

                {/* พิจารณาตัวผู้รู้ (ตัวฉัน) - เพิ่มใหม่ตามคำแนะนำ */}
                <div className="pt-4 border-t border-slate-50">
                  <p>
                    <span className="font-bold text-blue-700">ตัวฉัน</span>
                    {sensesRefrain}
                  </p>
                </div>
              </div>
            </IntrospectionCard>
          ))}
        </div>

        {/* ส่วนที่ 3: พิจารณาขันธ์ 5 (เหมือนเดิม) */}
        <div className="space-y-4 mb-12">
          <h4 className="text-center text-slate-400 font-medium mb-8 uppercase tracking-tighter">
            พิจารณาขันธ์ 5
          </h4>
          {aggregates.map((item, i) => (
            <IntrospectionCard key={i}>
              <p className="text-2xl font-bold text-dhamma-blue mb-2 flex items-center gap-3">
                <FaRegDotCircle className="text-blue-300 text-sm" />
                {item.name}
              </p>
              {item.detail && <p className="text-lg text-slate-500 italic mb-3">{item.detail}</p>}
              <p className="text-xl text-slate-600 leading-relaxed">
                อย่างใดอย่างหนึ่ง ที่เป็นอดีต อนาคต และปัจจุบัน ภายในหรือภายนอก หยาบหรือละเอียด
                เลวหรือประณีต ไกลหรือใกล้ {aggregatesRefrain}
              </p>
            </IntrospectionCard>
          ))}
        </div>

        {/* ส่วนที่ 4: บทสรุปอุปาทานขันธ์ */}
        <IntrospectionCard title="บทสรุป">
          <p className="text-xl md:text-2xl text-center text-slate-800 leading-relaxed font-medium">
            อุปทานขันธ์ 5 เป็นธรรมชาติชนิดหนึ่ง
            <br />
            เกิดจากเหตุปัจจัย มาประชุมปรุงแต่งชั่วคราว แล้วแตกสลาย
            <br />
            ไม่มีตัวตนเป็นของตนเอง ไม่ควรไปยึดมั่นถือมั่น ว่าสิ่งนั้นเป็นของเรา เป็นเรา
            เป็นตัวตนของเรา ไม่เที่ยงเกิดดับ
          </p>
        </IntrospectionCard>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link
            href="/vipassana/lesson-02"
            className="inline-flex items-center gap-3 bg-dhamma-blue hover:bg-blue-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-blue-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: ตามทันตัวเรา
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
