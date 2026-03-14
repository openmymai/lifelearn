// src/app/extra/paticcasamuppada/lesson-07/page.tsx
import IntrospectionCard from '@/components/ui/IntrospectionCard';
import Link from 'next/link';
import {
  FaArrowRight,
  FaSitemap,
  FaTree,
  FaHandsPraying,
  FaLink,
  FaCircleInfo,
  FaQuoteLeft,
  FaArrowDownLong,
} from 'react-icons/fa6';

export default function PaticcasamuppadaLesson07() {
  // ข้อมูลการจำแนกธรรม (คงเนื้อหาเดิมทุกตัวอักษร)
  const classifications = [
    {
      title: 'ชราและมรณะ',
      content: (
        <div className="space-y-4">
          <p>
            <span className="font-bold text-cyan-700">ชรา:</span> ความแก่ ภาวะของความแก่ ฟันหลุด
            ผมหงอก หนังเป็นเกลียว ความเสื่อมแห่งอายุ ความแก่หง่อมแห่งอินทรีย์
            ในหมู่สัตว์นั้นๆของเหล่าสัตว์นั้นๆ นี้เรียกว่าชรา
          </p>
          <p>
            <span className="font-bold text-rose-700">มรณะ:</span> ก็มรณะเป็นไฉน
            ความเคลื่อนภาวะของความเคลื่อน ความทำลายความอันตรธานมฤตยู ความตาย กาลกิริยา
            ความแตกแห่งขันธ์ ความทอดทิ้งซากศพ ความขาดแห่งชีวิตินทรีย์ จากนั้นของเหล่าสัตว์นั้นๆ
            นี้เรียกว่ามรณะ
          </p>
        </div>
      ),
    },
    {
      title: 'ชาติ',
      content:
        'ความเกิดความบังเกิด ความหยั่งลง เกิด เกิดจำเพาะ ความปรากฏแห่งขันธ์ ความได้อายตนะครบในหมู่สัตว์นั้นๆ ของเหล่าสัตว์นั้นๆ นี้เรียกว่าชาติ',
    },
    {
      title: 'ภพ',
      content: 'ภพ 3 เหล่านี้คือ กามภพ รูปภพ อรูปภพ นี้เรียกว่าภพ',
    },
    {
      title: 'อุปาทาน',
      content:
        'อุปาทาน 4 เหล่านี้ คือกามุปาทาน ทิฏฐุปาทาน สีลพัตตุปาทาน อัตตวาทุปาทาน นี้เรียกว่าอุปาทาน',
    },
    {
      title: 'ตัณหา',
      content:
        'ตัณหา 6 หมวดเหล่านี้คือ รูปตัณหา สัททตัณหา คันธตัณหา รสตัณหา โผฏฐัพพะตัณหา ธัมมตัณหา นี้เรียกว่าตัณหา',
    },
    {
      title: 'เวทนา',
      content:
        'เวทนา 6 หมวดเหล่านี้คือ จักขุสัมผัสสชาเวทนา โสตสัมผัสสชาเวทนา ฆานสัมมผัสสชาเวทนา ชิวหาสัมผัสสชาเวทนา กายสัมผัสสชาเวทนา มโนสัมผัสสชาเวทนา นี้เรียกว่าเวทนา',
    },
    {
      title: 'ผัสสะ',
      content:
        'ผัสสะ 6 หมวดเหล่านี้คือ จักขุสัมผัส โสตะสัมผัส ฆานสัมผัส ชิวหาสัมผัส กายสัมผัส มโนสัมผัส นี้เรียกว่าผัสสะ',
    },
    {
      title: 'สฬายตนะ',
      content: 'สฬายตนะคือ ตา หู จมูก ลิ้น กาย ใจ นี้เรียกว่าสฬายตนะ',
    },
    {
      title: 'นามรูป',
      content: (
        <div className="space-y-2">
          <p>
            <span className="font-bold text-cyan-700">นาม:</span> เวทนา สัญญา เจตนา ผัสสะ มนสิการ
            นี้เรียกว่านาม
          </p>
          <p>
            <span className="font-bold text-cyan-700">รูป:</span> มหาภูตรูป 4
            และรูปที่อาศัยมหาภูตรูป 4 นี้เรียกว่ารูป
          </p>
          <p className="italic">นามและรูปดังพรรณนามาฉะนี้ เรียกว่านามรูป</p>
        </div>
      ),
    },
    {
      title: 'วิญญาณ',
      content:
        'วิญญาณ 6 หมวดเหล่านี้คือ จักขุวิญญาณ โสตะวิญญาณ ฆานวิญญาณ ชิวหาวิญญาณ กายวิญญาณ มโนวิญญาณ นี้เรียกว่าวิญญาณ',
    },
    {
      title: 'สังขาร',
      content: 'สังขาร 3 เหล่านี้คือ กายสังขาร วจีสังขาร จิตสังขาร นี้เรียกว่าสังขาร',
    },
    {
      title: 'อวิชชา',
      content:
        'ความไม่รู้ในทุกข์ ความไม่รู้ในเหตุเกิดแห่งทุกข์ ความไม่รู้ในความดับทุกข์ ความไม่รู้ในปฏิปทา ที่จะให้ถึงความดับทุกข์ นี้เรียกว่าอวิชชา',
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
            วิภังคสูตร
          </h2>
          <p className="text-slate-500 text-lg italic">ว่าด้วยการจำแนกปฏิจจสมุปบาท</p>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนที่ 1: บทนำ */}
        <IntrospectionCard>
          <div className="flex items-center gap-3 mb-6 text-cyan-700 border-b pb-4">
            <FaTree className="text-2xl" />
            <h3 className="text-2xl font-bold">ณ พระวิหารเชตวัน</h3>
          </div>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700">
            <p className="italic">
              พระผู้มีพระภาคประทับอยู่ ณ พระวิหารเชตวัน อารามของท่านอนาถบิณฑิกเศรษฐี
              เขตพระนครสาวัตถี
            </p>
            <div className="bg-cyan-50 p-8 rounded-3xl border-l-4 border-cyan-500 not-italic shadow-inner">
              <p className="text-cyan-900 font-bold mb-4 flex items-center gap-2">
                <FaHandsPraying /> พระผู้มีพระภาคได้ตรัสว่า
              </p>
              <p className="text-2xl text-slate-800 leading-relaxed">
                ดูกรภิกษุทั้งหลาย เราจักแสดงจักจำแนกปฏิจจสมุปบาทแก่พวกเธอ
                พวกเธอจงฟังปฏิจจสมุปบาทนั้น จงใส่ใจให้ดีเถิดเราจักกล่าว
              </p>
              <p className="mt-4 text-slate-500 italic">ภิกษุเหล่านั้นทูลรับพระผู้มีพระภาคแล้ว</p>
            </div>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 2: สายเกิด (สรุปย่อ) */}
        <div className="my-12">
          <IntrospectionCard highlight={true} className="bg-cyan-600 shadow-cyan-200">
            <p className="text-center font-bold text-cyan-100 mb-6 uppercase tracking-widest">
              ปฏิจจสมุปบาทวาร
            </p>
            <div className="text-xl md:text-2xl leading-loose text-center">
              เพราะอวิชชาเป็นปัจจัยจึงมีสังขาร
              <br />
              เพราะสังขารเป็นปัจจัยจึงมีวิญญาณ
              <br />
              เพราะวิญญาณเป็นปัจจัยจึงมีนามรูป
              <br />
              เพราะนามรูปเป็นปัจจัยจึงมีสฬายตนะ
              <br />
              เพราะสฬายตนะเป็นปัจจัยจึงมีผัสสะ
              <br />
              เพราะผัสสะเป็นปัจจัยจึงมีเวทนา
              <br />
              เพราะเวทนาเป็นปัจจัยจึงมีตัณหา
              <br />
              เพราะตัณหาเป็นปัจจัยจึงมีอุปาทาน
              <br />
              เพราะอุปาทานเป็นปัจจัยจึงมีภพ
              <br />
              เพราะภพเป็นปัจจัยจึงมีชาติ
              <br />
              เพราะชาติเป็นปัจจัยจึงมีชรา
              <br />
              และมรณะโสกะปริเทวะ ทุกข์โทมนัสและอุปายาส <br />
              <span className="font-bold text-white text-xl md:text-2xl block mt-4">
                ความเกิดขึ้นแห่งกองทุกข์ทั้งมวลนี้ ย่อมมีด้วยประการอย่างนี้
              </span>
            </div>
          </IntrospectionCard>
        </div>

        {/* ส่วนที่ 3: การจำแนกธรรม (The Vibhanga) */}
        <div className="space-y-8 my-16">
          <h4 className="text-center text-slate-400 font-medium uppercase tracking-widest mb-10">
            เนื้อหาการจำแนกธรรม
          </h4>
          {classifications.map((item, idx) => (
            <IntrospectionCard key={idx}>
              <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-2xl font-bold text-slate-800">ก็{item.title}เป็นไฉน</h3>
              </div>
              <div className="text-xl md:text-2xl leading-relaxed text-slate-700">
                {typeof item.content === 'string' ? <p>{item.content}</p> : item.content}
              </div>
            </IntrospectionCard>
          ))}
        </div>

        {/* ส่วนที่ 4: บทสรุปสายเกิดและสายดับ */}
        <div className="mt-16 space-y-8">
          <IntrospectionCard title="บทสรุปการพิจารณา">
            <div className="space-y-8 text-xl md:text-2xl leading-relaxed text-slate-700">
              <div className="space-y-4">
                <p className="font-bold text-cyan-700">ดูกรภิกษุทั้งหลาย</p>
                <p>
                  เพราะอวิชชาเป็นปัจจัยจึงมีสังขาร เพราะสังขารเป็นปัจจัยจึงมีวิญญาณ ดังพรรณนามาฉะนี้
                  ความเกิดขึ้นแห่งกองทุกข์ทั้งมวลนี้ ย่อมมีด้วยประการอย่างนี้
                </p>
              </div>

              <div className="flex justify-center py-4">
                <FaArrowDownLong className="text-cyan-200 text-4xl animate-bounce" />
              </div>

              <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <FaLink className="absolute -right-10 -bottom-10 text-white/5 text-[15rem] rotate-12" />
                <div className="relative z-10 space-y-6">
                  <p>
                    ก็เพราะอวิชชานั่นแหละ ดับด้วยการสำรอกโดยไม่เหลือ สังขารจึงดับ
                    เพราะสังขารดับวิญญาณจึงดับ
                  </p>
                  <p className="text-3xl md:text-4xl font-bold text-cyan-400 underline decoration-cyan-500 underline-offset-8">
                    ความดับแห่งกองทุกข์ทั้งมวลนี้ ย่อมมีด้วยประการอย่างนี้
                  </p>
                </div>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link
            href="/extra/paticcasamuppada/lesson-08"
            className="inline-flex items-center gap-3 bg-cyan-600 hover:bg-cyan-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-cyan-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: อาหารสูตร
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
