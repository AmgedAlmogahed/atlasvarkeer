import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import './globals.css';
import { COMPANY_CONFIG } from '@/config/company';
import { NL_CONTENT } from '@/content/nl';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingCallButton } from '@/components/FloatingCallButton';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: NL_CONTENT.home.seo.title,
  description: NL_CONTENT.home.seo.description,
  openGraph: {
    title: NL_CONTENT.home.seo.title,
    description: NL_CONTENT.home.seo.description,
    type: 'website',
    locale: 'nl_NL',
    siteName: COMPANY_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: NL_CONTENT.home.seo.title,
    description: NL_CONTENT.home.seo.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY_CONFIG.name,
    description: NL_CONTENT.home.seo.description,
    telephone: COMPANY_CONFIG.phoneDisplay,
    email: COMPANY_CONFIG.emailGeneral,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_CONFIG.addressStreet,
      postalCode: '[POSTCODE]',
      addressLocality: '[PLAATS]',
      addressCountry: 'NL',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Nederland',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  };

  return (
    <html lang="nl" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-white text-atlas-ink antialiased selection:bg-atlas-orange selection:text-white"
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
