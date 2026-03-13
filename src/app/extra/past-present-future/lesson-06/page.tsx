// src/app/extra/past-present-future/lesson-06/page.tsx
import IntrospectionCard from "@/components/ui/IntrospectionCard";
import Link from "next/link";
import { 
  FaArrowRight, 
  FaCommentDots, 
  FaHandsPraying, 
  FaGem, 
  FaShip, 
  FaHeart, 
  FaLightbulb,
  FaCheckDouble,
  FaQuoteLeft
} from "react-icons/fa6";

export default function PastPresentFutureLesson06() {
  // ฟังก์ชันช่วยจัดรูปแบบบทสนทนา (คงเนื้อหาเดิมทุกตัวอักษร)
  const DialogueBlock = ({ question, answer, icon }: { question: React.ReactNode, answer: React.ReactNode, icon?: React.ReactNode }) => (
    <div className="mb-12 last:mb-0">
      <div className="flex items-start gap-3 mb-4">
        <div className="flex-none w-10 h-10 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center shadow-sm">
          <FaCommentDots />
        </div>
        <div className="flex-grow">
          <p className="text-slate-500 font-bold mb-2 text-sm uppercase tracking-wider">อาฬวกยักษ์ทูลถามว่า</p>
          <div className="text-xl md:text-2xl text-slate-800 leading-relaxed pl-4 border-l-2 border-slate-200">
            {question}
          </div>
        </div>
      </div>
      <div className="flex items-start gap-3 ml-6 md:ml-10">
        <div className="flex-none w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center shadow-md">
          <FaHandsPraying />
        </div>
        <div className="flex-grow bg-teal-50/50 p-6 rounded-2xl border border-teal-100 shadow-inner">
          <p className="text-teal-600 font-bold mb-2 text-sm uppercase tracking-wider">พระผู้มีพระภาคตรัสตอบว่า</p>
          <div className="text-xl md:text-2xl text-teal-900 font-bold leading-relaxed">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-teal-600 font-bold tracking-widest uppercase text-sm">วิปัสสนาภาวนาเพิ่มเติม</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">อาฬวกสูตรที่ 12</h2>
          <p className="text-slate-500 text-lg italic">อาฬวกยักษ์ถามปัญหาพระพุทธเจ้า</p>
          <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนที่ 1: ทรัพย์และชีวิตที่ประเสริฐ */}
        <IntrospectionCard>
          <div className="flex items-center gap-3 mb-8 text-teal-700 border-b pb-4">
            <FaGem className="text-2xl" />
            <h3 className="text-2xl font-bold">อาฬวกยักษ์ถามปัญหาพระพุทธเจ้า</h3>
          </div>
          <DialogueBlock 
            question={<>อะไรหนอเป็นเครื่องปลื้มใจ อันประเสริฐของคนในโลกนี้<br />อะไรหนอบุคคลประพฤติดี นำความสุขมาให้<br />อะไรหนอเป็นรสอันล้ำเลิศ กว่ารสทั้งหลาย<br />นักปราชญ์ทั้งหลายกล่าวชีวิต ของผู้ที่เป็นอยู่อย่างไรว่าประเสริฐสุดฯ</>}
            answer={<>ศรัทธาเป็นทรัพย์ อันประเสริฐของคนในโลกนี้<br />ธรรมอันบุคคลประพฤติดีแล้ว นำสุขมาให้<br />ความสัตย์แล เป็นรสอันล้ำเลิศกว่ารสทั้งหลาย<br />นักปราชญ์ทั้งหลาย กล่าวชีวิตของผู้ที่เป็นอยู่ ด้วยปัญญาว่าประเสริฐสุดฯ</>}
          />
        </IntrospectionCard>

        {/* ส่วนที่ 2: การข้ามพ้นโอฆะ */}
        <IntrospectionCard>
          <div className="flex items-center gap-3 mb-8 text-teal-700 border-b pb-4">
            <FaShip className="text-2xl" />
            <h3 className="text-2xl font-bold">การข้ามพ้นห้วงน้ำ</h3>
          </div>
          <DialogueBlock 
            question={<>คนข้ามโอฆะได้อย่างไรหนอ<br />ข้ามอรรณพได้อย่างไร ล่วงทุกข์ได้อย่างไร บริสุทธิ์ได้อย่างไร</>}
            answer={<>คนข้ามโอฆะได้ด้วยศรัทธา<br />ข้ามอรรณพได้ด้วยความไม่ประมาท<br />ล่วงทุกข์ได้ด้วยความเพียร บริสุทธิ์ได้ด้วยปัญญา</>}
          />
        </IntrospectionCard>

        {/* ส่วนที่ 3: การหาทรัพย์ ชื่อเสียง และโลกหน้า */}
        <IntrospectionCard>
          <div className="flex items-center gap-3 mb-8 text-teal-700 border-b pb-4">
            <FaLightbulb className="text-2xl" />
            <h3 className="text-2xl font-bold">ปัญญาและสันติสุข</h3>
          </div>
          <DialogueBlock 
            question={<>คนได้ปัญญาอย่างไรหนอ ทำอย่างไรจึงจะหาทรัพย์ได้<br />คนได้ชื่อเสียงอย่างไรหนอ ทำอย่างไรจึงจะผูกมิตรไว้ได้<br />คนละโลกนี้ไปสู่โลกหน้า ทำอย่างไรจึงไม่เศร้าโศกฯ</>}
            answer={<>บุคคลเชื่อธรรมของพระอรหันต์ เพื่อบรรลุนิพพาน<br />ฟังอยู่ด้วยดีย่อมได้ปัญญา เป็นผู้ไม่ประมาทมีวิจารณ์<br />คนทำเหมาะเจาะไม่ทอดธุระ เป็นผู้หมั่นย่อมหาทรัพย์ได้<br />คนย่อมได้ชื่อเสียง เพราะความสัตย์ ผู้ให้ย่อมผูกมิตรไว้ได้<br />บุคคลใดผู้อยู่ครองเรือน ประกอบด้วยศรัทธา<br />มีธรรม 4 ประการนี้ คือสัจจะ ธรรม ฐิติ จาคะ<br />บุคคลนั้นแลละโลกนี้ไป ย่อมไม่เศร้าโศก<br />เชิญถามสมณพราหมณ์เป็นอันมาก เหล่าอื่นว่า<br />โลกนี้มีอะไรยิ่งกว่า สัจจะ ธรรม จาคะ และขันติ</>}
          />
        </IntrospectionCard>

        {/* ส่วนที่ 4: ความเลื่อมใสของอาฬวกยักษ์ */}
        <div className="mt-16">
          <IntrospectionCard highlight={true}>
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaQuoteLeft className="text-teal-200 text-4xl opacity-50" />
              
              <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90">
                <p className="font-bold text-teal-100 uppercase tracking-widest text-sm">อาฬวกยักษ์ทูลถามว่า</p>
                <p>ทำไมหนอข้าพเจ้าจึงต้องถามสมณพราหมณ์เป็นอันมาก ในบัดนี้วันนี้ข้าพเจ้ารู้ชัดถึง สัมปรายิกประโยชน์ พระพุทธเจ้าเสด็จมาถึงเมืองอาฬวี</p>
                
                <div className="bg-white/10 p-8 rounded-3xl border border-white/20 shadow-2xl">
                  <p className="text-2xl md:text-3xl font-bold text-white mb-4">วันนี้ข้าพเจ้ารู้ชัด ถึงการที่บุคคลให้ในที่ใดมีผลมาก</p>
                  <p className="italic">ข้าพเจ้าจักเที่ยว จากบ้านไปสู่บ้าน จากบุรีไปสู่บุรี พลางนมัสการสัมมาสัมพุทธเจ้า และพระธรรมซึ่งเป็นธรรมที่ดีฯ</p>
                </div>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/extra/past-present-future/lesson-07" 
            className="inline-flex items-center gap-3 bg-teal-600 hover:bg-teal-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-teal-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: ขัตติยาธิปปายสูตร
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}