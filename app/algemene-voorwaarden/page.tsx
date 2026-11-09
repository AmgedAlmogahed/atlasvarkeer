import React from 'react';
import type { Metadata } from 'next';
import { COMPANY_CONFIG, getEmailHref } from '@/config/company';
import { PageHero } from '@/components/SharedSections';

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden | Atlas Holland B.V.',
  description:
    'Algemene voorwaarden van Atlas Holland B.V. voor de inzet van verkeersregelaars, tijdelijke verkeersmaatregelen, verkeersplannen en opleidingen.',
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <div>
      <PageHero
        eyebrow="JURIDISCHE VOORWAARDEN"
        titleLine1="Algemene voorwaarden"
        subtitle={`Van toepassing op alle offertes, opdrachten en dienstverlening van ${COMPANY_CONFIG.name}.`}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-atlas-ink leading-relaxed">
          <div className="bg-atlas-grey rounded-2xl p-6 border border-neutral-200 text-sm">
            <p className="font-bold text-atlas-black">Bedrijfsgegevens:</p>
            <p className="mt-1">
              {COMPANY_CONFIG.name} · {COMPANY_CONFIG.fullAddress} · KvK: {COMPANY_CONFIG.kvk} · BTW: {COMPANY_CONFIG.btw}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-extrabold text-atlas-black">
              Artikel 1. Toepasselijkheid
            </h2>
            <p>
              Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes, werkzaamheden en overeenkomsten tussen {COMPANY_CONFIG.name} en opdrachtgevers betreffende de inzet van verkeersregelaars, bouwportiers, veiligheidspersonen, tijdelijke verkeersmaatregelen, verkeersplannen en opleidingen.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-extrabold text-atlas-black">
              Artikel 2. Offertes en totstandkoming van de opdracht
            </h2>
            <p>
              Alle offertes van {COMPANY_CONFIG.name} zijn vrijblijvend en 30 dagen geldig, tenzij schriftelijk anders aangegeven. Een overeenkomst komt tot stand op het moment dat de opdrachtgever de offerte schriftelijk of per e-mail bevestigt, of zodra {COMPANY_CONFIG.name} op verzoek van de opdrachtgever (bijvoorbeeld bij een 24/7 spoedaanvraag) met de uitvoering is gestart.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-extrabold text-atlas-black">
              Artikel 3. Uitvoering en veiligheid op locatie
            </h2>
            <p>
              {COMPANY_CONFIG.name} zet gekwalificeerde en gecertificeerde medewerkers in. De opdrachtgever draagt zorg voor tijdige en juiste informatie over de werklocatie, specifieke risico’s en eventuele vergunningsvoorwaarden.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-extrabold text-atlas-black">
              Artikel 4. Wijziging of annulering van geplande inzet
            </h2>
            <p>
              Indien een geplande inzet door omstandigheden wijzigt of wordt geannuleerd, dient de opdrachtgever dit zo spoedig mogelijk telefonisch en per e-mail door te geven aan de centrale planning. Voor annuleringen binnen [24 / 48 uur] voor aanvang van de dienst kunnen gereserveerde uren conform de gemaakte tariefafspraken in rekening worden gebracht.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-extrabold text-atlas-black">
              Artikel 5. Opvragen volledige voorwaarden
            </h2>
            <p>
              Wilt u een volledig exemplaar van onze algemene voorwaarden als PDF per e-mail ontvangen? Stuur dan een bericht naar{' '}
              <a href={getEmailHref()} className="text-atlas-orange underline font-semibold">
                {COMPANY_CONFIG.emailGeneral}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
