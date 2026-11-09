import React from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Check,
} from 'lucide-react';
import { COMPANY_CONFIG, getPhoneHref, getEmailHref } from '@/config/company';
import { NL_CONTENT } from '@/content/nl';
import { AtlasPhoto } from '@/components/AtlasPhoto';
import { SwooshArcBackdrop, SwooshUnderline } from '@/components/AtlasLogo';
import {
  KeyFiguresStrip,
  ServiceCard,
  CtaBand,
  ProcessSteps,
  DynamicIcon,
  LogoMarquee,
  TestimonialSlider,
  FadeIn,
} from '@/components/SharedSections';

export default function HomePage() {
  const { home, services } = NL_CONTENT;
  const featuredServices = services.filter((s) => s.featuredOnHome);

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[82vh] flex items-center bg-atlas-black text-white overflow-hidden py-16 lg:py-24">
        {/* Background Photo + Left Gradient Scrim */}
        <div className="absolute inset-0 z-0">
          <AtlasPhoto
            src={home.hero.heroImage}
            alt={home.hero.heroImageAlt}
            priority
            className="w-full h-full"
            imgClassName="opacity-45 object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-atlas-black via-atlas-black/90 to-atlas-black/35"
          />
        </div>

        {/* Decorative Orange Swoosh Arc Behind Hero */}
        <SwooshArcBackdrop className="absolute -right-24 -bottom-24 w-[540px] h-[540px] opacity-35 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-atlas-orange">
                {home.hero.eyebrow}
              </p>

              <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-extrabold tracking-tight leading-[1.06] text-balance">
                <span className="block text-white">{home.hero.titleLine1}</span>
                <span className="inline-block text-atlas-orange mt-1">
                  {home.hero.titleLine2}
                  <SwooshUnderline />
                </span>
              </h1>

              <p className="text-base sm:text-xl text-neutral-200 leading-relaxed max-w-2xl">
                {home.hero.subtitle}
              </p>

              {/* Primary & Secondary Pill Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href={home.hero.primaryCta.href}
                  className="inline-flex items-center gap-2.5 bg-atlas-orange hover:bg-atlas-orange-dark text-white font-bold text-base px-7 py-4 rounded-full transition-colors shadow-lg whitespace-nowrap"
                >
                  <span>{home.hero.primaryCta.label}</span>
                  <ArrowUpRight className="w-5 h-5" strokeWidth={2.25} />
                </Link>

                <Link
                  href={home.hero.secondaryCta.href}
                  className="inline-flex items-center gap-2 bg-white hover:bg-atlas-grey text-atlas-black border-2 border-atlas-black font-bold text-base px-7 py-4 rounded-full transition-colors whitespace-nowrap"
                >
                  <span>{home.hero.secondaryCta.label}</span>
                </Link>
              </div>

              {/* 4 Trust Badges Row */}
              <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {home.hero.trustBadges.map((badge) => (
                  <div key={badge} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-200">
                    <CheckCircle2
                      className="w-4 h-4 text-atlas-orange shrink-0"
                      strokeWidth={2}
                    />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Right Visual Card with Orange Swoosh Accent */}
            <div className="hidden lg:block lg:col-span-4 relative">
              <div className="relative rounded-[20px] overflow-hidden border-2 border-white/15 shadow-2xl aspect-[4/5]">
                <AtlasPhoto
                  src="/assets/images/atlas_bouwportier_evenementen_1794215805236.jpg"
                  alt="Atlas Holland verkeersregelaar en bouwportier in actie op locatie"
                  priority
                  className="w-full h-full"
                  overlayGradient
                  badgeText="24/7 Landelijke Inzet"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KEY FIGURES STRIP (Animated Count-Up) */}
      <KeyFiguresStrip />

      {/* 3. SERVICES GRID (6 Photo Cards) */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange mb-3">
                {home.servicesSection.eyebrow}
              </p>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-atlas-black tracking-tight leading-[1.12] text-balance">
                <span className="block">{home.servicesSection.titleLine1}</span>
                <span className="text-atlas-orange">
                  {home.servicesSection.titleLine2}
                </span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-atlas-ink/85 leading-relaxed">
                {home.servicesSection.subtitle}
              </p>
            </div>

            <Link
              href="/diensten"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-atlas-black hover:text-atlas-orange border-2 border-atlas-black hover:border-atlas-orange px-6 py-3 rounded-full transition-colors whitespace-nowrap shrink-0 self-start md:self-auto"
            >
              <span>{home.servicesSection.allServicesLabel}</span>
              <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <FadeIn key={service.slug} delay={index * 0.06}>
                <ServiceCard service={service} />
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/diensten"
              className="inline-flex items-center gap-2 text-base font-bold text-atlas-orange hover:text-atlas-orange-dark underline underline-offset-4"
            >
              <span>{home.servicesSection.allServicesLabel} (alle 11 specialismen)</span>
              <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. ORANGE CTA BAND */}
      <CtaBand />

      {/* 5. PROCESS — 3 NUMBERED STEPS */}
      <ProcessSteps bgClass="bg-white" />

      {/* 6. VOOR WIE WERKEN WIJ? (4 Icon Cards) */}
      <section className="bg-atlas-grey py-16 md:py-24 border-y border-neutral-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange mb-3">
              {home.audiencesSection.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-atlas-black tracking-tight">
              {home.audiencesSection.titleLine1}{' '}
              <span className="text-atlas-orange">
                {home.audiencesSection.titleLine2}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {home.audiencesSection.items.map((item, idx) => (
              <FadeIn key={item.title} delay={idx * 0.08}>
                <div className="bg-white rounded-[18px] p-7 border border-neutral-200/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-atlas-orange-soft text-atlas-orange flex items-center justify-center mb-5">
                      <DynamicIcon name={item.iconName} className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-extrabold text-atlas-black">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-atlas-ink/85 leading-relaxed">
                      {item.benefit}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WAAROM ATLAS? (Dark Section, 4 USPs + Side Photo) */}
      <section className="bg-atlas-black text-white py-16 md:py-24 relative overflow-hidden">
        <SwooshArcBackdrop className="absolute -left-32 -bottom-32 w-[480px] h-[480px] opacity-15" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange mb-3">
                {home.whyAtlasSection.eyebrow}
              </p>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.12] text-balance">
                {home.whyAtlasSection.titleLine1}{' '}
                <span className="text-atlas-orange">
                  {home.whyAtlasSection.titleLine2}
                </span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
                {home.whyAtlasSection.subtitle}
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {home.whyAtlasSection.usps.map((usp) => (
                  <div
                    key={usp.title}
                    className="bg-white/5 border border-white/10 rounded-[18px] p-6 hover:border-atlas-orange/60 transition-colors"
                  >
                    <div className="w-11 h-11 rounded-xl bg-atlas-orange/20 text-atlas-orange flex items-center justify-center mb-4">
                      <DynamicIcon name={usp.iconName} className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{usp.title}</h3>
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      {usp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex">
              <div className="w-full rounded-[20px] overflow-hidden border border-white/15 shadow-2xl min-h-[360px]">
                <AtlasPhoto
                  src={home.whyAtlasSection.imageUrl}
                  alt={home.whyAtlasSection.imageAlt}
                  className="w-full h-full"
                  overlayGradient
                  badgeText="Korte lijnen · 24/7 Planning"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. KWALITEIT & CERTIFICERING (id="kwaliteit") */}
      <section id="kwaliteit" className="bg-white py-16 md:py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange mb-3">
              {home.qualitySection.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-atlas-black tracking-tight leading-[1.12]">
              <span className="block">{home.qualitySection.titleLine1}</span>
              <span className="text-atlas-orange">
                {home.qualitySection.titleLine2}
              </span>
            </h2>
            <p className="mt-5 text-lg sm:text-xl font-bold text-atlas-ink">
              {home.qualitySection.quote}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {home.qualitySection.certificates.map((cert) => (
              <div
                key={cert.code}
                className="bg-atlas-orange-soft/60 rounded-[18px] p-7 border border-atlas-orange/20 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-atlas-orange text-white flex items-center justify-center mb-5">
                    <ShieldCheck className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <p className="text-lg font-extrabold text-atlas-black">
                    {cert.code}
                  </p>
                  <p className="text-xs font-semibold text-atlas-orange mt-1">
                    {cert.title}
                  </p>
                  <p className="mt-3 text-sm text-atlas-ink/85 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FULL-WIDTH PHOTO BAND */}
      <section className="relative h-[340px] sm:h-[440px] w-full overflow-hidden">
        <AtlasPhoto
          src={home.photoBand.imageUrl}
          alt={home.photoBand.imageAlt}
          className="w-full h-full"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-atlas-black/80 via-atlas-black/35 to-transparent"
        />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 w-full">
            <p className="text-xl sm:text-3xl font-extrabold text-white tracking-tight max-w-2xl">
              {home.photoBand.overlayQuote}
            </p>
          </div>
        </div>
      </section>

      {/* 10. OPDRACHTGEVERS & PARTNERS (Infinite Logo Marquee) */}
      <LogoMarquee />

      {/* 11. TESTIMONIAL SLIDER */}
      <TestimonialSlider />

      {/* 12. WERKEN BIJ TEASER (Split Layout) */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="rounded-[20px] overflow-hidden shadow-xl border border-neutral-200 aspect-[4/3]">
                <AtlasPhoto
                  src={home.recruitmentTeaser.imageUrl}
                  alt={home.recruitmentTeaser.imageAlt}
                  className="w-full h-full"
                  badgeText="Gratis opleiding tot verkeersregelaar"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange">
                {home.recruitmentTeaser.eyebrow}
              </p>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-atlas-black tracking-tight leading-[1.12]">
                <span className="block">{home.recruitmentTeaser.titleLine1}</span>
                <span className="text-atlas-orange">
                  {home.recruitmentTeaser.titleLine2}
                </span>
              </h2>
              <p className="text-base sm:text-lg text-atlas-ink/90 leading-relaxed">
                {home.recruitmentTeaser.description}
              </p>

              <ul className="space-y-3 pt-1">
                {home.recruitmentTeaser.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm sm:text-base font-medium text-atlas-black">
                    <span className="w-5 h-5 rounded-full bg-atlas-orange/15 text-atlas-orange flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3">
                <Link
                  href={home.recruitmentTeaser.buttonHref}
                  className="inline-flex items-center gap-2 bg-atlas-orange hover:bg-atlas-orange-dark text-white font-bold text-base px-7 py-4 rounded-full transition-colors shadow-md"
                >
                  <span>{home.recruitmentTeaser.buttonLabel}</span>
                  <ArrowUpRight className="w-5 h-5" strokeWidth={2.25} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. CLOSING CONTACT BLOCK */}
      <section className="bg-atlas-grey py-16 md:py-24 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-atlas-black text-white rounded-[24px] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
            <SwooshArcBackdrop className="absolute -right-24 -bottom-24 w-[400px] h-[400px] opacity-25" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange">
                  {home.closingContact.eyebrow}
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
                  {home.closingContact.title}
                </h2>
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl">
                  {home.closingContact.subtitle}
                </p>
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href={home.closingContact.buttonHref}
                    className="inline-flex items-center gap-2 bg-atlas-orange hover:bg-atlas-orange-dark text-white font-bold text-base px-7 py-4 rounded-full transition-colors shadow-lg"
                  >
                    <span>{home.closingContact.buttonLabel}</span>
                    <ArrowUpRight className="w-5 h-5" strokeWidth={2.25} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-base px-6 py-4 rounded-full transition-colors"
                  >
                    <span>Direct contact</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-atlas-orange text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                      24/7 Telefoon & Spoedlijn
                    </p>
                    <a
                      href={getPhoneHref()}
                      className="text-lg font-extrabold text-white hover:text-atlas-orange transition-colors"
                    >
                      {COMPANY_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-atlas-orange/20 text-atlas-orange flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                      E-mail planning & offerte
                    </p>
                    <a
                      href={getEmailHref(COMPANY_CONFIG.emailGeneral)}
                      className="text-base font-bold text-white hover:text-atlas-orange transition-colors break-all"
                    >
                      {COMPANY_CONFIG.emailGeneral}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-atlas-orange/20 text-atlas-orange flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                      Adresgegevens
                    </p>
                    <p className="text-sm font-medium text-neutral-200">
                      {COMPANY_CONFIG.fullAddress}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
