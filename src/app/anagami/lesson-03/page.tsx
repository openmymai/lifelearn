// src/app/anagami/lesson-03/page.tsx
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
  FaCircle
} from "react-icons/fa6";

export default function AnagamiLesson03() {
  const introspectionData = [
    {
      action: "ตาเห็นรูป",
      object: "รูป",
      paliBase: "จักขุ",
      vijnana: "จักขุวิญญาณ",
      samphassa: "จักขุสัมผัส",
      icon: <FaEye />,
      color: "text-amber-600"
    },
    {
      action: "หูได้ยินเสียง",
      object: "เสียง",
      paliBase: "โสตะ",
      vijnana: "โสตะวิญญาณ",
      samphassa: "โสตะสัมผัส",
      icon: <FaEarListen />,
      color: "text-amber-600"
    },
    {
      action: "จมูกได้กลิ่น",
      object: "กลิ่น",
      paliBase: "ฆานะ",
      vijnana: "ฆานวิญญาณ",
      samphassa: "ฆานสัมผัส",
      icon: <FaWind />,
      color: "text-amber-600"
    },
    {
      action: "ลิ้นได้รส",
      object: "รส",
      paliBase: "ชิวหา",
      vijnana: "ชิวหาวิญญาณ",
      samphassa: "ชิวหาสัมผัส",
      icon: <FaUtensils />,
      color: "text-amber-600"
    },
    {
      action: "กายสัมผัส",
      object: "โผฏฐัพพะ",
      paliBase: "กาย",
      vijnana: "กายวิญญาณ",
      samphassa: "กายสัมผัส",
      icon: <FaHandPointer />,
      color: "text-amber-600"
    },
    {
      action: "ใจคิดนึก",
      object: "ธรรมารมณ์",
      paliBase: "มโน",
      vijnana: "มโนวิญญาณ",
      samphassa: "มโนสัมผัส",
      icon: <FaBrain />,
      color: "text-amber-600"
    },
  ];

  const emptyRefrain = "ว่างเปล่าจากตนหรือจากของๆ ตน";
  const natureRefrain = "เพราะทั้งหมดเป็นธรรมชาติชนิดหนึ่ง เกิดจากเหตุปัจจัย มาประชุมปรุงแต่งกันชั่วคราว แล้วแตกสลาย ไม่มีตัวตนเป็นของตนเอง";

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">หลักสูตรอนาคามีผล</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">กำหนดรู้โลกและชีวิต</h2>
          <p className="text-slate-500 text-lg">กำหนดรู้โลกและชีวิต</p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* รายการพิจารณาแยกตามอินทรีย์ */}
        <div className="space-y-12">
          {introspectionData.map((item, i) => (
            <IntrospectionCard key={i}>
              {/* หัวข้ออายตนะ */}
              <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-5">
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center shadow-sm text-xl">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800">{item.action}</h3>
              </div>

              <div className="space-y-6 text-xl leading-relaxed">
                {/* บรรทัดแรก: สภาวะไม่เที่ยง */}
                <p className="font-bold text-amber-800 text-2xl mb-6">
                  {item.action} {item.object !== "โผฏฐัพพะ" && item.object !== "ธรรมารมณ์" ? item.object : ""}ไม่เที่ยงเกิดดับ
                </p>

                {/* รายการความว่างเปล่า */}
                <div className="grid gap-3 bg-amber-50/30 p-6 rounded-2xl border border-amber-100">
                  {[item.paliBase, item.object, item.vijnana, item.samphassa].map((text, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <FaCircle className="text-[6px] text-amber-400" />
                      <p className="text-slate-700">
                        <span className="font-semibold">{text}</span> {emptyRefrain}
                      </p>
                    </div>
                  ))}
                  <div className="flex items-start gap-3 pt-2">
                    <FaCircle className="text-[6px] text-amber-400 mt-3" />
                    <p className="text-slate-700">
                      ทุกข์สุข ไม่ทุกข์ไม่สุข ที่เกิดจาก<span className="font-semibold">{item.samphassa}</span> เป็นปัจจัยก็{emptyRefrain}
                    </p>
                  </div>
                </div>

                {/* บทพิจารณาเหตุปัจจัย */}
                <p className="text-slate-600 italic py-4">
                  {natureRefrain}
                </p>

                {/* บทสรุปความว่างของโลก */}
                <div className="bg-amber-600 text-white p-8 rounded-2xl shadow-lg shadow-amber-200">
                  <p className="text-xl md:text-2xl font-medium text-center leading-relaxed">
                    ดังนั้นโลกนี้จึงว่างเปล่า จากตนหรือจากของๆ ตน <br />
                    <span className="block mt-4 text-amber-100 text-lg md:text-xl">
                      ไม่มีวัตถุ สิ่งของ สัตว์ บุคคล ที่จะไปยึดมั่นถือมั่น ว่านั่นเป็นของเรา เป็นเรา เป็นตัวตนของเรา ไม่เที่ยงเกิดดับ <span className="text-white font-bold underline decoration-2 underline-offset-4">ดับไม่เหลือ</span>
                    </span>
                  </p>
                </div>
              </div>
            </IntrospectionCard>
          ))}
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/anagami/lesson-04" 
            className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-amber-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: กำหนดรู้อินทรีย์ 6 ตามจริง
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}