// src/app/extra/anicca-dukkha-anatta/lesson-14/page.tsx
import IntrospectionCard from "@/components/ui/IntrospectionCard";
import Link from "next/link";
import { 
  FaArrowRight, 
  FaMountain, 
  FaDroplet, 
  FaFireBurner, 
  FaWind, 
  FaQuoteLeft,
  FaCheckDouble,
  FaHandsPraying
} from "react-icons/fa6";

export default function ExtraLesson14() {
  const elementsData = [
    {
      name: "ปฐวีธาตุ (ธาตุดิน)",
      icon: <FaMountain />,
      color: "text-amber-800 bg-amber-50",
      borderColor: "border-amber-200"
    },
    {
      name: "อาโปธาตุ (ธาตุน้ำ)",
      icon: <FaDroplet />,
      color: "text-blue-600 bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      name: "เตโชธาตุ (ธาตุไฟ)",
      icon: <FaFireBurner />,
      color: "text-orange-600 bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      name: "วาโยธาตุ (ธาตุลม)",
      icon: <FaWind />,
      color: "text-slate-500 bg-slate-50",
      borderColor: "border-slate-200"
    },
  ];

  // บทพิจารณาหัวใจสำคัญ (คงเนื้อหาเดิมทุกตัวอักษร)
  const insightRefrain = (
    <div className="bg-emerald-50/50 p-6 rounded-2xl border-l-4 border-emerald-500 my-6 shadow-inner">
      <p className="text-2xl md:text-3xl text-emerald-800 font-bold text-center leading-relaxed">
        นั่นไม่ใช่ของเรา นั่นไม่เป็นเรา <br className="md:hidden" /> นั่นไม่ใช่ตัวตนของเรา
      </p>
    </div>
  );

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">วิปัสสนาภาวนาเพิ่มเติม</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">ว่าด้วยการกระทำที่สุดทุกข์</h2>
          <p className="text-slate-500 text-lg italic">พระพุทธเจ้าตรัสกะท่านพระราหุล</p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* บทนำ */}
        <div className="mb-12 flex items-center justify-center gap-3 text-emerald-700">
          <FaHandsPraying />
          <p className="text-xl font-medium">พระพุทธเจ้าตรัสกะท่านพระราหุลว่า</p>
        </div>

        {/* รายการพิจารณาธาตุ 4 */}
        <div className="space-y-10">
          {elementsData.map((el, i) => (
            <IntrospectionCard key={i}>
              <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-5">
                <div className={`w-12 h-12 ${el.color} rounded-2xl flex items-center justify-center shadow-sm text-xl border ${el.borderColor}`}>
                  {el.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800">{el.name}</h3>
              </div>

              <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-slate-700">
                <p>{el.name.split(' ')[0]}ที่เป็นภายในก็ดี เป็นภายนอกก็ดี</p>
                <p>{el.name.split(' ')[0]}นั้นก็เป็น แต่สักว่า{el.name.split(' ')[0]}เท่านั้น</p>
                <p className="text-slate-500 italic text-lg">พึงเห็น{el.name.split(' ')[0]}นั้นด้วยปัญญาอันชอบ ตามความเป็นจริงอย่างนี้ว่า</p>
                
                {insightRefrain}

                <div className="pt-4 space-y-2">
                  <p>เพราะเห็นด้วยปัญญา อันชอบตามความเป็นจริงอย่างนั้น</p>
                  <p className="font-bold text-emerald-700">จิตย่อมเบื่อหน่ายใน{el.name.split(' ')[0]}</p>
                  <p className="font-bold text-emerald-700">ย่อมคลายกำหนัดใน{el.name.split(' ')[0]}</p>
                </div>
              </div>
            </IntrospectionCard>
          ))}
        </div>

        {/* ส่วนสรุป: การบรรลุที่สุดแห่งทุกข์ */}
        <div className="mt-16">
          <IntrospectionCard highlight={true}>
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaQuoteLeft className="text-emerald-200 text-4xl opacity-50" />
              
              <div className="space-y-6 text-2xl md:text-3xl font-medium leading-relaxed text-white">
                <p>เพราะเหตุที่พิจารณาเห็นว่า<br />ไม่ใช่ตัวตนไม่เนื่องในตนในธาตุ 4 นี้</p>
              </div>

              <div className="bg-white/10 p-8 rounded-3xl border border-white/20 w-full space-y-6">
                <div className="flex items-center justify-center gap-3 text-emerald-100 text-xl">
                  <FaCheckDouble />
                  <p>พระพุทธเจ้ากล่าวว่าตัดตัณหาได้แล้ว</p>
                </div>
                <div className="flex items-center justify-center gap-3 text-emerald-100 text-xl">
                  <FaCheckDouble />
                  <p>รื้อถอนสังโยชน์เสียได้</p>
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white underline decoration-amber-400 underline-offset-8">
                  การกระทำที่สุดแห่งทุกข์ได้แล้ว
                </p>
                <p className="text-xl text-emerald-200 font-light italic">เพราะละมานะได้โดยชอบ</p>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/extra/anicca-dukkha-anatta/lesson-15" 
            className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-emerald-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}