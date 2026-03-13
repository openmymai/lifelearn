// src/app/extra/past-present-future/lesson-05/page.tsx
import IntrospectionCard from "@/components/ui/IntrospectionCard";
import Link from "next/link";
import { 
  FaArrowRight, 
  FaEye, 
  FaBrain, 
  FaLinkSlash, 
  FaEarthAsia,
  FaQuoteLeft,
  FaCircleCheck,
  FaCircleExclamation
} from "react-icons/fa6";

export default function PastPresentFutureLesson05() {
  // ฟังก์ชันจัดกลุ่มตรรกะ คุณ โทษ ความสลัดออก (คงเนื้อหาเดิมทุกตัวอักษร)
  const LogicBlock = ({ title, subject, icon, colorClass }: { title: string, subject: string, icon: React.ReactNode, colorClass: string }) => (
    <IntrospectionCard title={title}>
      <div className="flex items-center gap-3 mb-6 text-teal-700 border-b pb-4">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-2xl font-bold">{subject}</h3>
      </div>
      
      <div className="space-y-8 text-xl leading-relaxed text-slate-700">
        {/* ส่วน คุณ */}
        <div className="bg-emerald-50/50 p-5 rounded-2xl border-l-4 border-emerald-400">
          <p className="italic text-slate-500 mb-2 text-lg">ถ้าคุณแห่ง{subject}จักไม่มีแล้วไซร้ สัตว์ทั้งหลาย ก็จะไม่พึงกำหนัดใน{subject}</p>
          <p className="font-bold text-emerald-800 text-2xl">แต่เพราะคุณของ{subject}มีอยู่ ฉะนั้นสัตว์ทั้งหลาย จึงกำหนัดใน{subject}</p>
        </div>

        {/* ส่วน โทษ */}
        <div className="bg-rose-50/50 p-5 rounded-2xl border-l-4 border-rose-400">
          <p className="italic text-slate-500 mb-2 text-lg">ถ้าโทษแห่ง{subject}ไม่มีแล้วไซร้ สัตว์ทั้งหลาย ก็จะไม่พึงเบื่อหน่ายใน{subject}</p>
          <p className="font-bold text-rose-800 text-2xl">แต่เพราะโทษแห่ง{subject}มีอยู่ ฉะนั้นสัตว์ทั้งหลาย จึงเบื่อหน่ายใน{subject}</p>
        </div>

        {/* ส่วน ความสลัดออก */}
        <div className="bg-blue-50/50 p-5 rounded-2xl border-l-4 border-blue-400">
          <p className="italic text-slate-500 mb-2 text-lg">ถ้าความสลัดออกแห่ง{subject} จักไม่มีแล้วไซร้ สัตว์ทั้งหลาย ก็จะไม่พึงสลัดออกจาก{subject}</p>
          <p className="font-bold text-blue-800 text-2xl">แต่เพราะความสลัดออกแห่ง{subject}มีอยู่ ฉะนั้นสัตว์ทั้งหลาย จึงสลัดออกแห่ง{subject} {subject === "รูป" ? "ฯลฯ" : ""}</p>
        </div>

        {subject === "รูป" && (
          <p className="text-center text-slate-400 font-medium pt-4">
            แห่งเสียง ฯลฯ แห่งกลิ่น ฯลฯ แห่งรส ฯลฯ แห่งโผฏฐัพพะ ฯลฯ
          </p>
        )}
      </div>
    </IntrospectionCard>
  );

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-teal-600 font-bold tracking-widest uppercase text-sm">วิปัสสนาภาวนาเพิ่มเติม</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">โนอัสสาสูตรที่ 2</h2>
          <p className="text-slate-500 text-lg italic">ว่าด้วยเหตุแห่งความกำหนัด ความเบื่อหน่าย และการสลัดออก</p>
          <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* บทนำ */}
        <div className="mb-12 text-center">
          <p className="text-xl text-slate-600 font-medium italic">ดูกรภิกษุทั้งหลาย</p>
        </div>

        {/* ส่วนที่ 1: พิจารณารูป */}
        <LogicBlock title="รูป" subject="รูป" icon={<FaEye />} colorClass="teal" />

        {/* ส่วนที่ 2: พิจารณาธรรมารมณ์ */}
        <LogicBlock title="ธรรมารมณ์" subject="ธรรมารมณ์" icon={<FaBrain />} colorClass="teal" />

        {/* ส่วนที่ 3: การรู้แจ้งและการหลุดพ้น */}
        <div className="mt-16">
          <IntrospectionCard highlight={true}>
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaEarthAsia className="text-teal-200 text-5xl animate-spin-slow" style={{ animationDuration: '10s' }} />
              
              <div className="space-y-10 text-xl md:text-2xl leading-relaxed text-white/90">
                {/* สภาวะที่ยังไม่รู้ */}
                <div className="space-y-4 opacity-80">
                  <p className="flex items-center justify-center gap-2 text-rose-300 font-bold uppercase tracking-widest text-sm">
                    <FaCircleExclamation /> 
                  </p>
                  <p>ดูกรภิกษุทั้งหลาย สัตว์ทั้งหลาย ยังไม่รู้ตามความเป็นจริง ซึ่งคุณแห่งอายตนะภายนอก 6 เหล่านี้ โดยเป็นคุณ ซึ่งโทษโดยความเป็นโทษ ซึ่งความสลัดออก
                     โดยเป็นความสลัดออกเพียงใด สัตว์ทั้งหลายก็ยังเป็นผู้ไม่ออกไป พรากไป หลุดพ้นจากโลก พร้อมเทวโลก มารโลก พรหมโลก จากหมู่สัตว์ พร้อมทั้งสมณพราหมณ์เทวดาและมนุษย์</p>
                  <p className="text-2xl font-bold text-white italic">"มีใจหาเขตแดนไม่ได้อยู่เพียงนั้น"</p>
                </div>

                <div className="w-16 h-px bg-white/20 mx-auto"></div>

                {/* สภาวะที่รู้แจ้งแล้ว */}
                <div className="space-y-6">
                  <p className="flex items-center justify-center gap-2 text-amber-300 font-bold uppercase tracking-widest text-sm">
                    <FaCircleCheck /> 
                  </p>
                  <p className="text-white font-medium">แต่เมื่อใดสัตว์ทั้งหลายได้รู้ตามความเป็นจริง ซึ่งคุณแห่งอายตนะ 6 เหล่านี้ โดยเป็นคุณ
                     ซึ่งโทษโดยความเป็นโทษ ซึ่งความสลัดออก โดยเป็นความสลัดออก เมื่อนั้นสัตว์ทั้งหลายก็เป็นผู้ออกไป หลุดพ้นไปจากโลก พร้อมทั้งเทวโลก มารโลก พรหมโลก จากหมู่สัตว์ พร้อมทั้งสมณพราหมณ์ เทวดาและมนุษย์</p>
                  
                  <div className="bg-white/10 p-8 rounded-[2.5rem] border border-white/20 shadow-2xl">
                    <FaQuoteLeft className="mx-auto text-teal-300 opacity-50 text-3xl mb-4" />
                    <p className="text-3xl md:text-4xl font-bold text-white underline decoration-teal-400 underline-offset-8">
                      มีใจอันหาเขตแดนมิได้อยู่
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/extra/past-present-future/lesson-06" 
            className="inline-flex items-center gap-3 bg-teal-600 hover:bg-teal-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-teal-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: อาฬวกสูตรที่ 12
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}