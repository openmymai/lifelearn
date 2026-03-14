// src/app/extra/paticcasamuppada/page.tsx
import Link from 'next/link';
import { FaArrowRight, FaLink, FaBookOpen, FaCircleCheck, FaArrowsSpin } from 'react-icons/fa6';

export default function PaticcasamuppadaIndex() {
  // รายชื่อบทเรียนทั้ง 12 บทในหมวดปฏิจจสมุปบาท
  const lessons = [
    { id: '01', title: 'วิปัสสนาภาวนา (บทนำ)', desc: 'พิจารณาขันธ์ 5 และอินทรีย์ 6 เบื้องต้น' },
    { id: '02', title: 'ภิกขุวรรค', desc: 'จูฬราหุโลวาทสูตร อุปมาเรื่องน้ำและแว่นส่องหน้า' },
    { id: '03', title: 'มหาราหุโลวาทสูตร', desc: 'การจำแนกธาตุ 5 และโอวาทต่อพระราหุล' },
    {
      id: '04',
      title: 'ภาวนาเสมอด้วยธาตุ 5',
      desc: 'ฝึกจิตให้หนักแน่นไม่หวั่นไหวเสมอด้วยธาตุธรรมชาติ',
    },
    { id: '05', title: 'อานาปานสติภาวนา', desc: 'ขั้นตอนการกำหนดลมหายใจ 16 ขั้นเพื่ออานิสงส์ใหญ่' },
    { id: '06', title: 'เทศนาสูตร', desc: 'สายเกิดและสายดับแห่งกองทุกข์ทั้งมวล' },
    { id: '07', title: 'วิภังคสูตร', desc: 'การจำแนกความหมายขององค์ประกอบในปฏิจจสมุปบาท' },
    { id: '08', title: 'อาหารสูตร', desc: 'อาหาร 4 อย่างที่เป็นเหตุปัจจัยหล่อเลี้ยงหมู่สัตว์' },
    {
      id: '09',
      title: 'ติมพรุกขสูตร',
      desc: 'ธรรมสายกลางและการปฏิเสธส่วนสุดทั้งสองเรื่องสุขทุกข์',
    },
    { id: '10', title: 'ปริวีมังสนสูตร', desc: 'การสืบสาวเหตุปัจจัยเพื่อความสิ้นทุกข์โดยชอบ' },
    {
      id: '11',
      title: 'สัมมสนสูตรที่ 2',
      desc: 'อุปมาไม้อ้อ 2 กำที่ต้องอาศัยกันและกันจึงตั้งอยู่ได้',
    },
    { id: '12', title: 'อนาคตสูตรที่ 2', desc: 'การพิจารณาภัยในอนาคต 5 ประการเพื่อความไม่ประมาท' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 text-cyan-600 rounded-2xl mb-6 shadow-sm">
            <FaLink size={28} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-prompt">
            ว่าด้วยปฏิจจสมุปบาท
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            การศึกษาความเกี่ยวเนื่องกันของเหตุและปัจจัยที่ทำให้เกิดวงจรแห่งทุกข์
            และการดับอวิชชาเพื่อความหลุดพ้นอย่างสิ้นเชิง
          </p>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Lesson Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lessons.map((lesson) => (
            <Link
              key={lesson.id}
              href={`/extra/paticcasamuppada/lesson-${lesson.id}`}
              className="group"
            >
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all flex items-center gap-5 h-full">
                <div className="flex-none w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-600 font-bold group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                  {lesson.id}
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-slate-800 group-hover:text-cyan-700 transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="text-slate-400 text-sm line-clamp-1">{lesson.desc}</p>
                </div>
                <FaArrowRight className="text-slate-300 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>

        {/* Summary Card */}
        <div className="mt-16 bg-cyan-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
          <FaArrowsSpin
            className="absolute -right-10 -bottom-10 text-white/5 text-[15rem] animate-spin-slow"
            style={{ animationDuration: '20s' }}
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-grow text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4 text-cyan-300">หัวใจของหมวดนี้</h2>
              <p className="text-cyan-100 leading-relaxed text-lg">
                "เพราะสิ่งนี้มี สิ่งนี้จึงมี เพราะสิ่งนี้ดับ สิ่งนี้จึงดับ{' '}
                <br className="hidden md:block" />
                ตถาคตย่อมแสดงธรรมโดยสายกลาง ไม่เข้าไปใกล้ส่วนสุดทั้งสอง"
              </p>
            </div>
            <div className="flex-none">
              <Link
                href="/extra/paticcasamuppada/lesson-01"
                className="inline-flex items-center gap-2 bg-white text-cyan-900 px-8 py-3 rounded-full font-bold hover:bg-cyan-50 transition-colors shadow-lg"
              >
                เริ่มบทที่ 1 <FaCircleCheck />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
