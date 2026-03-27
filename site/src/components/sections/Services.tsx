"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import type { Service } from "@/config/siteConfig";

const serviceIcons = [
  { icon: (<svg width="32" height="32" viewBox="0 0 48 48" fill="none"><path d="M6 22l10-8 6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 22v16h8v-8h4v8h4V22" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><rect x="28" y="10" width="14" height="28" rx="1" stroke="currentColor" strokeWidth="2" /><rect x="31" y="14" width="3" height="3" rx="0.5" fill="currentColor" opacity="0.35" /><rect x="36" y="14" width="3" height="3" rx="0.5" fill="currentColor" opacity="0.35" /><rect x="31" y="20" width="3" height="3" rx="0.5" fill="currentColor" opacity="0.35" /><rect x="36" y="20" width="3" height="3" rx="0.5" fill="currentColor" opacity="0.35" /><rect x="31" y="26" width="3" height="3" rx="0.5" fill="currentColor" opacity="0.35" /><rect x="36" y="26" width="3" height="3" rx="0.5" fill="currentColor" opacity="0.35" /><path d="M33 38v-5h4v5" stroke="currentColor" strokeWidth="1.5" /><path d="M22 30h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" opacity="0.4" /></svg>), color: "text-primary", bg: "bg-primary/10" },
  { icon: (<svg width="32" height="32" viewBox="0 0 48 48" fill="none"><rect x="4" y="32" width="18" height="8" rx="1" stroke="currentColor" strokeWidth="2" /><rect x="4" y="24" width="18" height="8" rx="1" stroke="currentColor" strokeWidth="2" /><path d="M13 24v8" stroke="currentColor" strokeWidth="1.5" opacity="0.3" /><path d="M9 32v8" stroke="currentColor" strokeWidth="1.5" opacity="0.3" /><path d="M17 32v8" stroke="currentColor" strokeWidth="1.5" opacity="0.3" /><rect x="28" y="14" width="14" height="26" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M28 20h14" stroke="currentColor" strokeWidth="1.5" opacity="0.3" /><path d="M32 10l3-4 3 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M35 6v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><rect x="4" y="40" width="40" height="2" rx="1" fill="currentColor" opacity="0.15" /></svg>), color: "text-accent-orange", bg: "bg-accent-orange/10" },
  { icon: (<svg width="32" height="32" viewBox="0 0 48 48" fill="none"><path d="M10 16h28l-3 24H13L10 16z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M8 16h32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /><path d="M18 16v-4h12v4" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M19 22v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" /><path d="M24 22v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" /><path d="M29 22v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" /></svg>), color: "text-accent-red", bg: "bg-accent-red/10" },
  { icon: (<svg width="32" height="32" viewBox="0 0 48 48" fill="none"><rect x="4" y="22" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="2" /><path d="M10 22v10" stroke="currentColor" strokeWidth="1" opacity="0.3" /><path d="M4 27h12" stroke="currentColor" strokeWidth="1" opacity="0.3" /><rect x="18" y="18" width="12" height="14" rx="1" stroke="currentColor" strokeWidth="2" /><path d="M24 18v14" stroke="currentColor" strokeWidth="1" opacity="0.3" /><rect x="32" y="24" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="2" /><path d="M38 24v8" stroke="currentColor" strokeWidth="1" opacity="0.3" /><path d="M2 36h44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><circle cx="10" cy="36" r="2" fill="currentColor" opacity="0.3" /><circle cx="24" cy="36" r="2" fill="currentColor" opacity="0.3" /><circle cx="38" cy="36" r="2" fill="currentColor" opacity="0.3" /></svg>), color: "text-green-600", bg: "bg-green-600/10" },
  { icon: (<svg width="32" height="32" viewBox="0 0 48 48" fill="none"><rect x="4" y="6" width="40" height="32" rx="3" stroke="currentColor" strokeWidth="2" /><path d="M4 14h40" stroke="currentColor" strokeWidth="1" opacity="0.2" /><path d="M4 22h40" stroke="currentColor" strokeWidth="1" opacity="0.2" /><path d="M4 30h40" stroke="currentColor" strokeWidth="1" opacity="0.2" /><path d="M16 6v32" stroke="currentColor" strokeWidth="1" opacity="0.2" /><path d="M28 6v32" stroke="currentColor" strokeWidth="1" opacity="0.2" /><path d="M12 28c4-8 12-4 16-12 2-4 6-2 8-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" /><circle cx="12" cy="28" r="3" fill="currentColor" /><circle cx="36" cy="12" r="3" stroke="currentColor" strokeWidth="2" /><circle cx="36" cy="12" r="1" fill="currentColor" /></svg>), color: "text-accent-purple", bg: "bg-accent-purple/10" },
  { icon: (<svg width="32" height="32" viewBox="0 0 48 48" fill="none"><circle cx="16" cy="8" r="5" stroke="currentColor" strokeWidth="2" /><path d="M10 40v-14a6 6 0 0 1 6-6h0a6 6 0 0 1 6 6v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M10 30l-4-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M22 26l6-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><rect x="28" y="14" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M35 10v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M31 10h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>), color: "text-primary", bg: "bg-primary/10" },
];

export default function Services({ services }: { services: Service[] }) {
  return (
    <SectionWrapper id="services" alt>
      <SectionTitle
        label="Что перевозим"
        title="Услуги"
        description="Газель 4.2м тентованная — универсальное решение для любых перевозок"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => {
          const meta = serviceIcons[i] ?? serviceIcons[0];
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <GlassCard className="h-full">
                <div className={`w-14 h-14 ${meta.bg} rounded-xl flex items-center justify-center ${meta.color} mb-4`}>
                  {meta.icon}
                </div>
                <h3 className="font-unbounded font-semibold text-lg text-text mb-2">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
