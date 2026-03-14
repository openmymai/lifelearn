// src/app/extra/paticcasamuppada/lesson-09/page.tsx
import IntrospectionCard from '@/components/ui/IntrospectionCard';
import Link from 'next/link';
import {
  FaArrowRight,
  FaCommentDots,
  FaHandsPraying,
  FaScaleBalanced,
  FaLightbulb,
  FaQuoteLeft,
  FaCircleCheck,
  FaArrowsRotate,
} from 'react-icons/fa6';

export default function PaticcasamuppadaLesson09() {
  // ฟังก์ชันช่วยจัดรูปแบบบทสนทนา (คงเนื้อหาเดิมทุกตัวอักษร)
  const DialogueBlock = ({
    question,
    answer,
  }: {
    question: React.ReactNode;
    answer: React.ReactNode;
  }) => (
    <div className="mb-10 last:mb-0">
      <div className="flex items-start gap-3 mb-4">
        <div className="flex-none w-10 h-10 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center shadow-sm">
          <FaCommentDots />
        </div>
        <div className="flex-grow">
          <p className="text-slate-500 font-bold mb-2 text-sm uppercase tracking-wider">
            ติมพรุกขะทูลถามว่า
          </p>
          <div className="text-xl md:text-2xl text-slate-800 leading-relaxed pl-4 border-l-2 border-slate-200">
            {question}
          </div>
        </div>
      </div>
      <div className="flex items-start gap-3 ml-6 md:ml-10">
        <div className="flex-none w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center shadow-md">
          <FaHandsPraying />
        </div>
        <div className="flex-grow bg-cyan-50/50 p-6 rounded-2xl border border-cyan-100 shadow-inner">
          <p className="text-cyan-600 font-bold mb-2 text-sm uppercase tracking-wider">
            พระผู้มีพระภาคตรัสตอบว่า
          </p>
          <div className="text-xl md:text-2xl text-cyan-900 font-bold leading-relaxed">
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
          <span className="text-cyan-600 font-bold tracking-widest uppercase text-sm">
            วิปัสสนาภาวนาเพิ่มเติม
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">
            ติมพรุกขสูตร
          </h2>
          <p className="text-slate-500 text-lg italic">ว่าด้วยสุขและทุกข์ (ธรรมสายกลาง)</p>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนที่ 1: บทนำ */}
        <IntrospectionCard>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700 italic">
            <p>
              พระผู้มีพระภาค ประทับอยู่ ณ พระวิหารเชตวัน อารามของท่านอนาถบิณฑิกเศรษฐี
              เขตพระนครสาวัตถี
            </p>
            <p>
              ครั้งนั้นแลปริพาชกชื่อว่าติมพรุกขะ เข้าไปเฝ้าพระผู้มีพระภาคถึงที่ประทับ
              ครั้นแล้วได้ปราศรัยกับพระผู้มีพระภาค ครั้นผ่านการปราศรัย พอให้ระลึกถึงกันไปแล้ว
              จึงนั่งณที่ควรส่วนข้างหนึ่ง ครั้นแล้วติมพรุกขปริพาชก ได้ทูลถามพระผู้มีพระภาคว่า
            </p>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 2: ปุจฉา-วิสัชนา รอบที่ 1 */}
        <div className="my-12 space-y-8">
          <DialogueBlock
            question="ข้าแต่ท่านพระโคดม สุขและทุกข์พวกตนกระทำเองหรือ"
            answer="อย่ากล่าวอย่างนั้นติมพรุกขะ"
          />
          <DialogueBlock
            question="สุขและทุกข์ผู้อื่นกระทำให้หรือท่านพระโคดม"
            answer="อย่ากล่าวอย่างนั้นติมพรุกขะ"
          />
          <DialogueBlock
            question="สุขและทุกข์ตนกระทำเองด้วย ผู้อื่นกระทำให้ด้วยหรือท่านพระโคดม"
            answer="อย่ากล่าวอย่างนั้นติมพรุกขะ"
          />
          <DialogueBlock
            question="สุขและทุกข์บังเกิดขึ้น เพราะอาศัยการที่มิใช่ตนเองกระทำ มิใช่ผู้อื่นกระทำให้หรือท่านพระโคดม"
            answer="อย่ากล่าวอย่างนั้นติมพรุกขะ"
          />
          <DialogueBlock
            question="สุขและทุกข์ไม่มีหรือท่านพระโคดม"
            answer="สุขและทุกข์ไม่มีหาไม่ได้ สุขและทุกข์มีอยู่ติมพรุกขะ"
          />
          <DialogueBlock
            question="ถ้าอย่างนั้นท่านพระโคดม ย่อมไม่รู้ไม่เห็นสุขและทุกข์"
            answer="เราย่อมไม่รู้ไม่เห็นสุขและทุกข์หาไม่ได้ เรารู้เห็นสุขและทุกข์อยู่ติมพรุกขะ"
          />
        </div>

        {/* ส่วนที่ 3: ติมพรุกขะทวนคำถามและคำตอบทั้งหมด (Full Text) */}
        <IntrospectionCard>
          <div className="flex items-center gap-3 mb-8 text-slate-400 border-b pb-4">
            <FaArrowsRotate className="text-2xl" />
            <h3 className="text-xl font-bold uppercase tracking-wider">ติมพรุกขะทวนความเดิม</h3>
          </div>
          <div className="space-y-8 text-xl leading-relaxed text-slate-600 italic">
            <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200 space-y-6">
              <p>
                เมื่อข้าพเจ้าถามว่า ข้าแต่ท่านพระโคดมสุขและทุกข์ ตนกระทำเองหรือ
                ท่านตรัสว่าอย่ากล่าวอย่างนั้นติมพรุกขะ
              </p>
              <p>
                เมื่อข้าพเจ้าถามว่า สุขและทุกข์ผู้อื่นกระทำให้หรือ ท่านพระโคดม ท่านตรัสว่า
                อย่ากล่าวอย่างนั้นติมพรุกขะ
              </p>
              <p>
                เมื่อข้าพเจ้าถามว่า สุขและทุกข์ตนกระทำเองด้วย ผู้อื่นกระทำให้ด้วยหรือท่านพระโคดม
                ท่านตรัสว่าอย่ากล่าวอย่างนั้นติมพรุกขะ
              </p>
              <p>
                เมื่อข้าพเจ้าถามว่าสุขและทุกข์บังเกิดขึ้น เพราะอาศัยการที่ไม่ใช่ตนเองกระทำ
                ไม่ใช่ผู้อื่นกระทำให้หรือท่านพระโคดม ท่านตรัสว่าอย่ากล่าวอย่างนั้นติมพรุกขะ
              </p>
              <p>
                เมื่อข้าพเจ้าถามว่าสุขและทุกข์ไม่มีหรือ ท่านตรัสว่าสุขและทุกข์ไม่มีหาไม่ได้
                สุขและทุกข์มีอยู่ติมพรุกขะ
              </p>
              <p>
                เมื่อข้าพเจ้าถามว่า ถ้าอย่างนั้นท่านพระโคดม ย่อมไม่รู้ไม่เห็นสุขและทุกข์ ท่านตรัสว่า
                เราย่อมไม่รู้ไม่เห็นสุขและทุกข์หาไม่ได้ เรารู้เห็นสุขและทุกข์อยู่ติมพรุกขะ
              </p>

              <div className="pt-6 border-t border-slate-200 not-italic">
                <p className="text-2xl font-bold text-slate-800 text-center">
                  "ท่านพระโคดมจงตรัสบอกสุขและทุกข์ แก่ข้าพเจ้าขอท่านพระโคดม
                  จงทรงแสดงสุขและทุกข์แก่ข้าพเจ้า"
                </p>
              </div>
            </div>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 4: พระพุทธเจ้าแสดงธรรมสายกลาง */}
        <div className="my-16">
          <IntrospectionCard highlight={true} className="bg-cyan-600 shadow-cyan-200">
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaScaleBalanced className="text-5xl text-cyan-200" />
              <div className="space-y-8 text-xl md:text-2xl leading-relaxed text-white">
                <p className="font-bold text-cyan-100 uppercase tracking-widest text-sm">
                  พระผู้มีพระภาคตรัสว่า
                </p>
                <p>
                  ดูกรติมพรุกขะ เมื่อบุคคลถืออยู่ว่านั่นเวทนา นั่นผู้เสวยดังนี้
                  แต่เราไม่กล่าวอย่างนี้ว่า สุขและทุกข์ตนกระทำเอง
                </p>
                <p>
                  เมื่อบุคคลถูกเวทนาทิ่มแทงอยู่ว่า เวทนาอย่างหนึ่งผู้เสวยเป็นอีกคนหนึ่งดังนี้
                  แต่เราไม่กล่าวอย่างนี้ว่า สุขและทุกข์ผู้อื่นกระทำให้
                </p>

                <div className="bg-white/10 p-8 rounded-[2.5rem] border border-white/20 shadow-2xl">
                  <p className="text-2xl md:text-3xl font-bold text-white mb-6">
                    ดูกรติมพรุกขะตถาคตแสดงธรรม โดยสายกลาง
                  </p>
                  <p className="text-cyan-50">ไม่เข้าไปใกล้ส่วนสุดทั้งสองนั้นว่า</p>
                  <p className="mt-4 font-bold underline decoration-cyan-300 underline-offset-8">
                    เพราะอวิชชาเป็นปัจจัยจึงมีสังขาร เพราะสังขารเป็นปัจจัยจึงมีวิญญาณ... <br />
                    ความเกิดขึ้นแห่งกองทุกข์ทั้งมวลนี้ ย่อมมีด้วยประการอย่างนี้
                  </p>
                  <p className="mt-6 italic opacity-90">
                    เพราะอวิชชานั่นแหละดับ ด้วยสำรอกโดยไม่เหลือ สังขารจึงดับ
                    เพราะสังขารดับวิญญาณจึงดับ... <br />
                    ความดับแห่งกองทุกข์ทั้งมวลนี้ ย่อมมีด้วยประการอย่างนี้
                  </p>
                </div>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* ส่วนที่ 5: ความเลื่อมใสและการถึงสรณะ */}
        <div className="mt-16">
          <IntrospectionCard>
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaLightbulb className="text-cyan-500 text-5xl animate-pulse" />
              <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-slate-700">
                <p className="font-bold text-cyan-700">ติมพรุกขะปริพาชก ได้กราบทูลว่า:</p>
                <p className="text-2xl md:text-3xl font-bold text-slate-800">
                  "ข้าแต่ท่านพระโคดม ภาษิตของพระองค์แจ่มแจ้งนัก ข้าแต่ท่านพระโคดม
                  ภาษิตของพระองค์แจ่มแจ้งนัก"
                </p>

                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 relative">
                  <FaQuoteLeft className="absolute top-4 left-4 text-slate-200 text-4xl opacity-50" />
                  <p className="italic pl-6">
                    พระผู้มีพระภาค ทรงประกาศธรรมโดยอเนกปริยาย เปรียบเหมือนบุคคล
                    หงายของที่คว่ำเปิดของที่ปิด บอกทางแก่คนหลงทาง หรือตามประทีปในที่มืด
                    ด้วยประสงค์ว่าผู้มีจักษุ จักเห็นรูปฉะนั้น
                  </p>
                </div>

                <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl space-y-4">
                  <p>ข้าพระองค์ขอถึงท่านพระโคดม กับทั้งพระธรรมและพระภิกษุสงฆ์ เป็นสรณะ</p>
                  <p className="text-cyan-400 font-bold text-2xl">
                    ขอท่านพระโคดม จงทรงจำข้าพระองค์ ว่าเป็นอุบาสกถึงผู้ถึงสรณะ
                    จนตลอดชีวิตจำเดิมแต่วันนี้เป็นต้นไป
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-widest text-sm">
                <FaCircleCheck /> ถึงสรณะตลอดชีวิต
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link
            href="/extra/paticcasamuppada/lesson-10"
            className="inline-flex items-center gap-3 bg-cyan-600 hover:bg-cyan-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-cyan-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: ปริวีมังสนสูตร
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
