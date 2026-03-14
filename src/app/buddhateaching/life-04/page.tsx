// src/app/buddhateaching/life-04/page.tsx
'use client';

import IntrospectionCard from '@/components/ui/IntrospectionCard';
import Link from 'next/link';
import {
  FaArrowRight,
  FaScaleBalanced,
  FaCircleExclamation,
  FaInfinity,
  FaTrashCan,
  FaQuoteLeft,
  FaCircleCheck,
  FaEye,
} from 'react-icons/fa6';

export default function BuddhaTeachingLife04() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl mb-6 shadow-sm">
            <FaScaleBalanced size={28} />
          </div>
          <span className="block text-indigo-600 font-bold tracking-widest uppercase text-sm mb-2">
            คำสอนจากพระไตรปิฎก
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 font-prompt leading-tight">
            ชีวิตของท่านต้องการ <br className="hidden md:block" /> ดับทุกข์หรือหลบทุกข์?
          </h1>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* --- ส่วนที่ 1: ทางเลือกสองทางของมนุษย์ --- */}
        <IntrospectionCard highlight={true} className="bg-indigo-900 border-indigo-500">
          <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90 py-4">
            <div className="flex justify-center gap-4 mb-6">
              <span className="bg-emerald-600 px-8 py-2 rounded-full font-bold text-white shadow-lg text-lg">
                ดับทุกข์
              </span>
              <span className="text-indigo-400 self-center">หรือ</span>
              <span className="bg-rose-700 px-8 py-2 rounded-full font-bold text-white shadow-lg text-lg">
                หลบทุกข์
              </span>
            </div>
            <p>
              มนุษย์ทุกคนเกิดมามีทางเลือกให้กับตัวเอง 2 ทางเท่านั้น คือ เลือกทางดับทุกข์ให้กับตนเอง
              หรือเลือกทางหลบทุกข์ให้กับตนเอง แต่ชีวิตนี้เลือกได้อย่างใดอย่างหนึ่งเท่านั้น
            </p>
            <p className="text-indigo-100 font-light italic">
              ที่เป็นอย่างนี้เพราะมนุษย์ทุกคนที่เกิดมาต้องการหนีทุกข์ไปหาสุขกันทุกคน
              แต่ละคนก็มีวิธีการไปหาสุขของตนเองแตกต่างกันไป แล้วแต่สติปัญญาของแต่ละคน
            </p>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 2: วังวนของการถมไม่เต็ม --- */}
        <div className="my-16">
          <IntrospectionCard>
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <div className="flex items-center gap-3 text-indigo-700 mb-4">
                <FaInfinity className="text-2xl animate-pulse" />
                <h3 className="text-2xl font-bold">วังวนที่หาที่สิ้นสุดไม่ได้</h3>
              </div>
              <p>
                ในสังคมของมนุษย์ปุถุชนแต่ละคนก็พาตนเองดิ้นรนไปแสวงหาสุขกันตลอดเวลาหรือตลอดชีวิตไม่มีอันสิ้นสุด
                เพราะความสุขของแต่ละคนนั้นมีมากถมไม่เต็ม
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-slate-300">
                <p className="text-indigo-900 font-medium">
                  "ถ้ามองดูตัวเองให้ดีแล้วก็จะเห็นความจริงว่า
                  สุขที่ต้องการหรือแสวงหานั้นเป็นสุขที่แสวงหามาปรนเปรอเสพเสวยทางตา หู จมูก ลิ้น กาย
                  ใจ เท่านั้น พอได้มาก็สุข ไม่ได้ก็ทุกข์ วนเวียนอยู่อย่างนี้ไปตลอดชีวิต"
                </p>
              </div>
              <p className="text-center font-bold text-indigo-700 pt-4">
                ตรงกับคำสอนของพระพุทธเจ้าว่า: <br />
                <span className="text-2xl md:text-3xl text-slate-800 underline decoration-indigo-200 underline-offset-8">
                  "ชีวิตของคนเราถมไม่เต็ม พร่องอยู่เป็นนิตย์"
                </span>
              </p>
            </div>
          </IntrospectionCard>
        </div>

        {/* --- ส่วนที่ 3: อุปมาเรื่อง "ขยะตกค้าง" (Highlight) --- */}
        <div className="my-16 space-y-8">
          <h4 className="text-center text-rose-500 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
            <FaTrashCan /> ระวังขยะสุขที่ใช้แล้ว
          </h4>

          <IntrospectionCard>
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <p>
                การแสวงหาสุขของคนเราทุกวันนี้แสวงหาด้วยความอยากความปรารถนา...
                พอได้สิ่งที่ตัวเองต้องการมาแล้วก็สุขแต่ก็เป็นสุขชั่วคราว
                เมื่อได้มาแล้วสักพักก็เบื่ออยากเอาทิ้งไปหรือผลักหนีไป
              </p>
              <div className="bg-rose-50 p-8 rounded-3xl border-l-8 border-rose-500 shadow-inner">
                <FaQuoteLeft className="text-rose-200 text-4xl mb-4 opacity-50" />
                <p className="text-2xl font-bold text-rose-900 mb-4">
                  ทุกข์ที่ทับถมนี้ก็คือสุขที่เราเสพเสวยแล้วนั่นเอง เรียกว่า ”ขยะตกค้าง”
                </p>
                <p className="text-rose-800">
                  อันนี้แหละที่เป็นขยะที่กำจัดออกจากตัวเองยากหรืออาจจะกำจัดไม่ได้เลยในชีวิตนี้
                  บางคนแบกขยะที่ได้มาจากที่เราไปหาสุขหรือขยะสุขที่เราใช้แล้วไม่ไหว
                  จึงทำให้ร่างกายทรุดโทรม อมโรค
                  ในที่สุดอาจจะจบชีวิตตัวเองด้วยการฆ่าตัวตายเพราะทนไม่ได้จากขยะสุขที่ตัวเองหามา
                </p>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* --- ส่วนที่ 4: บทสรุป - การหลบทุกข์ชั่วคราว --- */}
        <div className="mt-16">
          <IntrospectionCard highlight={true} className="bg-slate-900 border-indigo-500">
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaCircleExclamation className="text-amber-400 text-5xl" />
              <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90">
                <p className="font-bold text-amber-300">
                  การแสวงหาสุขโดยการหาสิ่งที่มาปรนเปรอเสพเสวยทางตา หู จมูก ลิ้น กาย ใจ <br />
                  นี้เรียกเป็นภาษาง่ายๆว่าการ ”หลบทุกข์ชั่วคราว”
                </p>
                <div className="w-16 h-px bg-white/20 mx-auto"></div>
                <p className="text-lg md:text-xl text-slate-400 font-light">
                  บุคคลทุกคนถ้าไม่ได้ศึกษาเรียนรู้พระธรรมคำสอนของพระพุทธเจ้าแล้ว{' '}
                  <br className="hidden md:block" />
                  ก็จะพาตัวเองเข้าไปสู่วังวนหลบทุกข์ชั่วคราวอย่างนี้ไปตลอดชีวิต
                </p>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-widest text-sm pt-4">
                <FaCircleCheck /> ศึกษาพระธรรมเพื่อทางดับทุกข์ที่แท้จริง
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link
            href="/buddhateaching/life-05"
            className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-indigo-200 hover:-translate-y-1"
          >
            ความพอดีของคนเราอยู่ตรงไหน?
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
