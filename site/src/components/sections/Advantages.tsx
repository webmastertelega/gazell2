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
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Честная цена",
    description: "Расчёт стоимости сразу при заказе. Никаких скрытых доплат.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Аккуратность",
    description: "Бережное отношение к вашим вещам. Мебель, техника — всё в целости.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Водитель-грузчик",
    description: "Помогу с погрузкой и разгрузкой. Два в одном — экономия на отдельном грузчике.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
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
