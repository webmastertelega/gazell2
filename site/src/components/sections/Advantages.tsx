"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";

const advantages = [
  {
    number: "01",
    title: "Быстрая подача",
    description: "Приезжаю от 30 минут после заявки. Не заставлю ждать.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
        {/* Speedometer / fast clock */}
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.3" />
        <path d="M24 12v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 32v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 24h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 24h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 24l7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="2.5" fill="currentColor" />
        <path d="M33 10l3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <path d="M36 7l-1 3.5 3.5-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Честная цена",
    description: "Расчёт стоимости сразу при заказе. Никаких скрытых доплат.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
        {/* Hand with coin / transparent pricing */}
        <path d="M8 38V26a2 2 0 0 1 2-2h4l6-4h6l2 2h6a2 2 0 0 1 2 2v2l-10 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 26l-2 2v10l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
        <circle cx="30" cy="14" r="9" stroke="currentColor" strokeWidth="2" />
        <circle cx="30" cy="14" r="6" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />
        <text x="30" y="18" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="bold">₽</text>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Аккуратность",
    description: "Бережное отношение к вашим вещам. Мебель, техника — всё в целости.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
        {/* Box with heart / careful handling */}
        <path d="M6 18l18-10 18 10v20L24 48 6 38V18z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M6 18l18 10 18-10" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" opacity="0.3" />
        <path d="M24 28v20" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
        <path d="M24 20c0-3 2.5-5 5-3s-5 7-5 7-8-5-5-7 5 0 5 3z" fill="currentColor" opacity="0.8" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Водитель-грузчик",
    description: "Помогу с погрузкой и разгрузкой. Два в одном — экономия на отдельном грузчике.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
        {/* Person lifting box — 2in1 */}
        <circle cx="20" cy="10" r="5" stroke="currentColor" strokeWidth="2" />
        <path d="M12 42v-12a8 8 0 0 1 8-8h0a8 8 0 0 1 8 8v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 30l-2-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="28" y="16" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M28 20h14" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
        <path d="M35 16v-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 28l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <path d="M32 28l-4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" opacity="0.4" />
      </svg>
    ),
  },
];

export default function Advantages() {
  return (
    <SectionWrapper id="advantages">
      <SectionTitle
        label="Почему я"
        title="Преимущества"
        description="Работаю на совесть — каждый клиент важен"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {advantages.map((adv, i) => (
          <motion.div
            key={adv.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center group"
          >
            <div className="w-20 h-20 mx-auto mb-5 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/25">
              {adv.icon}
            </div>
            <span className="font-unbounded text-xs text-primary font-bold">
              {adv.number}
            </span>
            <h3 className="font-unbounded font-semibold text-lg text-text mt-1 mb-2">
              {adv.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {adv.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
