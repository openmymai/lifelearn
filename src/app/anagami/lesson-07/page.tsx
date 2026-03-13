// src/app/anagami/lesson-07/page.tsx
import IntrospectionCard from "@/components/ui/IntrospectionCard";
import Link from "next/link";
import { 
  FaArrowRight, FaEarthAsia, FaLightbulb, FaMountain, 
  FaDroplet, FaWind, FaFireBurner, FaCircleNotch, FaQuoteLeft 
} from "react-icons/fa6";

export default function AnagamiLesson07() {
  // ข้อความสรุปที่ใช้ซ้ำ (คงเดิมทุกตัวอักษร)
  const refrain = "ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง เกิดจากเหตุปัจจัย มาประชุมกันชั่วคราว แล้วแตกสลาย ไม่มีตัวตนเป็นของตนเอง ไม่ควรเห็นสิ่งนั้น ว่าเป็นของเรา เป็นเรา เป็นตัวตนของเรา ครั้นเห็นแล้วจะเบื่อหน่าย... และให้จิตคลายกำหนัดไม่ยึดมั่นถือมั่น... ได้ไม่เที่ยงเกิดดับ";

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">หลักสูตรอนาคามีผล</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-4 font-prompt">องค์ประกอบของโลกและชีวิต</h2>
          <p className="text-slate-500 text-lg">พิจารณาธาตุ 6 ตามความเป็นจริง</p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* --- ส่วนที่ 1: โลกและชีวิต --- */}
        <div className="space-y-8 mb-16">
          <IntrospectionCard>
            <div className="flex items-center gap-3 mb-6 text-amber-700 border-b border-amber-50 pb-4">
              <FaEarthAsia className="text-2xl" />
              <h3 className="text-2xl font-bold">โลกและองค์ประกอบของโลก</h3>
            </div>
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <p>โลกและองค์ประกอบของโลก คือดิน น้ำ ลม ไฟ ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง<br />
              เกิดจากเหตุปัจจัย มาประชุมปรุงแต่งชั่วคราว แล้วแตกสลาย<br />
              ไม่มีตัวตนเป็นของตนเอง ไม่เที่ยงเกิดดับ ดับไม่เหลือ</p>
              
              <div className="bg-amber-50/50 p-6 rounded-2xl border-l-4 border-amber-500">
                <p>ผลต่อเนื่องของโลกคือวัตถุสิ่งของ แผ่นดิน แผ่นน้ำ ลมฟ้าอากาศ ต้นไม้ ใบหญ้า สัตว์ บุคคล<br />
                ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง ประกอบด้วยดิน น้ำ ลม ไฟ<br />
                เป็นเหตุเป็นปัจจัย มาประชุมปรุงแต่งชั่วคราว แล้วแตกสลาย<br />
                ไม่มีตัวตนเป็นของตนเอง ไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้น เป็นของเรา เป็นเรา เป็นตัวตนของเรา ไม่เที่ยงเกิดดับ ดับไม่เหลือ</p>
              </div>
            </div>
          </IntrospectionCard>

          <IntrospectionCard>
            <div className="flex items-center gap-3 mb-6 text-blue-700 border-b border-blue-50 pb-4">
              <FaLightbulb className="text-2xl" />
              <h3 className="text-2xl font-bold">ชีวิตและองค์ประกอบของชีวิต</h3>
            </div>
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <p>ชีวิตและองค์ประกอบของชีวิต คือดิน น้ำ ลม ไฟ กรรมและวิญญาณ<br />
              ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง เกิดจากเหตุปัจจัย มาประชุมปรุงแต่งชั่วคราว แล้วแตกสลาย<br />
              ไม่มีตัวตนเป็นของตนเอง ไม่เที่ยงเกิดดับ ดับไม่เหลือ</p>
              
              <div className="bg-blue-50/50 p-6 rounded-2xl border-l-4 border-blue-500">
                <p>ผลต่อเนื่องของชีวิตคือรูปร่าง หน้าตา ลักษณะท่าทาง นิสัยใจคอ<br />
                ความคิดความเห็น คำพูดการกระทำ ดีใจเสียใจ ไปไหนมาไหน<br />
                ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง ประกอบด้วยดิน น้ำ ลม ไฟ<br />
                เป็นเหตุเป็นปัจจัย มาประชุมปรุงแต่งชั่วคราว แล้วแตกสลาย<br />
                ไม่มีตัวตนเป็นของตนเอง ไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้น เป็นของเรา เป็นเรา เป็นตัวตนของเรา ไม่เที่ยงเกิดดับ ดับไม่เหลือ</p>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* --- ส่วนที่ 2: ธาตุ 4 และอากาศธาตุ --- */}
        <div className="space-y-10 mb-16">
          <h4 className="text-center text-slate-400 font-medium mb-8 uppercase tracking-widest">กำหนดรู้ธาตุ 6</h4>
          
          {/* ปฐวีธาตุ */}
          <IntrospectionCard>
            <div className="flex items-center gap-4 mb-6 text-amber-800">
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center"><FaMountain /></div>
              <h3 className="text-2xl font-bold">ปฐวีธาตุ (ธาตุดิน)</h3>
            </div>
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <p>ก็ปฐวีธาตุเป็นไฉน คือปฐวีธาตุภายในก็มีภายนอกก็มี ก็ปฐวีธาตุภายในเป็นไฉน ได้แก่สิ่งที่แค่นแข็ง กำหนดได้มีในตนอาศัยตน</p>
              <div className="bg-slate-100 p-6 rounded-2xl font-medium text-slate-800 border-l-4 border-slate-300">
                คือผม ขน เล็บ ฟัน หนัง เนื้อ เอ็น กระดูก เยื่อในกระดูก ม้าม หัวใจ ตับ พังผืด ไต ปอด ไส้ใหญ่ ไส้น้อย อาหารเก่า อาหารใหม่
              </div>
              <p>หรือแม้สิ่งอื่นไม่ว่าชนิดไรๆ ที่แข้นแข็ง กำหนดได้มีในตนอาศัยตน นี้เรียกว่าปฐวีธาตุภายใน ก็ปฐวีธาตุทั้งภายในและภายนอกนี้แล เป็นปฐวีธาตุทั้งนั้น</p>
              <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 italic text-amber-900">
                พึงเห็นปฐวีธาตุนั้น ด้วยปัญญาอันชอบ ตามความเป็นจริงอย่างนี้ว่า ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง เกิดจากเหตุปัจจัย มาประชุมกันชั่วคราว แล้วแตกสลาย ไม่มีตัวตนเป็นของตนเอง ไม่ควรเห็นสิ่งนั้น ว่าเป็นของเรา เป็นเรา เป็นตัวตนของเรา ครั้นเห็นแล้วจะเบื่อหน่ายปฐวีธาตุ และให้จิตคลายกำหนัดไม่ยึดมั่นถือมั่น ปฐวีธาตุได้ไม่เที่ยงเกิดดับ
              </div>
            </div>
          </IntrospectionCard>

          {/* อาโปธาตุ */}
          <IntrospectionCard>
            <div className="flex items-center gap-4 mb-6 text-blue-600">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center"><FaDroplet /></div>
              <h3 className="text-2xl font-bold">อาโปธาตุ (ธาตุน้ำ)</h3>
            </div>
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <p>ก็อาโปธาตุเป็นไฉน คืออาโปธาตุภายในก็มีภายนอกก็มี ก็อาโปธาตุภายในเป็นไฉน ได้แก่สิ่งที่เอิบอาบซึมซาบไป กำหนดได้มีในตนอาศัยตน</p>
              <div className="bg-blue-50/50 p-6 rounded-2xl font-medium text-blue-900 border-l-4 border-blue-200">
                คือ ดี เสลด น้ำเหลือง เลือด เหงื่อ มันข้น น้ำตา เปลวมัน น้ำลาย น้ำมูก ไขข้อ มูตร
              </div>
              <p>หรือแม้แต่สิ่งอื่นไม่ว่าชนิดไรๆ ที่เอิบอาบซึมซาบไป กำหนดได้มีในตนอาศัยตน นี้เรียกว่าอาโปธาตุภายใน ก็อาโปธาตุทั้งภายในและภายนอกนี้แล เป็นอาโปธาตุทั้งนั้น</p>
              <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 italic text-amber-900">
                พึงเห็นอาโปธาตุนั้น ด้วยปัญญาอันชอบ ตามความเป็นจริงอย่างนี้ว่า ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง เกิดจากเหตุปัจจัย มาประชุมกันชั่วคราว แล้วแตกสลาย ไม่มีตัวตนเป็นของตนเอง ไม่ควรเห็นสิ่งนั้น ว่าเป็นของเรา เป็นเรา เป็นตัวตนของเรา ครั้นเห็นแล้วจะเบื่อหน่ายอาโปธาตุ และให้จิตคลายกำหนัดไม่ยึดมั่นถือมั่น อาโปธาตุได้ไม่เที่ยงเกิดดับ
              </div>
            </div>
          </IntrospectionCard>

          {/* วาโยธาตุ */}
          <IntrospectionCard>
            <div className="flex items-center gap-4 mb-6 text-slate-500">
              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center"><FaWind /></div>
              <h3 className="text-2xl font-bold">วาโยธาตุ (ธาตุลม)</h3>
            </div>
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <p>ก็วาโยธาตุเป็นไฉน คือวาโยธาตุภายในก็มีภายนอกก็มี ก็วาโยธาตุภายในเป็นไฉน ได้แก่สิ่งที่พัดผันไป กำหนดได้มีในตนอาศัยตน</p>
              <div className="bg-slate-100 p-6 rounded-2xl font-medium text-slate-800 border-l-4 border-slate-300">
                คือ ลมพัดขึ้นเบื้องบน ลมพัดลงเบื้องต่ำ ลมในท้อง ลมในลำไส้ ลมแล่นไปตามอวัยวะน้อยใหญ่ ลมหายใจออก ลมหายใจเข้า
              </div>
              <p>หรือแม้แต่สิ่งอื่นไม่ว่าชนิดไรๆที่พัดผันไป กำหนดได้มีในตนอาศัยตน นี้เรียกว่าวาโยธาตุภายใน ก็วาโยธาตุทั้งภายในและภายนอกนี้แล เป็นวาโยธาตุทั้งนั้น</p>
              <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 italic text-amber-900">
                พึงเห็นวาโยธาตุนั้น ด้วยปัญญาอันชอบ ตามความเป็นจริงอย่างนี้ว่า ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง เกิดจากเหตุปัจจัย มาประชุมกันชั่วคราว แล้วแตกสลาย ไม่มีตัวตนเป็นของตนเอง ไม่ควรเห็นสิ่งนั้นว่าเป็นของเรา เป็นเรา เป็นตัวตนของเรา ครั้นเห็นแล้วจะเบื่อหน่ายวาโยธาตุ และให้จิตคลายกำหนัดไม่ยึดมั่นถือมั่น วาโยธาตุได้ไม่เที่ยงเกิดดับ
              </div>
            </div>
          </IntrospectionCard>

          {/* เตโชธาตุ */}
          <IntrospectionCard>
            <div className="flex items-center gap-4 mb-6 text-orange-600">
              <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center"><FaFireBurner /></div>
              <h3 className="text-2xl font-bold">เตโชธาตุ (ธาตุไฟ)</h3>
            </div>
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <p>ก็เตโชธาตุเป็นไฉน คือเตโชธาตุภายในก็มีภายนอกก็มี ก็เตโชธาตุภายในเป็นไฉน ได้แก่สิ่งที่อบอุ่นถึงความเร่าร้อน กำหนดได้มีในตนอาศัยตน</p>
              <div className="bg-orange-50/50 p-6 rounded-2xl font-medium text-orange-900 border-l-4 border-orange-200">
                คือ ธาตุที่เป็นเครื่องยังกายให้อบอุ่น ยังกายให้ทรุดโทรม ยังกายให้กระวนกระวาย และธาตุที่เป็นเหตุให้ของกิน ที่กิน ที่ดื่ม ที่เคี้ยว ที่ลิ้มแล้วถึงความย่อยไปด้วยดี
              </div>
              <p>หรือแม้แต่สิ่งอื่นไม่ว่าชนิดไรๆ ที่อบอุ่นถึงความเร่าร้อน กำหนดได้มีในตนอาศัยตน นี้เรียกว่าเตโชธาตุภายใน ก็เตโชธาตุทั้งภายในและภายนอกนี้แล เป็นเตโชธาตุทั้งนั้น</p>
              <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 italic text-amber-900">
                พึงเห็นเตโชธาตุนั้น ด้วยปัญญาอันชอบ ตามความเป็นจริงอย่างนี้ว่า ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง เกิดจากเหตุปัจจัย มาประชุมกันชั่วคราว แล้วแตกสลาย ไม่มีตัวตนเป็นของตนเอง ไม่ควรเห็นสิ่งนั้น ว่าเป็นของเรา เป็นเรา เป็นตัวตนของเรา ครั้นเห็นแล้วจะเบื่อหน่ายเตโชธาตุ และให้จิตคลายกำหนัดไม่ยึดมั่นถือมั่น เตโชธาตุได้ไม่เที่ยงเกิดดับ
              </div>
            </div>
          </IntrospectionCard>

          {/* อากาศธาตุ */}
          <IntrospectionCard>
            <div className="flex items-center gap-4 mb-6 text-indigo-400">
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center"><FaCircleNotch /></div>
              <h3 className="text-2xl font-bold">อากาศธาตุ (ความว่าง)</h3>
            </div>
            <div className="space-y-6 text-xl leading-relaxed text-slate-700">
              <p>ก็อากาศธาตุเป็นไฉน คืออากาศธาตุภายในก็มีภายนอกก็มี ก็อากาศธาตุภายในเป็นไฉน ได้แก่สิ่งที่ว่างปรุโปร่ง กำหนดได้มีในตนอาศัยตน</p>
              <div className="bg-indigo-50/50 p-6 rounded-2xl font-medium text-indigo-900 border-l-4 border-indigo-200">
                คือ ช่องหู ช่องจมูก ช่องปาก ซึ่งเป็นทางให้กลืนของกิน ที่ดื่ม ที่เคี้ยว ที่ลิ้ม และเป็นทางระบายของ ที่กิน ที่เคี้ยว ที่ดื่ม แล้วออกมาทางเบื้องล่าง
              </div>
              <p>หรือแม้แต่สิ่งอื่นไม่ว่าชนิดไรๆ ที่ว่างปรุโปร่ง กำหนดได้มีในตนอาศัยตน นี้เรียกว่าอากาศธาตุภายใน ก็อากาศธาตุทั้งภายในและภายนอกนี้แล เป็นอากาศธาตุทั้งนั้น</p>
              <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 italic text-amber-900">
                พึงเห็นอากาศธาตุนั้น ด้วยปัญญาอันชอบ ตามความเป็นจริงอย่างนี้ว่า ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง เกิดจากเหตุปัจจัย มาประชุมกันชั่วคราว แล้วแตกสลาย ไม่มีตัวตนเป็นของตนเอง ไม่ควรเห็นสิ่งนั้น ว่าเป็นของเรา เป็นเรา เป็นตัวตนของเรา ครั้นเห็นแล้วจะเบื่อหน่ายอากาศธาตุ และให้จิตคลายกำหนัดไม่ยึดมั่นถือมั่น อากาศธาตุได้ไม่เที่ยงเกิดดับ
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* --- ส่วนที่ 3: วิญญาณธาตุ --- */}
        <IntrospectionCard highlight={true}>
          <div className="flex items-center gap-4 mb-8 text-white">
            <FaLightbulb className="text-3xl" />
            <h3 className="text-2xl font-bold">วิญญาณธาตุ (ความรู้)</h3>
          </div>
          <div className="space-y-6 text-xl leading-relaxed text-white/90">
            <p>ต่อจากนั้นสิ่งที่เหลืออยู่ ก็คือวิญญาณธาตุอันบริสุทธิ์ผุดผ่อง บุคคลย่อมรู้อะไรได้ด้วยวิญญาณนั้น คือรู้ชัดว่าสุขบ้าง ทุกข์บ้าง ไม่ทุกข์ไม่สุขบ้าง</p>
            
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 space-y-4">
              <p>เพราะอาศัยผัสสะเป็นที่ตั้งแห่งสุขเวทนา ย่อมเกิดสุขเวทนา บุคคลนั้นเมื่อเสวยสุขเวทนา ย่อมรู้สึกว่ากำลังเสวยสุขเวทนาอยู่ เพราะผัสสะเป็นที่ตั้ง แห่งสุขเวทนานั้นแลดับไป ย่อมรู้สึกว่าความเสวยอารมณ์ ที่เกิดแก่ผัสสะนั้นคือตัวสุขเวทนา อันเกิดเพราะอาศัยผัสสะเป็นที่ตั้ง แห่งสุขเวทนาย่อมดับไปย่อมเข้าไปสงบ</p>
              
              <p>เพราะอาศัยผัสสะ เป็นที่ตั้งแห่งทุกขเวทนา ย่อมเกิดทุกขเวทนา บุคคลนั้นเมื่อเสวยทุกขเวทนา ย่อมรู้สึกว่ากำลังเสวยทุกขเวทนาอยู่ เพราะผัสสะเป็นที่ตั้งแห่งทุกขเวทนานั้นแลดับไป ย่อมรู้สึกว่าความเสวยอารมณ์ที่เกิดแก่ผัสสะนั้น คือตัวทุกขเวทนา อันเกิดเพราะอาศัยผัสสะ เป็นที่ตั้งแห่งทุกขเวทนาย่อมดับไป ย่อมเข้าไปสงบ</p>
              
              <p>เพราะอาศัยผัสสะเป็นที่ตั้ง แห่งไม่ทุกข์ ไม่สุขเวทนา ย่อมเกิดไม่ทุกข์ ไม่สุขเวทนา บุคคลนั้นเมื่อเสวย ไม่ทุกข์ ไม่สุขเวทนา ย่อมรู้สึกว่ากำลังเสวย ไม่ทุกข์ ไม่สุขเวทนาอยู่ เพราะผัสสะเป็นที่ตั้ง แห่งไม่ทุกข์ ไม่สุขเวทนานั้นแลดับไป ย่อมรู้สึกว่าความเสวยอารมณ์ ที่เกิดแก่ผัสสะนั้น คือตัวไม่ทุกข์ ไม่สุขเวทนา อันเกิดเพราะอาศัยผัสสะเป็นที่ตั้ง แห่งไม่ทุกข์ ไม่สุขเวทนาย่อมดับไป ย่อมเข้าไปสงบ</p>
            </div>
          </div>
        </IntrospectionCard>

        {/* --- ส่วนที่ 4: อุปมาประทีปน้ำมัน --- */}
        <div className="my-16">
          <IntrospectionCard>
            <div className="flex gap-6 items-start">
              <FaQuoteLeft className="text-amber-200 text-5xl flex-shrink-0" />
              <div className="space-y-6 text-xl leading-relaxed text-slate-700">
                <p>เปรียบเหมือนประทีปน้ำมัน อาศัยน้ำมันและไส้จึงลุกโพลงอยู่ได้ เพราะสิ้นน้ำมันและไส้นั้น และไม่เติมน้ำมันและไส้อื่น ย่อมเป็นประทีปหมดเชื้อดับไป ฉันใดฉันนั้นเหมือนกันแล</p>
                
                <div className="bg-slate-900 text-amber-100 p-8 rounded-3xl shadow-inner">
                  <p className="text-center leading-relaxed">
                    บุคคลนั้นเมื่อเสวยเวทนามีกายเป็นที่สุด ย่อมรู้สึกว่ากำลังเสวยเวทนามีกายเป็นที่สุด <br />
                    เมื่อเสวยเวทนามีชีวิตเป็นที่สุด ย่อมรู้สึกว่ากำลังเสวยเวทนามีชีวิตเป็นที่สุด <br />
                    <span className="block mt-4 text-white font-bold text-xl">
                      และรู้สึกว่า เบื้องหน้าแต่สิ้นชีวิตเพราะตายไปแล้ว <br />
                      ความยินดีกันในโลกนี้แลจักเป็นของสงบ
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </IntrospectionCard>
        </div>

        {/* Navigation Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/anagami/lesson-08" 
            className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-amber-200 hover:-translate-y-1"
          >
            บทเรียนถัดไป: วิปัสสนากำหนดรู้ส่วน 2 อย่าง
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}