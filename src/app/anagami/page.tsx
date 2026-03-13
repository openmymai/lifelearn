// src/app/anagami/page.tsx
import Link from "next/link";
import { FaPlay, FaAward, FaScroll } from "react-icons/fa6";

export default function AnagamiIndex() {
  const lessons = [
    { id: "01", title: "วิปัสสนาภาวนา พิจารณาขันธ์ 5 อินทรีย์ 6", desc: "โลกและชีวิต ดับไม่เหลือ" },
    { id: "02", title: "การพิจารณาอินทรีย์ 6", desc: "กำหนดรู้องค์ประกอบและผลต่อเนื่อง" },
    { id: "03", title: "กำหนดรู้โลกและชีวิต", desc: "พิจารณาการกระทบสัมผัสที่ว่างจากตน" },
    { id: "04", title: "กำหนดรู้อินทรีย์ 6 ตามความเป็นจริง", desc: "ถอนสมมติชื่อเรียก สัตว์ บุคคล สิ่งของ" },
    { id: "05", title: "วิปัสสนาภาวนาขันธ์ 5 อินทรีย์ 6", desc: "พิจารณานามขันธ์ที่ดับไม่เหลือเหมือนกัน" },
    { id: "06", title: "ฝึกตามทันกายกรรม", desc: "ละความเห็นผิดและกำหนดรู้สุขถาวร" },
    { id: "07", title: "องค์ประกอบของโลกและชีวิต", desc: "กำหนดรู้ธาตุ 6 และอุปมาประทีปน้ำมัน" },
    { id: "08", title: "กำหนดรู้ส่วน 2 อย่าง", desc: "เหตุปัจจัยการเกิดวิญญาณและสัมผัส" },
    { id: "09", title: "ธรรมที่เนื่องด้วยอายตนะ 6", desc: "คุณและโทษของการรู้ตามความเป็นจริง" },
    { id: "10", title: "พิจารณาขันธ์ 5 อินทรีย์ 6", desc: "พิจารณาทั้งอดีต อนาคต ปัจจุบัน" },
    { id: "11", title: "โลกและชีวิตความรู้สึกเป็นอันเดียวกัน", desc: "พิจารณากิจวัตรประจำวันตลอดทั้งวัน" },
    { id: "12", title: "โลกและชีวิตความรู้สึกเป็นอันเดียวกัน + ชื่อ", desc: "แยกแยะสภาวะธรรมออกจากสมมติบัญญัติ" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-amber-100 rounded-2xl text-amber-600 mb-4">
            <FaAward size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 font-prompt">
            หลักสูตรอนาคามีผล
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            แนวทางการปฏิบัติระดับละเอียด เพื่อการละสังโยชน์เบื้องต่ำ 
            เห็นแจ้งในความว่างและการดับไม่เหลือของอุปาทาน
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <Link key={lesson.id} href={`/anagami/lesson-${lesson.id}`} className="group">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-4xl font-black text-amber-100 group-hover:text-amber-200 transition-colors">
                    {lesson.id}
                  </span>
                  <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaPlay size={12} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-amber-700 transition-colors">
                  {lesson.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                  {lesson.desc}
                </p>
                <div className="mt-6 pt-4 border-t border-slate-50 text-amber-600 text-xs font-bold uppercase tracking-widest">
                  เข้าสู่บทปฏิบัติ →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden shadow-2xl">
          <FaScroll className="absolute top-0 right-0 opacity-5 translate-x-1/4 -translate-y-1/4 text-[20rem]" />
          <h2 className="text-2xl md:text-3xl font-bold mb-6 relative z-10 text-amber-400">ธรรมะที่ควรทำให้แจ้ง</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto relative z-10">
            "บุคคลนั้นเมื่อมีธรรมทั้ง 2 ดังนี้ คือสมถะและวิปัสสนาคู่เคียงกันเป็นไป 
            เขาชื่อว่ากำหนดรู้ธรรมที่ควรกำหนดรู้ด้วยปัญญาอันยิ่ง"
          </p>
          <Link 
            href="/anagami/lesson-01" 
            className="inline-block bg-amber-600 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-amber-500 transition-colors relative z-10"
          >
            เริ่มบทเรียนที่ ๑
          </Link>
        </div>
      </div>
    </div>
  );
}