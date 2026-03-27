"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import type { Contacts, Logo } from "@/config/siteConfig";

export default function Hero({ contacts, logo }: { contacts: Contacts; logo: Logo }) {
  void logo;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    cargo: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const update = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-surface via-surface to-surface-alt">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium text-sm mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Тюмень и межгород
            </motion.div>

            <h1 className="font-unbounded text-4xl sm:text-5xl lg:text-6xl font-bold text-text leading-tight mb-6">
              Перевезём{" "}
              <span className="text-gradient">быстро</span>
              <br />и аккуратно
            </h1>

            <p className="text-text-secondary text-lg sm:text-xl mb-4 max-w-lg">
              Газель 4.2м тентованная. Квартирные и офисные переезды,
              доставка стройматериалов, грузы для бизнеса.
            </p>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-accent-orange font-unbounded font-bold text-2xl">
                от 900 ₽/час
              </div>
              <span className="text-text-light">|</span>
              <span className="text-text-secondary">до 1.5 тонн</span>
            </div>

            {/* Contact buttons — 2 columns */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {/* Row 1 */}
              <a
                href={contacts.phoneHref}
                className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-xl font-unbounded text-sm font-medium hover:bg-green-600 transition-all shadow-lg shadow-green-500/25 hover:-translate-y-0.5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="whitespace-nowrap">{contacts.phone}</span>
              </a>
              <a
                href={contacts.telegramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#229ED9] text-white px-5 py-3 rounded-xl font-unbounded text-sm font-medium hover:bg-[#1a8abf] transition-all shadow-lg shadow-[#229ED9]/25 hover:-translate-y-0.5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                Telegram
              </a>
              {/* Row 2 */}
              <a
                href={`mailto:${contacts.email}`}
                className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-unbounded text-sm font-medium hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 hover:-translate-y-0.5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className={`truncate min-w-0 ${contacts.email.length > 20 ? "text-[11px]" : ""}`}>{contacts.email}</span>
              </a>
              <a
                href={contacts.maxHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00B2FF] to-[#006AFF] text-white px-5 py-3 rounded-xl font-unbounded text-sm font-medium hover:opacity-90 transition-all shadow-lg shadow-[#006AFF]/25 hover:-translate-y-0.5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.301 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.2l3.131 3.26 5.886-3.26-6.558 6.763z" />
                </svg>
                Messenger MAX
              </a>
            </div>

          </motion.div>

          {/* Quick order form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="z-10"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-3xl p-10 shadow-glass text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-unbounded font-bold text-2xl text-text mb-2">
                  Заявка отправлена!
                </h3>
                <p className="text-text-secondary">
                  Свяжусь с вами в ближайшее время
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-3xl p-8 shadow-glass space-y-5"
              >
                <h2 className="font-unbounded font-bold text-xl text-text mb-1">
                  Быстрая заявка
                </h2>
                <p className="text-text-secondary text-sm mb-4">
                  Оставьте заявку и я свяжусь с вами за 15 минут
                </p>

                <div>
                  <label className="block font-unbounded text-sm font-medium text-text mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Как к вам обращаться"
                    value={formData.name}
                    onChange={(e) => update("name", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white/80 text-text"
                  />
                </div>

                <div>
                  <label className="block font-unbounded text-sm font-medium text-text mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white/80 text-text"
                  />
                </div>

                <div>
                  <label className="block font-unbounded text-sm font-medium text-text mb-2">
                    Что нужно перевезти?
                  </label>
                  <textarea
                    placeholder="Опишите груз, откуда и куда"
                    rows={3}
                    value={formData.cargo}
                    onChange={(e) => update("cargo", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white/80 text-text resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Оставить заявку
                </Button>

                <p className="text-text-light text-xs text-center">
                  Или напишите в{" "}
                  <a href="https://t.me/max" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    Telegram
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>

        {/* Stats bar — full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-3 lg:grid-cols-6 gap-4 mt-12 z-10"
        >
          {[
            {
              icon: (
                /* Длина: горизонтальные стрелки с корпусом кузова */
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="8" width="18" height="8" rx="1.5" />
                  <line x1="3" y1="20" x2="21" y2="20" />
                  <line x1="3" y1="18.5" x2="3" y2="21.5" />
                  <line x1="21" y1="18.5" x2="21" y2="21.5" />
                </svg>
              ),
              iconColor: "text-primary",
              iconBg: "bg-primary/10",
              value: "4.2м",
              label: "Длина кузова",
            },
            {
              icon: (
                /* Ширина: вертикальная двусторонняя стрелка с боковыми стенками */
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="3" x2="12" y2="21" />
                  <polyline points="9 6 12 3 15 6" />
                  <polyline points="9 18 12 21 15 18" />
                  <line x1="4" y1="3" x2="4" y2="21" strokeWidth="1.2" strokeDasharray="2 2" />
                  <line x1="20" y1="3" x2="20" y2="21" strokeWidth="1.2" strokeDasharray="2 2" />
                </svg>
              ),
              iconColor: "text-green-600",
              iconBg: "bg-green-600/10",
              value: "2м",
              label: "Ширина кузова",
            },
            {
              icon: (
                /* Высота: прямоугольник кузова с вертикальной меткой */
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="6" y="5" width="12" height="14" rx="1.5" />
                  <line x1="2" y1="5" x2="2" y2="19" />
                  <line x1="0.5" y1="5" x2="3.5" y2="5" />
                  <line x1="0.5" y1="19" x2="3.5" y2="19" />
                  <line x1="2" y1="12" x2="6" y2="12" strokeDasharray="1.5 1.5" />
                </svg>
              ),
              iconColor: "text-accent-red",
              iconBg: "bg-accent-red/10",
              value: "1.8м",
              label: "Высота кузова",
            },
            {
              icon: (
                /* Грузоподъёмность: весы с чашами */
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="3" x2="12" y2="21" />
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <path d="M5 7 Q3 11 3 13 Q3 16 6 16 Q9 16 9 13 Q9 11 7 7" />
                  <path d="M19 7 Q21 11 21 13 Q21 16 18 16 Q15 16 15 13 Q15 11 17 7" />
                  <line x1="9" y1="21" x2="15" y2="21" />
                </svg>
              ),
              iconColor: "text-accent-purple",
              iconBg: "bg-accent-purple/10",
              value: "1.5т",
              label: "Грузоподъёмность",
            },
            {
              icon: (
                /* Подача: молния + минимальное время */
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 15 14" />
                  <line x1="5.5" y1="3.5" x2="7.5" y2="5.5" strokeWidth="1.4" />
                  <line x1="18.5" y1="3.5" x2="16.5" y2="5.5" strokeWidth="1.4" />
                </svg>
              ),
              iconColor: "text-accent-orange",
              iconBg: "bg-accent-orange/10",
              value: "30м",
              label: "Подача от",
            },
            {
              icon: (
                /* Объём: 3D-ящик изометрический */
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 3 21 8 21 16 12 21 3 16 3 8" />
                  <line x1="12" y1="3" x2="12" y2="21" />
                  <line x1="3" y1="8" x2="21" y2="8" />
                  <line x1="3" y1="16" x2="12" y2="12" />
                  <line x1="21" y1="16" x2="12" y2="12" />
                </svg>
              ),
              iconColor: "text-primary",
              iconBg: "bg-primary/10",
              value: "~15м³",
              label: "Объём кузова",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-4 shadow-card text-center"
            >
              <div className={`w-10 h-10 ${stat.iconBg} rounded-xl flex items-center justify-center ${stat.iconColor} mx-auto mb-2`}>
                {stat.icon}
              </div>
              <div className="font-unbounded font-bold text-xl text-text">
                {stat.value}
              </div>
              <div className="text-text-light text-xs mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
