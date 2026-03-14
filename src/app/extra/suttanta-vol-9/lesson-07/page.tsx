// src/app/extra/suttanta-vol-9/lesson-07/page.tsx
'use client';

import IntrospectionCard from '@/components/ui/IntrospectionCard';
import Link from 'next/link';
import {
  FaArrowRight,
  FaHandsPraying,
  FaCommentDots,
  FaUser,
  FaQuoteLeft,
  FaCircleCheck,
  FaTree,
  FaBookOpen,
  FaUsers,
} from 'react-icons/fa6';

export default function SuttantaVol9Lesson07() {
  // ฟังก์ชันจัดรูปแบบบทสนทนา (แก้ไข Type เรียบร้อย)
  const DialogueBlock = ({
    speaker,
    text,
    type = 'default',
  }: {
    speaker: string;
    text: React.ReactNode;
    type?: 'buddha' | 'anuradha' | 'paribbajaka' | 'narrator' | 'default';
  }) => {
    const styles = {
      buddha: {
        bg: 'bg-indigo-50 border-indigo-100 text-indigo-900',
        icon: <FaHandsPraying />,
        iconBg: 'bg-indigo-600',
        text: 'text-indigo-700',
      },
      anuradha: {
        bg: 'bg-emerald-50 border-emerald-100 text-emerald-900',
        icon: <FaUser />,
        iconBg: 'bg-emerald-600',
        text: 'text-emerald-700',
      },
      paribbajaka: {
        bg: 'bg-rose-50 border-rose-100 text-rose-900',
        icon: <FaUsers />,
        iconBg: 'bg-rose-600',
        text: 'text-rose-700',
      },
      narrator: {
        bg: 'bg-slate-50 border-slate-200 text-slate-600',
        icon: <FaBookOpen />,
        iconBg: 'bg-slate-400',
        text: 'text-slate-500',
      },
      default: {
        bg: 'bg-white border-slate-100 text-slate-700',
        icon: <FaUser />,
        iconBg: 'bg-slate-200',
        text: 'text-slate-500',
      },
    };
    const s = styles[type];

    return (
      <div className={`mb-6 ${type === 'anuradha' || type === 'paribbajaka' ? 'md:ml-10' : ''}`}>
        <div className="flex items-start gap-3 mb-2">
          <div
            className={`flex-none w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-sm text-white ${s.iconBg}`}
          >
            {s.icon}
          </div>
          <p className={`font-bold text-sm uppercase tracking-wider ${s.text}`}>{speaker}</p>
        </div>
        <div className={`p-5 rounded-2xl border leading-relaxed text-xl shadow-sm ${s.bg}`}>
          {text}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">
            พระสุตตันตปิฎก เล่มที่ 9
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">
            อนุราธสูตร
          </h2>
          <p className="text-slate-500 text-lg italic">"เราย่อมบัญญัติทุกข์ และความดับทุกข์"</p>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* --- ส่วนที่ 1: เหตุการณ์กับอัญญเดียรถีย์ --- */}
        <IntrospectionCard title="การสนทนากับอัญญเดียรถีย์ปริพาชก">
          <DialogueBlock
            type="narrator"
            speaker="ผู้บรรยาย"
            text="สมัยหนึ่งพระผู้มีพระภาค ประทับอยู่ ณ กูฏาคารศาลา ป่ามหาวัน ใกล้พระนครเวสาลี ก็สมัยนั้น ท่านพระอนุราธะ อยู่ที่กระท่อมในป่า ไม่ไกลพระผู้มีพระภาค ครั้งนั้น อัญญเดียรถีย์ปริพาชก พากันเข้าไปหา ท่านพระอนุราธะจนถึงที่อยู่ ได้สนทนาปราศรัย กับท่านพระอนุราธะ ครั้นผ่านการสนทนาปราศรัย พอให้ระลึกถึงกันแล้ว จึงนั่ง ณ ที่ควรส่วนข้างหนึ่งแล้ว จึงได้กล่าวกะท่านอนุราธะว่า"
          />
          <DialogueBlock
            type="paribbajaka"
            speaker="อัญญเดียรถีย์ปริพาชก"
            text="ดูกรท่านอนุราธะ พระตถาคตเป็นอุดมบุรุษ เป็นยอดบุรุษ ทรงถึงความบรรลุชั้นเยี่ยม เมื่อจะทรงบัญญัติ ย่อมทรงบัญญัติ ในฐานะ ๔ นี้ คือสัตว์เบื้องหน้าแต่ตายแล้ว ย่อมเกิดอีก ๑ ย่อมไม่เกิดอีก ๑ ย่อมเกิดอีกก็มี ย่อมไม่เกิดอีกก็มี ๑ ย่อมไม่เกิดอีก ก็หามิได้ ๑"
          />
          <DialogueBlock
            type="anuradha"
            speaker="ท่านพระอนุราธะ"
            text="ดูกรท่านทั้งหลาย พระตถาคตทรงเป็นอุดมบุรุษ ทรงเป็นยอดบุรุษ ทรงถึงความบรรลุชั้นเยี่ยม เมื่อจะทรงบัญญัติ ย่อมทรงบัญญัติ นอกจากฐานะ ๔ เหล่านี้ คือ สัตว์เบื้องหน้าแต่ตายแล้ว ย่อมเกิดอีก ๑ ย่อมไม่เกิดอีก ๑ ย่อมเกิดอีกก็มี ย่อมไม่เกิดก็มี ๑ ย่อมเกิดอีกก็หามิได้ ย่อมไม่เกิดก็หามิได้ ย่อมไม่เกิดอีกก็หามิได้ ๑"
          />
          <DialogueBlock
            type="paribbajaka"
            speaker="อัญญเดียรถีย์ปริพาชก"
            text="ภิกษุนี้จักเป็นภิกษุใหม่ บวชแล้วไม่นาน ก็หรือว่าเป็นภิกษุเถระ แต่โง่เขลาไม่ฉลาด"
          />
          <DialogueBlock
            type="narrator"
            speaker="ผู้บรรยาย"
            text="ครั้งนั้น พวกอัญญเดียรถีย์ปริพาชกกล่าว รุกรานท่านพระอนุราธะ ด้วยวาทะว่าเป็นภิกษุใหม่ และเป็นผู้โง่เขลาแล้ว พากันลุกจากอาสนะหลีกไป"
          />
        </IntrospectionCard>

        {/* --- ส่วนที่ 2: ความปริวิตก --- */}
        <div className="my-16">
          <IntrospectionCard>
            <DialogueBlock
              type="narrator"
              speaker="ผู้บรรยาย"
              text="เมื่ออัญญเดียรถีย์ ปริพาชกเหล่านั้น หลีกไปแล้วไม่นาน ท่านพระอนุราธะได้มี ความคิดว่า"
            />
            <div className="bg-emerald-50 p-8 rounded-3xl border-l-8 border-emerald-500 shadow-inner italic text-xl leading-relaxed text-emerald-900">
              "ถ้าอัญญเดียรถีย์ ปริพาชกเหล่านั้น พึงถามเราต่อไป เมื่อเราพยากรณ์อย่างไร จึงจะชื่อว่า
              ไม่เป็นผู้กล่าว ตามที่อัญญเดียรถีย์ปริพาชก เหล่านั้นกล่าวแล้ว
              และชื่อว่าเป็นผู้กล่าวตาม ที่พระผู้มีพระภาคตรัสแล้ว ไม่พึงกล่าวตู่พระผู้มีพระภาค
              ด้วยคำอันไม่จริง และพึงพยากรณ์ธรรม สมควรแก่ธรรม ทั้งการคล้อยตามวาทะที่ถูกไรๆ
              จะไม่พึงถึงฐานะ อันวิญญูชนจะติเตียนได้"
            </div>
          </IntrospectionCard>
        </div>

        {/* --- ส่วนที่ 3: การกราบทูลเรื่องราว --- */}
        <div className="my-16">
          <IntrospectionCard title="การเข้าเฝ้าและกราบทูลเรื่องราว">
            <DialogueBlock
              type="narrator"
              speaker="ผู้บรรยาย"
              text="ลำดับนั้น ท่านพระอนุราธะ จึงเข้าไปเฝ้าพระผู้มีพระภาค จนถึงที่ประทับ ฯลฯ แล้วกราบทูลพระผู้มีพระภาคว่า"
            />
            <DialogueBlock
              type="anuradha"
              speaker="ท่านพระอนุราธะ"
              text={
                <>
                  ข้าแต่พระองค์ผู้เจริญ ขอประทานพระวโรกาส ข้าพระองค์อยู่ที่กระท่อมในป่า
                  ไม่ไกลพระผู้มีพระภาค ครั้งนั้น พวกอัญญเดียรถีย์ ปริพาชกเป็นอันมาก
                  พากันเข้าไปหาข้าพระองค์ถึงที่อยู่ ฯลฯ กล่าวกะข้าพระองค์ว่า ดูกรท่านพระอนุราธะ
                  พระตถาคตทรงเป็นอุดมบุรุษ ทรงเป็นยอดบุรุษ ทรงถึงความบรรลุชั้นเยี่ยม
                  เมื่อจะทรงบัญญัติ ในฐานะ ๔ เหล่านี้ คือ สัตว์เบื้องหน้าแต่ตายแล้ว ย่อมเกิดอีก ๑
                  ย่อมไม่เกิดอีก ๑ ย่อมเกิดอีกก็มี ย่อมไม่เกิดอีกก็มี ๑ ย่อมเกิดก็หามิได้
                  ย่อมไม่เกิดก็หามิได้ ๑<br />
                  <br />
                  ข้าแต่พระองค์ผู้เจริญ เมื่อพวกอัญญเดียรถีย์ ปริพาชกกล่าวอย่างนี้แล้ว
                  ข้าพระองค์จึงได้กล่าว กะพวกเขาว่า ดูกรท่านทั้งหลาย พระตถาคตทรงเป็นอุดมบุรุษ
                  ทรงเป็นยอดบุรุษ ทรงถึงความบรรลุชั้นเยี่ยม เมื่อจะทรงบัญญัติ ย่อมทรงบัญญัติ
                  นอกจากฐานะ ๔ เหล่านี้ คือ สัตว์เบื้องหน้าแต่ตายแล้ว ย่อมเกิดอีก ๑ ย่อมไม่เกิดอีก ๑
                  ย่อมเกิดอีกก็มี ย่อมไม่เกิดอีกก็มี ๑ ย่อมเกิดอีกก็หามิได้ ย่อมไม่เกิดอีกก็หามิได้
                  ๑<br />
                  <br />
                  ข้าแต่พระองค์ผู้เจริญ เมื่อข้าพระองค์ กล่าวอย่างนั้นแล้ว
                  อัญญเดียรถีย์ปริพาชกเหล่านั้น ได้กล่าวกะข้าพระองค์ว่า ภิกษุนี้จักเป็นภิกษุใหม่
                  บวชไม่นาน ก็หรือว่าเป็นเถระ แต่โง่เขลาไม่ฉลาด ข้าแต่พระองค์ผู้เจริญ
                  อัญญเดียรถีย์ปริพาชกเหล่านั้น รุกรานข้าพระองค์ด้วยวาทะว่า เป็นผู้ใหม่
                  เป็นผู้เขลาแล้ว ลุกจากอาสนะหลีกไป
                  <br />
                  <br />
                  เมื่ออัญญเดียรถีย์ ปริพาชกเหล่านั้น หลีกไปแล้วไม่นาน ข้าพระองค์เกิดความคิดว่า
                  ถ้าอัญญเดียรถีย์ ปริพาชกเหล่านั้น พึงถามเราต่อไป เมื่อเราพยากรณ์อย่างไร
                  จึงจะชื่อว่าไม่เป็นผู้กล่าว ตามที่อัญญเดียรถีย์ปริพาชก เหล่านั้นกล่าวแล้ว
                  และชื่อว่าเป็นผู้กล่าว ตามที่พระผู้มีพระภาคตรัสแล้ว ไม่พึงกล่าวตู่พระผู้มีพระภาค
                  ด้วยคำอันไม่จริง และพยากรณ์ธรรมสมควรแก่ธรรม ทั้งการคล้อยตามวาทะที่ถูกไรๆ
                  จะไม่พึงถึงฐานะ อันวิญญูชนจะติเตียนได้
                </>
              }
            />
          </IntrospectionCard>
        </div>

        {/* --- ส่วนที่ 4: การพิจารณาขันธ์ 5 --- */}
        <div className="my-16">
          <h4 className="text-center text-slate-400 font-medium uppercase tracking-widest mb-8">
            การพิจารณาโดยแยบคาย
          </h4>
          <IntrospectionCard>
            <div className="space-y-2">
              <DialogueBlock
                type="buddha"
                speaker="พระผู้มีพระภาค"
                text="ดูกรอนุราธะ เธอจะสำคัญความข้อนั้นเป็นไฉน รูปเที่ยงหรือไม่เที่ยง?"
              />
              <DialogueBlock type="anuradha" speaker="ท่านพระอนุราธะ" text="ไม่เที่ยง พระเจ้าข้า" />
              <DialogueBlock
                type="buddha"
                speaker="พระผู้มีพระภาค"
                text="ก็สิ่งใดไม่เที่ยง สิ่งนั้นเป็นทุกข์หรือเป็นสุขเล่า?"
              />
              <DialogueBlock type="anuradha" speaker="ท่านพระอนุราธะ" text="เป็นทุกข์ พระเจ้าข้า" />
              <DialogueBlock
                type="buddha"
                speaker="พระผู้มีพระภาค"
                text="ก็สิ่งใดไม่เที่ยง เป็นทุกข์ มีความแปรปรวนเป็นธรรมดา ควรหรือหนอ ที่จะตามเห็นสิ่งนั้นว่า นั่นของเรา นั่นเป็นเรา นั่นเป็นตัวตนของเรา?"
              />
              <DialogueBlock
                type="anuradha"
                speaker="ท่านพระอนุราธะ"
                text="ไม่ควรเห็นอย่างนั้น พระเจ้าข้า"
              />
              <DialogueBlock
                type="buddha"
                speaker="พระผู้มีพระภาค"
                text="เวทนา สัญญา สังขาร วิญญาณ เที่ยงหรือไม่เที่ยง?"
              />
              <DialogueBlock type="anuradha" speaker="ท่านพระอนุราธะ" text="ไม่เที่ยง พระเจ้าข้า" />
              <DialogueBlock
                type="buddha"
                speaker="พระผู้มีพระภาค"
                text="เพราะเหตุนี้แล ฯลฯ อริยสาวกผู้ได้สดับแล้ว เห็นอยู่อย่างนี้ ฯลฯ ย่อมรู้ชัดว่า ฯลฯ กิจอื่นเพื่อความเป็นอย่างนี้มิได้มี"
              />
            </div>
          </IntrospectionCard>
        </div>

        {/* --- ส่วนที่ 5: การค้นหาสัตว์บุคคล --- */}
        <div className="my-16">
          <IntrospectionCard title="การค้นหาสัตว์บุคคล">
            <div className="space-y-2">
              <DialogueBlock
                type="buddha"
                speaker="พระผู้มีพระภาค"
                text="ดูกรอนุราธะ เธอจะสำคัญความข้อนั้นเป็นไฉน เธอย่อมเห็นรูป ว่าเป็นสัตว์บุคคลหรือ?"
              />
              <DialogueBlock
                type="anuradha"
                speaker="ท่านพระอนุราธะ"
                text="ไม่ใช่อย่างนั้น พระเจ้าข้า"
              />
              <DialogueBlock
                type="buddha"
                speaker="พระผู้มีพระภาค"
                text="เธอย่อมเห็นเวทนา สัญญา สังขาร วิญญาณว่า เป็นสัตว์บุคคลหรือ?"
              />
              <DialogueBlock
                type="anuradha"
                speaker="ท่านพระอนุราธะ"
                text="ไม่ใช่อย่างนั้น พระเจ้าข้า"
              />

              <div className="w-full h-px bg-slate-200 my-6"></div>

              <DialogueBlock
                type="buddha"
                speaker="พระผู้มีพระภาค"
                text="ดูกรอนุราธะ เธอจะสำคัญความข้อนั้นเป็นไฉน เธอย่อมเห็นว่า สัตว์บุคคลในรูปหรือ?"
              />
              <DialogueBlock
                type="anuradha"
                speaker="ท่านพระอนุราธะ"
                text="ไม่ใช่อย่างนั้น พระเจ้าข้า"
              />
              <DialogueBlock
                type="buddha"
                speaker="พระผู้มีพระภาค"
                text="เธอย่อมเห็นว่า สัตว์บุคคลอื่นจากรูปหรือ?"
              />
              <DialogueBlock
                type="anuradha"
                speaker="ท่านพระอนุราธะ"
                text="ไม่ใช่อย่างนั้น พระเจ้าข้า"
              />
              <DialogueBlock
                type="buddha"
                speaker="พระผู้มีพระภาค"
                text="เธอย่อมเห็นว่า สัตว์บุคคลในเวทนาหรือ?"
              />
              <DialogueBlock
                type="anuradha"
                speaker="ท่านพระอนุราธะ"
                text="ไม่ใช่อย่างนั้น พระเจ้าข้า"
              />
              <DialogueBlock
                type="buddha"
                speaker="พระผู้มีพระภาค"
                text="เธอย่อมเห็นว่า สัตว์บุคคลอื่นจากเวทนาหรือ?"
              />
              <DialogueBlock
                type="anuradha"
                speaker="ท่านพระอนุราธะ"
                text="ไม่ใช่อย่างนั้น พระเจ้าข้า"
              />
              <DialogueBlock
                type="buddha"
                speaker="พระผู้มีพระภาค"
                text="เธอย่อมเห็นว่า สัตว์บุคคลในสัญญาหรือ?"
              />
              <DialogueBlock
                type="anuradha"
                speaker="ท่านพระอนุราธะ"
                text="ไม่ใช่อย่างนั้น พระเจ้าข้า"
              />
              <DialogueBlock
                type="buddha"
                speaker="พระผู้มีพระภาค"
                text="เธอย่อมเห็นว่า สัตว์บุคคลอื่นจากสัญญาหรือ?"
              />
              <DialogueBlock
                type="anuradha"
                speaker="ท่านพระอนุราธะ"
                text="ไม่ใช่อย่างนั้น พระเจ้าข้า"
              />
              <DialogueBlock
                type="buddha"
                speaker="พระผู้มีพระภาค"
                text="เธอย่อมเห็นว่า สัตว์บุคคลในสังขารหรือ?"
              />
              <DialogueBlock
                type="anuradha"
                speaker="ท่านพระอนุราธะ"
                text="ไม่ใช่อย่างนั้น พระเจ้าข้า"
              />
              <DialogueBlock
                type="buddha"
                speaker="พระผู้มีพระภาค"
                text="เธอย่อมเห็นว่า สัตว์บุคคลอื่นจากสังขารหรือ?"
              />
              <DialogueBlock
                type="anuradha"
                speaker="ท่านพระอนุราธะ"
                text="ไม่ใช่อย่างนั้น พระเจ้าข้า"
              />
              <DialogueBlock
                type="buddha"
                speaker="พระผู้มีพระภาค"
                text="เธอย่อมเห็นว่า สัตว์บุคคลในวิญญาณหรือ?"
              />
              <DialogueBlock
                type="anuradha"
                speaker="ท่านพระอนุราธะ"
                text="ไม่ใช่อย่างนั้น พระเจ้าข้า"
              />
              <DialogueBlock
                type="buddha"
                speaker="พระผู้มีพระภาค"
                text="เธอย่อมเห็นว่า สัตว์บุคคลอื่นจากวิญญาณหรือ?"
              />
              <DialogueBlock
                type="anuradha"
                speaker="ท่านพระอนุราธะ"
                text="ไม่ใช่อย่างนั้น พระเจ้าข้า"
              />

              <div className="w-full h-px bg-slate-200 my-6"></div>

              <DialogueBlock
                type="buddha"
                speaker="พระผู้มีพระภาค"
                text="ดูกรอนุราธะ เธอจะสำคัญความข้อนั้นเป็นไฉน เธอย่อมเห็นว่า สัตว์บุคคล มีรูป มีเวทนา มีสัญญา มีสังขาร มีวิญญาณ อย่างนั้นหรือ?"
              />
              <DialogueBlock
                type="anuradha"
                speaker="ท่านพระอนุราธะ"
                text="ไม่ใช่อย่างนั้น พระเจ้าข้า"
              />
              <DialogueBlock
                type="buddha"
                speaker="พระผู้มีพระภาค"
                text="ดูกรอนุราธะ เธอจะสำคัญความข้อนั้นเป็นไฉน เธอย่อมเห็นว่า สัตว์บุคคลนี้ไม่มีรูป ไม่มีเวทนา ไม่มีสัญญา ไม่มีสังขาร ไม่มีวิญญาณ อย่างนั้นหรือ?"
              />
              <DialogueBlock
                type="anuradha"
                speaker="ท่านพระอนุราธะ"
                text="ไม่ใช่อย่างนั้น พระเจ้าข้า"
              />
            </div>
          </IntrospectionCard>
        </div>

        {/* --- ส่วนที่ 6: บทสรุปหัวใจของคำสอน --- */}
        <div className="mt-16">
          <IntrospectionCard highlight={true} className="bg-indigo-900 border-indigo-500">
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaQuoteLeft className="text-indigo-400 text-4xl opacity-50" />

              <div className="space-y-8 text-xl md:text-2xl leading-relaxed text-white/90">
                <DialogueBlock
                  type="buddha"
                  speaker="พระผู้มีพระภาค"
                  text={
                    <>
                      ดูกรอนุราธะ ก็โดยที่จริง โดยที่แท้ เธอค้นหาสัตว์บุคคล ในขันธ์ ๕ เหล่านี้
                      ในปัจจุบันไม่ได้เลย ควรแลหรือที่เธอจะพยากรณ์ว่า พระตถาคตเป็นอุดมบุรุษ
                      เป็นยอดบุรุษ ถึงความบรรลุชั้นเยี่ยม เมื่อจะบัญญัติ ย่อมบัญญัติ เว้นจากฐานะ ๔
                      เหล่านี้ คือ สัตว์เบื้องหน้าแต่ตายแล้ว ย่อมเกิดอีก ๑ ย่อมไม่เกิดอีก ๑
                      ย่อมเกิดอีกก็มี ย่อมไม่เกิดอีกก็มี ๑ ย่อมเกิดอีกก็หามิได้
                      ย่อมไม่เกิดอีกก็หามิได้ ๑?
                    </>
                  }
                />

                <DialogueBlock
                  type="anuradha"
                  speaker="ท่านพระอนุราธะ"
                  text="ข้อนั้นไม่ควรเลย พระเจ้าข้า"
                />

                <div className="bg-white/10 p-10 rounded-[3rem] border border-white/20 shadow-2xl mt-10">
                  <p className="text-amber-300 font-bold text-2xl mb-4">พระผู้มีพระภาคตรัสว่า:</p>
                  <p className="text-3xl md:text-4xl font-black text-white underline decoration-amber-500 underline-offset-8">
                    "ถูกละๆ อนุราธะ ทั้งเมื่อก่อนและทั้งบัดนี้ เราย่อมบัญญัติทุกข์ และความดับทุกข์"
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-widest text-sm pt-4">
                <FaCircleCheck /> จบอนุราธสูตร
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link
            href="/extra/suttanta-vol-9/lesson-08"
            className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-indigo-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: สมุทยธัมมสูตรที่ ๑
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
