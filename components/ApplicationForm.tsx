'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Upload,
  FileText,
  X,
} from 'lucide-react';

interface ApplicationFormProps {
  defaultVacancyTitle?: string;
}

export function ApplicationForm({ defaultVacancyTitle }: ApplicationFormProps) {
  const [naam, setNaam] = useState('');
  const [email, setEmail] = useState('');
  const [telefoon, setTelefoon] = useState('');
  const [woonplaats, setWoonplaats] = useState('');
  const [ervaring, setErvaring] = useState('Nog geen ervaring');
  const [beschikbaarheid, setBeschikbaarheid] = useState('Fulltime');
  const [rijbewijs, setRijbewijs] = useState('B');
  const [motivatie, setMotivatie] = useState('');
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setCvFile(null);
      return;
    }

    const allowedExtensions = /\.(pdf|doc|docx)$/i;
    if (!allowedExtensions.test(file.name)) {
      setErrors((prev) => ({
        ...prev,
        cv: 'Upload een geldig PDF-, DOC- of DOCX-bestand.',
      }));
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        cv: 'Je bestand is groter dan 5 MB. Kies een kleiner bestand.',
      }));
      return;
    }

    setErrors((prev) => {
      const next = { ...prev };
      delete next.cv;
      return next;
    });
    setCvFile(file);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!naam.trim()) newErrors.naam = 'Vul je voor- en achternaam in.';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Vul een geldig e-mailadres in.';
    }
    if (!telefoon.trim() || telefoon.trim().length < 8) {
      newErrors.telefoon = 'Vul een geldig telefoonnummer in.';
    }
    if (!woonplaats.trim()) {
      newErrors.woonplaats = 'Vul je woonplaats in.';
    }
    if (!privacyAccepted) {
      newErrors.privacyAccepted = 'Ga akkoord met de privacyverklaring om te solliciteren.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = {
      type: 'vacature_sollicitatie',
      timestamp: new Date().toISOString(),
      vacature: defaultVacancyTitle || 'Algemene sollicitatie Werken bij Atlas',
      naam: naam.trim(),
      email: email.trim(),
      telefoon: telefoon.trim(),
      woonplaats: woonplaats.trim(),
      ervaringAlsVerkeersregelaar: ervaring,
      beschikbaarheid,
      rijbewijs,
      motivatie: motivatie.trim() || undefined,
      cvBestand: cvFile
        ? {
            name: cvFile.name,
            sizeBytes: cvFile.size,
            type: cvFile.type,
          }
        : undefined,
      privacyAccepted,
    };

    // Structured submit handler ready for future API/email integration
    console.log('[Atlas Holland B.V. — Sollicitatie]', payload);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="bg-atlas-orange-soft border-2 border-atlas-orange rounded-[22px] p-8 sm:p-10 text-center space-y-4"
      >
        <div className="w-16 h-16 rounded-full bg-atlas-orange text-white flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-9 h-9" strokeWidth={2} />
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-atlas-black">
          Bedankt voor je sollicitatie, {naam.split(' ')[0]}!
        </h3>
        <p className="text-base text-atlas-ink max-w-lg mx-auto leading-relaxed">
          We hebben je gegevens goed ontvangen. Onze recruiter neemt binnen 24 uur telefonisch contact met je op om kennis te maken!
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setNaam('');
            setEmail('');
            setTelefoon('');
            setWoonplaats('');
            setMotivatie('');
            setCvFile(null);
            setPrivacyAccepted(false);
          }}
          className="inline-flex items-center gap-2 text-sm font-bold text-atlas-orange hover:underline pt-2"
        >
          Nieuwe sollicitatie versturen
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {defaultVacancyTitle && (
        <div className="bg-atlas-orange-soft/70 border border-atlas-orange/25 rounded-xl px-4 py-3 text-sm text-atlas-black">
          Je solliciteert op:{' '}
          <strong className="font-extrabold text-atlas-orange">
            {defaultVacancyTitle}
          </strong>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="soll-naam"
            className="block text-sm font-bold text-atlas-black mb-2"
          >
            Voor- en achternaam <span className="text-atlas-orange">*</span>
          </label>
          <input
            id="soll-naam"
            type="text"
            value={naam}
            onChange={(e) => setNaam(e.target.value)}
            placeholder="Hoe heet je?"
            className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm sm:text-base text-atlas-black focus:outline-none focus:ring-2 ${
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
            htmlFor="soll-woonplaats"
            className="block text-sm font-bold text-atlas-black mb-2"
          >
            Woonplaats <span className="text-atlas-orange">*</span>
          </label>
          <input
            id="soll-woonplaats"
            type="text"
            value={woonplaats}
            onChange={(e) => setWoonplaats(e.target.value)}
            placeholder="Bijv. Rotterdam, Amsterdam, Utrecht..."
            className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm sm:text-base text-atlas-black focus:outline-none focus:ring-2 ${
              errors.woonplaats
                ? 'border-red-600 focus:ring-red-600/20'
                : 'border-neutral-300 focus:border-atlas-orange focus:ring-atlas-orange/20'
            }`}
          />
          {errors.woonplaats && (
            <p className="mt-1.5 text-xs font-medium text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.woonplaats}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="soll-email"
            className="block text-sm font-bold text-atlas-black mb-2"
          >
            E-mailadres <span className="text-atlas-orange">*</span>
          </label>
          <input
            id="soll-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jouwnaam@email.nl"
            className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm sm:text-base text-atlas-black focus:outline-none focus:ring-2 ${
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
            htmlFor="soll-telefoon"
            className="block text-sm font-bold text-atlas-black mb-2"
          >
            Telefoonnummer <span className="text-atlas-orange">*</span>
          </label>
          <input
            id="soll-telefoon"
            type="tel"
            value={telefoon}
            onChange={(e) => setTelefoon(e.target.value)}
            placeholder="06 - 12345678"
            className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm sm:text-base text-atlas-black focus:outline-none focus:ring-2 ${
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

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <label
            htmlFor="soll-ervaring"
            className="block text-sm font-bold text-atlas-black mb-2"
          >
            Ervaring als verkeersregelaar
          </label>
          <select
            id="soll-ervaring"
            value={ervaring}
            onChange={(e) => setErvaring(e.target.value)}
            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3.5 text-sm text-atlas-black font-medium focus:border-atlas-orange focus:outline-none focus:ring-2 focus:ring-atlas-orange/20"
          >
            <option value="Ervaren en gecertificeerd">Ervaren en gecertificeerd</option>
            <option value="Wel ervaring, geen geldig certificaat">
              Wel ervaring, geen geldig certificaat
            </option>
            <option value="Nog geen ervaring">Nog geen ervaring</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="soll-beschikbaarheid"
            className="block text-sm font-bold text-atlas-black mb-2"
          >
            Beschikbaarheid
          </label>
          <select
            id="soll-beschikbaarheid"
            value={beschikbaarheid}
            onChange={(e) => setBeschikbaarheid(e.target.value)}
            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3.5 text-sm text-atlas-black font-medium focus:border-atlas-orange focus:outline-none focus:ring-2 focus:ring-atlas-orange/20"
          >
            <option value="Fulltime">Fulltime</option>
            <option value="Parttime">Parttime</option>
            <option value="Flexibel / oproepbasis">Flexibel / oproepbasis</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="soll-rijbewijs"
            className="block text-sm font-bold text-atlas-black mb-2"
          >
            Rijbewijs
          </label>
          <select
            id="soll-rijbewijs"
            value={rijbewijs}
            onChange={(e) => setRijbewijs(e.target.value)}
            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3.5 text-sm text-atlas-black font-medium focus:border-atlas-orange focus:outline-none focus:ring-2 focus:ring-atlas-orange/20"
          >
            <option value="Geen">Geen</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="soll-motivatie"
          className="block text-sm font-bold text-atlas-black mb-2"
        >
          Korte motivatie of toelichting <span className="text-neutral-400 font-normal">(optioneel)</span>
        </label>
        <textarea
          id="soll-motivatie"
          rows={4}
          value={motivatie}
          onChange={(e) => setMotivatie(e.target.value)}
          placeholder="Vertel kort wie je bent, wanneer je kunt starten of welke vragen je hebt..."
          className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3.5 text-sm sm:text-base text-atlas-black focus:border-atlas-orange focus:outline-none focus:ring-2 focus:ring-atlas-orange/20"
        />
      </div>

      {/* CV Upload (Optional, PDF/DOC, max 5 MB) */}
      <div>
        <label
          htmlFor="soll-cv"
          className="block text-sm font-bold text-atlas-black mb-2"
        >
          CV uploaden <span className="text-neutral-400 font-normal">(optioneel — PDF of DOC, max. 5 MB)</span>
        </label>
        {!cvFile ? (
          <label
            htmlFor="soll-cv"
            className="flex flex-col items-center justify-center border-2 border-dashed border-neutral-300 hover:border-atlas-orange rounded-xl p-6 bg-atlas-grey/50 cursor-pointer transition-colors text-center"
          >
            <Upload className="w-6 h-6 text-atlas-orange mb-2" strokeWidth={1.75} />
            <span className="text-sm font-semibold text-atlas-black">
              Klik om je CV te kiezen
            </span>
            <span className="text-xs text-neutral-500 mt-1">
              Ondersteund: PDF, DOC, DOCX (max. 5 MB)
            </span>
            <input
              id="soll-cv"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="sr-only"
            />
          </label>
        ) : (
          <div className="flex items-center justify-between bg-atlas-orange-soft/60 border border-atlas-orange/30 rounded-xl px-4 py-3">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-atlas-orange shrink-0" strokeWidth={1.75} />
              <div>
                <p className="text-sm font-bold text-atlas-black">{cvFile.name}</p>
                <p className="text-xs text-neutral-600">
                  {(cvFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setCvFile(null)}
              aria-label="Verwijder gekozen bestand"
              className="p-1.5 rounded-lg hover:bg-white text-neutral-600 hover:text-red-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
        {errors.cv && (
          <p className="mt-1.5 text-xs font-medium text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errors.cv}</span>
          </p>
        )}
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
            Ik ga akkoord met het verwerken van mijn gegevens voor mijn sollicitatie volgens de{' '}
            <Link href="/privacy" className="text-atlas-orange underline font-semibold">
              privacyverklaring
            </Link>
            . <span className="text-atlas-orange">*</span>
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
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-atlas-orange hover:bg-atlas-orange-dark text-white font-bold text-base px-8 py-4 rounded-full transition-colors shadow-md cursor-pointer"
      >
        <span>Verstuur sollicitatie</span>
        <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
      </button>
    </form>
  );
}
