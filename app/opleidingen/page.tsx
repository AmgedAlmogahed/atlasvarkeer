import React from 'react';
import type { Metadata } from 'next';
import { NL_CONTENT } from '@/content/nl';
import { PageHero, CtaBand } from '@/components/SharedSections';
import { OpleidingenClient } from '@/components/OpleidingenClient';

export const metadata: Metadata = {
  title: NL_CONTENT.opleidingenPage.seo.title,
  description: NL_CONTENT.opleidingenPage.seo.description,
};

export default function OpleidingenPage() {
  const { hero } = NL_CONTENT.opleidingenPage;

  return (
    <div>
      <PageHero
        eyebrow={hero.eyebrow}
        titleLine1={hero.titleLine1}
        titleLine2={hero.titleLine2}
        subtitle={hero.subtitle}
        imageUrl={hero.imageUrl}
        imageAlt={hero.imageAlt}
        primaryCta={{
          label: 'Direct inschrijven',
          href: '#aanmelden',
        }}
        showPhoneCta
      />

      <OpleidingenClient />

      <CtaBand
        headline="Meerdere medewerkers tegelijk opleiden of een incompany-training plannen?"
        buttonLabel="Vraag een opleidingsvoorstel aan"
        buttonHref="/contact"
      />
    </div>
  );
}
