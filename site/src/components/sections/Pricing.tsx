"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";

const tariffs = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
        {/* City buildings + clock */}
        <rect x="6" y="20" width="10" height="22" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="10" y="24" width="2" height="3" rx="0.5" fill="currentColor" opacity="0.4" />
        <rect x="10" y="30" width="2" height="3" rx="0.5" fill="currentColor" opacity="0.4" />
        <rect x="20" y="12" width="12" height="30" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="24" y="16" width="2" height="3" rx="0.5" fill="currentColor" opacity="0.4" />
        <rect x="28" y="16" width="2" height="3" rx="0.5" fill="currentColor" opacity="0.4" />
        <rect x="24" y="22" width="2" height="3" rx="0.5" fill="currentColor" opacity="0.4" />
        <rect x="28" y="22" width="2" height="3" rx="0.5" fill="currentColor" opacity="0.4" />
        <rect x="36" y="26" width="8" height="16" rx="1" stroke="currentColor" strokeWidth="2" />
        <circle cx="40" cy="10" r="7" stroke="currentColor" strokeWidth="2" />
        <path d="M40 6v4l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    label: "ПО ГОРОДУ",
    price: "900",
    unit: "/ час",
    priceColor: "text-primary",
    description: "Грузоперевозки по Тюмени. Свыше 10 км — каждый последующий километр по 40 ₽/км.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
        {/* Road with pin markers */}
        <path d="M8 40L20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M40 40L28 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 24h20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
        <path d="M11 32h26" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
        <circle cx="12" cy="10" r="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="10" r="2" fill="currentColor" />
        <circle cx="36" cy="10" r="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="36" cy="10" r="2" fill="currentColor" />
        <path d="M17 10h14" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.5" />
      </svg>
    ),
    iconColor: "text-accent-purple",
    iconBg: "bg-accent-purple/10",
    label: "МЕЖГОРОД 50–100 КМ",
    price: "1 350",
    unit: "/ мин.",
    priceColor: "text-accent-purple",
    description: "Минималка 1.5 часа по 900 ₽/ч. Каждый километр сверх — 40 ₽/км.",
    badge: "1.5ч мин.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
        {/* Compass / long distance */}
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.25" />
        <polygon points="24,8 27,22 24,26 21,22" fill="currentColor" opacity="0.8" />
        <polygon points="24,40 21,26 24,22 27,26" fill="currentColor" opacity="0.3" />
        <circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 42v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 24h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M42 24h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    iconColor: "text-accent-orange",
    iconBg: "bg-accent-orange/10",
    label: "МЕЖГОРОД 100+ КМ",
    price: "1 800",
    unit: "/ мин.",
    priceColor: "text-accent-orange",
    description: "Минималка 2 часа по 900 ₽/ч. Плюс 40 ₽ за каждый километр.",
    badge: "2ч мин.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
        {/* Strong arm with box */}
        <path d="M10 32c0-6 4-10 8-12l4-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 18c2 0 4 2 4 4v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 32l-2 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 30l-2 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="10" r="6" stroke="currentColor" strokeWidth="2" />
        <rect x="28" y="18" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M28 22h14" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <path d="M35 14v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M31 14h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M26 24l2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    iconColor: "text-accent-red",
    iconBg: "bg-accent-red/10",
    label: "ГРУЗЧИК",
    price: "700",
    unit: "/ час",
    priceColor: "text-accent-red",
    description: "Погрузочно-разгрузочные работы. Оплата за каждый час работы грузчика. На лифте.",
  },
];

export default function Pricing() {
  return (
    <SectionWrapper id="pricing" alt>
      <SectionTitle
        label="Прозрачно"
        title="Стоимость работ"
        description="Фиксированные тарифы без скрытых доплат"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tariffs.map((tariff, i) => (
          <motion.div
            key={tariff.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-white rounded-2xl p-6 shadow-card hover:shadow-glass transition-all duration-300 hover:-translate-y-1 relative"
          >
            {tariff.badge && (
              <span className="absolute top-4 right-4 bg-primary/10 text-primary text-xs font-unbounded font-semibold px-2.5 py-1 rounded-full">
                {tariff.badge}
              </span>
            )}

            <div className={`w-12 h-12 ${tariff.iconBg} rounded-xl flex items-center justify-center ${tariff.iconColor} mb-5`}>
              {tariff.icon}
            </div>

            <span className="font-unbounded text-xs font-bold tracking-wider text-text-light block h-10 mb-3">
              {tariff.label}
            </span>

            <div className="mb-4 flex items-baseline">
              <span className={`font-unbounded text-4xl font-bold tabular-nums tracking-tight ${tariff.priceColor}`}>
                {tariff.price}
              </span>
              <span className="text-xl text-text-secondary ml-1">₽</span>
              <span className="text-text-light text-sm ml-1">{tariff.unit}</span>
            </div>

            <p className="text-text-secondary text-sm leading-relaxed">
              {tariff.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-8 text-text-light text-sm"
      >
        * Все цены указаны за работу одной газели. Точную стоимость уточняйте при заказе.
      </motion.div>
    </SectionWrapper>
  );
}
