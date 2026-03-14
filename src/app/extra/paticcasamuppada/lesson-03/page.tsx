// src/app/extra/paticcasamuppada/lesson-03/page.tsx
import IntrospectionCard from '@/components/ui/IntrospectionCard';
import Link from 'next/link';
import {
  FaArrowRight,
  FaHandsPraying,
  FaPersonWalking,
  FaTree,
  FaMountain,
  FaDroplet,
  FaFireBurner,
  FaWind,
  FaCircleNotch,
  FaQuoteLeft,
  FaCommentDots,
} from 'react-icons/fa6';

export default function PaticcasamuppadaLesson03() {
  // ข้อมูลธาตุ 5 (คงเนื้อหาเดิมทุกตัวอักษร)
  const elements = [
    {
      name: 'ปฐวีธาตุ (ธาตุดิน)',
      icon: <FaMountain />,
      color: 'text-amber-800 bg-amber-50',
      desc: 'รูปอย่างใดอย่างหนึ่ง เป็นภายในอาศัยตน เป็นของหยาบมีลักษณะแข้นแข็ง อันกรรมและกิเลสเข้าไปยึดมั่น',
      details:
        'คือ ผม ขน เล็บ ฟัน หนัง เนื้อ เอ็น กระดูก เยื่อในกระดูก ม้าม หัวใจ ตับ พังผืด ไต ปอด ไส้ใหญ่ ไส้น้อย อาหารใหม่ อาหารเก่า',
      extra:
        'หรือสิ่งใดสิ่งหนึ่งอย่างอื่น เป็นภายในอาศัยตน เป็นของหยาบมีลักษณะแข้นแข็ง อันกรรมและกิเลสเข้าไปยึดมั่น นี้เราเรียกว่าปฐวีธาตุเป็นภายใน',
    },
    {
      name: 'อาโปธาตุ (ธาตุน้ำ)',
      icon: <FaDroplet />,
      color: 'text-blue-600 bg-blue-50',
      desc: 'สิ่งใดเป็นภายในอาศัยตน เป็นอาโปมีลักษณะเอิบอาบ อันกรรมและกิเลสเข้าไปยึดมั่น',
      details: 'คือ ดี เสลด หนอง เลือด เหงื่อ มันข้น น้ำตา เปลวมัน น้ำลาย น้ำมูก ไขข้อ มูตร',
      extra:
        'หรือสิ่งใดสิ่งหนึ่งอย่างอื่น เป็นภายในอาศัยตน เป็นอาโปมีลักษณะเอิบอาบ อันกรรมและกิเลสเข้าไปยึดมั่น นี้เราเรียกว่าอาโปธาตุเป็นภายใน',
    },
    {
      name: 'เตโชธาตุ (ธาตุไฟ)',
      icon: <FaFireBurner />,
      color: 'text-orange-600 bg-orange-50',
      desc: 'สิ่งใดเป็นภายในอาศัยตน เป็นเตโชมีลักษณะร้อน อันกรรมและกิเลสเข้าไปยึดมั่น',
      details:
        'คือไฟที่ยังกายให้อบอุ่น ไฟที่ยังกายให้ทรุดโทรม ไฟที่ยังกายให้กระวนกระวาย และไฟที่เผาอาหาร ที่กิน ที่ดื่ม ที่เคี้ยว ที่ลิ้ม ให้ย่อยไปโดยชอบ',
      extra:
        'หรือสิ่งใดสิ่งหนึ่งอย่างอื่น เป็นภายในอาศัยตน เป็นเตโชมีลักษณะร้อน อันกรรมและกิเลสเข้าไปยึดมั่น นี้เราเรียกว่าเตโชธาตุเป็นภายใน',
    },
    {
      name: 'วาโยธาตุ (ธาตุลม)',
      icon: <FaWind />,
      color: 'text-slate-500 bg-slate-100',
      desc: 'สิ่งใดเป็นภายในอาศัยตน เป็นวาโยมีลักษณะพัดไปมา อันกรรมและกิเลสเข้าไปยึดมั่น',
      details: 'คือลมพัดขึ้นเบื้องบนลมพัดลงเบื้องต่ำ ลมในท้องลมในไส้ ลมแล่นไปตามอวัยวะน้อยใหญ่',
      extra:
        'ลมหายใจหรือสิ่งใดสิ่งหนึ่งอย่างอื่น เป็นภายในอาศัยตน เป็นวาโยพัดไปมา อันกรรมและกิเลสเข้าไปยึดมั่น นี้เราเรียกว่าวาโยธาตุเป็นภายใน',
    },
    {
      name: 'อากาศธาตุ (ความว่าง)',
      icon: <FaCircleNotch />,
      color: 'text-indigo-400 bg-indigo-50',
      desc: 'สิ่งใดเป็นภายในอาศัยตน เป็นอากาศมีลักษณะว่าง อันกรรมและกิเลสเข้าไปยึดมั่น',
      details:
        'คือช่องหูช่องจมูกช่องปาก ช่องคอสำหรับกลืนอาหาร ที่กิน ที่ดื่ม ที่เคี้ยว ที่ลิ้ม และช่องสำหรับถ่ายอาหาร ที่กิน ที่ดื่ม ที่เคี้ยว ที่ลิ้ม ออกเบื้องล่าง',
      extra:
        'หรือสิ่งใดสิ่งหนึ่งอย่างอื่น เป็นภายในอาศัยตน เป็นอากาศมีลักษณะว่างไม่ทึบ มีลักษณะไม่ทึบเป็นช่อง มีลักษณะเป็นช่อง อันเนื้อและเลือดไม่ถูกต้องเป็นภายใน อันกรรมและกิเลสเข้าไปยึดมั่น นี้เราเรียกว่าอากาศธาตุเป็นภายใน',
    },
  ];

  const insightRefrain = 'นั่นไม่ใช่ของเรา เราไม่เป็นนั่น นั่นไม่ใช่ตนของเราดังนี้';

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-bold tracking-widest uppercase text-sm">
            วิปัสสนาภาวนาเพิ่มเติม
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">
            มหาราหุโลวาทสูตร
          </h2>
          <p className="text-slate-500 text-lg italic">การพิจารณาขันธ์ 5 และธาตุอย่างละเอียด</p>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนที่ 1: บทนำ (เหตุการณ์บิณฑบาต) */}
        <IntrospectionCard>
          <div className="flex items-center gap-3 mb-6 text-cyan-700 border-b pb-4">
            <FaPersonWalking className="text-2xl" />
            <h3 className="text-2xl font-bold">เรื่องพระราหุล</h3>
          </div>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700 italic">
            <p>
              ข้าพเจ้าได้สดับมาอย่างนี้ สมัยหนึ่งพระผู้มีพระภาค ประทับอยู่ ณ พระวิหารเชตวัน
              อารามของท่านอนาถบิณฑิกเศรษฐี เขตพระนครสาวัตถี
            </p>
            <p>
              ครั้งนั้นเวลาเช้า พระผู้มีพระภาค ครองอันตรวาสก แล้วถือบาตรและจีวร เสด็จเข้าไปบิณฑบาต
              ยังนครสาวัตถีเวลาเช้า แม้ท่านพระราหุล ก็ครองอันตรวาสก แล้วถือบาตรและจีวร
              ตามพระผู้มีพระภาคไป ณ เบื้องพระปฤษฎางค์
            </p>
            <p>ครั้งนั้นพระผู้มีพระภาค ทรงผินพระพักตร์ ไปรับสั่งกะท่านพระราหุลว่า</p>

            <div className="bg-cyan-50 p-8 rounded-3xl border-l-4 border-cyan-500 not-italic shadow-inner">
              <p className="text-cyan-900 font-bold mb-4">ดูกรราหุล</p>
              <p className="text-slate-800">
                รูปอย่างใดอย่างหนึ่ง ที่เป็นอดีตเป็นอนาคต และเป็นปัจจุบัน
                เป็นภายในก็ดีเป็นภายนอกก็ดี หยาบก็ดีละเอียดก็ดี เลวก็ดีประณีตก็ดี
                อยู่ในที่ไกลก็ดีอยู่ในที่ใกล้ก็ดี รูปทั้งปวงนี้เธอพึงเห็นด้วยปัญญา
                อันชอบตามเป็นจริงอย่างนี้ว่า
              </p>
              <p className="text-2xl font-bold text-cyan-700 mt-4">
                "นั่นไม่ใช่ของเรา เราไม่เป็นนั่น นั่นไม่ใช่ตัวตนของเราดังนี้"
              </p>
            </div>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 2: บทสนทนาเรื่องขันธ์ 5 */}
        <IntrospectionCard>
          <div className="space-y-8">
            <div className="flex flex-col gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-100 self-start shadow-sm">
                <p className="text-slate-500 text-sm mb-1">พระราหุลทูลถามว่า:</p>
                <p className="text-xl font-bold text-slate-700">
                  "ข้าแต่พระผู้มีพระภาค รูปเท่านั้นหรือ ข้าแต่พระสุคตรูปเท่านั้นหรือ"
                </p>
              </div>
              <div className="bg-cyan-600 text-white p-6 rounded-2xl self-end shadow-md max-w-[90%]">
                <p className="text-cyan-200 font-bold text-sm mb-2">พระพุทธเจ้าตรัสตอบว่า:</p>
                <p className="text-xl md:text-2xl font-bold">
                  "ดูกรราหุลทั้งรูป ทั้งเวทนา ทั้งสัญญา ทั้งสังขาร ทั้งวิญญาณ"
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100 space-y-6 text-xl text-slate-600 italic">
              <p>
                ครั้งนั้นท่านพระราหุลคิดว่า วันนี้ใครหนออันพระผู้มีพระภาค ทรงโอวาทด้วย
                โอวาทในที่เฉพาะพระพักตร์ แล้วจักเข้าบ้านเพื่อบิณฑบาตเล่า
                ดังนี้แล้วกลับจากที่นั้นแล้ว นั่งคู้บัลลังก์ตั้งกายตรง ดำรงสติไว้เฉพาะหน้า ณ
                โคนต้นไม้แห่งหนึ่ง
              </p>
              <div className="flex items-start gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <FaTree className="text-emerald-600 text-2xl mt-1" />
                <p>
                  ท่านพระสารีบุตรได้เห็นท่านพระราหุล ดำรงสติไว้เฉพาะหน้า ณ โคนต้นไม้แห่งหนึ่ง
                  แล้วบอกกะท่านพระราหุลว่า
                </p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-500 not-italic">
                <p className="text-emerald-800 font-bold mb-2">ดูกรราหุล</p>
                <p className="text-slate-800">
                  ท่านจงเจริญอานาปานสติเถิด ด้วยว่าอานาปานสติภาวนา ที่บุคคลเจริญแล้วทำให้มากแล้ว
                  ย่อมมีผลมากมีอานิสงส์มาก
                </p>
              </div>
              <p>
                ดังนั้นเวลาเย็น ท่านพระราหุลออกจากที่เร้น แล้วเข้าไปเฝ้าพระผู้มีพระภาค
                ถึงที่ประทับถวายบังคมพระผู้มีพระภาค แล้วนั่ง ณ ที่ควรส่วนข้างหนึ่ง
                แล้วได้ทูลพระผู้มีพระภาคว่า ข้าแต่พระองค์ผู้เจริญอานาปานสติ อันบุคคลเจริญแล้วอย่างไร
                ทำให้มากแล้วอย่างไร จึงจะมีผลมีอานิสงส์
              </p>
            </div>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 3: ธาตุ 5 (Earth, Water, Fire, Wind, Space) */}
        <div className="my-16 space-y-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-cyan-800 font-prompt">ธาตุ ๕</h3>
            <div className="w-16 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></div>
          </div>

          {elements.map((el, idx) => (
            <IntrospectionCard key={idx}>
              <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-5">
                <div
                  className={`w-12 h-12 ${el.color} rounded-2xl flex items-center justify-center shadow-sm text-xl`}
                >
                  {el.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800">{el.name}</h3>
              </div>

              <div className="space-y-6 text-xl leading-relaxed text-slate-700">
                <p className="font-bold text-cyan-700">ดูกรราหุล</p>
                <p>{el.desc}</p>
                <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-slate-300 font-medium">
                  {el.details}
                </div>
                <p>{el.extra}</p>

                <div className="bg-cyan-50 p-6 rounded-2xl border border-cyan-100 space-y-4">
                  <p>
                    ก็{el.name.split(' ')[0]}เป็นภายในก็ดี เป็นภายนอกก็ดี อันใด
                    {el.name.split(' ')[0]}นั้น เป็น{el.name.split(' ')[0]}เหมือนกัน
                  </p>
                  <p className="font-bold text-cyan-800 italic">
                    {el.name.split(' ')[0]}นั้นเธอพึงเห็นด้วยปัญญา อันชอบตามเป็นจริงอย่างนี้ว่า{' '}
                    <br />
                    <span className="text-2xl block mt-2">
                      "นั่นไม่ใช่ของเรา เราไม่เป็นนั่น นั่นไม่ใช่ตนของเราดังนี้"
                    </span>
                  </p>
                </div>

                <p className="text-center font-bold text-cyan-700 pt-4">
                  เพราะบุคคลเห็น{el.name.split(' ')[0]}นั้น ด้วยปัญญาอันชอบ ตามเป็นจริงอย่างนี้แล้ว{' '}
                  <br />
                  ย่อมเบื่อหน่ายใน{el.name.split(' ')[0]} จิตย่อมคลายกำหนัดใน{el.name.split(' ')[0]}
                </p>
              </div>
            </IntrospectionCard>
          ))}
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link
            href="/extra/paticcasamuppada/lesson-04"
            className="inline-flex items-center gap-3 bg-cyan-600 hover:bg-cyan-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-cyan-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: ภาวนาเสมอด้วยธาตุ 5
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
