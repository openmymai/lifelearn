// src/app/anagami/lesson-09/page.tsx
import IntrospectionCard from "@/components/ui/IntrospectionCard";
import Link from "next/link";
import { 
  FaArrowRight, 
  FaCircleXmark, 
  FaCircleCheck, 
  FaHandsPraying, 
  FaGem,
  FaEye,
  FaEarListen,
  FaWind,
  FaUtensils,
  FaHandPointer
} from "react-icons/fa6";

export default function AnagamiLesson09() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">หลักสูตรอนาคามีผล</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">กำหนดรู้ธรรมที่เนื่องด้วยอายตนะ 6</h2>
          <p className="text-slate-500 text-lg">พิจารณาโทษของการไม่รู้ และคุณของการรู้ตามความเป็นจริง</p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* --- ส่วนที่ 1: เมื่อไม่รู้ไม่เห็นตามจริง (ฝ่ายหลง) --- */}
        <IntrospectionCard>
          <div className="flex items-center gap-4 mb-8 text-rose-700 border-b border-rose-100 pb-5">
            <FaCircleXmark className="text-3xl" />
            <h3 className="text-2xl font-bold">เมื่อไม่รู้ไม่เห็นตามความเป็นจริง</h3>
          </div>
          
          <div className="space-y-6 text-xl leading-relaxed text-slate-700">
            <p className="font-medium italic text-slate-500">พระพุทธเจ้าตรัสไว้ดังนี้ว่า</p>
            <p>บุคคลเมื่อไม่รู้ไม่เห็นจักษุ ตามความเป็นจริง<br />
            เมื่อไม่รู้ไม่เห็นรูป ตามความเป็นจริง<br />
            เมื่อไม่รู้ไม่เห็นจักษุวิญญาณ ตามความเป็นจริง<br />
            เมื่อไม่รู้ไม่เห็นจักษุสัมผัส ตามความเป็นจริง<br />
            เมื่อไม่รู้ไม่เห็นความเสวยอารมณ์ เป็นสุขก็ตาม เป็นทุกข์ก็ตาม มิใช่ทุกข์ มิใช่สุขก็ตาม<br />
            ที่เกิดขึ้นเพราะจักษุสัมผัส เป็นปัจจัยตามความเป็นจริง</p>

            <div className="bg-rose-50 p-6 rounded-2xl border-l-4 border-rose-400 space-y-4">
              <p className="font-bold text-rose-800">ย่อมกำหนัดในจักษุ กำหนัดในรูป กำหนัดในจักษุวิญญาณ กำหนัดในจักษุสัมผัส<br />
              กำหนัดในเสวยอารมณ์ เป็นสุขก็ตามเป็นทุกข์ก็ตาม มิใช่ทุกข์มิใช่สุขก็ตาม<br />
              ที่เกิดขึ้นเพราะจักษุสัมผัสเป็นปัจจัย</p>
            </div>

            <p>เมื่อบุคคลนั้นกำหนัดนักแล้ว ประกอบพร้อมแล้ว ลุ่มหลงเล็งเห็นคุณอยู่<br />
            ย่อมมีอุปทานขันธ์ 5 ถึงความพอกพูนต่อไป<br />
            และเขาจะมีตัณหาที่นำไปสู่ภพใหม่ ร่วมกันด้วยความกำหนัด<br />
            ด้วยอำนาจความยินดี อันมีความเพลิดเพลิน ในอารมณ์นั้นๆ เจริญทั่ว</p>

            <div className="bg-slate-800 text-rose-200 p-8 rounded-3xl shadow-inner">
              <p className="text-center">
                จะมีความกระวนกระวาย แม้ทางกายแม้ทางใจเจริญทั่ว<br />
                มีความเดือดร้อน แม้ทางกายแม้ทางใจเจริญทั่ว<br />
                มีความเร่าร้อน แม้ทางกายแม้ทางใจเจริญทั่ว<br />
                <span className="block mt-4 text-white font-bold text-2xl">เขาย่อมเสวยทุกข์ทางกายบ้างทุกข์ทางใจบ้าง</span>
              </p>
            </div>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 2: เมื่อรู้เมื่อเห็นตามจริง (ฝ่ายปัญญา) --- */}
        <IntrospectionCard highlight={true}>
          <div className="flex items-center gap-4 mb-8 text-white border-b border-white/20 pb-5">
            <FaCircleCheck className="text-3xl text-amber-300" />
            <h3 className="text-2xl font-bold">ส่วนบุคคลเมื่อรู้เมื่อเห็นตามความเป็นจริง</h3>
          </div>

          <div className="space-y-6 text-xl leading-relaxed text-white/90">
            <p>เมื่อรู้เมื่อเห็นจักษุ ตามความเป็นจริง<br />
            เมื่อรู้เมื่อเห็นรูป ตามความเป็นจริง<br />
            เมื่อรู้เมื่อเห็นจักษุวิญญาณ ตามความเป็นจริง<br />
            เมื่อรู้เมื่อเห็นจักษุสัมผัส ตามความเป็นจริง<br />
            เมื่อรู้เมื่อเห็นความเสวยอารมณ์ เป็นสุขก็ตามเป็นทุกข์ก็ตาม มิใช่ทุกข์ มิใช่สุขก็ตาม<br />
            ที่เกิดขึ้นเพราะจักษุสัมผัส เป็นปัจจัยตามความเป็นจริง</p>

            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 space-y-4">
              <p className="font-bold text-amber-200 text-2xl">ย่อมไม่กำหนัดในจักษุ ไม่กำหนัดในรูป<br />
              ไม่กำหนัดในจักษุวิญญาณ ไม่กำหนัดในจักษุสัมผัส<br />
              ไม่กำหนัดในความเสวยอารมณ์ เป็นสุขก็ตามเป็นทุกข์ก็ตาม มิใช่ทุกข์มิใช่สุขก็ตาม<br />
              ที่เกิดขึ้นเพราะจักษุสัมผัสเป็นปัจจัย</p>
            </div>

            <p>เมื่อบุคคลนั้นไม่กำหนัดนักแล้ว ไม่ประกอบพร้อมแล้ว ไม่ลุ่มหลงเล็งเห็นโทษอยู่<br />
            ย่อมมีอุปทานขันธ์ 5 ไม่พอกพูนต่อไป<br />
            และเขาละตัณหาที่นำไปสู่ภพใหม่ ร่วมกันด้วยความกำหนัด<br />
            ด้วยอำนาจความยินดี อันมีความเพลิดเพลินในอารมณ์นั้นๆได้</p>

            <div className="bg-amber-500 text-white p-8 rounded-3xl shadow-lg">
              <p className="text-center">
                จะละความกระวนกระวาย แม้ทางกายแม้ทางใจได้<br />
                จะละความเดือดร้อน แม้ทางกายแม้ทางใจได้<br />
                จะละความเร่าร้อน แม้ทางกายแม้ทางใจได้<br />
                <span className="block mt-4 font-bold text-2xl">เขาย่อมเสวยสุขทางกายบ้างสุขทางใจบ้าง</span>
              </p>
            </div>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 3: อัฏฐังคิกมรรค และโพธิปักขิยธรรม --- */}
        <IntrospectionCard>
          <div className="flex items-center gap-4 mb-8 text-amber-700 border-b border-amber-100 pb-5">
            <FaHandsPraying className="text-3xl" />
            <h3 className="text-2xl font-bold">การเจริญบริบูรณ์แห่งมรรค</h3>
          </div>
          
          <div className="space-y-8 text-xl leading-relaxed text-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500">มีความเห็นอันใด ย่อมเป็นสัมมาทิฏฐิ</div>
              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500">มีความดำริอันใด ย่อมเป็นสัมมาสังกัปปะ</div>
              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500">มีความพยายามอันใด ย่อมเป็นสัมมาวายามะ</div>
              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500">มีความระลึกอันใด ย่อมเป็นสัมมาสติ</div>
              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500">มีความตั้งใจอันใด ย่อมเป็นสัมมาสมาธิ</div>
            </div>

            <p>ส่วนกายกรรม วจีกรรม อาชีวะของเขา ย่อมบริสุทธิ์ดีในเบื้องต้น เที่ยงด้วยอาการอย่างนี้<br />
            เขาชื่อว่าอัฏฐังคิกมรรค อันประเสริฐถึงความเจริญบริบูรณ์</p>

            <div className="bg-amber-50 p-8 rounded-3xl border border-amber-200">
              <p className="font-bold text-amber-800 mb-4">เมื่อบุคคลนั้นเจริญอัฏฐังคิกมรรคนี้อยู่อย่างนี้ ชื่อว่ามี</p>
              <p className="text-lg leading-loose">
                สติปัฏฐาน 4 สัมมัปปธาน 4 อิทธิบาท 4 อินทรีย์ 5 พละ 5 โพชฌงค์ 7<br />
                ถึงความเจริญบริบูรณ์ บุคคลนั้นเมื่อมีธรรมทั้ง 2 ดังนี้<br />
                คือสมถะและวิปัสสนาคู่เคียงกันเป็นไป
              </p>
            </div>

            <div className="text-center space-y-4 pt-4">
              <p className="text-2xl font-bold text-dhamma-blue">เขาชื่อว่ากำหนดรู้ธรรม ที่ควรกำหนดรู้ด้วยปัญญาอันยิ่ง</p>
              <p className="text-slate-600">ละธรรมที่ควรละด้วยปัญญาอันยิ่ง เจริญธรรมที่ควรเจริญด้วยปัญญาอันยิ่ง<br />
              ทำให้แจ้งธรรมที่ควรทำให้แจ้งด้วยปัญญาอันยิ่ง</p>
            </div>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 4: กามคุณ 5 --- */}
        <IntrospectionCard>
          <div className="flex items-center gap-4 mb-8 text-amber-800 border-b border-amber-100 pb-5">
            <FaGem className="text-3xl" />
            <h3 className="text-2xl font-bold">กามคุณ 5</h3>
          </div>
          
          <div className="space-y-6 text-xl leading-relaxed text-slate-700">
            <p className="font-bold">กามคุณ 5 กามคุณนี้มี 5 อย่างแล 5 อย่างเป็นไฉน</p>
            
            <div className="space-y-4">
              {[
                { icon: <FaEye />, text: "รูปที่เห็นด้วยจักษุ" },
                { icon: <FaEarListen />, text: "เสียงที่รู้ได้ด้วยโสต" },
                { icon: <FaWind />, text: "กลิ่นที่รู้ได้ด้วยฆานะ" },
                { icon: <FaUtensils />, text: "รสที่รู้ได้ด้วยชิวหา" },
                { icon: <FaHandPointer />, text: "โผฏฐัพพะที่รู้ด้วยกาย" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-slate-50 p-4 rounded-2xl">
                  <span className="text-amber-600 mt-1">{item.icon}</span>
                  <p>{item.text} อันน่าปรารถนา น่าใคร่ น่าพอใจ เป็นที่รักประกอบด้วยกาม เป็นที่ตั้งแห่งความกำหนัด</p>
                </div>
              ))}
            </div>
            
            <p className="text-center font-bold text-amber-700 pt-4">นี้แลกามคุณ 5 อย่าง</p>
          </div>
        </IntrospectionCard>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/anagami/lesson-10" 
            className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-amber-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}