// src/components/home/Hero.tsx
'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Typed from 'typed.js';

const Hero = () => {
  const el = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: [
        'ตัวเราเป็นใคร?',
        'เกิดมาทำไม?',
        'เป้าหมายชีวิตของเราอยู่ที่ไหน?',
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      backDelay: 1500,
    };
    
    if (el.current) {
      typed.current = new Typed(el.current, options);
    }

    return () => {
      typed.current?.destroy();
    };
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden bg-linear-to-b from-blue-50 to-white min-h-[90vh] flex items-center">
      {/* ตกแต่งพื้นหลังด้วยวงกลมจางๆ */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold-100/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* ฝั่งข้อความ */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-dhamma-blue mb-4 leading-tight">
              พระพุทธเจ้าสอนอะไร?
            </h1>
            
            <div className="h-16 md:h-20 mb-8">
              <span 
                ref={el} 
                className="text-2xl md:text-3xl text-slate-600 font-light italic"
              />
            </div>

            <div className="space-y-6">
              <Link 
                href="/introduction" 
                className="inline-block text-lg text-dhamma-gold hover:text-blue-700 font-medium transition-colors border-b-2 border-dhamma-gold/30 hover:border-blue-700 pb-1"
              >
                บทสรรเสริญคุณพระรัตนตรัย →
              </Link>

              <Link href="/buddhateaching/life01" className="block group">
                <div className="bg-white/60 backdrop-blur-md border border-white shadow-xl shadow-blue-900/5 rounded-2xl p-6 md:p-8 transition-all duration-300 group-hover:shadow-blue-900/10 group-hover:-translate-y-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-2 group-hover:text-dhamma-blue transition-colors">
                    ปัญญา ศีล สมาธิ
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    เป็นคำสอนของพระพุทธเจ้า <br className="hidden md:block" />
                    นำไปปฏิบัติอย่างไรในชีวิตประจำวัน?
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-bold text-dhamma-blue uppercase tracking-wider">
                    เริ่มเรียนรู้บทปฏิบัติ
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* ฝั่งรูปภาพ */}
          <div className="order-1 lg:order-2 flex justify-center items-center">
            <div className="relative animate-float">
              {/* แสงรัศมีหลังดอกบัว */}
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-3xl scale-125" />
              
              <Image
                src="/img/lotuspng.png"
                alt="lotus"
                width={450}
                height={618}
                priority
                className="relative z-10 drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;