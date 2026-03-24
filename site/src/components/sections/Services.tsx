"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Квартирные переезды",
    description: "Аккуратный переезд вашей квартиры. Мебель, техника, личные вещи — всё довезём в целости.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "Офисные переезды",
    description: "Переезд офиса без потерь и задержек. Документы, оргтехника, мебель.",
    color: "text-accent-purple",
    bg: "bg-accent-purple/10",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" />
        <path d="M5 20V8l7-5 7 5v12" />
        <path d="M9 20v-4h6v4" />
      </svg>
    ),
    title: "Стройматериалы",
    description: "Доставка стройматериалов на объект. Кузов 4.2 метра — влезёт большинство материалов.",
    color: "text-accent-orange",
    bg: "bg-accent-orange/10",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "Для бизнеса",
    description: "Регулярные доставки для вашего бизнеса. Маркетплейсы, интернет-магазины, склады.",
    color: "text-green-600",
    bg: "bg-green-600/10",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Межгород",
    description: "Доставка грузов в любой город из Тюмени. Пригород и дальние расстояния.",
    color: "text-accent-red",
    bg: "bg-accent-red/10",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 16v6" />
        <path d="M8 16v6" />
        <path d="M12 16v6" />
        <path d="M20 8v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8" />
        <path d="M4 8l8-5 8 5" />
      </svg>
    ),
    title: "Грузчик",
    description: "Водитель-грузчик поможет с погрузкой и разгрузкой. Аккуратно и быстро.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

export default function Services() {
  return (
    <SectionWrapper id="services" alt>
      <SectionTitle
        label="Что перевозим"
        title="Услуги"
        description="Газель 4.2м тентованная — универсальное решение для любых перевозок"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <GlassCard className="h-full">
              <div className={`w-14 h-14 ${service.bg} rounded-xl flex items-center justify-center ${service.color} mb-4`}>
                {service.icon}
              </div>
              <h3 className="font-unbounded font-semibold text-lg text-text mb-2">
                {service.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {service.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
