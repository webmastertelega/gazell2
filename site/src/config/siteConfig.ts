export interface Contacts {
  phone: string;
  phoneHref: string;
  telegram: string;
  telegramHref: string;
  email: string;
  maxHref: string;
  city: string;
}

export interface Logo {
  text: string;
  accent: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface PricingItem {
  label: string;
  price: string;
  unit: string;
  description: string;
  badge: string;
}

export interface CoverageZone {
  title: string;
  description: string;
  price: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Vehicle {
  photo1: string;
  photo2: string;
  photo3: string;
  photo4: string;
}

export interface SiteConfig {
  contacts: Contacts;
  logo: Logo;
  services: Service[];
  pricing: PricingItem[];
  coverage: CoverageZone[];
  faq: FaqItem[];
  vehicle: Vehicle;
}
