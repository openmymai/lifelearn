// src/app/buddhateaching/life-03/page.tsx
'use client';

import IntrospectionCard from '@/components/ui/IntrospectionCard';
import Link from 'next/link';
import {
  FaArrowRight,
  FaCompass,
  FaCircleExclamation,
  FaLightbulb,
  FaHandsPraying,
  FaQuoteLeft,
  FaCircleCheck,
  FaEye,
  FaArrowsSpin,
  FaScaleBalanced,
} from 'react-icons/fa6';

export default function BuddhaTeachingLife03() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl mb-6 shadow-sm">
            <FaCompass size={28} />
          </div>
          <span className="block text-indigo-600 font-bold tracking-widest uppercase text-sm mb-2">
            คำสอนจากพระไตรปิฎก
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 font-prompt leading-tight">
            ปฏิบัติธรรมอย่างไร <br className="hidden md:block" /> จึงจะถูกทาง?
          </h1>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* --- ส่วนที่ 1: ความรู้ต้องมาก่อนการกระทำ --- */}
        <IntrospectionCard>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700">
            <p>
              การจะปฏิบัติธรรมให้ถูกทางได้นั้นก็มีลักษณะเดียวกับการกระทำใดๆของเราในทางโลกที่จะทำถูกได้นั้นต้องมีการศึกษาเรียนรู้สิ่งที่เราจะไปทำนั้นให้รู้และเข้าใจในสิ่งนั้นๆ
              ให้ดีก่อน การกระทำของเราในสิ่งนั้นจึงจะถูกต้องครบถ้วน
              มีผลสำเร็จเกิดขึ้นตามที่เราได้ตั้งใจไว้ มีเพียงความตั้งใจเฉยๆ ไม่มีความรู้ประกอบแล้ว
              การกระทำของเราไม่ว่าทางโลกหรือทางธรรมก็ไม่ประสบความสำเร็จ เพราะเป็นการหลับตากระทำ
              หรือทำโดยความไม่รู้
            </p>
            <div className="bg-indigo-50 p-6 rounded-2xl border-l-4 border-indigo-500">
              <p className="font-medium text-indigo-900">
                การปฏิบัติธรรมนั้น
                ทางที่ถูกต้องและมีผลสำเร็จเกิดขึ้นตามที่ตัวเองตั้งใจไว้คือดับทุกข์ได้ให้กับตัวเองนั้น
                ต้องศึกษาเรียนรู้พระธรรมคำสอนของพระพุทธเจ้าในพระไตรปิฎกให้จบหลายๆรอบจนเข้าใจในพระธรรมคำสอนนั้นพอสมควร
              </p>
            </div>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 2: คำเตือนเรื่องการหลงทางในสมาธิ --- */}
        <div className="my-16 space-y-8">
          <h4 className="text-center text-rose-500 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
            <FaCircleExclamation /> ระวังการติดตาข่ายของพญามาร
          </h4>
          <IntrospectionCard>
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <p>
                ถ้าผู้ปฏิบัติไม่เข้าใจพระธรรมคำสอนดังที่กล่าวมาแล้ว การปฏิบัติธรรมของเขาก็ไม่ถูกทาง
                พาตัวเองหลงเข้าไปในคำสอนของพราหมณ์ ไปหลบทุกข์อยู่ที่ความสงบหรือสมาธิ
                ซึ่งเป็นผลร้ายต่อผู้ปฏิบัติอย่างยิ่ง
                เพราะไม่สามารถแก้ไขตนเองกลับมาปฏิบัติในทางที่ถูกต้องดับทุกข์ได้
              </p>
              <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100 text-rose-900">
                <p>
                  "เพราะถ้าหลงทางเข้าไปในสมาธิโดยที่ตัวเองยังไม่มีปัญญาประกอบในการทำสมาธินั้นการกระทำอย่างนั้นเรียกว่าไปผิดทางหรือมิจฉาทิฏฐิเสียเวลาชีวิตของตนเองไปอีกชาติหนึ่ง...
                  ในที่สุดตัวเองก็จะเข้าไปติดตาข่ายของพญามารเวียนว่ายตายเกิดต่อไปอีกนับชาติไม่ถ้วน"
                </p>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* --- ส่วนที่ 3: ทางสายเอก - กำมือเดียวที่ดับทุกข์ได้ --- */}
        <IntrospectionCard highlight={true} className="bg-indigo-900">
          <div className="flex flex-col items-center text-center space-y-8 py-4">
            <FaLightbulb className="text-amber-300 text-4xl animate-pulse" />
            <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90">
              <p className="font-bold text-amber-300">
                สรุปพระธรรมคำสอนทั้งหมด 84,000 พระธรรมขันธ์ <br /> เหลือเพียงกำมือเดียวเท่านั้น
              </p>
              <p>
                นั่นคือการวิปัสสนาภาวนาพิจารณาขันธ์ 5 อินทรีย์ 6
                ให้รู้เห็นสิ่งทั้งปวงที่มากระทบสัมผัสตัวเราในขณะปัจจุบันตามความเป็นจริงของโลกและชีวิต
                ว่าสิ่งทั้งปวงไม่เที่ยงเกิดดับมีเหตุปัจจัยมาประชุมกันชั่วคราวไม่มีตัวตนเป็นของตนเอง
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-lg">
                <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                  <span className="text-amber-200 font-bold">กฎไตรลักษณ์:</span> อนิจจัง ทุกขัง
                  อนัตตา
                </div>
                <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                  <span className="text-amber-200 font-bold">กฎเหตุปัจจัย:</span> อิทัปปัจจยตา
                  ปฏิจจสมุปบาท
                </div>
              </div>
            </div>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 4: วิธีฝึกฝนในชีวิตประจำวัน --- */}
        <div className="my-16">
          <h3 className="text-2xl font-bold text-indigo-800 mb-8 flex items-center gap-3">
            <FaArrowsSpin className="animate-spin-slow" style={{ animationDuration: '10s' }} />{' '}
            วิธีฝึกฝนตนเอง
          </h3>
          <IntrospectionCard>
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <p>
                เริ่มตั้งแต่ตื่นนอนขึ้นมาแล้วให้ฝึกให้รู้เห็นความจริงว่าสิ่งทั้งหลายทั้งปวงรวมทั้งตัวของเรานี้ไม่เที่ยงเกิดดับ...
                ห้ามนั่งจดจ้องหรือกำหนดจิตตามดูสิ่งที่มากระทบให้ปฏิบัติตามปกติในชีวิตประจําวัน
                ถูกกระทบค่อยพิจารณาไม่ถูกกระทบก็ไม่พิจารณา ปฏิบัติอย่างนี้เรียกว่าเจริญปัญญา
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: 'ตาเห็นรูป', text: 'รูปไม่เที่ยงเกิดดับ ตัวเราก็ไม่เที่ยงเกิดดับ' },
                  {
                    label: 'หูได้ยินเสียง',
                    text: 'เสียงไม่เที่ยงเกิดดับ ตัวเราก็ไม่เที่ยงเกิดดับ',
                  },
                  { label: 'จมูกได้กลิ่น', text: 'กลิ่นไม่เที่ยงเกิดดับ ตัวเราก็ไม่เที่ยงเกิดดับ' },
                  { label: 'ลิ้นได้รส', text: 'รสไม่เที่ยงเกิดดับ ตัวเราก็ไม่เที่ยงเกิดดับ' },
                  { label: 'กายสัมผัส', text: 'สัมผัสไม่เที่ยงเกิดดับ ตัวเราก็ไม่เที่ยงเกิดดับ' },
                  { label: 'ใจคิดนึก', text: 'ความคิดไม่เที่ยงเกิดดับ ตัวเราก็ไม่เที่ยงเกิดดับ' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="font-bold text-indigo-700">{item.label}:</span> {item.text}
                  </div>
                ))}
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* --- ส่วนที่ 5: การแยกแยะผู้รับคำสอน (อริยบุคคล vs ปุถุชน) --- */}
        <IntrospectionCard>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700">
            <div className="flex items-center gap-3 text-indigo-700 mb-4">
              <FaEye className="text-2xl" />
              <h3 className="text-2xl font-bold">เข้าใจกลุ่มเป้าหมายของพุทธพจน์</h3>
            </div>
            <p>
              บางคนอ่านพระไตรปิฎกแล้วไม่เข้าใจ... เช่นที่ตรัสว่า "ดูกรภิกษุ
              ถ้าพวกเธอทำสมาธิให้ได้ฌาน 4 และเอาฌาน 4 ไปพิจารณาอาสวักขยญาณ..."
              ท่านตรัสสอนพระอริยบุคคลตั้งแต่โสดาบันบุคคลขึ้นไป เพราะท่านเหล่านั้นมีสัมมาทิฐิแล้ว
            </p>
            <div className="bg-amber-50 p-6 rounded-2xl border-l-4 border-amber-500 italic">
              "พูดง่ายๆว่าเราเรียนอยู่ชั้น ป.4 แล้วเอาหลักสูตร ม.6 มาเรียน เรียนอย่างไรก็ไม่เข้าใจ
              ไม่เข้าใจก็ปฏิบัติหรือทำผิดคำสอนแน่นอน ฉันใด ฉันนั้น"
            </div>
            <p>
              ถ้าบุคคลธรรมดาเอาไปปฏิบัติ (กำหนดหนอต่างๆ) จะเป็นการปฏิบัติธรรมอย่างผิดธรรม
              มีผลออกมาเป็นสมาธิหรือมิจฉาสมาธิเท่านั้น ไม่มีปัญญาเกิดขึ้น...
              เป็นการบำเพ็ญตัวเองไปสู่นรกอเวจีด้วยความพอใจเพราะผลจะตรงกับเหตุเสมอ
            </p>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 6: บทสรุป - ทางเลือกของชีวิต --- */}
        <div className="mt-16">
          <IntrospectionCard highlight={true} className="bg-slate-900 border-indigo-500">
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaScaleBalanced className="text-indigo-400 text-5xl" />
              <div className="space-y-6 text-2xl md:text-3xl font-medium leading-relaxed text-white">
                <p>ตามความเป็นจริงแล้ว คนเราเกิดมามีทางเลือกอยู่ 2 ทางเท่านั้นคือ</p>
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                  <span className="bg-emerald-600 px-8 py-2 rounded-full font-bold text-white shadow-lg">
                    “ดับทุกข์”
                  </span>
                  <span className="text-indigo-400">กับ</span>
                  <span className="bg-rose-700 px-8 py-2 rounded-full font-bold text-white shadow-lg">
                    “หลบทุกข์”
                  </span>
                </div>
                <p className="text-lg md:text-xl text-slate-400 font-light mt-6">
                  ถ้าเราไม่ปฏิบัติดับทุกข์ให้กับตัวเองแล้ว เราก็ปฏิบัติหลบทุกข์ให้กับตัวเองทันที...
                  ถ้าเลือกทางผิดก็เสียเวลาชีวิตไปอีกชาติหนึ่ง
                  ถ้าเลือกทางถูกก็เป็นสิริมงคลอันยิ่งใหญ่แก่ตัวท่านเอง
                </p>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-widest text-sm pt-4">
                <FaCircleCheck /> เลือกทางที่ถูกเพื่อสุขถาวร
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link
            href="/buddhateaching/life-04"
            className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-indigo-200 hover:-translate-y-1"
          >
            ชีวิตของท่านต้องการดับทุกข์หรือหลบทุกข์?
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
