// src/components/layout/NavMenu.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChevronDown } from 'react-icons/fa';

const NavMenu = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const vipassanaLessons = [
    { href: '/vipassana/lesson-01', label: 'พิจารณาขันธ์ 5 อินทรีย์ 6' },
    { href: '/vipassana/lesson-02', label: 'ตามทันตัวเรา' },
    { href: '/vipassana/lesson-03', label: 'ฝึกเห็นตามจริง' },
    { href: '/vipassana/lesson-04', label: 'การพิจารณาอินทรีย์ 6' },
    { href: '/vipassana/lesson-05', label: 'อินทรีย์ 6 และขันธ์ 5' },
    { href: '/vipassana/lesson-06', label: 'ฝึกเอาความจริงไปใช้' },
  ];

  const anagamiLessons = Array.from({ length: 12 }, (_, i) => ({
    href: `/anagami/lesson-${(i + 1).toString().padStart(2, '0')}`,
    label: `บทเรียนที่ ${i + 1}`,
  }));

  return (
    <nav className="hidden xl:block">
      <ul className="flex items-center space-x-1">
        <li>
          <Link
            href="/"
            className={`px-4 py-2 text-sm font-medium ${pathname === '/' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
          >
            หน้าแรก
          </Link>
        </li>

        {/* บทวิปัสสนาภาวนา */}
        <li
          className="relative"
          onMouseEnter={() => setOpenMenu('vipassana')}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <Link
            href="/vipassana"
            className={`px-4 py-2 text-sm font-medium flex items-center ${pathname.includes('/vipassana') ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
          >
            บทวิปัสสนาภาวนา <FaChevronDown className="ml-1.5 w-2.5 h-2.5 opacity-50" />
          </Link>
          {openMenu === 'vipassana' && (
            <ul className="absolute left-0 top-full w-64 bg-white shadow-xl rounded-2xl py-3 border border-slate-100 z-50">
              {vipassanaLessons.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block px-5 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* หลักสูตรอนาคามีผล - ปรับเป็น 2 คอลัมน์ */}
        <li
          className="relative"
          onMouseEnter={() => setOpenMenu('anagami')}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <Link
            href="/anagami"
            className={`px-4 py-2 text-sm font-medium flex items-center ${pathname.includes('/anagami') ? 'text-amber-600' : 'text-slate-600 hover:text-amber-600'}`}
          >
            หลักสูตรอนาคามีผล <FaChevronDown className="ml-1.5 w-2.5 h-2.5 opacity-50" />
          </Link>
          {openMenu === 'anagami' && (
            <div className="absolute left-0 top-full w-[480px] bg-white shadow-2xl rounded-2xl p-4 border border-slate-100 z-50 grid grid-cols-2 gap-1">
              {anagamiLessons.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block px-4 py-2 text-sm text-slate-600 hover:bg-amber-50 hover:text-amber-700 rounded-lg transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <div className="col-span-2 border-t border-slate-50 mt-2 pt-2">
                <Link
                  href="/anagami"
                  className="block px-4 py-1 text-xs font-bold text-amber-500 hover:text-amber-700 uppercase tracking-wider"
                >
                  ดูภาพรวมหลักสูตร →
                </Link>
              </div>
            </div>
          )}
        </li>

        <li>
          <Link
            href="/extra"
            className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600"
          >
            บทวิปัสสนาเพิ่มเติม
          </Link>
        </li>
        <li>
          <Link
            href="/daily-life"
            className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600"
          >
            ชีวิตประจำวัน
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
