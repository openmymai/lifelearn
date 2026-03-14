// src/app/extra/paticcasamuppada/lesson-11/page.tsx
import IntrospectionCard from '@/components/ui/IntrospectionCard';
import Link from 'next/link';
import {
  FaArrowRight,
  FaCommentDots,
  FaHandsPraying,
  FaLink,
  FaLinkSlash,
  FaTree,
  FaQuoteLeft,
  FaCircleCheck,
  FaArrowsLeftRight,
} from 'react-icons/fa6';

export default function PaticcasamuppadaLesson11() {
  // ฟังก์ชันช่วยจัดรูปแบบบทสนทนา (คงเนื้อหาเดิมทุกตัวอักษร)
  const DialogueBlock = ({
    questioner,
    question,
    answerer,
    answer,
  }: {
    questioner: string;
    question: React.ReactNode;
    answerer: string;
    answer: React.ReactNode;
  }) => (
    <div className="mb-12 last:mb-0">
      <div className="flex items-start gap-3 mb-4">
        <div className="flex-none w-10 h-10 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center shadow-sm">
          <FaCommentDots />
        </div>
        <div className="flex-grow">
          <p className="text-slate-500 font-bold mb-2 text-sm uppercase tracking-wider">
            {questioner} ถามว่า
          </p>
          <div className="text-xl md:text-2xl text-slate-800 leading-relaxed pl-4 border-l-2 border-slate-200">
            {question}
          </div>
        </div>
      </div>
      <div className="flex items-start gap-3 ml-6 md:ml-10">
        <div className="flex-none w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center shadow-md">
          <FaHandsPraying />
        </div>
        <div className="flex-grow bg-cyan-50/50 p-6 rounded-2xl border border-cyan-100 shadow-inner">
          <p className="text-cyan-600 font-bold mb-2 text-sm uppercase tracking-wider">
            {answerer} กล่าวตอบว่า
          </p>
          <div className="text-xl md:text-2xl text-cyan-900 font-bold leading-relaxed">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-bold tracking-widest uppercase text-sm">
            วิปัสสนาภาวนาเพิ่มเติม
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">
            สัมมสนสูตรที่ 2
          </h2>
          <p className="text-slate-500 text-lg italic">
            ว่าด้วยปัจจัยให้ชราและมรณะ (อุปมาไม้อ้อ 2 กำ)
          </p>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนที่ 1: บทนำ (การพบกันของพระอัครสาวก) */}
        <IntrospectionCard>
          <div className="flex items-center gap-3 mb-6 text-cyan-700 border-b pb-4">
            <FaTree className="text-2xl" />
            <h3 className="text-2xl font-bold">ณ ป่าอิสิปตนมฤคทายวัน</h3>
          </div>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700 italic">
            <p>
              สมัยหนึ่งท่านพระสารีบุตร และท่านพระมหาโกฏฐิตะ อยู่ ณ ป่าอิสิปตนมฤคทายวัน
              เขตพระนครพาราณสี
            </p>
            <p>
              ครั้งนั้นแลเป็นเวลาเย็น ท่านพระมหาโกฏฐิตะ ออกจากที่พักผ่อน
              เข้าไปหาพระสารีบุตรถึงที่อยู่ ได้ปราศรัยกับท่านพระสารีบุตร ครั้นผ่านการปราศรัย
              พอให้ระลึกถึงกันไปแล้ว จึงนั่ง ณ ที่ควรส่วนข้างหนึ่ง ท่านพระมหาโกฏฐิตะ
              นั่งเรียบร้อยแล้ว ได้กล่าวคำนี้กะท่านพระสารีบุตรว่า
            </p>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 2: ปุจฉา-วิสัชนา เรื่องเหตุปัจจัย */}
        <div className="my-12 space-y-8">
          {/* 1. ชราและมรณะ */}
          <DialogueBlock
            questioner="ท่านพระมหาโกฏฐิตะ"
            question="ชราและมรณะตนทำเอง ผู้อื่นทำให้ ทั้งตนทำเองทั้งผู้อื่นทำให้ หรือว่าชราและมรณะบังเกิดขึ้น เพราะอาศัยตนไม่ได้ทำเอง ผู้อื่นไม่ได้ทำให้"
            answerer="ท่านพระสารีบุตร"
            answer="ท่านโกฏฐิตะชราและมรณะ ตนทำเองก็ไม่ใช่ ผู้อื่นทำให้ก็ไม่ใช่ ทั้งตนทำเองทั้งผู้อื่นทำให้ก็ไม่ใช่ บังเกิดขึ้น เพราะอาศัยตนไม่ได้ทำเอง ผู้อื่นไม่ได้ทำให้ก็ไม่ใช่ แต่ว่าเพราะชาติเป็นปัจจัย จึงมีชราและมรณะ"
          />

          {/* 2. ชาติ */}
          <DialogueBlock
            questioner="ท่านพระมหาโกฏฐิตะ"
            question="ท่านสารีบุตรชาติตนทำเอง ผู้อื่นทำให้ ทั้งตนทำเองทั้งผู้อื่นทำให้ หรือว่าชาติบังเกิดขึ้น เพราะอาศัยตนไม่ได้ทำเอง ผู้อื่นไม่ได้ทำให้"
            answerer="ท่านพระสารีบุตร"
            answer="ท่านโกฏฐิตะชาติตนทำเองก็ไม่ใช่ ผู้อื่นทำให้ก็ไม่ใช่ ทั้งตนทำเองทั้งผู้อื่นทำให้ก็ไม่ใช่ ชาติบังเกิดขึ้น เพราะอาศัยตนไม่ได้ทำเอง ผู้อื่นไม่ได้ทำให้ก็ไม่ใช่ แต่เพราะภพเป็นปัจจัยจึงมีชาติ"
          />

          {/* 3. นามรูป */}
          <DialogueBlock
            questioner="ท่านพระมหาโกฏฐิตะ"
            question="ท่านสารีบุตรภพตนทำเอง อุปทานตนทำเอง ตัณหาตนทำเอง เวทนาตนทำเอง ผัสสะตนทำเอง นามรูปตนทำเอง ผู้อื่นทำให้ ทั้งตนทำเองทั้งผู้อื่นทำให้ หรือว่านามรูปบังเกิดขึ้น เพราะอาศัยตนไม่ได้ทำเอง ผู้อื่นไม่ได้ทำให้"
            answerer="ท่านพระสารีบุตร"
            answer="ท่านโกฏฐิตะ นามรูปตนทำเองก็ไม่ใช่ ผู้อื่นทำให้ก็ไม่ใช่ ทั้งตนทำเองทั้งผู้อื่นทำให้ก็ไม่ใช่ นามรูปบังเกิดขึ้น เพราะอาศัยตนไม่ได้ทำเอง ผู้อื่นไม่ได้ทำให้ก็ไม่ใช่ แต่เพราะวิญญาณเป็นปัจจัยจึงมีนามรูป"
          />

          {/* 4. วิญญาณ */}
          <DialogueBlock
            questioner="ท่านพระมหาโกฏฐิตะ"
            question="ท่านสารีบุตรวิญญาณตนทำเอง ผู้อื่นทำให้ ทั้งตนทำเอง ทั้งผู้อื่นทำให้ หรือว่าวิญญาณบังเกิดขึ้น เพราะอาศัยตนไม่ได้ทำเอง ผู้อื่นไม่ได้ทำให้"
            answerer="ท่านพระสารีบุตร"
            answer="ท่านโกฏฐิตะ วิญญาณตนทำเองก็ไม่ใช่ ผู้อื่นทำให้ก็ไม่ใช่ ทั้งตนเองและผู้อื่นทำให้ก็ไม่ใช่ วิญญาณบังเกิดขึ้น เพราะอาศัยตนไม่ได้ทำเอง ผู้อื่นไม่ได้ทำให้ก็ไม่ใช่ แต่เพราะนามรูปเป็นปัจจัยจึงมีวิญญาณ"
          />
        </div>

        {/* ส่วนที่ 3: การรู้ชัดในภาษิต */}
        <IntrospectionCard>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700">
            <div className="bg-cyan-50 p-6 rounded-2xl border-l-4 border-cyan-500">
              <p>
                เราทั้งหลายเพิ่งรู้ชัดภาษิต ของท่านสารีบุตรในบัดนี้เอง อย่างนี้ว่าท่านโกฏฐิตะ
                นามรูปตนทำเองก็ไม่ใช่ ผู้อื่นทำให้ก็ไม่ใช่ ทั้งตนทำเองทั้งผู้อื่นทำให้ก็ไม่ใช่
                บังเกิดขึ้น เพราะอาศัยตนไม่ได้ทำเอง ผู้อื่นไม่ได้ทำให้ก็ไม่ใช่
                แต่เพราะวิญญาณเป็นปัจจัยจึงมีนามรูป
              </p>
              <p className="mt-4">
                อนึ่งเราทั้งหลายรู้ชัดภาษิต ของท่านพระสารีบุตรในบัดนี้เอง อย่างนี้ว่าท่านโกฏฐิตะ
                วิญญาณตนทำเองก็ไม่ใช่ ผู้อื่นก็ทำให้ก็ไม่ใช่ บังเกิดขึ้นเพราะ อาศัยตนไม่ได้ทำเอง
                ผู้อื่นไม่ได้ทำให้ก็ไม่ใช่ แต่เพราะนามรูปเป็นปัจจัย จึงมีวิญญาณ
              </p>
            </div>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 4: อุปมาไม้อ้อ 2 กำ (Highlight) */}
        <div className="my-16">
          <IntrospectionCard highlight={true} className="bg-cyan-600 shadow-cyan-200">
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaArrowsLeftRight className="text-5xl text-cyan-200 animate-pulse" />
              <div className="space-y-8 text-xl md:text-2xl leading-relaxed text-white">
                <p className="font-bold text-cyan-100 uppercase tracking-widest text-sm">
                  อุปมาแห่งการอาศัยกันและกัน
                </p>
                <p>ท่านสารีบุตรก็เนื้อความของภาษิตนี้ เราทั้งหลายจะพึงเห็นได้อย่างไร</p>
                <p>
                  ดูกรอาวุโสถ้าเช่นนั้น ผมจะเปรียบให้ท่านฟัง ในโลกนี้บุรุษผู้ฉลาดบางพวก
                  ย่อมรู้ชัดเนื้อความของภาษิต ได้แม้ด้วยอุปมา
                </p>

                <div className="bg-white/10 p-8 rounded-[2.5rem] border border-white/20 shadow-2xl space-y-6">
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    อาวุโสไม้อ้อ 2 กำพึงตั้งอยู่ได้ เพราะต่างอาศัยซึ่งกันและกันฉันใด
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-cyan-50">
                    <p className="bg-white/5 p-4 rounded-xl">เพราะนามรูปเป็นปัจจัยจึงมีวิญญาณ</p>
                    <p className="bg-white/5 p-4 rounded-xl">เพราะวิญญาณเป็นปัจจัยจึงมีนามรูป</p>
                  </div>
                  <p className="text-lg opacity-90">
                    เพราะนามรูปเป็นปัจจัยจึงมีสฬายตนะ สฬายตนะเป็นปัจจัยจึงมีผัสสะ
                    ความเกิดขึ้นแห่งกองทุกข์ทั้งมวลนี้ ย่อมมีด้วยประการอย่างนี้ฉันนั้นแล
                  </p>
                </div>

                <div className="bg-slate-900/40 p-8 rounded-[2.5rem] border border-white/10 space-y-6">
                  <p className="text-xl md:text-2xl font-bold text-cyan-300">
                    ถ้าไม้อ้อ 2 กำนั้นพึงเอาออกเสียกำหนึ่ง อีกกำหนึ่งก็ล้มไป
                  </p>
                  <p className="text-cyan-50">ถ้าดึงอีกกำหนึ่งออก อีกกำหนึ่งก็ล้มไปฉันใด</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-cyan-100 italic">
                    <p>เพราะนามรูปดับวิญญาณจึงดับ</p>
                    <p>เพราะวิญญาณดับนามรูปจึงดับ</p>
                  </div>
                  <p className="text-xl font-bold underline decoration-cyan-400 underline-offset-8">
                    ความดับแห่งกองทุกข์ทั้งมวลนี้ ย่อมมีด้วยประการอย่างนี้ฉันนั้นแล
                  </p>
                </div>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* ส่วนที่ 5: บทสรุป 36 เรื่อง และประเภทของภิกษุ */}
        <IntrospectionCard>
          <div className="space-y-8 text-xl leading-relaxed text-slate-700">
            <div className="text-center space-y-2">
              <FaQuoteLeft className="mx-auto text-cyan-200 text-3xl opacity-50" />
              <p className="text-2xl font-bold text-slate-800">น่าอัศจรรย์ท่านสารีบุตรไม่เคยมีมา</p>
              <p>
                ท่านสารีบุตรเท่าที่ท่านสารีบุตรกล่าวนี้ เป็นอันกล่าวดีแล้ว
                ก็แลเราทั้งหลายพลอยยินดีสุภาษิตนี้ ของท่านสารีบุตร ด้วยเรื่อง 36 เรื่องเหล่านี้
              </p>
            </div>

            <div className="grid gap-6 mt-10">
              {/* กลุ่มที่ 1: ชราและมรณะ */}
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-4">
                <p className="flex items-center gap-2 font-bold text-cyan-700">
                  <FaCircleCheck className="text-emerald-500" /> ภิกษุธรรมกถึก:
                </p>
                <p className="pl-6">
                  ถ้าภิกษุแสดงธรรมเพื่อความหน่าย เพื่อคลายกำหนัด เพื่อดับชราและมรณะ
                </p>
                <p className="flex items-center gap-2 font-bold text-cyan-700">
                  <FaCircleCheck className="text-emerald-500" /> ภิกษุปฏิบัติธรรมสมควรแก่ธรรม:
                </p>
                <p className="pl-6">
                  ถ้าภิกษุปฏิบัติเพื่อความหน่าย เพื่อคลายกำหนัด เพื่อดับชราและมรณะ
                </p>
                <p className="flex items-center gap-2 font-bold text-cyan-700">
                  <FaCircleCheck className="text-emerald-500" /> ภิกษุบรรลุนิพพานในปัจจุบัน:
                </p>
                <p className="pl-6">
                  ถ้าภิกษุหลุดพ้นเพราะความหน่าย เพราะคลายกำหนัด เพราะความดับ
                  เพราะไม่ถือมั่นชราและมรณะ
                </p>
              </div>

              {/* กลุ่มที่ 2: อวิชชาและสายปฏิจจสมุปบาท */}
              <div className="bg-cyan-900 text-white p-8 rounded-3xl space-y-6 shadow-xl">
                <p className="text-center font-bold text-cyan-300 border-b border-white/10 pb-4">
                  การพิจารณาครอบคลุมถึงอวิชชา
                </p>
                <p>
                  ถ้าภิกษุแสดงธรรมเพื่อความหน่าย เพื่อคลายกำหนัด เพื่อดับชาติ ภพ อุปาทาน ตัณหา เวทนา
                  ผัสสะ สฬายตนะ นามรูป วิญญาณ สังขารทั้งหลาย อวิชชา{' '}
                  <span className="text-cyan-300 font-bold">ควรจะกล่าวว่าภิกษุธรรมกถึก</span>
                </p>
                <p>
                  ถ้าภิกษุปฏิบัติเพื่อความหน่าย เพื่อคลายกำหนัด เพื่อดับอวิชชา{' '}
                  <span className="text-cyan-300 font-bold">
                    ควรจะกล่าวว่า ภิกษุปฏิบัติธรรมสมควรแก่ธรรม
                  </span>
                </p>
                <p>
                  ถ้าภิกษุหลุดพ้น เพราะความหน่าย เพราะคลายกำหนัด เพราะความดับ
                  เพราะความไม่ถือมั่นในอวิชชา{' '}
                  <span className="text-cyan-300 font-bold underline decoration-amber-400 underline-offset-8">
                    ควรจะกล่าวว่าภิกษุบรรลุนิพพานในปัจจุบัน
                  </span>
                </p>
              </div>
            </div>
          </div>
        </IntrospectionCard>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link
            href="/extra/paticcasamuppada/lesson-12"
            className="inline-flex items-center gap-3 bg-cyan-600 hover:bg-cyan-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-cyan-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: อนาคตสูตรที่ 2
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
