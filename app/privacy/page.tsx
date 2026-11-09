import React from 'react';
import type { Metadata } from 'next';
import { COMPANY_CONFIG, getEmailHref, getPhoneHref } from '@/config/company';
import { PageHero } from '@/components/SharedSections';

export const metadata: Metadata = {
  title: 'Privacyverklaring | Atlas Holland B.V.',
  description:
    'Lees hoe Atlas Holland B.V. zorgvuldig en conform de AVG omgaat met uw persoonsgegevens bij offerteaanvragen, opleidingen en sollicitaties.',
};

export default function PrivacyPage() {
  return (
    <div>
      <PageHero
        eyebrow="JURIDISCH & AVG"
        titleLine1="Privacyverklaring"
        subtitle={`Hoe ${COMPANY_CONFIG.name} zorgvuldig omgaat met persoonsgegevens van opdrachtgevers, websitebezoekers, cursisten en sollicitanten.`}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-atlas-ink leading-relaxed">
          <div className="bg-atlas-grey rounded-2xl p-6 border border-neutral-200 text-sm">
            <p className="font-bold text-atlas-black">Verwerkingsverantwoordelijke:</p>
            <p className="mt-1">
              {COMPANY_CONFIG.name} · {COMPANY_CONFIG.fullAddress} · KvK: {COMPANY_CONFIG.kvk}
            </p>
            <p className="mt-1">
              E-mail:{' '}
              <a href={getEmailHref()} className="text-atlas-orange underline font-semibold">
                {COMPANY_CONFIG.emailGeneral}
              </a>{' '}
              · Telefoon:{' '}
              <a href={getPhoneHref()} className="text-atlas-orange underline font-semibold">
                {COMPANY_CONFIG.phoneDisplay}
              </a>
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-extrabold text-atlas-black">
              1. Welke persoonsgegevens verwerken wij?
            </h2>
            <p>
              Wanneer u gebruikmaakt van onze diensten of formulieren op deze website invult (zoals het offerteformulier, het contactformulier, het inschrijfformulier voor opleidingen of het sollicitatieformulier), verwerken wij uitsluitend de gegevens die u zelf aan ons verstrekt:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Voor- en achternaam en eventuele bedrijfsnaam;</li>
              <li>E-mailadres en telefoonnummer;</li>
              <li>Woonplaats of projectlocatie;</li>
              <li>Bij sollicitaties: beschikbaarheid, rijbewijs, ervaring en eventueel uw CV en motivatie;</li>
              <li>Overige informatie die u zelf invult in het opmerkingenveld.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-extrabold text-atlas-black">
              2. Doeleinden van de gegevensverwerking
            </h2>
            <p>Wij gebruiken uw gegevens uitsluitend voor de volgende doelen:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Het opstellen en bespreken van een offerte of projectplanning op maat;</li>
              <li>Het beantwoorden van uw vragen via het contactformulier;</li>
              <li>Het verwerken van uw aanmelding voor een vakopleiding of cursus;</li>
              <li>Het beoordelen en afhandelen van uw sollicitatie bij {COMPANY_CONFIG.name}.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-extrabold text-atlas-black">
              3. Bewaartermijnen
            </h2>
            <p>
              Wij bewaren uw persoonsgegevens niet langer dan strikt noodzakelijk is om de doelen te realiseren waarvoor uw gegevens worden verzameld. Sollicitatiegegevens worden uiterlijk 4 weken na afronding van de sollicitatieprocedure verwijderd, tenzij u toestemming geeft om uw gegevens maximaal 1 jaar in portefeuille te houden.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-extrabold text-atlas-black">
              4. Delen van persoonsgegevens met derden
            </h2>
            <p>
              {COMPANY_CONFIG.name} verkoopt uw gegevens nooit aan derden en verstrekt deze uitsluitend indien dit nodig is voor de uitvoering van onze overeenkomst met u (bijvoorbeeld voor de aanmelding bij een officieel exameninstituut of wegbeheerder) of om te voldoen aan een wettelijke verplichting.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-extrabold text-atlas-black">
              5. Uw rechten (inzage, correctie en verwijdering)
            </h2>
            <p>
              U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te laten verwijderen. U kunt een verzoek hiertoe sturen naar{' '}
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
