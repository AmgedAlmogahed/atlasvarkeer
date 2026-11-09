import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  MapPin,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { NL_CONTENT } from '@/content/nl';
import {
  PageHero,
  DynamicIcon,
  FaqAccordion,
  FadeIn,
} from '@/components/SharedSections';
import { ApplicationForm } from '@/components/ApplicationForm';

export const metadata: Metadata = {
  title: NL_CONTENT.werkenBijPage.seo.title,
  description: NL_CONTENT.werkenBijPage.seo.description,
};

export default function WerkenBijPage() {
  const { werkenBijPage } = NL_CONTENT;

  return (
    <div>
      {/* 1. HERO (Informal "je" tone) */}
      <PageHero
        eyebrow={werkenBijPage.hero.eyebrow}
        titleLine1={werkenBijPage.hero.titleLine1}
        titleLine2={werkenBijPage.hero.titleLine2}
        subtitle={werkenBijPage.hero.subtitle}
        imageUrl={werkenBijPage.hero.imageUrl}
        imageAlt={werkenBijPage.hero.imageAlt}
        primaryCta={{
          label: werkenBijPage.hero.buttonLabel,
          href: werkenBijPage.hero.buttonHref,
        }}
        secondaryCta={{
          label: 'Bekijk openstaande vacatures',
          href: '#vacatures',
        }}
      />

      {/* 2. WHY ATLAS — 4 CARDS */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange mb-2">
              GOED VOOR ELKAAR
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-atlas-black tracking-tight">
              Waarom werken bij{' '}
              <span className="text-atlas-orange">Atlas Holland?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {werkenBijPage.whyAtlas.map((item, idx) => (
              <FadeIn key={item.title} delay={idx * 0.08}>
                <div className="bg-atlas-grey rounded-[20px] p-7 border border-neutral-200/80 h-full">
                  <div className="w-12 h-12 rounded-xl bg-atlas-orange text-white flex items-center justify-center mb-5">
                    <DynamicIcon name={item.iconName} className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-extrabold text-atlas-black">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-atlas-ink/85 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR TRAITS WE LOOK FOR */}
      <section className="bg-atlas-black text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange mb-2">
              WIE BEN JIJ?
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Herken jij jezelf in deze{' '}
              <span className="text-atlas-orange">vier eigenschappen?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {werkenBijPage.traits.map((trait) => (
              <div
                key={trait.title}
                className="bg-white/5 border border-white/10 rounded-[18px] p-6"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <CheckCircle2
                    className="w-5 h-5 text-atlas-orange shrink-0"
                    strokeWidth={2}
                  />
                  <h3 className="text-lg font-bold text-white">{trait.title}</h3>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {trait.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VACANCIES LIST */}
      <section
        id="vacatures"
        className="bg-atlas-grey py-16 md:py-24 border-b border-neutral-200 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange mb-2">
              VACATURES
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-atlas-black tracking-tight">
              Kies jouw <span className="text-atlas-orange">functie</span>
            </h2>
            <p className="mt-3 text-base text-atlas-ink/85">
              Klik op een vacature voor alle details of solliciteer direct onderaan deze pagina.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {werkenBijPage.vacancies.map((vac, idx) => (
              <FadeIn key={vac.slug} delay={idx * 0.06}>
                <Link
                  href={`/werken-bij/${vac.slug}`}
                  className="group bg-white rounded-[20px] p-7 sm:p-8 border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-atlas-orange hover:-translate-y-0.5 transition-all flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-neutral-500 mb-3">
                      {vac.tags.map((tag, tIdx) => (
                        <React.Fragment key={tag}>
                          {tIdx > 0 && <span aria-hidden="true">·</span>}
                          <span className="text-atlas-orange font-bold">{tag}</span>
                        </React.Fragment>
                      ))}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-atlas-black group-hover:text-atlas-orange transition-colors">
                      {vac.title}
                    </h3>

                    <div className="mt-3 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-neutral-600 font-medium">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-atlas-orange" strokeWidth={1.75} />
                        {vac.region}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-atlas-orange" strokeWidth={1.75} />
                        {vac.hours}
                      </span>
                    </div>

                    <p className="mt-4 text-sm sm:text-base text-atlas-ink/85 leading-relaxed">
                      {vac.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-atlas-orange group-hover:gap-2.5 transition-all">
                      <span>Bekijk vacature & solliciteer</span>
                      <ArrowRight className="w-4 h-4" strokeWidth={2} />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. RECRUITMENT PROCESS — 4 STEPS */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange mb-2">
              SNEL AAN DE SLAG
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-atlas-black tracking-tight">
              In 4 stappen naar jouw{' '}
              <span className="text-atlas-orange">nieuwe baan</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {werkenBijPage.processSteps.map((step, idx) => (
              <div
                key={step.number}
                className="bg-atlas-grey rounded-[20px] p-7 border border-neutral-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-4xl font-black text-atlas-orange tabular-nums">
                      {step.number}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      Stap {idx + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-atlas-black">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-atlas-ink/85 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="bg-atlas-grey py-16 md:py-24 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion
            eyebrow="VEELGESTELDE VRAGEN OVER WERKEN BIJ ATLAS"
            title="Alles wat je wilt weten voor je start"
            faqs={werkenBijPage.faqs}
          />
        </div>
      </section>

      {/* 7. APPLICATION FORM (#solliciteren) */}
      <section id="solliciteren" className="bg-white py-16 md:py-24 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-atlas-grey rounded-[24px] p-8 sm:p-12 border border-neutral-200 shadow-sm">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange mb-2">
                DIRECT SOLLICITEREN
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-atlas-black tracking-tight">
                Zet vandaag de eerste stap naar{' '}
                <span className="text-atlas-orange">het Atlas team</span>
              </h2>
              <p className="mt-2 text-sm sm:text-base text-atlas-ink/85">
                Laat hieronder je gegevens achter. We bellen je binnen 24 uur op voor een kennismaking!
              </p>
            </div>

            <ApplicationForm />
          </div>
        </div>
      </section>
    </div>
  );
}
