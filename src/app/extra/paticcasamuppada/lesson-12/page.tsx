// src/app/extra/paticcasamuppada/lesson-12/page.tsx
import IntrospectionCard from '@/components/ui/IntrospectionCard';
import Link from 'next/link';
import {
  FaArrowRight,
  FaClock,
  FaPersonCane,
  FaBedPulse,
  FaWheatAwnCircleExclamation,
  FaPeopleGroup,
  FaUsersSlash,
  FaQuoteLeft,
  FaCircleExclamation,
  FaBoltLightning,
} from 'react-icons/fa6';

export default function PaticcasamuppadaLesson12() {
  // ข้อมูลภัยในอนาคต 5 ประการ
  const futurePerils = [
    {
      id: 1,
      title: 'ภัยจากความชรา',
      icon: <FaPersonCane />,
      current:
        'ภิกษุในธรรมวินัยนี้ ย่อมพิจารณาเห็นดังนี้ว่า บัดนี้เรายังเป็นหนุ่มแน่น มีผมดำสนิท ประกอบด้วยความเป็นหนุ่ม อันเจริญตั้งอยู่ในปฐมวัย',
      peril:
        'ถึงกระนั้นก็มีสมัยที่ชรา ย่อมจะถูกต้องกายนี้ได้ ก็ผู้ที่แก่แล้วถูกชราครอบงำแล้ว จะมนสิการคำสั่งสอนของพระพุทธเจ้า ไม่ใช่ทำได้ง่าย จะเสพเสนาสนะอันสงัด คือป่า และป่าชัฏก็ไม่ใช่ทำได้ง่าย',
      resolution:
        'ก่อนที่ธรรมอันไม่น่าปรารถนา ไม่น่าใคร่ไม่น่าพอใจนั้นจะมาถึงเรา เราจะรีบปรารภความเพียร เพื่อถึงธรรมที่ยังไม่ถึง เพื่อทำให้แจ้งธรรม ที่ยังไม่ได้ทำให้แจ้งเสียก่อนทีเดียว ซึ่งเราประกอบแล้วแม้แก่ก็จักอยู่สบาย',
    },
    {
      id: 2,
      title: 'ภัยจากความเจ็บไข้',
      icon: <FaBedPulse />,
      current:
        'อีกประการหนึ่งภิกษุย่อมพิจารณาเห็นดังนี้ว่า บัดนี้เรามีอาพาธน้อยมีโรคเบาบาง ประกอบด้วยไฟธาตุ สำหรับย่อยอาหารสม่ำเสมอ ไม่เย็นนักไม่ร้อนนักขนาดกลาง ควรแก่การบำเพ็ญเพียร',
      peril:
        'แต่ย่อมมีสมัยที่พยาธิจะถูกต้องกายนี้ ก็ผู้ที่ป่วยไข้อันความป่วยไข้ครอบงำแล้ว จะมนสิการคำสั่งสอนของพระพุทธเจ้า ไม่ใช่ทำได้ง่าย',
      resolution: 'ซึ่งเราประกอบแล้วแม้ป่วยไข้ ก็จะอยู่สบาย',
    },
    {
      id: 3,
      title: 'ภัยจากทุพภิกขภัย (ข้าวแพง)',
      icon: <FaWheatAwnCircleExclamation />,
      current:
        'อีกประการหนึ่งภิกษุย่อมพิจารณาเห็นดังนี้ว่า บัดนี้แลข้าวกล้าดีบิณฑบาตก็หาได้ง่าย สะดวกแก่การแสวงหาเลี้ยงชีพ',
      peril:
        'แต่ก็ย่อมมีสมัยที่มีข้าวแพง ข้าวกล้าไม่ดีบิณฑบาตหาได้ยาก ไม่สะดวกแก่การแสวงหาเลี้ยงชีพ อนึ่งในสมัยข้าวแพง พวกมนุษย์ย่อมหลั่งไหลไปในที่ที่มีอาหารดี ในที่นั้นย่อมมีการอยู่คลุกคลีด้วยหมู่คณะ มีการอยู่พลุกพล่านกัน เมื่อมีการอยู่คลุกคลีด้วยหมู่คณะ อยู่พลุกพล่านกัน จะมนสิการคำสั่งสอนของพระพุทธเจ้า ไม่ใช่ทำได้ง่าย',
      resolution: 'ซึ่งเราประกอบแล้วก็จักอยู่สบาย แม้ในเวลาทุพภิกขภัย',
    },
    {
      id: 4,
      title: 'ภัยจากความไม่สงบ',
      icon: <FaPeopleGroup />,
      current:
        'อีกประการหนึ่งภิกษุย่อมพิจารณาเห็นดังนี้ว่า บัดนี้แลมนุษย์ทั้งหลายย่อมเป็นผู้พร้อมเพรียงกัน ชื่นชมต่อกันไม่วิวาทกัน เป็นดังน้ำนมกับน้ำ มองดูกันด้วยนัยน์ตาแสดงความรักอยู่',
      peril:
        'แต่ย่อมมีสมัยที่มีภัยมีความปั่นป่วน ในดงประชาชนวุ่นวาย และเมื่อมีภัยพวกมนุษย์ย่อมหลั่งไหล ไปในที่ที่ปลอดภัย ในที่นั้นย่อมมีการอยู่คลุกคลีด้วยหมู่คณะ มีการอยู่พลุกพล่านกัน เมื่อมีการอยู่คลุกคลีด้วยหมู่คณะ อยู่พลุกพล่าน จะมนสิการคำสั่งสอนของพระพุทธเจ้า ไม่ใช่ทำได้ง่าย',
      resolution: 'ซึ่งเราประกอบแล้วก็จักอยู่สบาย แม้ในสมัยที่มีภัย',
    },
    {
      id: 5,
      title: 'ภัยจากสงฆ์แตกกัน',
      icon: <FaUsersSlash />,
      current:
        'อีกประการหนึ่งภิกษุย่อมพิจารณาเห็นดังนี้ว่า บัดนี้แลสงฆ์เป็นผู้พร้อมเพรียงกัน ชื่นชมต่อกันไม่วิวาทกัน มีอุเทศร่วมกันอยู่ผาสุข',
      peril:
        'แต่ก็ย่อมมีสมัยที่สงฆ์แตกกัน ก็เมื่อสงฆ์แตกกันแล้ว จะมนสิการคำสั่งสอนของพระพุทธเจ้า ไม่ใช่ทำได้ง่าย จะเสพเสนาสนะอันสงัดคือป่า และป่าชัฏก็ไม่ใช่ทำได้ง่าย',
      resolution:
        'ก่อนที่ธรรมอันไม่น่าปรารถนา ไม่น่าใคร่ไม่น่าพอใจนั้นจะมาถึงเรา เราจะรีบปรารภความเพียร เพื่อถึงธรรมที่ยังไม่ถึง เพื่อบรรลุธรรมที่ยังไม่ได้บรรลุ เพื่อทำให้แจ้งธรรมที่ยังไม่ได้ทำให้แจ้ง ซึ่งเราประกอบแล้วก็จะอยู่สบาย แม้ในเมื่อสงฆ์แตกกัน',
    },
  ];

  const coreResolution =
    'มีความเพียรมีใจเด็ดเดี่ยว เพื่อถึงธรรมที่ยังไม่ถึง เพื่อบรรลุธรรมที่ยังไม่ได้บรรลุ เพื่อทำให้แจ้งธรรม ที่ยังไม่ได้ทำให้แจ้ง ภัย 5 ประการเป็นไฉน คือ';

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-bold tracking-widest uppercase text-sm">
            วิปัสสนาภาวนาเพิ่มเติม
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">
            อนาคตสูตรที่ 2
          </h2>
          <p className="text-slate-500 text-lg italic">ว่าด้วยภัยในอนาคต 5 ประการ</p>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนที่ 1: บทนำความไม่ประมาท */}
        <IntrospectionCard highlight={true} className="bg-cyan-600 shadow-cyan-200">
          <div className="flex items-center gap-4 mb-6 text-white border-b border-white/20 pb-5">
            <FaBoltLightning className="text-3xl text-cyan-200 animate-pulse" />
            <h3 className="text-2xl font-bold">จงเป็นผู้ไม่ประมาท</h3>
          </div>
          <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white">
            <p className="font-medium italic opacity-90">
              ดูกรภิกษุทั้งหลาย ภิกษุผู้เห็นภัย ในอนาคต 5 ประการนี้ ก็ควรเป็นผู้ไม่ประมาท
            </p>
            <p className="font-bold text-cyan-50 bg-white/10 p-6 rounded-2xl border border-white/20">
              {coreResolution}
            </p>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 2: รายละเอียดภัย 5 ประการ */}
        <div className="my-16 space-y-12">
          <h4 className="text-center text-slate-400 font-large uppercase tracking-widest mb-10">
            ภัย 5 ประการเป็นไฉน คือ
          </h4>

          {futurePerils.map((peril) => (
            <IntrospectionCard key={peril.id}>
              <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-5">
                <div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center shadow-sm text-xl">
                  {peril.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800">
                  {peril.id}. {peril.title}
                </h3>
              </div>

              <div className="space-y-8 text-xl leading-relaxed text-slate-700">
                {/* สภาวะปัจจุบัน */}
                <div className="bg-emerald-50/50 p-6 rounded-2xl border-l-4 border-emerald-400">
                  <p className="text-emerald-800 font-medium">{peril.current}</p>
                </div>

                {/* ภัยที่อาจเกิดขึ้น */}
                <div className="bg-rose-50/50 p-6 rounded-2xl border-l-4 border-rose-400">
                  <p className="text-rose-800">{peril.peril}</p>
                </div>

                {/* ปณิธานความเพียร */}
                <div className="bg-cyan-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                  <FaClock className="absolute -right-4 -bottom-4 text-white/5 text-7xl rotate-12" />
                  <p className="relative z-10 font-bold text-cyan-100 mb-4">
                    ทางออกคือความไม่ประมาท:
                  </p>
                  <p className="relative z-10 leading-relaxed">{peril.resolution}</p>
                </div>

                <p className="text-center font-bold text-cyan-700 pt-4">
                  ภิกษุผู้เห็นภัยในอนาคตข้อที่ {peril.id} นี้ <br />
                  <span className="text-2xl underline decoration-cyan-300 underline-offset-8">
                    ควรเป็นผู้ไม่ประมาท
                  </span>
                </p>
              </div>
            </IntrospectionCard>
          ))}
        </div>

        {/* ส่วนที่ 3: บทสรุปปิดท้าย */}
        <div className="mt-16">
          <IntrospectionCard highlight={true} className="bg-slate-900 border-cyan-500">
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaQuoteLeft className="text-cyan-400 text-4xl opacity-50" />
              <div className="space-y-8 text-xl md:text-2xl leading-relaxed text-white/90">
                <p className="font-bold text-cyan-300">ดูกรภิกษุทั้งหลาย</p>
                <p>ภิกษุผู้เห็นภัยในอนาคต 5 ประการนี้ ควรเป็นผู้ไม่ประมาท</p>

                <div className="bg-white/10 p-8 rounded-[2.5rem] border border-white/20 shadow-2xl">
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    มีความเพียรมีใจเด็ดเดี่ยว อยู่เพื่อถึงธรรมที่ยังไม่ถึง <br />
                    เพื่อบรรลุธรรมที่ยังไม่ได้บรรลุ เพื่อทำให้แจ้งธรรมที่ยังไม่ได้ทำให้แจ้ง
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-amber-300 font-bold uppercase tracking-widest text-sm">
                <FaCircleExclamation /> ความคิดไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link
            href="/sixth/lesson-01"
            className="inline-flex items-center gap-3 bg-cyan-600 hover:bg-cyan-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-cyan-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: นกุลปิตาสูตร
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
