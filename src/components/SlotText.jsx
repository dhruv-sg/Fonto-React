import { useState } from 'react';

function SlotText({ text, className }) {
  return (
    <div className={`relative overflow-hidden inline-block h-[1.2em] leading-[1.2em] ${className}`}>
      <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
        <span className="block">{text}</span>
        <span className="block">{text}</span>
      </div>
    </div>
  );
}

export default SlotText;
