// src/app/extra/past-present-future/lesson-09/page.tsx
import IntrospectionCard from "@/components/ui/IntrospectionCard";
import Link from "next/link";
import { 
  FaArrowRight, 
  FaCloudShowersHeavy, 
  FaMountain, 
  FaWater, 
  FaLink, 
  FaCircleExclamation,
  FaCircleCheck,
  FaQuoteLeft
} from "react-icons/fa6";

export default function PastPresentFutureLesson09() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-teal-600 font-bold tracking-widest uppercase text-sm">วิปัสสนาภาวนาเพิ่มเติม</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">ยมกวรรคที่ 2</h2>
          <p className="text-slate-500 text-lg italic">ว่าด้วยอาหารของอวิชชา และอาหารของวิชชาวิมุตติ</p>
          <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* --- ส่วนที่ 1: อวิชชาสูตร --- */}
        <IntrospectionCard>
          <div className="flex items-center gap-3 mb-8 text-rose-700 border-b border-rose-100 pb-5">
            <FaCircleExclamation className="text-2xl" />
            <h3 className="text-2xl font-bold">อวิชชาสูตร</h3>
          </div>
          
          <div className="space-y-6 text-xl leading-relaxed text-slate-700">
            <p className="font-medium italic text-slate-500">ดูกรภิกษุทั้งหลาย เงื่อนต้นแห่งอวิชชาย่อมไม่ปรากฏ ในกาลก่อนแต่นี้อวิชชาไม่มี แต่ภายหลังจึงมี เพราะเหตุนั้นเราจึงกล่าวคำนี้ อย่างนี้ว่าก็เมื่อเป็นเช่นนั้น อวิชชามีข้อนี้เป็นปัจจัยจึงปรากฏ</p>
            
            <p className="font-bold text-rose-800">ดูกรภิกษุทั้งหลาย เราย่อมกล่าวว่าอวิชชาว่ามีอาหาร มิได้กล่าวว่าไม่มีอาหาร</p>

            {/* ส่วนอาหารของอวิชชา (Full Text) */}
            <div className="bg-rose-50/50 p-6 md:p-8 rounded-3xl border-l-4 border-rose-400 space-y-6 shadow-inner">
              <p>ก็อะไรเป็นอาหารของอวิชชา ควรจะกล่าวว่านิวรณ์ 5<br />
              แม้นิวรณ์ 5 เราก็กล่าวว่ามีอาหาร มิได้กล่าวว่าไม่มีอาหาร</p>
              
              <p>ก็อะไรเป็นอาหารของนิวรณ์ 5 ควรกล่าวว่าทุจริต 3<br />
              แม้ทุจริต 3 เราก็กล่าวว่ามีอาหาร มิได้กล่าวว่าไม่มีอาหาร</p>
              
              <p>ก็อะไรเป็นอาหารของทุจริต 3 ควรกล่าวว่าการไม่สำรวมอินทรีย์<br />
              แม้การไม่สำรวมอินทรีย์ เราก็กล่าวว่ามีอาหาร มิได้กล่าวว่าไม่มีอาหาร</p>
              
              <p>ก็อะไรเป็นอาหารแห่งการไม่สำรวมอินทรีย์ ควรกล่าวว่าความไม่มีสติสัมปชัญญะ<br />
              แม้ความไม่มีสติสัมปชัญญะ เราก็กล่าวว่ามีอาหาร มิได้กล่าวว่าไม่มีอาหาร</p>
              
              <p>ก็อะไรเป็นอาหาร ของความไม่มีสติสัมปชัญญะ<br />
              ควรกล่าวว่าการกระทำไว้ในใจ โดยไม่แยบคาย<br />
              แม้การทำไว้ในใจโดยไม่แยบคาย เราก็กะว่ามีอาหาร มิได้กล่าวว่าไม่มีอาหาร</p>
              
              <p>ก็อะไรเป็นอาหารของการทำไว้ในใจ โดยไม่แยบคาย ควรกล่าวว่าความไม่มีศรัทธา<br />
              แม้ความไม่มีศรัทธา เราก็กล่าวว่ามีอาหาร มิได้กล่าวว่าไม่มีอาหาร</p>
              
              <p>ก็อะไรเป็นอาหารของความไม่มีศรัทธา ควรกล่าวว่าการไม่ฟังสัทธรรม<br />
              แม้การไม่ฟังสัทธรรม เราก็กล่าวว่ามีอาหาร มิได้กล่าวว่าไม่มีอาหาร</p>
              
              <p>ก็อะไรเป็นอาหารของการไม่ฟังสัทธรรม ควรกล่าวว่าการไม่คบสัปบุรุษ</p>
            </div>

            <p className="font-bold text-teal-800 pt-4">ดูกรภิกษุทั้งหลายด้วยประการดังนี้</p>
            <div className="pl-6 border-l-2 border-rose-200 space-y-2 text-lg text-slate-600">
              <p>การไม่คบสัปบุรุษที่บริบูรณ์ ย่อมยังการไม่ฟังสัทธรรมให้บริบูรณ์</p>
              <p>การไม่ฟังสัทธรรมที่บริบูรณ์ ย่อมยังความไม่มีศรัทธาให้บริบูรณ์</p>
              <p>ความไม่มีสถานที่บริบูรณ์ ย่อมยังการทำไว้ในใจ โดยไม่แยบคายให้บริบูรณ์</p>
              <p>การทำไว้ในใจ โดยไม่แยบคายที่บริบูรณ์ ย่อมยังความไม่มีสติสัมปชัญญะให้บริบูรณ์</p>
              <p>ความไม่มีสติสัมปชัญญะที่บริบูรณ์ ย่อมยังการไม่สำรวมอินทรีย์ให้บริบูรณ์</p>
              <p>การไม่สำรวมอินทรีย์ที่บริบูรณ์ ย่อมยังทุจริต 3 ให้บริบูรณ์</p>
              <p>ทุจริต 3 ที่บริบูรณ์ ย่อมยังนิวรณ์ 5 ให้บริบูรณ์</p>
              <p>นิวรณ์ 5 ที่บริบูรณ์ย่อมยังอวิชชาให้บริบูรณ์</p>
            </div>
            <p className="text-center font-bold text-rose-700 text-2xl pt-4">อวิชชานี้มีอาหารอย่างนี้และบริบูรณ์อย่างนี้</p>
          </div>
        </IntrospectionCard>

        {/* --- อุปมาสายน้ำ (อวิชชา) --- */}
        <div className="my-12 bg-slate-800 rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
          <FaMountain className="absolute top-0 right-0 opacity-5 text-[15rem] translate-x-1/4 -translate-y-1/4" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6 text-teal-300">
              <FaCloudShowersHeavy className="text-3xl" />
              <h4 className="text-2xl font-bold">อุปมาฝนตกบนภูเขา</h4>
            </div>
            <div className="space-y-4 text-xl leading-relaxed text-slate-300">
              <p>เปรียบเหมือนเมื่อฝนเม็ดหยาบ ตกลงเบื้องบนภูเขา เมื่อฝนตกหนักอยู่ น้ำนั้นไหลไปตามที่ลุ่ม ย่อมยังซอกเขาลำธารและห้วยให้เต็ม ซอกเขาลำธารและห้วยที่เต็ม ย่อมยังหนองให้เต็ม หนองที่เต็มย่อมยังบึงให้เต็ม บึงที่เต็มย่อมยังแม่น้ำน้อยให้เต็ม แม่น้ำน้อยที่เต็มย่อมยังแม่น้ำใหญ่ให้เต็ม แม่น้ำใหญ่ที่เต็มย่อมยังมหาสมุทรสาครให้เต็ม</p>
              <p className="text-teal-200 font-bold">มหาสมุทรสาครนั้นมีอาหารอย่างนี้ และเต็มเปี่ยมอย่างนี้แม้ฉันใด</p>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mt-6">
                <p>ดูกรภิกษุทั้งหลายการไม่คบสัปบุรุษที่บริบูรณ์ ย่อมยังการไม่ฟังสัทธรรมให้บริบูรณ์ นิวรณ์ 5 ที่บริบูรณ์ย่อมยังอวิชชาให้บริบูรณ์ อวิชชานี้มีอาหารอย่างนี้และบริบูรณ์อย่างนี้ ฉันนั้นเหมือนกันแล</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- ส่วนที่ 2: วิชชาและวิมุตติ --- */}
        <IntrospectionCard>
          <div className="flex items-center gap-3 mb-8 text-emerald-700 border-b border-emerald-100 pb-5">
            <FaCircleCheck className="text-2xl" />
            <h3 className="text-2xl font-bold">วิชชาและวิมุตติ</h3>
          </div>

          <div className="space-y-6 text-xl leading-relaxed text-slate-700">
            <p className="font-bold text-emerald-800">ดูกรภิกษุทั้งหลาย เรากล่าววิชชาและวิมุตติว่ามีอาหาร มิได้กล่าวว่าไม่มีอาหาร</p>

            {/* ส่วนอาหารของวิชชาวิมุตติ (Full Text) */}
            <div className="bg-emerald-50/50 p-6 md:p-8 rounded-3xl border-l-4 border-emerald-400 space-y-6 shadow-inner">
              <p>ก็อะไรเป็นอาหารของวิชชาและวิมุตติ ควรกล่าวว่าโพชฌงค์ 7<br />
              แม้โพชฌงค์ 7 เราก็กล่าวว่ามีอาหาร มิได้กล่าวว่าไม่มีอาหาร</p>
              
              <p>ก็อะไรเป็นอาหารของโพชฌงค์ 7 ควรกล่าวว่าสติปัฏฐาน 4<br />
              แม้สติปัฏฐาน 4 เราก็กล่าวว่ามีอาหาร มิได้กล่าวว่าไม่มีอาหาร</p>
              
              <p>ก็อะไรเป็นอาหารของสติปัฏฐาน 4 ควรกล่าวว่าสุจริต 3<br />
              แม้สุจริต 3 เราก็กล่าวว่ามีอาหาร มิได้กล่าวว่าไม่มีอาหาร</p>
              
              <p>ก็อะไรเป็นอาหารของสุจริต 3 ควรกล่าวว่าการสำรวมอินทรีย์<br />
              แม้การสำรวมอินทรีย์เราก็กล่าวว่ามีอาหาร มิได้กล่าวว่าไม่มีอาหาร</p>
              
              <p>อะไรเป็นอาหารของการสำรวมอินทรีย์ ควรกล่าวว่าสติสัมปชัญญะ<br />
              แม้สติสัมปชัญญะเราก็กล่าวว่ามีอาหาร มิได้กล่าวว่าไม่มีอาหาร</p>
              
              <p>อะไรเป็นอาหารของสติสัมปชัญญะ ควรกล่าวว่าการทำไว้ในใจโดยแยบคาย<br />
              แม้การทำไว้ในใจโดยแยบคาย เราก็กล่าวว่ามีอาหาร มิได้กล่าวว่าไม่มีอาหาร</p>
              
              <p>ก็อะไรเป็นอาหารของการกระทำไว้ในใจโดยแยบคาย ควรกล่าวว่าศรัทธา<br />
              แม้ศรัทธาเราก็กล่าวว่ามีอาหาร มิได้กล่าวว่าไม่มีอาหาร</p>
              
              <p>ก็อะไรเป็นอาหารของศรัทธา ควรกล่าวว่าการฟังสัทธรรม<br />
              แม้การฟังสัทธรรมเราก็กล่าวว่ามีอาหาร มิได้กล่าวว่าไม่มีอาหาร</p>
              
              <p>ก็อะไรเป็นอาหารของการฟังสัทธรรม ควรกล่าวว่าการไม่คบสัปบุรุษ</p>
            </div>

            <p className="font-bold text-teal-800 pt-4">ดูกรภิกษุทั้งหลายด้วยประการดังนี้</p>
            <div className="pl-6 border-l-2 border-emerald-200 space-y-2 text-lg text-slate-600">
              <p>การคบสัปบุรุษที่บริบูรณ์ ย่อมยังการฟังการสัทธรรมให้บริบูรณ์</p>
              <p>การฟังสัทธรรมที่บริบูรณ์ ย่อมยังศรัทธาให้บริบูรณ์</p>
              <p>ศรัทธาที่บริบูรณ์ ย่อมยังการทำไว้ในใจ โดยแยบคายให้บริบูรณ์</p>
              <p>การทำไว้ในใจ โดยแยบคายที่บริบูรณ์ ย่อมยังสติสัมปชัญญะ ให้บริบูรณ์</p>
              <p>สติสัมปชัญญะที่บริบูรณ์ ย่อมยังการสำรวมอินทรีย์ ให้บริบูรณ์</p>
              <p>การสำรวมอินทรีย์ที่บริบูรณ์ อมยังสุจริต 3 ให้บริบูรณ์</p>
              <p>สุจริต 3 ที่บริบูรณ์ย่อมยังสติปัฏฐาน 4 ให้บริบูรณ์</p>
              <p>สติปัฏฐาน 4 ที่บริบูรณ์ ย่อมยังโพชฌงค์ 7 ให้บริบูรณ์</p>
              <p>โพชฌงค์ 7 ที่บริบูรณ์ ย่อมยังวิชชาและวิมุตติให้บริบูรณ์</p>
            </div>
            <p className="text-center font-bold text-emerald-700 text-2xl pt-4">วิชชาและวิมุตตินี้มีอาหารอย่างนี้ และบริบูรณ์อย่างนี้</p>
          </div>
        </IntrospectionCard>

        {/* --- อุปมาสายน้ำ (วิชชา) --- */}
        <div className="my-12 bg-teal-900 rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
          <FaWater className="absolute bottom-0 left-0 opacity-10 text-[15rem] -translate-x-1/4 translate-y-1/4" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6 text-emerald-300">
              <FaWater className="text-3xl" />
              <h4 className="text-2xl font-bold">อุปมาความเต็มเปี่ยมแห่งวิชชา</h4>
            </div>
            <div className="space-y-4 text-xl leading-relaxed text-teal-100">
              <p>เปรียบเหมือนเมื่อฝนเม็ดหยาบ ตกลงเบื้องบนภูเขา เมื่อฝนตกหนักอยู่ น้ำนั้นไหลไปตามที่ลุ่ม ยังซอกเขาลำธารและห้วยให้เต็ม ซอกเขาลำธารและห้วยที่เต็ม ย่อมยังหนองให้เต็ม หนองที่เต็มย่อมยังบึงให้เต็ม บึงที่เต็มย่อมยังแม่น้ำน้อยให้เต็ม แม่น้ำน้อยที่เต็มย่อมยังแม่น้ำใหญ่ให้เต็ม แม่น้ำใหญ่ที่เต็มย่อมยังมหาสมุทรสาครให้เต็ม</p>
              <p className="text-white font-bold">มหาสมุทรสาครนั้นมีอาหารอย่างนี้ และเต็มเปี่ยมอย่างนี้แม้ฉันใด</p>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mt-6">
                <p>ดูกรภิกษุทั้งหลาย การคบสัปบุรุษที่บริบูรณ์ ย่อมยังการฟังสัทธรรมให้บริบูรณ์ โพชฌงค์ 7 ที่บริบูรณ์ ย่อมยังวิชชาและวิมุตติให้บริบูรณ์ วิชชาและวิมุตนี้มีอาหารอย่างนี้ และบริบูรณ์อย่างนี้ฉันนั้นเหมือนกันแล</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/extra/past-present-future/lesson-10" 
            className="inline-flex items-center gap-3 bg-teal-600 hover:bg-teal-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-teal-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: ฐานสูตร
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}