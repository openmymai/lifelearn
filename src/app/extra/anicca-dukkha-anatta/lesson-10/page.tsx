// src/app/extra/anicca-dukkha-anatta/lesson-10/page.tsx
import IntrospectionCard from "@/components/ui/IntrospectionCard";
import Link from "next/link";
import { 
  FaArrowRight, 
  FaHeart,  
  FaQuoteLeft,
  FaHandsPraying,
  FaMoon,
  FaSun,
  FaFaceSmileBeam,
  FaShieldHalved,
  FaCloudSun
} from "react-icons/fa6";
import { FaCheckCircle } from 'react-icons/fa'

export default function ExtraLesson10() {
  // ข้อมูลอานิสงส์ 11 ประการ (คงเนื้อหาเดิมทุกตัวอักษร)
  const benefits = [
    { text: "ย่อมหลับเป็นสุข", icon: <FaMoon /> },
    { text: "ย่อมตื่นเป็นสุข", icon: <FaSun /> },
    { text: "ย่อมไม่ฝันลามก", icon: <FaCloudSun /> },
    { text: "ย่อมเป็นที่รักของมนุษย์ทั้งหลาย", icon: <FaHeart /> },
    { text: "ย่อมเป็นที่รักของอมนุษย์ทั้งหลาย", icon: <FaHeart className="opacity-50" /> },
    { text: "เทวดาทั้งหลายย่อมรักษา", icon: <FaHandsPraying /> },
    { text: "ไฟ ยาพิษ หรือศาสตราย่อมไม่กล้ำกลายได้", icon: <FaShieldHalved /> },
    { text: "จิตย่อมตั้งมั่นได้เร็ว", icon: <FaCheckCircle /> },
    { text: "สีหน้าผ่องใส", icon: <FaFaceSmileBeam /> },
    { text: "เป็นผู้ไม่หลงไหลทำกาละ", icon: <FaCheckCircle /> },
    { text: "เมื่อไม่แทงตลอด คุณยิ่งย่อมเป็นผู้เข้าถึงพรหมโลก", icon: <FaCheckCircle /> },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">วิปัสสนาภาวนาเพิ่มเติม</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">ถ้ามีคนพึงถามอย่างนี้ว่า</h2>
          <p className="text-slate-500 text-lg italic">อานิสงส์ 11 ประการของเมตตาเจโตวิมุติ</p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนที่ 1: บทนำเรื่องเมตตาเจโตวิมุติ */}
        <IntrospectionCard highlight={true}>
          <div className="flex items-center gap-4 mb-8 text-white border-b border-white/20 pb-5">
            <FaHeart className="text-3xl text-emerald-200 animate-pulse" />
            <h3 className="text-2xl font-bold">เมตตาเจโตวิมุติ</h3>
          </div>
          <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90">
            <p className="italic">พระพุทธเจ้าตรัสไว้ว่า เมื่อเมตตาเจโตวิมุติอันบุคคลเสพแล้ว ทำให้มากแล้ว</p>
            <div className="grid gap-2 pl-6 border-l-2 border-emerald-300/50">
              <p>ทำให้เป็นดุจญาณ</p>
              <p>ทำให้เป็นที่ตั้งให้ตั้งมั่นโดยลำดับ</p>
              <p>สั่งสมดีแล้ว ปรารถนาดีแล้ว</p>
            </div>
            <p className="text-center font-bold text-emerald-100 pt-4">
              พึงหวังอานิสงส์ 11 ประการ
            </p>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 2: รายการอานิสงส์ 11 ประการ */}
        <div className="my-12">
          <h4 className="text-center text-slate-400 font-medium mb-8 uppercase tracking-widest">11 ประการเป็นไฉน</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all group"
              >
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <p className="text-lg md:text-xl text-slate-700 font-medium">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ส่วนที่ 3: บทสรุปปิดท้าย */}
        <IntrospectionCard>
          <div className="flex gap-6 items-start">
            <FaQuoteLeft className="text-emerald-200 text-5xl flex-shrink-0" />
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <p>เมื่อเมตตาเจโตวิมุติอันบุคคลเสพแล้ว<br />
              เจริญแล้วทำให้มากแล้ว<br />
              ทำให้เจริญดุจญาณ<br />
              ทำให้ตั้งมั่นโดยลำดับ<br />
              สั่งสมดีแล้ว ปรารถนาดีแล้ว</p>
              
              <div className="bg-emerald-900 text-white p-8 rounded-3xl shadow-xl text-center">
                <p className="text-2xl font-bold">พึงหวังอานิสงส์ 11 ประการฉะนี้แล</p>
              </div>
            </div>
          </div>
        </IntrospectionCard>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/extra/anicca-dukkha-anatta/lesson-11" 
            className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-emerald-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: ราหุลสูตร
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}