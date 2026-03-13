// src/app/extra/anicca-dukkha-anatta/lesson-08/page.tsx
import IntrospectionCard from "@/components/ui/IntrospectionCard";
import Link from "next/link";
import { 
  FaArrowRight, 
  FaQuoteLeft, 
  FaCheckDouble,
  FaCommentDots,
  FaUser
} from "react-icons/fa6";

export default function ExtraLesson08() {
  // ฟังก์ชันช่วยจัดรูปแบบบทสนทนา (คงเนื้อหาเดิมทุกตัวอักษร)
  const DialogueBlock = ({ question, answer, number }: { question: React.ReactNode, answer: string, number: string }) => (
    <div className="mb-10 last:mb-0">
      <div className="flex items-start gap-3 mb-4">
        <span className="flex-none w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
          {number}
        </span>
        <div className="flex-grow">
          <p className="text-emerald-700 font-bold mb-2 flex items-center gap-2">
            <FaCommentDots className="opacity-50" /> พระพุทธเจ้า ทรงตรัสถาม พระอานนท์ว่า
          </p>
          <p className="text-xl md:text-2xl text-slate-800 leading-relaxed pl-4 border-l-2 border-emerald-100">
            {question}
          </p>
        </div>
      </div>
      <div className="flex items-start gap-3 ml-8 md:ml-12">
        <div className="flex-grow bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100">
          <p className="text-slate-500 font-medium mb-1 flex items-center gap-2 text-sm">
            <FaUser className="opacity-50" /> พระอานนท์ตอบว่า
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
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">ทรงแสดงธรรมเพื่อความเป็นผู้อยู่ผู้เดียว</h2>
          <p className="text-slate-500 text-lg italic">บทสนทนาธรรมระหว่างพระพุทธเจ้าและพระอานนท์</p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนที่ 1: พิจารณาจักษุและรูป */}
        <IntrospectionCard title="การพิจารณาทางจักษุ">
          <DialogueBlock 
            number="1"
            question="จักษุเที่ยงหรือไม่เที่ยง"
            answer="ไม่เที่ยงพระเจ้าข้า"
          />
          <DialogueBlock 
            number="2"
            question="ก็สิ่งใดไม่เที่ยง สิ่งนั้นเป็นทุกข์ หรือเป็นสุขเล่า"
            answer="เป็นทุกข์พระเจ้าข้า"
          />
          <DialogueBlock 
            number="3"
            question={<>ก็สิ่งใดไม่เที่ยง เป็นทุกข์ มีความแปรปรวน เป็นธรรมดา<br />ควรหรือหนอ ที่จะตามเห็นสิ่งนั้น ว่านั่นเป็นของเรา เป็นเรา เป็นตัวตนของเรา</>}
            answer="ไม่ควรเห็นอย่างนั้น พระเจ้าข้า"
          />
          <hr className="my-10 border-emerald-50" />
          <DialogueBlock 
            number="4"
            question="รูปเที่ยงหรือไม่เที่ยง"
            answer="ไม่เที่ยงพระเจ้าข้า"
          />
          <DialogueBlock 
            number="5"
            question="ก็สิ่งใดไม่เที่ยง สิ่งนั้นเป็นทุกข์ หรือเป็นสุขเล่า"
            answer="เป็นทุกข์พระเจ้าข้า"
          />
          <DialogueBlock 
            number="6"
            question={<>ก็สิ่งใดไม่เที่ยง เป็นทุกข์ มีความแปรปรวน เป็นธรรมดา<br />ควรหรือหนอ ที่จะตามเห็นสิ่งนั้น ว่านั่นเป็นของเรา เป็นเรา เป็นตัวตนของเรา</>}
            answer="ไม่ควรเห็นอย่างนั้น พระเจ้าข้า"
          />
        </IntrospectionCard>

        {/* ส่วนที่ 2: พิจารณาจักษุวิญญาณและเวทนา */}
        <IntrospectionCard title="การพิจารณาผลต่อเนื่องทางจักษุ">
          <DialogueBlock 
            number="7"
            question={<>จักษุวิญญาณ จักษุสัมผัส สุขเวทนา ทุกขเวทนา หรือไม่ทุกข์ไม่สุขเวทนา<br />ที่เกิดขึ้น เพราะจักษุสัมผัส เป็นปัจจัยเที่ยงหรือไม่เที่ยง</>}
            answer="ไม่เที่ยงพระเจ้าข้า"
          />
          <DialogueBlock 
            number="8"
            question="ก็สิ่งใดไม่เที่ยง สิ่งนั้นเป็นทุกข์หรือเป็นสุขเล่า"
            answer="เป็นทุกข์พระเจ้าข้า"
          />
          <DialogueBlock 
            number="9"
            question={<>ก็สิ่งใดไม่เที่ยง เป็นทุกข์ มีความแปรปรวน เป็นธรรมดา<br />ควรหรือหนอ ที่จะตามเห็นสิ่งนั้น ว่านั่นเป็นของเรา เป็นเรา เป็นตัวตนของเรา</>}
            answer="ไม่ควรเห็นอย่างนั้น พระเจ้าข้า"
          />
        </IntrospectionCard>

        {/* ส่วนที่ 3: พิจารณาใจและธรรมารมณ์ */}
        <IntrospectionCard title="การพิจารณาทางใจ">
          <DialogueBlock 
            number="10"
            question="ใจเที่ยงหรือไม่เที่ยง"
            answer="ไม่เที่ยงพระเจ้าข้า"
          />
          <DialogueBlock 
            number="11"
            question="ก็สิ่งใดไม่เที่ยง สิ่งนั้นเป็นทุกข์ หรือเป็นสุขเล่า"
            answer="เป็นทุกข์พระเจ้าข้า"
          />
          <DialogueBlock 
            number="12"
            question={<>ก็สิ่งใดไม่เที่ยง เป็นทุกข์ มีความแปรปรวน เป็นธรรมดา<br />ควรหรือหนอ ที่จะตามเห็นสิ่งนั้น ว่านั่นเป็นของเรา เป็นเรา เป็นตัวตนของเรา</>}
            answer="ไม่ควรเห็นอย่างนั้น พระเจ้าข้า"
          />
          <hr className="my-10 border-emerald-50" />
          <DialogueBlock 
            number="13"
            question="ธรรมารมณ์ เที่ยงหรือไม่เที่ยง"
            answer="ไม่เที่ยงพระเจ้าข้า"
          />
          <DialogueBlock 
            number="14"
            question="ก็สิ่งใดไม่เที่ยง สิ่งนั้นเป็นทุกข์ หรือเป็นสุขเล่า"
            answer="เป็นทุกข์พระเจ้าข้า"
          />
          <DialogueBlock 
            number="15"
            question={<>ก็สิ่งใดไม่เที่ยง เป็นทุกข์ มีความแปรปรวน เป็นธรรมดา<br />ควรหรือหนอ ที่จะตามเห็นสิ่งนั้น ว่านั่นเป็นของเรา เป็นเรา เป็นตัวตนของเรา</>}
            answer="ไม่ควรเห็นอย่างนั้น พระเจ้าข้า"
          />
        </IntrospectionCard>

        {/* ส่วนที่ 4: พิจารณามโนวิญญาณและเวทนา */}
        <IntrospectionCard title="การพิจารณาผลต่อเนื่องทางใจ">
          <DialogueBlock 
            number="16"
            question={<>มโนวิญญาณ มโนสัมผัส สุขเวทนา ทุกขเวทนา หรือไม่ทุกข์ไม่สุขเวทนา<br />ที่เกิดขึ้น เพราะมโนสัมผัส เป็นปัจจัยเที่ยง หรือไม่เที่ยง</>}
            answer="ไม่เที่ยงพระเจ้าข้า"
          />
          <DialogueBlock 
            number="17"
            question={<>ก็สิ่งใดไม่เที่ยง<br />สิ่งนั้นเป็นทุกข์ หรือเป็นสุขเล่า</>}
            answer="เป็นทุกข์พระเจ้าข้า"
          />
          <DialogueBlock 
            number="18"
            question={<>ก็สิ่งใดไม่เที่ยง เป็นทุกข์ มีความแปรปรวน เป็นธรรมดา<br />ควรหรือหนอ ที่จะตามเห็นสิ่งนั้น ว่านั่นเป็นของเรา เป็นเรา เป็นตัวตนของเรา</>}
            answer="ไม่ควรเห็นอย่างนั้น พระเจ้าข้า"
          />
        </IntrospectionCard>

        {/* ส่วนสรุป: การหลุดพ้นของอริยสาวก */}
        <div className="mt-16">
          <IntrospectionCard highlight={true}>
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaQuoteLeft className="text-emerald-200 text-4xl opacity-50" />
              <p className="text-2xl md:text-3xl font-medium leading-relaxed text-white">
                อริยสาวก ผู้ได้สดับแล้วเห็นอยู่อย่างนี้
              </p>
              
              <div className="bg-white/10 p-8 rounded-3xl border border-white/20 w-full text-left space-y-4 text-xl">
                <p>ย่อมเบื่อหน่อยทั้งในจักษุ ทั้งในรูป ทั้งในจักษุวิญญาณ ทั้งในจักษุสัมผัส ทั้งในสุขเวทนาทุกขเวทนา หรือไม่ทุกข์ไม่สุขเวทนา ที่เกิดขึ้น เพราะอาศัยจักษุสัมผัส เป็นปัจจัยตามความเป็นจริง</p>
                <p className="text-emerald-200 font-bold">เมื่อเบื่อหน่อยย่อมคลายกำหนัด เพราะคลายกำหนัดจึงหลุดพ้น</p>
                <p className="text-2xl font-bold text-white underline decoration-amber-400 underline-offset-8">เมื่อหลุดพ้นแล้ว ย่อมมีญาณหยั่งรู้ว่าหลุดพ้นแล้ว</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-left">
                {[
                  "รู้ชัดว่าชาติสิ้นแล้ว",
                  "พรหมจรรย์อยู่จบแล้ว",
                  "กิจที่ควรทำ ทำเสร็จแล้ว",
                  "กิจอื่นเพื่อความเป็นอย่างนี้มิได้มีอีก"
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-emerald-700/50 p-4 rounded-xl border border-emerald-500/30">
                    <FaCheckDouble className="text-emerald-300" />
                    <span className="text-lg">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/extra/anicca-dukkha-anatta/lesson-09" 
            className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-emerald-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: ถ้ามีคนพึงถามอย่างนี้ว่า
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}