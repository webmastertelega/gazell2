"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import type { Vehicle as VehicleType } from "@/config/siteConfig";

const specs = [
  { label: "Длина кузова", value: "4.2 м" },
  { label: "Ширина кузова", value: "2.0 м" },
  { label: "Высота кузова", value: "1.8 м" },
  { label: "Грузоподъёмность", value: "1 500 кг" },
  { label: "Тип кузова", value: "Тентованный" },
  { label: "Объём кузова", value: "~15 м³" },
];

export default function Vehicle({ vehicle }: { vehicle: VehicleType }) {
  const photos = [vehicle.photo1, vehicle.photo2, vehicle.photo3, vehicle.photo4];
  const hasAny = photos.some(Boolean);

  // показываем слоты только с фото + пустые до минимум 2
  const slots = hasAny
    ? photos.filter((_, i) => i < 2 || photos[i]) // первые 2 всегда, 3-4 только если есть
    : photos.slice(0, 2);

  const filledCount = photos.filter(Boolean).length;
  const gridCols = filledCount >= 3 ? "grid-cols-2" : "grid-cols-2";

  return (
    <SectionWrapper id="vehicle" alt>
      <SectionTitle
        label="Транспорт"
        title="Газель тентованная"
        description="Универсальный автомобиль для большинства задач по перевозке"
      />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Photos */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={`grid ${gridCols} gap-3`}
        >
          {slots.map((src, n) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: n * 0.08 }}
              className={`relative overflow-hidden rounded-2xl shadow-md bg-gray-100 ${
                filledCount >= 3 && n === 0 ? "row-span-2" : ""
              }`}
              style={{ aspectRatio: filledCount >= 3 && n === 0 ? "3/4" : "4/3" }}
            >
              {src ? (
                <>
                  <Image
                    src={src}
                    alt={`Фото ${n + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                  {/* subtle inner border */}
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/8 pointer-events-none" />
                </>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/4 to-accent-purple/4">
                  <div className="w-12 h-12 rounded-xl bg-white/70 shadow-sm flex items-center justify-center mb-2">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary/40">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                  <span className="text-primary/30 text-xs font-medium">Фото {n + 1}</span>
                </div>
              )}
            </motion.div>
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
