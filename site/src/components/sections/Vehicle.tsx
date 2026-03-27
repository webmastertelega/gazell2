"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Lightbox from "@/components/ui/Lightbox";
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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const mainPhotos = [vehicle.photo1, vehicle.photo2, vehicle.photo3, vehicle.photo4].filter(Boolean);
  const galleryPhotos = (vehicle.gallery ?? []).filter(Boolean);
  const allPhotos = [...mainPhotos, ...galleryPhotos];

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + allPhotos.length) % allPhotos.length));
  const next = () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % allPhotos.length));

  const filledCount = mainPhotos.length;

  return (
    <SectionWrapper id="vehicle" alt>
      <SectionTitle
        label="Транспорт"
        title="Газель тентованная"
        description="Универсальный автомобиль для большинства задач по перевозке"
      />

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Photos column */}
        <div className="space-y-3">
          {/* Main grid */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`grid gap-3 ${filledCount === 3 ? "grid-cols-2" : "grid-cols-2"}`}
          >
            {mainPhotos.map((src, n) => {
              // 3 фото: первое — широкое на всю строку, два остальных рядом
              // 4 фото: 2×2 одинаковые
              const isWide = filledCount === 3 && n === 0;
              const isTall = filledCount === 2 && n === 0;
              return (
                <motion.div
                  key={n}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: n * 0.07 }}
                  onClick={() => openLightbox(n)}
                  className={`relative overflow-hidden rounded-2xl shadow-md bg-gray-100 cursor-pointer group ${
                    isWide ? "col-span-2" : ""
                  } ${isTall ? "row-span-2" : ""}`}
                  style={{ aspectRatio: isWide ? "16/7" : "4/3" }}
                >
                  <Image
                    src={src}
                    alt={`Фото ${n + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 rounded-2xl flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/8 pointer-events-none" />
                </motion.div>
              );
            })}

            {/* Empty slots если меньше 2 */}
            {mainPhotos.length < 2 && Array.from({ length: 2 - mainPhotos.length }).map((_, n) => (
              <div key={`empty-${n}`} className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/4 to-accent-purple/4 flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-white/70 shadow-sm flex items-center justify-center mb-2">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary/40">
                    <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <span className="text-primary/30 text-xs font-medium">Фото</span>
              </div>
            ))}
          </motion.div>

          {/* Gallery strip */}
          {galleryPhotos.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide"
            >
              {galleryPhotos.map((src, n) => (
                <button
                  key={n}
                  onClick={() => openLightbox(mainPhotos.length + n)}
                  className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden shadow-sm group relative"
                >
                  <Image
                    src={src}
                    alt={`Галерея ${n + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-xl" />
                  <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/8" />
                </button>
              ))}
            </motion.div>
          )}

          {allPhotos.length > 0 && (
            <p className="text-text-light text-xs text-center">
              Нажмите на фото для просмотра · {allPhotos.length} фото
            </p>
          )}
        </div>

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

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={allPhotos}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
