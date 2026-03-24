"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";

const specs = [
  { label: "Длина кузова", value: "4.2 м" },
  { label: "Ширина кузова", value: "2.0 м" },
  { label: "Высота кузова", value: "1.8 м" },
  { label: "Грузоподъёмность", value: "1 500 кг" },
  { label: "Тип кузова", value: "Тентованный" },
  { label: "Объём кузова", value: "~15 м³" },
];

export default function Vehicle() {
  return (
    <SectionWrapper id="vehicle" alt>
      <SectionTitle
        label="Транспорт"
        title="Газель тентованная"
        description="Универсальный автомобиль для большинства задач по перевозке"
      />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Photo placeholders */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {[1, 2].map((n) => (
            <div
              key={n}
              className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-accent-purple/5 rounded-2xl border-2 border-dashed border-primary/20 flex flex-col items-center justify-center"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-primary/30 mb-2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span className="text-primary/40 text-sm font-medium">
                Фото {n}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Specs */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            {specs.map((spec, i) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0"
              >
                <span className="text-text-secondary">{spec.label}</span>
                <span className="font-unbounded font-semibold text-text text-lg">
                  {spec.value}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-primary/5 rounded-2xl border border-primary/10">
            <p className="text-text-secondary text-sm">
              <span className="font-semibold text-text">Что влезет:</span>{" "}
              однокомнатная квартира целиком, холодильник + стиралка + диван,
              до 20 м² ламината, 50 мешков цемента, поддон с товаром.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
