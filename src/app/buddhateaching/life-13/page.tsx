// src/app/buddhateaching/life-13/page.tsx
'use client';

import IntrospectionCard from '@/components/ui/IntrospectionCard';
import Link from 'next/link';
import {
  FaArrowRight,
  FaHandsPraying,
  FaDharmachakra,
  FaLinkSlash,
  FaArrowsToDot,
  FaEye,
  FaBrain,
  FaQuoteLeft,
  FaCircleCheck,
  FaLayerGroup,
  FaLightbulb,
} from 'react-icons/fa6';

export default function BuddhaTeachingLife13() {
  // ข้อมูลอริยสัจ 4 (คงเนื้อหาเดิมทุกตัวอักษร)
  const ariyaSacca = [
    {
      id: 1,
      title: 'ทุกข์',
      subtitle: 'ธรรมที่ควรกำหนดรู้ด้วยปัญญาอันยิ่ง',
      desc: 'รู้ว่าความพอใจและไม่พอใจที่เกิดขึ้นจากการกระทบสัมผัสทางอินทรีย์ 6 หรือตา หู จมูก ลิ้น กาย ใจ ในขณะปัจจุบันก็คือ ทุกข์',
      color: 'border-rose-200 bg-rose-50/30 text-rose-900',
    },
    {
      id: 2,
      title: 'สมุทัย',
      subtitle: 'ธรรมที่ควรละด้วยปัญญาอันยิ่ง',
      desc: 'การไม่รู้เท่าทันสิ่งที่มากระทบสัมผัสอินทรีย์ 6 ในขณะปัจจุบันเรียกว่า ความหลงหรือโมหะ ทำให้ไปหลงพอใจ ไม่พอใจกับสิ่งทั้งปวงที่เกิดขึ้นจากการกระทบสัมผัสทางตา หู จมูก ลิ้น กาย ใจ เรียกว่า เหตุของการเกิดทุกข์ หรือ สมุทัย',
      color: 'border-amber-200 bg-amber-50/30 text-amber-900',
    },
    {
      id: 3,
      title: 'นิโรธ',
      subtitle: 'ธรรมที่ควรทำให้แจ้งด้วยปัญญาอันยิ่ง',
      desc: 'ถ้าเรารู้เท่าทันสิ่งที่มากระทบสัมผัสตัวของเราทั้งอินทรีย์ 6 หรือตา หู จมูก ลิ้น กาย ใจ ตามความเป็นจริงของโลกและชีวิตว่าไม่เที่ยง เกิดดับ เกิดจากเหตุปัจจัยมาประชุมกันชั่วคราวแล้วแตกสลาย ไม่มีตัวตนเป็นของตนเอง ตามกฎธรรมชาติ 2 กฎ ที่พระพุทธเจ้าตรัสรู้ไว้ รู้อย่างนี้ดับทุกข์ได้ คือดับความพอใจและไม่พอใจ เรียกว่า นิโรธ',
      color: 'border-emerald-200 bg-emerald-50/30 text-emerald-900',
    },
    {
      id: 4,
      title: 'มรรค',
      subtitle: 'ธรรมที่ควรทำให้เจริญด้วยปัญญาอันยิ่ง',
      desc: 'การวิปัสสนาภาวนาพิจารณาขันธ์ 5 และอินทรีย์ 6 ให้รู้เท่าทันสิ่งทั้งปวงตามความเป็นจริงของโลกและชีวิตในขณะปัจจุบันเรียกว่า มรรค ทางดับทุกข์หรือ มรรคปฏิปทา ถ้าพิจารณาให้รู้เท่าทันสิ่งทั้งปวงที่มากระทบสัมผัสตัวเราในขณะปัจจุบันทางตา หู จมูก ลิ้น กาย ใจ แล้วจะมีสัมมาทิฐิ องค์ธรรมของมรรคองค์แรกเกิดขึ้นต่อไปองค์ธรรมของมรรคก็เกิดขึ้นครบ แล้วจะมีปัญญาหรือความรู้ที่ดับทุกข์ได้เกิดขึ้น ตามทันดับความพอใจหรือไม่พอใจทันทีที่ถูกกระทบสัมผัสในขณะปัจจุบัน จึงดับทุกข์หรือสมุทัยของทุกข์ ได้ทันที',
      color: 'border-blue-200 bg-blue-50/30 text-blue-900',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl mb-6 shadow-sm">
            <FaDharmachakra
              size={28}
              className="animate-spin-slow"
              style={{ animationDuration: '15s' }}
            />
          </div>
          <span className="block text-indigo-600 font-bold tracking-widest uppercase text-sm mb-2">
            บทสรุปพระธรรมคำสอน
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 font-prompt leading-tight">
            วิปัสสนาภาวนา รู้จริง รู้แจ้ง <br className="hidden md:block" /> อริยสัจ 4 ได้อย่างไร?
          </h1>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* --- ส่วนที่ 1: ทุกข์เกิดที่ไหนดับที่นั่น --- */}
        <IntrospectionCard>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700">
            <div className="flex items-center gap-3 text-indigo-700 mb-4">
              <FaHandsPraying className="text-2xl" />
              <h3 className="text-2xl font-bold">หัวใจของคำสอน 84,000 พระธรรมขันธ์</h3>
            </div>
            <p>
              พระพุทธเจ้าโคตมะได้สรุปคำสอนของพระองค์ท่านไว้ว่า
              ท่านสอนแต่เรื่องทุกข์และการดับทุกข์เท่านั้น และตรัสบอกไว้ว่าทุกข์ของคนเราเกิดที่ตา หู
              จมูก ลิ้น กาย ใจ หรืออินทรีย์ 6 นี่แหละ
            </p>
            <div className="bg-rose-50 p-6 rounded-2xl border-l-4 border-rose-500 italic text-rose-900">
              "ที่ทุกข์เกิดขึ้น ก็เพราะคนเราไม่รู้เท่าทันสิ่งที่มากระทบสัมผัส...
              จึงไปหลงพอใจไม่พอใจ... ความพอใจแปลว่า ความโลภ ความไม่พอใจแปลว่า ความโกรธ
              ตามไม่ทันเรียกว่า โมหะหรือความหลง"
            </div>
            <p className="text-center font-bold text-indigo-700 pt-4">
              โลภะ โทสะ โมหะ เป็นเหตุปัจจโยหรือสมุทัยของทุกข์ทั้งปวง
            </p>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 2: การกั้นตรงผัสสะ (Highlight) --- */}
        <div className="my-16">
          <IntrospectionCard highlight={true} className="bg-indigo-900 border-indigo-500">
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaArrowsToDot className="text-amber-300 text-5xl" />
              <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90">
                <p className="font-bold text-amber-300">กั้นตรงผัสสะ ไม่ให้เลยไปถึงเวทนา</p>
                <p>
                  จะดับความเชื่อได้ก็ต้องเอาความจริงมาดับ... เอาความจริงคำว่า{' '}
                  <span className="text-white font-bold underline decoration-amber-500 underline-offset-8">
                    ไม่เที่ยง เกิดดับ
                  </span>{' '}
                  มาตั้งกั้นความเชื่อไว้ที่อินทรีย์ 6 เพื่อรับการกระทบสัมผัสในขณะปัจจุบัน
                </p>
                <div className="bg-white/10 p-8 rounded-3xl border border-white/20 shadow-inner">
                  <p className="text-2xl font-bold text-white">
                    "ความเชื่อคือความพอใจและไม่พอใจจะถูกดับทันที
                    ทุกข์หรือปัญหาก็จะถูกดับลงไปตั้งแต่ถูกกระทบ"
                  </p>
                </div>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* --- ส่วนที่ 3: การเข้าถึงอริยสัจ 4 (Core Content) --- */}
        <div className="my-20 space-y-12">
          <h3 className="text-3xl font-bold text-center text-indigo-900 font-prompt">
            การเข้าถึงอริยสัจ 4
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {ariyaSacca.map((item) => (
              <div
                key={item.id}
                className={`p-8 rounded-[2.5rem] border-2 ${item.color} shadow-sm hover:shadow-md transition-all`}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl font-black shadow-sm">
                    {item.id}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold uppercase tracking-wider">{item.title}</h4>
                    <p className="text-sm opacity-70 font-medium italic">{item.subtitle}</p>
                  </div>
                </div>
                <p className="text-xl leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- ส่วนที่ 4: โพธิปักขิยธรรม 37 ประการ --- */}
        <IntrospectionCard className="mt-12">
          <div className="space-y-6 text-xl leading-relaxed text-slate-700">
            <div className="flex items-center gap-3 text-indigo-700 mb-4">
              <FaLayerGroup className="text-2xl" />
              <h3 className="text-2xl font-bold">องค์ธรรมแห่งการบรรลุ</h3>
            </div>
            <p>
              เมื่อมีมรรคมีองค์ 8 เกิดขึ้นแล้ว ต่อไปก็มีสติปัฏฐาน 4 สัมมัปปธาน 4 อิทธิบาท 4 อินทรีย์
              5 พละ 5 โพชฌงค์ 7 เกิดขึ้นครบ{' '}
              <span className="text-indigo-700 font-bold">โพธิปักขิยธรรม 37 ประการ</span>
            </p>
            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
              <p className="text-emerald-900 font-medium">
                "เมื่อดับเหตุของทุกข์หรือสมุทัยได้แล้วก็ดับอวิชชาได้ เมื่อดับอวิชชาได้แล้ว
                ก็ดับความเกิดได้ มีปัญญารู้จริง รู้แจ้งในอริยสัจ 4 ที่พระพุทธเจ้าตรัสรู้ไว้"
              </p>
            </div>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 5: บทสรุปปิดท้ายหมวด --- */}
        <div className="mt-16">
          <IntrospectionCard highlight={true} className="bg-slate-900 border-indigo-500">
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaLightbulb className="text-amber-400 text-5xl animate-pulse" />
              <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90">
                <FaQuoteLeft className="mx-auto text-indigo-400 opacity-50 text-3xl" />
                <p className="text-2xl md:text-3xl font-bold text-white">
                  พระธรรมที่เป็นทางสายเอกที่พระพุทธเจ้าตรัสรู้ <br />
                  คือการวิปัสสนาภาวนาพิจารณาขันธ์ 5 และอินทรีย์ 6
                </p>
                <div className="w-16 h-px bg-white/20 mx-auto"></div>
                <p className="text-xl text-indigo-200 italic">
                  "เป็นเหตุของการตรัสรู้ รู้จริง รู้แจ้ง ในอริยสัจ 4{' '}
                  <br className="hidden md:block" /> มีปัญญาดับทุกข์ได้ถาวร"
                </p>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-widest text-sm pt-4">
                <FaCircleCheck /> จบหมวดพระธรรมคำสอน
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link
            href="/introduction"
            className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-indigo-200 hover:-translate-y-1"
          >
            กลับสู่บทสรรเสริญคุณพระรัตนตรัย
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
