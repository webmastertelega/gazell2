"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import type { PricingItem } from "@/config/siteConfig";

const tariffMeta = [
  { icon: (<svg width="28" height="28" viewBox="0 0 48 48" fill="none"><rect x="6" y="20" width="10" height="22" rx="1" stroke="currentColor" strokeWidth="2" /><rect x="20" y="12" width="12" height="30" rx="1" stroke="currentColor" strokeWidth="2" /><rect x="36" y="26" width="8" height="16" rx="1" stroke="currentColor" strokeWidth="2" /><circle cx="40" cy="10" r="7" stroke="currentColor" strokeWidth="2" /><path d="M40 6v4l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>), iconColor: "text-primary", iconBg: "bg-primary/10", priceColor: "text-primary" },
  { icon: (<svg width="28" height="28" viewBox="0 0 48 48" fill="none"><path d="M8 40L20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M40 40L28 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M14 24h20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" /><circle cx="12" cy="10" r="5" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="10" r="2" fill="currentColor" /><circle cx="36" cy="10" r="5" stroke="currentColor" strokeWidth="2" /><circle cx="36" cy="10" r="2" fill="currentColor" /></svg>), iconColor: "text-accent-purple", iconBg: "bg-accent-purple/10", priceColor: "text-accent-purple" },
  { icon: (<svg width="28" height="28" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" /><polygon points="24,8 27,22 24,26 21,22" fill="currentColor" opacity="0.8" /><polygon points="24,40 21,26 24,22 27,26" fill="currentColor" opacity="0.3" /><circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" /><path d="M24 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M24 42v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M4 24h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M42 24h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>), iconColor: "text-accent-orange", iconBg: "bg-accent-orange/10", priceColor: "text-accent-orange" },
  { icon: (<svg width="28" height="28" viewBox="0 0 48 48" fill="none"><path d="M10 32c0-6 4-10 8-12l4-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M22 18c2 0 4 2 4 4v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><circle cx="16" cy="10" r="6" stroke="currentColor" strokeWidth="2" /><rect x="28" y="18" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M35 14v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M31 14h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>), iconColor: "text-accent-red", iconBg: "bg-accent-red/10", priceColor: "text-accent-red" },
];

export default function Pricing({ pricing }: { pricing: PricingItem[] }) {
  return (
    <SectionWrapper id="pricing" alt>
      <SectionTitle
        label="Прозрачно"
        title="Стоимость работ"
        description="Фиксированные тарифы без скрытых доплат"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricing.map((tariff, i) => {
          const meta = tariffMeta[i] ?? tariffMeta[0];
          return (
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

              <div className={`w-12 h-12 ${meta.iconBg} rounded-xl flex items-center justify-center ${meta.iconColor} mb-5`}>
                {meta.icon}
              </div>

              <span className="font-unbounded text-xs font-bold tracking-wider text-text-light block h-10 mb-3">
                {tariff.label}
              </span>

              <div className="mb-4 flex items-baseline">
                <span className={`font-unbounded text-4xl font-bold tabular-nums tracking-tight ${meta.priceColor}`}>
                  {tariff.price}
                </span>
                <span className="text-xl text-text-secondary ml-1">₽</span>
                <span className="text-text-light text-sm ml-1">{tariff.unit}</span>
              </div>

              <p className="text-text-secondary text-sm leading-relaxed">
                {tariff.description}
              </p>
            </motion.div>
          );
        })}
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
