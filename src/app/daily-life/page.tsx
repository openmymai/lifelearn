// src/app/daily-life/page.tsx
'use client';

import IntrospectionCard from '@/components/ui/IntrospectionCard';
import Link from 'next/link';
import {
  FaArrowRight,
  FaSun,
  FaArrowsRotate,
  FaScaleBalanced,
  FaChair,
  FaEye,
  FaQuoteLeft,
  FaCircleCheck,
  FaLayerGroup,
  FaClock,
} from 'react-icons/fa6';

export default function DailyLifePage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header หลัก */}
        <div className="text-center mb-16">
          <span className="text-rose-600 font-bold tracking-widest uppercase text-sm">
            บทนำไปใช้ในชีวิตประจำวัน
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">
            กำหนดรู้ รู้ทันสิ่งที่มากระทบสัมผัส
          </h1>
          <div className="w-24 h-1 bg-rose-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* --- ส่วนบทนำ: พื้นฐานการกำหนดรู้ --- */}
        <IntrospectionCard highlight={true} className="bg-rose-600 shadow-rose-200">
          <div className="space-y-6 py-4 text-xl md:text-2xl leading-relaxed text-white font-light">
            <p>
              ไม่เที่ยงเกิดดับ ตัวฉันเกิดขึ้น ตั้งอยู่ ดับไป
              <br />
              เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ
            </p>
            <p>
              ไม่เที่ยงเกิดดับ ตัวฉันคือ รูป เวทนา สัญญา สังขาร วิญญาณ เกิดขึ้น ตั้งอยู่ ดับไป
              <br />
              เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ
            </p>
            <p>
              ไม่เที่ยงเกิดดับ รูป เวทนา สัญญา สังขาร วิญญาณ คือกาย เวทนา จิต ธรรม เกิดขึ้น ตั้งอยู่
              ดับไป
              <br />
              เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ
            </p>
            <p>
              ไม่เที่ยงเกิดดับ กาย เวทนา จิต ธรรม คือโลกและชีวิต เกิดขึ้น ตั้งอยู่ ดับไป
              <br />
              เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ
            </p>
            <p>
              ไม่เที่ยงเกิดดับ ผลต่อเนื่องของโลกและชีวิต คือวัตถุ สิ่งของ สัตว์ บุคคล เกิดขึ้น
              ตั้งอยู่ ดับไป
              <br />
              เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ
            </p>
            <p>
              ไม่เที่ยงเกิดดับ ผลต่อเนื่องของ วัตถุ สิ่งของ สัตว์ บุคคล คือรูป เสียง กลิ่น รส
              โผฏฐัพพะ ธรรมารมณ์ เกิดขึ้น ตั้งอยู่ ดับไป
              <br />
              เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ
            </p>
            <p>
              ไม่เที่ยงเกิดดับ ผลต่อเนื่องของรูป เสียง กลิ่น รส โผฏฐัพพะ ธรรมารมณ์ คือความพอใจ
              ไม่พอใจ เกิดขึ้น ตั้งอยู่ ดับไป
              <br />
              เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ
            </p>
            <p>
              ไม่เที่ยงเกิดดับ ความพอใจ ไม่พอใจ คือความไม่รู้ เกิดขึ้น ตั้งอยู่ ดับไป
              <br />
              เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ
            </p>
            <p>
              ไม่เที่ยงเกิดดับ ความไม่รู้ คืออวิชชา เกิดขึ้น ตั้งอยู่ ดับไป
              <br />
              เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ
            </p>
            <p>
              ไม่เที่ยงเกิดดับ ผลต่อเนื่องของอวิชชา คือชีวิต เกิดขึ้น ตั้งอยู่ ดับไป
              <br />
              เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ
            </p>
            <p>
              ไม่เที่ยงเกิดดับ ชีวิต คือตัวฉัน เกิดขึ้น ตั้งอยู่ ดับไป
              <br />
              เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ
            </p>
            <p>
              ไม่เที่ยงเกิดดับ ตัวฉัน คือรูป เวทนา สัญญา สังขาร วิญญาณ เกิดขึ้น ตั้งอยู่ ดับไป
              <br />
              เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ
            </p>
            <p>
              ไม่เที่ยงเกิดดับ รูป เวทนา สัญญา สังขาร วิญญาณ คือกาย เวทนา จิต ธรรม เกิดขึ้น ตั้งอยู่
              ดับไป
              <br />
              เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ
            </p>
            <p>
              ไม่เที่ยงเกิดดับ กาย เวทนา จิต ธรรม คือโลกและชีวิต เกิดขึ้น ตั้งอยู่ ดับไป
              <br />
              เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ
            </p>
            <p>
              ไม่เที่ยงเกิดดับโลกและชีวิต คือตัวฉัน เกิดขึ้น ตั้งอยู่ ดับไป
              <br />
              เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ
            </p>
            <div className="bg-white/10 p-8 rounded-3xl border border-white/20 mt-8 text-center">
              <p className="font-bold">
                ไม่เที่ยงเกิดดับ โลกและชีวิต เคลื่อนไหวเกิดขึ้น ตั้งอยู่ ดับไป
                <br />
                เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย
                <br />
                ไม่มีตัวตนเป็นของตนเอง ว่างเปล่าจากตนและของของตน
                <br />
                ไม่ควรไปยึดมั่นถือมั่นถือมั่นว่า โลกและชีวิตเป็นของเรา เป็นเรา เป็นตัวตนของเรา
                ไม่เที่ยงเกิดดับ
              </p>
            </div>
          </div>
        </IntrospectionCard>

        {/* --- บทที่ 1 --- */}
        <div className="my-20">
          <h2 className="text-3xl font-bold text-rose-800 mb-8 border-b-2 border-rose-200 pb-2 font-prompt">
            บทที่ 1
          </h2>
          <div className="space-y-6">
            {[
              'ตาเห็นรูป',
              'หูได้ยินเสียง',
              'จมูกได้กลิ่น',
              'ลิ้นได้รส',
              'กายสัมผัส',
              'ใจคิดนึก',
              'มโนกรรม',
              'วจีกรรม',
              'กายกรรม',
            ].map((item, i) => (
              <IntrospectionCard key={i}>
                <p className="text-xl md:text-2xl leading-relaxed text-slate-700">
                  <span className="font-bold text-rose-700">ไม่เที่ยงเกิดดับ</span> เหตุปัจจัยของ
                  {item}ไม่เที่ยงเกิดดับ {item}ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ
                  <br />
                  ผลต่อเนื่องของ{item}ไม่เที่ยงเกิดดับ
                  <br />
                  <span className="text-slate-400 italic">
                    มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ
                  </span>
                </p>
              </IntrospectionCard>
            ))}
          </div>
        </div>

        {/* --- บทที่ 2 --- */}
        <div className="my-20">
          <h2 className="text-3xl font-bold text-rose-800 mb-8 border-b-2 border-rose-200 pb-2 font-prompt">
            บทที่ 2
          </h2>
          <div className="space-y-6">
            {[
              { act: 'ตาฉันเห็นรูป', res: 'ตัวฉันเห็นรูป' },
              { act: 'หูฉันได้ยินเสียง', res: 'ตัวฉันได้ยินเสียง' },
              { act: 'จมูกฉันได้กลิ่น', res: 'ตัวฉันได้กลิ่น' },
              { act: 'ลิ้นฉันได้รส', res: 'ตัวฉันได้รส' },
              { act: 'กายฉันสัมผัส', res: 'ตัวฉันสัมผัส' },
              { act: 'ใจฉันคิดนึก', res: 'ตัวฉันคิดนึก' },
              { act: 'มโนกรรมฉันคิด', res: 'ตัวฉันคิด' },
              { act: 'วจีกรรมฉันพูด', res: 'ตัวฉันพูด' },
              { act: 'กายกรรมฉันทำ', res: 'ตัวฉันทำ' },
              { act: 'มือฉันจับไม้กวาด', res: 'ตัวฉันจับไม้กวาด' },
              { act: 'มือฉันกวาด', res: 'ตัวฉันกวาด' },
              { act: 'มือฉันเคลื่อนไหว', res: 'ตัวฉันเคลื่อนไหว' },
              { act: 'เท้าฉันเดิน', res: 'ตัวฉันเดิน' },
            ].map((item, i) => (
              <IntrospectionCard key={i}>
                <p className="text-xl md:text-2xl leading-relaxed text-slate-700">
                  <span className="font-bold text-rose-700">ไม่เที่ยงเกิดดับ</span> {item.act}คือ
                  {item.res} ทั้งหมดคือโลกและชีวิตผลต่อเนื่อง
                  <br />
                  เป็นธรรมชาติชนิดหนึ่ง เกิดขึ้น ตั้งอยู่ ดับไป ไม่เที่ยงเกิดดับ
                  <br />
                  <span className="text-slate-400 italic">
                    มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ
                  </span>
                </p>
              </IntrospectionCard>
            ))}
          </div>
        </div>

        {/* --- บทที่ 3 --- */}
        <div className="my-20">
          <h2 className="text-3xl font-bold text-rose-800 mb-8 border-b-2 border-rose-200 pb-2 font-prompt">
            บทที่ 3
          </h2>
          <div className="space-y-6">
            {[
              { act: 'ตาฉันเห็นรูป', res: 'ตัวฉันเห็นรูป' },
              { act: 'หูฉันได้ยินเสียง', res: 'ตัวฉันได้ยินเสียง' },
              { act: 'จมูกฉันได้กลิ่น', res: 'ตัวฉันได้กลิ่น' },
              { act: 'ลิ้นฉันได้รส', res: 'ตัวฉันได้รส' },
              { act: 'กายฉันสัมผัส', res: 'ตัวฉันสัมผัส' },
              { act: 'ใจฉันคิดนึก', res: 'ตัวฉันคิดนึก' },
              { act: 'มโนกรรมฉันคิด', res: 'ตัวฉันคิด' },
              { act: 'วจีกรรมฉันพูด', res: 'ตัวฉันพูด' },
              { act: 'กายกรรมฉันทำ', res: 'ตัวฉันทำ' },
              { act: 'มือฉันจับไม้กวาด', res: 'ตัวฉันจับไม้กวาด' },
              { act: 'มือฉันกวาด', res: 'ตัวฉันกวาด' },
              { act: 'มือฉันเคลื่อนไหว', res: 'ตัวฉันเคลื่อนไหว' },
              { act: 'เท้าฉันเดิน', res: 'ตัวฉันเดิน' },
            ].map((item, i) => (
              <IntrospectionCard key={i}>
                <div className="space-y-4 text-xl md:text-2xl leading-relaxed text-slate-700">
                  <p>
                    <span className="font-bold text-rose-700">ไม่เที่ยงเกิดดับ</span> {item.act}คือ
                    {item.res} ทั้งหมดคือโลกและชีวิตผลต่อเนื่อง
                  </p>
                  <div className="bg-rose-50 p-4 rounded-xl border-l-4 border-rose-300 text-lg italic text-rose-800">
                    ไม่ว่า อดีต อนาคต และปัจจุบัน ภายในหรือภายนอก หยาบหรือละเอียด เลวหรือประณีต
                    ไกลหรือใกล้
                  </div>
                  <p>ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง เกิดขึ้น ตั้งอยู่ ดับไป ไม่เที่ยงเกิดดับ</p>
                  <p className="text-slate-400 italic text-lg">
                    มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ
                  </p>
                </div>
              </IntrospectionCard>
            ))}
          </div>
        </div>

        {/* --- บทที่ 4 --- */}
        <div className="my-20">
          <h2 className="text-3xl font-bold text-rose-800 mb-8 border-b-2 border-rose-200 pb-2 font-prompt">
            บทที่ 4
          </h2>
          <div className="space-y-6">
            <IntrospectionCard>
              <p className="text-xl md:text-2xl leading-relaxed text-slate-700">
                <span className="font-bold text-rose-700">ไม่เที่ยงเกิดดับ</span>{' '}
                ตัวฉันผลต่อเนื่องของโลกและชีวิต เกิดขึ้นตั้งอยู่ดับไปไม่เที่ยงเกิดดับ
                <br />
                มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ
              </p>
            </IntrospectionCard>
            <IntrospectionCard>
              <p className="text-xl md:text-2xl leading-relaxed text-slate-700">
                <span className="font-bold text-rose-700">ไม่เที่ยงเกิดดับ</span> ทุกสิ่งทุกอย่าง
                เป็นธรรมชาติ และกฎธรรมชาติ 2 กฎ ไม่เที่ยงเกิดดับ
                <br />
                มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ
              </p>
            </IntrospectionCard>
            <IntrospectionCard>
              <p className="text-xl md:text-2xl leading-relaxed text-slate-700">
                <span className="font-bold text-rose-700">ไม่เที่ยงเกิดดับ</span>{' '}
                สิ่งทั้งปวงโลกและชีวิตผลต่อเนื่อง เกิดขึ้นตั้งอยู่ดับไปไม่เที่ยงเกิดดับ
                <br />
                มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ
              </p>
            </IntrospectionCard>
            <IntrospectionCard>
              <p className="text-xl md:text-2xl leading-relaxed text-slate-700">
                <span className="font-bold text-rose-700">ไม่เที่ยงเกิดดับ</span> มโนกรรมความคิด
                ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ
                <br />
                มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ
              </p>
            </IntrospectionCard>
            <IntrospectionCard>
              <p className="text-xl md:text-2xl leading-relaxed text-slate-700">
                <span className="font-bold text-rose-700">ไม่เที่ยงเกิดดับ</span> วจีกรรมคำพูด
                ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ
                <br />
                มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ
              </p>
            </IntrospectionCard>
            <IntrospectionCard>
              <p className="text-xl md:text-2xl leading-relaxed text-slate-700">
                <span className="font-bold text-rose-700">ไม่เที่ยงเกิดดับ</span>{' '}
                กายกรรมการเคลื่อนไหว ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ
                <br />
                มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ
              </p>
            </IntrospectionCard>
          </div>
        </div>

        {/* --- บทที่ 5 --- */}
        <div className="my-20">
          <h2 className="text-3xl font-bold text-rose-800 mb-8 border-b-2 border-rose-200 pb-2 font-prompt">
            บทที่ 5
          </h2>
          <IntrospectionCard title="ตัวอย่าง: เก้าอี้, โต๊ะ, พื้น">
            <div className="space-y-4 text-xl md:text-2xl leading-relaxed text-slate-700">
              <p>
                <span className="font-bold text-rose-700">ไม่เที่ยงเกิดดับ</span> เก้าอี้
                เป็นธรรมชาติชนิดหนึ่ง เกิดขึ้นตั้งอยู่ดับไป ไม่เที่ยงเกิดดับ
              </p>
              <p>
                <span className="font-bold text-rose-700">ไม่เที่ยงเกิดดับ</span> โต๊ะ
                เป็นธรรมชาติชนิดหนึ่ง เกิดขึ้นตั้งอยู่ดับไป ไม่เที่ยงเกิดดับ
              </p>
              <p>
                <span className="font-bold text-rose-700">ไม่เที่ยงเกิดดับ</span> พื้น
                เป็นธรรมชาติชนิดหนึ่ง เกิดขึ้นตั้งอยู่ดับไป ไม่เที่ยงเกิดดับ
              </p>
              <p className="font-bold text-rose-900 pt-4">
                กำหนดรู้ เก้าอี้ โต๊ะ พื้น เป็นธรรมชาติชนิดหนึ่ง เกิดขึ้นตั้งอยู่ดับไป
                ไม่เที่ยงเกิดดับเหมือนกัน
              </p>
              <p className="text-slate-400 italic text-lg">
                มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ
              </p>
            </div>
          </IntrospectionCard>
        </div>

        {/* --- บทที่ 6 --- */}
        <div className="my-20">
          <h2 className="text-3xl font-bold text-rose-800 mb-8 border-b-2 border-rose-200 pb-2 font-prompt">
            บทที่ 6
          </h2>
          <IntrospectionCard title="ตัวอย่าง: เก้าอี้">
            <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-slate-700">
              <p>
                <span className="font-bold text-rose-700">ไม่เที่ยงเกิดดับ</span> ตัวฉันและเก้าอี้
                เป็นธรรมชาติชนิดหนึ่ง เกิดขึ้นตั้งอยู่ดับไป เกิดจากเหตุปัจจัยมาประชุมชั่วคราว
                แล้วแตกสลายไม่เที่ยงเกิดดับ
              </p>
              <p className="font-bold text-rose-900">
                กำหนดรู้ทุกสิ่งทุกอย่าง เป็นธรรมชาติชนิดหนึ่ง เกิดขึ้นตั้งอยู่ดับไป
                เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลายไม่เที่ยงเกิดดับเหมือนกัน
              </p>
              <p className="text-slate-400 italic text-lg">
                มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ
              </p>
            </div>
          </IntrospectionCard>
        </div>

        {/* --- บทที่ 7 --- */}
        <div className="my-20">
          <h2 className="text-3xl font-bold text-rose-800 mb-8 border-b-2 border-rose-200 pb-2 font-prompt">
            บทที่ 7
          </h2>
          <div className="space-y-8">
            {[
              {
                act: 'ตาเห็นรูป',
                others: 'หูได้ยินเสียง จมูกได้กลิ่น ลิ้นได้รส กายสัมผัส ใจคิดนึก',
              },
              {
                act: 'หูได้ยินเสียง',
                others: 'ตาเห็นรูป จมูกได้กลิ่น ลิ้นได้รส กายสัมผัส ใจคิดนึก',
              },
              {
                act: 'จมูกได้กลิ่น',
                others: 'ตาเห็นรูป หูได้ยินเสียง ลิ้นได้รส กายสัมผัส ใจคิดนึก',
              },
              {
                act: 'ลิ้นได้รส',
                others: 'ตาเห็นรูป หูได้ยินเสียง จมูกได้กลิ่น กายสัมผัส ใจคิดนึก',
              },
              {
                act: 'กายสัมผัส',
                others: 'ตาเห็นรูป หูได้ยินเสียง จมูกได้กลิ่น ลิ้นได้รส ใจคิดนึก',
              },
              {
                act: 'ใจคิดนึก',
                others: 'ตาเห็นรูป หูได้ยินเสียง จมูกได้กลิ่น ลิ้นได้รส กายสัมผัส',
              },
            ].map((item, i) => (
              <IntrospectionCard key={i}>
                <div className="space-y-4 text-xl md:text-2xl leading-relaxed text-slate-700">
                  <p>
                    <span className="font-bold text-rose-700">ไม่เที่ยงเกิดดับ</span> {item.act}
                    เป็นธรรมชาติชนิดหนึ่ง เกิดขึ้นตั้งอยู่ดับไปเกิดจากเหตุปัจจัยมาประชุมชั่วคราว
                    แล้วแตกสลายไม่เที่ยงเกิดดับ
                  </p>
                  <p className="font-bold text-rose-900">
                    กำหนดรู้ {item.others} เป็นธรรมชาติชนิดหนึ่ง เกิดขึ้นตั้งอยู่ดับไป
                    เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับเหมือนกัน
                  </p>
                  <p className="text-slate-400 italic text-lg">
                    มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ
                  </p>
                </div>
              </IntrospectionCard>
            ))}
          </div>
        </div>

        {/* --- บทที่ 8 --- */}
        <div className="my-20">
          <h2 className="text-3xl font-bold text-rose-800 mb-8 border-b-2 border-rose-200 pb-2 font-prompt">
            บทที่ 8
          </h2>
          <div className="space-y-4">
            {[
              'ตาเห็นรูป',
              'หูได้ยินเสียง',
              'จมูกได้กลิ่น',
              'ลิ้นได้รส',
              'กายสัมผัส',
              'ใจคิดนึก',
              'มโนกรรม',
              'วจีกรรม',
              'กายกรรม',
            ].map((item, i) => (
              <IntrospectionCard key={i}>
                <p className="text-xl md:text-2xl leading-relaxed text-slate-700">
                  <span className="font-bold text-rose-700">ไม่เที่ยงเกิดดับ</span> {item}
                  ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ
                  <br />
                  <span className="text-slate-400 italic text-lg">
                    มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ
                  </span>
                </p>
              </IntrospectionCard>
            ))}
          </div>
        </div>

        {/* --- บทที่ 9 --- */}
        <div className="my-20">
          <h2 className="text-3xl font-bold text-rose-800 mb-8 border-b-2 border-rose-200 pb-2 font-prompt">
            บทที่ 9
          </h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <IntrospectionCard key={i}>
                <p className="text-xl md:text-2xl leading-relaxed text-slate-700">
                  <span className="font-bold text-rose-700">ไม่เที่ยงเกิดดับ</span>{' '}
                  เกิดขึ้นตั้งอยู่ดับไป ไม่เที่ยงเกิดดับ
                  <br />
                  <span className="text-slate-400 italic text-lg">
                    มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ
                  </span>
                </p>
              </IntrospectionCard>
            ))}
          </div>
        </div>

        {/* --- บทที่ 10 --- */}
        <div className="my-20">
          <h2 className="text-3xl font-bold text-rose-800 mb-8 border-b-2 border-rose-200 pb-2 font-prompt">
            บทที่ 10
          </h2>
          <IntrospectionCard title="(เอากฎธรรมชาติ 2 กฎไปลบชื่อ)">
            <div className="space-y-4 text-xl md:text-2xl leading-relaxed text-slate-700">
              <p>
                (เก้าอี้) <span className="font-bold text-rose-700">ไม่เที่ยงเกิดดับ</span>{' '}
                เก้าอี้ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ
              </p>
              <p>
                (แสงไฟ) <span className="font-bold text-rose-700">ไม่เที่ยงเกิดดับ</span>{' '}
                แสงไฟไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ
              </p>
              <p>
                (ศาลา) <span className="font-bold text-rose-700">ไม่เที่ยงเกิดดับ</span>{' '}
                ศาลาไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ
              </p>
              <p>
                (เสียงนก) <span className="font-bold text-rose-700">ไม่เที่ยงเกิดดับ</span>{' '}
                เสียงนกไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ
              </p>
            </div>
          </IntrospectionCard>
        </div>

        {/* --- บทที่ 11 --- */}
        <div className="my-20">
          <h2 className="text-3xl font-bold text-rose-800 mb-8 border-b-2 border-rose-200 pb-2 font-prompt">
            บทที่ 11
          </h2>
          <IntrospectionCard title="(เอาไปทำซ้ำ และฝึกกำหนดรู้)">
            <div className="space-y-4 text-xl md:text-2xl leading-relaxed text-slate-700">
              {[1, 2, 3, 4, 5].map((i) => (
                <p key={i}>
                  <span className="font-bold text-rose-700">ไม่เที่ยงเกิดดับ</span>{' '}
                  ชีวิตไม่เที่ยงเกิดดับ (กำหนดรู้ชีวิตคือโลกและชีวิต ไม่เที่ยงเกิดดับ)
                </p>
              ))}
              {[1, 2, 3, 4, 5].map((i) => (
                <p key={i + 5}>
                  <span className="font-bold text-rose-700">ไม่เที่ยงเกิดดับ</span>{' '}
                  ตัวฉันไม่เที่ยงเกิดดับ (กำหนดรู้ตัวฉันคือโลกและชีวิต ไม่เที่ยงเกิดดับ)
                </p>
              ))}
            </div>
          </IntrospectionCard>
        </div>

        {/* --- บทที่ 12 --- */}
        <div className="my-20">
          <h2 className="text-3xl font-bold text-rose-800 mb-8 border-b-2 border-rose-200 pb-2 font-prompt">
            บทที่ 12
          </h2>
          <IntrospectionCard>
            <div className="space-y-4 text-xl md:text-2xl leading-relaxed text-slate-700">
              <p>
                <span className="font-bold text-rose-700">ไม่เที่ยงเกิดดับ</span>{' '}
                ตัวฉันเกิดขึ้นตั้งอยู่ดับไป ไม่เที่ยงเกิดดับ
              </p>
              <p>
                <span className="font-bold text-rose-700">ไม่เที่ยงเกิดดับ</span>{' '}
                ตัวฉันไม่มีตัวตนเป็นของตนเอง ไม่เที่ยงเกิดดับ
              </p>
              <p>
                <span className="font-bold text-rose-700">ไม่เที่ยงเกิดดับ</span>{' '}
                ตัวฉันว่างเปล่าจากตนและของของตน ไม่เที่ยงเกิดดับ
              </p>
              <p>
                <span className="font-bold text-rose-700">ไม่เที่ยงเกิดดับ</span>{' '}
                ไม่ควรไปยึดมั่นถือมั่นว่า ตัวฉันเป็นของเรา เป็นเรา เป็นตัวตนของเรา ไม่เที่ยงเกิดดับ
              </p>
            </div>
          </IntrospectionCard>
        </div>

        {/* --- บทที่ 13 --- */}
        <div className="my-20">
          <h2 className="text-3xl font-bold text-rose-800 mb-8 border-b-2 border-rose-200 pb-2 font-prompt">
            บทที่ 13
          </h2>
          <IntrospectionCard>
            <div className="space-y-4 text-xl md:text-2xl leading-relaxed text-slate-700">
              <p>
                (เดิน) <span className="font-bold text-rose-700">ไม่เที่ยงเกิดดับ</span>{' '}
                เดินเป็นธรรมชาติ เดินเสร็จเป็นกฎธรรมชาติ 2 กฎ ไม่เที่ยงเกิดดับ
              </p>
              <p>
                (นั่ง) <span className="font-bold text-rose-700">ไม่เที่ยงเกิดดับ</span>{' '}
                นั่งเป็นธรรมชาติ นั่งเสร็จเป็นกฎธรรมชาติ 2 กฎ ไม่เที่ยงเกิดดับ
              </p>
              <p>
                (ยืน) <span className="font-bold text-rose-700">ไม่เที่ยงเกิดดับ</span>{' '}
                ยืนเป็นธรรมชาติ ยืนเสร็จเป็นกฎธรรมชาติ 2 กฎ ไม่เที่ยงเกิดดับ
              </p>
              <p>
                (นอน) <span className="font-bold text-rose-700">ไม่เที่ยงเกิดดับ</span>{' '}
                นอนเป็นธรรมชาติ นอนเสร็จเป็นกฎธรรมชาติ 2 กฎ ไม่เที่ยงเกิดดับ
              </p>
            </div>
          </IntrospectionCard>
        </div>

        {/* --- บทที่ 14 --- */}
        <div className="my-20">
          <h2 className="text-3xl font-bold text-rose-800 mb-8 border-b-2 border-rose-200 pb-2 font-prompt">
            บทที่ 14
          </h2>
          <IntrospectionCard highlight={true} className="bg-slate-900 border-rose-500">
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaScaleBalanced className="text-rose-400 text-5xl" />
              <div className="space-y-6 text-2xl md:text-3xl font-medium leading-relaxed text-white">
                <p>
                  ไม่เที่ยงเกิดดับ ทุกข์คือความพอใจไม่พอใจ <br /> ความพอใจไม่พอใจคือทุกข์
                </p>
                <div className="w-16 h-px bg-white/20 mx-auto"></div>
                <p className="text-rose-300 font-bold underline decoration-rose-500 underline-offset-8">
                  ไม่เที่ยงเกิดดับคือสุข สุขคือไม่เที่ยงเกิดดับ
                </p>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-widest text-sm pt-4">
                <FaCircleCheck /> จบบทนำไปใช้ในชีวิตประจำวัน
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-rose-600 hover:bg-rose-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-rose-200 hover:-translate-y-1"
          >
            กลับสู่หน้าแรก
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
