// src/app/extra/paticcasamuppada/lesson-08/page.tsx
import IntrospectionCard from '@/components/ui/IntrospectionCard';
import Link from 'next/link';
import {
  FaArrowRight,
  FaUtensils,
  FaLink,
  FaTree,
  FaHandsPraying,
  FaArrowDownLong,
  FaQuoteLeft,
  FaCircleCheck,
  FaBowlFood,
} from 'react-icons/fa6';

export default function PaticcasamuppadaLesson08() {
  // ข้อมูลอาหาร 4 อย่าง
  const nutriments = [
    { id: 1, name: 'กวฬิงการาหาร', detail: 'หยาบหรือละเอียด' },
    { id: 2, name: 'ผัสสาหาร', detail: '' },
    { id: 3, name: 'มโนสัญเจตนาหาร', detail: '' },
    { id: 4, name: 'วิญญาณาหาร', detail: '' },
  ];

  // ข้อมูลสายเหตุปัจจัย (คงเนื้อหาเดิมทุกตัวอักษร)
  const causalChain = [
    { subject: 'อาหาร 4', cause: 'ตัณหา' },
    { subject: 'ตัณหา', cause: 'เวทนา' },
    { subject: 'เวทนา', cause: 'ผัสสะ' },
    { subject: 'ผัสสะ', cause: 'สฬายตนะ' },
    { subject: 'สฬายตนะ', cause: 'นามรูป' },
    { subject: 'นามรูป', cause: 'วิญญาณ' },
    { subject: 'วิญญาณ', cause: 'สังขาร' },
    { subject: 'สังขารเหล่านี้', cause: 'อวิชชา', isLast: true },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-bold tracking-widest uppercase text-sm">
            วิปัสสนาภาวนาเพิ่มเติม
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">
            อาหารสูตร
          </h2>
          <p className="text-slate-500 text-lg italic">
            ว่าด้วยอาหาร 4 อย่าง และเหตุเกิดแห่งกองทุกข์
          </p>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนที่ 1: บทนำ */}
        <IntrospectionCard>
          <div className="flex items-center gap-3 mb-6 text-cyan-700 border-b pb-4">
            <FaTree className="text-2xl" />
            <h3 className="text-2xl font-bold">ณ พระวิหารเชตวัน</h3>
          </div>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700 italic">
            <p>
              ข้าพเจ้าได้สดับมาอย่างนี้ สมัยหนึ่งพระผู้มีพระภาค ประทับอยู่ ณ พระวิหารเชตวัน
              อารามของท่านอนาถบิณฑิกเศรษฐี เขตพระนครสาวัตถี
            </p>
            <div className="bg-cyan-50 p-8 rounded-3xl border-l-4 border-cyan-500 not-italic shadow-inner">
              <p className="text-cyan-900 font-bold mb-4 flex items-center gap-2">
                <FaHandsPraying /> พระผู้มีพระภาคได้ตรัสว่า
              </p>
              <p className="text-2xl text-slate-800 leading-relaxed">
                ดูกรภิกษุทั้งหลาย อาหาร 4 เหล่านี้ย่อมเป็นไป เพื่อความดำรงอยู่ของหมู่สัตว์
                ผู้เกิดมาแล้ว หรือเพื่ออนุเคราะห์หมู่สัตว์ ผู้แสวงหาที่เกิด
              </p>
            </div>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 2: อาหาร 4 อย่าง */}
        <div className="my-12">
          <IntrospectionCard title="อาหาร 4 เป็นไฉน คือ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {nutriments.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-cyan-100 shadow-sm"
                >
                  <div className="w-10 h-10 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold">
                    {item.id}
                  </div>
                  <div className="text-xl">
                    <span className="font-bold text-slate-800">{item.name}</span>
                    {item.detail && (
                      <span className="text-slate-500 text-lg ml-2">{item.detail}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-600 mt-8 italic">
              อาหาร 4 เหล่านี้แลย่อมเป็นไป เพื่อความดำรงอยู่ของหมู่สัตว์ ผู้เกิดมาแล้ว
              หรือเพื่ออนุเคราะห์หมู่สัตว์ ผู้แสวงหาที่เกิด
            </p>
          </IntrospectionCard>
        </div>

        {/* ส่วนที่ 3: สายเหตุปัจจัย (The Chain) */}
        <div className="my-16 space-y-8">
          <h4 className="text-center text-slate-400 font-medium uppercase tracking-widest mb-10">
            สืบสาวเหตุปัจจัยแห่งอาหาร
          </h4>

          {causalChain.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <IntrospectionCard className="w-full mb-0">
                <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-slate-700">
                  <div className="text-center md:text-left">
                    <p className="text-slate-500 text-lg mb-2">
                      {idx === 0 ? 'ดูกรภิกษุทั้งหลาย' : ''} ก็{item.subject}นี้มีอะไรเป็นเหตุ
                      มีอะไรเป็นที่ตั้งขึ้น มีอะไรเป็นกำเนิด มีอะไรเป็นแดนเกิด
                    </p>
                    <div className="bg-cyan-50 p-6 rounded-2xl border border-cyan-100 inline-block w-full">
                      <p className="font-bold text-cyan-900">
                        {item.subject === 'สังขารเหล่านี้' ? 'สังขารทั้งหลาย' : item.subject}มี
                        <span className="text-cyan-600 underline decoration-2 underline-offset-8">
                          {item.cause}
                        </span>
                        เป็นเหตุ <br className="hidden md:block" />
                        มี{item.cause}เป็นที่ตั้งขึ้น มี{item.cause}เป็นกำเนิด มี
                        {item.cause === 'อวิชชา' ? 'วิชา' : item.cause}เป็นแดนเกิด
                      </p>
                    </div>
                  </div>
                </div>
              </IntrospectionCard>
              {!item.isLast && (
                <FaArrowDownLong className="text-cyan-200 text-3xl my-4 animate-pulse" />
              )}
            </div>
          ))}
        </div>

        {/* ส่วนที่ 4: บทสรุปสายเกิดและสายดับ */}
        <div className="mt-16 space-y-8">
          <IntrospectionCard highlight={true} className="bg-slate-900 border-cyan-500">
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaLink className="text-cyan-400 text-5xl" />
              <div className="space-y-8 text-xl md:text-2xl leading-relaxed text-white/90">
                <div className="space-y-4">
                  <p className="font-bold text-cyan-300">ดูกรภิกษุทั้งหลาย</p>
                  <p>
                    เพราะอวิชชาเป็นปัจจัยจึงมีสังขาร เพราะสังขารเป็นปัจจัยจึงมีวิญญาณ
                    ดังพรรณนามาฉะนี้
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-white">
                    ความเกิดขึ้นแห่งกองทุกข์ทั้งมวลนี้ ย่อมมีด้วยประการอย่างนี้
                  </p>
                </div>

                <div className="w-24 h-px bg-white/20 mx-auto"></div>

                <div className="space-y-4">
                  <p className="italic text-cyan-100">
                    ก็เพราะอวิชชานั่นแหละดับ ด้วยการสำรอกโดยไม่เหลือ สังขารจึงดับ
                    เพราะสังขารดับวิญญาณจึงดับ
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-cyan-400 underline decoration-cyan-500 underline-offset-8">
                    ความดับแห่งกองทุกข์ทั้งมวลนี้ ย่อมมีด้วยประการอย่างนี้
                  </p>
                </div>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link
            href="/extra/paticcasamuppada/lesson-09"
            className="inline-flex items-center gap-3 bg-cyan-600 hover:bg-cyan-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-cyan-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: ติมพรุกขสูตร
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
