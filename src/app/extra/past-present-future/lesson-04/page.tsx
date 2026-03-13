// src/app/extra/past-present-future/lesson-04/page.tsx
import IntrospectionCard from "@/components/ui/IntrospectionCard";
import Link from "next/link";
import { 
  FaArrowRight, 
  FaCircleQuestion, 
  FaTriangleExclamation, 
  FaDoorOpen,
  FaQuoteLeft,
  FaLightbulb
} from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa"

export default function PastPresentFutureLesson04() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-teal-600 font-bold tracking-widest uppercase text-sm">วิปัสสนาภาวนาเพิ่มเติม</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">สัมโพธสูตรที่ 1</h2>
          <p className="text-slate-500 text-lg italic">การพิจารณาคุณ โทษ และความสลัดออกแห่งอายตนะ</p>
          <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนที่ 1: ความคิดก่อนการตรัสรู้ */}
        <IntrospectionCard>
          <div className="flex items-center gap-3 mb-6 text-teal-700 border-b pb-4">
            <FaCircleQuestion className="text-2xl" />
            <h3 className="text-2xl font-bold">ก่อนการตรัสรู้</h3>
          </div>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700">
            <p className="font-medium italic text-slate-500">ดูกรภิกษุทั้งหลาย ก่อนการตรัสรู้ เมื่อเรายังเป็นโพธิสัตว์ ยังไม่ได้ตรัสรู้ ได้มีความคิดดังนี้ว่า</p>
            <div className="bg-teal-50 p-8 rounded-3xl border-l-4 border-teal-500 shadow-inner">
              <p className="text-2xl text-teal-900 font-bold text-center leading-relaxed">
                อะไรเป็นคุณอะไรเป็นโทษ <br />
                อะไรเป็นความสลัดออกแห่งจักษุ ฯลฯ <br />
                แห่ง​หู ฯลฯ แห่งจมูก ฯลฯ แห่งลิ้น ฯลฯ แห่งกาย ฯลฯ <br />
                อะไรเป็นคุณอะไรเป็นโทษ อะไรเป็นความสลัดออกแห่งใจ
              </p>
            </div>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 2: คำตอบแห่งการพิจารณา (คุณ โทษ ความสลัดออก) */}
        <IntrospectionCard title="ดูกรภิกษุทั้งหลาย เราได้มีความคิดดังนี้ว่า">
          <div className="space-y-10 text-xl leading-relaxed text-slate-700">
            {/* พิจารณาจักษุ */}
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="flex items-start gap-4 bg-emerald-50 p-4 rounded-2xl">
                  <FaCheckCircle className="text-emerald-600 mt-1" />
                  <p> สุขโสมนัสเกิดขึ้นเพราะอาศัยจักษุ นี้เป็นคุณของจักษุ</p>
                </div>
                <div className="flex items-start gap-4 bg-rose-50 p-4 rounded-2xl">
                  <FaTriangleExclamation className="text-rose-600 mt-1" />
                  <p>จักษุเป็นของไม่เที่ยงเป็นทุกข์ มีความแปรปรวนเป็นธรรมดา นี้เป็นโทษของจักษุ</p>
                </div>
                <div className="flex items-start gap-4 bg-blue-50 p-4 rounded-2xl">
                  <FaDoorOpen className="text-blue-600 mt-1" />
                  <p>การกำจัดการละฉันทราคะในจักษุ นี้เป็นความสลัดออกแห่งจักษุ ฯลฯ</p>
                </div>
              </div>
            </div>

            {/* พิจารณาใจ */}
            <div className="space-y-4 pt-6">
              
              <div className="grid gap-4">
                <div className="flex items-start gap-4 bg-emerald-50 p-4 rounded-2xl">
                  <FaCheckCircle className="text-emerald-600 mt-1" />
                  <p> สุขโสมนัสที่เกิดขึ้นเพราะอาศัยใจ นี้เป็นคุณแห่งใจ</p>
                </div>
                <div className="flex items-start gap-4 bg-rose-50 p-4 rounded-2xl">
                  <FaTriangleExclamation className="text-rose-600 mt-1" />
                  <p>ใจมีสภาพไม่เที่ยงเป็นทุกข์ มีความแปรปรวนเป็นธรรมดา นี้เป็นโทษแห่งใจ</p>
                </div>
                <div className="flex items-start gap-4 bg-blue-50 p-4 rounded-2xl">
                  <FaDoorOpen className="text-blue-600 mt-1" />
                  <p>การกำจัดฉันทราคะในใจ นี้เป็นความสลัดออกแห่งใจ</p>
                </div>
              </div>
            </div>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 3: การปฏิญาณการตรัสรู้ */}
        <IntrospectionCard highlight={true}>
          <div className="flex flex-col items-center text-center space-y-8 py-4">
            <FaLightbulb className="text-teal-200 text-5xl animate-pulse" />
            
            <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90">
              <p className="italic opacity-80">ดูกรภิกษุทั้งหลาย เรายังไม่รู้ตามความเป็นจริง ซึ่งคุณแห่งอายตนะภายใน 6 เหล่านี้ โดยเป็นคุณ ซึ่งโทษโดยความเป็นโทษ และซึ่งความสลัดออก โดยเป็นความสลัดออกอย่างนี้เพียงใด เราก็ยังไม่ปฏิญาณว่าได้ตรัสรู้...</p>
              
              <div className="bg-white/10 p-8 rounded-[2.5rem] border border-white/20 shadow-2xl">
                <p className="text-2xl md:text-3xl font-bold text-white mb-6">เมื่อใดเราได้รู้ตามความเป็นจริง...</p>
                <p>เมื่อนั้นเราจึงปฏิญาณว่าได้ตรัสรู้ ซึ่งอนุตตรสัมมาสัมโพธิญาณในโลก พร้อมเทวโลก มารโลก พรหมโลก ในหมู่สัตว์ พร้อมทั้งสมณพราหมณ์เทวดาและมนุษย์</p>
              </div>

              <div className="space-y-4 pt-6">
                <FaQuoteLeft className="mx-auto text-teal-300 opacity-50 text-3xl" />
                <p className="text-2xl md:text-4xl font-bold text-white underline decoration-teal-400 underline-offset-8">
                  ก็ญาณทัสนะเกิดขึ้นแล้วแก่เราว่า
                </p>
                <p className="text-2xl md:text-3xl font-bold text-teal-100">
                  ความหลุดพ้นของเราไม่กำเริบ
                </p>
                <p className="text-2xl md:text-3xl font-bold text-teal-100">
                  ชาตินี้มีในที่สุดบัดนี้ภพใหม่ไม่มี
                </p>
              </div>
            </div>
          </div>
        </IntrospectionCard>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/extra/past-present-future/lesson-05" 
            className="inline-flex items-center gap-3 bg-teal-600 hover:bg-teal-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-teal-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: โนอัสสาสูตรที่ 2
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}