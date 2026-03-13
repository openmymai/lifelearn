// src/app/extra/anicca-dukkha-anatta/lesson-11/page.tsx
import IntrospectionCard from "@/components/ui/IntrospectionCard";
import Link from "next/link";
import { 
  FaArrowRight, 
  FaQuoteLeft, 
  FaCheckDouble,
  FaCommentDots,
  FaUser,
  FaCloud,
  FaTree
} from "react-icons/fa6";

export default function ExtraLesson11() {
  // ฟังก์ชันช่วยจัดรูปแบบบทสนทนา (คงเนื้อหาเดิมทุกตัวอักษร)
  const DialogueBlock = ({ question, answer, number }: { question: React.ReactNode, answer: string, number: string }) => (
    <div className="mb-10 last:mb-0">
      <div className="flex items-start gap-3 mb-4">
        <span className="flex-none w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 shadow-sm">
          {number}
        </span>
        <div className="flex-grow">
          <p className="text-emerald-700 font-bold mb-2 flex items-center gap-2 text-sm md:text-base">
            <FaCommentDots className="opacity-50" /> พระพุทธเจ้า ทรงตรัสถามพระราหุลว่า
          </p>
          <div className="text-xl md:text-2xl text-slate-800 leading-relaxed pl-4 border-l-2 border-emerald-100">
            {question}
          </div>
        </div>
      </div>
      <div className="flex items-start gap-3 ml-8 md:ml-12">
        <div className="flex-grow bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100 shadow-inner">
          <p className="text-slate-500 font-medium mb-1 flex items-center gap-2 text-sm">
            <FaUser className="opacity-50" /> พระราหุลตอบว่า
          </p>
          <p className="text-xl md:text-2xl text-emerald-900 font-bold">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">วิปัสสนาภาวนาเพิ่มเติม</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">ราหุลสูตร</h2>
          <p className="text-slate-500 text-lg italic">ว่าด้วยสิ่งใดไม่เที่ยงสิ่งนั้นก็เป็นทุกข์</p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนที่ 1: บทนำ (เรื่องราว) */}
        <IntrospectionCard>
          <div className="flex items-center gap-3 mb-6 text-emerald-700 border-b pb-4">
            <FaTree className="text-2xl" />
            <h3 className="text-2xl font-bold">มูลเหตุแห่งการแสดงธรรม</h3>
          </div>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700 italic">
            <p>สมัยหนึ่งพระผู้มีพระภาค ประทับอยู่ ณ พระวิหารเชตวัน อารามของท่านอนาถบิณฑิกเศรษฐี ใกล้พระนครสาวัตถี</p>
            <p>ครั้งนั้นพระผู้มีพระภาค ทรงหลีกเร้นอยู่ในที่สงัด ทรงเกิดปริวิตก แห่งพระหฤทัยอย่างนี้ว่า ธรรมที่เป็นเครื่องบ่มวิมุติ ของราหุลแก่กล้าแล้ว ถ้ากระไรเราควรแนะนำราหุล ในธรรมเป็นที่สิ้นไป แห่งอาสวะยิ่งขึ้นไปเถิด</p>
            <p>ครั้นทรงพระดำริฉะนี้แล้ว ในเวลาเช้าพระผู้มีพระภาค ทรงครองอันตรวาสก ทรงถือบาตรและจีวร เสด็จเข้าไปบิณฑบาต ยังพระนครสาวัตถี ครั้นเวลาภายหลัง เสด็จกลับจากบิณฑบาตแล้ว ตรัสเรียกท่านพระราหุลมาตรัสว่า ราหุลเธอจงถือผ้านิสีทนะ ไปสู่ป่าอันธวันด้วยกัน เพื่อพักผ่อนในเวลากลางวัน</p>
            <p>ท่านพระราหุลทูลรับพระดำรัส พระผู้มีพระภาค แล้วได้ถือผ้านิสีทนะ ตามเสด็จพระผู้มีพระภาคไปข้างหลัง ก็สมัยนั้นพวกเทวดาหลายพัน ติดตามพระผู้มีพระภาคไปด้วยกัน คิดว่าวันนี้พระผู้มีพระภาค จักทรงแนะนำท่านพระราหุล ในธรรมเป็นที่สิ้นอาสวะยิ่งขึ้นไป</p>
            <p>ครั้งนั้นพระผู้มีพระภาค เสด็จเข้าไปสู่ป่าอันธวัน ประทับ ณ พุทธอาสน์ ที่พระราหุลปูลาดถวาย ที่ควงตันไม้แห่งหนึ่ง ฝ่ายท่านพระราหุล ถวายอภิวาทพระผู้มีพระภาคแล้ว นั่ง ณ ที่ควรส่วนข้างหนึ่ง</p>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 2: ปุจฉา-วิสัชนา (1-9) ทางจักษุ */}
        <IntrospectionCard title="การพิจารณาทางจักษุ (ตา)">
          <DialogueBlock number="1" question="จักษุเที่ยงหรือไม่เที่ยง" answer="ไม่เที่ยงพระเจ้าข้า" />
          <DialogueBlock number="2" question="ก็สิ่งใดไม่เที่ยง สิ่งนั้นเป็นทุกข์หรือเป็นสุขเล่า" answer="เป็นทุกข์พระเจ้าข้า" />
          <DialogueBlock number="3" question={<>ก็สิ่งใดไม่เที่ยง เป็นทุกข์ มีความแปรปรวนเป็นธรรมดา<br />ควรหรือหนอ ที่จะตามเห็นสิ่งนั้น ว่านั่นเป็นของเรา เป็นเรา เป็นตัวตนของเรา</>} answer="ไม่ควรเห็นอย่างนั้นพระเจ้าข้า" />
          <hr className="my-10 border-emerald-50" />
          <DialogueBlock number="4" question="รูปเที่ยงหรือไม่เที่ยง" answer="ไม่เที่ยงพระเจ้าข้า" />
          <DialogueBlock number="5" question="ก็สิ่งใดไม่เที่ยง สิ่งนั้นเป็นทุกข์หรือเป็นสุขเล่า" answer="เป็นทุกข์พระเจ้าข้า" />
          <DialogueBlock number="6" question={<>ก็สิ่งใดไม่เที่ยง เป็นทุกข์ มีความแปรปรวนเป็นธรรมดา<br />ควรหรือหนอ ที่จะตามเห็นสิ่งนั้น ว่านั่นเป็นของเรา เป็นเรา เป็นตัวตนของเรา</>} answer="ไม่ควรเห็นอย่างนั้นพระเจ้าข้า" />
          <hr className="my-10 border-emerald-50" />
          <DialogueBlock number="7" question={<>จักษุวิญญาณ จักษุสัมผัส<br />เวทนา สัญญา สังขาร วิญญาณ<br />ที่เกิดขึ้นเพราะจักษุสัมผัส เป็นปัจจัยเที่ยงหรือไม่เที่ยง</>} answer="ไม่เที่ยงพระเจ้าข้า" />
          <DialogueBlock number="8" question={<>ก็สิ่งใดไม่เที่ยง<br />สิ่งนั้นเป็นทุกข์หรือเป็นสุขเล่า</>} answer="เป็นทุกข์พระเจ้าข้า" />
          <DialogueBlock number="9" question={<>ก็สิ่งใดไม่เที่ยง เป็นทุกข์ มีความแปรปรวนเป็นธรรมดา<br />ควรหรือหนอ ที่จะตามเห็นสิ่งนั้น ว่านั่นเป็นของเรา เป็นเรา เป็นตัวตนของเรา</>} answer="ไม่ควรเห็นอย่างนั้นพระเจ้าข้า" />
        </IntrospectionCard>

        {/* ส่วนที่ 3: ปุจฉา-วิสัชนา (10-24) ทางใจ */}
        <IntrospectionCard title="การพิจารณาทางใจ">
          <DialogueBlock number="10" question="ใจเที่ยงหรือไม่เที่ยง" answer="ไม่เที่ยงพระเจ้าข้า" />
          <DialogueBlock number="11" question="ก็สิ่งใดไม่เที่ยง สิ่งนั้นเป็นทุกข์หรือเป็นสุขเล่า" answer="เป็นทุกข์พระเจ้าข้า" />
          <DialogueBlock number="12" question={<>ก็สิ่งใดไม่เที่ยง เป็นทุกข์ มีความแปรปรวนเป็นธรรมดา<br />ควรหรือหนอ ที่จะตามเห็นสิ่งนั้น ว่านั่นเป็นของเรา เป็นเรา เป็นตัวตนของเรา</>} answer="ไม่ควรเห็นอย่างนั้นพระเจ้าข้า" />
          <hr className="my-10 border-emerald-50" />
          <DialogueBlock number="13" question="ธรรมารมณ์เที่ยงหรือไม่เที่ยง" answer="ไม่เที่ยงพระเจ้าข้า" />
          <DialogueBlock number="14" question="ก็สิ่งใดไม่เที่ยง สิ่งนั้นเป็นทุกข์หรือเป็นสุขเล่า" answer="เป็นทุกข์พระเจ้าข้า" />
          <DialogueBlock number="15" question={<>ก็สิ่งใดไม่เที่ยง เป็นทุกข์ มีความแปรปรวนเป็นธรรมดา<br />ควรหรือหนอ ที่จะตามเห็นสิ่งนั้น ว่านั่นเป็นของเรา เป็นเรา เป็นตัวตนของเรา</>} answer="ไม่ควรเห็นอย่างนั้นพระเจ้าข้า" />
          <hr className="my-10 border-emerald-50" />
          <DialogueBlock number="16" question="มโนวิญญาณเที่ยงหรือไม่เที่ยง" answer="ไม่เที่ยงพระเจ้าข้า" />
          <DialogueBlock number="17" question="ก็สิ่งใดไม่เที่ยง สิ่งนั้นเป็นทุกข์หรือเป็นสุขเล่า" answer="เป็นทุกข์พระเจ้าข้า" />
          <DialogueBlock number="18" question={<>ก็สิ่งใดไม่เที่ยง เป็นทุกข์ มีความแปรปรวนเป็นธรรมดา<br />ควรหรือหนอ ที่จะตามเห็นสิ่งนั้น ว่านั่นเป็นของเรา เป็นเรา เป็นตัวตนของเรา</>} answer="ไม่ควรเห็นอย่างนั้นพระเจ้าข้า" />
          <hr className="my-10 border-emerald-50" />
          <DialogueBlock number="19" question="มโนสัมผัสเที่ยงหรือไม่เที่ยง" answer="ไม่เที่ยงพระเจ้าข้า" />
          <DialogueBlock number="20" question="ก็สิ่งใดไม่เที่ยง สิ่งนั้นเป็นทุกข์หรือเป็นสุขเล่า" answer="เป็นทุกข์พระเจ้าข้า" />
          <DialogueBlock number="21" question={<>ก็สิ่งใดไม่เที่ยง เป็นทุกข์ มีความแปรปรวนเป็นธรรมดา<br />ควรหรือหนอ ที่จะตามเห็นสิ่งนั้น ว่านั่นเป็นของเรา เป็นเรา เป็นตัวตนของเรา</>} answer="ไม่ควรเห็นอย่างนั้นพระเจ้าข้า" />
          <hr className="my-10 border-emerald-50" />
          <DialogueBlock number="22" question={<>เวทนา สัญญา สังขาร วิญญาณ<br />ที่เกิดขึ้นเพราะมโนสัมผัส<br />เป็นปัจจัยเที่ยงหรือไม่เที่ยง</>} answer="ไม่เที่ยงพระเจ้าข้า" />
          <DialogueBlock number="23" question="ก็สิ่งใดไม่เที่ยง สิ่งนั้นเป็นทุกข์หรือเป็นสุขเล่า" answer="เป็นทุกข์พระเจ้าข้า" />
          <DialogueBlock number="24" question={<>ก็สิ่งใดไม่เที่ยง เป็นทุกข์ มีความแปรปรวนเป็นธรรมดา<br />ควรหรือหนอ ที่จะตามเห็นสิ่งนั้น ว่านั่นเป็นของเรา เป็นเรา เป็นตัวตนของเรา</>} answer="ไม่ควรเห็นอย่างนั้นพระเจ้าข้า" />
        </IntrospectionCard>

        {/* ส่วนสรุป: การบรรลุธรรม */}
        <div className="mt-16">
          <IntrospectionCard highlight={true}>
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaQuoteLeft className="text-emerald-200 text-4xl opacity-50" />
              <p className="text-2xl md:text-3xl font-medium leading-relaxed text-white">
                อริยสาวกผู้ได้สดับแล้วเห็นอยู่อย่างนี้
              </p>
              
              <div className="bg-white/10 p-8 rounded-3xl border border-white/20 w-full text-left space-y-6 text-xl">
                <p>ย่อมเบื่อหน่ายทั้งในจักษุ ทั้งในรูป ทั้งในจักษุวิญญาณ ทั้งในจักษุสัมผัส ทั้งในเวทนา สัญญา สังขาร วิญญาณ ที่เกิดขึ้นเพราะจักษุสัมผัสเป็นปัจจัย</p>
                <p>ย่อมเบื่อหน่ายทั้งในใจ ทั้งในธรรมารมณ์ ทั้งในมโนวิญญาณ ทั้งในมโนสัมผัส ทั้งในเวทนา สัญญา สังขาร วิญญาณ ที่เกิดขึ้นเพราะมโนสัมผัสเป็นปัจจัย</p>
                <p className="text-emerald-200 font-bold text-2xl border-t border-white/10 pt-4">เมื่อเบื่อหน่ายย่อมคลายกำหนัด เพราะคลายกำหนัดจิตย่อมหลุดพ้น เมื่อจิตหลุดพ้นแล้ว ย่อมมีญาณหยั่งรู้ว่าหลุดพ้นแล้ว</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-left">
                {["รู้ชัดว่าชาติสิ้นแล้ว", "พรหมจรรย์อยู่จบแล้ว", "กิจที่ควรทำ ทำเสร็จแล้ว", "กิจอื่นเพื่อความเป็นอย่างนี้มิได้มี"].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-emerald-700/50 p-4 rounded-xl border border-emerald-500/30">
                    <FaCheckDouble className="text-emerald-300" />
                    <span className="text-lg">{text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-900 p-8 rounded-3xl w-full space-y-6 text-emerald-100 text-lg md:text-xl leading-relaxed">
                <p>พระผู้มีพระภาคเจ้า ตรัสพระสูตรนี้จบลงแล้ว ท่านพระราหุลชื่นชมยินดี พระภาษิตของพระผู้มีพระภาคเจ้า</p>
                <p className="text-white font-bold text-2xl">อนึ่งเมื่อพระผู้มีพระภาคเจ้า ตรัสไวยากรณ์ภาษิตนี้อยู่ จิตของท่านพระราหุลหลุดพ้นแล้ว จากอาสวะไม่ถือมั่นด้วยอุปาทาน</p>
                <div className="pt-4 border-t border-white/10">
                  <p className="flex items-center justify-center gap-2 text-amber-400 font-bold mb-2"><FaCloud /> ฝ่ายเทวดาหลายพัน ก็เกิดธรรมจักษุ</p>
                  <p className="text-center italic">"ว่าสิ่งใดสิ่งหนึ่ง มีความเกิดขึ้นเป็นธรรมดา สิ่งนั้นทั้งมวลล้วนมีความดับไปเป็นธรรมดา"</p>
                </div>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/extra/anicca-dukkha-anatta/lesson-12" 
            className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-emerald-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: ว่าด้วยควรเป็นผู้มีสติสัมปชัญญะ
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}