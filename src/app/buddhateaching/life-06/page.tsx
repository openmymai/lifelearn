// src/app/buddhateaching/life-06/page.tsx
'use client';

import IntrospectionCard from '@/components/ui/IntrospectionCard';
import Link from 'next/link';
import {
  FaArrowRight,
  FaBrain,
  FaArrowsLeftRight,
  FaLink,
  FaEarListen,
  FaFaceSmile,
  FaCircleExclamation,
  FaQuoteLeft,
  FaCircleCheck,
  FaHandsPraying,
} from 'react-icons/fa6';

export default function BuddhaTeachingLife06() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl mb-6 shadow-sm">
            <FaBrain size={28} />
          </div>
          <span className="block text-indigo-600 font-bold tracking-widest uppercase text-sm mb-2">
            คำสอนจากพระไตรปิฎก
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 font-prompt leading-tight">
            การเจริญสติปัญญาที่ถูกต้อง <br className="hidden md:block" /> ทำอย่างไร?
          </h1>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* --- ส่วนที่ 1: ความเข้าใจคลาดเคลื่อนเรื่องการเจริญสติ --- */}
        <IntrospectionCard>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700">
            <div className="flex items-center gap-3 text-rose-600 mb-4">
              <FaCircleExclamation className="text-2xl" />
              <h3 className="text-2xl font-bold">ความเข้าใจคลาดเคลื่อน</h3>
            </div>
            <p>
              ตลอดเวลาที่ผ่านมาหลายร้อยปีพวกเราชาวพุทธเข้าใจพระธรรมคำสอนของพระพุทธเจ้าคลาดเคลื่อนมาตลอด...
              ให้ชาวพุทธเจริญสติและปัญญาตามคำสอนของพระพุทธเจ้าที่พระองค์ตรัสไว้คือเอาคำว่าสติไปเจริญ
              คือเราไปฝึกให้เกิดสติรู้เท่าทันอิริยาบถตลอดเวลาที่มีการเคลื่อนไหวหรืออื่นๆ เช่นเดินหนอ
              นั่งหนอ เป็นต้น
            </p>
            <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100 text-rose-900 font-medium">
              "การเอาสติไปฝึกอย่างนี้เป็นการปฏิบัติธรรมผิดทำให้ผลออกมาเป็นสมาธิเท่านั้น
              ไม่มีปัญญาเกิดขึ้น
              เพราะไม่เข้าใจพระธรรมคำสอนของพระพุทธเจ้าและไม่รู้ความหมายของคำว่าสติ"
            </div>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 2: นิยามของ "สติ" (การลากมา/ดึงมา) --- */}
        <IntrospectionCard>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700">
            <div className="flex items-center gap-3 text-indigo-700 mb-4">
              <FaArrowsLeftRight className="text-2xl" />
              <h3 className="text-2xl font-bold">สติ คือ ธรรมชาติของการระลึก</h3>
            </div>
            <p>
              สติ หมายถึง การระลึกได้แปลเป็นภาษาคนต่อได้ความว่าลากมาหรือดึงมา
              สติเป็นธรรมชาติอันหนึ่งมีเฉพาะในตัวคนเท่านั้นที่มีมากไม่ต้องเจริญ
              หรือไม่ต้องสร้างมันขึ้นมาอีกใดๆทั้งสิ้น
            </p>
            <div className="bg-indigo-50 p-6 rounded-2xl border-l-4 border-indigo-500">
              <p className="text-indigo-900">
                "คนทุกคนมีสติอยู่แล้ว มันทำหน้าที่ของมันตลอดเวลา... คือทำหน้าที่ระลึก ลาก
                หรือดึงความจำที่เป็นสัญญาที่อยู่เก็บอยู่ในใจ... ถ้ามีลบมากก็ดึงเอาลบออกมารับ
                ถ้ามีบวกมากมันก็ดึงเอาบวกออกมารับ"
              </p>
            </div>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 3: นิยามของ "ปัญญา" และต้นตอแห่งปัญญา --- */}
        <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <IntrospectionCard title="ปัญญาคืออะไร?">
            <p className="text-xl leading-relaxed text-slate-700">
              ปัญญาหมายถึงความรู้ที่ดับทุกข์ได้
              ความรู้ที่ดับทุกข์ไม่ได้ไม่ใช่ปัญญาทางธรรมเป็นเพียงความรู้หรือรอบรู้เท่านั้น
            </p>
          </IntrospectionCard>
          <IntrospectionCard title="ปัญญาเกิดจากอะไร?">
            <p className="text-xl leading-relaxed text-slate-700">
              ปัญญาเกิดจากความจริงที่เป็นความจริงของโลกและชีวิตเท่านั้น{' '}
              <span className="text-indigo-700 font-bold">ความจริงเป็นแม่เป็นต้นตอของปัญญา</span>
            </p>
          </IntrospectionCard>
        </div>

        {/* --- ส่วนที่ 4: กฎธรรมชาติ 2 กฎ (ต้นตอแห่งปัญญา) --- */}
        <IntrospectionCard highlight={true} className="bg-indigo-900 border-indigo-500">
          <div className="flex flex-col items-center text-center space-y-8 py-4">
            <FaLink className="text-amber-300 text-4xl" />
            <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90">
              <p className="font-bold text-amber-300">กฎธรรมชาติ 2 กฎ คือเหตุปัจจัยของปัญญา</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                  <p className="font-bold text-white mb-2">๑. กฎไตรลักษณ์</p>
                  <p className="text-lg text-indigo-100">
                    อนิจจัง ทุกขัง อนัตตา (เกิดขึ้น ตั้งอยู่ ดับไป)
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                  <p className="font-bold text-white mb-2">๒. กฎแห่งเหตุปัจจัย</p>
                  <p className="text-lg text-indigo-100">อิทัปปัจจยตา ปฏิจจสมุปบาท</p>
                </div>
              </div>
              <p className="text-lg italic text-indigo-200">
                "ปัญญาจะเกิดกับความจริงเท่านั้น อวิชชาเกิดจากความพอใจ หรือไม่พอใจ หรือความเชื่อ"
              </p>
            </div>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 5: ตัวอย่างเชิงปฏิบัติ (เสียงด่า) --- */}
        <div className="my-16">
          <h3 className="text-2xl font-bold text-indigo-800 mb-8 flex items-center gap-3">
            <FaEarListen /> ตัวอย่าง: เมื่อมีเสียงด่ามากระทบหู
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* กรณีไม่มีปัญญา */}
            <div className="bg-white p-8 rounded-[2.5rem] border-2 border-rose-100 shadow-sm">
              <p className="text-rose-600 font-bold mb-4 uppercase tracking-widest text-sm">
                กรณีไม่มีปัญญา (อวิชชา)
              </p>
              <p className="text-slate-600 leading-relaxed">
                สติจะลากเอาความเชื่อที่เป็นความพอใจไม่พอใจที่เก็บเป็นอวิชชาอยู่ในใจออกมารับการกระทบเสียงด่า
                ความพอใจไม่พอใจก็เกิดขึ้น ทำให้เราควบคุมตนเองไม่ได้ อาจจะไปทำร้ายร่างกายคนด่าเข้าให้
                ในที่สุดก็ต้องไปแก้ปัญหาที่สถานีตำรวจหรือที่ศาลหรือที่คุก
              </p>
            </div>
            {/* กรณีมีปัญญา */}
            <div className="bg-white p-8 rounded-[2.5rem] border-2 border-emerald-100 shadow-sm">
              <p className="text-emerald-600 font-bold mb-4 uppercase tracking-widest text-sm">
                กรณีมีปัญญา (วิชชา)
              </p>
              <p className="text-slate-600 leading-relaxed">
                สติจะลากเอาปัญญาหรือความจริงออกมารับว่าเสียงด่าไม่เที่ยง
                ปัญญาจะทำหน้าที่พิจารณาว่าเสียงด่าเกิดดับ คนด่าก็เกิดดับ คนถูกด่าก็เกิดดับ...
                และปัญญาจะสั่งให้ยิ้มให้กับคนที่ด่าทันที และก็ยิ้มได้ด้วย
                เพราะหน้ามืดหน้าแดงถูกดับไปก่อนแล้ว
              </p>
            </div>
          </div>
        </div>

        {/* --- ส่วนที่ 6: บทสรุป - ขบวนการเจริญสติปัญญาเต็มรูปแบบ --- */}
        <div className="mt-16">
          <IntrospectionCard highlight={true} className="bg-slate-900 border-indigo-500">
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaHandsPraying className="text-amber-400 text-5xl" />
              <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90">
                <p className="font-bold text-amber-300">สรุปการเจริญสติปัญญาที่ถูกต้อง</p>
                <FaQuoteLeft className="mx-auto text-indigo-400 opacity-50 text-3xl" />
                <p>
                  จะต้องปฏิบัติวิปัสสนาภาวนาพิจารณาขันธ์ 5 และอินทรีย์ 6
                  ให้รู้เห็นสิ่งทั้งปวงที่มากระทบสัมผัสตัวเรา
                  ตามความเป็นจริงของโลกและชีวิตว่าสิ่งทั้งปวงไม่เที่ยง เป็นทุกข์ เป็นอนัตตา
                  ไม่มีตัวตนเป็นของตนเอง เกิดจากเหตุปัจจัย ว่างจากตนหรือของตน
                </p>
                <div className="bg-white/10 p-8 rounded-3xl border border-white/20">
                  <p className="text-2xl font-bold text-emerald-400">
                    "การเจริญสติปัญญาก็คือการวิปัสสนาภาวนาพิจารณาขันธ์ 5 และ อินทรีย์ 6
                    ตามทางสายเอกที่พระพุทธเจ้าตรัสไว้นั่นเอง"
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-amber-300 font-bold uppercase tracking-widest text-sm pt-4">
                <FaCircleCheck /> ปฏิบัติถูกธรรม ดับทุกข์ได้ถาวร
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link
            href="/buddhateaching/life-07"
            className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-indigo-200 hover:-translate-y-1"
          >
            การรู้เท่าทันความพอใจและไม่พอใจแก้ปัญหาหรือดับทุกข์ได้
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
