// src/app/extra/anicca-dukkha-anatta/page.tsx
import Link from "next/link";
import { FaArrowRight, FaLeaf, FaBookOpen, FaCircleCheck } from "react-icons/fa6";

export default function AniccaDukkhaAnattaIndex() {
  // รายชื่อบทเรียนทั้ง 15 บทที่สร้างมา
  const lessons = [
    { id: "01", title: "ความเป็นอนิจจังแห่งอายตนะภายใน", desc: "จักษุเป็นของไม่เที่ยง..." },
    { id: "02", title: "ความเป็นทุกข์แห่งอายตนะภายใน", desc: "จักษุเป็นทุกข์..." },
    { id: "03", title: "ความเป็นอนัตตาแห่งอายตนะภายใน", desc: "จักษุเป็นอนัตตา..." },
    { id: "04", title: "ความเป็นอนิจจังแห่งอายตนะภายนอก", desc: "รูปเป็นของไม่เที่ยง..." },
    { id: "05", title: "ความเป็นทุกข์แห่งอายตนะภายนอก", desc: "รูปเป็นทุกข์..." },
    { id: "06", title: "ความเป็นอนัตตาแห่งอายตนะภายนอก", desc: "รูปเป็นอนัตตา..." },
    { id: "07", title: "ความเป็นอนัตตาแห่งอายตนะภายนอก (การเคลื่อนไหว)", desc: "โลกและชีวิตกระทบสัมผัสกัน..." },
    { id: "08", title: "ทรงแสดงธรรมเพื่อความเป็นผู้อยู่ผู้เดียว", desc: "บทสนทนาธรรมระหว่างพระพุทธเจ้าและพระอานนท์" },
    { id: "09", title: "การแสดงสิ่งที่ดี และสิ่งที่ไม่ดี", desc: "มูลฐานแห่งธรรม และมิจฉัตตะ-สัมมัตตะ 10" },
    { id: "10", title: "อานิสงส์ 11 ประการ", desc: "ผลของการเจริญเมตตาเจโตวิมุติ" },
    { id: "11", title: "ราหุลสูตร", desc: "บทธรรมที่ทำให้พระราหุลบรรลุธรรม" },
    { id: "12", title: "ว่าด้วยควรเป็นผู้มีสติสัมปชัญญะ", desc: "การพิจารณาเวทนาเพื่อละอนุสัยกิเลส" },
    { id: "13", title: "ว่าด้วยเวทนา 3", desc: "เวทนาเกิดแต่ผัสสะ อุปมาไม้เสียดสีกัน" },
    { id: "14", title: "ว่าด้วยการกระทำที่สุดทุกข์", desc: "พิจารณาธาตุ 4 เพื่อรื้อถอนสังโยชน์" },
    { id: "15", title: "เหตุปัจจัยอะไรให้ปรินิพพาน", desc: "คำตอบแก่คฤหบดีเรื่องการดับไม่เหลือ" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl mb-6 shadow-sm">
            <FaLeaf size={28} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-prompt">
            ว่าด้วยความเป็นอนิจจัง ทุกขัง อนัตตา
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            การพิจารณาสภาวะธรรมผ่านไตรลักษณ์ เพื่อความเบื่อหน่าย คลายกำหนัด และความหลุดพ้นตามแนวทางอริยสาวก
          </p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Lesson Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lessons.map((lesson) => (
            <Link 
              key={lesson.id} 
              href={`/extra/anicca-dukkha-anatta/lesson-${lesson.id}`}
              className="group"
            >
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex items-center gap-5 h-full">
                <div className="flex-none w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 font-bold group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  {lesson.id}
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="text-slate-400 text-sm line-clamp-1">
                    {lesson.desc}
                  </p>
                </div>
                <FaArrowRight className="text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>

        {/* Summary Card */}
        <div className="mt-16 bg-emerald-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
          <FaBookOpen className="absolute -right-10 -bottom-10 text-white/5 text-[15rem] rotate-12" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-grow text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4 text-emerald-300">หัวใจของหมวดนี้</h2>
              <p className="text-emerald-100 leading-relaxed text-lg">
                "สิ่งใดไม่เที่ยง สิ่งนั้นเป็นทุกข์ สิ่งใดเป็นทุกข์ สิ่งนั้นเป็นอนัตตา <br className="hidden md:block" />
                เมื่อเห็นด้วยปัญญาอันชอบตามความเป็นจริง ย่อมเบื่อหน่าย ย่อมคลายกำหนัด"
              </p>
            </div>
            <div className="flex-none">
              <Link 
                href="/extra/anicca-dukkha-anatta/lesson-01"
                className="inline-flex items-center gap-2 bg-white text-emerald-900 px-8 py-3 rounded-full font-bold hover:bg-emerald-50 transition-colors shadow-lg"
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