'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import NavMenu from '@/components/layout/NavMenu';
import MobileNav from '@/components/layout/MobileNav';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${isSticky ? 'bg-white/80 backdrop-blur-md shadow-sm py-2' : 'bg-white py-4'}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-dhamma-blue font-prompt">
          วิปัสสนาภาวนา
        </Link>

        <div className="hidden xl:block">
          <NavMenu />
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
