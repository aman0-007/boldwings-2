import React from 'react';

export interface AirlineItem {
  name: string;
  component: React.ReactNode;
}

export const airlineLogos: AirlineItem[] = [
  {
    name: 'Emirates',
    component: (
      <svg viewBox="0 0 220 70" className="h-12 w-auto max-w-[160px]" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="220" height="70" rx="8" fill="transparent" />
        <g fill="#D71920">
          <text x="110" y="44" fontFamily="'Times New Roman', serif" fontSize="34" fontWeight="bold" textAnchor="middle" letterSpacing="1.5">
            Emirates
          </text>
          <path d="M48 50 C 70 53, 150 53, 172 50 C 150 51.5, 70 51.5, 48 50 Z" fill="#D71920" />
        </g>
      </svg>
    ),
  },
  {
    name: 'Air India',
    component: (
      <svg viewBox="0 0 220 70" className="h-12 w-auto max-w-[160px]" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="220" height="70" rx="8" fill="transparent" />
        <g transform="translate(10, 15)">
          {/* Flying Swan / Konark Chakra icon */}
          <circle cx="20" cy="20" r="17" fill="#ED1C24" />
          <circle cx="20" cy="20" r="13" fill="#FDB913" />
          <path d="M12 20 Q 20 10, 28 20 Q 20 16, 12 20 Z" fill="#ED1C24" />
          <circle cx="20" cy="20" r="4" fill="#ED1C24" />
        </g>
        <text x="58" y="37" fontFamily="'Poppins', sans-serif" fontSize="20" fontWeight="800" fill="#ED1C24" letterSpacing="0.5">
          AIR INDIA
        </text>
        <text x="59" y="50" fontFamily="'Poppins', sans-serif" fontSize="10" fontWeight="600" fill="#FDB913" letterSpacing="2">
          एअर इंडिया
        </text>
      </svg>
    ),
  },
  {
    name: 'Vistara',
    component: (
      <svg viewBox="0 0 220 70" className="h-12 w-auto max-w-[160px]" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="220" height="70" rx="8" fill="transparent" />
        <g transform="translate(15, 14)">
          {/* Vistara 8-pointed star */}
          <polygon points="18,3 22,14 33,18 22,22 18,33 14,22 3,18 14,14" fill="#5A245A" />
          <circle cx="18" cy="18" r="4" fill="#E8B038" />
        </g>
        <text x="62" y="42" fontFamily="'Poppins', sans-serif" fontSize="24" fontWeight="700" fill="#5A245A" letterSpacing="1.5">
          Vistara
        </text>
        <text x="160" y="28" fontFamily="'Poppins', sans-serif" fontSize="9" fontWeight="500" fill="#5A245A">
          TM
        </text>
      </svg>
    ),
  },
  {
    name: 'IndiGo',
    component: (
      <svg viewBox="0 0 220 70" className="h-12 w-auto max-w-[160px]" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="220" height="70" rx="8" fill="transparent" />
        <g transform="translate(16, 17)">
          {/* Dot matrix pattern tail */}
          <circle cx="6" cy="12" r="3.2" fill="#001B94" />
          <circle cx="14" cy="8" r="3.2" fill="#001B94" />
          <circle cx="22" cy="4" r="3.2" fill="#001B94" />
          <circle cx="14" cy="18" r="3.2" fill="#001B94" />
          <circle cx="22" cy="14" r="3.2" fill="#001B94" />
          <circle cx="22" cy="24" r="3.2" fill="#001B94" />
          <circle cx="30" cy="10" r="3.2" fill="#001B94" />
          <circle cx="30" cy="20" r="3.2" fill="#001B94" />
        </g>
        <text x="62" y="42" fontFamily="'Poppins', sans-serif" fontSize="26" fontWeight="700" fill="#001B94">
          Indi<tspan fill="#FF7900">G</tspan>o
        </text>
      </svg>
    ),
  },
  {
    name: 'SpiceJet',
    component: (
      <svg viewBox="0 0 220 70" className="h-12 w-auto max-w-[160px]" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="220" height="70" rx="8" fill="transparent" />
        <g transform="translate(10, 20)">
          {/* Spice pepper dots */}
          <circle cx="6" cy="15" r="4.5" fill="#ED1C24" />
          <circle cx="16" cy="10" r="4" fill="#F36F21" />
          <circle cx="25" cy="6" r="3.5" fill="#FFC20E" />
          <circle cx="18" cy="20" r="3.5" fill="#ED1C24" />
          <circle cx="27" cy="16" r="3" fill="#F36F21" />
        </g>
        <text x="50" y="41" fontFamily="'Poppins', sans-serif" fontSize="24" fontWeight="800" fontStyle="italic" fill="#ED1C24" letterSpacing="0.5">
          Spice<tspan fill="#ED1C24">Jet</tspan>
        </text>
        <text x="52" y="52" fontFamily="'Poppins', sans-serif" fontSize="8" fontWeight="600" fill="#666" letterSpacing="1.5">
          RED. HOT. SPICY.
        </text>
      </svg>
    ),
  },
  {
    name: 'Qatar Airways',
    component: (
      <svg viewBox="0 0 220 70" className="h-12 w-auto max-w-[160px]" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="220" height="70" rx="8" fill="transparent" />
        <g transform="translate(12, 12)">
          {/* Oryx emblem */}
          <circle cx="22" cy="22" r="20" fill="#5C0632" />
          <path d="M14 26 L22 10 L30 26 Q 22 23, 14 26 Z" fill="#FFFFFF" />
          <path d="M22 12 L22 34" stroke="#5C0632" strokeWidth="2" />
        </g>
        <text x="60" y="34" fontFamily="'Times New Roman', serif" fontSize="18" fontWeight="bold" fill="#5C0632" letterSpacing="1">
          QATAR
        </text>
        <text x="60" y="48" fontFamily="'Poppins', sans-serif" fontSize="11" fontWeight="600" fill="#4A4A4A" letterSpacing="3">
          AIRWAYS
        </text>
      </svg>
    ),
  },
  {
    name: 'Etihad Airways',
    component: (
      <svg viewBox="0 0 220 70" className="h-12 w-auto max-w-[160px]" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="220" height="70" rx="8" fill="transparent" />
        <g transform="translate(14, 16)">
          {/* Faceted triangle emblem */}
          <polygon points="18,2 34,28 2,28" fill="#BD9B60" />
          <polygon points="18,8 28,24 8,24" fill="#FFFFFF" opacity="0.25" />
          <polygon points="18,14 24,24 12,24" fill="#BD9B60" />
        </g>
        <text x="56" y="34" fontFamily="'Times New Roman', serif" fontSize="18" fontWeight="bold" fill="#BD9B60" letterSpacing="3">
          ETIHAD
        </text>
        <text x="56" y="47" fontFamily="'Poppins', sans-serif" fontSize="10" fontWeight="600" fill="#4A4A4A" letterSpacing="4">
          AIRWAYS
        </text>
      </svg>
    ),
  },
  {
    name: 'Singapore Airlines',
    component: (
      <svg viewBox="0 0 220 70" className="h-12 w-auto max-w-[160px]" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="220" height="70" rx="8" fill="transparent" />
        <g transform="translate(10, 15)">
          {/* Silverkris bird icon */}
          <path d="M4 25 Q 18 10, 32 4 Q 28 16, 20 22 Q 30 18, 38 22 Q 22 28, 4 25 Z" fill="#CCA355" />
          <circle cx="28" cy="8" r="2.5" fill="#00205B" />
        </g>
        <text x="56" y="32" fontFamily="'Poppins', sans-serif" fontSize="13" fontWeight="800" fill="#00205B" letterSpacing="1">
          SINGAPORE
        </text>
        <text x="56" y="47" fontFamily="'Poppins', sans-serif" fontSize="11" fontWeight="700" fill="#CCA355" letterSpacing="2">
          AIRLINES
        </text>
      </svg>
    ),
  },
];
