// src/app/buddhateaching/life-12/page.tsx
'use client';

import IntrospectionCard from '@/components/ui/IntrospectionCard';
import Link from 'next/link';
import {
  FaArrowRight,
  FaGift,
  FaUser,
  FaHeartPulse,
  FaScaleBalanced,
  FaCircleExclamation,
  FaQuoteLeft,
  FaCircleCheck,
  FaHandsPraying,
} from 'react-icons/fa6';
import { GiMirrorMirror } from 'react-icons/gi';

export default function BuddhaTeachingLife12() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl mb-6 shadow-sm">
            <FaGift size={28} />
          </div>
          <span className="block text-indigo-600 font-bold tracking-widest uppercase text-sm mb-2">
            คำสอนจากพระไตรปิฎก
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 font-prompt leading-tight">
            เราจะให้รางวัลชีวิตของเรา <br className="hidden md:block" /> ได้อย่างไร?
          </h1>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* --- ส่วนที่ 1: ตัวเรามี 2 ตัวที่ซ้อนทับกัน --- */}
        <IntrospectionCard>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700">
            <p className="font-medium">
              ทำไมต้องให้รางวัลชีวิตของเราด้วย
              ก่อนที่จะให้รางวัลชีวิตของเราให้ถูกต้องตามที่ชีวิตของเราต้องการนั้น
              เราต้องรู้จักตัวของเราก่อนว่าตัวของเรามี 2 ตัว ที่ซ้อนทับกันอยู่
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-blue-50 p-6 rounded-2xl border-t-4 border-blue-500 flex items-center gap-4">
                <FaHeartPulse className="text-blue-600 text-2xl" />
                <div>
                  <p className="font-bold text-blue-900">ตัวที่ 1: ตัวชีวิต</p>
                  <p className="text-blue-700 text-lg">หมายถึง ร่างกายของเราทั้งหมด</p>
                </div>
              </div>
              <div className="bg-indigo-50 p-6 rounded-2xl border-t-4 border-indigo-500 flex items-center gap-4">
                <FaUser className="text-indigo-600 text-2xl" />
                <div>
                  <p className="font-bold text-indigo-900">ตัวที่ 2: ตัวคน</p>
                  <p className="text-indigo-700 text-lg">หมายถึง จิตใจของเรา</p>
                </div>
              </div>
            </div>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 2: ความขัดแย้งของกายและใจ --- */}
        <div className="my-16">
          <IntrospectionCard>
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <div className="flex items-center gap-3 text-rose-600 mb-4">
                <FaCircleExclamation className="text-2xl" />
                <h3 className="text-2xl font-bold">เมื่อความต้องการไม่สมดุล</h3>
              </div>
              <p>
                ความต้องการของ 2 ตัวนี้แตกต่างกัน บางอย่างมีขีดจำกัด บางอย่างไม่มีขีดจำกัด
                ยกตัวอย่างเช่น เวลาดื่มเหล้าดื่มมากเข้าตัวชีวิตหรือว่าร่างกายรับไม่ไหว
                บางครั้งอาเจียนออกมา แต่ตัวคนหรือตัวจิตใจหรือตัวความอยากนั้นไม่พอต้องการอีก
              </p>
              <div className="bg-rose-50 p-8 rounded-3xl border-l-8 border-rose-500 shadow-inner">
                <FaQuoteLeft className="text-rose-200 text-4xl mb-4 opacity-50" />
                <p className="text-2xl font-bold text-rose-900 mb-4 italic">
                  "แม่น้ำเสมอความอยากไม่มี"
                </p>
                <p className="text-rose-800">
                  เมื่อ 2
                  ตัวขัดแย้งกันวิธีความเป็นอยู่ของบุคคลนั้นๆก็จะมีแต่ปัญหาเครียดเกิดความทุกข์ตลอดเวลา...
                  อาการป่วยของคนเราเกิดจาก 2 ตัวนี้ขัดแย้งกัน ทำให้ร่างกายอ่อนแอ
                  เชื้อโรคภายนอกเข้าทำลายได้ง่าย
                </p>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* --- ส่วนที่ 3: การทรมานตัวชีวิต --- */}
        <IntrospectionCard>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700">
            <p>
              ตลอดเวลาที่เราเกิดมาเป็นคนทำร้ายชีวิตตัวเองมาตลอดทำร้ายตัวเอง
              โดยปล่อยให้ภัยร้ายเข้ามาทางอินทรีย์ 6 ตลอดเวลา... เราตามใจตัวคนเกินไปจนลืมตัวชีวิต
              ปล่อยให้เขาอยู่แบบทรมานมานานแล้ว
            </p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 italic text-slate-600">
              "ถ้าตราบใดยังเดินไปไหนมาไหนได้จะไม่หันมามองดูตัวชีวิตเลย
              แต่วันไหนเดินไปไหนมาไหนไม่ได้นอนซมอยู่โรงพยาบาลนั่นแหละ
              ตัวชีวิตจึงจะได้รับการพักผ่อนเยียวยารักษา...
              การบาดเจ็บของชีวิตทุกครั้งเกิดจากตัวคนหรือตัวความอยากนำมาให้เกือบทั้งหมด"
            </div>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 4: รางวัลสูงสุดคือการลดกิเลส (Highlight) --- */}
        <div className="my-16">
          <IntrospectionCard highlight={true} className="bg-indigo-900 border-indigo-500">
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaHandsPraying className="text-amber-300 text-5xl" />
              <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90">
                <p className="font-bold text-amber-300 text-2xl md:text-3xl">
                  รางวัลที่ชีวิตของเราต้องการคืออะไร?
                </p>
                <p className="text-3xl md:text-4xl font-black text-white underline decoration-amber-500 underline-offset-8">
                  คือการลดโลภ โกรธ หลง ของตัวคน
                </p>
                <p>
                  เมื่อโลภโกรธ หลง ลดลงไปแล้ว ตัวปัญญาก็จะเกิดขึ้นในตัวคน
                  เมื่อมีปัญญาเพิ่มขึ้นก็จะแก้ไขปัญหาให้กับตัวคนได้มาก สิ่งที่ตกค้างในตัวคนก็มีน้อย
                  เมื่อมีน้อยก็ไม่กระทบกระเทือนตัวชีวิต
                </p>
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                  <p className="text-emerald-400 font-bold">
                    ตัวชีวิตก็จะผ่อนคลายสบายขึ้น โรคภัยไข้เจ็บก็ลดลงไปด้วย <br />
                    เพราะไม่เครียดกับปัญหาต่างๆ ภูมิต้านทานของร่างกายก็มีมากขึ้น
                  </p>
                </div>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* --- ส่วนที่ 5: วิธีให้รางวัลชีวิตด้วยวิปัสสนา --- */}
        <IntrospectionCard>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700">
            <div className="flex items-center gap-3 text-indigo-700 mb-4">
              <FaScaleBalanced className="text-2xl" />
              <h3 className="text-2xl font-bold">หลักการปฏิบัติที่ถูกต้อง</h3>
            </div>
            <p>
              วิธีปฏิบัตินั้น พระพุทธเจ้าได้ตรัสไว้เป็นเวลา 2500 กว่าปีมาแล้ว...
              หลักปฏิบัติก็คือหลักสติปัฏฐาน 4 คือการวิปัสสนาภาวนาพิจารณาขันธ์ 5 และอินทรีย์ 6
              ให้รู้เห็นสิ่งทั้งปวงตามความเป็นจริง
            </p>
            <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
              <p className="text-rose-900 font-medium">
                "การเข้าถึงปัญญาและการดับทุกข์นั้น
                ต้องเริ่มต้นด้วยการฝึกฝนตนเองในด้านวิปัสสนาภาวนาล้วนๆ โดยไม่ต้องไปทำสมาธิก่อน...
                ถ้าทำสมาธิแล้วผลจะออกมาเป็นความสงบอย่างเดียว ไม่มีปัญญาดับทุกข์ได้"
              </p>
            </div>
            <p className="text-center font-bold text-indigo-700 pt-4">
              ตัวคนและชีวิตต้องการดับทุกข์ ไม่ใช่การหลบทุกข์ชั่วคราว
            </p>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 6: บทพิจารณาส่องกระจก (Highlight) --- */}
        <div className="my-16">
          <IntrospectionCard highlight={true} className="bg-slate-900 border-indigo-500">
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <GiMirrorMirror className="text-amber-400 text-5xl animate-pulse" />
              <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90">
                <p className="font-bold text-amber-300">ลองส่องกระจกดูหน้าตัวเองบ้าง</p>
                <p className="italic">
                  "ถามตัวเองว่ารูปร่างหน้าตาอย่างนี้เราใช้เขามากี่ปีแล้ว ใช้อย่างสมบุกสมบันมาตลอด...
                  เมื่อไหร่ท่านจะให้รางวัลแก่เขาบ้าง ถามอย่างนี้ทุกวัน"
                </p>
                <div className="bg-white/10 p-8 rounded-[2.5rem] border border-white/20 shadow-2xl">
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    "ตัวชีวิตคือคู่ชีวิตของเราที่แท้จริง"
                  </p>
                  <p className="text-lg text-indigo-200 mt-4">
                    สิ่งอื่นๆไม่ว่าอะไรทั้งนั้นแม้กระทั่งลูก เมีย พ่อแม่ ก็อยู่กับเราไม่ได้นาน
                    เท่ากับตัวของเราเลย เมื่อเรารู้ว่าตัวชีวิตของเราคือเพื่อนตายที่แท้จริง...
                    เราต้องหันมาดูแลเพื่อนแท้เพื่อนตายของเราบ้าง
                  </p>
                </div>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* --- ส่วนสรุปปิดท้าย --- */}
        <div className="mt-16">
          <IntrospectionCard>
            <div className="flex flex-col items-center text-center space-y-6 py-4">
              <FaCircleCheck className="text-emerald-500 text-4xl" />
              <p className="text-2xl md:text-3xl font-bold text-slate-800 leading-relaxed">
                ให้รางวัลแก่ชีวิตท่านตั้งแต่บัดนี้เป็นต้นไป <br />
                <span className="text-indigo-700">ชีวิตของท่านจะไร้ทุกข์พบแต่สุขถาวร</span>
              </p>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link
            href="/buddhateaching/life-13"
            className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-indigo-200 hover:-translate-y-1"
          >
            วิปัสสนาภาวนา รู้จริง รู้แจ้ง อริยสัจ 4 ได้อย่างไร?
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
