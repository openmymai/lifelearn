// src/app/extra/paticcasamuppada/lesson-06/page.tsx
import IntrospectionCard from '@/components/ui/IntrospectionCard';
import Link from 'next/link';
import {
  FaArrowRight,
  FaLink,
  FaLinkSlash,
  FaTree,
  FaHandsPraying,
  FaCircleCheck,
  FaArrowDown,
  FaQuoteLeft,
} from 'react-icons/fa6';

export default function PaticcasamuppadaLesson06() {
  // ข้อมูลสายเกิด (Forward Order)
  const arisingLinks = [
    { cause: 'อวิชชา', effect: 'สังขาร' },
    { cause: 'สังขาร', effect: 'วิญญาณ' },
    { cause: 'วิญญาณ', effect: 'นามรูป' },
    { cause: 'นามรูป', effect: 'สฬายตนะ' },
    { cause: 'สฬายตนะ', effect: 'ผัสสะ' },
    { cause: 'ผัสสะ', effect: 'เวทนา' },
    { cause: 'เวทนา', effect: 'ตัณหา' },
    { cause: 'ตัณหา', effect: 'อุปาทาน' },
    { cause: 'อุปาทาน', effect: 'ภพ' },
    { cause: 'ภพ', effect: 'ชาติ' },
  ];

  // ข้อมูลสายดับ (Reverse Order)
  const cessationLinks = [
    { cause: 'อวิชชานั่นแหละ ดับด้วยการสำรอกโดยไม่เหลือ', effect: 'สังขาร' },
    { cause: 'สังขาร', effect: 'วิญญาณ' },
    { cause: 'วิญญาณ', effect: 'นามรูป' },
    { cause: 'นามรูป', effect: 'สฬายตนะ' },
    { cause: 'สฬายตนะ', effect: 'ผัสสะ' },
    { cause: 'ผัสสะ', effect: 'เวทนา' },
    { cause: 'เวทนา', effect: 'ตัณหา' },
    { cause: 'ตัณหา', effect: 'อุปาทาน' },
    { cause: 'อุปาทาน', effect: 'ภพ' },
    { cause: 'ภพ', effect: 'ชาติ' },
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
            เทศนาสูตร
          </h2>
          <p className="text-slate-500 text-lg italic">ว่าด้วยปฏิจจสมุปบาท (สายเกิดและสายดับ)</p>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนที่ 1: บทนำ (เหตุการณ์) */}
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
            <p>
              ณ ที่นั้นพระผู้มีพระภาค ตรัสเรียกภิกษุทั้งหลายว่า ดูกรภิกษุทั้งหลาย
              ภิกษุเหล่านั้นทูลรับพระผู้มีพระภาคว่า พระพุทธเจ้าข้า
              พระผู้มีพระภาคได้ตรัสพระพุทธดำรัสนี้ว่า
            </p>

            <div className="bg-cyan-50 p-8 rounded-3xl border-l-4 border-cyan-500 not-italic shadow-inner">
              <p className="text-cyan-900 font-bold mb-4 flex items-center gap-2">
                <FaHandsPraying /> ดูกรภิกษุทั้งหลาย
              </p>
              <p className="text-2xl text-slate-800 leading-relaxed">
                เราจักแสดงปฏิจจสมุปบาทแก่พวกเธอ พวกเธอจงฟังปฏิจจสมุปบาทนั้น
                จงใส่ใจให้ดีเถิดเราจักกล่าว
              </p>
              <p className="mt-4 text-slate-500">ภิกษุเหล่านั้นทูลรับพระผู้มีพระภาคแล้ว</p>
            </div>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 2: สายเกิด (สมุทัยวาร) */}
        <div className="my-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-cyan-800 flex items-center justify-center gap-3">
              <FaLink /> การเกิดขึ้นแห่งกองทุกข์
            </h3>
          </div>

          <IntrospectionCard>
            <div className="space-y-2 text-center mb-8">
              <p className="text-slate-500 italic">พระผู้มีพระภาคได้ตรัสว่า</p>
              <p className="text-xl font-bold text-cyan-700">
                ดูกรภิกษุทั้งหลาย ก็ปฏิจจสมุปบาทเป็นไฉน
              </p>
            </div>

            <div className="space-y-4">
              {arisingLinks.map((link, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="bg-white p-4 px-8 rounded-2xl border border-cyan-100 shadow-sm w-full text-center">
                    <p className="text-xl md:text-2xl text-slate-700">
                      เพราะ<span className="font-bold text-cyan-700">{link.cause}</span>
                      เป็นปัจจัยจึงมี<span className="font-bold text-cyan-700">{link.effect}</span>
                    </p>
                  </div>
                  <FaArrowDown className="text-cyan-200 my-1" />
                </div>
              ))}

              <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100 text-center space-y-3">
                <p className="text-xl md:text-2xl text-slate-700">
                  เพราะชาติเป็นปัจจัยจึงมีชรา และมรณะโสกะปริเทวะ ทุกขโทมนัสและอุปายาส
                </p>
                <div className="w-12 h-0.5 bg-rose-200 mx-auto my-4"></div>
                <p className="text-2xl md:text-3xl font-bold text-rose-700">
                  ความเกิดขึ้นแห่งกองทุกข์ทั้งมวลนี้ ย่อมมีด้วยประการอย่างนี้
                </p>
              </div>
            </div>
            <p className="text-center font-bold text-cyan-800 mt-8 text-xl">
              นี้เราเรียกว่าปฏิจจสมุปบาท
            </p>
          </IntrospectionCard>
        </div>

        {/* ส่วนที่ 3: สายดับ (นิโรธวาร) */}
        <div className="my-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-emerald-700 flex items-center justify-center gap-3">
              <FaLinkSlash /> ความดับแห่งกองทุกข์
            </h3>
          </div>

          <IntrospectionCard highlight={true} className="bg-cyan-600 shadow-cyan-200">
            <div className="space-y-4">
              {cessationLinks.map((link, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="bg-white/10 p-4 px-8 rounded-2xl border border-white/20 w-full text-center">
                    <p className="text-xl md:text-2xl text-white">
                      {idx === 0 ? 'ก็เพราะ' : 'เพราะ'}
                      <span className="font-bold text-cyan-100">{link.cause}</span>
                      {idx === 0 ? '' : 'ดับ'}
                      <span className="font-bold text-cyan-100">{link.effect}</span>จึงดับ
                    </p>
                  </div>
                  <FaArrowDown className="text-white/20 my-1" />
                </div>
              ))}

              <div className="bg-white/20 p-6 rounded-2xl border border-white/30 text-center space-y-3">
                <p className="text-xl md:text-2xl text-white">
                  เพราะชาติดับชราและมรณะ โสกะปริเทวะทุกขโทมนัส และอุปายาสจึงดับ
                </p>
                <div className="w-12 h-0.5 bg-white/30 mx-auto my-4"></div>
                <p className="text-2xl md:text-4xl font-bold text-white underline decoration-cyan-300 underline-offset-8">
                  ความดับแห่งกองทุกข์ทั้งมวลนี้ ย่อมมีด้วยประการอย่างนี้
                </p>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* ส่วนที่ 4: บทสรุป */}
        <div className="mt-16">
          <IntrospectionCard>
            <div className="flex flex-col items-center text-center space-y-6 py-4">
              <FaQuoteLeft className="text-cyan-200 text-4xl opacity-50" />
              <div className="space-y-4 text-xl md:text-2xl leading-relaxed text-slate-700">
                <p>พระผู้มีพระภาค ได้ตรัสพระพุทธภาษิตนี้แล้ว</p>
                <div className="bg-cyan-50 p-6 rounded-2xl border border-cyan-100">
                  <p className="font-bold text-cyan-800 flex items-center justify-center gap-2">
                    <FaCircleCheck className="text-emerald-500" />{' '}
                    ภิกษุเหล่านั้นมีใจยินดีชื่นชมภาษิต ของพระผู้มีพระภาคแล้ว
                  </p>
                </div>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link
            href="/extra/paticcasamuppada/lesson-07"
            className="inline-flex items-center gap-3 bg-cyan-600 hover:bg-cyan-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-cyan-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: วิภังคสูตร
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
