// src/app/buddhateaching/life-08/page.tsx
'use client';

import IntrospectionCard from '@/components/ui/IntrospectionCard';
import Link from 'next/link';
import {
  FaArrowRight,
  FaBookOpen,
  FaCircleExclamation,
  FaHandsPraying,
  FaQuoteLeft,
  FaCircleCheck,
  FaGavel,
  FaBrain,
  FaLightbulb,
  FaUserGroup,
  FaLandmark,
} from 'react-icons/fa6';

export default function BuddhaTeachingLife08() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl mb-6 shadow-sm">
            <FaLandmark size={28} />
          </div>
          <span className="block text-indigo-600 font-bold tracking-widest uppercase text-sm mb-2">
            คำสอนจากพระไตรปิฎก
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 font-prompt leading-tight">
            ไตรสิกขาในพระไตรปิฎก <br className="hidden md:block" /> เข้าใจถูกต้องแล้วหรือ?
          </h1>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* --- ส่วนที่ 1: มูลเหตุแห่งไตรสิกขา (พระวัชชีบุตร) --- */}
        <IntrospectionCard>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700">
            <div className="flex items-center gap-3 text-indigo-700 mb-4">
              <FaHandsPraying className="text-2xl" />
              <h3 className="text-2xl font-bold">มูลเหตุแห่งการปฏิบัติ</h3>
            </div>
            <p>
              ไตรสิกขาในพระไตรปิฎกที่พระพุทธเจ้าตรัสรู้ได้สอนให้กับพระภิกษุวัชชีบุตรนำไปปฏิบัตินั้นมีสาเหตุมาจากพระพุทธเจ้าได้กำหนดธรรมวินัยไว้ในขณะนั้น
              150 ข้อ แล้วภิกษุวัชชีบุตรเห็นว่าสิกขามากถึง 150 ข้อ
              ตนเองไม่สามารถปฏิบัติได้ทั่วถึง...
            </p>
            <div className="bg-indigo-50 p-6 rounded-2xl border-l-4 border-indigo-500 italic">
              "พระพุทธเจ้าตรัสกับภิกษุวัชชีบุตรว่า เธอปฏิบัติศีลสิกขา 150 ข้อไม่ได้
              เธอจะปฏิบัติอธิศีล อธิจิต อธิปัญญาได้ไหม... ถ้าเธอปฏิบัติ 3
              ข้อนี้ได้เท่ากับเธอปฏิบัติสิกขาได้ทั้งหมด 150 ข้อ"
            </div>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 2: นิยามที่ถูกต้องของอธิศีล อธิจิต อธิปัญญา --- */}
        <div className="my-16 space-y-8">
          <h4 className="text-center text-slate-400 font-medium uppercase tracking-widest">
            ความหมายที่ถูกต้องสำหรับพระสงฆ์
          </h4>

          {/* อธิศีล */}
          <IntrospectionCard>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <FaGavel />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-800">อธิศีล (ศีลใหญ่/ศีลหลวง)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    '1. ไม่ฆ่ามนุษย์',
                    '2. ไม่เสพเมถุน',
                    '3. ไม่อวดอุตริมนุสธรรม',
                    '4. ไม่ลักทรัพย์เกิน 5 มาสก',
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-slate-50 p-3 rounded-xl border border-slate-200 font-medium text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-rose-600 text-lg font-medium italic">
                  "พระสงฆ์ที่ผิดศีล 4 ข้อนี้... พระพุทธเจ้าตรัสว่าเป็นโมฆะบุรุษ เป็นตาลยอดด้วน...
                  ห้ามสวรรค์ ห้ามนิพพาน"
                </p>
              </div>
            </div>
          </IntrospectionCard>

          {/* อธิจิต */}
          <IntrospectionCard>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <FaBrain />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-800">อธิจิต (จิตที่ยิ่งใหญ่)</h3>
                <p className="text-xl leading-relaxed text-slate-600">
                  หมายถึงจิตที่ไม่ประมาท
                  รู้เท่าทันสิ่งทั้งปวงที่มากระทบสัมผัสตัวเราตามความเป็นจริงของโลกและชีวิต...{' '}
                  <span className="text-indigo-600 font-bold">อธิจิตไม่ใช่สมาธิ</span>
                </p>
              </div>
            </div>
          </IntrospectionCard>

          {/* อธิปัญญา */}
          <IntrospectionCard>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <FaLightbulb />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-800">อธิปัญญา (ปัญญาที่ยิ่งใหญ่)</h3>
                <p className="text-xl leading-relaxed text-slate-600">
                  หมายถึงความรู้ที่ดับทุกข์ได้ เกิดจากการวิปัสสนาภาวนาพิจารณาขันธ์ 5 และอินทรีย์
                  6... ความรู้อย่างนี้เรียกว่า{' '}
                  <span className="text-emerald-600 font-bold">“สัมมาทิฏฐิ”</span>
                </p>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* --- ส่วนที่ 3: ไตรสิกขาสำหรับฆราวาส (ทาน ศีล วิปัสสนา) --- */}
        <IntrospectionCard highlight={true} className="bg-indigo-900 border-indigo-500">
          <div className="flex flex-col items-center text-center space-y-8 py-4">
            <FaUserGroup className="text-amber-300 text-4xl" />
            <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90">
              <p className="font-bold text-amber-300">ไตรสิกขาสำหรับฆราวาสที่ถูกต้อง</p>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <span className="bg-white/10 px-8 py-2 rounded-full border border-white/20 font-bold">
                  ทาน
                </span>
                <span className="bg-white/10 px-8 py-2 rounded-full border border-white/20 font-bold">
                  ศีล
                </span>
                <span className="bg-emerald-600 px-8 py-2 rounded-full border border-emerald-400 font-bold shadow-lg">
                  วิปัสสนาภาวนา
                </span>
              </div>
              <p className="text-lg text-indigo-100 font-light">
                "เพื่อให้ชาวพุทธที่เป็นฆราวาสใช้เป็นข้อปฏิบัติฝึกฝนตนเองเป็นลำดับๆ ไป...
                ต่อมาได้มีการแก้ไขเปลี่ยนแปลง ตัดเอาคำว่าวิปัสสนาออกไป เหลือเป็นทาน ศีล ภาวนา"
              </p>
            </div>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 4: คำเตือนเรื่องการหลงทาง (ตาข่ายมาร) --- */}
        <div className="my-16 space-y-8">
          <h4 className="text-center text-rose-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
            <FaCircleExclamation /> ระวังการผลักดันตนเองไปเป็นพราหมณ์
          </h4>
          <IntrospectionCard>
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <p>
                ถ้าเอาทาน ศีล ภาวนา ที่สรุปอย่างนี้ไปปฏิบัติก็จะไปหลงทำสมาธิ
                แล้วไม่มีปัญญาดับทุกข์ได้ ได้แต่หลบทุกข์ชั่วคราวเท่านั้น ผิดธรรมวินัยของชาวพุทธ
              </p>
              <div className="bg-rose-50 p-8 rounded-3xl border-l-8 border-rose-500 shadow-inner">
                <FaQuoteLeft className="text-rose-200 text-4xl mb-4 opacity-50" />
                <p className="text-rose-900 font-medium">
                  "ผลักดันตนเองจากชาวพุทธไปเป็นพราหมณ์ด้วยความพอใจหรือความไม่รู้
                  ในที่สุดไปติดตาข่ายของมาร ดักไว้ที่ความสงบ
                  หมดโอกาสที่จะปลดตนเองออกจากตาข่ายของมารได้"
                </p>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* --- ส่วนที่ 5: บทสรุปไตรสิกขาที่ถูกต้อง --- */}
        <div className="mt-16">
          <IntrospectionCard highlight={true} className="bg-slate-900 border-indigo-500">
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaBookOpen className="text-amber-400 text-5xl" />
              <div className="space-y-8 text-xl md:text-2xl leading-relaxed text-white/90">
                <p className="font-bold text-amber-300">สรุปไตรสิกขาที่ถูกต้อง</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left w-full">
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <p className="text-indigo-300 font-bold mb-2 uppercase tracking-wider text-sm">
                      สำหรับพระภิกษุ
                    </p>
                    <p className="text-white">อธิศีล • อธิจิต • อธิปัญญา</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <p className="text-emerald-400 font-bold mb-2 uppercase tracking-wider text-sm">
                      สำหรับฆราวาส
                    </p>
                    <p className="text-white">ทาน • ศีล • วิปัสสนาภาวนา</p>
                  </div>
                </div>

                <p className="text-2xl md:text-3xl font-bold text-white underline decoration-amber-500 underline-offset-8">
                  นี่คือไตรสิกขาที่ถูกต้องของพระพุทธเจ้า
                </p>
                <p className="text-lg text-slate-400 italic">
                  เมื่อนำไปปฏิบัติแล้วมีปัญญาแก้ปัญหาหรือดับทุกข์ได้ถาวร
                </p>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-widest text-sm pt-4">
                <FaCircleCheck /> ปฏิบัติถูกธรรม บรรลุผลในชาตินี้
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link
            href="/buddhateaching/life-09"
            className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-indigo-200 hover:-translate-y-1"
          >
            วิธีการวิปัสสนาแบบง่ายๆ แต่ได้ผล
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
