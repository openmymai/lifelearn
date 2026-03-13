// src/components/ui/ChantCard.tsx
import React from 'react';

interface ChantLine {
  pali: string;
  thai?: string;
}

interface ChantCardProps {
  title?: string;
  lines: ChantLine[];
}

const ChantCard = ({ title, lines }: ChantCardProps) => {
  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 mb-10 transition-all hover:shadow-blue-900/5">
      {title && (
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold text-dhamma-blue inline-block border-b-2 border-blue-100 pb-2">
            {title}
          </h3>
        </div>
      )}
      <div className="space-y-6">
        {lines.map((line, index) => (
          <div key={index} className="text-center md:text-left group">
            <p className="text-xl md:text-2xl text-blue-800 font-medium leading-relaxed mb-1">
              {line.pali}
            </p>
            {line.thai && (
              <p className="text-lg md:text-xl text-slate-500 font-light italic leading-relaxed">
                {line.thai}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChantCard;