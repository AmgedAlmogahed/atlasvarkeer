import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Check, ArrowUpRight } from 'lucide-react';
import { NL_CONTENT, getServiceBySlug } from '@/content/nl';
import {
  PageHero,
  CtaBand,
  ProcessSteps,
  FaqAccordion,
  ServiceCard,
  DynamicIcon,
  FadeIn,
} from '@/components/SharedSections';

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return NL_CONTENT.services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return {
      title: 'Dienst niet gevonden | Atlas Holland B.V.',
    };
  }
  return {
    title: `${service.title} | Diensten | Atlas Holland B.V.`,
    description: service.heroPromise,
    openGraph: {
      title: `${service.title} | Atlas Holland B.V.`,
      description: service.heroPromise,
      type: 'website',
    },
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = service.relatedSlugs
    .map((relSlug) => getServiceBySlug(relSlug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <div>
      {/* 1. HERO WITH PHOTO, H1 = SERVICE NAME, ONE-LINE PROMISE, OFFERTE + BEL DIRECT */}
      <PageHero
        eyebrow="ONZE DIENSTEN"
        titleLine1={service.title}
        subtitle={service.heroPromise}
        imageUrl={service.imageUrl}
        imageAlt={service.imageAlt}
        primaryCta={{
          label: 'Offerte aanvragen',
          href: `/offerte-aanvragen?dienst=${service.slug}`,
        }}
        showPhoneCta
      />

      {/* 2. WAT WIJ DOEN — 2-Column Text + Bullet List with Orange Check Icons */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-5">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange">
                WAT WIJ DOEN
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-atlas-black tracking-tight text-balance">
                Specialist in{' '}
                <span className="text-atlas-orange">
                  {service.title.toLowerCase()}
                </span>
              </h2>
              {service.whatWeDoParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg text-atlas-ink/90 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              <div className="pt-4">
                <Link
                  href={`/offerte-aanvragen?dienst=${service.slug}`}
                  className="inline-flex items-center gap-2 bg-atlas-orange hover:bg-atlas-orange-dark text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-full transition-colors"
                >
                  <span>Direct {service.title.toLowerCase()} aanvragen</span>
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-atlas-grey rounded-[20px] p-7 sm:p-9 border border-neutral-200">
              <h3 className="text-lg font-extrabold text-atlas-black mb-5">
                Uw zekerheden bij Atlas Holland
              </h3>
              <ul className="space-y-4">
                {service.whatWeDoBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <span className="w-6 h-6 rounded-full bg-atlas-orange text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </span>
                    <span className="text-sm sm:text-base text-atlas-ink font-medium leading-snug">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TOEPASSINGEN — 3-4 Icon Cards with Typical Situations */}
      <section className="bg-atlas-grey py-16 md:py-24 border-y border-neutral-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange mb-2">
              PRAKTIJKSITUATIES
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-atlas-black tracking-tight">
              Veelvoorkomende{' '}
              <span className="text-atlas-orange">toepassingen</span>
            </h2>
          </div>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 ${
              service.applications.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
            } gap-6`}
          >
            {service.applications.map((app, index) => (
              <FadeIn key={app.title} delay={index * 0.08}>
                <div className="bg-white rounded-[18px] p-7 border border-neutral-200/80 shadow-sm h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-atlas-orange-soft text-atlas-orange flex items-center justify-center mb-5">
                      <DynamicIcon name={app.iconName} className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-extrabold text-atlas-black">
                      {app.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-atlas-ink/85 leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ZO WERKEN WIJ — 3-Step Process */}
      <ProcessSteps
        eyebrow="ZO WERKEN WIJ"
        titleLine1="Van aanvraag tot uitvoering."
        titleLine2="Volledig ontzorgd."
        bgClass="bg-white"
      />

      {/* 5. ORANGE CTA BAND */}
      <CtaBand
        headline={`${service.title} nodig voor uw project?`}
        buttonLabel="Vraag een offerte aan"
        buttonHref={`/offerte-aanvragen?dienst=${service.slug}`}
      />

      {/* 6. FAQ ACCORDION */}
      <section className="bg-atlas-grey py-16 md:py-24 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion
            eyebrow="VEELGESTELDE VRAGEN"
            title={`Vragen over ${service.title.toLowerCase()}`}
            faqs={service.faqs}
          />
        </div>
      </section>

      {/* 7. ANDERE DIENSTEN — 3 Related Service Cards */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange mb-2">
                GERELATEERDE EXPERTISE
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-atlas-black">
                Andere <span className="text-atlas-orange">diensten</span>
              </h2>
            </div>
            <Link
              href="/diensten"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-atlas-orange hover:text-atlas-orange-dark"
            >
              <span>Alle diensten bekijken</span>
              <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((relService) => (
              <ServiceCard key={relService.slug} service={relService} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
