// src/app/buddhateaching/life-05/page.tsx
'use client';

import IntrospectionCard from '@/components/ui/IntrospectionCard';
import Link from 'next/link';
import {
  FaArrowRight,
  FaScaleBalanced,
  FaHandsPraying,
  FaQuoteLeft,
  FaCircleCheck,
  FaEye,
  FaEarListen,
  FaWind,
  FaUtensils,
  FaHandPointer,
  FaBrain,
  FaSeedling,
  FaBookOpen,
} from 'react-icons/fa6';

export default function BuddhaTeachingLife05() {
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
            ความพอดีของคนเรา <br className="hidden md:block" /> อยู่ตรงไหน?
          </h1>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* --- ส่วนที่ 1: การแสวงหาความพอดีที่ผิดทาง --- */}
        <IntrospectionCard>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700">
            <p>
              คนเราทุกคนเกิดมาต้องดิ้นรนเสาะแสวงหาความพอดีให้กับตัวเองตลอดเวลา
              แต่ก็ไม่ประสบความสำเร็จในแต่ละชีวิต ขาดไปบ้าง เกินไปบ้าง พยายามเสาะแสวงหาไปตลอดชีวิต
              แล้วก็ไม่มีใครพบความพอดีให้กับตนเองได้ง่ายๆ
            </p>
            <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-slate-300 italic text-slate-600">
              "ที่เป็นอย่างนี้ก็เพราะคนเราเกิดมาไม่มีความรู้เพียงพอที่จะไปแสวงหาความพอดีให้กับตนเอง
              แม้กระทั่งความรู้เกี่ยวกับตัวของตัวเอง คนเรายังไม่รู้จัก ซึ่งอยู่กับตัวเรานี่แหละ
              ใกล้ชิดติดกันอย่างนี้ยังไม่รู้จักแล้วจะไปรู้จักสิ่งอื่นๆนั้นไกลเกินไป"
            </div>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 2: เป้าหมายชีวิตคือสุขถาวร (นิพพาน) --- */}
        <IntrospectionCard highlight={true} className="bg-indigo-900 border-indigo-500">
          <div className="flex flex-col items-center text-center space-y-6 py-4">
            <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90">
              <p>
                คนเราเกิดมาเพื่อจะหนีทุกข์ไปหาสุขกันทุกคน สุขนั้นก็ต้องการสุขที่ถาวรตลอดไป
                สุขชั่วคราวไม่มีผู้ใดต้องการ สุขถาวรที่ทุกคนต้องการแปลเป็นภาษาธรรมเรียกว่า{' '}
                <span className="text-amber-300 font-bold">“นิพพาน”</span>
              </p>
              <p className="text-3xl font-bold text-white underline decoration-amber-500 underline-offset-8">
                เป้าหมายของชีวิตคนเราทุกคนคือ “นิพพาน”
              </p>
            </div>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 3: เครื่องมือฝึกฝนตนเอง (อินทรีย์ 6) --- */}
        <IntrospectionCard>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700">
            <div className="flex items-center gap-3 text-indigo-700 mb-4">
              <FaHandsPraying className="text-2xl" />
              <h3 className="text-2xl font-bold">มนุษย์เป็นสัตว์ประเสริฐด้วยการฝึก</h3>
            </div>
            <p>
              ชีวิตของคนเราคือการศึกษาเรียนรู้ฝึกฝนตนเองคนเราทุกคนเกิดมาไม่ได้อะไรมาฟรีๆ
              ต้องศึกษาเรียนรู้เอาทั้งหมด... พระพุทธเจ้าตรัสไว้ว่ามนุษย์เป็นสัตว์ประเสริฐด้วยการฝึก
              ถ้าไม่ฝึกแล้วเลวยิ่งกว่าสัตว์เดรัจฉาน
            </p>
            <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
              <p className="font-bold text-indigo-900 mb-2">เครื่องมือที่ธรรมชาติให้มา:</p>
              <p>
                คนเราจะฝึกฝนตนเองได้ที่ตา หู จมูก ลิ้น กาย ใจ ที่เรียกว่า{' '}
                <span className="text-indigo-700 font-bold">อินทรีย์ 6</span> ถ้าใช้อินทรีย์ 6
                ในการทางการศึกษาเรียนรู้ชีวิตของคนๆนั้นก็จะปัญหาน้อย พบแต่ความสุข
              </p>
            </div>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 4: ที่สุดโต่ง 2 ด้าน และทางสายกลาง --- */}
        <div className="my-16 space-y-8">
          <h4 className="text-center text-slate-400 font-medium uppercase tracking-widest">
            ความพอดีคือหลักสายกลาง
          </h4>
          <IntrospectionCard>
            <div className="space-y-8 text-xl leading-relaxed text-slate-700">
              <p>พระพุทธเจ้าตรัสไว้ว่าที่สุดโต่งของมนุษย์มี 2 ด้าน:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-rose-50 p-6 rounded-2xl border-t-4 border-rose-500">
                  <p className="font-bold text-rose-800 mb-2">๑. ความพอใจ</p>
                  <p className="text-sm text-rose-600 mb-2">(กามสุขัลลิกานุโยค)</p>
                  <p>คือความโลภ</p>
                </div>
                <div className="bg-slate-100 p-6 rounded-2xl border-t-4 border-slate-500">
                  <p className="font-bold text-slate-800 mb-2">๒. ความไม่พอใจ</p>
                  <p className="text-sm text-slate-500 mb-2">(อัตตกิลมถานุโยค)</p>
                  <p>คือความโกรธ</p>
                </div>
              </div>
              <p className="text-center font-bold text-indigo-700 bg-indigo-50 p-6 rounded-2xl">
                ความพอดีของชีวิตก็คือหลักสายกลางหรือหลักของความจริง
                ไม่ไปเกี่ยวข้องกับความพอใจไม่พอใจ โดยรู้เท่าทันความจริงของโลกและชีวิตคือกฎธรรมชาติ 2
                กฎ
              </p>
            </div>
          </IntrospectionCard>
        </div>

        {/* --- ส่วนที่ 5: วิธีปฏิบัติในชีวิตประจำวัน --- */}
        <div className="my-16">
          <h3 className="text-2xl font-bold text-indigo-800 mb-8 flex items-center gap-3">
            <FaCircleCheck /> วิธีปฏิบัติให้ถึงความพอดี
          </h3>
          <div className="space-y-4">
            {[
              {
                icon: <FaEye />,
                label: 'ตาเห็นรูป',
                text: 'รูปไม่เที่ยงเกิดดับ ตัวของเราก็ไม่เที่ยงเกิดดับ',
              },
              {
                icon: <FaEarListen />,
                label: 'หูได้ยินเสียง',
                text: 'เสียงไม่เที่ยงเกิดดับ ตัวของเราก็ไม่เที่ยงเกิดดับ',
              },
              {
                icon: <FaWind />,
                label: 'จมูกได้กลิ่น',
                text: 'กลิ่นไม่เที่ยงเกิดดับ ตัวของเราก็ไม่เที่ยงเกิดดับ',
              },
              {
                icon: <FaUtensils />,
                label: 'ลิ้นกระทบรส',
                text: 'รสไม่เที่ยงเกิดดับ ตัวของเราก็ไม่เที่ยงเกิดดับ',
              },
              {
                icon: <FaHandPointer />,
                label: 'กายกระทบสัมผัส',
                text: 'สิ่งที่มากระทบสัมผัสไม่เที่ยงเกิดดับ ตัวของเราก็ไม่เที่ยงเกิดดับ',
              },
              {
                icon: <FaBrain />,
                label: 'ใจนึกคิด',
                text: 'ความคิดไม่เที่ยงเกิดดับ ตัวของเราก็ไม่เที่ยงเกิดดับ',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4"
              >
                <div className="text-indigo-500 w-8 flex justify-center">{item.icon}</div>
                <p className="text-lg">
                  <span className="font-bold text-slate-800">{item.label}:</span> พิจารณาว่า{' '}
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- ส่วนที่ 6: อุปมาเมล็ดมะม่วง (Highlight) --- */}
        <div className="my-16">
          <IntrospectionCard highlight={true} className="bg-emerald-800 border-emerald-600">
            <div className="flex flex-col items-center text-center space-y-6 py-4">
              <FaSeedling className="text-emerald-300 text-5xl animate-bounce" />
              <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white">
                <p className="font-bold text-emerald-200">อุปมาการแก้ปัญหาที่ต้นเหตุ</p>
                <FaQuoteLeft className="mx-auto text-white/20 text-4xl" />
                <p className="italic">
                  "อุปมาเหมือนเมล็ดมะม่วงที่งอกขึ้นมาแล้วก็รีบบี้มันทิ้งเสียทันทีที่มันงอก
                  มะม่วงก็ไม่มีต้นเกิดขึ้นให้รกรุงรังในบ้านของเราอีก ฉันใด ก็ฉันนั้น"
                </p>
                <p className="text-lg text-emerald-100">
                  ปัญญาที่เกิดขึ้นก็จะแก้ปัญหาให้กับท่านตั้งแต่ถูกกระทบสัมผัส
                  แล้วปัญหาที่เกิดขึ้นต่อไปอีกก็ไม่มี
                </p>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* --- ส่วนที่ 7: บทสรุป - ความไม่ประมาท --- */}
        <div className="mt-16">
          <IntrospectionCard highlight={true} className="bg-slate-900 border-indigo-500">
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaBookOpen className="text-amber-400 text-5xl" />
              <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90">
                <p>
                  ความพอดีของชีวิตทุกคนอยู่ที่การรู้เท่าทันสิ่งที่มากระทบสัมผัสตัวของเราทางตา หู
                  จมูก ลิ้น กาย ใจ ในขณะปัจจุบันตามความเป็นจริงของโลกและชีวิตว่า
                </p>
                <p className="text-2xl md:text-3xl font-bold text-amber-300 underline decoration-amber-500 underline-offset-8">
                  สิ่งทั้งปวงไม่เที่ยงเกิดดับ เกิดจากเหตุปัจจัยมาประชุมกันชั่วคราวเท่านั้น
                  ไม่มีตัวตนเป็นของตนเอง ว่างเปล่าจากตนและของตน
                </p>
                <p className="text-lg text-slate-400 italic">
                  รู้เห็นอย่างนี้พระพุทธเจ้าตรัสว่าเป็นผู้ไม่ประมาท
                  เมื่อไม่ประมาทแล้วก็จะนำพาตัวเองตั้งอยู่ในความพอดีของชีวิต
                </p>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link
            href="/buddhateaching/life-06"
            className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-indigo-200 hover:-translate-y-1"
          >
            การเจริญสติปัญญาที่ถูกต้องทำอย่างไร?
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
