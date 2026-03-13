# วิปัสสนาภาวนาพิจารณาขันธ์ 5 อินทรีย์ 6

แอปพลิเคชันรวบรวมบทท่องและแนวทางการปฏิบัติวิปัสสนาภาวนา ออกแบบมาเพื่อช่วยให้ผู้ปฏิบัติธรรมสามารถศึกษาและพิจารณาสภาวะธรรมตามความเป็นจริงได้ทุกที่ทุกเวลา ด้วยอินเทอร์เฟซที่สะอาดตา สงบ และอ่านง่าย

![Next.js](https://img.shields.io/badge/Next.js-15%2B-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript)

## ✨ คุณสมบัติเด่น (Features)

- **โครงสร้างบทเรียนเป็นระบบ:** แบ่งหมวดหมู่ชัดเจนตั้งแต่ระดับพื้นฐานจนถึงระดับละเอียด (หลักสูตรอนาคามีผล)
- **ดีไซน์เพื่อการอ่าน (Typography Focus):** ใช้ฟอนต์ **Prompt** และการจัดวางแบบ Card ที่มีระยะห่างเหมาะสม ช่วยให้จดจ่อกับบทท่องได้นานโดยไม่ล้าสายตา
- **ระบบนำทางอัจฉริยะ:** เมนูมือถือแบบ Portal-based ที่ทำงานได้อย่างสมบูรณ์แม้ขณะ Scroll หน้าจอ
- **ธีมสีตามหมวดหมู่:** 
  - 🔵 **สีน้ำเงิน:** บทวิปัสสนาภาวนาพื้นฐาน
  - 🟡 **สีทอง:** หลักสูตรอนาคามีผล (ระดับละเอียด)
  - 🟢 **สีเขียวมรกต:** บทวิปัสสนาเพิ่มเติม (อนิจจัง ทุกขัง อนัตตา)
- **Responsive Design:** รองรับการใช้งานสมบูรณ์แบบทั้งบนสมาร์ทโฟน แท็บเล็ต และคอมพิวเตอร์

## 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)

- **Framework:** [Next.js 15/16](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first configuration)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (Font Awesome 6)
- **Animations:** [Typed.js](https://mattboldt.github.io/typed.js/) สำหรับเอฟเฟกต์ข้อความในหน้า Hero

## 📂 โครงสร้างโปรเจกต์ (Project Structure)

```text
src/
├── app/
│   ├── introduction/          # บทสรรเสริญคุณพระรัตนตรัย
│   ├── vipassana/            # หมวดวิปัสสนาภาวนา (6 บท)
│   ├── anagami/              # หลักสูตรอนาคามีผล (12 บท)
│   └── extra/                # บทวิปัสสนาเพิ่มเติม (Nested Routing)
│       └── anicca-dukkha-anatta/
├── components/
│   ├── layout/               # Header, Footer, NavMenu, MobileNav
│   ├── home/                 # Hero Component
│   └── ui/                   # IntrospectionCard (Reusable Component)
└── globals.css               # Tailwind v4 Theme & Custom Animations
```

## 📖 เนื้อหาบทเรียน (Content Overview)

- **บทวิปัสสนาภาวนา:** พิจารณาขันธ์ 5 และอินทรีย์ 6 ให้เห็นการเกิดดับ
- **หลักสูตรอนาคามีผล:** การกำหนดรู้โลกและชีวิตที่ว่างจากตน เพื่อการดับไม่เหลือ
- **บทเพิ่มเติม:** 
  - ว่าด้วยความเป็นอนิจจัง ทุกขัง อนัตตา
  - ราหุลสูตร และบทสนทนาธรรมสำคัญ
- **ชีวิตประจำวัน:** การนำสติสัมปชัญญะไปใช้ในกิจวัตรตั้งแต่ตื่นจนเข้านอน
