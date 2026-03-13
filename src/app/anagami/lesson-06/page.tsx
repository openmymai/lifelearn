// src/app/anagami/lesson-06/page.tsx
import IntrospectionCard from "@/components/ui/IntrospectionCard";
import Link from "next/link";
import { 
  FaArrowRight,   
  FaArrowsLeftRight, 
  FaArrowUp, 
  FaArrowDown, 
  FaPersonWalkingArrowRight,
  FaHeart,
  FaCircleExclamation
} from "react-icons/fa6";
import { FaWalking } from "react-icons/fa";

export default function AnagamiLesson06() {
  // 1. ข้อมูลกายกรรม (การเคลื่อนไหวเฉพาะจุด)
  const physicalActions = [
    { label: "เท้าเดิน", icon: <FaWalking /> },
    { label: "เหลียวซ้าย", icon: <FaArrowsLeftRight className="scale-x-[-1]" /> },
    { label: "เหลียวขวา", icon: <FaArrowsLeftRight /> },
    { label: "เงยหน้า", icon: <FaArrowUp /> },
    { label: "ก้มหน้า", icon: <FaArrowDown /> },
  ];

  const natureRefrain = "โลกและชีวิต เป็นธรรมชาติชนิดหนึ่ง ไม่เที่ยงเกิดดับ ดับไม่เหลือ";
  const truthRefrain = "ความจริงเป็นธรรมชาติชนิดหนึ่ง ไม่เที่ยงเกิดดับ ดับไม่เหลือเหมือนกัน";
  const causeRefrain = "เพราะเกิดจากเหตุปัจจัย มาประชุมปรุงแต่งชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ ดับไม่เหลือเหมือนกัน";
  const happinessRefrain = "กำหนดรู้สุขถาวรเกิดขึ้นแล้ว เก็บสุขถาวรไว้ทันที";

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">หลักสูตรอนาคามีผล</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">ฝึกตามทันกายกรรม</h2>
          <p className="text-slate-500 text-lg">พิจารณาการเคลื่อนไหวและการละความเห็นผิด</p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนที่ 1: พิจารณากายกรรมรายบท */}
        <div className="space-y-10 mb-16">
          {physicalActions.map((item, i) => (
            <IntrospectionCard key={i}>
              <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-5">
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center shadow-sm text-xl">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800">{item.label}</h3>
              </div>

              <div className="space-y-6 text-xl leading-relaxed">
                <p className="text-slate-700">
                  <span className="font-bold text-amber-800">{item.label}</span> {natureRefrain}
                </p>
                <p className="text-slate-700">
                  ความรู้สึกว่า{item.label} เป็นธรรมชาติชนิดหนึ่ง ไม่เที่ยงเกิดดับ ดับไม่เหลือ
                </p>
                <p className="text-slate-500 italic">{natureRefrain}</p>

                {/* ส่วนพิจารณาความเห็นผิด */}
                <div className="bg-rose-50 p-6 rounded-2xl border-l-4 border-rose-400 my-6">
                  <p className="text-rose-700 font-medium flex items-center gap-2">
                    <FaCircleExclamation /> ความรู้สึกว่าโลกและชีวิต มีตัวตนเป็นของตนเอง <span className="font-bold underline">เป็นความเห็นผิด</span>
                  </p>
                </div>

                <p className="text-slate-700">{truthRefrain}</p>
                <p className="text-slate-500 text-lg">{causeRefrain}</p>
                <p className="text-slate-700">ความรู้สึกว่าสิ่งนี้มี เป็นธรรมชาติชนิดหนึ่ง ไม่เที่ยงเกิดดับ ดับไม่เหลือเหมือนกัน</p>

                {/* ส่วนกำหนดรู้สุขถาวร (Highlight) */}
                <div className="bg-amber-600 text-white p-6 rounded-2xl shadow-lg shadow-amber-200 flex items-center justify-center gap-4">
                  <FaHeart className="animate-pulse text-amber-200" />
                  <p className="text-xl md:text-2xl font-bold">{happinessRefrain}</p>
                </div>
              </div>
            </IntrospectionCard>
          ))}
        </div>

        {/* ส่วนที่ 2: บทสรุปการเคลื่อนไหวและโลก/ชีวิต */}
        <div className="space-y-8">
          <h4 className="text-center text-slate-400 font-medium mb-8 uppercase tracking-widest">บทสรุปการกำหนดรู้</h4>
          
          {/* การเคลื่อนไหว */}
          <IntrospectionCard>
            <div className="flex items-center gap-4 mb-6 text-dhamma-blue">
              <FaPersonWalkingArrowRight className="text-2xl" />
              <h4 className="text-xl font-bold">การเคลื่อนไหว</h4>
            </div>
            <div className="space-y-4 text-xl text-slate-600 leading-relaxed">
              <p>การเคลื่อนไหว คือโลกและชีวิต {natureRefrain}</p>
              <p className="text-rose-600 font-medium italic">ความรู้สึกว่าการเคลื่อนไหว คือโลกและชีวิตมีตัวตนเป็นของตนเอง เป็นความเห็นผิด</p>
              <p>{truthRefrain}</p>
              <p className="text-slate-500 text-lg">{causeRefrain}</p>
              <div className="bg-amber-100 text-amber-800 p-4 rounded-xl font-bold text-center">
                {happinessRefrain}
              </div>
            </div>
          </IntrospectionCard>

          {/* โลก (อายตนะภายนอก) */}
          <IntrospectionCard>
            <p className="text-xl text-slate-700 leading-relaxed">
              <span className="font-bold text-amber-800">รูป เสียง กลิ่น รส โผฏฐัพพะ ธรรมารมณ์</span> คือโลกเป็นธรรมชาติชนิดหนึ่ง ไม่เที่ยงเกิดดับ ดับไม่เหลือ <br />
              <span className="text-rose-600 font-medium italic">ความรู้สึกว่าโลกมีตัวตนเป็นของตนเอง เป็นความเห็นผิด</span> <br />
              {truthRefrain}
            </p>
          </IntrospectionCard>

          {/* ชีวิต (อายตนะภายใน) */}
          <IntrospectionCard>
            <p className="text-xl text-slate-700 leading-relaxed">
              <span className="font-bold text-amber-800">ตา หู จมูก ลิ้น กาย ใจ</span> คือชีวิตเป็นธรรมชาติชนิดหนึ่ง ไม่เที่ยงเกิดดับ ดับไม่เหลือ <br />
              <span className="text-rose-600 font-medium italic">ความรู้สึกว่าชีวิตมีตัวตนเป็นของตนเอง เป็นความเห็นผิด</span> <br />
              {truthRefrain}
            </p>
          </IntrospectionCard>

          {/* ผลต่อเนื่อง */}
          <IntrospectionCard highlight={true}>
            <div className="space-y-6 text-center">
              <p className="text-xl md:text-2xl leading-relaxed">
                โลกและชีวิตกระทบสัมผัส ผลต่อเนื่องที่เกิดขึ้นเป็นธรรมชาติชนิดหนึ่ง ไม่เที่ยงเกิดดับ ดับไม่เหลือ <br />
                <span className="text-amber-200 italic">ความรู้สึกว่าผลต่อเนื่องที่เกิดขึ้นมีตัวตนเป็นของตนเอง เป็นความเห็นผิด</span> <br />
                {truthRefrain}
              </p>
              <div className="bg-white text-amber-600 p-6 rounded-2xl font-bold text-2xl shadow-xl">
                {happinessRefrain}
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/anagami/lesson-07" 
            className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-amber-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}