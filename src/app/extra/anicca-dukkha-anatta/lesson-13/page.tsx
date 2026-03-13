// src/app/extra/anicca-dukkha-anatta/lesson-13/page.tsx
import IntrospectionCard from "@/components/ui/IntrospectionCard";
import Link from "next/link";
import { 
  FaArrowRight, 
  FaCircleCheck, 
  FaLink, 
  FaFire, 
  FaQuoteLeft,
  FaFaceSmile,
  FaFaceFrown,
  FaFaceMeh
} from "react-icons/fa6";

export default function ExtraLesson13() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">วิปัสสนาภาวนาเพิ่มเติม</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">ว่าด้วยเวทนา 3</h2>
          <p className="text-slate-500 text-lg italic">เวทนาเกิดแต่ผัสสะ มีผัสสะเป็นมูล</p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนที่ 1: บทนำเรื่องผัสสะเป็นมูล */}
        <IntrospectionCard highlight={true}>
          <div className="flex items-center gap-4 mb-6 text-white border-b border-white/20 pb-5">
            <FaLink className="text-3xl text-emerald-200" />
            <h3 className="text-2xl font-bold">เวทนา 3 เกิดแต่ผัสสะ</h3>
          </div>
          <div className="space-y-4 text-xl md:text-2xl leading-relaxed text-white/90">
            <p>ว่าด้วยเวทนา 3 เกิดแต่ผัสสะ มีผัสสะเป็นมูล</p>
            <p className="italic">พระพุทธเจ้าตรัสไว้ว่า เวทนา 3 นี้เกิดแต่ผัสสะ มีผัสสะเป็นมูลมีผัสสะเป็นเหตุ มีผัสสะเป็นปัจจัย</p>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 mt-6">
              <p className="text-center font-bold text-emerald-100 mb-2">เวทนา 3 เป็นไฉน</p>
              <p className="text-center text-2xl">สุขเวทนา ทุกขเวทนา ไม่ทุกข์ไม่สุขเวทนา</p>
            </div>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 2: รายละเอียดเวทนาแต่ละประเภท */}
        <div className="space-y-8 my-12">
          
          {/* สุขเวทนา */}
          <IntrospectionCard>
            <div className="flex items-center gap-4 mb-6 text-emerald-600 border-b border-emerald-50 pb-4">
              <FaFaceSmile className="text-2xl" />
              <h3 className="text-2xl font-bold">สุขเวทนา</h3>
            </div>
            <div className="space-y-4 text-xl leading-relaxed text-slate-700">
              <p>สุขเวทนาย่อมเกิดขึ้น เพราะอาศัยผัสสะ อันเป็นที่ตั้งแห่งสุขเวทนา</p>
              <p>ความเสวยอารมณ์ อันเกิดแต่ผัสสะนั้นชื่อว่าสุขเวทนา</p>
              <div className="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-500 italic">
                เกิดขึ้นเพราะอาศัยผัสสะ อันเป็นที่ตั้งแห่งสุขเวทนานั้น ย่อมดับไปสงบไป เพราะผัสสะอันเป็นที่ตั้ง แห่งสุขเวทนานั้นแลดับไป
              </div>
            </div>
          </IntrospectionCard>

          {/* ทุกขเวทนา */}
          <IntrospectionCard>
            <div className="flex items-center gap-4 mb-6 text-rose-600 border-b border-rose-50 pb-4">
              <FaFaceFrown className="text-2xl" />
              <h3 className="text-2xl font-bold">ทุกขเวทนา</h3>
            </div>
            <div className="space-y-4 text-xl leading-relaxed text-slate-700">
              <p>ทุกขเวทนาย่อมเกิดขึ้น เพราะอาศัยผัสสะ อันเป็นที่ตั้งแห่งทุกขเวทนา</p>
              <p>ความเสวยอารมณ์ อันเกิดแต่ผัสสะนั้นชื่อว่าทุกขเวทนา</p>
              <div className="bg-rose-50 p-6 rounded-2xl border-l-4 border-rose-500 italic">
                เกิดขึ้นเพราะอาศัยผัสสะ อันเป็นที่ตั้งแห่งทุกขเวทนา นั้นย่อมดับไปสงบไป เพราะผัสสะอันเป็นที่ตั้ง แห่งทุกขเวทนานั้นแลดับไป
              </div>
            </div>
          </IntrospectionCard>

          {/* ไม่ทุกข์ไม่สุขเวทนา */}
          <IntrospectionCard>
            <div className="flex items-center gap-4 mb-6 text-slate-500 border-b border-slate-50 pb-4">
              <FaFaceMeh className="text-2xl" />
              <h3 className="text-2xl font-bold">ไม่ทุกข์ไม่สุขเวทนา</h3>
            </div>
            <div className="space-y-4 text-xl leading-relaxed text-slate-700">
              <p>ไม่ทุกข์ไม่สุขเวทนา ย่อมเกิดขึ้นเพราะอาศัยผัสสะ อันเป็นที่ตั้งแห่งไม่ทุกข์ไม่สุขเวทนา</p>
              <p>ความเสวยอารมณ์ อันเกิดแต่ผัสสะนั้นชื่อว่า ไม่ทุกข์ไม่สุขเวทนา</p>
              <div className="bg-slate-100 p-6 rounded-2xl border-l-4 border-slate-400 italic">
                เกิดขึ้นเพราะอาศัยผัสสะ อันเป็นที่ตั้งแห่งไม่ทุกข์ไม่สุขเวทนา นั้นย่อมดับไปสงบไป เพราะผัสสะอันเป็นที่ตั้ง แห่งไม่ทุกข์ไม่สุขเวทนานั้นแลดับไป
              </div>
            </div>
          </IntrospectionCard>

        </div>

        {/* ส่วนที่ 3: อุปมาไม้สองอันเสียดสีกัน */}
        <div className="my-16">
          <IntrospectionCard>
            <div className="flex gap-6 items-start">
              <FaQuoteLeft className="text-emerald-200 text-5xl flex-shrink-0" />
              <div className="space-y-6 text-xl leading-relaxed text-slate-700">
                <div className="flex items-center gap-3 text-amber-700 font-bold text-2xl">
                  <FaFire className="animate-pulse" /> อุปมาการเกิดไฟ
                </div>
                <p>เพราะไม้สองอันเสียดสีกัน เพราะการเสียดสีกัน เกิดไออุ่นจึงเกิดไฟ</p>
                <div className="bg-slate-900 text-emerald-100 p-8 rounded-3xl shadow-2xl">
                  <p className="text-center leading-relaxed">
                    เพราะแยกไม้สองอันนั้น แลออกจากกัน <br />
                    ไออุ่นที่เกิดขึ้นเพราะการเสียดสีนั้น ย่อมดับไป สงบไปฉันใด <br />
                    <span className="block mt-6 text-white font-bold text-2xl md:text-3xl underline decoration-emerald-500 underline-offset-8">
                      เวทนา 3 นี้ก็ฉันนั้นเหมือนกันแล
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* ส่วนที่ 4: บทสรุปเหตุปัจจัย */}
        <IntrospectionCard>
          <div className="flex items-center gap-3 mb-6 text-emerald-700">
            <FaCircleCheck />
            <h3 className="text-xl font-bold">บทสรุปแห่งเหตุปัจจัย</h3>
          </div>
          <div className="space-y-4 text-xl leading-relaxed text-slate-600">
            <p>เกิดแต่ผัสสะ มีผัสสะเป็นเหตุ มีผัสสะเป็นปัจจัย</p>
            <p className="font-bold text-slate-800">เวทนาอันเกิดแต่ผัสสะเกิดขึ้น เพราะอาศัยผัสสะที่เกิดแต่ปัจจัยนั้น ย่อมดับไปเพราะผัสสะที่เกิดปัจจัยนั้นดับไป</p>
          </div>
        </IntrospectionCard>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/extra/anicca-dukkha-anatta/lesson-14" 
            className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-emerald-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: ว่าด้วยการกระทำที่สุดทุกข์
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}