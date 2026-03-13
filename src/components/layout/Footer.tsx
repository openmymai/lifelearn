import Link from 'next/link';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'บทปฏิบัติหลัก',
      links: [
        { label: 'บทวิปัสสนาภาวนา', href: '/vipassana' },
        { label: 'หลักสูตรอนาคามีผล', href: '/anagami' },
        { label: 'บทวิปัสสนาเพิ่มเติม', href: '/extra' },
        { label: 'การนำไปใช้ในชีวิตประจำวัน', href: '/daily-life' },
      ],
    },
    {
      title: 'ข้อมูลเพิ่มเติม',
      links: [
        { label: 'เกี่ยวกับเรา', href: '/about' },
        { label: 'คำถามที่พบบ่อย', href: '/faq' },
        { label: 'นโยบายความเป็นส่วนตัว', href: '/privacypolicy' },
      ],
    },
  ];

  return (
    <footer className='bg-slate-900 text-slate-300 text-sm'>
      <div className='container mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12'>
          <div className='md:col-span-2'>
            <h3 className='text-2xl font-bold text-white mb-6 font-prompt'>วิปัสสนาภาวนา</h3>
            <p className='mb-6 text-slate-400 leading-relaxed max-w-md'>
              รวบรวมบทท่องและแนวทางการปฏิบัติวิปัสสนาภาวนาตามหลักคำสอนของพระพุทธเจ้า ดับทุกข์ได้
            </p>
            <div className='space-y-3'>
              <div className='flex items-center'><FaMapMarkerAlt className='mr-3 text-blue-500' /> เชียงใหม่, ประเทศไทย</div>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='text-white font-semibold mb-6 uppercase tracking-wider'>{section.title}</h4>
              <ul className='space-y-3'>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className='hover:text-blue-400 transition-colors'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='border-t border-slate-800 py-8 text-center'>
        <p>© {currentYear} วิปัสสนาภาวนาพิจารณาขันธ์ 5 อินทรีย์ 6 </p>
      </div>
    </footer>
  );
};

export default Footer;