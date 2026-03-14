// src/app/buddhateaching/life-01/page.tsx
'use client';

import IntrospectionCard from '@/components/ui/IntrospectionCard';
import Link from 'next/link';
import {
  FaArrowRight,
  FaBookOpen,
  FaCircleExclamation,
  FaLightbulb,
  FaHandsPraying,
  FaQuoteLeft,
  FaCircleCheck,
} from 'react-icons/fa6';

export default function BuddhaTeachingLife01() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl mb-6 shadow-sm">
            <FaBookOpen size={28} />
          </div>
          <span className="block text-indigo-600 font-bold tracking-widest uppercase text-sm mb-2">
            คำสอนจากพระไตรปิฎก
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 font-prompt leading-tight">
            ปฏิบัติธรรมด้วยความไม่ประมาท <br className="hidden md:block" /> ปฏิบัติอย่างไร?
          </h1>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* --- ส่วนที่ 1: ธรรมชาติของปุถุชนและการแสวงหาสุข --- */}
        <IntrospectionCard>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700">
            <p>
              คนเราส่วนมากเกิดมาต้องการหนีทุกข์ไปหาสุขกันทุกคน แต่ละคนก็พาตัวเองไปหาสุขกัน
              ตามความคิดความเข้าใจของตนเองที่คิดว่าทางนี้ ทำอย่างนี้
              คิดอย่างนี้จะนำความสุขสำเร็จมาให้แก่ชีวิตของตนเอง
              ฉะนั้นจะเห็นว่าแต่ละคนจะมีวิธีการหนีทุกข์ไปหาสุขกันมากมายหลายรูปแบบแตกต่างกัน
              ลองผิดลองถูกกันเกือบค่อนชีวิตหรือตลอดชีวิตก็ยังหาความสุขจริงๆ ที่ตนเองต้องการไม่พบ
            </p>
            <p>
              บางครั้งได้สุขมาก็คิดว่าจะเป็นความสุขที่ตนเองต้องการ ไปหลงประคบประหงมความสุขอันนั้นไว้
              แต่พอเวลาเปลี่ยนไปหน่อยความสุขที่ตนเองคิดว่าน่าจะใช่ความสุขจริงๆที่ตนเองต้องการกลับกลายเป็นทุกข์มหาศาลเกือบเอาชีวิตไม่รอดก็มี
              สุขที่ทุกคนที่เป็นปุถุชนไปเสาะแสวงหานั้นก็คือความสุขที่ได้อะไรมาสนองความอยากของตนเองทาง
              ตา หู จมูก ลิ้น กาย ใจ เมื่อได้มาแล้ว สุขนั้นก็หายไปก็ไปแสวงหามาอีก ไม่ได้ก็ทุกข์
              ต้องดิ้นรนไปเสาะหามาปรนเปรอไปตลอดชีวิตไม่มีที่สิ้นสุด
            </p>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 2: สุขถาวรคือนิพพาน --- */}
        <IntrospectionCard highlight={true} className="bg-indigo-900 border-indigo-500">
          <div className="flex flex-col items-center text-center space-y-6 py-4">
            <FaLightbulb className="text-amber-300 text-4xl animate-pulse" />
            <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90">
              <p>
                ปุถุชนคนธรรมดาทั่วไปไม่ได้สดับฟังพระธรรมคำสอนของพระพุทธเจ้า
                จึงไม่มีโอกาสจะรู้ได้เลยว่าสุขจริงๆ ที่คนเราต้องการนั้นอยู่ที่ใด
                ทำอย่างไรจึงจะพบและหามาใส่ตัวเองได้
                สุขที่มนุษย์ทุกคนต้องการในขณะนี้นั้นก็คือสุขถาวรไม่มีวันเปลี่ยนแปลง
                สุขอย่างนี้เป็นสิ่งที่ทุกคนต้องการ สุขถาวรนี้ถ้าแปลเป็นภาษาธรรมก็คือ{' '}
                <span className="text-amber-300 font-bold">“นิพพาน”</span> นั่นเอง
              </p>
              <p className="text-indigo-100 font-light italic">
                พวกเขาไม่รู้เลยว่าสุขถาวรนี้มีศาสดาเอกของโลกตรัสสอนไว้ให้แล้ว
                พร้อมบอกทางเดินไปหาสุขนั้นได้ในชีวิตนี้อย่างเร็ว 7 วัน 7 เดือน 7 ปี อย่างช้า
                ถ้าปฏิบัติตามทางที่ถูกนี้มนุษย์ทุกคนไปถึงเป้าหมายนี้ได้
              </p>
            </div>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 3: ปัญหาของการปฏิบัติโดยไม่ศึกษาพระไตรปิฎก --- */}
        <IntrospectionCard>
          <div className="flex items-center gap-3 mb-6 text-rose-600 border-b pb-4">
            <FaCircleExclamation className="text-2xl" />
            <h3 className="text-2xl font-bold">ความประมาทในการศึกษา</h3>
          </div>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700">
            <p>
              คนเราทุกวันนี้ต้องการให้ตัวเองพบสุขถาวรกันทุกคน
              แต่ขี้เกียจศึกษาเรียนรู้พระธรรมคำสอนที่ศาสดาเอกของโลกสอนไว้ให้ศึกษาเรียนรู้วิธีปฏิบัติให้เข้าถึงสุขถาวรที่ตนเองต้องการ
              จะเห็นว่าบางคนตั้งใจจะปฏิบัติธรรมเพื่อหาทางหนีทุกข์ไปหาสุขถาวร
              แต่ไม่ได้ศึกษาแนวทางที่พระพุทธเจ้าศาสดาเอกของโลกบอกทางดับทุกข์ไว้ให้เป็นพื้นฐานก่อน
              แล้วมุ่งหน้าไปสำนักปฏิบัติไปปฏิบัติกับครูบาอาจารย์ที่สอนการปฏิบัติธรรมเอาทันที
            </p>
            <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-slate-300 italic text-slate-600">
              "ถ้าครูบาอาจารย์ของเราไม่เรียนคำสอนหรือเรียนคำสอนของพระพุทธเจ้าไม่จบตามพระธรรมคำสอนในพระไตรปิฎกแล้วจะทำอย่างไรดี
              ครูบาอาจารย์ก็ต้องสอนเราผิดแน่นอน ตัวของเราก็จะนำเอาพระธรรมคำสอนที่ผิดไปปฏิบัติ
              ผลก็จะออกมาตามเหตุ คือได้ผลที่ผิดออกมา เราจะต้องเสียเวลาชีวิตไปชาติหนึ่ง"
            </div>
            <p>
              ไปมั่นใจว่าหลวงปู่หลวงพ่อที่เป็นครูบาอาจารย์ของเราทั้งหลายท่านคงจะเรียนพระธรรมคำสอนของพระพุทธเจ้ามาจบแน่...
              ผลปรากฏว่าท่านเหล่านั้นส่วนมากไม่เคยเรียนพระธรรมคำสอนของพระพุทธเจ้าในพระไตรปิฎกกันจบแต่อย่างใด
              อาศัยเอาวิธีปฏิบัติที่ครูบาอาจารย์รุ่นก่อนๆสอนปฏิบัติสืบต่อกันมา...
              โดยไม่รู้ไม่เข้าใจที่ท่านสอนไว้ว่าถูกต้องครบถ้วนหรือไม่
            </p>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 4: การปฏิบัติผิดธรรม --- */}
        <IntrospectionCard>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700">
            <p>
              การปฏิบัติธรรมผิดนั้นปฏิบัติอย่างไร? การปฏิบัติโดยไม่รู้
              ไม่เข้าใจพระธรรมคำสอนของพระพุทธเจ้าว่า
              พระธรรมส่วนใดเป็นพระธรรมส่วนที่เป็นผลของการตรัสรู้
              และพระธรรมส่วนใดเป็นเหตุของการตรัสรู้ และไม่เข้าใจว่าพระธรรมคำสอนในสูตรนั้นๆ
              ที่ตนนำมาปฏิบัติพระพุทธเจ้าตรัสสอนกับผู้ใด สอนอริยบุคคลหรือสอนบุคคลธรรมดาทั่วไป
            </p>
            <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
              <p className="text-rose-800 font-medium">
                การปฏิบัติอย่างนี้เรียกว่าพาตัวเองไปติดตาข่ายของมาร
                หมดโอกาสจะพาตัวเองดับทุกข์ได้ในชาตินี้ ดังเช่นบางคนบางท่านเอาโพธิปักขิยธรรม 37
                ประการ... ไปปฏิบัติวิปัสสนาภาวนา ซึ่งไม่ถูกต้อง
                เพราะพระธรรมเหล่านี้เป็นผลการตรัสรู้ของพระพุทธเจ้า
                ไม่ใช่เป็นพระธรรมที่เป็นเหตุของการตรัสรู้
              </p>
            </div>
            <p>
              ถ้าบุคคลธรรมดาเอาไปปฏิบัติจะเกิดมิจฉาสมาธิ หรือสมาธิที่ไม่มีปัญญาประกอบ
              ซึ่งเรียกว่าความหลง ไม่มีปัญญามาดับทุกข์ได้
            </p>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 5: หัวใจของการปฏิบัติที่ไม่ประมาท --- */}
        <IntrospectionCard highlight={true} className="bg-indigo-600">
          <div className="flex flex-col items-center text-center space-y-8 py-4">
            <FaHandsPraying className="text-indigo-200 text-4xl" />
            <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white">
              <p className="font-bold text-amber-300 text-2xl md:text-3xl">
                การปฏิบัติธรรมโดยความไม่ประมาทนั้น <br /> ต้องเข้าใจพระธรรมคำสอนอย่างถ่องแท้
              </p>
              <p>
                ปัญญามาจากความจริงของโลกและชีวิตที่พระพุทธเจ้าได้ตรัสรู้ไว้ ได้แก่ กฎธรรมชาติ 2 กฎ:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                  <p className="font-bold text-amber-200 mb-2">๑. กฎไตรลักษณ์</p>
                  <p className="text-lg">เกิดขึ้น ตั้งอยู่ ดับไป (อนิจจัง ทุกขัง อนัตตา)</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                  <p className="font-bold text-amber-200 mb-2">๒. กฎแห่งเหตุปัจจัย</p>
                  <p className="text-lg">อิทัปปัจจยตา ปฏิจจสมุปบาท</p>
                </div>
              </div>
            </div>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนสรุปปิดท้าย --- */}
        <div className="mt-12">
          <IntrospectionCard>
            <div className="flex gap-6 items-start">
              <FaQuoteLeft className="text-indigo-200 text-5xl flex-shrink-0" />
              <p className="text-xl md:text-2xl leading-relaxed text-slate-800 font-medium">
                พระพุทธเจ้าตรัสบอกวิธีสร้างปัญญาไว้ในทางสายเอกที่ดับทุกข์ได้
                นั้นคือการวิปัสสนาภาวนาพิจารณาขันธ์ 5 อินทรีย์ 6
                ให้รู้ให้เห็นสิ่งทั้งปวงที่มากระทบสัมผัสตัวของเราในขณะปัจจุบันตามความเป็นจริงของโลกและชีวิตว่า{' '}
                <br />
                <span className="text-indigo-700 font-bold underline decoration-indigo-200 underline-offset-8">
                  สิ่งทั้งปวงไม่เที่ยงเกิดดับ เกิดจากเหตุปัจจัยมาประชุมกันชั่วคราวเท่านั้น
                  ไม่มีตัวตนเป็นของตนเอง ว่างจากตนและของตน
                </span>
              </p>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link
            href="/buddhateaching/life-02"
            className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-indigo-200 hover:-translate-y-1"
          >
            วิธีเจริญหรือสร้างปัญญา ปฏิบัติอย่างไร?
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
