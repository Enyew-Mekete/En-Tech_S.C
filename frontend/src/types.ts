export interface ServiceDetail {
  id: string;
  title: string;
  shortDesc?: string;
  description?: string;
  category?: "web-dev" | "website-dev" | "graphics" | "erp-system";
  subCategory?: string;
  iconName?: string;
  features?: string[];
  priceEst?: string;
}

export interface BenefitItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio?: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  iconName: string;
}

export interface PartnerItem {
  name: string;
  slug: string;
}

export interface HeroSlide {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  actionText: string;
  secondaryActionText: string;
}
