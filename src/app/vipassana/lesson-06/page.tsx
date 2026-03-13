// src/app/vipassana/lesson-06/page.tsx
import IntrospectionCard from "@/components/ui/IntrospectionCard";
import Link from "next/link";
import { 
  FaArrowRight, FaEye, FaEarListen, FaWind, FaUtensils, 
  FaHandPointer, FaBrain, FaCircleQuestion, FaQuoteLeft 
} from "react-icons/fa6";

export default function Lesson0106() {
  // 1. ข้อมูลการฝึกพิจารณาสิ่งรอบตัว
  const practiceItems = [
    { 
      organ: "ตา", action: "ตาเห็นรูป", object: "รูป", example: "พัดลม", 
      detail: "รูปทุกรูปที่มาปรากฏทางตา", icon: <FaEye />, color: "text-blue-600" 
    },
    { 
      organ: "หู", action: "หูได้ยินเสียง", object: "เสียง", example: "เสียงกลอง", 
      detail: "เสียงทุกเสียงที่มาปรากฏทางหู", icon: <FaEarListen />, color: "text-emerald-600" 
    },
    { 
      organ: "จมูก", action: "จมูกได้กลิ่น", object: "กลิ่น", example: "กลิ่นผัดกะเพรา", 
      detail: "กลิ่นทุกกลิ่นที่มาปรากฏทางจมูก", icon: <FaWind />, color: "text-orange-600" 
    },
    { 
      organ: "ลิ้น", action: "ลิ้นได้รส", object: "รส", example: "รสไอติม", 
      detail: "รสทุกรสที่มาปรากฏทางลิ้น", icon: <FaUtensils />, color: "text-rose-600" 
    },
  ];

  // 2. ข้อมูลบทสรุปอินทรีย์ 6 (ส่วนที่เพิ่มใหม่ต่อท้าย)
  const finalSenses = [
    { action: "ตาเห็นรูป", object: "รูป", icon: <FaEye />, color: "text-blue-600" },
    { action: "หูได้ยินเสียง", object: "เสียง", icon: <FaEarListen />, color: "text-emerald-600" },
    { action: "จมูกได้กลิ่น", object: "กลิ่น", icon: <FaWind />, color: "text-orange-600" },
    { action: "ลิ้นได้รส", object: "รส", icon: <FaUtensils />, color: "text-rose-600" },
    { action: "กายสัมผัส", object: "สัมผัส", icon: <FaHandPointer />, color: "text-indigo-600" },
    { action: "ใจคิดนึก", object: "ความคิด", icon: <FaBrain />, color: "text-purple-600" },
  ];

  const causeRefrain = "เกิดจากเหตุปัจจัย มาประชุมปรุงแต่งชั่วคราว แล้วแตกสลาย";
  const selfRefrain = "ตัวฉันไม่เที่ยงเกิดดับ ตัวฉันเกิดจากเหตุปัจจัย มาประชุมปรุงแต่งชั่วคราว แล้วแตกสลาย";
  const anattaRefrain = "เป็นธรรมชาติชนิดหนึ่ง เกิดจากเหตุปัจจัย มาประชุมปรุงแต่งชั่วคราว แล้วแตกสลาย ไม่เที่ยง เป็นทุกข์ เป็นอนัตตา ไม่มีตัวตนเป็นของตนเอง ไม่ควรไปยึดมั่นถือมั่นว่า สิ่งนั้นเป็นของเรา เป็นเรา เป็นตัวตนของเรา ไม่เที่ยงเกิดดับ";

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-dhamma-blue font-bold tracking-widest uppercase text-sm">วิปัสสนาภาวนา</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">ฝึกเอาความจริงไปใช้</h2>
          <p className="text-slate-500 text-lg">พิจารณาสิ่งรอบตัวน้อมเข้ามาสู่ตัวเรา</p>
          <div className="w-24 h-1 bg-dhamma-blue mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนที่ 1: พิจารณา ตา หู จมูก ลิ้น (สิ่งของรอบตัว) */}
        <div className="space-y-10 mb-16">
          {practiceItems.map((item, i) => (
            <IntrospectionCard key={i}>
              <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-slate-50 ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800">{item.action}</h3>
              </div>

              <div className="space-y-6 text-xl leading-relaxed">
                <p className="font-bold text-blue-800">{item.action} {item.object}ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ</p>
                <p className="text-slate-600">{item.example} ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ</p>
                <p className="text-slate-500 italic">{item.example}{causeRefrain}</p>
                <p className="text-slate-500 italic">{selfRefrain}</p>

                <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-dhamma-blue space-y-4">
                  <p className="font-bold text-dhamma-blue">จริงไหม...จริง จริงอย่างไร?</p>
                  <p className="text-slate-700">จริง เพราะ <span className="font-bold">{item.object}</span>มาประชุมกันชั่วคราว แล้วแตกสลาย ไม่มีตัวตนเป็นของตนเอง</p>
                  <p className="text-slate-700">ดังนั้น {item.example} และองค์ประกอบของ{item.example} {causeRefrain} <span className="text-dhamma-gold font-bold">จริงไหม...จริง</span></p>
                </div>

                <p className="text-slate-600 font-medium">{item.detail} {causeRefrain} ไม่เที่ยงเกิดดับ ไม่มีตัวตนเป็นของตนเอง ไม่ควรเห็นสิ่งนั้นว่าเป็นของเรา เป็นเรา เป็นตัวตนของเรา</p>

                <div className="pt-6 border-t border-slate-100 space-y-4">
                  <p className="text-dhamma-blue font-bold">ตัวฉันไม่เที่ยงเกิดดับ ตัวฉันเป็นเพียงรูป {causeRefrain} <span className="text-dhamma-gold font-bold">จริงไหม...จริง</span></p>
                  <p className="text-slate-600">จริงอย่างไร? อวัยวะภายใน ภายนอก ดีใจ เสียใจ ความสุข ความทุกข์ การกระทำ ความคิดเห็น นั่งนอน ไปไหนมาไหน {causeRefrain} <span className="text-dhamma-gold font-bold">จริงไหม...จริง</span></p>
                </div>
              </div>
            </IntrospectionCard>
          ))}
        </div>

        {/* ส่วนที่ 2: กายสัมผัส */}
        <IntrospectionCard>
          <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-indigo-50 text-indigo-600">
              <FaHandPointer />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">กายสัมผัส</h3>
          </div>
          <div className="space-y-6 text-xl leading-relaxed">
            <p className="font-bold text-blue-800">กายสัมผัส สัมผัสไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ</p>
            <p className="text-slate-600">เย็น ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ</p>
            <p className="text-slate-500 italic">เย็น{causeRefrain} ตัวฉันไม่เที่ยงเกิดดับ {selfRefrain}</p>
            <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-dhamma-blue">
              <p className="font-bold text-dhamma-blue mb-2">จริงไหม...จริง จริงอย่างไร?</p>
              <p className="text-slate-700">จริง เพราะ สัมผัสมาประชุมกันชั่วคราว แล้วแตกสลาย ไม่มีตัวตนเป็นของตนเอง</p>
              <p className="text-slate-700 mt-2">สัมผัส เย็น ร้อน อ่อน แข็ง ตึง ไหว {causeRefrain} <span className="text-dhamma-gold font-bold">จริงไหม...จริง</span></p>
            </div>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 3: ใจคิดนึก */}
        <IntrospectionCard>
          <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-50 text-purple-600">
              <FaBrain />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">ใจคิดนึก</h3>
          </div>
          <div className="space-y-6 text-xl leading-relaxed">
            <p className="font-bold text-blue-800">ใจคิดนึก ความคิดไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ</p>
            <p className="text-slate-600">ความคิด ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ</p>
            <p className="text-slate-500 italic">ความคิด{causeRefrain} ตัวฉันไม่เที่ยงเกิดดับ {selfRefrain}</p>
            <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-dhamma-blue">
              <p className="font-bold text-dhamma-blue mb-2">จริงไหม...จริง จริงอย่างไร?</p>
              <p className="text-slate-700">จริง เพราะ ความคิดมาประชุมกันชั่วคราว แล้วแตกสลาย ไม่มีตัวตนเป็นของตนเอง</p>
              <p className="text-slate-700 mt-2 italic">คิดถึงคน คนก็{causeRefrain} คิดถึงตนเอง ตนเองก็{causeRefrain} คิดถึงสิ่งของ สิ่งของก็{causeRefrain} <span className="text-dhamma-gold font-bold">จริงไหม...จริง</span></p>
            </div>
          </div>
        </IntrospectionCard>

        <IntrospectionCard highlight={true}>
          <div className="text-center space-y-6">
            <FaQuoteLeft className="mx-auto text-4xl opacity-30 mb-4" />
            <p className="text-2xl md:text-3xl font-medium leading-relaxed">
              สิ่งทั้งปวงที่เกิดขึ้นกับตัวเราทั้งหมด <br />
              เกิดจากเหตุปัจจัย มาประชุมกันชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ <br />
              ไม่มีตัวตนเป็นของตนเอง ไม่ควรเห็นสิ่งนั้นว่าเป็นของเรา เป็นเรา เป็นตัวตนของเรา
            </p>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 4: บทสรุปการพิจารณาอินทรีย์ 6 (ส่วนที่เพิ่มใหม่) */}
        <div className="space-y-8 mb-16">
          <h4 className="text-center text-slate-400 font-medium mb-8 uppercase tracking-widest">บทสรุปการพิจารณาอินทรีย์ 6</h4>
          {finalSenses.map((s, i) => (
            <IntrospectionCard key={i}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 ${s.color}`}>
                  {s.icon}
                </div>
                <p className="text-2xl font-bold text-slate-800">
                  {s.action} {s.object !== "สัมผัส" && s.object !== "ความคิด" ? s.object : ""}ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ
                </p>
              </div>
              <div className="space-y-4 text-xl text-slate-600 leading-relaxed">
                <p>{s.object}{causeRefrain}</p>
                <p className="text-blue-700 font-medium">ตัวฉันไม่เที่ยงเกิดดับ ตัวฉัน{causeRefrain}</p>
                <p className="pt-4 border-t border-slate-100">
                  <span className="font-bold text-slate-800">{s.object}</span>{anattaRefrain}
                </p>
              </div>
            </IntrospectionCard>
          ))}
        </div>

        
        

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/secondary/lesson0201" 
            className="inline-flex items-center gap-3 bg-dhamma-blue hover:bg-blue-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-blue-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: การพิจารณาอินทรีย์ 6 และขันธ์ 5
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}