'use client';

import { useEffect, useState } from 'react';

export function TopBar() {
  const [today, setToday] = useState('');

  useEffect(() => {
    const formatted = new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'long',
      timeZone: 'America/Sao_Paulo',
    })
      .format(new Date())
      .toUpperCase();
    setToday(formatted);
  }, []);

  return (
    <div
      className="relative w-full animate-in fade-in duration-500"
      style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid rgba(75,42,123,0.12)' }}
    >
      <div className="py-2.5 sm:py-3">
        <div
          className="w-full max-w-6xl mx-auto flex items-center justify-center text-center"
          style={{ paddingInline: '12px', boxSizing: 'border-box' }}
        >
          <span
            className="text-xs sm:text-sm font-semibold tracking-wide"
            style={{ color: '#4B2A7B' }}
          >
            {'\uD83C\uDF81'} OFERTA ESPECIAL SOMENTE HOJE{today ? ` \u2022 ${today}` : ''}
          </span>
        </div>
      </div>
    </div>
  );
}
