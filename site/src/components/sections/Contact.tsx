"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import type { Contacts } from "@/config/siteConfig";

export default function Contact({ contacts }: { contacts: Contacts }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    from: "",
    to: "",
    cargo: "",
    date: "",
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
    <SectionWrapper id="contact">
      <SectionTitle
        label="Связаться"
        title="Оставить заявку"
        description="Заполните форму и я свяжусь с вами в течение 15 минут"
      />

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass rounded-3xl p-10 shadow-glass text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-unbounded font-bold text-2xl text-text mb-2">
                Заявка отправлена!
              </h3>
              <p className="text-text-secondary">
                Я свяжусь с вами в ближайшее время
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-8 md:p-10 shadow-glass space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
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
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-unbounded text-sm font-medium text-text mb-2">
                    Откуда
                  </label>
                  <input
                    type="text"
                    placeholder="Адрес загрузки"
                    value={formData.from}
                    onChange={(e) => update("from", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white/80 text-text"
                  />
                </div>
                <div>
                  <label className="block font-unbounded text-sm font-medium text-text mb-2">
                    Куда
                  </label>
                  <input
                    type="text"
                    placeholder="Адрес доставки"
                    value={formData.to}
                    onChange={(e) => update("to", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white/80 text-text"
                  />
                </div>
              </div>

              <div>
                <label className="block font-unbounded text-sm font-medium text-text mb-2">
                  Описание груза
                </label>
                <textarea
                  placeholder="Что нужно перевезти? (мебель, коробки, стройматериалы...)"
                  rows={3}
                  value={formData.cargo}
                  onChange={(e) => update("cargo", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white/80 text-text resize-none"
                />
              </div>

              <div>
                <label className="block font-unbounded text-sm font-medium text-text mb-2">
                  Желаемая дата
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => update("date", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white/80 text-text"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Отправить заявку
              </Button>
            </form>
          )}
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-6"
        >
          {[
            {
              icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>),
              label: "Телефон", value: contacts.phone, href: contacts.phoneHref, color: "bg-green-500/10 text-green-600",
            },
            {
              icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>),
              label: "Telegram", value: contacts.telegram, href: contacts.telegramHref, color: "bg-[#229ED9]/10 text-[#229ED9]",
            },
            {
              icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>),
              label: "Email", value: contacts.email, href: `mailto:${contacts.email}`, color: "bg-primary/10 text-primary",
            },
            {
              icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></svg>),
              label: "Город", value: contacts.city, color: "bg-accent-orange/10 text-accent-orange",
            },
          ].map((contact) => (
            <div key={contact.label} className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-card">
              <div className={`w-12 h-12 ${contact.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                {contact.icon}
              </div>
              <div>
                <span className="text-text-light text-sm">{contact.label}</span>
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block font-unbounded font-semibold text-text hover:text-primary transition-colors"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <span className="block font-unbounded font-semibold text-text">
                    {contact.value}
                  </span>
                )}
              </div>
            </div>
          ))}

          <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
            <p className="font-unbounded font-semibold text-text mb-1">
              Работаю ежедневно
            </p>
            <p className="text-text-secondary text-sm">
              Без выходных и праздников. Заявки принимаю круглосуточно.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
