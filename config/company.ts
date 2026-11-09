export const COMPANY_CONFIG = {
  name: 'Atlas Holland B.V.',
  shortName: 'Atlas Holland',
  foundingYear: '[YEAR]',
  phoneDisplay: '[PHONE]',
  emailGeneral: '[info@DOMAIN]',
  emailCareers: '[werkenbij@DOMAIN]',
  addressStreet: '[STRAAT + NR]',
  addressPostalCity: '[POSTCODE] [PLAATS]',
  get fullAddress() {
    return `${this.addressStreet}, ${this.addressPostalCity}`;
  },
  kvk: '[KVK]',
  btw: '[BTW]',
  socials: {
    instagram: {
      label: '[INSTAGRAM]',
      url: 'https://instagram.com',
    },
    linkedin: {
      label: '[LINKEDIN]',
      url: 'https://linkedin.com',
    },
    tiktok: {
      label: '[TIKTOK]',
      url: 'https://tiktok.com',
    },
    facebook: {
      label: '[FACEBOOK]',
      url: 'https://facebook.com',
    },
  },
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Atlas+Holland+BV+Nederland',
} as const;

/**
 * Generates a consistent tel: URI from COMPANY_CONFIG.phoneDisplay
 * so visible text and link href never diverge.
 */
export function getPhoneHref(phone: string = COMPANY_CONFIG.phoneDisplay): string {
  return `tel:${phone}`;
}

/**
 * Generates a consistent mailto: URI from COMPANY_CONFIG email fields
 * so visible text and link href never diverge.
 */
export function getEmailHref(
  email: string = COMPANY_CONFIG.emailGeneral,
  subject?: string
): string {
  if (!subject) return `mailto:${email}`;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}
