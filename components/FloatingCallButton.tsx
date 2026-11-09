import React from 'react';
import { Phone } from 'lucide-react';
import { COMPANY_CONFIG, getPhoneHref } from '@/config/company';

/**
 * Floating "Bel direct" button on mobile viewports (bottom-right, orange, phone icon).
 */
export function FloatingCallButton() {
  return (
    <div className="fixed bottom-4 right-4 z-40 md:hidden">
      <a
        href={getPhoneHref()}
        aria-label={`Bel direct 24/7: ${COMPANY_CONFIG.phoneDisplay}`}
        className="inline-flex items-center gap-2 bg-atlas-orange hover:bg-atlas-orange-dark text-white font-bold text-sm px-4 py-3 rounded-full shadow-lg border border-white/20 transition-transform active:scale-95"
      >
        <Phone className="w-4 h-4 shrink-0" strokeWidth={2} />
        <span>Bel direct</span>
      </a>
    </div>
  );
}
