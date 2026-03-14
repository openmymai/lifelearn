// src/app/buddhateaching/life-11/page.tsx
'use client';

import IntrospectionCard from '@/components/ui/IntrospectionCard';
import Link from 'next/link';
import {
  FaArrowRight,
  FaHandsPraying,
  FaCircleExclamation,
  FaScaleBalanced,
  FaArrowsSpin,
  FaEye,
  FaEarListen,
  FaWind,
  FaUtensils,
  FaHandPointer,
  FaBrain,
  FaQuoteLeft,
  FaCircleCheck,
  FaHeartCircleCheck,
  FaLanguage,
} from 'react-icons/fa6';

export default function BuddhaTeachingLife11() {
  // ข้อมูลการพิจารณาอินทรีย์ 6 (คงเนื้อหาเดิมทุกตัวอักษร)
  const practiceSteps = [
    {
      title: 'ตาเห็นรูป',
      icon: <FaEye />,
      text: 'รูปไม่เที่ยงเกิดดับ ตัวของเราก็ไม่เที่ยงเกิดดับ',
      color: 'text-blue-600',
    },
    {
      title: 'หูได้ยินเสียง',
      icon: <FaEarListen />,
      text: 'เสียงไม่เที่ยงเกิดดับ ตัวของเราไม่เที่ยงเกิดดับ',
      color: 'text-emerald-600',
    },
    {
      title: 'จมูกได้กลิ่น',
      icon: <FaWind />,
      text: 'กลิ่นไม่เที่ยงเกิดดับ ตัวของเราก็ไม่เที่ยงเกิดดับ',
      color: 'text-orange-600',
    },
    {
      title: 'ลิ้นกระทบรส',
      icon: <FaUtensils />,
      text: 'รสไม่เที่ยงเกิดดับ ตัวของเราก็ไม่เที่ยงเกิดดับ',
      color: 'text-rose-600',
    },
    {
      title: 'กายกระทบสัมผัส',
      icon: <FaHandPointer />,
      text: 'สิ่งที่มากระทบสัมผัสไม่เที่ยงเกิดดับ ตัวของเราก็ไม่เที่ยงเกิดดับ',
      color: 'text-indigo-600',
    },
    {
      title: 'ใจคิดนึก',
      icon: <FaBrain />,
      text: 'ความคิดไม่เที่ยงเกิดดับ ตัวของเราก็ไม่เที่ยงเกิดดับ',
      color: 'text-purple-600',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl mb-6 shadow-sm">
            <FaHandsPraying size={28} />
          </div>
          <span className="block text-indigo-600 font-bold tracking-widest uppercase text-sm mb-2">
            คำสอนจากพระไตรปิฎก
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 font-prompt leading-tight">
            วิปัสสนาดับทุกข์ <br className="hidden md:block" /> และสร้างสุขถาวรได้อย่างไร?
          </h1>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* --- ส่วนที่ 1: ความสำเร็จของพระพุทธเจ้าและอริยสาวก --- */}
        <IntrospectionCard>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700">
            <p>
              วิปัสสนาดับทุกข์ได้อย่างไร?
              คนเราเกิดมาแล้วต้องการหนีทุกข์ไปหาสุขกันทุกคนแต่ละคนก็มีวิธีการไปหาสุขแตกต่างกันไปตามความคิดเห็นของตนเอง...
              บุคคลที่ประสบความสำเร็จที่หนีทุกข์ไปหาสุขสำเร็จเป็นคนแรกก็คือพระพุทธเจ้า
            </p>
            <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
              <p className="text-indigo-900 font-medium">
                "พระองค์ได้ตรัสพระธรรมคำสอนซึ่งเป็นทางสายเอกสายเดียว
                ที่ปฏิบัติถูกธรรมแล้วดับทุกข์ได้ในชาตินี้"
              </p>
            </div>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 2: ทุกข์ 2 อย่าง --- */}
        <div className="my-16">
          <h3 className="text-2xl font-bold text-indigo-800 mb-8 flex items-center gap-3">
            <FaCircleExclamation className="text-rose-500" /> ทุกข์ของคนเรามี 2 อย่าง
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <p className="font-bold text-slate-800 mb-4">๑. ทุกข์ที่เป็นธรรมชาติ</p>
              <p className="text-slate-600 leading-relaxed">
                คือทุกข์อริยสัจจะ คือทุกข์ที่เกิด แก่ เจ็บ ตาย
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-rose-100 shadow-sm">
              <p className="font-bold text-rose-700 mb-4">๒. ทุกข์ที่คนเราสร้างขึ้นมาเอง</p>
              <p className="text-slate-600 leading-relaxed">
                โดยไม่รู้เท่าทันสิ่งที่มากระทบสัมผัส... จึงไปหลงพอใจไม่พอใจ (โลภ โกรธ หลง) เรียกว่า
                สมุทัยของทุกข์ทั้งปวง หรืออวิชชาเกิดขึ้น
              </p>
            </div>
          </div>
        </div>

        {/* --- ส่วนที่ 3: กฎธรรมชาติ 2 กฎ (ความจริงที่จะดับความเชื่อ) --- */}
        <IntrospectionCard highlight={true} className="bg-indigo-900 border-indigo-500">
          <div className="flex flex-col items-center text-center space-y-8 py-4">
            <FaScaleBalanced className="text-amber-300 text-4xl" />
            <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90">
              <p className="font-bold text-amber-300">จะดับความเชื่อได้ก็ต้องเอาความจริงมาดับ</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                  <p className="font-bold text-white mb-2">๑. กฎไตรลักษณ์</p>
                  <p className="text-lg text-indigo-100">
                    อนิจจัง ทุกขัง อนัตตา (เกิดขึ้น ตั้งอยู่ ดับไป)
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                  <p className="font-bold text-white mb-2">๒. กฎแห่งเหตุปัจจัย</p>
                  <p className="text-lg text-indigo-100">
                    อิทัปปัจจยตา ปฏิจจสมุปบาท (ไม่มีอะไรเกิดขึ้นลอยๆ)
                  </p>
                </div>
              </div>
              <p className="text-2xl font-bold text-white underline decoration-amber-500 underline-offset-8">
                สรุปกฎธรรมชาติ 2 กฎนี้ว่า “ไม่เที่ยง เกิดดับ”
              </p>
            </div>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 4: วิธีปฏิบัติ (พิจารณาทั้งสองด้าน) --- */}
        <div className="my-16 space-y-8">
          <h3 className="text-2xl font-bold text-indigo-800 mb-8 flex items-center gap-3">
            <FaArrowsSpin className="animate-spin-slow" style={{ animationDuration: '10s' }} />{' '}
            วิธีปฏิบัติวิปัสสนา
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practiceSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-3"
              >
                <div className="flex items-center gap-3 text-slate-800 font-bold border-b pb-2">
                  <span className={step.color}>{step.icon}</span>
                  {step.title}
                </div>
                <p className="text-indigo-700 font-medium">{step.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 italic pt-4">
            "ให้พิจารณาให้เห็นความจริงทั้งสองด้านอย่างนี้ตลอดเวลาจนเป็นปกตินิสัยในชีวิตประจำวัน"
          </p>
        </div>

        {/* --- ส่วนที่ 5: วิปัสสนาสร้างสุขถาวรได้อย่างไร? (อุปมาตัวหนังสือจีน) --- */}
        <div className="my-16">
          <h3 className="text-2xl font-bold text-indigo-800 mb-8 flex items-center gap-3">
            <FaHeartCircleCheck className="text-emerald-500" /> วิปัสสนาสร้างสุขถาวรได้อย่างไร?
          </h3>
          <IntrospectionCard>
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <p>
                มนุษย์ปุถุชนคนธรรมดาไม่สามารถสร้างสุขจริงๆ ให้กับตัวเองได้เลย
                เพราะในใจไม่มีข้อมูลสร้างสุข (สัญญา) มีแต่ข้อมูลสร้างทุกข์ (ความพอใจ/ไม่พอใจ)
              </p>
              <div className="bg-slate-900 text-white-100 p-8 rounded-3xl shadow-inner relative overflow-hidden">
                <FaLanguage className="absolute -right-6 -bottom-6 text-white/5 text-9xl rotate-12" />
                <p className="font-bold text-white mb-4 flex items-center gap-2">
                  <FaQuoteLeft className="text-white-400" /> อุปมาตัวหนังสือจีน
                </p>
                <p className="italic text-white">
                  "อุปมาเหมือนเราเห็น ก.ไก่ สติก็จะดึงเอาความจำคำว่า ก.ไก่ออกมารับการกระทบทางตา...
                  แต่พอเราเห็นตัวหนังสือจีนสติก็ไปคว้าหาข้อมูล...
                  ปรากฏว่าในใจของเราไม่มีข้อมูลตัวหนังสือจีนบรรจุอยู่ เราก็อ่านตัวหนังสือไม่ได้ฉันใด
                  ก็ฉันนั้น"
                </p>
              </div>
              <p className="pt-4">
                ถ้าเราฝึกฝนตนเอง... เราก็จะมีข้อมูลปรุงแต่งสร้างสุขเกิดขึ้นแทน เก็บอยู่เต็มใจของเรา
                ชีวิตของเราก็อยู่ด้วยปัญญาหรือความจริง
                (ไม่มีความเชื่อหรือความหลงมาครอบงำเคลือบคลุมบดบัง)
              </p>
            </div>
          </IntrospectionCard>
        </div>

        {/* --- ส่วนที่ 6: บทสรุป - อิสระและสุขถาวร --- */}
        <div className="mt-16">
          <IntrospectionCard highlight={true} className="bg-slate-900 border-indigo-500">
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaCircleCheck className="text-emerald-400 text-5xl" />
              <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90">
                <p className="font-bold text-amber-300">จิตใจเป็นอิสระปลอดโปร่งจากโลภ โกรธ หลง</p>
                <p>
                  ไม่ต้องห่วงกังวลเกี่ยวกับตัวตนอีก ไม่ต้องคอยเสาะแสวงหาสิ่งเสพเสวยทางอินทรีย์ 6
                  และไม่ต้องคอยปกป้องความยิ่งใหญ่ของตนเองที่แบกถือเอาไว้อย่างเมื่อก่อนๆอีกต่อไป
                </p>
                <div className="bg-white/10 p-8 rounded-[2.5rem] border border-white/20 shadow-2xl">
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    "จิตใจก็เปิดกว้างแผ่ความรู้สึกอิสระออกไปทั่วสารทิศ...
                    ในที่สุดก็สร้างสุขถาวรให้กับตัวเองได้สำเร็จในชาตินี้"
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-widest text-sm pt-4">
                <FaCircleCheck /> บรรลุสุขถาวรตามทางสายเอก
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link
            href="/buddhateaching/life-12"
            className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-indigo-200 hover:-translate-y-1"
          >
            เราจะให้รางวัลชีวิตของเราได้อย่างไร?
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
