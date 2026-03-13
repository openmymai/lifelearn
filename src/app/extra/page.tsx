// src/app/extra/page.tsx
import Link from "next/link";
import { 
  FaLeaf, 
  FaClock, 
  FaLink, 
  FaBookOpen, 
  FaArrowRight,
  FaQuoteLeft
} from "react-icons/fa6";

export default function ExtraIndex() {
  const categories = [
    {
      title: "ว่าด้วยความเป็นอนิจจัง ทุกขัง อนัตตา",
      description: "พิจารณาความไม่เที่ยง ความเป็นทุกข์ และความไม่ใช่ตัวตนของอายตนะและขันธ์",
      href: "/extra/anicca-dukkha-anatta",
      icon: <FaLeaf />,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
      hoverColor: "hover:border-emerald-400 hover:shadow-emerald-100"
    },
    {
      title: "ว่าด้วยอดีต ปัจจุบัน อนาคต",
      description: "การพิจารณาสภาวะธรรมที่เกิดขึ้นในกาลทั้งสาม เพื่อละความยึดมั่นในกาลเวลา",
      href: "/extra/past-present-future",
      icon: <FaClock />,
      color: "bg-teal-50 text-teal-600 border-teal-100",
      hoverColor: "hover:border-teal-400 hover:shadow-teal-100"
    },
    {
      title: "ว่าด้วยปฏิจจสมุปบาท",
      description: "ศึกษาความเกี่ยวเนื่องกันของเหตุและผลที่ทำให้เกิดวงจรแห่งทุกข์และการดับทุกข์",
      href: "/extra/paticcasamuppada",
      icon: <FaLink />,
      color: "bg-cyan-50 text-cyan-600 border-cyan-100",
      hoverColor: "hover:border-cyan-400 hover:shadow-cyan-100"
    },
    {
      title: "พระสุตตันตปิฎก เล่มที่ 9",
      description: "รวบรวมบทธรรมสำคัญจากพระไตรปิฎก",
      href: "/extra/suttanta-vol-9",
      icon: <FaBookOpen />,
      color: "bg-green-50 text-green-600 border-green-100",
      hoverColor: "hover:border-green-400 hover:shadow-green-100"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 text-emerald-600 rounded-3xl mb-6 shadow-inner">
            <FaLeaf size={36} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 font-prompt">
            บทวิปัสสนาภาวนาเพิ่มเติม
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            รวบรวมบทพิจารณาธรรมในแง่มุมต่างๆ เพื่อเสริมสร้างปัญญาและความเห็นแจ้ง 
            น้อมนำไปสู่ความปล่อยวางและความสงบเย็นอย่างยิ่ง
          </p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, index) => (
            <Link key={index} href={cat.href} className="group">
              <div className={`h-full bg-white p-8 md:p-10 rounded-[2.5rem] border-2 ${cat.color} ${cat.hoverColor} shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col`}>
                <div className={`w-16 h-16 ${cat.color} rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                  {cat.icon}
                </div>
                
                <h2 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-emerald-700 transition-colors">
                  {cat.title}
                </h2>
                
                <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
                  {cat.description}
                </p>
                
                <div className="flex items-center text-emerald-600 font-bold uppercase tracking-widest text-sm">
                  เลือกหัวข้อบทเรียน
                  <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Quote Section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="bg-emerald-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden shadow-2xl">
            {/* ตกแต่งพื้นหลัง */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <FaLeaf className="absolute -top-10 -right-10 text-[15rem] rotate-12" />
            </div>

            <div className="relative z-10">
              <FaQuoteLeft className="mx-auto text-emerald-400 text-4xl mb-8 opacity-50" />
              <p className="text-2xl md:text-3xl font-light italic leading-relaxed mb-10">
                "ความคิดไม่เที่ยงเกิดดับ <br className="hidden md:block" />
                ตัวฉันไม่เที่ยงเกิดดับ"
              </p>
              <div className="w-16 h-0.5 bg-emerald-500 mx-auto mb-6"></div>
              <p className="text-emerald-300 uppercase tracking-widest text-sm font-bold">
                ฝึกที่ความคิดคุมทั้ง 9 ทวาร
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}