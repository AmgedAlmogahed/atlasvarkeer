import React from 'react';
import type { Metadata } from 'next';
import {
  Phone,
  Mail,
  MapPin,
  Building2,
  ArrowUpRight,
  Instagram,
  Linkedin,
  Share2,
} from 'lucide-react';
import { COMPANY_CONFIG, getPhoneHref, getEmailHref } from '@/config/company';
import { NL_CONTENT } from '@/content/nl';
import { PageHero } from '@/components/SharedSections';
import { ContactFormClient } from '@/components/ContactFormClient';

export const metadata: Metadata = {
  title: NL_CONTENT.contactPage.seo.title,
  description: NL_CONTENT.contactPage.seo.description,
};

export default function ContactPage() {
  const { hero } = NL_CONTENT.contactPage;

  return (
    <div>
      <PageHero
        eyebrow={hero.eyebrow}
        titleLine1={hero.titleLine1}
        titleLine2={hero.titleLine2}
        subtitle={hero.subtitle}
        imageUrl="/assets/images/atlas_hero_verkeersregelaars_1794215800416.jpg"
        imageAlt="Neem contact op met Atlas Holland B.V."
        primaryCta={{
          label: 'Offerte aanvragen',
          href: '/offerte-aanvragen',
        }}
        showPhoneCta
      />

      {/* Two-Column Contact Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Contact Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange mb-2">
                  DIRECT BEREIKBAAR
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-atlas-black tracking-tight">
                  Onze contactgegevens
                </h2>
              </div>

              {/* Card 1: 24/7 Telefoon */}
              <div className="bg-atlas-black text-white rounded-[20px] p-6 flex items-start gap-4 shadow-md">
                <div className="w-12 h-12 rounded-xl bg-atlas-orange text-white flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-atlas-orange">
                    24/7 Telefoon & Spoedinzet
                  </p>
                  <a
                    href={getPhoneHref()}
                    className="text-xl font-extrabold text-white hover:text-atlas-orange transition-colors block mt-1"
                  >
                    {COMPANY_CONFIG.phoneDisplay}
                  </a>
                  <p className="text-xs text-neutral-400 mt-1">
                    Dag en nacht direct verbonden met onze centrale planning.
                  </p>
                </div>
              </div>

              {/* Card 2: E-mail */}
              <div className="bg-atlas-grey rounded-[20px] p-6 border border-neutral-200 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-atlas-orange-soft text-atlas-orange flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      Algemeen & Planning
                    </p>
                    <a
                      href={getEmailHref(COMPANY_CONFIG.emailGeneral)}
                      className="text-base font-extrabold text-atlas-black hover:text-atlas-orange transition-colors break-all"
                    >
                      {COMPANY_CONFIG.emailGeneral}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      Vacatures & Opleidingen
                    </p>
                    <a
                      href={getEmailHref(COMPANY_CONFIG.emailCareers)}
                      className="text-sm font-bold text-atlas-ink hover:text-atlas-orange transition-colors break-all"
                    >
                      {COMPANY_CONFIG.emailCareers}
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3: Adres + Route */}
              <div className="bg-atlas-grey rounded-[20px] p-6 border border-neutral-200 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-atlas-orange-soft text-atlas-orange flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Bezoekadres
                  </p>
                  <p className="text-base font-extrabold text-atlas-black mt-1">
                    {COMPANY_CONFIG.name}
                  </p>
                  <p className="text-sm text-atlas-ink">{COMPANY_CONFIG.addressStreet}</p>
                  <p className="text-sm text-atlas-ink">{COMPANY_CONFIG.addressPostalCity}</p>
                  <a
                    href={COMPANY_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-atlas-orange hover:underline mt-3"
                  >
                    <span>Bekijk de route in Google Maps</span>
                    <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                  </a>
                </div>
              </div>

              {/* Card 4: KvK, BTW & Socials */}
              <div className="bg-atlas-grey rounded-[20px] p-6 border border-neutral-200 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-atlas-orange-soft text-atlas-orange flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <div className="text-sm space-y-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      Bedrijfsregistratie
                    </p>
                    <p className="text-atlas-ink">
                      KvK-nummer: <strong className="text-atlas-black">{COMPANY_CONFIG.kvk}</strong>
                    </p>
                    <p className="text-atlas-ink">
                      BTW-nummer: <strong className="text-atlas-black">{COMPANY_CONFIG.btw}</strong>
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Social media:
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={COMPANY_CONFIG.socials.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-atlas-black hover:text-atlas-orange bg-white px-3 py-1.5 rounded-lg border border-neutral-200"
                    >
                      <Instagram className="w-3.5 h-3.5 text-atlas-orange" />
                      <span>{COMPANY_CONFIG.socials.instagram.label}</span>
                    </a>
                    <a
                      href={COMPANY_CONFIG.socials.linkedin.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-atlas-black hover:text-atlas-orange bg-white px-3 py-1.5 rounded-lg border border-neutral-200"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-atlas-orange" />
                      <span>{COMPANY_CONFIG.socials.linkedin.label}</span>
                    </a>
                    <a
                      href={COMPANY_CONFIG.socials.tiktok.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-atlas-black hover:text-atlas-orange bg-white px-3 py-1.5 rounded-lg border border-neutral-200"
                    >
                      <Share2 className="w-3.5 h-3.5 text-atlas-orange" />
                      <span>{COMPANY_CONFIG.socials.tiktok.label}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-atlas-grey rounded-[24px] p-8 sm:p-10 border border-neutral-200">
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange mb-2">
                  STUUR EEN BERICHT
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-atlas-black tracking-tight">
                  Stel uw vraag aan ons team
                </h2>
                <p className="mt-2 text-sm sm:text-base text-atlas-ink/85">
                  Vul het formulier in en wij nemen zo snel mogelijk contact met u op.
                </p>
              </div>

              <ContactFormClient />
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Google Map Section */}
      <section className="bg-atlas-grey py-12 md:py-16 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[24px] overflow-hidden border border-neutral-200 shadow-sm">
            <div className="p-6 sm:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange">
                  LANDELIJKE DEKKING VANUIT CENTRAAL NEDERLAND
                </p>
                <h3 className="text-xl font-extrabold text-atlas-black mt-0.5">
                  Bezoekadres: {COMPANY_CONFIG.fullAddress}
                </h3>
              </div>
              <a
                href={COMPANY_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-atlas-orange hover:underline shrink-0"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
              </a>
            </div>
            <div className="w-full h-[380px] bg-neutral-200 relative">
              <iframe
                title={`Locatie van ${COMPANY_CONFIG.name} op Google Maps`}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d623755.349013426!2d4.4922854!3d52.1551723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c3db87e4bb%3A0xb3a175ceffbd0a9f!2sNederland!5e0!3m2!1snl!2snl!4v1710000000000!5m2!1snl!2snl"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
