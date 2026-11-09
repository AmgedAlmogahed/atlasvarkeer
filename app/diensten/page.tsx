import React from 'react';
import type { Metadata } from 'next';
import { NL_CONTENT, getServicesByGroup } from '@/content/nl';
import {
  PageHero,
  ServiceCard,
  CtaBand,
  ProcessSteps,
  FadeIn,
} from '@/components/SharedSections';

export const metadata: Metadata = {
  title: 'Onze Diensten | Verkeersregelaars, Verkeersplannen & TVM | Atlas Holland B.V.',
  description:
    'Van één gecertificeerde verkeersregelaar tot een compleet verkeersplan en BLVC-advies — maatwerk voor infra, bouw, evenementen en calamiteiten.',
};

export default function DienstenOverviewPage() {
  return (
    <div>
      <PageHero
        eyebrow="EXPERTISE & VAKMANSCHAP"
        titleLine1="Onze"
        titleLine2="diensten"
        subtitle="Van één verkeersregelaar tot een compleet verkeersplan — maatwerk voor infra, bouw, evenementen en calamiteiten."
        imageUrl="/assets/images/atlas_hero_verkeersregelaars_1794215800416.jpg"
        imageAlt="Overzicht van de verkeers- en infradiensten van Atlas Holland B.V."
        primaryCta={{
          label: 'Offerte aanvragen',
          href: '/offerte-aanvragen',
        }}
        showPhoneCta
      />

      {/* Services Grouped by the 3 Mega-Menu Categories */}
      {NL_CONTENT.navigation.serviceGroups.map((group, groupIndex) => {
        const groupServices = getServicesByGroup(group.key);
        const bgClass = groupIndex % 2 === 0 ? 'bg-white' : 'bg-atlas-grey';

        return (
          <section
            key={group.key}
            id={group.key}
            className={`${bgClass} py-16 md:py-24 border-b border-neutral-200/70`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mb-12">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange mb-2">
                  DIENSTEN CATEGORIE 0{groupIndex + 1}
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-atlas-black tracking-tight">
                  {group.title}
                </h2>
                <p className="mt-3 text-base sm:text-lg text-atlas-ink/85">
                  {group.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {groupServices.map((service, idx) => (
                  <FadeIn key={service.slug} delay={idx * 0.06}>
                    <ServiceCard service={service} />
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CtaBand />

      <ProcessSteps bgClass="bg-white" />
    </div>
  );
}
