// src/app/anagami/lesson-02/page.tsx
import IntrospectionCard from "@/components/ui/IntrospectionCard";
import Link from "next/link";
import { 
  FaEye, 
  FaEarListen, 
  FaWind, 
  FaUtensils, 
  FaHandPointer, 
  FaBrain, 
  FaArrowRight,
  FaQuoteLeft
} from "react-icons/fa6";

export default function AnagamiLesson02() {
  const introspectionData = [
    {
      action: "ตาเห็นรูป",
      object: "รูป",
      paliBase: "จักขุ",
      vijnana: "จักขุวิญญาณ",
      samphassa: "จักขุสัมผัส",
      extraObject: "รูป",
      icon: <FaEye className="text-lg" />,
      color: "bg-amber-50 text-amber-600"
    },
    {
      action: "หูได้ยินเสียง",
      object: "เสียง",
      paliBase: "โสตะ",
      vijnana: "โสตะวิญญาณ",
      samphassa: "โสตะสัมผัส",
      extraObject: "เสียง",
      icon: <FaEarListen className="text-lg" />,
      color: "bg-amber-50 text-amber-600"
    },
    {
      action: "จมูกได้กลิ่น",
      object: "กลิ่น",
      paliBase: "ฆานะ",
      vijnana: "ฆานะวิญญาณ",
      samphassa: "ฆานะสัมผัส",
      extraObject: "กลิ่น",
      icon: <FaWind className="text-lg" />,
      color: "bg-amber-50 text-amber-600"
    },
    {
      action: "ลิ้นได้รส",
      object: "รส",
      paliBase: "ชิวหา",
      vijnana: "ชิวหาวิญญาณ",
      samphassa: "ชิวหาสัมผัส",
      extraObject: "รส",
      icon: <FaUtensils className="text-lg" />,
      color: "bg-amber-50 text-amber-600"
    },
    {
      action: "กายสัมผัส",
      object: "สัมผัส",
      paliBase: "กาย",
      vijnana: "กายวิญญาณ",
      samphassa: "กายสัมผัส",
      extraObject: "โผฏฐัพพะ",
      icon: <FaHandPointer className="text-lg" />,
      color: "bg-amber-50 text-amber-600"
    },
    {
      action: "ใจคิดนึก",
      object: "ความคิด",
      paliBase: "มโน",
      vijnana: "มโนวิญญาณ",
      samphassa: "มโนสัมผัส",
      extraObject: "ธรรมารมณ์",
      icon: <FaBrain className="text-lg" />,
      color: "bg-amber-50 text-amber-600"
    },
  ];

  const natureRefrain = "โลกและชีวิตเป็นธรรมชาติชนิดหนึ่ง ไม่เที่ยงเกิดดับ";
  const causeRefrain = "เกิดจากเหตุปัจจัย มาประชุมปรุงแต่งชั่วคราว แล้วแตกสลาย ไม่มีตัวตนเป็นของตนเอง ไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้น เป็นของเรา เป็นเรา เป็นตัวตนของเรา ไม่เที่ยงเกิดดับ";

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">หลักสูตรอนาคามีผล</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">วิปัสสนาภาวนา</h2>
          <p className="text-slate-500 text-lg">พิจารณาอินทรีย์ 6</p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* รายการพิจารณาแยกตามอินทรีย์ */}
        <div className="space-y-10">
          {introspectionData.map((item, i) => (
            <IntrospectionCard key={i}>
              {/* หัวข้อพร้อมไอคอน */}
              <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-5">
                <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center shadow-sm`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">{item.action}</h3>
                  <p className="text-sm text-amber-600/60 uppercase tracking-wider font-medium">{item.paliBase}</p>
                </div>
              </div>

              <div className="space-y-6 text-xl leading-relaxed">
                {/* ส่วนที่ 1: สภาวะไม่เที่ยง */}
                <p className="font-bold text-amber-800">
                  {item.action} {item.object}ไม่เที่ยงเกิดดับ {item.paliBase}ไม่เที่ยงเกิดดับ {item.extraObject}ไม่เที่ยงเกิดดับ
                </p>
                
                <p className="text-slate-600">
                  {item.vijnana}ไม่เที่ยงเกิดดับ {item.samphassa}ไม่เที่ยงเกิดดับ
                </p>

                {/* ส่วนที่ 2: การกำหนดรู้ (Action Point) - เน้นด้วยสีทอง */}
                <div className="bg-amber-50/50 p-6 rounded-2xl border-l-4 border-amber-500 shadow-inner">
                  <p className="text-amber-700 font-bold mb-4">
                    กำหนดรู้องค์ประกอบของ{item.action} {natureRefrain}
                  </p>
                  <p className="text-slate-700">
                    ทุกข์สุข ไม่ทุกข์ไม่สุข ที่เกิดจาก{item.samphassa}เป็นปัจจัย คือผลต่อเนื่องของ {natureRefrain}
                  </p>
                </div>

                {/* ส่วนที่ 3: บทสรุปเหตุปัจจัย */}
                <p className="text-slate-500 italic text-lg">
                  {causeRefrain}
                </p>

                {/* ส่วนที่ 4: การกำหนดรู้ผลต่อเนื่อง */}
                <p className="text-amber-700 font-bold text-center pt-6 border-t border-slate-100">
                  กำหนดรู้ผลต่อเนื่องของ{item.action} {natureRefrain}
                </p>
              </div>
            </IntrospectionCard>
          ))}
        </div>

        {/* ส่วนสรุปท้ายบท */}
        <div className="mt-12">
          <IntrospectionCard highlight={true}>
            <div className="flex flex-col items-center text-center space-y-6">
              <FaQuoteLeft className="text-amber-200 text-4xl opacity-50" />
              <p className="text-2xl md:text-3xl font-medium leading-relaxed text-white">
                ทุกสิ่งทุกอย่างที่มากระทบสัมผัส <br />
                มีองค์ประกอบและผลต่อเนื่องเหมือนกัน <br />
                มันเป็นธรรมชาติชนิดหนึ่ง ไม่เที่ยงเกิดดับ
              </p>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/anagami/lesson-03" 
            className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-amber-200 hover:-translate-y-1"
          >
            กำหนดรู้โลกและชีวิตว่างจากตน
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}