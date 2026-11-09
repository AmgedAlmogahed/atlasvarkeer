import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { NL_CONTENT } from '@/content/nl';
import { PageHero } from '@/components/SharedSections';
import { OfferteFormClient } from '@/components/OfferteFormClient';

export const metadata: Metadata = {
  title: NL_CONTENT.offertePage.seo.title,
  description: NL_CONTENT.offertePage.seo.description,
};

export default function OfferteAanvragenPage() {
  const { hero } = NL_CONTENT.offertePage;

  return (
    <div>
      <PageHero
        eyebrow={hero.eyebrow}
        titleLine1={hero.titleLine1}
        titleLine2={hero.titleLine2}
        subtitle={hero.subtitle}
        imageUrl="/assets/images/atlas_verkeersplannen_coordinatie_1794215803555.jpg"
        imageAlt="Offerte aanvragen bij Atlas Holland B.V."
        showPhoneCta
      />

      <Suspense
        fallback={
          <div className="py-20 text-center text-sm text-neutral-500">
            Offerteformulier laden...
          </div>
        }
      >
        <OfferteFormClient />
      </Suspense>
    </div>
  );
}
