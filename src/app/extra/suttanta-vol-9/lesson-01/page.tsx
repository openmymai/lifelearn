// src/app/extra/suttanta-vol-9/lesson-01/page.tsx
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
  FaCircleXmark,
  FaTree,
  FaPersonWalking,
} from 'react-icons/fa6';

export default function SuttantaVol9Lesson01() {
  // ฟังก์ชันจัดรูปแบบบทสนทนา
  const DialogueBlock = ({
    speaker,
    text,
    isBuddha = false,
  }: {
    speaker: string;
    text: React.ReactNode;
    isBuddha?: boolean;
  }) => (
    <div className={`mb-8 ${isBuddha ? 'md:ml-0' : 'md:ml-10'}`}>
      <div className="flex items-start gap-3 mb-2">
        <div
          className={`flex-none w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-sm ${isBuddha ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'}`}
        >
          {isBuddha ? <FaHandsPraying /> : <FaUser />}
        </div>
        <p
          className={`font-bold text-sm uppercase tracking-wider ${isBuddha ? 'text-indigo-700' : 'text-slate-500'}`}
        >
          {speaker}
        </p>
      </div>
      <div
        className={`p-6 rounded-2xl border leading-relaxed text-xl ${isBuddha ? 'bg-indigo-50 border-indigo-100 text-indigo-900' : 'bg-white border-slate-100 text-slate-700 shadow-sm'}`}
      >
        {text}
      </div>
    </div>
  );

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">
            พระสุตตันตปิฎก เล่มที่ 9
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">
            นกุลปิตาสูตร
          </h2>
          <p className="text-slate-500 text-lg italic">"กายกระสับกระส่าย แต่จิตไม่กระสับกระส่าย"</p>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนที่ 1: บทนำและการเข้าเฝ้าพระผู้มีพระภาค */}
        <IntrospectionCard>
          <div className="flex items-center gap-3 mb-6 text-indigo-700 border-b pb-4">
            <FaTree className="text-2xl" />
            <h3 className="text-2xl font-bold">ณ เภสกฬาวัน</h3>
          </div>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700 italic mb-8">
            <p>
              ข้าพเจ้าได้สดับมาแล้วอย่างนี้ สมัยหนึ่ง พระผู้มีพระภาคประทับอยู่ ณ เภสกฬาวัน
              อันเป็นสถานที่ให้อภัยแก่หมู่มฤค ใกล้เมืองสุงสุมารคิระ ในภัคคชนบท ฯลฯ
            </p>
            <p>
              ครั้งนั้นแล คฤหบดีชื่อนกุลบิดา เข้าไปเฝ้าพระผู้มีพระภาค ถวายอภิวาทแล้ว นั่ง ณ
              ที่ควรส่วนข้างหนึ่งแล้ว ได้กราบทูลพระผู้มีพระภาคว่า
            </p>
          </div>

          <DialogueBlock
            speaker="นกุลบิดากราบทูลว่า"
            text={
              <>
                พระพุทธเจ้าข้า ข้าพระองค์เป็นผู้แก่เฒ่า เป็นผู้ใหญ่ ล่วงกาลผ่านวัยแล้วโดยลำดับ
                มีกายกระสับกระส่าย เจ็บป่วยเนืองๆ พระพุทธเจ้าข้า ก็ข้าพระองค์มิได้เห็น
                พระผู้มีพระภาคและภิกษุทั้งหลาย ผู้ให้เจริญใจอยู่เป็นนิตย์ ขอพระผู้มีพระภาค
                โปรดสั่งสอนข้าพระองค์ ขอพระผู้มีพระภาค โปรดพร่ำสอนข้าพระองค์
                ด้วยธรรมที่เป็นไปเพื่อประโยชน์ เพื่อความสุขแก่ข้าพระองค์ ตลอดกาลนานเถิด
              </>
            }
          />
          <DialogueBlock
            isBuddha={true}
            speaker="พระผู้มีพระภาคตรัสว่า"
            text={
              <>
                นั่นถูกแล้วๆ คฤหบดี อันที่จริง กายนี้กระสับกระส่าย เป็นดังว่าฟองไข่
                อันผิวหนังหุ้มไว้ ดูกรคฤหบดี ก็บุคคลผู้บริหารกายนี้อยู่
                พึงรับรองความเป็นผู้ไม่มีโรคได้ แม้เพียงครู่เดียว จะมีอะไรเล่า นอกจากความเป็นคนเขลา
                ดูกรคฤหบดี เพราะเหตุนั้นแหละ ท่านพึงศึกษาอย่างนี้ว่า{' '}
                <span className="font-bold underline decoration-indigo-300 underline-offset-8">
                  เมื่อเรามีกายกระสับกระส่ายอยู่ จิตของเราจักไม่กระสับกระส่าย
                </span>{' '}
                ดูกรคฤหบดี ท่านพึงศึกษาอย่างนี้แล
              </>
            }
          />
        </IntrospectionCard>

        {/* ส่วนที่ 2: การสนทนากับท่านพระสารีบุตร (Recounting) */}
        <div className="my-16">
          <IntrospectionCard title="การสนทนากับท่านพระสารีบุตร">
            <div className="space-y-6 text-xl leading-relaxed text-slate-700 italic mb-10">
              <p>
                ครั้งนั้นแล คฤหบดีชื่อนกุลบิดา ชื่นชมยินดีพระภาษิต ของพระผู้มีพระภาค ลุกจากอาสนะ
                ถวายอภิวาทพระผู้มีพระภาค ทำประทักษิณแล้ว เข้าไปหาท่านพระสารีบุตร อภิวาทแล้ว นั่งอยู่
                ณ ที่ควรส่วนข้างหนึ่ง
              </p>
            </div>

            <DialogueBlock
              speaker="ท่านพระสารีบุตรกล่าวกะคฤหบดีว่า"
              text="คฤหบดี อินทรีย์ของท่านผ่องใสนัก สีหน้าของท่านบริสุทธิ์ เปล่งปลั่ง วันนี้ ท่านได้ฟังธรรมีกถา ในที่เฉพาะพระพักตร์ พระผู้มีพระภาคหรือ?"
            />
            <DialogueBlock
              speaker="นกุลปิตคฤหบดีตอบว่า"
              text="ข้าแต่ท่านผู้เจริญ ไฉนจะไม่เป็นอย่างนี้เล่า พระผู้มีพระภาค ทรงหลั่งอมฤตธรรม รดข้าพเจ้าด้วยธรรมีกถา."
            />
            <DialogueBlock
              speaker="ท่านพระสารีบุตรถามว่า"
              text="ดูกรคฤหบดี พระผู้มีพระภาคทรงหลั่งอมฤตธรรม รดท่านด้วยธรรมีกถาอย่างไรเล่า?"
            />

            {/* ส่วนที่นกุลปิตคฤหบดีเล่าพุทธพจน์ฉบับเต็ม */}
            <DialogueBlock
              speaker="นกุลปิตคฤหบดีตอบว่า"
              text={
                <>
                  ข้าแต่ท่านผู้เจริญ ข้าพเจ้าเข้าไปเฝ้าพระผู้มีพระภาค ถวายอภิวาทแล้ว นั่งอยู่ ณ
                  ที่ควรส่วนข้างหนึ่งแล้ว ได้กราบทูลพระผู้มีพระภาคว่า พระพุทธเจ้าข้า
                  ข้าพระองค์เป็นผู้แก่เฒ่า เป็นผู้ใหญ่ ล่วงกาลผ่านวัยแล้วโดยลำดับ
                  มีกายกระสับกระส่ายเจ็บป่วยเนืองๆ พระพุทธเจ้าข้า ก็ข้าพระองค์
                  มิได้เห็นพระผู้มีพระภาค และภิกษุทั้งหลาย ผู้ให้เจริญใจอยู่เป็นนิตย์
                  ขอพระผู้มีพระภาค โปรดสั่งสอนข้าพระองค์ ขอพระผู้มีพระภาค โปรดพร่ำสอนข้าพระองค์
                  ด้วยธรรมที่เป็นไปเพื่อประโยชน์ เพื่อความสุขแก่ข้าพระองค์ ตลอดกาลนานเถิด
                  <br />
                  <br />
                  เมื่อข้าพเจ้ากราบทูลอย่างนี้แล้ว พระผู้มีพระภาคตรัสว่า นั่นถูกแล้วๆ คฤหบดี
                  อันที่จริงกายนี้กระสับกระส่าย เป็นดังว่าฟองไข่ อันผิวหนังหุ้มไว้ ดูกรคฤหบดี
                  ก็บุคคลผู้บริหารกายนี้อยู่ พึงรับรองความเป็นผู้ไม่มีโรค ได้แม้เพียงครู่เดียว
                  จะมีอะไรเล่า นอกจากความเป็นคนเขลา ดูกรคฤหบดี เพราะเหตุนั้นแหละ
                  ท่านพึงศึกษาอย่างนี้ว่า เมื่อเรามีกายกระสับกระส่ายอยู่
                  จิตของเราจักไม่กระสับกระส่าย ดูกรคฤหบดี ท่านพึงศึกษาอย่างนี้แล
                  <br />
                  <br />
                  ข้าแต่พระองค์ผู้เจริญ พระผู้มีพระภาคทรงหลั่งอมฤตธรรม
                  รดข้าพเจ้าด้วยธรรมีกถาอย่างนี้แล.
                </>
              }
            />

            <DialogueBlock
              speaker="ท่านพระสารีบุตรถามต่อไปว่า"
              text="ดูกรคฤหบดี ก็ท่านมิได้ทูลสอบถาม พระผู้มีพระภาคต่อไปว่า พระพุทธเจ้าข้า ด้วยเหตุเท่าไรหนอ? บุคคลจึงชื่อว่า เป็นผู้มีกายกระสับกระส่าย และเป็นผู้มีจิตกระสับกระส่าย และก็ด้วยเหตุเท่าไรหนอ? บุคคลแม้เป็นผู้มีกายกระสับกระส่าย แต่หาเป็นผู้มีจิตกระสับกระส่ายไม่"
            />
            <DialogueBlock
              speaker="นกุลปิตคฤหบดีตอบว่า"
              text="ข้าแต่ท่านผู้เจริญ ข้าพเจ้ามาแม้แต่ที่ไกล เพื่อจะทราบเนื้อความแห่งภาษิตนั้น ในสำนักท่านพระสารีบุตร ดีละหนอ ขอเนื้อความแห่งภาษิตนั้นจงแจ่มแจ้ง กะท่านพระสารีบุตรเถิด."
            />
          </IntrospectionCard>
        </div>

        {/* ส่วนที่ 3: สักกายทิฏฐิ 20 (เหตุแห่งจิตกระสับกระส่าย) */}
        <div className="my-16">
          <h4 className="text-center text-slate-400 font-medium uppercase tracking-widest mb-8">
            สักกายทิฏฐิ ๒๐
          </h4>
          <IntrospectionCard>
            <div className="flex items-center gap-3 mb-8 text-rose-700 border-b pb-4">
              <FaCircleXmark className="text-2xl" />
              <h3 className="text-2xl font-bold">ผู้มีกายและจิตกระสับกระส่าย</h3>
            </div>
            <div className="space-y-8 text-xl leading-relaxed text-slate-700">
              <p className="font-bold text-indigo-800">
                ดูกรคฤหบดี ก็อย่างไรเล่า? บุคคลจึงชื่อว่า เป็นผู้มีกายกระสับกระส่ายด้วย
                จึงชื่อว่าเป็นผู้มีจิตกระสับกระส่ายด้วย
              </p>
              <p className="italic text-slate-500">
                คือปุถุชนผู้มิได้สดับแล้วในโลกนี้ มิได้เห็นพระอริยะทั้งหลาย ไม่ฉลาดในธรรมของพระอริยะ
                มิได้รับแนะนำในอริยธรรม มิได้เห็นสัตบุรุษทั้งหลาย ไม่ฉลาดในธรรมของสัตบุรุษ
                มิได้รับแนะนำในสัปปุริสธรรม
              </p>

              <div className="grid gap-6">
                {['รูป', 'เวทนา', 'สัญญา', 'สังขาร', 'วิญญาณ'].map((item, idx) => (
                  <div key={idx} className="bg-rose-50 p-6 rounded-2xl border-l-4 border-rose-400">
                    <p className="font-bold text-rose-900 mb-2">พิจารณาใน{item}:</p>
                    <p>
                      ย่อมเห็น{item}โดย ความเป็นตน ๑ ย่อมเห็นตนมี{item} ๑ ย่อมเห็น{item}ในตน ๑
                      ย่อมเห็นตนใน{item} ๑
                    </p>
                    <p className="mt-2 text-rose-700">
                      เป็นผู้ตั้งอยู่ด้วยความยึดมั่นว่า{' '}
                      <span className="font-bold">
                        เราเป็น{item} {item}ของเรา
                      </span>{' '}
                      เมื่อเขาตั้งอยู่ด้วยความยึดมั่นว่า เราเป็น{item} {item}ของเรา {item}
                      นั้นย่อมแปรปรวนเป็นอย่างอื่นไป เพราะ{item}แปรปรวนเป็นอย่างอื่นไป{' '}
                      <span className="font-bold">
                        โสกะ ปริเทวะ ทุกข์ โทมนัส และอุปายาสจึงเกิดขึ้น
                      </span>
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-center font-bold text-rose-800 pt-4">
                ดูกรคฤหบดี ด้วยเหตุอย่างนี้แล บุคคลจึงชื่อว่าเป็นผู้มีกายกระสับกระส่าย
                และเป็นผู้มีจิตกระสับกระส่าย
              </p>
            </div>
          </IntrospectionCard>
        </div>

        {/* ส่วนที่ 4: อริยสาวก (ผู้จิตไม่กระสับกระส่าย) */}
        <div className="my-16">
          <IntrospectionCard highlight={true} className="bg-indigo-900 border-indigo-500">
            <div className="flex items-center gap-3 mb-8 text-white border-b border-white/20 pb-4">
              <FaCircleCheck className="text-2xl text-emerald-400" />
              <h3 className="text-2xl font-bold">ผู้มีกายกระสับกระส่าย แต่จิตไม่กระสับกระส่าย</h3>
            </div>
            <div className="space-y-8 text-xl leading-relaxed text-white/90">
              <p className="font-bold text-indigo-200">
                ดูกรคฤหบดี ก็อย่างไรเล่า? บุคคลแม้เป็นผู้มีกายกระสับกระส่าย
                แต่หาเป็นผู้มีจิตกระสับกระส่ายไม่
              </p>
              <p className="italic opacity-80">
                คือ อริยสาวกผู้ได้สดับแล้ว ในธรรมวินัยนี้ ผู้เห็นพระอริยะทั้งหลาย
                ผู้ฉลาดในธรรมของพระอริยะ ผู้ได้รับแนะนำดีแล้วในอริยธรรม ผู้เห็นสัตบุรุษทั้งหลาย
                ผู้ฉลาดในธรรมของสัตบุรุษ ผู้ได้รับแนะนำดีแล้วในสัปปุริสธรรม
              </p>

              <div className="grid gap-6">
                {['รูป', 'เวทนา', 'สัญญา', 'สังขาร', 'วิญญาณ'].map((item, idx) => (
                  <div key={idx} className="bg-white/10 p-6 rounded-2xl border border-white/10">
                    <p className="font-bold text-emerald-300 mb-2">พิจารณาใน{item}:</p>
                    <p>
                      ย่อมไม่เห็น{item}โดยความเป็นตน ๑ ย่อมไม่เห็นตนมี{item} ๑ ย่อมไม่เห็น{item}ในตน
                      ๑ ย่อมไม่เห็นตนใน{item} ๑
                    </p>
                    <p className="mt-2">
                      ไม่เป็นผู้ตั้งอยู่ด้วยความยึดมั่นว่า{' '}
                      <span className="font-bold text-white">
                        เราเป็น{item} {item}ของเรา
                      </span>{' '}
                      เมื่ออริยสาวกนั้น ไม่ตั้งอยู่ด้วยความยึดมั่นว่า เราเป็น{item} {item}ของเรา{' '}
                      {item}นั้นย่อมแปรปรวนเป็นอย่างอื่นไป เพราะ{item}แปรปรวนเป็นอย่างอื่นไป{' '}
                      <span className="font-bold text-emerald-400 underline decoration-emerald-400/30 underline-offset-8">
                        โสกะ ปริเทวะ ทุกข์ โทมนัส และอุปายาสจึงไม่เกิดขึ้น
                      </span>
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-center font-bold text-white text-2xl pt-4">
                ดูกรคฤหบดี อย่างนี้แล บุคคลแม้มีกายกระสับกระส่าย แต่หาเป็นผู้มีจิตกระสับกระส่ายไม่
              </p>
            </div>
          </IntrospectionCard>
        </div>

        {/* ส่วนสรุปปิดท้าย */}
        <div className="mt-12">
          <IntrospectionCard>
            <div className="flex flex-col items-center text-center space-y-6 py-4">
              <FaQuoteLeft className="text-indigo-200 text-4xl opacity-50" />
              <p className="text-xl md:text-2xl leading-relaxed text-slate-700">
                ท่านพระสารีบุตรได้กล่าวคำเช่นนี้แล้ว <br />
                นกุลปิตคฤหบดี ชื่นชมยินดีภาษิตของท่านพระสารีบุตร ฉะนี้แล
              </p>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link
            href="/extra/suttanta-vol-9/lesson-02"
            className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-indigo-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: เทวทหสูตร
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
