import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Check,
  Mail,
  Linkedin,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';
import { getEmailHref } from '@/config/company';
import { NL_CONTENT } from '@/content/nl';
import { AtlasPhoto } from '@/components/AtlasPhoto';
import {
  PageHero,
  DynamicIcon,
  LogoMarquee,
  CtaBand,
  FadeIn,
} from '@/components/SharedSections';

export const metadata: Metadata = {
  title: NL_CONTENT.overOnsPage.seo.title,
  description: NL_CONTENT.overOnsPage.seo.description,
};

export default function OverOnsPage() {
  const { overOnsPage, home } = NL_CONTENT;

  return (
    <div>
      {/* 1. HERO */}
      <PageHero
        eyebrow={overOnsPage.hero.eyebrow}
        titleLine1={overOnsPage.hero.titleLine1}
        titleLine2={overOnsPage.hero.titleLine2}
        subtitle={overOnsPage.hero.subtitle}
        imageUrl={overOnsPage.hero.imageUrl}
        imageAlt={overOnsPage.hero.imageAlt}
        primaryCta={{
          label: 'Offerte aanvragen',
          href: '/offerte-aanvragen',
        }}
        secondaryCta={{
          label: 'Werken bij Atlas',
          href: '/werken-bij',
        }}
      />

      {/* STORY + 2. ALLES ONDER ÉÉN DAK */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-5">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange">
                ONS VERHAAL & MISSIE
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-atlas-black tracking-tight">
                {overOnsPage.story.heading}
              </h2>
              {overOnsPage.story.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-base sm:text-lg text-atlas-ink/90 leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="lg:col-span-5 bg-atlas-black text-white rounded-[22px] p-8 sm:p-10 shadow-xl">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange mb-2">
                {overOnsPage.allUnderOneRoof.eyebrow}
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {overOnsPage.allUnderOneRoof.titleLine1}{' '}
                <span className="text-atlas-orange">
                  {overOnsPage.allUnderOneRoof.titleLine2}
                </span>
              </h3>
              <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed">
                {overOnsPage.allUnderOneRoof.description}
              </p>

              <ul className="mt-6 space-y-3.5 border-t border-white/10 pt-6">
                {overOnsPage.allUnderOneRoof.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm sm:text-base font-semibold text-white">
                    <span className="w-6 h-6 rounded-full bg-atlas-orange text-white flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-4">
                <Link
                  href="/diensten"
                  className="inline-flex items-center gap-2 text-sm font-bold text-atlas-orange hover:underline"
                >
                  <span>Bekijk al onze diensten</span>
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES — 4 CARDS */}
      <section className="bg-atlas-grey py-16 md:py-24 border-y border-neutral-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange mb-2">
              WAAR WIJ VOOR STAAN
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-atlas-black tracking-tight">
              Onze vier <span className="text-atlas-orange">kernwaarden</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {overOnsPage.coreValues.map((val, idx) => (
              <FadeIn key={val.title} delay={idx * 0.08}>
                <div className="bg-white rounded-[18px] p-7 border border-neutral-200/80 shadow-sm h-full">
                  <div className="w-12 h-12 rounded-xl bg-atlas-orange-soft text-atlas-orange flex items-center justify-center mb-5">
                    <DynamicIcon name={val.iconName} className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-atlas-black">
                    {val.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-atlas-ink/85 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THREE PILLARS */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange mb-2">
              ONZE BELOFTE
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-atlas-black tracking-tight">
              Drie pijlers onder{' '}
              <span className="text-atlas-orange">elk project</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {overOnsPage.pillars.map((pillar, idx) => (
              <FadeIn key={pillar.number} delay={idx * 0.1}>
                <div className="bg-atlas-grey rounded-[20px] p-8 border border-neutral-200/70 h-full">
                  <span className="text-5xl font-black text-atlas-orange tabular-nums">
                    {pillar.number}
                  </span>
                  <h3 className="mt-4 text-xl font-extrabold text-atlas-black">
                    {pillar.title}
                  </h3>
                  <p className="text-sm font-bold text-atlas-orange mt-1">
                    {pillar.subtitle}
                  </p>
                  <p className="mt-3 text-sm sm:text-base text-atlas-ink/85 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TEAM GRID (6 Placeholders) */}
      <section className="bg-atlas-grey py-16 md:py-24 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange mb-2">
              DE MENSEN ACHTER ATLAS
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-atlas-black tracking-tight">
              Ons <span className="text-atlas-orange">kantoorteam & regie</span>
            </h2>
            <p className="mt-3 text-base text-atlas-ink/85">
              Vaste gezichten op de planning, werkvoorbereiding en buitendienstcoördinatie.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {overOnsPage.team.map((member, idx) => (
              <FadeIn key={idx} delay={idx * 0.06}>
                <div className="bg-white rounded-[20px] overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
                  <div>
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <AtlasPhoto
                        src={member.imageUrl}
                        alt={`${member.name} — ${member.role}`}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-extrabold text-atlas-black">
                        {member.name}
                      </h3>
                      <p className="text-sm font-semibold text-atlas-orange mt-0.5">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
                    <a
                      href={getEmailHref(member.email)}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-atlas-ink hover:text-atlas-orange transition-colors truncate"
                    >
                      <Mail className="w-4 h-4 text-atlas-orange shrink-0" strokeWidth={1.75} />
                      <span className="truncate">{member.email}</span>
                    </a>
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn profiel van ${member.name}`}
                      className="w-9 h-9 rounded-full bg-atlas-grey hover:bg-atlas-orange text-atlas-black hover:text-white flex items-center justify-center transition-colors shrink-0"
                    >
                      <Linkedin className="w-4 h-4" strokeWidth={1.75} />
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CERTIFICATES STRIP + CLIENT LOGO MARQUEE */}
      <section className="bg-atlas-black text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {home.qualitySection.certificates.map((cert) => (
              <div
                key={cert.code}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4"
              >
                <ShieldCheck
                  className="w-6 h-6 text-atlas-orange shrink-0 mt-0.5"
                  strokeWidth={1.75}
                />
                <div>
                  <p className="font-bold text-white text-sm">{cert.code}</p>
                  <p className="text-xs text-neutral-400 mt-1">{cert.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LogoMarquee />

      {/* 7. CTA BAND */}
      <CtaBand />
    </div>
  );
}
