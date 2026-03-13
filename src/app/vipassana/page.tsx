// src/app/vipassana/page.tsx
import Link from "next/link";
import { FaPlay, FaBookOpen, FaCheckCircle } from "react-icons/fa";

export default function VipassanaIndex() {
  const lessons = [
    {
      id: "01",
      title: "พิจารณาขันธ์ 5 และอินทรีย์ 6",
      description: "เริ่มต้นพิจารณาขันธ์ 5 และอินทรีย์ 6 ให้เห็นความไม่เที่ยงเกิดดับ",
      href: "/vipassana/lesson-01",
    },
    {
      id: "02",
      title: "ตามทันตัวเรา",
      description: "พิจารณาเหตุปัจจัยและการแตกสลายของร่างกายและสิ่งของรอบตัว",
      href: "/vipassana/lesson-02",
    },
    {
      id: "03",
      title: "ฝึกเห็นตามจริง",
      description: "การพิจารณาด้วยปัญญาผ่านการถาม-ตอบ และการจดจ่อต่อเนื่อง",
      href: "/vipassana/lesson-03",
    },
    {
      id: "04",
      title: "การพิจารณาอินทรีย์ 6",
      description: "กำหนดรู้องค์ประกอบและผลต่อเนื่องของผัสสะอย่างละเอียด",
      href: "/vipassana/lesson-04",
    },
    {
      id: "05",
      title: "อินทรีย์ 6 และขันธ์ 5",
      description: "พิจารณาความเชื่อมโยงของเหตุปัจจัย และการละความยึดมั่นในตัวตน",
      href: "/vipassana/lesson-05",
    },
    {
      id: "06",
      title: "ฝึกเอาความจริงไปใช้",
      description: "บทสรุปการนำปัญญาไปใช้กับทุกสัมผัสในชีวิตประจำวัน",
      href: "/vipassana/lesson-06",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dhamma-blue mb-4 font-prompt">
            บทวิปัสสนาภาวนา
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            พิจารณาขันธ์ 5 อินทรีย์ 6 และรายละเอียด
          </p>
          <div className="w-24 h-1 bg-dhamma-blue mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lessons.map((lesson) => (
            <Link key={lesson.id} href={lesson.href} className="group">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-dhamma-blue font-bold text-xl group-hover:bg-dhamma-blue group-hover:text-white transition-colors">
                  {lesson.id}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-dhamma-blue transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {lesson.description}
                  </p>
                  <span className="text-dhamma-blue text-sm font-bold flex items-center gap-2">
                    เริ่มบทเรียน <FaPlay className="text-[10px]" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 bg-blue-600 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 translate-x-1/4 -translate-y-1/4">
            <FaBookOpen size={300} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 relative z-10">พร้อมสำหรับการเริ่มต้นหรือยัง?</h2>
          <p className="text-blue-100 mb-10 max-w-xl mx-auto relative z-10">
            การปฏิบัติธรรมเริ่มต้นที่การฟังและการอ่าน แต่จะสำเร็จได้ด้วยการลงมือทำอย่างต่อเนื่อง
          </p>
          <Link 
            href="/vipassana/lesson-01" 
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold shadow-lg hover:bg-blue-50 transition-colors relative z-10"
          >
            เริ่มบทเรียนที่ ๑
          </Link>
        </div>
      </div>
    </div>
  );
}