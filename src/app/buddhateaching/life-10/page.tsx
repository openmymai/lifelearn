// src/app/buddhateaching/life-10/page.tsx
'use client';

import IntrospectionCard from '@/components/ui/IntrospectionCard';
import Link from 'next/link';
import {
  FaArrowRight,
  FaBrain,
  FaDatabase,
  FaArrowsSpin,
  FaLink,
  FaQuoteLeft,
  FaCircleCheck,
  FaCircleExclamation,
  FaHardDrive,
  FaLayerGroup,
} from 'react-icons/fa6';

export default function BuddhaTeachingLife10() {
  // ข้อมูลหน้าที่ 4 อย่างของใจ
  const mindFunctions = [
    { pali: 'เวทนา', thai: 'รับ', color: 'bg-blue-50 text-blue-700' },
    { pali: 'สัญญา', thai: 'จำ', color: 'bg-emerald-50 text-emerald-700' },
    { pali: 'สังขาร', thai: 'คิด', color: 'bg-amber-50 text-amber-700' },
    { pali: 'วิญญาณ', thai: 'รู้', color: 'bg-purple-50 text-purple-700' },
  ];

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
            ความคิดเห็นของคนเรา <br className="hidden md:block" /> คืออะไร?
          </h1>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* --- ส่วนที่ 1: หน้าที่ของใจและอุปมาฮาร์ดดิสก์ --- */}
        <IntrospectionCard>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700">
            <div className="flex items-center gap-3 text-indigo-700 mb-4">
              <FaHardDrive className="text-2xl" />
              <h3 className="text-2xl font-bold">ใจคือที่เก็บข้อมูล</h3>
            </div>
            <p>
              ความคิดเห็นของคนเราเป็นเรื่องของนามธรรมหรือจิตใจ ไม่สามารถดูด้วยตาได้
              ใจของเรามีหน้าที่อยู่ 4 อย่าง คือ:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
              {mindFunctions.map((f, i) => (
                <div
                  key={i}
                  className={`${f.color} p-4 rounded-2xl text-center border border-current border-opacity-10 shadow-sm`}
                >
                  <p className="text-sm font-bold uppercase tracking-wider mb-1">{f.pali}</p>
                  <p className="text-2xl font-black">{f.thai}</p>
                </div>
              ))}
            </div>
            <div className="bg-indigo-50 p-6 rounded-2xl border-l-4 border-indigo-500 italic text-indigo-900">
              "จิตใจก็จะทำหน้าที่รับ จำ คิด รู้ อย่างนี้เกิดขึ้นทั้ง 6 ทาง
              แล้วประมวลข้อมูลที่ถูกกระทบสัมผัสทั้งหมด
              เป็นความพอใจและไม่พอใจเข้าไปเก็บไว้ในจิตใจหรือฮาร์ดดิสก์... ฝังอยู่ในจิตใต้สำนึก"
            </div>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 2: ความคิดคือผลกรรมจากอดีต --- */}
        <div className="my-16">
          <IntrospectionCard>
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <div className="flex items-center gap-3 text-indigo-700 mb-4">
                <FaDatabase className="text-2xl" />
                <h3 className="text-2xl font-bold">ผลของอดีตและปัจจุบัน</h3>
              </div>
              <p>
                ฉะนั้นความคิดเห็นของคนเราก็คือผลกรรม หรือการกระทำของเราในอดีตที่ผ่านมา
                มีทั้งอดีตใกล้ อดีตไกล ผ่านเข้ามาทางตา หู จมูก ลิ้น กาย ใจ แล้วเอามาเก็บไว้ในใจ
              </p>
              <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <FaArrowsSpin className="absolute -right-6 -bottom-6 text-white/5 text-9xl rotate-12" />
                <p className="text-center text-2xl font-bold leading-relaxed relative z-10">
                  "ตัวของเราทั้งหมดนี้คือผลของอดีต...
                  ข้อมูลที่อยู่ในใจของเราก็จะออกมารับการกระทบและปรุงแต่งต่อไป
                  ทำให้เกิดความพอใจไม่พอใจและเกิดขึ้นตลอดเวลา"
                </p>
              </div>
              <p className="text-center font-bold text-indigo-700 pt-4 italic">
                พระพุทธเจ้าได้ตรัสไว้ว่า: <br />
                <span className="text-2xl text-slate-800">
                  “กรรม หรือการกระทำนั้น จำแนกบุคคลให้แตกต่างกัน ทุกคนมีกรรมเป็นของตนเอง
                  มีกรรมเป็นเผ่าพันธุ์”
                </span>
              </p>
            </div>
          </IntrospectionCard>
        </div>

        {/* --- ส่วนที่ 3: แรงผลักดันของบุญและบาป --- */}
        <IntrospectionCard highlight={true} className="bg-indigo-900 border-indigo-500">
          <div className="flex flex-col items-center text-center space-y-8 py-4">
            <FaLayerGroup className="text-amber-300 text-5xl" />
            <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90">
              <p className="font-bold text-amber-300">บุญและบาปเป็นผู้กำหนดจิตใจ</p>
              <p>
                ความคิดนึกของคนเราแต่ละครั้งจะถูกแรงผลักดันที่เป็นบุญเป็นบาปนี้ผลักดันออกมา
                แล้วแต่ว่าช่วงไหนจังหวะไหน
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                  <p className="font-bold text-emerald-300 mb-2">ส่วนของบุญ:</p>
                  <p className="text-lg">
                    สิ่งที่มากระทบสัมผัสก็จะเป็นสิ่งที่ดีงาม ทำให้เกิดความสุข
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                  <p className="font-bold text-rose-300 mb-2">ส่วนของบาป:</p>
                  <p className="text-lg">
                    สิ่งที่มากระทบสัมผัสก็เป็นสิ่งที่ไม่ดีงาม ทำให้เราไม่พอใจ
                  </p>
                </div>
              </div>
              <p className="text-lg italic text-indigo-200">
                "ความคิดนึกของคนเราทุกคน
                ก็คือความเคยชินที่เป็นบุญเป็นบาปที่ได้มาจากความพอใจหรือไม่พอใจเมื่อถูกกระทบสัมผัส"
              </p>
            </div>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 4: วงจรปฏิจจสมุปบาท (อวิชชา) --- */}
        <div className="my-16">
          <h3 className="text-2xl font-bold text-indigo-800 mb-8 flex items-center gap-3">
            <FaLink /> วงจรแห่งความหลง
          </h3>
          <IntrospectionCard>
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <p>
                พระพุทธเจ้าได้ตรัสรู้ รู้แจ้งการดับทุกข์บอกไว้ว่า
                คนเราปล่อยให้ความหลงหรืออวิชชากำหนดวิถีชีวิต
              </p>
              <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100 text-rose-900 text-lg leading-loose">
                อวิชชา → สังขาร → วิญญาณ → นามรูป → สฬายตนะ → ผัสสะ → เวทนา → ตัณหา → อุปทาน → ภพ →
                ชาติ → ชรา มรณะ
              </div>
              <p className="font-medium">
                อวิชชาเกิดจากไม่รู้เท่าทันสิ่งที่มากระทบสัมผัสตัวเราในขณะปัจจุบัน
                จึงทำให้เป็นหลงพอใจและไม่พอใจสิ่งที่มากระทบสัมผัส นั่นคือโลภ โกรธ หลง เกิดขึ้นแล้ว
              </p>
            </div>
          </IntrospectionCard>
        </div>

        {/* --- ส่วนที่ 5: บทสรุป - ทางสายเอกและการดับทุกข์ --- */}
        <div className="mt-16">
          <IntrospectionCard highlight={true} className="bg-slate-900 border-indigo-500">
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaQuoteLeft className="text-emerald-400 text-5xl" />
              <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90">
                <p className="font-bold text-amber-300">ทุกข์เกิดที่ไหนให้ดับที่นั่น</p>
                <p>
                  ดับทุกข์ก็ให้ดับที่อินทรีย์ 6 นี้... ให้ฝึกฝนตนเองตามทางสายเอก
                  คือการวิปัสสนาภาวนาพิจารณาขันธ์ 5 และอินทรีย์ 6
                  ให้รู้เห็นสิ่งทั้งปวงตามความเป็นจริง
                </p>
                <div className="bg-white/10 p-8 rounded-[2.5rem] border border-white/20 shadow-2xl">
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    "เมื่อเหตุปัจจัยหมดแล้ว ความทุกข์ก็หมด ไม่เกิดขึ้นมาอีกเรียกว่าดับทุกข์
                    พบสุขถาวร"
                  </p>
                </div>
                <p className="text-lg text-slate-400 italic">
                  ผู้นั้นก็จะมีชีวิตอยู่ด้วยปัญญาไม่มีปัญหามารบกวนจิตใจอีก
                </p>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-widest text-sm pt-4">
                <FaCircleCheck /> บรรลุเป้าหมายสูงสุดของการเกิดมาเป็นคน
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link
            href="/buddhateaching/life-11"
            className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-indigo-200 hover:-translate-y-1"
          >
            วิปัสสนาดับทุกข์และสร้างสุขถาวรได้อย่างไร?
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
