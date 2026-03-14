// src/app/extra/paticcasamuppada/lesson-01/page.tsx
import IntrospectionCard from "@/components/ui/IntrospectionCard";
import Link from "next/link";
import { 
  FaEye, 
  FaEarListen, 
  FaWind, 
  FaUtensils, 
  FaHandPointer, 
  FaBrain, 
  FaArrowRight,
  FaLink
} from "react-icons/fa6";

export default function PaticcasamuppadaLesson01() {
  const sensesSummary = [
    { text: "ตาเห็นรูป รูปไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ", icon: <FaEye /> },
    { text: "หูได้ยินเสียง เสียงไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ", icon: <FaEarListen /> },
    { text: "จมูกได้กลิ่น กลิ่นไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ", icon: <FaWind /> },
    { text: "ลิ้นได้รส รสไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ", icon: <FaUtensils /> },
    { text: "กายสัมผัส ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ", icon: <FaHandPointer /> },
    { text: "ใจคิดนึก ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ", icon: <FaBrain /> },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 text-cyan-600 rounded-2xl mb-6 shadow-sm">
            <FaLink size={28} />
          </div>
          <span className="block text-cyan-600 font-bold tracking-widest uppercase text-sm mb-2">
            หมวดปฏิจจสมุปบาท
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 font-prompt">
            วิปัสสนาภาวนา
          </h2>
          <p className="text-slate-500 text-lg italic">พิจารณาขันธ์ 5 และอินทรีย์ 6 เป็นบทนำ</p>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนเนื้อหาบทท่องหลัก */}
        <IntrospectionCard highlight={true} className="bg-cyan-600 shadow-cyan-200">
          <div className="space-y-8 py-4">
            {sensesSummary.map((item, i) => (
              <div key={i} className="flex items-center gap-6 group">
                <div className="hidden md:flex w-12 h-12 bg-white/10 rounded-xl items-center justify-center text-cyan-100 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <p className="text-xl md:text-2xl font-medium leading-relaxed text-white">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </IntrospectionCard>

        {/* คำแนะนำสั้นๆ */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 italic">
            "กำหนดรู้สุขถาวรเกิดขึ้นแล้ว เก็บสุขถาวรไว้ทันที"
          </p>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/extra/paticcasamuppada/lesson-02" 
            className="inline-flex items-center gap-3 bg-cyan-600 hover:bg-cyan-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-cyan-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: ภิกขุวรรค
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}