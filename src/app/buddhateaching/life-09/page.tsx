// src/app/buddhateaching/life-09/page.tsx
'use client';

import IntrospectionCard from '@/components/ui/IntrospectionCard';
import Link from 'next/link';
import {
  FaArrowRight,
  FaPersonWalking,
  FaEye,
  FaEarListen,
  FaWind,
  FaUtensils,
  FaHandPointer,
  FaBrain,
  FaCalculator,
  FaQuoteLeft,
  FaCircleCheck,
  FaArrowsSpin,
  FaFireExtinguisher,
} from 'react-icons/fa6';

export default function BuddhaTeachingLife09() {
  // ข้อมูลการพิจารณาอินทรีย์ 6 (คงเนื้อหาเดิมทุกตัวอักษร)
  const practiceSteps = [
    {
      title: 'ตาเห็นรูป',
      icon: <FaEye />,
      object: 'รูปไม่เที่ยงเกิดดับ',
      self: 'ตัวของเราก็ไม่เที่ยงเกิดดับ เช่นกัน',
      color: 'text-blue-600',
    },
    {
      title: 'หูได้ยินเสียง',
      icon: <FaEarListen />,
      object: 'เสียงไม่เที่ยงเกิดดับ',
      self: 'ตัวของเราก็ไม่เที่ยงเกิดดับ เช่นกัน',
      color: 'text-emerald-600',
    },
    {
      title: 'จมูกได้กลิ่น',
      icon: <FaWind />,
      object: 'กลิ่นไม่เที่ยงเกิดดับ',
      self: 'ตัวของเราก็ไม่เที่ยงเกิดดับ เช่นกัน',
      color: 'text-orange-600',
    },
    {
      title: 'ลิ้นได้รส',
      icon: <FaUtensils />,
      object: 'รสไม่เที่ยงเกิดดับ',
      self: 'ตัวของเราก็ไม่เที่ยงเกิดดับ เช่นกัน',
      color: 'text-rose-600',
    },
    {
      title: 'กายกระทบสัมผัส',
      icon: <FaHandPointer />,
      object: 'กายสัมผัสไม่เที่ยงเกิดดับ',
      self: 'ตัวของเราก็ไม่เที่ยงเกิดดับ เช่นกัน',
      color: 'text-indigo-600',
    },
    {
      title: 'ใจคิดนึก',
      icon: <FaBrain />,
      object: 'ความคิดไม่เที่ยงเกิดดับ',
      self: 'ตัวของเราก็ไม่เที่ยงเกิดดับ เช่นกัน',
      color: 'text-purple-600',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl mb-6 shadow-sm">
            <FaPersonWalking size={28} />
          </div>
          <span className="block text-indigo-600 font-bold tracking-widest uppercase text-sm mb-2">
            คำสอนจากพระไตรปิฎก
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 font-prompt leading-tight">
            วิธีการวิปัสสนาแบบง่ายๆ <br className="hidden md:block" /> แต่ได้ผลถาวร
          </h1>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* --- ส่วนที่ 1: หลักการเบื้องต้น --- */}
        <IntrospectionCard highlight={true} className="bg-indigo-900 border-indigo-500">
          <div className="flex flex-col items-center text-center space-y-6 py-4">
            <FaArrowsSpin
              className="text-indigo-300 text-4xl animate-spin-slow"
              style={{ animationDuration: '10s' }}
            />
            <div className="space-y-4 text-xl md:text-2xl leading-relaxed text-white/90">
              <p className="font-bold text-amber-300">การฝึกทำได้ทุกหนทุกแห่ง</p>
              <p>ควบคู่กันไปกับการทำงานหรือการดำเนินชีวิตของเราตามปกติ</p>
              <div className="w-16 h-px bg-white/20 mx-auto"></div>
              <p className="text-lg md:text-xl font-light italic">
                "ให้ฝึกดังนี้ - เริ่มตั้งแต่ตื่นนอนขึ้นมาจนกระทั่งหลับ...
                ฝึกให้รู้ให้เห็นความจริงของโลกและชีวิตดังนี้"
              </p>
            </div>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 2: ขั้นตอนการพิจารณาอินทรีย์ 6 (The Formula) --- */}
        <div className="my-16 space-y-8">
          <h4 className="text-center text-slate-400 font-medium uppercase tracking-widest mb-10">
            พิจารณาทั้งสองด้าน
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practiceSteps.map((step, idx) => (
              <IntrospectionCard key={idx}>
                <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center bg-slate-50 ${step.color}`}
                  >
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{step.title}</h3>
                </div>
                <div className="space-y-3 text-lg md:text-xl leading-relaxed">
                  <p className="text-slate-500 italic">พิจารณาว่า:</p>
                  <p className="font-bold text-indigo-700">{step.object}</p>
                  <p className="font-bold text-slate-800">{step.self}</p>
                </div>
              </IntrospectionCard>
            ))}
          </div>
        </div>

        {/* --- ส่วนที่ 3: อุปมาสูตรคูณและการดับทุกข์ --- */}
        <div className="my-16">
          <IntrospectionCard highlight={true} className="bg-indigo-600 border-indigo-400">
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaCalculator className="text-indigo-200 text-5xl" />
              <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white">
                <p className="font-bold text-amber-200">ท่องให้ได้เหมือนสูตรคูณ</p>
                <p>
                  ความพอใจ ไม่พอใจ หรือโลภ โกรธ หลง หรือสมุทัยของทุกข์ทั้งปวง
                  ซึ่งเรียกว่าเป็นความเชื่อก็จะถูกความจริงว่าไม่เที่ยงดับลงไปทันที
                </p>
                <div className="bg-white/10 p-8 rounded-3xl border border-white/20 shadow-inner">
                  <FaFireExtinguisher className="mx-auto text-rose-300 text-3xl mb-4" />
                  <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                    "ทุกข์เกิดที่ไหนดับที่นั่น"
                  </p>
                  <p className="text-lg text-indigo-100">
                    ทุกข์เกิดทางตา ดับทางตา ทุกข์เกิดทางหูดับทางหู ทุกข์เกิดทางจมูกดับทางจมูก
                    ทุกข์เกิดทางลิ้นดับทางลิ้น ทุกข์เกิดทางกายดับทั้งกาย ทุกข์เกิดทางใจดับทางใจ
                  </p>
                </div>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* --- ส่วนที่ 4: บทสรุป - ปัญญาและมรรคผล --- */}
        <div className="mt-16">
          <IntrospectionCard highlight={true} className="bg-slate-900 border-indigo-500">
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaQuoteLeft className="text-indigo-400 text-4xl opacity-50" />
              <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90">
                <p>
                  เมื่อเหตุทั้งปวงของทุกข์ดับไปแล้ว ต่อจากนั้น ปัญญาหรือความรู้ที่ดับทุกข์ได้
                  หรือแก้ปัญหาชีวิตได้ เกิดขึ้นตามมา ทางตา หู จมูก ลิ้น กาย ใจ มหาศาล
                </p>
                <div className="bg-white/10 p-8 rounded-[2.5rem] border border-white/20 shadow-2xl">
                  <p className="text-2xl md:text-3xl font-bold text-emerald-400">
                    บรรลุมรรค ผล นิพพานได้ <br /> ภายใน 7 วัน 7 เดือน 7 ปี อย่างช้า
                  </p>
                </div>
                <p className="text-lg text-slate-400 italic">พระพุทธเจ้าตรัสไว้อย่างนี้</p>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-widest text-sm pt-4">
                <FaCircleCheck /> ปฏิบัติจนเป็นปกตินิสัยในชีวิตประจำวัน
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link
            href="/buddhateaching/life-10"
            className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-indigo-200 hover:-translate-y-1"
          >
            ความคิดเห็นของคนเราคืออะไร?
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
