import React from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Instagram,
  Linkedin,
  Facebook,
  Share2,
  ArrowUpRight,
} from 'lucide-react';
import { COMPANY_CONFIG, getPhoneHref, getEmailHref } from '@/config/company';
import { NL_CONTENT } from '@/content/nl';
import { AtlasLogo } from './AtlasLogo';

export function Footer() {
  return (
    <footer className="bg-atlas-black text-white border-t-4 border-atlas-orange">
      {/* Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Light Logo, Tagline, Socials (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <AtlasLogo variant="light-on-dark" size="lg" />
            <p className="text-neutral-300 text-sm leading-relaxed max-w-sm">
              {NL_CONTENT.footer.tagline}
            </p>
            <div className="pt-1">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange mb-3">
                Volg Atlas Holland
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={COMPANY_CONFIG.socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Instagram ${COMPANY_CONFIG.socials.instagram.label}`}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-atlas-orange text-white flex items-center justify-center transition-colors border border-white/10"
                >
                  <Instagram className="w-4 h-4" strokeWidth={1.75} />
                </a>
                <a
                  href={COMPANY_CONFIG.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn ${COMPANY_CONFIG.socials.linkedin.label}`}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-atlas-orange text-white flex items-center justify-center transition-colors border border-white/10"
                >
                  <Linkedin className="w-4 h-4" strokeWidth={1.75} />
                </a>
                <a
                  href={COMPANY_CONFIG.socials.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`TikTok ${COMPANY_CONFIG.socials.tiktok.label}`}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-atlas-orange text-white flex items-center justify-center transition-colors border border-white/10"
                >
                  <Share2 className="w-4 h-4" strokeWidth={1.75} />
                </a>
                <a
                  href={COMPANY_CONFIG.socials.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Facebook ${COMPANY_CONFIG.socials.facebook.label}`}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-atlas-orange text-white flex items-center justify-center transition-colors border border-white/10"
                >
                  <Facebook className="w-4 h-4" strokeWidth={1.75} />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Diensten (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange mb-4">
              Diensten
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NL_CONTENT.footer.servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-atlas-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/diensten"
                  className="inline-flex items-center gap-1 text-atlas-orange hover:underline font-semibold"
                >
                  <span>Alle diensten bekijken</span>
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Atlas (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange mb-4">
              Atlas
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NL_CONTENT.footer.companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-atlas-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Bedrijfsgegevens (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-sm">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange mb-4">
              Contact & 24/7 Spoed
            </h3>
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-atlas-orange shrink-0 mt-1" strokeWidth={1.75} />
              <div>
                <p className="text-xs text-neutral-400">24/7 Planning & Spoed:</p>
                <a
                  href={getPhoneHref()}
                  className="font-bold text-white hover:text-atlas-orange transition-colors"
                >
                  {COMPANY_CONFIG.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-atlas-orange shrink-0 mt-1" strokeWidth={1.75} />
              <div>
                <p className="text-xs text-neutral-400">E-mail algemeen:</p>
                <a
                  href={getEmailHref(COMPANY_CONFIG.emailGeneral)}
                  className="text-neutral-200 hover:text-atlas-orange transition-colors break-all"
                >
                  {COMPANY_CONFIG.emailGeneral}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-atlas-orange shrink-0 mt-1" strokeWidth={1.75} />
              <div>
                <p className="text-xs text-neutral-400">Bezoek- & postadres:</p>
                <p className="text-neutral-200">{COMPANY_CONFIG.addressStreet}</p>
                <p className="text-neutral-200">{COMPANY_CONFIG.addressPostalCity}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 text-xs text-neutral-400 space-y-1">
              <p>
                KvK: <span className="text-neutral-200 font-medium">{COMPANY_CONFIG.kvk}</span>
              </p>
              <p>
                BTW: <span className="text-neutral-200 font-medium">{COMPANY_CONFIG.btw}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Certification Strip */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
            <ShieldCheck className="w-4 h-4 text-atlas-orange shrink-0" strokeWidth={1.75} />
            <span>Kwaliteit & Certificering:</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-neutral-300">
            <span>[VCA / VCA**]</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>[BRL 9101 / BRL 9102]</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>[Landelijk Aangestelde Verkeersregelaars]</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>[ISO 9001 — alleen indien behaald]</span>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="bg-black/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>{NL_CONTENT.footer.copyright}</p>
          <div className="flex items-center gap-4">
            {NL_CONTENT.footer.legalLinks.map((link, index) => (
              <React.Fragment key={link.href}>
                {index > 0 && <span aria-hidden="true" className="text-neutral-600">·</span>}
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
