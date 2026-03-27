"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import type { CoverageZone } from "@/config/siteConfig";

const zoneMeta = [
  { color: "border-primary", bg: "bg-primary/5" },
  { color: "border-accent-purple", bg: "bg-accent-purple/5" },
  { color: "border-accent-orange", bg: "bg-accent-orange/5" },
];

export default function Coverage({ coverage }: { coverage: CoverageZone[] }) {
  return (
    <SectionWrapper id="coverage">
      <SectionTitle
        label="География"
        title="Зона покрытия"
        description="Работаю по Тюмени, пригороду и межгороду в любом направлении"
      />

      <div className="grid md:grid-cols-3 gap-6">
        {coverage.map((zone, i) => {
          const meta = zoneMeta[i] ?? zoneMeta[0];
          return (
            <motion.div
              key={zone.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`${meta.bg} border-l-4 ${meta.color} rounded-2xl p-6`}
            >
              <h3 className="font-unbounded font-bold text-xl text-text mb-2">
                {zone.title}
              </h3>
              <p className="text-text-secondary text-sm mb-4">
                {zone.description}
              </p>
              <span className="font-unbounded font-semibold text-primary text-sm">
                {zone.price}
              </span>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
