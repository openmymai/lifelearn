'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom'; // นำเข้า Portal
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FaChevronDown,  FaBars,  FaGraduationCap,  FaSun 
} from 'react-icons/fa6';

import { FaTimes,FaHome, FaPray, FaPlusCircle } from 'react-icons/fa'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // เช็คว่า Component โหลดหรือยัง
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const vipassanaLessons = [
    { href: '/vipassana/lesson-01', label: '๑. ตามทันตัวเรา (๑)' },
    { href: '/vipassana/lesson-02', label: '๒. ตามทันตัวเรา (๒)' },
    { href: '/vipassana/lesson-03', label: '๓. ฝึกเห็นตามจริง' },
    { href: '/vipassana/lesson-04', label: '๔. การพิจารณาอินทรีย์ 6' },
    { href: '/vipassana/lesson-05', label: '๕. อินทรีย์ 6 และขันธ์ 5' },
    { href: '/vipassana/lesson-06', label: '๖. ฝึกเอาความจริงไปใช้' },
  ];

  const anagamiLessons = Array.from({ length: 12 }, (_, i) => ({
    href: `/anagami/lesson-${(i + 1).toString().padStart(2, '0')}`,
    label: `บทเรียนที่ ${i + 1}`
  }));

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // ฟังก์ชันสร้างเนื้อหาเมนู
  const menuContent = (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-[10000] bg-slate-900/60 backdrop-blur-sm animate-fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <nav 
        className="fixed top-0 left-0 bottom-0 w-[300px] bg-white h-screen shadow-2xl z-[10001] flex flex-col animate-slide-in-left"
      >
        <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-white">
          <div className="flex flex-col">
            <span className="font-bold text-dhamma-blue text-lg font-prompt">วิปัสสนาภาวนา</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">Dhamma Application</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-2xl text-slate-400 p-2"><FaTimes /></button>
        </div>

        <div className="flex-grow overflow-y-auto py-4 px-3 custom-scrollbar">
          <ul className="space-y-1.5">
            <li>
              <Link href="/" className={`flex items-center p-3.5 rounded-2xl text-sm font-medium ${pathname === '/' ? 'bg-blue-50 text-dhamma-blue' : 'text-slate-600'}`}>
                <FaHome className="mr-3 text-lg opacity-50" /> หน้าแรก
              </Link>
            </li>

            {/* วิปัสสนา Accordion */}
            <li>
              <button 
                onClick={() => setOpenDropdown(openDropdown === 'vip' ? null : 'vip')}
                className={`w-full flex items-center justify-between p-3.5 rounded-2xl text-sm font-medium ${pathname.includes('/vipassana') ? 'bg-blue-50 text-dhamma-blue' : 'text-slate-600'}`}
              >
                <div className="flex items-center"><FaPray className="mr-3 text-lg opacity-50" /> บทวิปัสสนาภาวนา</div>
                <FaChevronDown className={`transition-transform duration-300 ${openDropdown === 'vip' ? 'rotate-180' : ''}`} size={12} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openDropdown === 'vip' ? 'max-h-[400px] opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                <ul className="ml-10 space-y-1 border-l-2 border-blue-100">
                  {vipassanaLessons.map((l) => (
                    <li key={l.href}><Link href={l.href} className="block p-2.5 text-sm text-slate-500 hover:text-dhamma-blue">{l.label}</Link></li>
                  ))}
                </ul>
              </div>
            </li>

            {/* อนาคามี Accordion */}
            <li>
              <button 
                onClick={() => setOpenDropdown(openDropdown === 'ana' ? null : 'ana')}
                className={`w-full flex items-center justify-between p-3.5 rounded-2xl text-sm font-medium ${pathname.includes('/anagami') ? 'bg-amber-50 text-amber-700' : 'text-slate-600'}`}
              >
                <div className="flex items-center"><FaGraduationCap className="mr-3 text-lg opacity-50" /> หลักสูตรอนาคามีผล</div>
                <FaChevronDown className={`transition-transform duration-300 ${openDropdown === 'ana' ? 'rotate-180' : ''}`} size={12} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openDropdown === 'ana' ? 'max-h-[600px] opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                <ul className="ml-10 space-y-1 border-l-2 border-amber-100">
                  {anagamiLessons.map((l) => (
                    <li key={l.href}><Link href={l.href} className="block p-2.5 text-sm text-slate-500 hover:text-amber-700">{l.label}</Link></li>
                  ))}
                </ul>
              </div>
            </li>

            <li>
              <Link href="/extra" className="flex items-center p-3.5 text-slate-600 text-sm font-medium">
                <FaPlusCircle className="mr-3 text-lg opacity-50" /> บทวิปัสสนาเพิ่มเติม
              </Link>
            </li>
            <li>
              <Link href="/daily-life" className="flex items-center p-3.5 text-slate-600 text-sm font-medium">
                <FaSun className="mr-3 text-lg opacity-50" /> ชีวิตประจำวัน
              </Link>
            </li>
          </ul>
        </div>

        <div className="p-6 border-t border-slate-100 bg-slate-50 text-center">
          <p className="text-[11px] text-slate-400 leading-relaxed italic">"ผู้ใดเห็นธรรม ผู้นั้นเห็นเรา"</p>
        </div>
      </nav>
    </>
  );

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="text-2xl text-slate-700 p-2 hover:bg-slate-100 rounded-xl transition-colors">
        <FaBars />
      </button>

      {/* ใช้ Portal เพื่อส่งเมนูไปที่ body */}
      {isOpen && mounted && createPortal(menuContent, document.body)}
    </>
  );
};

export default MobileNav;