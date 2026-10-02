import React from 'react';

// DBF Multi-color brand letter spectrum
const WORD_DATA = [
  {
    word: "DREAM",
    letters: [
      { char: "D", color: "#0044BB" }, // Blue
      { char: "R", color: "#C99A2E" }, // Gold
      { char: "E", color: "#008744" }, // Green
      { char: "A", color: "#D6006E" }, // Pink/Magenta
      { char: "M", color: "#6A0572" }  // Purple
    ]
  },
  {
    word: "BOOKS",
    letters: [
      { char: "B", color: "#FF6600" }, // Orange
      { char: "O", color: "#D32F2F" }, // Red
      { char: "O", color: "#00838F" }, // Teal
      { char: "K", color: "#0044BB" }, // Blue
      { char: "S", color: "#D6006E" }  // Pink
    ]
  },
  {
    word: "FAIR",
    letters: [
      { char: "F", color: "#6A0572" }, // Purple
      { char: "A", color: "#008744" }, // Green
      { char: "I", color: "#C99A2E" }, // Gold
      { char: "R", color: "#00838F" }  // Teal
    ]
  }
];

export default function ColorfulCompanyName({ className = "", size = "header", animate = true }) {
  // Prominent bold sizes tuned for single line fit without layout collisions
  const sizeClasses = {
    small: "text-base sm:text-lg md:text-xl tracking-wide",
    header: "text-lg sm:text-xl md:text-2xl lg:text-[26px] xl:text-[28px] font-serif font-black tracking-wider",
    normal: "text-xl sm:text-2xl md:text-3xl font-serif font-black tracking-wider",
    large: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-black tracking-wider"
  };

  let globalIdx = 0;

  return (
    <div className={`inline-flex flex-nowrap items-center whitespace-nowrap space-x-2 sm:space-x-3.5 font-serif font-black uppercase drop-shadow-sm select-none ${sizeClasses[size] || sizeClasses.header} ${className}`}>
      {WORD_DATA.map((w, wIdx) => (
        <span key={wIdx} className="inline-flex flex-nowrap items-center whitespace-nowrap">
          {w.letters.map((l, lIdx) => {
            const delay = (globalIdx * 0.12).toFixed(2);
            globalIdx++;

            return (
              <span
                key={lIdx}
                style={{ 
                  color: l.color,
                  animationDelay: animate ? `${delay}s` : '0s'
                }}
                className={`inline-block font-extrabold transition-transform duration-200 hover:scale-125 ${
                  animate ? 'animate-bend-letter' : ''
                }`}
              >
                {l.char}
              </span>
            );
          })}
        </span>
      ))}
    </div>
  );
}
