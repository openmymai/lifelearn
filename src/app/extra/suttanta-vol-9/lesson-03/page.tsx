// src/app/extra/suttanta-vol-9/lesson-03/page.tsx
'use client';

import IntrospectionCard from '@/components/ui/IntrospectionCard';
import Link from 'next/link';
import {
  FaArrowRight,
  FaWeightHanging,
  FaUser,
  FaLink,
  FaHandsHolding,
  FaQuoteLeft,
  FaCircleCheck,
  FaSun,
  FaHandsPraying,
} from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function SuttantaVol9Lesson03() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">
            พระสุตตันตปิฎก เล่มที่ 9
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">
            ภารสูตร
          </h2>
          <p className="text-slate-500 text-lg italic">
            ว่าด้วยภาระ ผู้แบกภาระ เครื่องถือมั่น และการวางภาระ
          </p>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนที่ 1: บทนำ (สถานที่และคำเกริ่น) */}
        <IntrospectionCard>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700">
            <div className="flex items-center justify-center gap-2 text-slate-400 mb-4">
              <FaMapMarkerAlt size={14} />
              <p className="text-sm uppercase tracking-widest font-medium">
                พระนครสาวัตถี ณ ที่นั้นแล ฯลฯ
              </p>
            </div>

            <div className="bg-indigo-50 p-8 rounded-3xl border-l-4 border-indigo-500 shadow-inner">
              <p className="text-indigo-900 font-bold mb-4 flex items-center gap-2">
                <FaHandsPraying /> ดูกรภิกษุทั้งหลาย
              </p>
              <p className="text-2xl text-slate-800 leading-relaxed">
                เราจักแสดงภาระ ผู้แบกภาระ เครื่องถือมั่นภาระ และเครื่องวางภาระ แก่เธอทั้งหลาย
                เธอทั้งหลายจงฟัง จงใส่ใจให้ดี เราจักกล่าว
              </p>
              <p className="mt-4 text-slate-500 italic text-lg">
                ภิกษุเหล่านั้น ทูลรับสนองพระพุทธดำรัสแล้ว พระผู้มีพระภาคได้ตรัสว่า
              </p>
            </div>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 2: จำแนกภาระ 4 ประการ (Full Text Blocks) */}
        <div className="space-y-8 my-12">
          {/* 1. ภาระ */}
          <div className="bg-white p-8 rounded-[2.5rem] border-2 border-rose-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-4 mb-6 text-rose-600 border-b border-rose-50 pb-4">
              <FaWeightHanging className="text-2xl" />
              <h3 className="text-2xl font-bold">ก็ภาระเป็นไฉน?</h3>
            </div>
            <div className="space-y-4 text-xl leading-relaxed text-slate-700">
              <p>พึงกล่าวว่า ภาระ คืออุปาทานขันธ์ ๕</p>
              <div className="bg-rose-50/50 p-6 rounded-2xl border-l-4 border-rose-400">
                <p className="font-bold text-rose-900 mb-2">อุปาทานขันธ์ ๕ เป็นไฉน?</p>
                <p>
                  คือ อุปาทานขันธ์ คือรูป อุปาทานขันธ์ คือเวทนา อุปาทานขันธ์ คือสัญญา อุปาทานขันธ์
                  คือสังขาร และอุปาทานขันธ์ คือวิญญาณ
                </p>
              </div>
              <p className="text-center font-bold text-rose-700 pt-2">
                ดูกรภิกษุทั้งหลาย นี้เรียกว่าภาระ.
              </p>
            </div>
          </div>

          {/* 2. ผู้แบกภาระ */}
          <div className="bg-white p-8 rounded-[2.5rem] border-2 border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-4 mb-6 text-slate-600 border-b border-slate-50 pb-4">
              <FaUser className="text-2xl" />
              <h3 className="text-2xl font-bold">ก็ผู้แบกภาระเป็นไฉน?</h3>
            </div>
            <div className="space-y-4 text-xl leading-relaxed text-slate-700">
              <p>พึงกล่าวว่าบุคคล</p>
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-slate-400 italic">
                บุคคลนี้นั้น คือ ท่านผู้มีชื่ออย่างนี้ มีโคตรอย่างนี้
              </div>
              <p className="text-center font-bold text-slate-800 pt-2">
                ดูกรภิกษุทั้งหลาย นี้เรียกว่าผู้แบกภาระ.
              </p>
            </div>
          </div>

          {/* 3. เครื่องถือมั่นภาระ */}
          <div className="bg-white p-8 rounded-[2.5rem] border-2 border-amber-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-4 mb-6 text-amber-600 border-b border-amber-50 pb-4">
              <FaLink className="text-2xl" />
              <h3 className="text-2xl font-bold">ก็เครื่องถือมั่นภาระเป็นไฉน?</h3>
            </div>
            <div className="space-y-4 text-xl leading-relaxed text-slate-700">
              <p>
                ตัณหานี้ใด นำให้เกิดภพใหม่ ประกอบด้วยความกำหนัด ด้วยอำนาจความเพลิดเพลิน
                มีปกติเพลิดเพลินยิ่ง ในภพหรืออารมณ์นั้นๆ
              </p>
              <div className="bg-amber-50 p-6 rounded-2xl border-l-4 border-amber-500 font-bold text-amber-900">
                ได้แก่กามตัณหา ภวตัณหา วิภวตัณหา
              </div>
              <p className="text-center font-bold text-amber-700 pt-2">
                ดูกรภิกษุทั้งหลาย นี้เรียกว่าเครื่องถือมั่นภาระ
              </p>
            </div>
          </div>

          {/* 4. การวางภาระ */}
          <div className="bg-white p-8 rounded-[2.5rem] border-2 border-emerald-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-4 mb-6 text-emerald-600 border-b border-emerald-50 pb-4">
              <FaHandsHolding className="text-2xl" />
              <h3 className="text-2xl font-bold">ก็การวางภาระเป็นไฉน?</h3>
            </div>
            <div className="space-y-4 text-xl leading-relaxed text-slate-700">
              <p>ความที่ตัณหานั่นแลดับไปด้วย สำรอกโดยไม่เหลือ</p>
              <div className="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-500 font-bold text-emerald-900">
                ความสละ ความสละคืน ความพ้น ความไม่อาลัย
              </div>
              <p className="text-center font-bold text-emerald-700 pt-2">
                ดูกรภิกษุทั้งหลาย นี้เรียกว่าการวางภาระ
              </p>
            </div>
          </div>
        </div>

        {/* ส่วนที่ 3: คาถาประพันธ์ (Gatha) */}
        <div className="mt-16">
          <IntrospectionCard highlight={true} className="bg-slate-900 border-indigo-500">
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaQuoteLeft className="text-indigo-400 text-4xl opacity-50" />

              <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90">
                <p className="italic text-indigo-200 text-lg">
                  พระผู้มีพระภาค ผู้พระสุคตศาสดา ครั้นได้ตรัสไวยากรณ์ภาษิตนี้ จบลงแล้ว
                  จึงได้ตรัสคาถาประพันธ์ ต่อไปอีกในภายหลังว่า
                </p>

                <div className="space-y-8 text-2xl md:text-3xl font-medium">
                  <p>ขันธ์ ๕ ชื่อว่าภาระแล และผู้แบกภาระคือบุคคล</p>
                  <p className="text-rose-400">เครื่องถือมั่นภาระ เป็นเหตุนำมาซึ่งความทุกข์ในโลก</p>

                  <div className="bg-white/10 p-10 rounded-[3rem] border border-white/20 shadow-2xl">
                    <p className="text-emerald-400 font-bold mb-4">การวางภาระเสียได้เป็นสุข</p>
                    <p className="text-white">บุคคลวางภาระหนักเสียได้แล้ว ไม่ถือภาระอื่น</p>
                    <p className="text-white">ถอนตัณหาพร้อม ทั้งมูลรากแล้ว</p>
                    <div className="mt-8 flex items-center justify-center gap-3 text-amber-400">
                      <FaSun className="animate-spin-slow" style={{ animationDuration: '15s' }} />
                      <span className="text-3xl md:text-4xl font-black underline decoration-amber-500 underline-offset-8">
                        เป็นผู้หายหิวดับรอบแล้วดังนี้
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-widest text-sm pt-4">
                <FaCircleCheck /> จบภารสูตร
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link
            href="/extra/suttanta-vol-9/lesson-04"
            className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-indigo-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: อุปาทิยสูตร
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
