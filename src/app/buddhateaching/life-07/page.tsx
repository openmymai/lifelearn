// src/app/buddhateaching/life-07/page.tsx
'use client';

import IntrospectionCard from '@/components/ui/IntrospectionCard';
import Link from 'next/link';
import {
  FaArrowRight,
  FaScaleBalanced,
  FaCircleExclamation,
  FaLink,
  FaLinkSlash,
  FaQuoteLeft,
  FaCircleCheck,
  FaCalculator,
  FaArrowsSplitUpAndLeft,
  FaHeartCircleCheck,
} from 'react-icons/fa6';

export default function BuddhaTeachingLife07() {
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
            การรู้เท่าทันความพอใจและไม่พอใจ <br className="hidden md:block" />{' '}
            แก้ปัญหาหรือดับทุกข์ได้
          </h1>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* --- ส่วนที่ 1: นิยามของอวิชชาและความสุดโต่ง --- */}
        <IntrospectionCard>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700">
            <div className="flex items-center gap-3 text-rose-600 mb-4">
              <FaCircleExclamation className="text-2xl" />
              <h3 className="text-2xl font-bold">อวิชชาคือความเห็นผิด</h3>
            </div>
            <p>
              ความพอใจ ไม่พอใจ สรุปเรียกว่า อวิชชา” คือความเห็นสิ่งทั้งปวงที่มากระทบสัมผัสตัวเราผิด
              จึงไปหลงพอใจ ไม่พอใจ กับสิ่งนั้น ความพอใจ ไม่พอใจ เกิดขึ้นได้ 6 ทางเท่านั้น คือทางตา
              หู จมูก ลิ้น กาย ใจ เรียกว่า “อินทรีย์ 6”
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-rose-50 p-6 rounded-2xl border-t-4 border-rose-500">
                <p className="font-bold text-rose-800 mb-2">ความพอใจ (โลภะ)</p>
                <p className="text-sm text-rose-600 italic">“กามสุขัลลิกานุโยค”</p>
              </div>
              <div className="bg-slate-100 p-6 rounded-2xl border-t-4 border-slate-500">
                <p className="font-bold text-slate-800 mb-2">ความไม่พอใจ (โทสะ)</p>
                <p className="text-sm text-slate-500 italic">“อัตตกิลมถานุโยค”</p>
              </div>
            </div>
            <p className="text-center text-indigo-700 font-medium pt-4 italic">
              "พระองค์ท่านห้ามภิกษุเข้าไปเกี่ยวข้องที่สุดทั้งสองด้านนี้ ในพระธัมมจักรกัปปวัตนสูตร"
            </p>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 2: ความเคยชินในทางผิด (กรรมเก่ากระทบกรรมเก่า) --- */}
        <div className="my-16">
          <IntrospectionCard>
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <div className="flex items-center gap-3 text-indigo-700 mb-4">
                <FaArrowsSplitUpAndLeft className="text-2xl" />
                <h3 className="text-2xl font-bold">ความเคยชินและวัฏสงสาร</h3>
              </div>
              <p>
                การที่เรารู้ไม่เท่าทันความพอใจหรือไม่พอใจนี้ เรียกว่าความหลงหรือ “โมหะ”...
                สติของเราจะลากเอาความเคยชินที่มีมากที่สุดของเราคือโลภะ โทสะ โมหะ หรือความพอใจ
                ความไม่พอใจออกมารับการกระทบสัมผัสใจขณะปัจจุบันทุกครั้ง
              </p>
              <div className="bg-indigo-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <FaLink className="absolute -right-6 -bottom-6 text-white/5 text-9xl rotate-12" />
                <p className="text-center text-2xl font-bold leading-relaxed relative z-10">
                  "กรรมเก่าคือความพอใจ ไม่พอใจภายใน กับกรรมเก่าคือความพอใจ ไม่พอใจภายนอก
                  มากระทบกันแล้วหลอกให้ตัวเราสร้างกรรมใหม่ขึ้นมาอีก...
                  เป็นอย่างนี้หาที่สิ้นสุดไม่ได้"
                </p>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* --- ส่วนที่ 3: ปฏิจจสมุปบาท (สายเกิดแห่งทุกข์) --- */}
        <IntrospectionCard highlight={true} className="bg-slate-900 border-indigo-500">
          <div className="flex flex-col items-center text-center space-y-8 py-4">
            <FaLinkSlash className="text-rose-400 text-5xl" />
            <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90">
              <p className="font-bold text-amber-300">หลักปฏิจจสมุปบาทที่พระพุทธเจ้าตรัสรู้</p>
              <p className="text-lg leading-loose opacity-80">
                อวิชชา → สังขาร → วิญญาณ → นามรูป → สฬายตนะ → ผัสสะ → เวทนา → ตัณหา → อุปทาน → ภพ →
                ชาติ → ชรา มรณะ → โสกะ ปริเทวะ ทุกขโทมนัส อุปายาส
              </p>
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                <p className="text-2xl font-bold text-white italic">
                  “สิ่งนี้มี สิ่งนี้จึงมี สิ่งนี้ดับ สิ่งนี้จึงดับ”
                </p>
              </div>
              <p className="text-emerald-400 font-bold">
                ถ้าดับอวิชชาได้ ก็ดับความเกิดได้ ความเกิด ความแก่ ความเจ็บ ความตาย
                ก็ไม่มีดับทุกข์ได้ถาวร
              </p>
            </div>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 4: กระบวนการดับทุกข์ทางสายเอก --- */}
        <div className="my-16">
          <h3 className="text-2xl font-bold text-indigo-800 mb-8 flex items-center gap-3">
            <FaCircleCheck /> กระบวนการดับทุกข์
          </h3>
          <IntrospectionCard>
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <p>
                เมื่อเรารู้เท่าทันความจริงของโลกและชีวิตแล้ว ความจริงนี้ก็จะเข้าไปแทนความเชื่อ
                ที่เป็นความพอใจ ไม่พอใจ... พอสติดึงความจริงว่าไม่เที่ยงมาแล้ว
                ความพอใจไม่พอใจดับทันที
              </p>
              <div className="bg-indigo-50 p-6 rounded-2xl border-l-4 border-indigo-500">
                <p className="text-indigo-900 font-medium">
                  "ปัญญาที่ตามมากับความจริงว่า ไม่เที่ยง
                  ก็จะพิจารณาเหตุปัจจัยของสิ่งที่มากระทบสัมผัสและรู้ความจริงของสิ่งทั้งปวง...
                  ในจิตใจก็โปร่งโล่งไม่มีขยะมาสะสมไว้ ก็กำจัดทิ้งหมดทันทีที่ถูกกระทบสัมผัส"
                </p>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* --- ส่วนที่ 5: อุปมาสูตรคูณ (Highlight) --- */}
        <div className="my-16">
          <IntrospectionCard highlight={true} className="bg-indigo-600 border-indigo-400">
            <div className="flex flex-col items-center text-center space-y-6 py-4">
              <FaCalculator className="text-indigo-200 text-5xl animate-bounce" />
              <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white">
                <p className="font-bold text-amber-200">อุปมาปัญญาเหมือนสูตรคูณ</p>
                <FaQuoteLeft className="mx-auto text-white/20 text-4xl" />
                <p className="italic">
                  "ถ้าเจริญความจริงไว้ในจิตใจมากๆ ปัญญาก็จะเกิดขึ้นฝังติดแน่นอยู่ในจิตใจของเรา...
                  เช่นเดียวกับโจทย์เลขคณิต 7 x 8 มากระทบตา
                  สติจะดึงเอาคำตอบที่ท่องเก็บไว้ในใจออกมาตอบว่า 56 ถูกต้องเลย"
                </p>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* --- ส่วนที่ 6: บทสรุป - ถูกใจ vs ถูกต้อง --- */}
        <div className="mt-16">
          <IntrospectionCard highlight={true} className="bg-slate-900 border-indigo-500">
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaHeartCircleCheck className="text-emerald-400 text-5xl" />
              <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90">
                <p className="font-bold text-amber-300">
                  เลือกเอาสิ่งที่ "ถูกต้อง" ทิ้งสิ่งที่ "ถูกใจ"
                </p>
                <p>
                  ถ้าเรามีปัญญาหรือมีความรู้ที่ดับทุกข์ได้ สติก็จะดึงเอาปัญญามาตอบรับ
                  เลือกเอาสิ่งที่ถูกต้อง จะทิ้งสิ่งที่ถูกใจทันที ปัญหาหรือทุกข์ก็ไม่เกิดขึ้น
                </p>
                <div className="bg-white/10 p-8 rounded-[2.5rem] border border-white/20 shadow-2xl">
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    "การดับทุกข์หรือแก้ปัญหาให้กับตัวเองนั้นไม่ยากถ้ารู้เท่าทันความจริงของโลกและชีวิต"
                  </p>
                </div>
                <p className="text-lg text-slate-400 italic">
                  ถ้าฝึกตนเองเจริญความจริงตลอดเวลา จนเป็นปกติในชีวิตประจำวัน
                  บุคคลนั้นก็จะมีชีวิตอยู่ด้วยปัญญาเป็นบุคคลที่ไร้ทุกข์ถาวร
                </p>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link
            href="/buddhateaching/life-08"
            className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-indigo-200 hover:-translate-y-1"
          >
            ไตรสิกขาในพระไตรปิฎกเข้าใจถูกต้องแล้วหรือ?
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
