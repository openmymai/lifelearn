// src/app/extra/suttanta-vol-9/page.tsx
import Link from 'next/link';
import { FaArrowRight, FaBookOpen, FaScroll, FaCircleCheck, FaQuoteLeft } from 'react-icons/fa6';

export default function SuttantaVol9Index() {
  // รายชื่อบทเรียนทั้ง 8 บทในหมวดพระสุตตันตปิฎก เล่มที่ 9
  const lessons = [
    { id: '01', title: 'นกุลปิตาสูตร', desc: 'กายกระสับกระส่าย แต่จิตไม่กระสับกระส่าย' },
    { id: '02', title: 'เทวทหสูตร', desc: 'การพยากรณ์ธรรมให้สมควรแก่ธรรม' },
    { id: '03', title: 'ภารสูตร', desc: 'ว่าด้วยภาระ ผู้แบกภาระ และการวางภาระ' },
    { id: '04', title: 'อุปาทิยสูตร', desc: 'เมื่อไม่ยึดมั่น จึงหลุดพ้นจากบ่วงแห่งมาร' },
    { id: '05', title: 'ปุณณมสูตร', desc: 'ปุจฉา-วิสัชนาเรื่องอุปาทานขันธ์ 5 ในคืนวันเพ็ญ' },
    { id: '06', title: 'ยมกสูตร', desc: 'การทำลายมิจฉาทิฏฐิเรื่องความขาดสูญ' },
    { id: '07', title: 'อนุราธสูตร', desc: 'การบัญญัติเพียงเรื่องทุกข์และความดับทุกข์' },
    { id: '08', title: 'สมุทยธัมมสูตรที่ ๑', desc: 'นิยามแห่งอวิชชาและวิชชาผ่านความเกิดดับ' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl mb-6 shadow-sm">
            <FaScroll size={28} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-prompt">
            พระสุตตันตปิฎก เล่มที่ 9
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            รวบรวมพระสูตรสำคัญว่าด้วยการพิจารณาขันธ์ 5 เพื่อการละทิฏฐิ การวางภาระ
            และการเข้าถึงวิชชาตามพุทธพจน์
          </p>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Lesson Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lessons.map((lesson) => (
            <Link
              key={lesson.id}
              href={`/extra/suttanta-vol-9/lesson-${lesson.id}`}
              className="group"
            >
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all flex items-center gap-5 h-full">
                <div className="flex-none w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 font-bold group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {lesson.id}
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="text-slate-400 text-sm line-clamp-1">{lesson.desc}</p>
                </div>
                <FaArrowRight className="text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>

        {/* Summary Card */}
        <div className="mt-16 bg-indigo-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
          <FaBookOpen className="absolute -right-10 -bottom-10 text-white/5 text-[15rem] rotate-12" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-grow text-center md:text-left">
              <FaQuoteLeft className="text-indigo-400 text-3xl mb-4 opacity-50" />
              <h2 className="text-2xl font-bold mb-4 text-indigo-200">หัวใจของหมวดนี้</h2>
              <p className="text-indigo-50 leading-relaxed text-lg italic">
                "ทั้งเมื่อก่อนและทั้งบัดนี้ เราย่อมบัญญัติทุกข์ และความดับทุกข์{' '}
                <br className="hidden md:block" />
                เมื่อไม่ยึดมั่นในขันธ์ ๕ จึงหลุดพ้นจากมาร"
              </p>
            </div>
            <div className="flex-none">
              <Link
                href="/extra/suttanta-vol-9/lesson-01"
                className="inline-flex items-center gap-2 bg-white text-indigo-900 px-8 py-3 rounded-full font-bold hover:bg-indigo-50 transition-colors shadow-lg"
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
