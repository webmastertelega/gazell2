"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";

const zones = [
  {
    title: "Тюмень",
    description: "Все районы города, подача от 30 минут",
    price: "от 900 ₽/час",
    color: "border-primary",
    bg: "bg-primary/5",
  },
  {
    title: "Пригород",
    description: "До 50 км от Тюмени — посёлки, дачи, коттеджи",
    price: "от 900 ₽/час + 40 ₽/км",
    color: "border-accent-purple",
    bg: "bg-accent-purple/5",
  },
  {
    title: "Межгород",
    description: "Любое направление из Тюмени без ограничений по расстоянию",
    price: "от 1 350 ₽ + 40 ₽/км",
    color: "border-accent-orange",
    bg: "bg-accent-orange/5",
  },
];

export default function Coverage() {
  return (
    <SectionWrapper id="coverage">
      <SectionTitle
        label="География"
        title="Зона покрытия"
        description="Работаю по Тюмени, пригороду и межгороду в любом направлении"
      />

      <div className="grid md:grid-cols-3 gap-6">
        {zones.map((zone, i) => (
          <motion.div
            key={zone.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`${zone.bg} border-l-4 ${zone.color} rounded-2xl p-6`}
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
        ))}
      </div>
    </SectionWrapper>
  );
}
