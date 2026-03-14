// src/app/extra/paticcasamuppada/lesson-05/page.tsx
import IntrospectionCard from '@/components/ui/IntrospectionCard';
import Link from 'next/link';
import {
  FaArrowRight,
  FaLungs,
  FaTree,
  FaHandsPraying,
  FaCircleCheck,
  FaQuoteLeft,
  FaWind,
} from 'react-icons/fa6';

export default function PaticcasamuppadaLesson05() {
  // ข้อมูลขั้นตอนอานาปานสติ (คงเนื้อหาเดิมทุกตัวอักษร)
  const steps = [
    { label: 'หายใจออกยาว', text: 'เมื่อหายใจออกยาว ก็รู้ชัดว่าหายใจออกยาว' },
    { label: 'หายใจเข้ายาว', text: 'เมื่อหายใจเข้ายาว ก็รู้ชัดว่าหายใจเข้ายาว' },
    { label: 'หายใจออกสั้น', text: 'เมื่อหายใจออกสั้น ก็รู้ชัดว่าหายใจออกสั้น' },
    { label: 'หายใจเข้าสั้น', text: 'เมื่อหายใจเข้าสั้น ก็รู้ชัดว่าหายใจเข้าสั้น' },
    { label: 'กำหนดรู้กองลม', text: 'ย่อมสำเหนียกว่า จักกำหนดรู้กองลมทั้งปวงหายใจออก' },
    { label: 'กำหนดรู้กองลม', text: 'ย่อมสำเหนียกว่า จักกำหนดรู้กองลมทั้งปวงหายใจเข้า' },
    { label: 'ระงับกายสังขาร', text: 'ย่อมสำเหนียกว่า จักระงับกายสังขารหายใจออก' },
    { label: 'ระงับกายสังขาร', text: 'ย่อมสำเหนียกว่า จักระงับกายสังขารหายใจเข้า' },
    { label: 'กำหนดรู้ปิติ', text: 'ย่อมสำเหนียกว่า จักกำหนดรู้ปิติหายใจออก' },
    { label: 'กำหนดรู้ปิติ', text: 'ย่อมสำเหนียกว่า จักกำหนดรู้ปิติหายใจเข้า' },
    { label: 'กำหนดรู้สึก', text: 'ย่อมสำเหนียกว่า จักกำหนดรู้สึกหายใจออก' },
    { label: 'กำหนดรู้สึก', text: 'ย่อมสำเหนียกว่า จักกำหนดรู้สึกหายใจเข้า' },
    { label: 'กำหนดรู้จิตสังขาร', text: 'ย่อมสำเหนียกว่า จักกำหนดรู้จิตสังขารหายใจออก' },
    { label: 'กำหนดรู้จิตสังขาร', text: 'ย่อมสำเหนียกว่า จักกำหนดรู้จิตสังขารหายใจเข้า' },
    { label: 'ระงับจิตสังขาร', text: 'ย่อมสำเหนียกว่า จักระงับจิตสังขารหายใจออก' },
    { label: 'ระงับจิตสังขาร', text: 'ย่อมสำเหนียกว่า จักระงับจิตสังขารหายใจเข้า' },
    { label: 'กำหนดรู้จิต', text: 'ย่อมสำเหนียกว่า จักกำหนดรู้จิตหายใจออก' },
    { label: 'กำหนดรู้จิต', text: 'ย่อมสำเหนียกว่า จักกำหนดรู้จิตหายใจเข้า' },
    { label: 'ทำจิตให้ร่าเริง', text: 'ย่อมสำเหนียกว่า จักทำจิตให้ร่าเริงหายใจออก' },
    { label: 'ทำจิตให้ร่าเริง', text: 'ย่อมสำเหนียกว่า จักทำจิตให้ร่าเริงหายใจเข้า' },
    { label: 'ดำรงจิตมั่น', text: 'ย่อมสำเหนียกว่า จักดำรงจิตมั่นหายใจออก' },
    { label: 'ดำรงจิตมั่น', text: 'ย่อมสำเหนียกว่า จักดำรงจิตมั่นหายใจเข้า' },
    { label: 'เปลื้องจิต', text: 'ย่อมสำเหนียกว่า จักเปลื้องจิตหายใจออก' },
    { label: 'เปลื้องจิต', text: 'ย่อมสำเหนียกว่า จักเปลื้องจิตหายใจเข้า' },
    { label: 'ไม่เที่ยง', text: 'ย่อมสำเหนียกว่าจักพิจารณา โดยความเป็นของไม่เที่ยงหายใจออก' },
    { label: 'ไม่เที่ยง', text: 'ย่อมสำเหนียกว่าจักพิจารณา โดยความเป็นของไม่เที่ยงหายใจเข้า' },
    { label: 'ปราศจากราคะ', text: 'ย่อมสำเหนียกว่าจักพิจารณา ธรรมอันปราศจากราคะหายใจออก' },
    { label: 'ปราศจากราคะ', text: 'ย่อมสำเหนียกว่าจักพิจารณา ธรรมอันปราศจากราคะหายใจเข้า' },
    { label: 'ดับสนิท', text: 'ย่อมสำเหนียกว่าจักพิจารณา ธรรมเป็นที่ดับสนิทหายใจออก' },
    { label: 'ดับสนิท', text: 'ย่อมสำเหนียกว่าจักพิจารณา ธรรมเป็นที่ดับสนิทหายใจเข้า' },
    { label: 'สละคืน', text: 'ย่อมสำเหนียกว่าจักพิจารณา ธรรมเป็นที่สละคืนหายใจออก' },
    { label: 'สละคืน', text: 'ย่อมสำเหนียกว่าจักพิจารณา ธรรมเป็นที่สละคืนหายใจเข้า' },
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
            อานาปานสติภาวนา
          </h2>
          <p className="text-slate-500 text-lg italic">
            การเจริญสติกำหนดลมหายใจเพื่อผลและอานิสงส์ใหญ่
          </p>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนที่ 1: บทนำและคำสั่งสอน */}
        <IntrospectionCard highlight={true} className="bg-cyan-600 shadow-cyan-200">
          <div className="flex items-center gap-4 mb-8 text-white border-b border-white/20 pb-5">
            <FaHandsPraying className="text-3xl text-cyan-200" />
            <h3 className="text-2xl font-bold">ดูกรราหุล</h3>
          </div>
          <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90">
            <p className="font-bold">เธอจงเจริญอานาปานสติภาวนาเถิด</p>
            <p>เพราะอานาปานสติ ที่บุคคลเจริญแล้วทำให้มากแล้ว ย่อมมีผลมีอานิสงส์ใหญ่</p>
            <p className="italic text-cyan-100">
              ก็อานาปานสติอันบุคคลเจริญอย่างไร ทำให้มากอย่างไร จึงมีผลใหญ่มีอานิสงส์ใหญ่
            </p>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 2: การเตรียมตัวและสถานที่ */}
        <IntrospectionCard>
          <div className="flex items-center gap-4 mb-6 text-cyan-700">
            <FaTree className="text-2xl" />
            <h3 className="text-2xl font-bold">การเตรียมกายและสติ</h3>
          </div>
          <div className="space-y-4 text-xl leading-relaxed text-slate-700">
            <p className="font-bold text-cyan-800">ดูกรราหุล</p>
            <p>
              ภิกษุในธรรมวินัยนี้ อยู่ในป่าก็ดี อยู่ที่โคนไม้ก็ดี อยู่ในเรือนว่างก็ดี
              นั่งคู้บัลลังก์ตั้งกายตรง ดำรงสติไว้เฉพาะหน้า เธอมีสติหายใจออก มีสติหายใจเข้า
            </p>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 3: ขั้นตอนการปฏิบัติ 16 ขั้น (32 บรรทัด) */}
        <div className="my-12 space-y-4">
          <h4 className="text-center text-slate-400 font-medium uppercase tracking-widest mb-8">
            ลำดับการเจริญอานาปานสติ
          </h4>
          <div className="grid gap-3">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`p-4 md:p-5 rounded-2xl border transition-all flex items-center gap-4
                  ${idx % 2 === 0 ? 'bg-white border-slate-100' : 'bg-cyan-50/30 border-cyan-100'}`}
              >
                <div
                  className={`flex-none w-1.5 h-8 rounded-full ${idx >= 24 ? 'bg-cyan-500' : 'bg-slate-200'}`}
                ></div>
                <p
                  className={`text-lg md:text-xl leading-relaxed ${idx >= 24 ? 'font-bold text-cyan-800' : 'text-slate-700'}`}
                >
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ส่วนที่ 4: บทสรุปอานิสงส์ */}
        <IntrospectionCard>
          <div className="text-center space-y-6 py-4">
            <p className="text-xl text-slate-500 font-bold uppercase tracking-widest">ดูกรราหุล</p>
            <p className="text-2xl md:text-3xl font-bold text-cyan-700 leading-relaxed">
              อานาปานสติที่บุคคลเจริญแล้วอย่างนี้ <br />
              ทำให้มากแล้วอย่างนี้ ย่อมมีผลใหญ่มีอานิสงส์ใหญ่
            </p>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 5: ลมหายใจสุดท้ายและการบรรลุธรรม */}
        <div className="mt-16">
          <IntrospectionCard highlight={true} className="bg-slate-900 border-cyan-500">
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaWind className="text-cyan-400 text-5xl animate-pulse" />
              <div className="space-y-8 text-xl md:text-2xl leading-relaxed text-white/90">
                <p className="font-bold text-cyan-300">ดูกรราหุล</p>
                <p>
                  เมื่ออานาปานสติอันบุคคลเจริญแล้วอย่างนี้ ทำให้มากแล้วอย่างนี้
                  ลมอัสสาสะปัสสาสะอันมีในภายหลัง อันบุคคลผู้เจริญอานาปานสติ ทราบชัดแล้วย่อมดับไป
                  หาเป็นอันบุคคลผู้เจริญอานาปานสติ ไม่ทราบชัดแล้วดับไปไม่ได้ดังนี้
                </p>

                <div className="bg-white/10 p-8 rounded-[2.5rem] border border-white/20 shadow-2xl">
                  <FaQuoteLeft className="mx-auto text-cyan-300 opacity-50 text-3xl mb-4" />
                  <p className="text-white font-medium italic">
                    พระผู้มีพระภาคได้ตรัสพระพุทธพจน์นี้แล้ว <br />
                    ท่านพระราหุลมีใจยินดี ชื่นชมพระภาษิตของพระผู้มีพระภาคดังนี้แล
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-amber-300 font-bold uppercase tracking-widest text-sm">
                <FaCircleCheck /> จบมหาราหุโลวาทสูตร
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link
            href="/extra/paticcasamuppada/lesson-06"
            className="inline-flex items-center gap-3 bg-cyan-600 hover:bg-cyan-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-cyan-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: เทศนาสูตร
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
