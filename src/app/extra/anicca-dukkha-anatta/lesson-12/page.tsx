// src/app/extra/anicca-dukkha-anatta/lesson-12/page.tsx
import IntrospectionCard from "@/components/ui/IntrospectionCard";
import Link from "next/link";
import { 
  FaArrowRight, 
  FaCheckDouble, 
  FaPersonWalking, 
  FaHeartPulse, 
  FaBrain, 
  FaLightbulb,
  FaQuoteLeft,
  FaFire
} from "react-icons/fa6";

export default function ExtraLesson12() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">วิปัสสนาภาวนาเพิ่มเติม</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">ว่าด้วยควรเป็นผู้มีสติสัมปชัญญะ</h2>
          <p className="text-slate-500 text-lg italic">การพิจารณากายและเวทนาเพื่อละอนุสัย</p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนที่ 1: สติ (สติปัฏฐาน 4) */}
        <IntrospectionCard title="ย่อมเป็นผู้มีสติอย่างไร">
          <div className="space-y-8 text-xl leading-relaxed text-slate-700">
            <p className="italic text-slate-500">พระพุทธเจ้าตรัสไว้ ว่าย่อมเป็นผู้มีสติอย่างไร</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "เห็นกายในกาย", icon: <FaPersonWalking /> },
                { title: "เห็นเวทนาในเวทนา", icon: <FaHeartPulse /> },
                { title: "เห็นจิตในจิต", icon: <FaBrain /> },
                { title: "เห็นธรรมในธรรม", icon: <FaCheckDouble /> }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
                  <p className="flex items-center gap-3 font-bold text-emerald-700 mb-2">
                    {item.icon} ย่อมเป็นผู้มีปกติ {item.title}อยู่
                  </p>
                  <p className="text-slate-600 text-lg">มีความเพียรมีสัมปชัญญะมีสติ กำจัดอภิชฌา และโทมนัสในโลกเสีย</p>
                </div>
              ))}
            </div>
            <p className="text-center font-bold text-emerald-800 pt-4">ย่อมเป็นผู้มีสติอย่างนี้แล</p>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 2: สัมปชัญญะ (ความรู้สึกตัวทั่วพร้อม) */}
        <IntrospectionCard title="ย่อมเป็นผู้มีสัมปชัญญะอย่างไร">
          <div className="space-y-6 text-xl leading-relaxed text-slate-700">
            <p className="font-bold text-emerald-700">ย่อมเป็นผู้มีปกติทำความรู้สึกตัว:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 pl-4">
              <li className="list-disc">ในก้าวไปในการถอยกลับ</li>
              <li className="list-disc">ในการแลในการเหลียว</li>
              <li className="list-disc">ในการคู้เข้าเหยียดออก</li>
              <li className="list-disc">ทรงผ้าสังฆาฏิบาตรและจีวร</li>
              <li className="list-disc">ในการกิน ดื่ม เคี้ยว ลิ้ม</li>
              <li className="list-disc">ในการถ่ายอุจจาระปัสสาวะ</li>
              <li className="list-disc">ในการเดินในการ ยืน นั่ง หลับ ตื่น พูด นิ่ง</li>
            </ul>
            <p className="text-center font-bold text-emerald-800 pt-6 border-t border-slate-100">ย่อมเป็นผู้มีสติสัมปชัญญะอย่างนี้แล</p>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 3: การพิจารณาเวทนา 3 (สุข/ทุกข์/เฉย) */}
        <div className="space-y-10 my-16">
          <h4 className="text-center text-slate-400 font-medium uppercase tracking-widest">การพิจารณาเวทนาและละอนุสัย</h4>
          
          {/* สุขเวทนา */}
          <IntrospectionCard>
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <p className="font-bold text-emerald-700">ถ้าเมื่อนั้นมีสติสัมปชัญญะ เป็นผู้ไม่ประมาท มีความเพียรมีใจเด็ดเดี่ยว อยู่อย่างนี้ สุขเวทนาย่อมบังเกิดขึ้น</p>
              <p>เธอย่อมรู้ชัดอย่างนี้ ว่าสุขเวทนานี้ บังเกิดขึ้นแล้วแก่เราแล ก็แต่ว่าสุขเวทนานั้น อาศัยจึงเกิดขึ้น ไม่อาศัยไม่เกิดขึ้น อาศัยอะไรอาศัยกายนี้เอง</p>
              <div className="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-500 italic">
                ก็กายนี้แลไม่เที่ยง อันปัจจัยปรุงแต่งอาศัยกันเกิดขึ้น ก็สุขเวทนาอันอาศัยกายอันไม่เที่ยง ปัจจัยปรุงแต่งอาศัยกันเกิดขึ้น แล้วจึงบังเกิดขึ้นจะเที่ยงแต่ที่ไหน
              </div>
              <p className="font-bold text-dhamma-blue">เธอย่อมพิจารณา เห็นความไม่เที่ยง ความเสื่อมไป ความคลายไป ความดับความสละคืน ในกายและในสุขเวทนาอยู่</p>
              <p className="text-center bg-emerald-600 text-white p-4 rounded-xl font-bold shadow-lg">ย่อมละราคานุสัยในกาย และในสุขเวทนาเสียได้</p>
            </div>
          </IntrospectionCard>

          {/* ทุกขเวทนา */}
          <IntrospectionCard>
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <p className="font-bold text-rose-700">ถ้าเมื่อนั้นมีสติสัมปชัญญะ เป็นผู้ไม่ประมาท มีความเพียร มีใจเด็ดเดี่ยวอยู่อย่างนี้ ทุกขเวทนาย่อมบังเกิดขึ้น</p>
              <p>เธอย่อมรู้ชัดอย่างนี้ว่า ทุกขเวทนานี้ บังเกิดขึ้นแล้วแก่เราแล ก็แต่ว่าทุกขเวทนานั้น อาศัยจึงเกิดขึ้น ไม่อาศัยไม่เกิดขึ้น อาศัยอะไรอาศัยกายนี้เอง</p>
              <div className="bg-rose-50 p-6 rounded-2xl border-l-4 border-rose-500 italic">
                ก็กายนี้แลไม่เที่ยง อันปัจจัยปรุงแต่งอาศัยกันเกิดขึ้น ก็ทุกขเวทนา อันอาศัยกายอันไม่เที่ยง ปัจจัยปรุงแต่งอาศัยกันเกิดขึ้น แล้วจึงบังเกิดขึ้นจะเที่ยงแต่ที่ไหน
              </div>
              <p className="font-bold text-dhamma-blue">เธอย่อมพิจารณา เห็นความไม่เที่ยง ความเสื่อมไป ความคลายไป ความดับความสละคืนในกาย และในทุกขเวทนาอยู่</p>
              <p className="text-center bg-rose-600 text-white p-4 rounded-xl font-bold shadow-lg">ย่อมละปฏิฆานุสัยในกาย และในทุกขเวทนาเสียได้</p>
            </div>
          </IntrospectionCard>

          {/* ไม่ทุกข์ไม่สุขเวทนา */}
          <IntrospectionCard>
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <p className="font-bold text-slate-700">ถ้าเมื่อนั้นมีสติสัมปชัญญะเป็นผู้ไม่ประมาท มีความเพียรมีใจเด็ดเดี่ยวอยู่อย่างนี้ ไม่ทุกข์ไม่สุขเวทนา ย่อมบังเกิดขึ้น</p>
              <p>เธอย่อมรู้ชัดอย่างนี้ว่า ไม่ทุกข์ไม่สุขเวทนานี้ บังเกิดขึ้นแล้วแก่เราแล ก็แต่ว่าไม่ทุกข์ไม่สุขเวทนา นั้นอาศัยจึงเกิดขึ้น ไม่อาศัยไม่เกิดขึ้น อาศัยอะไรอาศัยกายนี้เอง</p>
              <div className="bg-slate-100 p-6 rounded-2xl border-l-4 border-slate-400 italic">
                ก็กายนี้แหละไม่เที่ยง อันปัจจัยปรุงแต่งอาศัยกันเกิดขึ้น อาศัยอะไรอาศัยกายนี้เอง ก็กายนี้แลไม่เที่ยง อันปัจจัยปรุงแต่งอาศัยกันเกิดขึ้น ก็ไม่ทุกข์ไม่สุขเวทนา อาศัยกายอันไม่เที่ยง ปัจจัยปรุงแต่งอาศัยกันเกิดขึ้น แล้วจึงบังเกิดขึ้นจักเที่ยงแต่ที่ไหน
              </div>
              <p className="font-bold text-dhamma-blue">เธอย่อมพิจารณา เห็นความไม่เที่ยง ความเสื่อมไป ความคลายไป ความดับความสละคืน ในกายและในไม่ทุกข์ไม่สุขเวทนาอยู่</p>
              <p className="text-center bg-slate-700 text-white p-4 rounded-xl font-bold shadow-lg">ย่อมละอวิชชานุสัยในกาย และในไม่ทุกข์ไม่สุขเวทนาเสียได้</p>
            </div>
          </IntrospectionCard>
        </div>

        {/* ส่วนที่ 4: การเสวยเวทนาอย่างผู้ปราศจากกิเลส */}
        <IntrospectionCard highlight={true}>
          <div className="space-y-8 py-4 text-center">
            <FaCheckDouble className="mx-auto text-4xl text-emerald-200" />
            <div className="space-y-4 text-xl md:text-2xl leading-relaxed">
              <p>ถ้าเมื่อนั้นเสวยสุขเวทนา ก็รู้ชัดว่า สุขเวทนาไม่เที่ยง ไม่น่าหมกมุ่น ไม่น่าเพลิดเพลิน</p>
              <p>ถ้าเสวยทุกขเวทนาก็รู้ชัดว่า ทุกขเวทนาไม่เที่ยง ไม่น่าหมกมุ่น ไม่น่าเพลิดเพลิน</p>
              <p>ถ้าเสวยไม่ทุกข์ไม่สุขเวทนา ก็รู้ชัดว่า ไม่ทุกข์ไม่สุขเวทนา ไม่เที่ยงไม่น่าหมกมุ่น ไม่น่าเพลิดเพลิน</p>
            </div>
            <div className="bg-white/10 p-8 rounded-3xl border border-white/20 space-y-4 text-lg md:text-xl">
              <p>ถ้าเธอเสวยสุขเวทนา ย่อมเป็นผู้ปราศจากกิเลส เสวยสุขเวทนานั้น</p>
              <p>ถ้าเธอเสวยทุกขเวทนา ย่อมเป็นผู้ปราศจากกิเลส เสวยทุกขเวทนานั้น</p>
              <p>ถ้าเธอเสวยไม่ทุกข์ไม่สุขเวทนา ย่อมเป็นผู้ปราศจากกิเลส เสวยไม่ทุกข์ไม่สุขเวทนานั้น</p>
            </div>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 5: อุปมาประทีปน้ำมันและความเย็นในโลก */}
        <div className="my-16">
          <IntrospectionCard>
            <div className="flex gap-6 items-start">
              <FaQuoteLeft className="text-emerald-200 text-5xl flex-shrink-0" />
              <div className="space-y-8 text-xl leading-relaxed text-slate-700">
                <div className="flex items-center gap-3 text-amber-700 font-bold text-2xl">
                  <FaFire className="animate-pulse" /> อุปมาประทีปน้ำมัน
                </div>
                <p>เปรียบเหมือนประทีปน้ำมัน อาศัยน้ำมัน และไส้จึงลูกโพลงอยู่ได้ เพราะสิ้นน้ำมันและไส้ประทีปนั้น ไม่มีเชื้อพึงดับไป ฉันใดก็ฉันนั้นเหมือนกัน</p>
                
                <div className="bg-slate-900 text-emerald-100 p-8 rounded-3xl shadow-2xl">
                  <p className="text-center leading-relaxed">
                    เมื่อเสวยเวทนามีกายเป็นที่สุด ย่อมรู้ชัดว่า เราเสวยเวทนามีกายเป็นที่สุด <br />
                    เมื่อเสวยเวทนามีชีวิตเป็นที่สุด ย่อมรู้ชัดว่า เราเสวยเวทนามีชีวิตเป็นที่สุด <br />
                    <span className="block mt-6 text-white font-bold text-2xl md:text-3xl underline decoration-emerald-500 underline-offset-8">
                      ย่อมรู้ชัดว่าเมื่อตายไป เวทนาทั้งปวง อันไม่น่าเพลิดเพลิน จักเป็นความเย็นในโลกนี้ทีเดียว
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/extra/anicca-dukkha-anatta/lesson-13" 
            className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-emerald-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: ว่าด้วยเวทนา 3
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}