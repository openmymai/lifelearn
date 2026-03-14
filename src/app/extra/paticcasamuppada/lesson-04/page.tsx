// src/app/extra/paticcasamuppada/lesson-04/page.tsx
import IntrospectionCard from '@/components/ui/IntrospectionCard';
import Link from 'next/link';
import {
  FaArrowRight,
  FaMountain,
  FaDroplet,
  FaFire,
  FaWind,
  FaCircleNotch,
  FaHeart,
  FaHandsHoldingChild,
  FaFaceSmile,
  FaScaleBalanced,
  FaSkull,
  FaHourglassHalf,
  FaQuoteLeft,
} from 'react-icons/fa6';

export default function PaticcasamuppadaLesson04() {
  // ข้อมูลธาตุ 5 และอุปมา
  const elementPractices = [
    {
      name: 'แผ่นดิน',
      icon: <FaMountain />,
      color: 'text-amber-800 bg-amber-50',
      instruction:
        'เธอจงเจริญภาวนา เสมอด้วยแผ่นดินเถิด เพราะเมื่อเธอเจริญภาวนา เสมอด้วยแผ่นดินอยู่ ผัสสะอันเป็นที่ชอบใจและไม่ชอบใจ ที่เกิดขึ้นแล้วจักไม่ครอบงำจิตได้',
      metaphor:
        'เปรียบเหมือนคนทั้งหลาย ทิ้งของสะอาดบ้างไม่สะอาดบ้าง คูถบ้าง มูตรบ้าง น้ำลายบ้าง น้ำหนองบ้าง เลือดบ้าง ลงที่แผ่นดิน แผ่นดินจะอึดอัด หรือระอาหรือเกลียดของนั้นก็หาไม่ฉันใด เธอจงเจริญภาวนา เสมอด้วยแผ่นดินฉันนั้นแล',
    },
    {
      name: 'น้ำ',
      icon: <FaDroplet />,
      color: 'text-blue-600 bg-blue-50',
      instruction:
        'เธอจงเจริญภาวนาเสมอด้วยน้ำเถิด เพราะเมื่อเธอเจริญภาวนา เสมอด้วยน้ำอยู่ ผัสสะอันเป็นที่ชอบใจและไม่ชอบใจ ที่เกิดขึ้นแล้วจักไม่ครอบงำจิตได้',
      metaphor:
        'เปรียบเหมือนคนทั้งหลาย ล้างของสะอาดบ้างของไม่สะอาดบ้าง คูถบ้าง มูตรบ้าน น้ำลายบ้าง น้ำหนองบ้าง เลือดบ้าง ลงในน้ำ น้ำจะอึดอัดหรือระอา หรือเกลียดของนั้นก็หาไม่ฉันใด เธอจงเจริญภาวนา เสมอด้วยน้ำฉันนั้นแล',
    },
    {
      name: 'ไฟ',
      icon: <FaFire />,
      color: 'text-orange-600 bg-orange-50',
      instruction:
        'เธอจงเจริญภาวนาเสมอด้วยไฟเถิด เพราะเมื่อเธอเจริญภาวนาเสมอด้วยไฟอยู่ ผัสสะอันเป็นที่ชอบใจและไม่ชอบใจ ที่เกิดขึ้นแล้วจะไม่ครอบงำจิตได้',
      metaphor:
        'เปรียบเหมือนไฟ ที่เผาของสะอาดบ้านของไม่สะอาดบ้าง คูถบ้าง มูตรบ้าง น้ำลายบ้าง น้ำหนองบ้าง เลือดบ้าง ไฟจะอึดอัดหรือระอา หรือเกลียดของนั้นก็หาไม่ฉันใด เธอจงเจริญภาวนา เสมอด้วยไฟฉันนั้นแล',
    },
    {
      name: 'ลม',
      icon: <FaWind />,
      color: 'text-slate-500 bg-slate-100',
      instruction:
        'เธอจงเจริญภาวนาเสมอด้วยลมเถิด เพราะเมื่อเธอเจริญภาวนาเสมอด้วยลมอยู่ ผัสสะอันเป็นที่ชอบใจและไม่ชอบใจ ที่เกิดขึ้นแล้วจักไม่ครอบงำจิตของเธอได้',
      metaphor:
        'เปรียบเหมือนลมย่อมพัดต้องของสะอาดบ้างของไม่สะอาดบ้าง คูถบ้าง มูตรบ้าง น้ำลายบ้าง น้ำหนองบ้าง เลือดบ้าง ลมจะอึดอัดหรือระอา หรือเกลียดของนั้นก็หาไม่ฉันใด เธอจงเจริญภาวนา เสมอด้วยลมฉันนั้น',
    },
    {
      name: 'อากาศ',
      icon: <FaCircleNotch />,
      color: 'text-indigo-400 bg-indigo-50',
      instruction:
        'เธอจงเจริญภาวนาเสมอด้วยอากาศเถิด เพราะเมื่อเธอเจริญภาวนา เสมอด้วยอากาศอยู่ ผัสสะอันเป็นที่ชอบใจและไม่ชอบใจ ที่เกิดขึ้นแล้วจักไม่ครอบงำจิตได้',
      metaphor: 'เปรียบเหมือนอากาศ ไม่ตั้งอยู่ในที่ไหนฉันใด เธอจงเจริญภาวนา เสมอด้วยอากาศฉันนั้นแล',
    },
  ];

  // ข้อมูลภาวนาธรรม 6 อย่าง
  const dhammaSix = [
    { title: 'เมตตาภาวนา', result: 'จักละพยาบาทได้', icon: <FaHeart className="text-rose-500" /> },
    {
      title: 'กรุณาภาวนา',
      result: 'จักละวิหิงสาได้',
      icon: <FaHandsHoldingChild className="text-blue-500" />,
    },
    {
      title: 'มุทิตาภาวนา',
      result: 'จักละอรติได้',
      icon: <FaFaceSmile className="text-amber-500" />,
    },
    {
      title: 'อุเบกขาภาวนา',
      result: 'จักละปฏิฆะได้',
      icon: <FaScaleBalanced className="text-slate-500" />,
    },
    { title: 'อสุภภาวนา', result: 'จักละราคะได้', icon: <FaSkull className="text-emerald-600" /> },
    {
      title: 'อนิจจสัญญาภาวนา',
      result: 'จักละอัสมิมานะได้',
      icon: <FaHourglassHalf className="text-cyan-600" />,
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
            ภาวนาเสมอด้วยธาตุ 5
          </h2>
          <p className="text-slate-500 text-lg italic">การฝึกจิตให้ไม่หวั่นไหวต่อผัสสะที่มากระทบ</p>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนที่ 1: รายการพิจารณาธาตุ 5 */}
        <div className="space-y-12 mb-20">
          {elementPractices.map((item, idx) => (
            <IntrospectionCard key={idx}>
              <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-5">
                <div
                  className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center shadow-sm text-xl`}
                >
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800">เจริญภาวนาเสมอด้วย{item.name}</h3>
              </div>

              <div className="space-y-6 text-xl leading-relaxed text-slate-700">
                <p className="font-bold text-cyan-700">ดูกรราหุล</p>
                <p className="text-2xl font-medium text-slate-800">{item.instruction}</p>

                <div className="bg-slate-50 p-8 rounded-3xl border-l-4 border-slate-300 relative overflow-hidden">
                  <FaQuoteLeft className="absolute top-4 left-4 text-slate-200 text-4xl opacity-50" />
                  <p className="relative z-10 italic pl-6">{item.metaphor}</p>
                </div>

                <p className="text-center font-bold text-cyan-800 pt-4">
                  เพราะเมื่อเธอเจริญภาวนา เสมอด้วย{item.name}อยู่ <br />
                  <span className="text-2xl underline decoration-cyan-300 underline-offset-8">
                    ผัสสะอันเป็นที่ชอบใจและไม่ชอบใจ ที่เกิดขึ้นแล้วจักไม่ครอบงำจิตได้
                  </span>
                </p>
              </div>
            </IntrospectionCard>
          ))}
        </div>

        {/* ส่วนที่ 2: การเจริญภาวนาธรรม 6 อย่าง */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-cyan-900 font-prompt">
              การเจริญภาวนาธรรม 6 อย่าง
            </h3>
            <div className="w-16 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <IntrospectionCard highlight={true} className="bg-slate-900 border-cyan-500">
            <div className="space-y-8 py-4">
              <p className="text-center text-xl text-cyan-200 font-bold mb-6">ดูกรราหุล</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dhammaSix.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 p-6 rounded-2xl border border-white/10 flex items-start gap-4 group hover:bg-white/20 transition-all"
                  >
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="space-y-1">
                      <p className="text-white font-bold text-lg">เธอจงเจริญ{item.title}เถิด</p>
                      <p className="text-cyan-100 font-light italic">
                        เพราะเมื่อเธอเจริญ{item.title}อยู่{' '}
                        <span className="text-white font-medium">{item.result}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link
            href="/extra/paticcasamuppada/lesson-05"
            className="inline-flex items-center gap-3 bg-cyan-600 hover:bg-cyan-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-cyan-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: อานาปานสติภาวนา
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
