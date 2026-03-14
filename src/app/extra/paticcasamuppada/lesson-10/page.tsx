// src/app/extra/paticcasamuppada/lesson-10/page.tsx
import IntrospectionCard from '@/components/ui/IntrospectionCard';
import Link from 'next/link';
import {
  FaArrowRight,
  FaTree,
  FaHandsPraying,
  FaMagnifyingGlass,
  FaLink,
  FaFireBurner,
  FaQuoteLeft,
  FaCircleCheck,
  FaCircleQuestion,
  FaCommentDots,
  FaUsers,
} from 'react-icons/fa6';

export default function PaticcasamuppadaLesson10() {
  const dialogues = [
    {
      speaker: 'พระพุทธเจ้าทรงตรัสถามภิกษุทั้งหลายว่า',
      question: 'ภิกษุผู้ขีณาสพพึงทำกรรมเป็นบุญบ้าง ทำกรรมเป็นบาปบ้าง ทำกรรมเป็นเนญชาบ้างหรือหนอ',
      responder: 'ภิกษุทั้งหลายทูลตอบว่า',
      answer: 'ไม่เป็นอย่างนั้นพระเจ้าข้า',
    },
    {
      speaker: 'พระพุทธเจ้าทรงตรัสถามภิกษุทั้งหลายต่อไปว่า',
      question:
        'ก็อีกอย่างหนึ่งเมื่อสังขารไม่มี โดยประการทั้งปวง เพราะสังขารดับวิญญาณพึงปรากฎหรือหนอ',
      responder: 'ภิกษุทั้งหลายทูลตอบว่า',
      answer: 'ไม่เป็นอย่างนั้นพระเจ้าข้า',
    },
    {
      speaker: 'พระพุทธเจ้าทรงตรัสถามภิกษุทั้งหลายต่อไปว่า',
      question:
        'ก็อีกอย่างหนึ่งเมื่อวิญญาณไม่มี โดยประการทั้งปวง เพราะวิญญาณดับนามรูปพึงปรากฎหรือหนอ',
      responder: 'ภิกษุทั้งหลายทูลตอบว่า',
      answer: 'ไม่เป็นอย่างนั้นพระเจ้าข้า',
    },
    {
      speaker: 'พระพุทธเจ้าทรงตรัสถามภิกษุทั้งหลายต่อไปว่า',
      question:
        'ก็อีกอย่างหนึ่งเมื่อนามรูปไม่มี โดยประการทั้งปวง เพราะนามรูปดับสฬายตนะพึงปรากฎหรือหนอ',
      responder: 'ภิกษุทั้งหลายทูลตอบว่า',
      answer: 'ไม่เป็นอย่างนั้นพระเจ้าข้า',
    },
    {
      speaker: 'พระพุทธเจ้าทรงตรัสถามภิกษุทั้งหลายต่อไปว่า',
      question:
        'ก็อีกอย่างหนึ่งเมื่อสฬายตนะไม่มี โดยประการทั้งปวง เพราะสฬายตนะดับผัสสะพึงปรากฏหรือหนอ',
      responder: 'ภิกษุทั้งหลายทูลตอบว่า',
      answer: 'ไม่เป็นอย่างนั้นพระเจ้าข้า',
    },
    {
      speaker: 'พระพุทธเจ้าทรงตรัสถามภิกษุทั้งหลายต่อไปว่า',
      question: 'ก็อีกอย่างหนึ่งเมื่อผัสสะไม่มี โดยประการทั้งปวง เพราะผัสสะดับเวทนาพึงปรากฏหรือหนอ',
      responder: 'ภิกษุทั้งหลายทูลตอบว่า',
      answer: 'ไม่เป็นอย่างนั้นพระเจ้าข้า',
    },
    {
      speaker: 'พระพุทธเจ้าทรงตรัสถามภิกษุทั้งหลายต่อไปว่า',
      question: 'ก็อีกอย่างหนึ่งเมื่อเวทนาไม่มี โดยประการทั้งปวง เพราะเวทนาดับตัณหาพึงปรากฏหรือหนอ',
      responder: 'ภิกษุทั้งหลายทูลตอบว่า',
      answer: 'ไม่เป็นอย่างนั้นพระเจ้าข้า',
    },
    {
      speaker: 'พระพุทธเจ้าทรงตรัสถามภิกษุทั้งหลายต่อไปว่า',
      question: 'ก็อีกอย่างหนึ่งเมื่อเวทนาไม่มี โดยประการทั้งปวง เพราะเวทนาดับตัณหาพึงปรากฏหรือหนอ',
      responder: 'ภิกษุทั้งหลายทูลตอบว่า',
      answer: 'ไม่เป็นอย่างนั้นพระเจ้าข้า',
    },
    {
      speaker: 'พระพุทธเจ้าทรงตรัสถามภิกษุทั้งหลายต่อไปว่า',
      question:
        'ก็อีกอย่างหนึ่งเมื่อตัณหาไม่มี โดยประการทั้งปวง เพราะตัณหาดับอุปาทานพึงปรากฏหรือหนอ',
      responder: 'ภิกษุทั้งหลายทูลตอบว่า',
      answer: 'ไม่เป็นอย่างนั้นพระเจ้าข้า',
    },
    {
      speaker: 'พระพุทธเจ้าทรงตรัสถามภิกษุทั้งหลายต่อไปว่า',
      question:
        'ก็อีกอย่างหนึ่งเมื่ออุปาทานไม่มี โดยประการทั้งปวง เพราะอุปาทานดับภพพึงปรากฏหรือหนอ',
      responder: 'ภิกษุทั้งหลายทูลตอบว่า',
      answer: 'ไม่เป็นอย่างนั้นพระเจ้าข้า',
    },
    {
      speaker: 'พระพุทธเจ้าทรงตรัสถามภิกษุทั้งหลายต่อไปว่า',
      question: 'ก็อีกอย่างหนึ่งเมื่อภพไม่มี โดยประการทั้งปวง เพราะภพดับชาติพึงปรากฏหรือหนอ',
      responder: 'ภิกษุทั้งหลายทูลตอบว่า',
      answer: 'ไม่เป็นอย่างนั้นพระเจ้าข้า',
    },
    {
      speaker: 'พระพุทธเจ้าทรงตรัสถามภิกษุทั้งหลายต่อไปว่า',
      question:
        'ก็อีกอย่างหนึ่งเมื่อชาติไม่มี โดยประการทั้งปวง เพราะชาติดับชราและมรณะพึงปรากฏหรือหนอ',
      responder: 'ภิกษุทั้งหลายทูลตอบว่า',
      answer: 'ไม่เป็นอย่างนั้นพระเจ้าข้า',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-bold tracking-widest uppercase text-sm">
            วิปัสสนาภาวนาเพิ่มเติม
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">
            ปริวีมังสนสูตร
          </h2>
          <p className="text-slate-500 text-lg italic">
            ว่าด้วยการพิจารณา เพื่อความสิ้นทุกข์โดยชอบ
          </p>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนที่ 1: บทนำ */}
        <IntrospectionCard>
          <div className="flex items-center gap-3 mb-6 text-cyan-700 border-b pb-4">
            <FaTree className="text-2xl" />
            <h3 className="text-2xl font-bold">ณ พระวิหารเชตวัน</h3>
          </div>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700 italic">
            <p>
              ข้าพเจ้าสดับมาแล้วอย่างนี้ สมัยหนึ่งพระผู้มีพระภาค ประทับอยู่ ณ พระวิหารเชตวัน
              อารามของท่านอนาถบิณฑิกเศรษฐี เขตพระนครสาวัตถี
            </p>
            <p>
              ณ ที่นั้นแลพระผู้มีพระภาค ตรัสเรียกภิกษุทั้งหลายว่า ดูกรภิกษุทั้งหลาย
              ภิกษุเหล่านั้นทูลรับพระผู้มีพระภาคว่า พระพุทธเจ้าข้า พระผู้มีพระภาคได้ตรัสว่า
            </p>

            <div className="bg-cyan-50 p-8 rounded-3xl border-l-4 border-cyan-500 not-italic shadow-inner">
              <p className="text-cyan-900 font-bold mb-4 flex items-center gap-2">
                <FaHandsPraying /> ดูกรภิกษุทั้งหลาย
              </p>
              <p className="text-2xl text-slate-800 leading-relaxed">
                ด้วยเหตุเท่าไรหนอแล ภิกษุเมื่อพิจารณาพึงพิจารณา เพื่อความสิ้นทุกข์โดยชอบ
                โดยประการทั้งปวง
              </p>
            </div>

            <p>
              ภิกษุเหล่านั้นทูลว่าพระพุทธเจ้าข้า ธรรมทั้งหลายของพวกข้าพระองค์
              มีพระผู้มีพระภาคเป็นที่ตั้ง มีพระผู้มีพระภาคเป็นผู้นำ มีพระผู้มีพระภาคเป็นที่พึ่ง
              ได้โปรดเถิดพระพุทธเจ้าข้า ขอเนื้อความแห่งภาษิตนี้จงแจ่มแจ้ง กะพระผู้มีพระภาคเถิด
              ภิกษุทั้งหลายได้ฟัง ต่อพระผู้มีพระภาคแล้ว จะทรงจำไว้
            </p>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 2: การพิจารณาสืบสาวเหตุปัจจัย */}
        <div className="my-16 space-y-10">
          <h4 className="text-center text-slate-400 font-medium uppercase tracking-widest">
            การพิจารณาโดยแยบคาย
          </h4>

          {/* พิจารณาชราและมรณะ */}
          <IntrospectionCard>
            <div className="flex items-center gap-3 mb-6 text-cyan-700">
              <FaMagnifyingGlass />
              <h4 className="text-xl font-bold">พิจารณาชราและมรณะ</h4>
            </div>
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <p className="italic text-slate-500">
                ดูกรภิกษุทั้งหลายภิกษุในธรรมวินัยนี้ เมื่อพิจารณาย่อมพิจารณาว่า ทุกข์คือชราและมรณะ
                มีประการต่างๆมากมายเกิดขึ้นในโลก ทุกข์นี้มีอะไรเป็นเหตุ มีอะไรเป็นสมุทัย
                มีอะไรเป็นกรรม มีอะไรเป็นแดนเกิดหนอแล เมื่ออะไรมีชราและมรณะจึงมี
                เมื่ออะไรไม่มีชราและมรณะจึงไม่มี
              </p>
              <div className="bg-cyan-50 p-6 rounded-2xl border border-cyan-100">
                <p className="font-bold text-cyan-900">
                  ภิกษุนั้นพิจารณาอยู่ย่อมรู้ประจักษ์ว่า ทุกข์คือชราและมรณะ... มีชาติเป็นเหตุ
                  มีชาติเป็นสมุทัย มีชาติเป็นกำเนิด มีชาติเป็นแดนเกิด เมื่อชาติมีชราและมรณะจึงมี
                  เมื่อชาติไม่มีชราและมรณะจึงไม่มี
                </p>
              </div>
              <p className="text-center font-bold text-emerald-600">
                ภิกษุนี้เราเรียกว่า เป็นผู้ปฏิบัติเพื่อความสิ้นทุกข์โดยชอบ โดยประการทั้งปวง
                เพื่อความดับแห่งชราและมรณะ
              </p>
            </div>
          </IntrospectionCard>

          {/* พิจารณาชาติ */}
          <IntrospectionCard>
            <div className="flex items-center gap-3 mb-6 text-cyan-700">
              <FaMagnifyingGlass />
              <h4 className="text-xl font-bold">พิจารณาชาติ</h4>
            </div>
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <p className="italic text-slate-500">
                อีกประการหนึ่ง ภิกษุเมื่อพิจารณาย่อมพิจารณาว่า ก็ชาตินี้มีอะไรเป็นเหตุ
                มีอะไรเป็นสมุทัย มีอะไรเป็นกำเนิด มีอะไรเป็นแดนเกิด เมื่ออะไรมี ชาติจึงมี
                เมื่ออะไรไม่มี ชาติจึงไม่มี
              </p>
              <div className="bg-cyan-50 p-6 rounded-2xl border border-cyan-100">
                <p className="font-bold text-cyan-900">
                  ภิกษุนั้นพิจารณาอยู่ย่อมรู้ประจักษ์ว่า ชาติมีภพเป็นเหตุ มีภพเป็นสมุทัย
                  มีภพเป็นกำเนิด มีภพเป็นแดนเกิด เมื่อภพมีชาติจึงมี เมื่อภพไม่มีชาติจึงไม่มี
                </p>
              </div>
              <p className="text-center font-bold text-emerald-600">
                ภิกษุนี้เราเรียกว่า เป็นผู้ปฏิบัติเพื่อความสิ้นทุกข์โดยชอบ โดยประการทั้งปวง
                เพื่อความดับแห่งชาติ
              </p>
            </div>
          </IntrospectionCard>

          {/* พิจารณาสังขารและอวิชชา */}
          <IntrospectionCard>
            <div className="flex items-center gap-3 mb-6 text-cyan-700">
              <FaMagnifyingGlass />
              <h4 className="text-xl font-bold">พิจารณาสังขาร</h4>
            </div>
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <p className="text-slate-400 text-sm italic mb-4">
                อีกประการหนึ่งภิกษุเมื่อพิจารณา ย่อมพิจารณาว่า ก็ภพนี้มีอะไรเป็นเหตุ ฯลฯ
                ก็อุปาทานนี้มีอะไรเป็นเหตุ ฯลฯ ก็ตัณหานี้มีอะไรเป็นเหตุ ฯลฯ
                ก็เวทนานี้มีอะไรเป็นเหตุ​ ฯลฯ ก็ผัสสะนี้มีอะไรเป็นเหตุ ฯลฯ
                ก็สฬายตนะนี้มีอะไรเป็นเหตุ ฯลฯ ก็นามรูปนี้มีอะไรเป็นเหตุ ฯลฯ
                ก็วิญญาณนี้มีอะไรเป็นเหตุ ฯลฯ
              </p>
              <p className="italic text-slate-500">
                ก็สังขารนี้มีอะไรเป็นเหตุ มีอะไรเป็นสมุทัย มีอะไรเป็นกำเนิด มีอะไรเป็นแดนเกิด
                เมื่ออะไรมีสังขารจึงมี เมื่ออะไรไม่มีสังขารจึงไม่มี
              </p>
              <div className="bg-cyan-50 p-6 rounded-2xl border border-cyan-100">
                <p className="font-bold text-cyan-900">
                  ภิกษุนั้นเมื่อพิจารณาย่อมรู้ประจักษ์ว่า สังขารมีอวิชชาเป็นเหตุ
                  มีอวิชชาเป็นสมุทัยมีอวิชชาเป็นกำเนิด มีอวิชชาเป็นแดนเกิด เมื่ออวิชามีสังขารจึงมี
                  เมื่ออวิชชาไม่มีสังขารจึงไม่มี
                </p>
              </div>
              <p className="text-center font-bold text-emerald-600">
                ภิกษุนี้เราเรียกว่า เป็นผู้ปฏิบัติเพื่อความสิ้นทุกข์โดยชอบ โดยประการทั้งปวง
                เพื่อความดับแห่งสังขาร
              </p>
            </div>
          </IntrospectionCard>
        </div>

        {/* ส่วนที่ 3: วิชชาเกิดขึ้นและการปรินิพพาน */}
        <IntrospectionCard highlight={true} className="bg-cyan-600 shadow-cyan-200">
          <div className="flex flex-col items-center text-center space-y-8 py-4">
            <FaLink className="text-5xl text-cyan-200" />
            <div className="space-y-8 text-xl md:text-2xl leading-relaxed text-white">
              <p>
                ดูกรภิกษุทั้งหลาย บุคคลตกอยู่ในอวิชชา สังขารที่เป็นบุญปรุงแต่ง วิญญาณก็เข้าถึงบุญ
                ถ้าสังขารที่เป็นบาปปรุงแต่ง วิญญาณก็เข้าถึงบาป ถ้าสังขารที่เป็นอเนญชาปรุงแต่ง
                วิญญาณก็เข้าถึงอเนญชา
              </p>

              <div className="bg-white/10 p-8 rounded-[2.5rem] border border-white/20 shadow-2xl">
                <p className="text-2xl md:text-3xl font-bold text-white mb-6">
                  ในกาลใดแลภิกษุละอวิชชาได้แล้ว วิชชาเกิดขึ้นแล้วในกาลนั้น
                </p>
                <p className="text-cyan-50">
                  ภิกษุนั้นก็ไม่ทำกรรมเป็นบุญ ไม่ทำกรรมเป็นบาป ไม่ทำการเป็นอเนญชา
                  เพราะสำรอกอวิชชาเสีย เพราะมีวิชชาเกิดขึ้น เมื่อไม่ทำเมื่อไม่คิด
                  ก็ไม่ถือมั่นอะไรๆในโลก เมื่อไม่ถือมั่นก็ไม่สะดุ้งกลัว
                  เมื่อไม่สะดุ้งกลัวก็ปรินิพพาน
                </p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-lg">
                  <p className="flex items-center gap-2">
                    <FaCircleCheck className="text-amber-300" /> รู้ชัดว่าชาติสิ้นแล้ว
                  </p>
                  <p className="flex items-center gap-2">
                    <FaCircleCheck className="text-amber-300" /> พรหมจรรย์อยู่จบแล้ว
                  </p>
                  <p className="flex items-center gap-2">
                    <FaCircleCheck className="text-amber-300" /> กิจที่ควรทำ ทำเสร็จแล้ว
                  </p>
                  <p className="flex items-center gap-2">
                    <FaCircleCheck className="text-amber-300" /> กิจอื่นเพื่อความเป็นอย่างนี้มิได้มี
                  </p>
                </div>
              </div>
            </div>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 4: การเสวยเวทนาอย่างวางใจเฉย */}
        <div className="my-16">
          <IntrospectionCard>
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <p className="font-bold text-cyan-700">การเสวยเวทนาด้วยปัญญา</p>
              <p>
                ภิกษุนั้นถ้าเสวยสุขเวทนา ก็รู้ชัดว่าสุขเวทนานั้นไม่เที่ยง
                อันตนไม่ยึดถือแล้วด้วยตัณหา อันตนไม่เพลิดเพลินแล้วด้วยตัณหา
                ถ้าเสวยไม่ทุกข์ไม่สุขเวทนา ก็รู้ชัดว่าไม่ทุกข์ไม่สุขเวทนานั้นไม่เที่ยง
                อันตนไม่ยึดถือแล้วด้วยตัณหา อันตนไม่เพลิดเพลินแล้วด้วยตัณหา
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-slate-300">
                <p className="font-bold text-slate-800">
                  ภิกษุนั้นถ้าเสวยสุขเวทนา ก็วางใจเฉยเสวยไป ถ้าเสวยทุกขเวทนา ก็วางใจเฉยเสวยไป
                  ถ้าเสวยไม่ทุกข์ไม่สุขเวทนา ก็วางใจเฉยเสวยไป
                </p>
              </div>
              <p>
                ภิกษุนั้นเมื่อเสวยเวทนาที่ปรากฏทางกาย ก็รู้ชัดว่าเราเสวยเวทนาที่ปรากฏทางกาย
                เมื่อเสวยเวทนาที่ปรากฏทางชีวิต ก็รู้ชัดว่าเราเสวยเวทนาที่ปรากฏทางชีวิต
                ก็รู้ชัดว่าเวทนาทั้งปวง อันตัณหาไม่เพลิดเพลินแล้ว จักเป็นของเย็น
                สรีระธาตุจักเหลืออยู่ในโลกนี้เท่านั้น เบื้องหน้าตั้งแต่สิ้นชีวิต เพราะความแตกแห่งกาย
              </p>
            </div>
          </IntrospectionCard>
        </div>

        {/* ส่วนที่ 5: อุปมาหม้อร้อน */}
        <div className="my-16">
          <IntrospectionCard>
            <div className="flex gap-6 items-start">
              <FaQuoteLeft className="text-cyan-200 text-5xl flex-shrink-0" />
              <div className="space-y-6 text-xl leading-relaxed text-slate-700">
                <div className="flex items-center gap-3 text-amber-700 font-bold text-2xl">
                  <FaFireBurner className="animate-pulse" /> อุปมาหม้อร้อน
                </div>
                <p>
                  ดูกรภิกษุทั้งหลาย บุรุษยกหม้อที่ยังร้อนออกจากเตาเผา เมื่อวางไว้ที่พื้นดินอันเรียบ
                  ไออุ่นที่หม้อนั้นพึงหายไป กระเบื้องหม้อยังเหลืออยู่ที่พื้นดินนั้นนั่นแหละ
                </p>
                <div className="bg-slate-900 text-cyan-100 p-8 rounded-3xl shadow-2xl">
                  <p className="text-center leading-relaxed">
                    แม้ฉันใดภิกษุทั้งหลาย ภิกษุเมื่อเสวยเวทนาที่ปรากฏทางกาย
                    ก็รู้ชัดว่าเราเสวยเวทนาที่ปรากฏทางกาย เมื่อเสวยเวทนาที่ปรากฏทางชีวิต
                    ก็รู้ชัดว่าเราเสวยเวทนาที่ปรากฏทางชีวิต <br />
                    <span className="block mt-6 text-white font-bold text-2xl md:text-3xl underline decoration-cyan-500 underline-offset-8">
                      ก็รู้ชัดว่าเวทนาทั้งปวง อันตัณหาไม่เพลิดเพลินแล้ว จะเป็นของเย็น
                      สรีระธาตุจักเหลืออยู่ในโลกนี้เท่านั้น เบื้องหน้าตั้งแต่สิ้นชีวิต
                      เพราะความแตกแห่งกายฉันนั้นเหมือนกัน
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* ส่วนที่ 6: ปุจฉา-วิสัชนา (Q&A) */}
        <div className="my-16 space-y-8">
          <h4 className="text-center text-slate-400 font-medium uppercase tracking-widest mb-10">
            บทสนทนาธรรมย้ำเตือนสติ
          </h4>

          <div className="space-y-12">
            <p className="text-center italic text-slate-500 text-xl">
              ดูกรภิกษุทั้งหลาย พวกเธอจะสำคัญความข้อนั้นเป็นไฉน
            </p>

            {dialogues.map((item, idx) => (
              <div key={idx} className="space-y-4">
                {/* คำถามของพระพุทธเจ้า */}
                <div className="bg-cyan-50 p-6 md:p-8 rounded-3xl border-l-4 border-cyan-500 shadow-sm">
                  <p className="text-cyan-700 font-bold text-sm mb-3 flex items-center gap-2">
                    <FaCommentDots /> {item.speaker}
                  </p>
                  <p className="text-xl md:text-2xl text-slate-800 leading-relaxed">
                    {item.question}
                  </p>
                </div>

                {/* คำตอบของภิกษุทั้งหลาย */}
                <div className="flex justify-end mr-4 md:mr-8">
                  <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-md relative max-w-[85%]">
                    <div className="absolute -right-2 top-4 w-4 h-4 bg-white border-r border-t border-slate-100 rotate-[45deg]"></div>
                    <p className="text-slate-500 text-sm mb-2 flex items-center gap-2">
                      <FaUsers /> {item.responder}
                    </p>
                    <p className="text-xl md:text-2xl font-bold text-cyan-900">"{item.answer}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ส่วนที่ 7: บทสรุปปิดท้าย */}
        <IntrospectionCard highlight={true} className="bg-emerald-700">
          <div className="text-center space-y-6 py-4">
            <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
              "ดีละๆภิกษุทั้งหลาย พวกเธอจงสำคัญ จงเชื่อซึ่งข้อนั้นไว้อย่างนั้นเถิด
              พวกเธอจงน้อมใจไปสู่ข้อนั้นอย่างนั้นเถิด"
            </p>
            <div className="w-16 h-1 bg-white/30 mx-auto"></div>
            <p className="text-xl md:text-2xl text-emerald-100 font-medium italic">
              จงหมดความเคลือบแคลงสงสัยในข้อนั้นเถิด นั่นเป็นที่สุดทุกข์
            </p>
          </div>
        </IntrospectionCard>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link
            href="/extra/paticcasamuppada/lesson-11"
            className="inline-flex items-center gap-3 bg-cyan-600 hover:bg-cyan-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-cyan-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: สัมมสนสูตรที่ 2
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
