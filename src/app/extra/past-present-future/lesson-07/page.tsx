// src/app/extra/past-present-future/lesson-07/page.tsx
import IntrospectionCard from "@/components/ui/IntrospectionCard";
import Link from "next/link";
import { 
  FaArrowRight, 
  FaCommentDots, 
  FaHandsPraying, 
  FaCrown, 
  FaScroll, 
  FaHouseUser, 
  FaVenus, 
  FaUserSecret, 
  FaPersonPraying,
  FaQuoteLeft,
  FaCircleCheck
} from "react-icons/fa6";

export default function PastPresentFutureLesson07() {
  // ข้อมูลคน 6 จำพวก (คงเนื้อหาเดิมทุกตัวอักษร)
  const groups = [
    {
      type: "กษัตริย์",
      icon: <FaCrown />,
      answer: "ดูกรพราหมณ์ ธรรมดากษัตริย์ทั้งหลาย ย่อมประสงค์โภคทรัพย์ นิยมปัญญา มั่นใจในกำลังทหาร ต้องการในการได้แผ่นดิน มีความเป็นใหญ่เป็นที่สุด"
    },
    {
      type: "พราหมณ์",
      icon: <FaScroll />,
      answer: "ดูกรพราหมณ์ ธรรมดาพราหมณ์ทั้งหลาย ย่อมประสงค์โภคทรัพย์ นิยมปัญญา มั่นใจในมนต์ ต้องการบูชายัญ มีพรหมโลกเป็นที่สุด"
    },
    {
      type: "คฤหบดี",
      icon: <FaHouseUser />,
      answer: "ดูกรพราหมณ์ ธรรมดาคฤหบดีทั้งหลาย ย่อมประสงค์โภคทรัพย์ นิยมปัญญา มั่นใจในศิลปะ ต้องการการงาน มีการงานที่สำเร็จแล้วเป็นที่สุด"
    },
    {
      type: "สตรี",
      icon: <FaVenus />,
      answer: "ดูกรพราหมณ์ ธรรมดาสตรีทั้งหลาย ย่อมประสงค์บุรุษ นิยมเครื่องแต่งตัว มั่นใจในบุตร ต้องการไม่ให้สตรีอื่นร่วมสามี มีความเป็นใหญ่ในบ้านเป็นที่สุด"
    },
    {
      type: "โจร",
      icon: <FaUserSecret />,
      answer: "ดูกรพราหมณ์โจรทั้งหลาย ย่อมประสงค์ลักทรัพย์ของผู้อื่น นิยมที่เร้นลับ มั่นใจในศาสตรา ต้องการที่มืด มีการที่ผู้อื่นไม่เห็นเขาเป็นที่สุด"
    },
    {
      type: "สมณะ",
      icon: <FaPersonPraying />,
      answer: "ดูกรพราหมณ์ ธรรมดาสมณะทั้งหลาย ย่อมประสงค์ขันติโสรัจจะ นิยมปัญญา มั่นใจในศีล ต้องการความไม่มีห่วงใย มีพระนิพพานเป็นที่สุด"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-teal-600 font-bold tracking-widest uppercase text-sm">วิปัสสนาภาวนาเพิ่มเติม</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">ขัตติยาธิปปายสูตร</h2>
          <p className="text-slate-500 text-lg italic">ว่าด้วยความประสงค์ ของคน 6 จำพวก</p>
          <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ส่วนที่ 1: บทนำ (ชานุสโสนิพราหมณ์เฝ้าพระพุทธเจ้า) */}
        <IntrospectionCard>
          <div className="space-y-6 text-xl leading-relaxed text-slate-700 italic">
            <p>ครั้งนั้นแลชานุสโสนิพราหมณ์ เข้าไปเฝ้าพระผู้มีพระภาค ถึงที่ประทับ ได้ปราศรัยกับพระผู้มีพระภาค ครั้นผ่านการปราศรัย พอให้ระลึกถึงกันไปแล้ว จึงนั่ง ณ ที่ควรส่วนข้างหนึ่ง ครั้นแล้วได้ทูลถาม พระผู้มีพระภาคว่า</p>
          </div>
        </IntrospectionCard>

        {/* ส่วนที่ 2: ปุจฉา-วิสัชนา 6 จำพวก */}
        <div className="space-y-10 my-12">
          {groups.map((group, idx) => (
            <IntrospectionCard key={idx}>
              <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-5">
                <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center shadow-sm text-xl">
                  {group.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800">จำพวกที่ {idx + 1}: {group.type}</h3>
              </div>

              <div className="space-y-8">
                {/* คำถาม */}
                <div className="flex items-start gap-3">
                  <FaCommentDots className="text-slate-400 mt-1 flex-shrink-0" />
                  <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
                    ชานุสโสนิพราหมณ์ ถามพระพุทธเจ้าว่า<br />
                    <span className="font-medium text-slate-800">ข้าแต่พระโคดมผู้เจริญ {group.type}{group.type === "โจร" ? "" : "ทั้งหลาย"} ย่อมมีความประสงค์อะไร นิยมอะไร มั่นใจอะไร ต้องการอะไร มีอะไรเป็นที่สุด</span>
                  </p>
                </div>

                {/* คำตอบ */}
                <div className="flex items-start gap-3 ml-4 md:ml-8">
                  <div className="flex-grow bg-teal-50/50 p-6 rounded-2xl border-l-4 border-teal-500 shadow-inner">
                    <p className="text-teal-600 font-bold mb-2 text-sm uppercase tracking-wider flex items-center gap-2">
                      <FaHandsPraying /> พระผู้มีพระภาค ตรัสตอบว่า
                    </p>
                    <p className="text-xl md:text-2xl text-teal-900 font-bold leading-relaxed">
                      {group.answer}
                    </p>
                  </div>
                </div>
              </div>
            </IntrospectionCard>
          ))}
        </div>

        {/* ส่วนที่ 3: ความเลื่อมใสของพราหมณ์ */}
        <div className="mt-16">
          <IntrospectionCard highlight={true}>
            <div className="flex flex-col items-center text-center space-y-8 py-4">
              <FaQuoteLeft className="text-teal-200 text-4xl opacity-50" />
              
              <div className="space-y-8 text-xl md:text-2xl leading-relaxed text-white/90">
                <p>ข้าแต่พระโคดมผู้เจริญ อัศจรรย์เรื่องไม่เคยมีได้มีแล้ว คือท่านพระโคดม ย่อมทรงทราบความประสงค์ ความนิยม ความมั่นใจ ความต้องการ และสิ่งที่เป็นที่สุด แห่งกษัตริย์ทั้งหลายฯลฯ แห่งพราหมณ์ทั้งหลายฯลฯ แห่งคฤหบดีทั้งหลายฯลฯ แม้แห่งสตรีทั้งหลายฯลฯ แม้แห่งโจรทั้งหลายฯลฯ ย่อมทรงทราบความประสงค์ ความนิยม ความมั่นใจ ความต้องการ และสิ่งที่เป็นที่สุด แห่งสมณะทั้งหลาย</p>
                
                <div className="bg-white/10 p-8 rounded-[2.5rem] border border-white/20 shadow-2xl space-y-6">
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    ข้าแต่ท่านพระโคดมผู้เจริญ ภาษิตของพระองค์แจ่มแจ้งนัก<br />
                    ข้าแต่ท่านพระโคดมผู้เจริญ ภาษิตของพระองค์แจ่มแจ้งนัก
                  </p>
                  <div className="w-16 h-0.5 bg-teal-400 mx-auto"></div>
                  <p className="text-teal-100 font-medium">
                    ขอท่านพระโคดมทรงจำข้าพระองค์ ว่าเป็นอุบาสกผู้ถึงสรณะตลอดชีวิต ตั้งแต่วันนี้เป็นต้นไป
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-amber-300 font-bold uppercase tracking-widest text-sm">
                <FaCircleCheck /> ถึงสรณะตลอดชีวิต
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/extra/past-present-future/lesson-08" 
            className="inline-flex items-center gap-3 bg-teal-600 hover:bg-teal-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-teal-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: อาพาธสูตร
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}