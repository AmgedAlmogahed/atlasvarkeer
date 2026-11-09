'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Phone,
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { COMPANY_CONFIG, getPhoneHref } from '@/config/company';
import { NL_CONTENT, getServicesByGroup } from '@/content/nl';
import { AtlasLogo } from './AtlasLogo';

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleMegaEnter = () => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
    setMegaMenuOpen(true);
  };

  const handleMegaLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 150);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Thin Top Utility Bar */}
      <div className="bg-atlas-black text-white border-b border-white/10 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-atlas-orange shrink-0" strokeWidth={1.75} />
            <span className="text-neutral-300">{NL_CONTENT.utilityBar.urgentLabel}</span>
            <a
              href={getPhoneHref()}
              className="font-semibold text-white hover:text-atlas-orange transition-colors whitespace-nowrap"
            >
              {COMPANY_CONFIG.phoneDisplay}
            </a>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-neutral-300">
            {NL_CONTENT.utilityBar.links.map((link, idx) => (
              <React.Fragment key={link.href}>
                {idx > 0 && <span aria-hidden="true" className="text-neutral-600">·</span>}
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <div
        className={`w-full transition-all duration-200 bg-white ${
          isScrolled
            ? 'shadow-md border-b border-neutral-200/80 py-2.5'
            : 'border-b border-neutral-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Logo */}
          <AtlasLogo variant="dark-on-light" size={isScrolled ? 'sm' : 'md'} />

          {/* Zone 2: Center Main Navigation (Desktop) */}
          <nav
            aria-label="Hoofdnavigatie"
            className="hidden lg:flex items-center gap-7 text-sm font-semibold text-atlas-ink"
          >
            {NL_CONTENT.navigation.items.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              if (item.hasMegaMenu) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={handleMegaEnter}
                    onMouseLeave={handleMegaLeave}
                  >
                    <div className="flex items-center gap-1">
                      <Link
                        href={item.href}
                        className={`py-2 transition-colors whitespace-nowrap shrink-0 ${
                          isActive
                            ? 'text-atlas-orange'
                            : 'text-atlas-ink hover:text-atlas-orange'
                        }`}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-expanded={megaMenuOpen}
                        aria-label="Open diensten submenu"
                        onClick={() => setMegaMenuOpen((prev) => !prev)}
                        className={`p-1 rounded hover:text-atlas-orange transition-colors ${
                          isActive ? 'text-atlas-orange' : 'text-atlas-ink'
                        }`}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-150 ${
                            megaMenuOpen ? 'rotate-180 text-atlas-orange' : ''
                          }`}
                          strokeWidth={1.75}
                        />
                      </button>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-2 transition-colors whitespace-nowrap shrink-0 relative ${
                    isActive
                      ? 'text-atlas-orange after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-atlas-orange'
                      : 'text-atlas-ink hover:text-atlas-orange'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Primary CTA Button (Desktop) & Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href={NL_CONTENT.navigation.ctaButton.href}
              className="hidden sm:inline-flex items-center gap-2 bg-atlas-orange hover:bg-atlas-orange-dark text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors whitespace-nowrap shrink-0 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atlas-orange"
            >
              <span>{NL_CONTENT.navigation.ctaButton.label}</span>
              <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Menu openen"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-neutral-200 text-atlas-black hover:border-atlas-orange hover:text-atlas-orange transition-colors"
            >
              <Menu className="w-6 h-6" strokeWidth={1.75} />
            </button>
          </div>
        </div>

        {/* Desktop Mega-Menu for Diensten */}
        {megaMenuOpen && (
          <div
            onMouseEnter={handleMegaEnter}
            onMouseLeave={handleMegaLeave}
            className="hidden lg:block absolute left-0 right-0 top-full bg-white border-b border-neutral-200 shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-3 gap-8">
                {NL_CONTENT.navigation.serviceGroups.map((group) => {
                  const groupServices = getServicesByGroup(group.key);
                  return (
                    <div key={group.key} className="space-y-4">
                      <div className="border-b border-neutral-200 pb-3">
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange">
                          {group.title}
                        </p>
                        <p className="text-xs text-neutral-600 mt-1">{group.description}</p>
                      </div>
                      <ul className="space-y-2">
                        {groupServices.map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={`/diensten/${service.slug}`}
                              onClick={() => setMegaMenuOpen(false)}
                              className="group flex items-center justify-between py-1.5 px-2.5 -mx-2.5 rounded-lg hover:bg-atlas-orange-soft/70 transition-colors"
                            >
                              <div>
                                <p className="text-sm font-semibold text-atlas-black group-hover:text-atlas-orange transition-colors">
                                  {service.title}
                                </p>
                                <p className="text-xs text-neutral-600 line-clamp-1">
                                  {service.oneLiner}
                                </p>
                              </div>
                              <ArrowRight
                                className="w-4 h-4 text-neutral-400 group-hover:text-atlas-orange group-hover:translate-x-0.5 transition-all shrink-0 ml-2"
                                strokeWidth={1.75}
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Mega-Menu Action Strip */}
              <div className="mt-8 pt-5 border-t border-neutral-200 flex items-center justify-between bg-atlas-grey -mx-8 -mb-8 px-8 py-4">
                <div className="flex items-center gap-6 text-sm">
                  <span className="font-semibold text-atlas-black flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-atlas-orange" strokeWidth={1.75} />
                    Binnen 24 uur een offerte op maat
                  </span>
                  <span className="text-neutral-600">
                    Spoedinzet nodig? Bel direct{' '}
                    <a
                      href={getPhoneHref()}
                      className="font-semibold text-atlas-black hover:text-atlas-orange underline"
                    >
                      {COMPANY_CONFIG.phoneDisplay}
                    </a>
                  </span>
                </div>
                <Link
                  href="/diensten"
                  onClick={() => setMegaMenuOpen(false)}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-atlas-orange hover:text-atlas-orange-dark"
                >
                  <span>Overzicht van alle 11 diensten</span>
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Full-Screen Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobiel navigatiemenu"
          className="fixed inset-0 z-50 lg:hidden bg-white flex flex-col justify-between overflow-y-auto"
        >
          <div>
            {/* Drawer Header */}
            <div className="px-4 sm:px-6 py-4 border-b border-neutral-200 flex items-center justify-between">
              <AtlasLogo variant="dark-on-light" size="sm" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Menu sluiten"
                className="w-11 h-11 rounded-xl border border-neutral-200 flex items-center justify-center text-atlas-black hover:border-atlas-orange"
              >
                <X className="w-6 h-6" strokeWidth={1.75} />
              </button>
            </div>

            {/* Navigation Items with Large Tap Targets */}
            <nav className="px-4 sm:px-6 py-6 space-y-2">
              {NL_CONTENT.navigation.items.map((item) => {
                if (item.hasMegaMenu) {
                  return (
                    <div key={item.href} className="border-b border-neutral-100 pb-2">
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="py-3 text-xl font-bold text-atlas-black hover:text-atlas-orange flex-1"
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobileServicesExpanded((prev) => !prev)}
                          aria-expanded={mobileServicesExpanded}
                          aria-label="Toon alle diensten"
                          className="w-11 h-11 flex items-center justify-center rounded-lg bg-atlas-grey text-atlas-black"
                        >
                          <ChevronDown
                            className={`w-5 h-5 transition-transform ${
                              mobileServicesExpanded ? 'rotate-180 text-atlas-orange' : ''
                            }`}
                            strokeWidth={1.75}
                          />
                        </button>
                      </div>

                      {mobileServicesExpanded && (
                        <div className="mt-2 pl-3 space-y-5 pb-3">
                          {NL_CONTENT.navigation.serviceGroups.map((group) => (
                            <div key={group.key}>
                              <p className="text-xs font-bold uppercase tracking-[0.15em] text-atlas-orange mb-2">
                                {group.title}
                              </p>
                              <ul className="space-y-1.5 border-l-2 border-neutral-200 pl-3">
                                {getServicesByGroup(group.key).map((s) => (
                                  <li key={s.slug}>
                                    <Link
                                      href={`/diensten/${s.slug}`}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="block py-1.5 text-base font-medium text-atlas-ink hover:text-atlas-orange"
                                    >
                                      {s.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 text-xl font-bold text-atlas-black hover:text-atlas-orange border-b border-neutral-100"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Mobile Drawer Bottom Actions */}
          <div className="p-4 sm:p-6 bg-atlas-grey border-t border-neutral-200 space-y-3">
            <Link
              href={NL_CONTENT.navigation.ctaButton.href}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-atlas-orange hover:bg-atlas-orange-dark text-white font-bold text-base py-3.5 px-6 rounded-full transition-colors"
            >
              <span>{NL_CONTENT.navigation.ctaButton.label}</span>
              <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
            </Link>

            <a
              href={getPhoneHref()}
              className="w-full inline-flex items-center justify-center gap-2 bg-atlas-black text-white font-semibold text-base py-3.5 px-6 rounded-full"
            >
              <Phone className="w-4 h-4 text-atlas-orange" strokeWidth={1.75} />
              <span>Spoed 24/7: {COMPANY_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
