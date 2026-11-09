'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Clock,
  Check,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  GraduationCap,
} from 'lucide-react';
import { NL_CONTENT } from '@/content/nl';
import { AtlasPhoto } from './AtlasPhoto';

export function OpleidingenClient() {
  const { courses } = NL_CONTENT.opleidingenPage;

  const [selectedCourse, setSelectedCourse] = useState<string>(courses[0].title);
  const [naam, setNaam] = useState('');
  const [email, setEmail] = useState('');
  const [telefoon, setTelefoon] = useState('');
  const [bedrijf, setBedrijf] = useState('');
  const [opmerkingen, setOpmerkingen] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelectCourse = (courseTitle: string) => {
    setSelectedCourse(courseTitle);
    const formEl = document.getElementById('aanmelden');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!selectedCourse) newErrors.selectedCourse = 'Selecteer een gewenste opleiding.';
    if (!naam.trim()) newErrors.naam = 'Vul uw voor- en achternaam in.';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Vul een geldig e-mailadres in.';
    }
    if (!telefoon.trim() || telefoon.trim().length < 8) {
      newErrors.telefoon = 'Vul een geldig telefoonnummer in.';
    }
    if (!privacyAccepted) {
      newErrors.privacyAccepted = 'Ga akkoord met de privacyverklaring om door te gaan.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = {
      type: 'opleiding_inschrijving',
      timestamp: new Date().toISOString(),
      gewensteOpleiding: selectedCourse,
      naam: naam.trim(),
      email: email.trim(),
      telefoon: telefoon.trim(),
      bedrijf: bedrijf.trim() || undefined,
      aanvullendeInformatie: opmerkingen.trim() || undefined,
      privacyAccepted,
    };

    // Structured submit handler ready for future API/email integration
    console.log('[Atlas Holland B.V. — Opleiding Inschrijving]', payload);
    setSubmitted(true);
  };

  return (
    <div>
      {/* Course Grid Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange mb-3">
              ERKENDE PRAKTIJKTRAININGEN
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-atlas-black tracking-tight">
              Ons <span className="text-atlas-orange">opleidingsaanbod</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-atlas-ink/85 leading-relaxed">
              {NL_CONTENT.opleidingenPage.introText}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-[20px] border border-neutral-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] w-full overflow-hidden relative">
                    <AtlasPhoto
                      src={course.imageUrl}
                      alt={course.title}
                      className="w-full h-full"
                    />
                    <div className="absolute top-3 right-3 bg-atlas-black/85 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-white/15">
                      <Clock className="w-3.5 h-3.5 text-atlas-orange" strokeWidth={1.75} />
                      <span>Duur: {course.duration}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-semibold text-atlas-orange mb-1">
                      {course.audience}
                    </p>
                    <h3 className="text-xl font-extrabold text-atlas-black">
                      {course.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-atlas-ink/85 leading-relaxed">
                      {course.description}
                    </p>

                    <ul className="mt-4 pt-4 border-t border-neutral-100 space-y-2">
                      {course.highlights.map((hl, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-atlas-ink">
                          <Check className="w-4 h-4 text-atlas-orange shrink-0 mt-0.5" strokeWidth={2.25} />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <button
                    type="button"
                    onClick={() => handleSelectCourse(course.title)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-atlas-orange hover:bg-atlas-orange-dark text-white font-bold text-sm py-3.5 px-5 rounded-full transition-colors cursor-pointer"
                  >
                    <span>Inschrijven</span>
                    <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrolment Form Section (#aanmelden) */}
      <section
        id="aanmelden"
        className="bg-atlas-grey py-16 md:py-24 border-t border-neutral-200 scroll-mt-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[24px] p-8 sm:p-12 border border-neutral-200 shadow-lg">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange mb-2">
                <GraduationCap className="w-4 h-4" strokeWidth={1.75} />
                <span>DIRECT AANMELDEN</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-atlas-black tracking-tight">
                Inschrijven voor een{' '}
                <span className="text-atlas-orange">opleiding</span>
              </h2>
              <p className="mt-2 text-sm sm:text-base text-atlas-ink/85">
                Meld uzelf of uw medewerkers aan. Wij nemen binnen 24 uur contact met u op om de eerstvolgende beschikbare startdata en locatie te bevestigen.
              </p>
            </div>

            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="bg-atlas-orange-soft/80 border border-atlas-orange rounded-2xl p-8 text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-atlas-orange text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-extrabold text-atlas-black">
                  Bedankt voor uw inschrijving!
                </h3>
                <p className="text-base text-atlas-ink max-w-lg mx-auto">
                  Wij hebben uw aanmelding voor{' '}
                  <strong className="text-atlas-black">{selectedCourse}</strong> goed ontvangen. Onze opleidingscoördinator neemt binnen 24 uur contact met u op.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setNaam('');
                    setEmail('');
                    setTelefoon('');
                    setBedrijf('');
                    setOpmerkingen('');
                    setPrivacyAccepted(false);
                  }}
                  className="inline-flex items-center gap-2 text-sm font-bold text-atlas-orange hover:underline pt-2"
                >
                  Nog een deelnemer aanmelden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <label
                    htmlFor="opleiding-select"
                    className="block text-sm font-bold text-atlas-black mb-2"
                  >
                    Gewenste opleiding <span className="text-atlas-orange">*</span>
                  </label>
                  <select
                    id="opleiding-select"
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3.5 text-sm sm:text-base text-atlas-black font-medium focus:border-atlas-orange focus:outline-none focus:ring-2 focus:ring-atlas-orange/20"
                  >
                    {courses.map((c) => (
                      <option key={c.id} value={c.title}>
                        {c.title} ({c.duration})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="opleiding-naam"
                      className="block text-sm font-bold text-atlas-black mb-2"
                    >
                      Voor- en achternaam <span className="text-atlas-orange">*</span>
                    </label>
                    <input
                      id="opleiding-naam"
                      type="text"
                      value={naam}
                      onChange={(e) => setNaam(e.target.value)}
                      placeholder="Bijv. Jan de Vries"
                      className={`w-full rounded-xl border px-4 py-3.5 text-sm sm:text-base text-atlas-black focus:outline-none focus:ring-2 ${
                        errors.naam
                          ? 'border-red-600 focus:ring-red-600/20'
                          : 'border-neutral-300 focus:border-atlas-orange focus:ring-atlas-orange/20'
                      }`}
                    />
                    {errors.naam && (
                      <p className="mt-1.5 text-xs font-medium text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.naam}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="opleiding-bedrijf"
                      className="block text-sm font-bold text-atlas-black mb-2"
                    >
                      Bedrijf / organisatie <span className="text-neutral-400 font-normal">(optioneel)</span>
                    </label>
                    <input
                      id="opleiding-bedrijf"
                      type="text"
                      value={bedrijf}
                      onChange={(e) => setBedrijf(e.target.value)}
                      placeholder="Uw bedrijfsnaam"
                      className="w-full rounded-xl border border-neutral-300 px-4 py-3.5 text-sm sm:text-base text-atlas-black focus:border-atlas-orange focus:outline-none focus:ring-2 focus:ring-atlas-orange/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="opleiding-email"
                      className="block text-sm font-bold text-atlas-black mb-2"
                    >
                      E-mailadres <span className="text-atlas-orange">*</span>
                    </label>
                    <input
                      id="opleiding-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="naam@bedrijf.nl"
                      className={`w-full rounded-xl border px-4 py-3.5 text-sm sm:text-base text-atlas-black focus:outline-none focus:ring-2 ${
                        errors.email
                          ? 'border-red-600 focus:ring-red-600/20'
                          : 'border-neutral-300 focus:border-atlas-orange focus:ring-atlas-orange/20'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs font-medium text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="opleiding-telefoon"
                      className="block text-sm font-bold text-atlas-black mb-2"
                    >
                      Telefoonnummer <span className="text-atlas-orange">*</span>
                    </label>
                    <input
                      id="opleiding-telefoon"
                      type="tel"
                      value={telefoon}
                      onChange={(e) => setTelefoon(e.target.value)}
                      placeholder="06 - 12345678"
                      className={`w-full rounded-xl border px-4 py-3.5 text-sm sm:text-base text-atlas-black focus:outline-none focus:ring-2 ${
                        errors.telefoon
                          ? 'border-red-600 focus:ring-red-600/20'
                          : 'border-neutral-300 focus:border-atlas-orange focus:ring-atlas-orange/20'
                      }`}
                    />
                    {errors.telefoon && (
                      <p className="mt-1.5 text-xs font-medium text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.telefoon}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="opleiding-opmerkingen"
                    className="block text-sm font-bold text-atlas-black mb-2"
                  >
                    Aanvullende informatie <span className="text-neutral-400 font-normal">(optioneel, bijv. aantal deelnemers of incompany-wens)</span>
                  </label>
                  <textarea
                    id="opleiding-opmerkingen"
                    rows={4}
                    value={opmerkingen}
                    onChange={(e) => setOpmerkingen(e.target.value)}
                    placeholder="Eventuele vragen, aantal deelnemers of gewenste opleidingsperiode..."
                    className="w-full rounded-xl border border-neutral-300 px-4 py-3.5 text-sm sm:text-base text-atlas-black focus:border-atlas-orange focus:outline-none focus:ring-2 focus:ring-atlas-orange/20"
                  />
                </div>

                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={privacyAccepted}
                      onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border-neutral-300 text-atlas-orange focus:ring-atlas-orange"
                    />
                    <span className="text-sm text-atlas-ink">
                      Ik ga akkoord met de verwerking van mijn gegevens volgens de{' '}
                      <Link href="/privacy" className="text-atlas-orange underline font-semibold">
                        privacyverklaring
                      </Link>{' '}
                      van Atlas Holland B.V. <span className="text-atlas-orange">*</span>
                    </span>
                  </label>
                  {errors.privacyAccepted && (
                    <p className="mt-1.5 text-xs font-medium text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.privacyAccepted}</span>
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-atlas-orange hover:bg-atlas-orange-dark text-white font-bold text-base px-8 py-4 rounded-full transition-colors shadow-md cursor-pointer"
                >
                  <span>Inschrijving verzenden</span>
                  <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
