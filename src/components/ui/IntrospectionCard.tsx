// src/components/ui/IntrospectionCard.tsx
import React from 'react';

interface IntrospectionCardProps {
  title?: string;
  children: React.ReactNode;
  highlight?: boolean;
}

const IntrospectionCard = ({ title, children, highlight = false }: IntrospectionCardProps) => {
  return (
    <div className={`rounded-3xl p-8 md:p-12 mb-8 transition-all duration-500 border 
      ${highlight 
        ? 'bg-blue-600 text-white shadow-blue-200 shadow-2xl border-transparent' 
        : 'bg-white text-slate-700 shadow-xl shadow-slate-200/50 border-slate-100 hover:border-blue-200'
      }`}>
      {title && (
        <h3 className={`text-xl md:text-2xl font-bold mb-8 text-center font-prompt
          ${highlight ? 'text-blue-50' : 'text-dhamma-blue'}`}>
          {title}
        </h3>
      )}
      <div className="space-y-6 leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default IntrospectionCard;