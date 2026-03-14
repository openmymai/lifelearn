// src/app/extra/suttanta-vol-9/lesson-04/page.tsx
'use client';

import IntrospectionCard from '@/components/ui/IntrospectionCard';
import Link from 'next/link';
import {
  FaArrowRight,
  FaHandsPraying,
  FaCommentDots,
  FaUser,
  FaQuoteLeft,
  FaCircleCheck,
  FaCircleXmark,
  FaTree,
  FaGem,
  FaSun,
} from 'react-icons/fa6';

export default function SuttantaVol9Lesson04() {
  // ฟังก์ชันจัดรูปแบบบทสนทนา
  const DialogueBlock = ({
    speaker,
    text,
    isBuddha = false,
  }: {
    speaker: string;
    text: React.ReactNode;
    isBuddha?: boolean;
  }) => (
    <div className={`mb-8 ${isBuddha ? 'md:ml-0' : 'md:ml-10'}`}>
      <div className="flex items-start gap-3 mb-2">
        <div
          className={`flex-none w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-sm ${isBuddha ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'}`}
        >
          {isBuddha ? <FaHandsPraying /> : <FaUser />}
        </div>
        <p
          className={`font-bold text-sm uppercase tracking-wider ${isBuddha ? 'text-indigo-700' : 'text-slate-500'}`}
        >
          {speaker}
        </p>
      </div>
      <div
        className={`p-6 rounded-2xl border leading-relaxed text-xl ${isBuddha ? 'bg-indigo-50 border-indigo-100 text-indigo-900' : 'bg-white border-slate-100 text-slate-700 shadow-sm'}`}
      >
        {text}
      </div>
    </div>
  );

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">
            พระสุตตันตปิฎก เล่มที่ 9
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">
            อุปาทิยสูตร
          </h2>
          <p className="text-slate-500 text-lg italic">"เมื่อไม่ยึดมั่น จึงหลุดพ้นจากมาร"</p>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนที่ 1: บทนำและการทูลขอธรรมะ */}
        <IntrospectionCard>
          <div className="flex items-center gap-3 mb-6 text-indigo-700 border-b pb-4">
            <FaTree className="text-2xl" />
            <h3 className="text-2xl font-bold">ณ พระวิหารเชตวัน</h3>
          </div>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700 italic mb-8">
            <p>
              ข้าพเจ้าได้สดับมาแล้วอย่างนี้ สมัยหนึ่ง พระผู้มีพระภาคประทับอยู่ ณ พระวิหารเชตวัน
              อารามของท่านอนาถบิณฑิกเศรษฐี ใกล้พระนครสาวัตถี
            </p>
            <p>
              ครั้งนั้นแล ภิกษุรูปหนึ่ง เข้าไปเฝ้าพระผู้มีพระภาค ถึงที่ประทับ ถวายอภิวาท แล้วนั่ง ณ
              ที่ควรส่วนข้างหนึ่ง
            </p>
          </div>

          <DialogueBlock
            speaker="ภิกษุกราบทูลว่า"
            text={
              <>
                ข้าแต่พระองค์ผู้เจริญ ขอพระผู้มีพระภาค โปรดประทานพระวโรกาส แสดงพระธรรมเทศนา
                โดยสังเขป แก่ข้าพระองค์ ที่ข้าพระองค์ได้สดับแล้ว เป็นผู้ๆเดียว หลีกออกจากหมู่
                ไม่ประมาท มีความเพียร มีใจมั่นคงอยู่เถิด
              </>
            }
          />
        </IntrospectionCard>

        {/* ส่วนที่ 2: พระธรรมเทศนาโดยย่อและการรู้ซึ้ง */}
        <div className="my-16">
          <IntrospectionCard title="พระธรรมเทศนาโดยย่อ">
            <DialogueBlock
              isBuddha={true}
              speaker="พระผู้มีพระภาคตรัสว่า"
              text={
                <>
                  ดูกรภิกษุ เมื่อบุคคลยังยึดมั่น ก็ต้องถูกมารมัดไว้ เมื่อไม่ยึดมั่น จึงหลุดพ้นจากมาร
                </>
              }
            />

            <DialogueBlock
              speaker="ภิกษุตอบว่า"
              text={<>ข้าแต่พระผู้มีพระภาค ข้าพระองค์ทราบแล้ว ข้าแต่พระสุคต ข้าพระองค์ทราบแล้ว.</>}
            />

            <DialogueBlock
              isBuddha={true}
              speaker="พระผู้มีพระภาคตรัสถามว่า"
              text={
                <>
                  ดูกรภิกษุ ก็เธอรู้ซึ้งถึงอรรถแห่งคำ ที่กล่าวแล้วอย่างย่อ โดยพิสดารได้อย่างไรเล่า?
                </>
              }
            />
          </IntrospectionCard>
        </div>

        {/* ส่วนที่ 3: การขยายความโดยพิสดาร (หัวใจของสูตร) */}
        <div className="my-16">
          <IntrospectionCard>
            <div className="flex items-center gap-3 mb-8 text-indigo-700 border-b pb-4">
              <FaCommentDots className="text-2xl" />
              <h3 className="text-2xl font-bold">การรู้ซึ้งโดยพิสดาร</h3>
            </div>

            <DialogueBlock
              speaker="ภิกษุกราบทูลขยายความว่า"
              text={
                <>
                  ข้าแต่พระองค์ผู้เจริญ เมื่อบุคคลยังยึด รูป เวทนา สัญญา สังขาร และวิญญาณมั่นอยู่
                  ก็ต้องถูกมารมัดไว้ เมื่อไม่ยึดมั่นจึงหลุดพ้นจากมาร
                  <br />
                  <br />
                  ข้าแต่พระองค์ผู้เจริญ ข้าพระองค์รู้ซึ้งถึงอรรถ แห่งพระดำรัส
                  ที่พระผู้มีพระภาคตรัสแล้วอย่างย่อ โดยพิสดารอย่างนี้แล
                </>
              }
            />

            <DialogueBlock
              isBuddha={true}
              speaker="พระผู้มีพระภาคทรงรับรองว่า"
              text={
                <>
                  ดีแล้วๆ ภิกษุ เธอรู้ซึ้งถึงอรรถแห่งคำ ที่เรากล่าวแล้วอย่างย่อ โดยพิสดารอย่างดีแล้ว
                  <br />
                  <br />
                  ดูกรภิกษุ บุคคลยังยึด รูป เวทนา สัญญา สังขาร และวิญญาณมั่นอยู่ ก็ต้องถูกมารมัดไว้
                  เมื่อไม่ยึดมั่น จึงหลุดพ้นจากมาร เธอพึงทราบอรรถแห่งคำนี้ ที่เรากล่าวแล้วอย่างย่อ
                  โดยพิสดารอย่างนี้เถิด
                </>
              }
            />
          </IntrospectionCard>
        </div>

        {/* ส่วนที่ 4: ผลแห่งการปฏิบัติ (การบรรลุธรรม) */}
        <div className="mt-16">
          <IntrospectionCard highlight={true} className="bg-indigo-900 border-indigo-500">
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaSun className="text-amber-400 text-5xl animate-pulse" />

              <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90">
                <p className="italic opacity-80">
                  ครั้งนั้นแล ภิกษุรูปนั้นเพลิดเพลิน อนุโมทนาพระภาษิต ของพระผู้มีพระภาค ลุกจากอาสนะ
                  ถวายบังคม กระทำประทักษิณแล้วหลีกไป
                </p>

                <div className="bg-white/10 p-8 rounded-[2.5rem] border border-white/20 shadow-2xl">
                  <p>
                    ครั้งนั้นแล เธอเป็นผู้ๆเดียว หลีกออกจากหมู่ ไม่ประมาท มีความเพียร มีใจมั่นคงอยู่
                    ไม่นานเท่าไร ก็ทำให้แจ้งซึ่งที่สุด แห่งพรหมจรรย์อันยอดเยี่ยม ที่กุลบุตรทั้งหลาย
                    ออกบวชเป็นบรรพชิต โดยชอบต้องการนั้น ด้วยปัญญาอันยิ่งด้วยตนเอง
                    ในปัจจุบันเข้าถึงอยู่
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-left pt-6">
                  {[
                    'รู้ชัดว่าชาติสิ้นแล้ว',
                    'พรหมจรรย์อยู่จบแล้ว',
                    'กิจที่ควรทำ ทำเสร็จแล้ว',
                    'กิจอื่นเพื่อความเป็นอย่างนี้มิได้มี',
                  ].map((text, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 bg-indigo-800/50 p-4 rounded-xl border border-indigo-400/30"
                    >
                      <FaCircleCheck className="text-emerald-400" />
                      <span className="text-lg">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-white/10 w-full">
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    ก็ภิกษุรูปนั้น ได้เป็นพระอรหันต์องค์หนึ่ง <br />
                    <span className="text-amber-300">ในจำนวนพระอรหันต์ทั้งหลาย</span>
                  </p>
                </div>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link
            href="/extra/suttanta-vol-9/lesson-05"
            className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-indigo-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: ปุณณมสูตร
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
