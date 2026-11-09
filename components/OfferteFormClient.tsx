'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  Check,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Phone,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Clock,
} from 'lucide-react';
import { COMPANY_CONFIG, getPhoneHref } from '@/config/company';
import { NL_CONTENT } from '@/content/nl';

export function OfferteFormClient() {
  const searchParams = useSearchParams();
  const dienstParam = searchParams.get('dienst');

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedServices, setSelectedServices] = useState<string[]>(() => {
    if (dienstParam && NL_CONTENT.services.some((s) => s.slug === dienstParam)) {
      return [dienstParam];
    }
    return ['verkeersregelaars'];
  });

  // Step 2 state
  const [locatie, setLocatie] = useState('');
  const [uitvoerdatum, setUitvoerdatum] = useState('');
  const [begintijd, setBegintijd] = useState('07:00');
  const [eindtijd, setEindtijd] = useState('16:00');
  const [meerdaags, setMeerdaags] = useState<'nee' | 'ja'>('nee');
  const [einddatum, setEinddatum] = useState('');
  const [aantalRegelaars, setAantalRegelaars] = useState('2');
  const [soortWerkzaamheden, setSoortWerkzaamheden] = useState('');
  const [opmerkingen, setOpmerkingen] = useState('');

  // Step 3 state
  const [naam, setNaam] = useState('');
  const [bedrijf, setBedrijf] = useState('');
  const [email, setEmail] = useState('');
  const [telefoon, setTelefoon] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (slug: string) => {
    setSelectedServices((prev) =>
      prev.includes(slug) ? prev.filter((item) => item !== slug) : [...prev, slug]
    );
  };

  const validateStep1 = () => {
    if (selectedServices.length === 0) {
      setErrors({ step1: 'Selecteer minimaal één dienst waarvoor u een offerte wenst.' });
      return false;
    }
    setErrors({});
    return true;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!locatie.trim()) newErrors.locatie = 'Vul de projectlocatie of plaats in.';
    if (!uitvoerdatum) newErrors.uitvoerdatum = 'Kies de gewenste start-/uitvoerdatum.';
    if (meerdaags === 'ja' && !einddatum) {
      newErrors.einddatum = 'Kies de verwachte einddatum.';
    }
    if (!soortWerkzaamheden.trim()) {
      newErrors.soortWerkzaamheden = 'Omschrijf kort het soort werkzaamheden.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};
    if (!naam.trim()) newErrors.naam = 'Vul uw naam in.';
    if (!bedrijf.trim()) newErrors.bedrijf = 'Vul uw bedrijfs- of organisatienaam in.';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Vul een geldig zakelijk e-mailadres in.';
    }
    if (!telefoon.trim() || telefoon.trim().length < 8) {
      newErrors.telefoon = 'Vul een geldig telefoonnummer in.';
    }
    if (!privacyAccepted) {
      newErrors.privacyAccepted = 'Ga akkoord met de privacyverklaring om uw aanvraag te verzenden.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    const payload = {
      type: 'offerte_aanvraag',
      timestamp: new Date().toISOString(),
      gekozenDiensten: selectedServices,
      project: {
        locatie: locatie.trim(),
        uitvoerdatum,
        begintijd,
        eindtijd,
        meerdaagseInzet: meerdaags === 'ja',
        einddatum: meerdaags === 'ja' ? einddatum : undefined,
        aantalVerkeersregelaars: aantalRegelaars,
        soortWerkzaamheden: soortWerkzaamheden.trim(),
        opmerkingen: opmerkingen.trim() || undefined,
      },
      contactgegevens: {
        naam: naam.trim(),
        bedrijf: bedrijf.trim(),
        email: email.trim(),
        telefoon: telefoon.trim(),
        privacyAccepted,
      },
    };

    // Structured submit handler ready for future API/email integration
    console.log('[Atlas Holland B.V. — Offerte Aanvraag]', payload);
    setSubmitted(true);
  };

  const progressPercentage = step === 1 ? 33 : step === 2 ? 66 : 100;

  return (
    <section className="bg-atlas-grey py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main 3-Step Form Card (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-[24px] p-6 sm:p-10 border border-neutral-200 shadow-sm">
            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="py-10 px-4 text-center space-y-5"
              >
                <div className="w-16 h-16 rounded-full bg-atlas-orange text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-9 h-9" strokeWidth={2} />
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-atlas-black tracking-tight">
                  Bedankt! We nemen binnen 24 uur contact met u op.
                </h2>
                <p className="text-base sm:text-lg text-atlas-ink/85 max-w-xl mx-auto leading-relaxed">
                  Uw aanvraag voor{' '}
                  <strong className="text-atlas-black">{bedrijf}</strong> (locatie:{' '}
                  <strong className="text-atlas-black">{locatie}</strong>) is ontvangen door onze centrale planning.
                </p>
                <div className="bg-atlas-grey rounded-2xl p-6 max-w-lg mx-auto text-left text-sm space-y-2 border border-neutral-200">
                  <p className="font-bold text-atlas-black">Samenvatting van uw aanvraag:</p>
                  <p className="text-atlas-ink">
                    <span className="font-semibold">Diensten:</span>{' '}
                    {selectedServices
                      .map((s) => NL_CONTENT.services.find((srv) => srv.slug === s)?.title || s)
                      .join(', ')}
                  </p>
                  <p className="text-atlas-ink">
                    <span className="font-semibold">Uitvoerdatum:</span> {uitvoerdatum} ({begintijd} – {eindtijd})
                  </p>
                  <p className="text-atlas-ink">
                    <span className="font-semibold">Contactpersoon:</span> {naam} ({email})
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setStep(1);
                    }}
                    className="inline-flex items-center gap-2 text-sm font-bold text-atlas-orange hover:underline"
                  >
                    Nieuwe offerteaanvraag starten
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* Step Indicator & Progress Bar */}
                <div className="mb-8">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-bold mb-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className={`flex items-center gap-2 ${
                        step >= 1 ? 'text-atlas-black' : 'text-neutral-400'
                      }`}
                    >
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                          step === 1
                            ? 'bg-atlas-orange text-white'
                            : step > 1
                            ? 'bg-atlas-black text-white'
                            : 'bg-neutral-200 text-neutral-600'
                        }`}
                      >
                        1
                      </span>
                      <span>1. Dienst kiezen</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (step > 2 || validateStep1()) setStep(2);
                      }}
                      className={`flex items-center gap-2 ${
                        step >= 2 ? 'text-atlas-black' : 'text-neutral-400'
                      }`}
                    >
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                          step === 2
                            ? 'bg-atlas-orange text-white'
                            : step > 2
                            ? 'bg-atlas-black text-white'
                            : 'bg-neutral-200 text-neutral-600'
                        }`}
                      >
                        2
                      </span>
                      <span>2. Projectgegevens</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (validateStep1() && validateStep2()) setStep(3);
                      }}
                      className={`flex items-center gap-2 ${
                        step === 3 ? 'text-atlas-black' : 'text-neutral-400'
                      }`}
                    >
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                          step === 3
                            ? 'bg-atlas-orange text-white'
                            : 'bg-neutral-200 text-neutral-600'
                        }`}
                      >
                        3
                      </span>
                      <span>3. Contactgegevens</span>
                    </button>
                  </div>

                  <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-atlas-orange transition-all duration-300 rounded-full"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  {/* STEP 1 — DIENST MULTI-SELECT */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-extrabold text-atlas-black">
                          Stap 1: Welke dienst(en) heeft u nodig?
                        </h2>
                        <p className="text-sm text-atlas-ink/80 mt-1">
                          Meerdere opties selecteren is mogelijk.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {NL_CONTENT.services.map((service) => {
                          const isSelected = selectedServices.includes(service.slug);
                          return (
                            <button
                              key={service.slug}
                              type="button"
                              onClick={() => toggleService(service.slug)}
                              aria-pressed={isSelected}
                              className={`text-left p-4 rounded-2xl border-2 transition-all flex items-start justify-between gap-3 cursor-pointer ${
                                isSelected
                                  ? 'border-atlas-orange bg-atlas-orange-soft/60 shadow-sm'
                                  : 'border-neutral-200 hover:border-neutral-300 bg-white'
                              }`}
                            >
                              <div>
                                <p className="font-bold text-sm sm:text-base text-atlas-black">
                                  {service.title}
                                </p>
                                <p className="text-xs text-neutral-600 mt-1 line-clamp-2">
                                  {service.oneLiner}
                                </p>
                              </div>
                              <span
                                className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
                                  isSelected
                                    ? 'bg-atlas-orange border-atlas-orange text-white'
                                    : 'border-neutral-300 bg-white'
                                }`}
                              >
                                {isSelected && <Check className="w-3.5 h-3.5" strokeWidth={2.5} />}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {errors.step1 && (
                        <p className="text-xs font-medium text-red-600 flex items-center gap-1.5">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>{errors.step1}</span>
                        </p>
                      )}

                      <div className="pt-4 flex justify-end">
                        <button
                          type="button"
                          onClick={handleNextStep}
                          className="inline-flex items-center gap-2 bg-atlas-orange hover:bg-atlas-orange-dark text-white font-bold text-base px-7 py-4 rounded-full transition-colors cursor-pointer"
                        >
                          <span>Volgende stap: Projectgegevens</span>
                          <ArrowRight className="w-4 h-4" strokeWidth={2} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2 — PROJECT DETAILS */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-extrabold text-atlas-black">
                          Stap 2: Vertel ons over uw project
                        </h2>
                        <p className="text-sm text-atlas-ink/80 mt-1">
                          Waar en wanneer mogen wij u ondersteunen?
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="off-locatie"
                            className="block text-sm font-bold text-atlas-black mb-2"
                          >
                            Locatie / plaats <span className="text-atlas-orange">*</span>
                          </label>
                          <input
                            id="off-locatie"
                            type="text"
                            value={locatie}
                            onChange={(e) => setLocatie(e.target.value)}
                            placeholder="Straatnaam, kruispunt of plaatsnaam"
                            className={`w-full rounded-xl border px-4 py-3.5 text-sm text-atlas-black focus:outline-none focus:ring-2 ${
                              errors.locatie
                                ? 'border-red-600 focus:ring-red-600/20'
                                : 'border-neutral-300 focus:border-atlas-orange focus:ring-atlas-orange/20'
                            }`}
                          />
                          {errors.locatie && (
                            <p className="mt-1 text-xs font-medium text-red-600">
                              {errors.locatie}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="off-datum"
                            className="block text-sm font-bold text-atlas-black mb-2"
                          >
                            Gewenste uitvoerdatum <span className="text-atlas-orange">*</span>
                          </label>
                          <input
                            id="off-datum"
                            type="date"
                            value={uitvoerdatum}
                            onChange={(e) => setUitvoerdatum(e.target.value)}
                            className={`w-full rounded-xl border px-4 py-3.5 text-sm text-atlas-black focus:outline-none focus:ring-2 ${
                              errors.uitvoerdatum
                                ? 'border-red-600 focus:ring-red-600/20'
                                : 'border-neutral-300 focus:border-atlas-orange focus:ring-atlas-orange/20'
                            }`}
                          />
                          {errors.uitvoerdatum && (
                            <p className="mt-1 text-xs font-medium text-red-600">
                              {errors.uitvoerdatum}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div>
                          <label
                            htmlFor="off-begintijd"
                            className="block text-sm font-bold text-atlas-black mb-2"
                          >
                            Begintijd
                          </label>
                          <input
                            id="off-begintijd"
                            type="time"
                            value={begintijd}
                            onChange={(e) => setBegintijd(e.target.value)}
                            className="w-full rounded-xl border border-neutral-300 px-4 py-3.5 text-sm text-atlas-black focus:border-atlas-orange focus:outline-none"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="off-eindtijd"
                            className="block text-sm font-bold text-atlas-black mb-2"
                          >
                            Eindtijd
                          </label>
                          <input
                            id="off-eindtijd"
                            type="time"
                            value={eindtijd}
                            onChange={(e) => setEindtijd(e.target.value)}
                            className="w-full rounded-xl border border-neutral-300 px-4 py-3.5 text-sm text-atlas-black focus:border-atlas-orange focus:outline-none"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="off-aantal"
                            className="block text-sm font-bold text-atlas-black mb-2"
                          >
                            Aantal verkeersregelaars
                          </label>
                          <select
                            id="off-aantal"
                            value={aantalRegelaars}
                            onChange={(e) => setAantalRegelaars(e.target.value)}
                            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3.5 text-sm text-atlas-black font-medium focus:border-atlas-orange focus:outline-none"
                          >
                            <option value="1">1 verkeersregelaar</option>
                            <option value="2">2 verkeersregelaars</option>
                            <option value="3-4">3 tot 4 verkeersregelaars</option>
                            <option value="5-10">5 tot 10 verkeersregelaars</option>
                            <option value="10+">Meer dan 10 / In overleg</option>
                            <option value="Advies gewenst">Nog niet bekend (graag advies)</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                        <div>
                          <span className="block text-sm font-bold text-atlas-black mb-2">
                            Meerdaagse inzet?
                          </span>
                          <div className="flex items-center gap-4">
                            <label className="inline-flex items-center gap-2 cursor-pointer">
                              <input
                                type="radio"
                                name="meerdaags"
                                checked={meerdaags === 'nee'}
                                onChange={() => setMeerdaags('nee')}
                                className="text-atlas-orange focus:ring-atlas-orange"
                              />
                              <span className="text-sm font-medium text-atlas-black">
                                Nee, 1 dag
                              </span>
                            </label>
                            <label className="inline-flex items-center gap-2 cursor-pointer">
                              <input
                                type="radio"
                                name="meerdaags"
                                checked={meerdaags === 'ja'}
                                onChange={() => setMeerdaags('ja')}
                                className="text-atlas-orange focus:ring-atlas-orange"
                              />
                              <span className="text-sm font-medium text-atlas-black">
                                Ja, meerdere dagen
                              </span>
                            </label>
                          </div>
                        </div>

                        {meerdaags === 'ja' && (
                          <div>
                            <label
                              htmlFor="off-einddatum"
                              className="block text-sm font-bold text-atlas-black mb-2"
                            >
                              Verwachte einddatum <span className="text-atlas-orange">*</span>
                            </label>
                            <input
                              id="off-einddatum"
                              type="date"
                              value={einddatum}
                              onChange={(e) => setEinddatum(e.target.value)}
                              className="w-full rounded-xl border border-neutral-300 px-4 py-3.5 text-sm text-atlas-black focus:border-atlas-orange focus:outline-none"
                            />
                            {errors.einddatum && (
                              <p className="mt-1 text-xs font-medium text-red-600">
                                {errors.einddatum}
                              </p>
                            )}
                          </div>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="off-werkzaamheden"
                          className="block text-sm font-bold text-atlas-black mb-2"
                        >
                          Soort werkzaamheden <span className="text-atlas-orange">*</span>
                        </label>
                        <input
                          id="off-werkzaamheden"
                          type="text"
                          value={soortWerkzaamheden}
                          onChange={(e) => setSoortWerkzaamheden(e.target.value)}
                          placeholder="Bijv. asfaltering, kraanopstelling, kabel- en leidingwerk, evenement..."
                          className={`w-full rounded-xl border px-4 py-3.5 text-sm text-atlas-black focus:outline-none focus:ring-2 ${
                            errors.soortWerkzaamheden
                              ? 'border-red-600 focus:ring-red-600/20'
                              : 'border-neutral-300 focus:border-atlas-orange focus:ring-atlas-orange/20'
                          }`}
                        />
                        {errors.soortWerkzaamheden && (
                          <p className="mt-1 text-xs font-medium text-red-600">
                            {errors.soortWerkzaamheden}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="off-opmerkingen"
                          className="block text-sm font-bold text-atlas-black mb-2"
                        >
                          Aanvullende opmerkingen <span className="text-neutral-400 font-normal">(optioneel)</span>
                        </label>
                        <textarea
                          id="off-opmerkingen"
                          rows={3}
                          value={opmerkingen}
                          onChange={(e) => setOpmerkingen(e.target.value)}
                          placeholder="Bijzonderheden op locatie, referentienummer of specifieke wensen..."
                          className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm text-atlas-black focus:border-atlas-orange focus:outline-none"
                        />
                      </div>

                      <div className="pt-4 flex items-center justify-between gap-4">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="inline-flex items-center gap-2 text-sm font-bold text-atlas-ink hover:text-atlas-black px-5 py-3.5 rounded-full border border-neutral-300 cursor-pointer"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>Vorige</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleNextStep}
                          className="inline-flex items-center gap-2 bg-atlas-orange hover:bg-atlas-orange-dark text-white font-bold text-base px-7 py-4 rounded-full transition-colors cursor-pointer"
                        >
                          <span>Volgende stap: Contactgegevens</span>
                          <ArrowRight className="w-4 h-4" strokeWidth={2} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3 — CONTACTGEGEVENS */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-extrabold text-atlas-black">
                          Stap 3: Uw contactgegevens
                        </h2>
                        <p className="text-sm text-atlas-ink/80 mt-1">
                          Waar mogen wij het voorstel naartoe sturen?
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="off-naam"
                            className="block text-sm font-bold text-atlas-black mb-2"
                          >
                            Voor- en achternaam <span className="text-atlas-orange">*</span>
                          </label>
                          <input
                            id="off-naam"
                            type="text"
                            value={naam}
                            onChange={(e) => setNaam(e.target.value)}
                            placeholder="Uw naam"
                            className={`w-full rounded-xl border px-4 py-3.5 text-sm text-atlas-black focus:outline-none ${
                              errors.naam ? 'border-red-600' : 'border-neutral-300 focus:border-atlas-orange'
                            }`}
                          />
                          {errors.naam && (
                            <p className="mt-1 text-xs font-medium text-red-600">{errors.naam}</p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="off-bedrijf"
                            className="block text-sm font-bold text-atlas-black mb-2"
                          >
                            Bedrijf / organisatie <span className="text-atlas-orange">*</span>
                          </label>
                          <input
                            id="off-bedrijf"
                            type="text"
                            value={bedrijf}
                            onChange={(e) => setBedrijf(e.target.value)}
                            placeholder="Naam aannemer, gemeente of organisatie"
                            className={`w-full rounded-xl border px-4 py-3.5 text-sm text-atlas-black focus:outline-none ${
                              errors.bedrijf ? 'border-red-600' : 'border-neutral-300 focus:border-atlas-orange'
                            }`}
                          />
                          {errors.bedrijf && (
                            <p className="mt-1 text-xs font-medium text-red-600">{errors.bedrijf}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="off-email"
                            className="block text-sm font-bold text-atlas-black mb-2"
                          >
                            Zakelijk e-mailadres <span className="text-atlas-orange">*</span>
                          </label>
                          <input
                            id="off-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="naam@organisatie.nl"
                            className={`w-full rounded-xl border px-4 py-3.5 text-sm text-atlas-black focus:outline-none ${
                              errors.email ? 'border-red-600' : 'border-neutral-300 focus:border-atlas-orange'
                            }`}
                          />
                          {errors.email && (
                            <p className="mt-1 text-xs font-medium text-red-600">{errors.email}</p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="off-telefoon"
                            className="block text-sm font-bold text-atlas-black mb-2"
                          >
                            Telefoonnummer <span className="text-atlas-orange">*</span>
                          </label>
                          <input
                            id="off-telefoon"
                            type="tel"
                            value={telefoon}
                            onChange={(e) => setTelefoon(e.target.value)}
                            placeholder="06 of vast zakelijk nummer"
                            className={`w-full rounded-xl border px-4 py-3.5 text-sm text-atlas-black focus:outline-none ${
                              errors.telefoon ? 'border-red-600' : 'border-neutral-300 focus:border-atlas-orange'
                            }`}
                          />
                          {errors.telefoon && (
                            <p className="mt-1 text-xs font-medium text-red-600">{errors.telefoon}</p>
                          )}
                        </div>
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
                            Ik ga akkoord met het verwerken van mijn gegevens voor het opstellen van deze offerte conform de{' '}
                            <Link href="/privacy" className="text-atlas-orange underline font-semibold">
                              privacyverklaring
                            </Link>
                            . <span className="text-atlas-orange">*</span>
                          </span>
                        </label>
                        {errors.privacyAccepted && (
                          <p className="mt-1 text-xs font-medium text-red-600">
                            {errors.privacyAccepted}
                          </p>
                        )}
                      </div>

                      <div className="pt-4 flex items-center justify-between gap-4">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="inline-flex items-center gap-2 text-sm font-bold text-atlas-ink hover:text-atlas-black px-5 py-3.5 rounded-full border border-neutral-300 cursor-pointer"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>Vorige</span>
                        </button>

                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 bg-atlas-orange hover:bg-atlas-orange-dark text-white font-bold text-base px-8 py-4 rounded-full transition-colors shadow-lg cursor-pointer"
                        >
                          <span>Offerte aanvragen</span>
                          <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            )}
          </div>

          {/* Sticky Side Panel (4 cols) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="bg-atlas-black text-white rounded-[24px] p-7 sm:p-8 space-y-6 shadow-xl">
              <div className="inline-flex items-center gap-2 bg-atlas-orange text-white text-xs font-bold px-3.5 py-1.5 rounded-lg">
                <Clock className="w-3.5 h-3.5" strokeWidth={2} />
                <span>Binnen 24 uur reactie ✓</span>
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-white">
                  Directe inzet of spoedaanvraag?
                </h3>
                <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
                  Heeft u vandaag of vannacht nog gecertificeerde verkeersregelaars of een spoedafzetting nodig? Bel direct onze 24/7 centrale planning.
                </p>
              </div>

              <a
                href={getPhoneHref()}
                className="w-full inline-flex items-center justify-center gap-2.5 bg-white hover:bg-atlas-orange-soft text-atlas-black font-extrabold text-base py-4 px-6 rounded-full transition-colors"
              >
                <Phone className="w-5 h-5 text-atlas-orange" strokeWidth={2} />
                <span>{COMPANY_CONFIG.phoneDisplay}</span>
              </a>

              <div className="pt-5 border-t border-white/15 space-y-3">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange">
                  Certificering & Waarborgen
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-200">
                  <li className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-atlas-orange shrink-0" />
                    <span>[VCA / VCA**] gecertificeerd</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-atlas-orange shrink-0" />
                    <span>[BRL 9101 / BRL 9102] conformiteit</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-atlas-orange shrink-0" />
                    <span>Landelijk aangestelde verkeersregelaars</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-atlas-orange shrink-0" />
                    <span>Volledige CROW 96a/96b werkwijze</span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
