// src/app/extra/suttanta-vol-9/lesson-08/page.tsx
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
  FaBookOpen,
  FaArrowsRotate,
  FaLightbulb,
} from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function SuttantaVol9Lesson08() {
  // ฟังก์ชันจัดรูปแบบบทสนทนา
  const DialogueBlock = ({
    speaker,
    text,
    type = 'default',
  }: {
    speaker: string;
    text: React.ReactNode;
    type?: 'buddha' | 'monk' | 'narrator' | 'default';
  }) => {
    const styles = {
      buddha: {
        bg: 'bg-indigo-50 border-indigo-100 text-indigo-900',
        icon: <FaHandsPraying />,
        iconBg: 'bg-indigo-600',
        text: 'text-indigo-700',
      },
      monk: {
        bg: 'bg-white border-slate-100 text-slate-700 shadow-sm',
        icon: <FaUser />,
        iconBg: 'bg-slate-500',
        text: 'text-slate-600',
      },
      narrator: {
        bg: 'bg-slate-50 border-slate-200 text-slate-600',
        icon: <FaBookOpen />,
        iconBg: 'bg-slate-400',
        text: 'text-slate-500',
      },
      default: {
        bg: 'bg-white border-slate-100 text-slate-700',
        icon: <FaUser />,
        iconBg: 'bg-slate-200',
        text: 'text-slate-500',
      },
    };
    const s = styles[type];

    return (
      <div className={`mb-6 ${type === 'monk' ? 'md:ml-10' : ''}`}>
        <div className="flex items-start gap-3 mb-2">
          <div
            className={`flex-none w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-sm text-white ${s.iconBg}`}
          >
            {s.icon}
          </div>
          <p className={`font-bold text-sm uppercase tracking-wider ${s.text}`}>{speaker}</p>
        </div>
        <div className={`p-5 rounded-2xl border leading-relaxed text-xl shadow-sm ${s.bg}`}>
          {text}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">
            พระสุตตันตปิฎก เล่มที่ 9
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">
            สมุทยธัมมสูตรที่ ๑
          </h2>
          <p className="text-slate-500 text-lg italic">ว่าด้วยเหตุปัจจัยแห่งอวิชชาและวิชชา</p>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* --- ส่วนที่ 1: บทนำและการทูลถามเรื่องอวิชชา --- */}
        <IntrospectionCard title="การทูลถามเรื่องอวิชชา">
          <DialogueBlock
            type="narrator"
            speaker="ผู้บรรยาย"
            text={
              <>
                <FaMapMarkerAlt className="inline mr-2" />
                พระนครสาวัตถี ครั้งนั้นแล ภิกษุรูปหนึ่ง เข้าไปเฝ้าพระผู้มีพระภาค ถึงที่ประทับ ฯลฯ
                ครั้นแล้ว ได้ทูลถามพระผู้มีพระภาคว่า
              </>
            }
          />
          <DialogueBlock
            type="monk"
            speaker="ภิกษุรูปหนึ่งกราบทูลว่า"
            text="ข้าแต่พระองค์ผู้เจริญ ที่เรียกว่า อวิชชา อวิชชา ดังนี้ อวิชชาเป็นไฉนหนอแล และบุคคลเป็นผู้ประกอบ ด้วยอวิชชาด้วยเหตุเพียงเท่าไร?"
          />
          <DialogueBlock
            type="buddha"
            speaker="พระผู้มีพระภาคตรัสตอบว่า"
            text={
              <>
                ดูกรภิกษุ ปุถุชนผู้ไม่ได้สดับแล้วในโลกนี้ ย่อมไม่รู้ชัด ตามความเป็นจริง
                ซึ่งรูปอันมีความเกิดขึ้น เป็นธรรมดาว่า รูปมีความเกิดขึ้นเป็นธรรมดา
                <br />
                <br />
                ย่อมไม่รู้ชัด ตามความเป็นจริง ซึ่งรูปอันมีความเสื่อมไป เป็นธรรมดาว่า
                รูปมีความเสื่อมไปเป็นธรรมดา
                <br />
                <br />
                ย่อมไม่รู้ชัด ตามความเป็นจริง ซึ่งรูปอันมีความเกิดขึ้น และความเสื่อมไป เป็นธรรมดาว่า
                รูปมีความเกิดขึ้น และความเสื่อมไปเป็นธรรมดา
                <br />
                <br />
                ย่อมไม่รู้ชัด ตามความเป็นจริง ซึ่งเวทนา ย่อมไม่รู้ชัดตาม ความเป็นจริง ซึ่งสัญญา
                ย่อมไม่รู้ชัด ตามความเป็นจริง ซึ่งสังขาร
                <br />
                <br />
                ย่อมไม่รู้ชัด ตามความเป็นจริง ซึ่งวิญญาณ อันมีความเกิดขึ้น เป็นธรรมดาว่า
                วิญญาณมีความเกิดขึ้น เป็นธรรมดา
                <br />
                <br />
                ย่อมไม่รู้ชัด ตามความเป็นจริง ซึ่งวิญญาณ อันมีความเสื่อมไป เป็นธรรมดาว่า
                วิญญาณมีความเสื่อมไป เป็นธรรมดา
                <br />
                <br />
                ย่อมไม่รู้ชัด ตามความเป็นจริง ซึ่งวิญญาณ อันมีความเกิดขึ้น และความเสื่อมไป
                เป็นธรรมดาว่า วิญญาณมีความเกิดขึ้น และความเสื่อมไป เป็นธรรมดา
                <br />
                <br />
                <span className="font-bold text-rose-700 underline decoration-rose-300 underline-offset-8">
                  ดูกรภิกษุ นี้เรียกว่า อวิชชา และบุคคล เป็นผู้ประกอบด้วยอวิชชา ด้วยเหตุเพียงเท่านี้
                </span>
              </>
            }
          />
        </IntrospectionCard>

        {/* --- ส่วนที่ 2: การทูลถามเรื่องวิชชา --- */}
        <div className="my-16">
          <IntrospectionCard title="การทูลถามเรื่องวิชชา">
            <DialogueBlock
              type="narrator"
              speaker="ผู้บรรยาย"
              text="เมื่อพระผู้มีพระภาค ตรัสอย่างนี้แล้ว ภิกษุนั้นทูลถามว่า"
            />
            <DialogueBlock
              type="monk"
              speaker="ภิกษุรูปหนึ่งกราบทูลว่า"
              text="ข้าแต่พระองค์ผู้เจริญ ที่เรียกว่า วิชชา วิชชา ดังนี้ วิชชาเป็นไฉนหนอแล และบุคคล เป็นผู้ประกอบด้วยวิชชา ด้วยเหตุเพียงเท่าไร?"
            />
            <DialogueBlock
              type="buddha"
              speaker="พระผู้มีพระภาคตรัสตอบว่า"
              text={
                <>
                  ดูกรภิกษุ อริยสาวกผู้ได้สดับแล้ว ในธรรมวินัยนี้ ย่อมรู้ชัดตามความเป็นจริง ซึ่งรูป
                  อันมีความเกิดขึ้น เป็นธรรมดาว่า รูปมีความเกิดขึ้นเป็นธรรมดา
                  <br />
                  <br />
                  ย่อมรู้ชัดตามความเป็นจริง ซึ่งรูป อันมีความเสื่อมไป เป็นธรรมดาว่า
                  รูปมีความเสื่อมไปเป็นธรรมดา
                  <br />
                  <br />
                  ย่อมรู้ชัดตามความเป็นจริง ซึ่งรูป อันมีความเกิดขึ้น และความเสื่อมไป เป็นธรรมดาว่า
                  รูปมีความเกิดขึ้น และความเสื่อมไปเป็นธรรมดา
                  <br />
                  <br />
                  ย่อมรู้ชัดตามความเป็นจริง ซึ่งเวทนา ย่อมรู้ชัดตามความเป็นจริง ซึ่งสัญญา
                  ย่อมรู้ชัดตามความเป็นจริง ซึ่งสังขาร
                  <br />
                  <br />
                  ย่อมรู้ชัดตามความเป็นจริง ซึ่งวิญญาณ อันมีความเกิดขึ้น เป็นธรรมดาว่า
                  วิญญาณมีความเกิดขึ้น เป็นธรรมดา
                  <br />
                  <br />
                  ย่อมรู้ชัดตามความเป็นจริง ซึ่งวิญญาณ อันมีความเสื่อมไป เป็นธรรมดาว่า
                  วิญญาณมีความเสื่อมไป เป็นธรรมดา
                  <br />
                  <br />
                  ย่อมรู้ชัดตามความเป็นจริง ซึ่งวิญญาณ อันมีความเกิดขึ้น และความเสื่อมไป
                  เป็นธรรมดาว่า วิญญาณมีความ เกิดขึ้นและเสื่อมไป เป็นธรรมดา
                  <br />
                  <br />
                  <span className="font-bold text-emerald-700 underline decoration-emerald-300 underline-offset-8">
                    ดูกรภิกษุ นี้เรียกว่า วิชชา และบุคคลเป็นผู้ประกอบด้วยวิชชา
                    ด้วยเหตุเพียงเท่านี้แล
                  </span>
                </>
              }
            />
          </IntrospectionCard>
        </div>
      </div>
    </div>
  );
}
