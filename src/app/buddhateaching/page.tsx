// src/app/buddhateaching/page.tsx
import Link from 'next/link';
import {
  FaArrowRight,
  FaBookOpen,
  FaDharmachakra,
  FaCircleCheck,
  FaQuoteLeft,
} from 'react-icons/fa6';

export default function BuddhaTeachingIndex() {
  // รายชื่อบทเรียนทั้ง 13 บท
  const lessons = [
    {
      id: '01',
      title: 'ปฏิบัติธรรมด้วยความไม่ประมาท',
      desc: 'หนีทุกข์ไปหาสุขถาวรด้วยทางที่ถูกต้อง',
    },
    {
      id: '02',
      title: 'วิธีเจริญหรือสร้างปัญญา',
      desc: 'เทคนิคการใช้ปัญญากั้นกระแสอวิชชาตรงผัสสะ',
    },
    { id: '03', title: 'ปฏิบัติธรรมอย่างไรจึงจะถูกทาง?', desc: 'แยกแยะเหตุและผลของการตรัสรู้' },
    { id: '04', title: 'ดับทุกข์หรือหลบทุกข์?', desc: 'ระวังขยะสุขตกค้างที่ทับถมใจ' },
    {
      id: '05',
      title: 'ความพอดีของคนเราอยู่ตรงไหน?',
      desc: 'ทางสายกลางและการรู้เท่าทันอินทรีย์ 6',
    },
    { id: '06', title: 'การเจริญสติปัญญาที่ถูกต้อง', desc: 'นิยามของสติและปัญญาตามหลักพุทธพจน์' },
    {
      id: '07',
      title: 'การรู้เท่าทันความพอใจไม่พอใจ',
      desc: 'ดับรากเหง้าอวิชชาด้วยความจริงของโลก',
    },
    { id: '08', title: 'ไตรสิกขาที่ถูกต้อง', desc: 'อธิศีล อธิจิต อธิปัญญา สำหรับผู้ปฏิบัติ' },
    { id: '09', title: 'วิธีการวิปัสสนาแบบง่ายๆ', desc: 'สูตรคูณทางธรรมที่ใช้ได้ในชีวิตประจำวัน' },
    {
      id: '10',
      title: 'ความคิดเห็นของคนเราคืออะไร?',
      desc: 'กลไกฮาร์ดดิสก์ของใจและแรงผลักดันของกรรม',
    },
    {
      id: '11',
      title: 'วิปัสสนาสร้างสุขถาวรได้อย่างไร?',
      desc: 'เปลี่ยนข้อมูลในใจจากความหลงเป็นปัญญา',
    },
    {
      id: '12',
      title: 'เราจะให้รางวัลชีวิตได้อย่างไร?',
      desc: 'การดูแลเพื่อนตาย (ร่างกาย) ด้วยการลดกิเลส',
    },
    { id: '13', title: 'รู้จริง รู้แจ้ง อริยสัจ 4', desc: 'บทสรุปการเข้าถึงความจริงอันประเสริฐ' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl mb-6 shadow-sm">
            <FaBookOpen size={28} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-prompt">
            พระธรรมคำสอน
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            รวบรวมหลักการและแนวทางปฏิบัติที่สรุปจากพระไตรปิฎก
            เพื่อวางรากฐานปัญญาให้ถูกต้องตามพุทธพจน์
          </p>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Lesson Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lessons.map((lesson) => (
            <Link key={lesson.id} href={`/buddhateaching/life-${lesson.id}`} className="group">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all flex items-center gap-5 h-full">
                <div className="flex-none w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 font-bold group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {lesson.id}
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-slate-800 group-hover:text-indigo-700 transition-colors leading-tight">
                    {lesson.title}
                  </h3>
                  <p className="text-slate-400 text-sm line-clamp-1 mt-1">{lesson.desc}</p>
                </div>
                <FaArrowRight className="text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>

        {/* Summary Card */}
        <div className="mt-16 bg-indigo-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
          <FaDharmachakra
            className="absolute -right-10 -bottom-10 text-white/5 text-[15rem] animate-spin-slow"
            style={{ animationDuration: '20s' }}
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-grow text-center md:text-left">
              <FaQuoteLeft className="text-indigo-400 text-3xl mb-4 opacity-50" />
              <h2 className="text-2xl font-bold mb-4 text-indigo-200">หัวใจของหมวดนี้</h2>
              <p className="text-indigo-50 leading-relaxed text-lg italic">
                "ทุกข์เกิดที่ไหน ให้ดับที่นั่น <br className="hidden md:block" />
                ดับความเชื่อด้วยความจริง ดับอวิชชาด้วยปัญญา"
              </p>
            </div>
            <div className="flex-none">
              <Link
                href="/buddhateaching/life-01"
                className="inline-flex items-center gap-2 bg-white text-indigo-900 px-8 py-3 rounded-full font-bold hover:bg-indigo-50 transition-colors shadow-lg"
              >
                เริ่มศึกษาบทที่ 1 <FaCircleCheck />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
