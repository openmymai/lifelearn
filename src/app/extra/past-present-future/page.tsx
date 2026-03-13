// src/app/extra/past-present-future/page.tsx
import Link from "next/link";
import { FaArrowRight, FaClockRotateLeft, FaHourglassHalf, FaCircleCheck } from "react-icons/fa6";

export default function PastPresentFutureIndex() {
  // รายชื่อบทเรียนทั้ง 10 บทในหมวดอดีต ปัจจุบัน อนาคต
  const lessons = [
    { id: "01", title: "วิปัสสนาภาวนา (บทนำ)", desc: "พิจารณาขันธ์ 5 และอินทรีย์ 6 เบื้องต้น" },
    { id: "02", title: "อดีต อนาคต ปัจจุบัน อนิจจสูตร", desc: "ความเป็นไตรลักษณ์แห่งอายตนะภายในทั้งสามกาล" },
    { id: "03", title: "พาหิรอนิจจาสูตร", desc: "ความเป็นไตรลักษณ์แห่งอายตนะภายนอกทั้งสามกาล" },
    { id: "04", title: "สัมโพธสูตรที่ 1", desc: "พิจารณาคุณ โทษ และความสลัดออกก่อนการตรัสรู้" },
    { id: "05", title: "โนอัสสาสูตรที่ 2", desc: "เหตุแห่งความกำหนัดและการหลุดพ้นจากโลก" },
    { id: "06", "title": "อาฬวกสูตรที่ 12", desc: "บทสนทนาว่าด้วยทรัพย์และชีวิตที่ประเสริฐสุด" },
    { id: "07", title: "ขัตติยาธิปปายสูตร", desc: "ความประสงค์และเป้าหมายสูงสุดของคน 6 จำพวก" },
    { id: "08", title: "อาพาธสูตร", desc: "การเจริญสัญญา 10 ประการเพื่อระงับโรคภัย" },
    { id: "09", title: "ยมกวรรคที่ 2", desc: "อาหารของอวิชชาและอาหารของวิชชาวิมุตติ" },
    { id: "10", title: "ฐานสูตร", desc: "ฐานะ 5 ประการที่ควรพิจารณาเนืองๆ เพื่อละความมัวเมา" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 text-teal-600 rounded-2xl mb-6 shadow-sm">
            <FaClockRotateLeft size={28} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-prompt">
            ว่าด้วยอดีต ปัจจุบัน อนาคต
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            การพิจารณาสภาวะธรรมที่ปรากฏในกาลทั้งสาม เพื่อถอนความเยื่อใยในอดีต 
            ละความเพลิดเพลินในอนาคต และดับอุปาทานในปัจจุบัน
          </p>
          <div className="w-24 h-1 bg-teal-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Lesson Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lessons.map((lesson) => (
            <Link 
              key={lesson.id} 
              href={`/extra/past-present-future/lesson-${lesson.id}`}
              className="group"
            >
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-teal-300 transition-all flex items-center gap-5 h-full">
                <div className="flex-none w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 font-bold group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  {lesson.id}
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-slate-800 group-hover:text-teal-700 transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="text-slate-400 text-sm line-clamp-1">
                    {lesson.desc}
                  </p>
                </div>
                <FaArrowRight className="text-slate-300 group-hover:text-teal-500 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>

        {/* Summary Card */}
        <div className="mt-16 bg-teal-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
          <FaHourglassHalf className="absolute -right-10 -bottom-10 text-white/5 text-[15rem] rotate-12" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-grow text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4 text-teal-300">ไม่เที่ยงเกิดดับ</h2>
              <p className="text-teal-100 leading-relaxed text-lg">
                "ความคิดไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ <br className="hidden md:block" />
                พระอรหันต์บรรลุมรรค ผล นิพพานอย่างนี้"
              </p>
            </div>
            <div className="flex-none">
              <Link 
                href="/extra/past-present-future/lesson-01"
                className="inline-flex items-center gap-2 bg-white text-teal-900 px-8 py-3 rounded-full font-bold hover:bg-teal-50 transition-colors shadow-lg"
              >
                เริ่มบทที่ ๑ <FaCircleCheck />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}