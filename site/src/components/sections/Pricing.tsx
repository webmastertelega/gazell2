"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";

const tariffs = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
        <circle cx="12" cy="10" r="3" />
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
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

            <span className="font-unbounded text-xs font-bold tracking-wider text-text-light">
              {tariff.label}
            </span>

            <div className="mt-2 mb-4">
              <span className={`font-unbounded text-4xl font-bold ${tariff.priceColor}`}>
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
