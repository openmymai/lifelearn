import Hero from "@/components/home/Hero";
import Link from "next/link";
import { FaPray, FaGraduationCap, FaBookOpen, FaSun } from "react-icons/fa";

export default function Home() {
  // ข้อมูลหมวดหมู่หลัก 4 ส่วน
  const categories = [
    {
      title: "บทวิปัสสนาภาวนา",
      description: "พิจารณาขันธ์ 5 อินทรีย์ 6 และธาตุ 4 เพื่อเห็นความจริงของกายและใจ",
      href: "/vipassana",
      icon: <FaPray className="text-3xl" />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "หลักสูตรอนาคามีผล",
      description: "แนวทางการปฏิบัติระดับสูง เพื่อการละสังโยชน์และเข้าถึงธรรมอันละเอียด",
      href: "/anagami",
      icon: <FaGraduationCap className="text-3xl" />,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "บทวิปัสสนาเพิ่มเติม",
      description: "รวบรวมบทปฏิบัติเสริม อานาปานสติ และกายคตาสติ เพื่อเสริมสร้างสมาธิ",
      href: "/extra",
      icon: <FaBookOpen className="text-3xl" />,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "บทนำไปใช้ในชีวิตประจำวัน",
      description: "การประยุกต์ธรรมะเข้ากับหน้าที่การงานและการใช้ชีวิตอย่างมีสติ",
      href: "/daily-life",
      icon: <FaSun className="text-3xl" />,
      color: "bg-rose-50 text-rose-600",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Main Categories Section */}
      <section id="primary" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-prompt">
              เส้นทางการปฏิบัติธรรม
            </h2>
            <div className="w-16 h-1 bg-dhamma-blue mx-auto mb-6 rounded-full"></div>
            <p className="text-slate-600 text-lg">
              เลือกศึกษาและปฏิบัติธรรมตามลำดับขั้นตอน
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((item, index) => (
              <Link 
                key={index} 
                href={item.href}
                className="group p-8 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-dhamma-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {item.description}
                </p>
                <div className="mt-6 flex items-center text-dhamma-blue font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  เข้าสู่บทเรียน
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Quote Section (Optional) */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-6xl text-blue-200 font-serif">“</span>
            <p className="text-2xl md:text-3xl text-slate-700 italic font-light leading-relaxed -mt-8 mb-6">
              ความคิด โลกและชีวิต เกิดขึ้น ตั้งอยู่ ดับไป ไม่เที่ยงเกิดดับ
            </p>
            <div className="w-12 h-0.5 bg-slate-300 mx-auto mb-6"></div>
            <p className="text-slate-500 uppercase tracking-widest text-sm font-medium">
              ดับไม่เหลือเหมือนกัน
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}