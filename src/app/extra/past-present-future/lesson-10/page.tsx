// src/app/extra/past-present-future/lesson-10/page.tsx
import IntrospectionCard from '@/components/ui/IntrospectionCard';
import Link from 'next/link';
import {
  FaArrowRight,
  FaClockRotateLeft,
  FaUserGroup,
  FaCheckDouble,
  FaQuoteLeft,
  FaPersonWalkingArrowRight,
  FaCircleInfo,
} from 'react-icons/fa6';

export default function PastPresentFutureLesson10() {
  // ข้อมูลฐานะ 5 ประการ
  const fiveBases = [
    'เรามีความแก่เป็นธรรมดา ไม่ล่วงพ้นความแก่ไปได้ 1',
    'เรามีความเจ็บไข้เป็นธรรมดา ไม่ล่วงพ้นความเจ็บไข้ไปได้ 1',
    'เรามีความตายเป็นธรรมดา ไม่ล่วงพ้นความตายไปได้ 1',
    'เราต้องพลัดพรากจากของรัก ของชอบใจทั้งสิ้น 1',
    'เรามีกรรมเป็นของตน เป็นทายาทแห่งกรรม มีกรรมเป็นกำเนิด มีกรรมเป็นเผ่าพันธุ์ มีกรรมเป็นที่พึ่ง จะทำกรรมใดไว้ดีก็ตาม ชั่วก็ตาม เราจะเป็นผู้รับผลของกรรมนั้น 1',
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-teal-600 font-bold tracking-widest uppercase text-sm">
            วิปัสสนาภาวนาเพิ่มเติม
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">
            ฐานสูตร
          </h2>
          <p className="text-slate-500 text-lg italic">ว่าด้วยฐานะที่ควรพิจารณาเนืองๆ 5 ประการ</p>
          <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนที่ 1: บทนำและรายการฐานะ 5 */}
        <IntrospectionCard>
          <div className="flex items-center gap-3 mb-8 text-teal-700 border-b pb-4">
            <FaUserGroup className="text-2xl" />
            <h3 className="text-2xl font-bold">ฐานะที่ควรพิจารณาเนืองๆ</h3>
          </div>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700">
            <p className="font-medium italic text-slate-500">
              ดูกรภิกษุทั้งหลายฐานะ 5 ประการนี้ อันสตรี บุรุษ คฤหัสถ์หรือบรรพชิต ควรพิจารณาเนืองๆ 5
              ประการเป็นไฉน
            </p>
            <p className="font-bold text-teal-800">
              คือ สตรี บุรุษ คฤหัสถ์ หรือบรรพชิต ควรพิจารณาเนืองๆว่า
            </p>

            <div className="space-y-4 mt-6">
              {fiveBases.map((text, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 bg-teal-50/50 p-5 rounded-2xl border border-teal-100 shadow-sm"
                >
                  <span className="flex-none w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    {idx + 1}
                  </span>
                  <p className="text-teal-900 font-medium">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 2: อำนาจประโยชน์ของการพิจารณา (แยกเป็นข้อๆ) */}
        <div className="space-y-10 my-16">
          <h4 className="text-center text-slate-400 font-medium uppercase tracking-widest">
            เพราะอาศัยอำนาจประโยชน์อะไร
          </h4>

          {/* 1. ความแก่ */}
          <IntrospectionCard>
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <p className="font-bold text-teal-800">
                ควรพิจารณาเนืองๆว่า เรามีความแก่เป็นธรรมดา ไม่ล่วงพ้นความแก่ไปได้
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-teal-500">
                <p>
                  ดูกรภิกษุทั้งหลาย ความมัวเมาในความเป็นหนุ่มสาว มีอยู่แก่สัตว์ทั้งหลาย
                  ซึ่งเป็นเหตุให้สัตว์ทั้งหลาย ประพฤติทุจริตด้วยกายวาจาใจ
                  เมื่อเขาพิจารณาฐานะนั้นอยู่เนืองๆ ย่อมละความมัวเมา ในความเป็นหนุ่มสาวนั้นได้
                  โดยสิ้นเชิง หรือทำให้เบาบางลงได้
                </p>
              </div>
              <p className="text-sm text-slate-400 italic">
                เพราะอาศัยอำนาจประโยชน์นี้แล สตรี บุรุษ คฤหัสถ์ หรือบรรพชิต จึงควรพิจารณาเนืองๆ
              </p>
            </div>
          </IntrospectionCard>

          {/* 2. ความเจ็บไข้ */}
          <IntrospectionCard>
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <p className="font-bold text-teal-800">
                ควรพิจารณาเนืองๆว่า เรามีความเจ็บไข้เป็นธรรมดา ไม่ล่วงพ้นความเจ็บไข้ไปได้
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-teal-500">
                <p>
                  ดูกรภิกษุทั้งหลาย ความมัวเมาในความไม่มีโรค มีอยู่แก่สัตว์ทั้งหลาย
                  ซึ่งเป็นเหตุให้สัตว์ทั้งหลาย ประพฤติทุจริตด้วยกายวาจาใจ
                  เมื่อเขาพิจารณาฐานะนั้นอยู่เนืองๆ ย่อมละความมัวเมา ในความไม่มีโรคนั้นได้
                  โดยสิ้นเชิง หรือทำให้เบาบางลงได้
                </p>
              </div>
              <p className="text-sm text-slate-400 italic">
                เพราะอาศัยอำนาจประโยชน์นี้แล สตรี บุรุษ คฤหัสถ์ หรือบรรพชิต จึงควรพิจารณาเนืองๆ
              </p>
            </div>
          </IntrospectionCard>

          {/* 3. ความตาย */}
          <IntrospectionCard>
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <p className="font-bold text-teal-800">
                ควรพิจารณาเนืองๆว่า เรามีความตายเป็นธรรมดา ไม่ล่วงพ้นความตายไปได้
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-teal-500">
                <p>
                  ดูกรภิกษุทั้งหลาย ความมัวเมาในชีวิตมีอยู่แก่สัตว์ทั้งหลาย
                  ซึ่งเป็นเหตุให้สัตว์ทั้งหลาย ประพฤติทุจริตด้วยกายวาจาใจ
                  เมื่อเข้าพิจารณาฐานะนั้นอยู่เนืองๆ ย่อมละความมัวเมาในชีวิตนั้นได้ โดยสิ้นเชิง
                  หรือทำให้เบาบางลงได้
                </p>
              </div>
              <p className="text-sm text-slate-400 italic">
                เพราะอาศัยอำนาจประโยชน์นี้แล สตรี บุรุษ คฤหัสถ์ หรือบรรพชิต จึงควรพิจารณาเนืองๆ
              </p>
            </div>
          </IntrospectionCard>

          {/* 4. การพลัดพราก */}
          <IntrospectionCard>
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <p className="font-bold text-teal-800">
                ควรพิจารณาเนืองๆว่า เราจะต้องพลัดพรากจากของรัก ของชอบใจทั้งสิ้น
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-teal-500">
                <p>
                  ดูกรภิกษุทั้งหลาย ความพอใจ ความรักใคร่ ในของรักมีอยู่แก่สัตว์ทั้งหลาย
                  ซึ่งเป็นเหตุให้สัตว์ทั้งหลาย ประพฤติทุจริตด้วยกายวาจาใจ
                  เมื่อเขาพิจารณาฐานะนั้นอยู่เนืองๆ ย่อมละความพอใจความรักใคร่นั้นได้ โดยสิ้นเชิง
                  หรือทำให้เบาบางลงได้
                </p>
              </div>
              <p className="text-sm text-slate-400 italic">
                เพราะอาศัยอำนาจประโยชน์นี้แล สตรี บุรุษ คฤหัสถ์ หรือบรรพชิต จึงควรพิจารณาเนืองๆ
              </p>
            </div>
          </IntrospectionCard>

          {/* 5. กรรม */}
          <IntrospectionCard>
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <p className="font-bold text-teal-800">
                ควรพิจารณาเนืองๆว่า เรามีกรรมเป็นของตน เป็นทายาทแห่งกรรม มีกรรมเป็นกำเนิด
                มีกรรมเป็นเผ่าพันธุ์ มีกรรมเป็นที่พึ่ง จะทำกรรมใดดีก็ตามชั่วก็ตาม
                เราจะเป็นผู้รับผลของกรรมนั้น
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-teal-500">
                <p>
                  ดูกรภิกษุทั้งหลาย กายทุจริตวจีทุจริตมโนทุจริต มีอยู่แก่สัตว์ทั้งหลาย
                  เมื่อเขาพิจารณาฐานะนั้นอยู่เนืองๆ ย่อมละทุจริตได้โดยสิ้นเชิง หรือทำให้เบาบางลงได้
                </p>
              </div>
              <p className="text-sm text-slate-400 italic">
                เพราะอาศัยอำนาจประโยชน์นี้แล สตรี บุรุษ คฤหัสถ์ หรือบรรพชิต จึงควรพิจารณาเนืองๆ
              </p>
            </div>
          </IntrospectionCard>
        </div>

        {/* ส่วนที่ 3: ผลแห่งการพิจารณา (มรรคเกิดขึ้น) */}
        <div className="mt-16 space-y-8">
          <h4 className="text-center text-slate-400 font-medium uppercase tracking-widest">
            ว่าด้วยผลแห่งการพิจารณาฐานะ 5
          </h4>

          <IntrospectionCard highlight={true}>
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaPersonWalkingArrowRight className="text-teal-200 text-5xl" />
              <div className="space-y-10 text-xl md:text-2xl leading-relaxed text-white/90">
                <p>
                  อริยสาวกนั้นย่อมพิจารณา เห็นดังนี้ว่าไม่ใช่เราแต่ผู้เดียวเท่านั้น ที่มีความแก่...
                  ความเจ็บไข้... ความตาย... การพลัดพราก... และมีกรรมเป็นของตน
                </p>

                <div className="bg-white/10 p-8 rounded-[2.5rem] border border-white/20 shadow-2xl">
                  <p className="text-teal-100 font-bold mb-4 uppercase tracking-widest text-sm">
                    สภาวะธรรมสากล
                  </p>
                  <p>
                    โดยที่แท้สัตว์ทั้งปวงบรรดา ที่มีการมาการไปการจุติการอุปบัติ ล้วนมีความแก่ เจ็บ
                    ตาย พลัดพราก และมีกรรมเป็นของตนเป็นธรรมดา ไม่ล่วงพ้นไปได้
                  </p>
                </div>

                <div className="bg-teal-900 p-8 rounded-3xl border-l-8 border-amber-400 text-left">
                  <p className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <FaCheckDouble className="text-amber-400" />{' '}
                    เมื่ออริยสาวกนั้นพิจารณาฐานะนั้นอยู่เนืองๆ
                  </p>
                  <p className="text-amber-100 text-3xl font-black underline decoration-amber-500 underline-offset-8">
                    มรรคย่อมเกิดขึ้น
                  </p>
                  <p className="mt-6">
                    อริยสาวกนั้นย่อมเสพอบรม ทำให้มากซึ่งมรรคนั้น
                    เมื่อเสพอบรมทำให้มากซึ่งมรรคนั้นอยู่{' '}
                    <span className="text-white font-bold">ย่อมละสังโยชน์ได้ อนุสัยย่อมสิ้นไป</span>
                  </p>
                </div>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* ส่วนที่ 4: บทสรุปปิดท้าย (การออกบวชและนิพพาน) */}
        <div className="mt-16">
          <IntrospectionCard>
            <div className="flex gap-6 items-start">
              <FaQuoteLeft className="text-teal-200 text-5xl flex-shrink-0" />
              <div className="space-y-6 text-xl leading-relaxed text-slate-700">
                <p>
                  สัตว์ทั้งหลายย่อมเป็นไปตามธรรมดา พวกปุถุชนย่อมเกลียด ถ้าเราพึงเกลียดธรรมนั้น
                  ในพวกสัตว์ผู้มีอย่างนั้นเป็นธรรมดา ข้อนั้นไม่สมควรแก่เราผู้เป็นอยู่อย่างนี้
                </p>
                <div className="bg-slate-900 text-teal-100 p-8 rounded-3xl shadow-inner">
                  <p className="text-center leading-relaxed">
                    เรานั้นเป็นอยู่อย่างนี้ ทราบธรรมที่หาอุปธิมิได้ เห็นการออกบวช โดยเป็นธรรมเกษม
                    ครอบงำความมัวเมาทั้งปวง ในความไม่มีโรค ในความเป็นหนุ่มสาว
                    และในชีวิตความอุตสาหะได้มีแล้วแก่เรา <br />
                    <span className="block mt-4 text-white font-bold text-2xl underline decoration-teal-500 underline-offset-8">
                      ผู้เห็นเฉพาะซึ่งนิพพาน
                    </span>
                  </p>
                </div>
                <p className="text-center font-bold text-teal-800 pt-4">
                  บัดนี้เราไม่ควรเพื่อเสพกามทั้งหลาย จะเป็นผู้ประพฤติไม่ถอยหลัง
                  ตั้งหน้าประพฤติพรหมจรรย์
                </p>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link
            href="/extra/paticcasamuppada"
            className="inline-flex items-center gap-3 bg-teal-600 hover:bg-teal-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-teal-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: วิปัสสนาภาวนา พิจารณาขันธ์ 5
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
