import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  MapPin,
  Clock,
  Calendar,
  Check,
  ArrowLeft,
  Phone,
  Mail,
} from 'lucide-react';
import { COMPANY_CONFIG, getPhoneHref, getEmailHref } from '@/config/company';
import { NL_CONTENT, getVacancyBySlug } from '@/content/nl';
import { PageHero } from '@/components/SharedSections';
import { ApplicationForm } from '@/components/ApplicationForm';

interface VacancyDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return NL_CONTENT.werkenBijPage.vacancies.map((vac) => ({
    slug: vac.slug,
  }));
}

export async function generateMetadata({
  params,
}: VacancyDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const vacancy = getVacancyBySlug(slug);
  if (!vacancy) {
    return {
      title: 'Vacature niet gevonden | Atlas Holland B.V.',
    };
  }
  return {
    title: `${vacancy.title} | Vacature | Atlas Holland B.V.`,
    description: vacancy.summary,
  };
}

export default async function VacancyDetailPage({ params }: VacancyDetailPageProps) {
  const { slug } = await params;
  const vacancy = getVacancyBySlug(slug);

  if (!vacancy) {
    notFound();
  }

  return (
    <div>
      <PageHero
        eyebrow="VACATURE BIJ ATLAS HOLLAND"
        titleLine1={vacancy.title}
        subtitle={vacancy.summary}
        imageUrl="/assets/images/atlas_team_werken_bij_1794215805378.jpg"
        imageAlt={vacancy.title}
        primaryCta={{
          label: 'Solliciteer direct ↓',
          href: '#solliciteer-nu',
        }}
      />

      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/werken-bij#vacatures"
              className="inline-flex items-center gap-2 text-sm font-bold text-atlas-ink hover:text-atlas-orange transition-colors"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={2} />
              <span>Terug naar alle vacatures</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Main Vacancy Content */}
            <div className="lg:col-span-8 space-y-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-atlas-black mb-4">
                  Over deze functie
                </h2>
                <p className="text-base sm:text-lg text-atlas-ink/90 leading-relaxed">
                  {vacancy.intro}
                </p>
              </div>

              {/* Wat ga je doen */}
              <div className="bg-atlas-grey rounded-[20px] p-7 sm:p-8 border border-neutral-200">
                <h3 className="text-xl font-extrabold text-atlas-black mb-4">
                  Wat ga je doen?
                </h3>
                <ul className="space-y-3">
                  {vacancy.whatYouDo.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-atlas-orange text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                      </span>
                      <span className="text-sm sm:text-base text-atlas-ink">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Wat vragen wij */}
              <div>
                <h3 className="text-xl font-extrabold text-atlas-black mb-4">
                  Wat vragen wij van jou?
                </h3>
                <ul className="space-y-3">
                  {vacancy.whatWeAsk.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-atlas-orange/20 text-atlas-orange flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                      </span>
                      <span className="text-sm sm:text-base text-atlas-ink">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Wat bieden wij */}
              <div className="bg-atlas-orange-soft/60 rounded-[20px] p-7 sm:p-8 border border-atlas-orange/25">
                <h3 className="text-xl font-extrabold text-atlas-black mb-4">
                  Wat bieden wij jou?
                </h3>
                <ul className="space-y-3">
                  {vacancy.whatWeOffer.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-atlas-orange text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                      </span>
                      <span className="text-sm sm:text-base font-medium text-atlas-black">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sticky Sidebar with Location, Hours, Start Date & Contact */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="bg-atlas-black text-white rounded-[22px] p-7 space-y-5 shadow-xl">
                <h3 className="text-lg font-extrabold text-white border-b border-white/15 pb-3">
                  Functiegegevens
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-atlas-orange shrink-0 mt-0.5" strokeWidth={1.75} />
                    <div>
                      <p className="text-xs text-neutral-400">Standplaats / Regio</p>
                      <p className="font-bold text-white">{vacancy.region}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-atlas-orange shrink-0 mt-0.5" strokeWidth={1.75} />
                    <div>
                      <p className="text-xs text-neutral-400">Uren per week</p>
                      <p className="font-bold text-white">{vacancy.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-atlas-orange shrink-0 mt-0.5" strokeWidth={1.75} />
                    <div>
                      <p className="text-xs text-neutral-400">Startdatum</p>
                      <p className="font-bold text-white">{vacancy.startDate}</p>
                    </div>
                  </div>
                </div>

                <a
                  href="#solliciteer-nu"
                  className="w-full inline-flex items-center justify-center bg-atlas-orange hover:bg-atlas-orange-dark text-white font-bold text-sm py-3.5 px-6 rounded-full transition-colors"
                >
                  Direct solliciteren ↓
                </a>

                <div className="pt-4 border-t border-white/15 space-y-2 text-xs text-neutral-300">
                  <p className="font-semibold text-white">Eerst een vraag stellen?</p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-atlas-orange" />
                    <a href={getPhoneHref()} className="hover:text-atlas-orange">
                      {COMPANY_CONFIG.phoneDisplay}
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-atlas-orange" />
                    <a
                      href={getEmailHref(COMPANY_CONFIG.emailCareers)}
                      className="hover:text-atlas-orange break-all"
                    >
                      {COMPANY_CONFIG.emailCareers}
                    </a>
                  </p>
                </div>
              </div>
            </aside>
          </div>

          {/* Embedded Application Form */}
          <div
            id="solliciteer-nu"
            className="mt-16 pt-12 border-t border-neutral-200 max-w-4xl scroll-mt-24"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-atlas-black mb-2">
              Solliciteer direct op deze functie
            </h2>
            <p className="text-sm sm:text-base text-atlas-ink/85 mb-8">
              Vul je gegevens in en we nemen binnen 24 uur contact met je op.
            </p>
            <div className="bg-atlas-grey rounded-[24px] p-8 sm:p-10 border border-neutral-200">
              <ApplicationForm defaultVacancyTitle={vacancy.title} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
