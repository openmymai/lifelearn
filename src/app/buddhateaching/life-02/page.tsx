// src/app/buddhateaching/life-02/page.tsx
'use client';

import IntrospectionCard from '@/components/ui/IntrospectionCard';
import Link from 'next/link';
import {
  FaArrowRight,
  FaLightbulb,
  FaShieldHalved,
  FaArrowsToDot,
  FaEye,
  FaEarListen,
  FaWind,
  FaUtensils,
  FaHandPointer,
  FaBrain,
  FaCircleExclamation,
  FaBookOpen,
  FaQuoteLeft,
} from 'react-icons/fa6';

export default function BuddhaTeachingLife02() {
  // ข้อมูลตัวอย่างการพิจารณาทางอินทรีย์ 6
  const senseExamples = [
    {
      icon: <FaEye />,
      label: 'ตาเห็นรูป',
      text: 'รูปไม่เที่ยงเกิดดับ ตัวของเราก็ไม่เที่ยงเกิดดับ',
    },
    {
      icon: <FaEarListen />,
      label: 'หู กระทบเสียง',
      text: 'เสียงไม่เที่ยงเกิดดับ ตัวของเราก็ไม่เที่ยงเกิดดับ',
    },
    {
      icon: <FaWind />,
      label: 'จมูกกระทบกลิ่น',
      text: 'กลิ่นไม่เที่ยงเกิดดับ ตัวของเราก็ไม่เที่ยงเกิดดับ',
    },
    {
      icon: <FaUtensils />,
      label: 'ลิ้นกระทบรส',
      text: 'รสไม่เที่ยงเกิดดับ ตัวของเราก็ไม่เที่ยงเกิดดับ',
    },
    {
      icon: <FaHandPointer />,
      label: 'กายกระทบเย็นร้อนฯ',
      text: 'สิ่งที่มากระทบไม่เที่ยงเกิดดับ ตัวของเราก็ไม่เที่ยงเกิดดับ',
    },
    {
      icon: <FaBrain />,
      label: 'ใจคิดนึก',
      text: 'ความคิดไม่เที่ยงเกิดดับ ตัวของเราก็ไม่เที่ยงเกิดดับ',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl mb-6 shadow-sm">
            <FaLightbulb size={28} />
          </div>
          <span className="block text-indigo-600 font-bold tracking-widest uppercase text-sm mb-2">
            คำสอนจากพระไตรปิฎก
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 font-prompt leading-tight">
            วิธีเจริญหรือสร้างปัญญา <br className="hidden md:block" /> ปฏิบัติอย่างไร?
          </h1>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* --- ส่วนที่ 1: เทคนิคการใช้สติกั้นผัสสะ --- */}
        <IntrospectionCard>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700">
            <div className="flex items-center gap-3 text-indigo-700 mb-4">
              <FaShieldHalved className="text-2xl" />
              <h3 className="text-2xl font-bold">การกั้นขณะกระทบสัมผัส</h3>
            </div>
            <p>
              เมื่อมีอะไรมากระทบสัมผัส ตา หู จมูก ลิ้น กาย ใจ หรืออินทรีย์ 6 แล้ว ให้ฝึกใช้สติ ดึง
              ลาก หรือระลึกเอาความจริงของโลกและชีวิตว่า สิ่งทั้งปวงไม่เที่ยงเกิดดับ
              เกิดจากเหตุปัจจัยมาประชุมกันชั่วคราว ซึ่งสรุปเหลือคำเดียวว่า{' '}
              <span className="text-indigo-700 font-bold">"ไม่เที่ยง เกิดดับ"</span>{' '}
              มากั้นขณะกระทบสัมผัสไว้ก่อนทุกครั้งเมื่อถูกกระทบสัมผัส (ตรงผัสสะ)
            </p>
            <div className="bg-indigo-50 p-6 rounded-2xl border-l-4 border-indigo-500 italic">
              "ความจริงเหมือนหน้าปัญญาเหมือนหลัง ลากเอาหน้ามาแล้วหลังก็ตามมา
              เมื่อความจริงมาแล้วปัญญาจะตามมาทันทีพิจารณาสิ่งที่มากระทบสัมผัสตัวของเรา"
            </div>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 2: ตัวอย่างการพิจารณาทางอินทรีย์ 6 --- */}
        <div className="my-12 space-y-4">
          <h4 className="text-center text-slate-400 font-medium uppercase tracking-widest mb-8">
            ตัวอย่างการพิจารณา
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {senseExamples.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-slate-50 text-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-bold text-slate-800 mb-1">{item.label}</p>
                  <p className="text-slate-600 leading-relaxed">
                    ปัญญาก็จะพิจารณาว่า <span className="text-indigo-600">{item.text}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- ส่วนที่ 3: การดับทุกข์และโพธิปักขิยธรรม --- */}
        <IntrospectionCard highlight={true} className="bg-indigo-900">
          <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90">
            <p>
              ให้พิจารณาอย่านี้ตลอดเวลาเมื่อถูกกระทบสัมผัสจนเป็นปกตินิสัยในชีวิตประจำวัน
              และปัญญาจะเกิดขึ้นทางอินทรีย์ 6 นี้ อย่างมหาศาล ปัญญา หรือ ความจริงนี้ก็จะดับความพอใจ
              ไม่พอใจ หรือความหลง หรืออวิชชาทันที
            </p>
            <div className="bg-white/10 p-8 rounded-3xl border border-white/20 text-center">
              <FaQuoteLeft className="mx-auto text-indigo-300 opacity-50 text-3xl mb-4" />
              <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                "ทุกข์เกิดที่ไหนดับที่นั่น"
              </p>
              <p className="text-lg text-indigo-100">
                นี่คือเอาพระธรรมคำสอนของพระพุทธเจ้าที่เป็นเหตุของการตรัสรู้ของพระองค์ท่านมาปฏิบัติ
                ปฏิบัติแล้วสัมมาทิฐิเกิดขึ้นทันที หลังจากสติดึงความจริงมาตั้งกั้นความเชื่อตรงผัสสะ
                หรือตรงที่กระทบ
              </p>
            </div>
            <p className="text-center text-lg text-amber-300 font-bold uppercase tracking-widest pt-4">
              มรรคมีองค์ 8 และโพธิปักขิยธรรม 37 ประการจะเกิดขึ้นตามมา
            </p>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 4: ความสำเร็จตามพุทธพจน์ --- */}
        <div className="my-16 text-center">
          <IntrospectionCard>
            <p className="text-xl leading-relaxed text-slate-700">
              ชาวโลกมีทั้งเจ้าฟ้ามหากษัตริย์ นักปราชญ์ ราชบัณฑิต คนธรรมดาทั่วไป
              ได้นำคำสอนของพระพุทธองค์อันนี้ไปปฏิบัติ
              จึงได้ตรัสรู้เหมือนกับพระองค์ท่านมากมายเรียกว่าพระอรหันต์สาวก
              <span className="block mt-4 text-2xl font-bold text-indigo-700 underline decoration-indigo-200 underline-offset-8">
                ประสบความสำเร็จได้ภายใน 7 วัน 7 เดือน 7 ปี อย่างช้า
              </span>
            </p>
          </IntrospectionCard>
        </div>

        {/* --- ส่วนที่ 5: คำเตือนเรื่องครูบาอาจารย์และการศึกษา --- */}
        <div className="my-16 space-y-8">
          <h4 className="text-center text-rose-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
            <FaCircleExclamation /> คำเตือนเพื่อป้องกันความผิดพลาด
          </h4>

          <IntrospectionCard>
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <p>
                ถ้าหากท่านจะทำอะไรในชีวิตของท่าน
                ท่านต้องศึกษาเรียนรู้สิ่งที่ตัวของท่านจะไปทำก่อนจนเข้าใจดีแล้วค่อยทำ...
                ถ้าหากท่านปฏิบัติผิดพลาด โดยเฉพาะทางธรรม
                นั่นหมายถึงท่านเสียเวลาชีวิตของท่านไปชาติหนึ่ง
              </p>
              <div className="bg-rose-50 p-6 rounded-2xl border-l-4 border-rose-400">
                <p className="text-rose-900 font-medium">
                  "บางท่านก็ใจร้อนอยากประสบความสำเร็จในชีวิตเร็วๆขึ้น
                  จึงได้ไปปฏิบัติกับครูบาอาจารย์ทันที
                  โดยไม่ได้พิจารณาว่าครูบาอาจารย์ของท่านนั้นท่านได้ศึกษาเล่าเรียนพระธรรมคำสอนของพระพุทธเจ้าจนจบพระไตรปิฎกหรือไม่"
                </p>
              </div>
            </div>
          </IntrospectionCard>

          <IntrospectionCard highlight={true} className="bg-slate-900 border-indigo-500">
            <div className="flex flex-col items-center text-center space-y-6 py-4">
              <FaBookOpen className="text-amber-400 text-4xl" />
              <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white">
                <p className="font-bold text-amber-300">
                  ควรศึกษาพระธรรมคำสอนของพระพุทธเจ้าให้จบพระไตรปิฎกอย่างน้อย 2-3 จบ
                  ไว้เป็นพื้นฐานก่อน
                </p>
                <p className="text-slate-300 text-lg">
                  ไม่ใช่ว่าจะนำตัวของท่านไปถึงแค่ครูบาอาจารย์ของท่านเท่านั้น
                  อย่างนี้เรียกว่าท่านประมาทมาก
                  ท่านต้องพาตัวของท่านขึ้นเลยไปถึงพระพุทธเจ้าด้วยจึงจะถูกต้อง
                  แล้วเอาคำสอนของครูบาอาจารย์ของเรามาเทียบเคียงกับคำสอนของพระพุทธเจ้า
                </p>
                <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
                  <p className="text-emerald-400 font-bold">
                    อย่างนี้เรียกว่าปฏิบัติธรรมถูกธรรม เป็นผู้ไม่ประมาท <br />
                    จะมีปัญญาแก้ปัญหาหรือดับทุกข์ได้พบสุขถาวรได้ในชาตินี้
                  </p>
                </div>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link
            href="/buddhateaching/life-03"
            className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-indigo-200 hover:-translate-y-1"
          >
            ปฏิบัติธรรมอย่างไรจึงจะถูกทาง?
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
