// src/app/extra/anicca-dukkha-anatta/lesson-09/page.tsx
import IntrospectionCard from "@/components/ui/IntrospectionCard";
import Link from "next/link";
import { 
  FaArrowRight, 
  FaCircleQuestion, 
  FaCircleCheck, 
  FaCircleXmark, 
  FaGem, 
  FaLeaf,
  FaHandsPraying
} from "react-icons/fa6";

export default function ExtraLesson09() {
  // ข้อมูลมูลฐานของธรรมทั้งปวง
  const dhammaRoots = [
    { q: "ธรรมทั้งปวงมีอะไรเป็นมูล", a: "มีฉันทะเป็นมูล" },
    { q: "ธรรมทั้งปวงมีอะไรเป็นแดนเกิด", a: "มีมนสิการเป็นแดนเกิด" },
    { q: "ธรรมทั้งปวงมีอะไรเป็นสมุทัย", a: "มีผัสสะเป็นสมุทัย" },
    { q: "ธรรมทั้งปวงมีอะไรเป็นที่ประชุมลง", a: "มีเวทนาเป็นที่ประชุมลง" },
    { q: "ธรรมทั้งปวงมีอะไรเป็นประมุข", a: "มีสมาธิเป็นประมุข" },
    { q: "ธรรมทั้งปวงมีอะไรเป็นใหญ่", a: "มีสติเป็นใหญ่" },
    { q: "ธรรมทั้งปวงมีอะไรเป็นยิ่งกว่า", a: "มีปัญญาเป็นยิ่ง" },
    { q: "ธรรมทั้งปวงมีอะไรเป็นแก่นสาร", a: "มีวิมุติเป็นแก่นสาร" },
  ];

  // ข้อมูลสิ่งที่ไม่ดี (มิจฉา)
  const badThings = [
    { pali: "มิจฉาทิฏฐิ", thai: "ความเห็นผิด" },
    { pali: "มิจฉาสังกัปปะ", thai: "ความดำริผิด" },
    { pali: "มิจฉาวาจา", thai: "เจรจาผิด" },
    { pali: "มิจฉากัมมันตะ", thai: "การงานผิด" },
    { pali: "มิจฉาอาชีวะ", thai: "เลี้ยงชีพผิด" },
    { pali: "มิจฉาวายามะ", thai: "ความพยายามผิด" },
    { pali: "มิจฉาสติ", thai: "ความระลึกผิด" },
    { pali: "มิจฉาสมาธิ", thai: "ตั้งใจผิด" },
    { pali: "มิจฉาญาณะ", thai: "รู้ผิด" },
    { pali: "มิจฉาวิมุติ", thai: "หลุดพ้นผิด" },
  ];

  // ข้อมูลสิ่งที่ดี (สัมมา)
  const goodThings = [
    { pali: "สัมมาทิฏฐิ", thai: "ความเห็นชอบ" },
    { pali: "สัมมาสังกัปปะ", thai: "ความดำริชอบ" },
    { pali: "สัมมาวาจา", thai: "เจรจาชอบ" },
    { pali: "สัมมากัมมันตะ", thai: "การงานชอบ" },
    { pali: "สัมมาอาชีวะ", thai: "เลี้ยงชีพชอบ" },
    { pali: "สัมมาวายามะ", thai: "ความเพียรชอบ" },
    { pali: "สัมมาสติ", thai: "ระลึกชอบ" },
    { pali: "สัมมาสมาธิ", thai: "ตั้งใจชอบ" },
    { pali: "สัมมาญาณะ", thai: "ความรู้ชอบ" },
    { pali: "สัมมาวิมุติ", thai: "ความหลุดพ้นชอบ" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">วิปัสสนาภาวนาเพิ่มเติม</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">การแสดงสิ่งที่ดี และสิ่งที่ไม่ดี</h2>
          <p className="text-slate-500 text-lg italic">"ธรรมทั้งปวงมีอะไรเป็นมูล..."</p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนที่ 1: ปุจฉา-วิสัชนา มูลฐานแห่งธรรม */}
        <IntrospectionCard title="ถ้ามีคนพึงถามอย่างนี้ว่า">
          <div className="space-y-8">
            <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-slate-300 italic text-slate-500">
                <p className="text-lg md:text-xl leading-loose">
                    ธรรมทั้งปวงมีอะไรเป็นมูล<br />
                    ธรรมทั้งปวงมีอะไรเป็นแดนเกิด<br />
                    ธรรมทั้งปวงมีอะไรเป็นสมุทัย<br />
                    ธรรมทั้งปวงมีอะไรเป็นที่ประชุมลง<br />
                    ธรรมทั้งปวงมีอะไรเป็นประมุข<br />
                    ธรรมทั้งปวงมีอะไรเป็นใหญ่<br />
                    ธรรมทั้งปวงมีอะไรเป็นยิ่งกว่า<br />
                    ธรรมทั้งปวงมีอะไรเป็นแก่นสาร
                </p>
            </div>
            
            <div className="grid gap-4">
              <p className="text-xl font-bold text-emerald-700 mb-2">ให้ตอบอย่างนี้ว่า:</p>
              {dhammaRoots.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white p-4 rounded-xl border border-emerald-100 shadow-sm group hover:border-emerald-400 transition-colors">
                  <FaCircleQuestion className="text-emerald-300 mt-1 flex-shrink-0" />
                  <div className="text-xl leading-relaxed">
                    <span className="text-slate-500 text-lg block md:inline">{item.q}</span>
                    <span className="hidden md:inline mx-2 text-emerald-200">|</span>
                    <span className="text-emerald-800 font-bold">{item.a}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 2: ธรรมเป็นที่สิ้นอาสวะ 10 ประการ */}
        <IntrospectionCard highlight={true}>
          <div className="flex items-center gap-4 mb-8 text-white border-b border-white/20 pb-5">
            <FaHandsPraying className="text-3xl text-emerald-200" />
            <h3 className="text-2xl font-bold">ธรรมเป็นที่สิ้นอาสวะ 10 ประการ</h3>
          </div>
          <div className="space-y-6 text-xl leading-relaxed text-white/90">
            <p className="italic">พระพุทธเจ้าตรัสไว้ว่า ธรรมเป็นที่สิ้นอาสวะ 10 ประการ ธรรม 10 ประการนี้ อันบุคคลเจริญแล้วทำให้มากแล้ว ย่อมเป็นไปเพื่อความสิ้นไป แห่งอาสวะทั้งหลาย</p>
            <div className="bg-white/10 p-8 rounded-3xl border border-white/20">
              <p className="text-2xl font-bold text-center text-emerald-100 mb-4">ธรรม 10 ประการเป็นไฉน</p>
              <p className="text-center leading-loose">
                คือสัมมาทิฏฐิ สัมมาสังกัปปะ สัมมาวาจา<br />
                สัมมากัมมันตะ สัมมาอาชีวะ สัมมาวายามะ<br />
                สัมมาสติ สัมมาสมาธิ สัมมาญาณะ สัมมาวิมุติ
              </p>
            </div>
            <p className="text-center font-medium">ย่อมเป็นไปเพื่อความสิ้นไป แห่งอาสวะทั้งหลาย</p>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 3: สิ่งที่ไม่ดี (มิจฉัตตะ) */}
        <IntrospectionCard>
          <div className="flex items-center gap-4 mb-8 text-rose-700 border-b border-rose-100 pb-5">
            <FaCircleXmark className="text-3xl" />
            <h3 className="text-2xl font-bold">สิ่งที่ไม่ดี</h3>
          </div>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700">
            <p className="italic text-slate-500">พระพุทธเจ้าตรัสไว้ว่า การจักแสดงสิ่งที่ดี และสิ่งที่ไม่ดีแก่เธอทั้งหลาย</p>
            <p className="font-bold text-rose-800">สิ่งที่ไม่ดีเป็นไฉน</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {badThings.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center bg-rose-50/50 p-3 px-5 rounded-xl border border-rose-100">
                  <span className="font-bold text-rose-900">{item.pali}</span>
                  <span className="text-rose-600 text-lg">{item.thai}</span>
                </div>
              ))}
            </div>
            <p className="text-center font-bold text-rose-700 pt-4">นี้เรียกว่าสิ่งที่ไม่ดี</p>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 4: สิ่งที่ดี (สัมมัตตะ) */}
        <IntrospectionCard>
          <div className="flex items-center gap-4 mb-8 text-emerald-700 border-b border-emerald-100 pb-5">
            <FaCircleCheck className="text-3xl" />
            <h3 className="text-2xl font-bold">ก็สิ่งที่ดีเป็นไฉน</h3>
          </div>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {goodThings.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center bg-emerald-50/50 p-3 px-5 rounded-xl border border-emerald-100">
                  <span className="font-bold text-emerald-900">{item.pali}</span>
                  <span className="text-emerald-600 text-lg">{item.thai}</span>
                </div>
              ))}
            </div>
            <p className="text-center font-bold text-emerald-700 pt-4">นี้เรียกว่าสิ่งที่ดี</p>
          </div>
        </IntrospectionCard>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/extra/anicca-dukkha-anatta/lesson-10" 
            className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-emerald-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: ถ้ามีคนพึงถามอย่างนี้ว่า (ต่อ)
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}