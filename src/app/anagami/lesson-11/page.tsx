// src/app/anagami/lesson-11/page.tsx
import IntrospectionCard from "@/components/ui/IntrospectionCard";
import Link from "next/link";
import { 
  FaArrowRight, 
  FaSun, 
  FaBriefcase, 
  FaHouseUser, 
  FaMoon, 
  FaPersonWalking,
  FaQuoteRight
} from "react-icons/fa6";

export default function AnagamiLesson11() {
  // จัดกลุ่มกิจกรรมเพื่อให้อ่านง่ายขึ้น
  const groups = [
    {
      title: "การเคลื่อนไหวพื้นฐาน",
      icon: <FaPersonWalking />,
      items: ["ความคิด", "เท้าเดิน", "มือจับ", "เหลียวซ้าย", "เหลียวขวา", "ก้มหน้า", "เงยหน้า", "ยืน", "เดิน", "นั่ง", "นอน"]
    },
    {
      title: "กิจวัตรยามเช้า",
      icon: <FaSun />,
      items: ["ตื่นนอน", "ลืมตา", "ที่นอน", "ผ้าห่ม", "ล้างหน้า", "แปรงฟัน", "อาบน้ำ", "ใส่เสื้อ", "ใส่กางเกง", "หวีผม", "แต่งหน้า"]
    },
    {
      title: "การรับประทานและการทำงาน",
      icon: <FaBriefcase />,
      items: ["ไปทานข้าว", "จาน", "ช้อน", "ข้าว", "กับข้าว", "ดื่มน้ำ", "ดื่มกาแฟ", "ไปทำงาน", "ขับรถ", "ที่ทำงาน", "เพื่อนร่วมงาน", "นั่งเก้าอี้", "จับปากกา", "เขียนหนังสือ", "เข้าห้องน้ำ", "เลิกงาน"]
    },
    {
      title: "กิจวัตรยามเย็นและงานบ้าน",
      icon: <FaHouseUser />,
      items: ["กลับบ้าน", "ซื้อของ", "เข้าบ้าน", "ให้อาหารสัตว์", "รดน้ำต้นไม้", "กวาดบ้าน", "ถูพื้น", "ซักผ้า", "ไม้แขวนเสื้อ", "ตากผ้า", "กินข้าวเย็น", "อาบน้ำ"]
    },
    {
      title: "การพักผ่อนและเข้านอน",
      icon: <FaMoon />,
      items: ["เปิดพัดลม", "เปิดแอร์", "ดูทีวี", "ฟังเพลง", "โทรศัพท์", "ปิดไฟ", "เข้านอน", "การเคลื่อนไหว"]
    }
  ];

  const refrain = "โลกและชีวิตความรู้สึก เป็นธรรมชาติชนิดหนึ่ง ไม่เที่ยงเกิดดับ";

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">หลักสูตรอนาคามีผล</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">โลกและชีวิตความรู้สึกเป็นอันเดียวกัน</h2>
          <p className="text-slate-500 text-lg">พิจารณาทุกกิจกรรมในชีวิตประจำวันให้เห็นความเกิดดับ</p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* รายการพิจารณาแยกตามกลุ่มกิจกรรม */}
        <div className="space-y-12 relative">
          {/* เส้น Timeline แนวตั้ง (แสดงเฉพาะหน้าจอใหญ่) */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-amber-100 hidden md:block"></div>

          {groups.map((group, gIdx) => (
            <div key={gIdx} className="relative">
              {/* หัวข้อกลุ่มพร้อมไอคอน */}
              <div className="flex items-center gap-4 mb-6 md:ml-2 relative z-10">
                <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center shadow-lg text-xl border-4 border-white">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-amber-800 bg-amber-50 px-4 py-1 rounded-full border border-amber-100">
                  {group.title}
                </h3>
              </div>

              <div className="grid gap-4 md:ml-14">
                {group.items.map((item, i) => (
                  <div 
                    key={i} 
                    className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-amber-300 transition-colors group"
                  >
                    <p className="text-xl md:text-2xl leading-relaxed">
                      <span className="font-bold text-slate-800 group-hover:text-amber-700 transition-colors">
                        {item}
                      </span>
                      <span className="mx-3 text-slate-300">|</span>
                      <span className="text-slate-600 font-light italic">
                        {refrain}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ส่วนสรุปท้ายบท */}
        <div className="mt-20">
          <IntrospectionCard highlight={true}>
            <div className="flex flex-col items-center text-center space-y-6 py-4">
              <FaQuoteRight className="text-amber-200 text-4xl opacity-50" />
              <p className="text-2xl md:text-3xl font-medium leading-relaxed">
                นี่คือผลต่อเนื่องของโลกและชีวิต <br />
                <span className="text-amber-200 font-bold">กำหนดรู้ว่าทั้งหมดเป็นธรรมชาติชนิดหนึ่ง</span> <br />
                <span className="underline decoration-2 underline-offset-8">ไม่เที่ยงเกิดดับ</span>
              </p>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/anagami/lesson-12" 
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