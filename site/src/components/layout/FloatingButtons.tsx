"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Contacts } from "@/config/siteConfig";

export default function FloatingButtons({ contacts }: { contacts: Contacts }) {
  const [open, setOpen] = useState(false);

  const buttons = [
    {
      href: contacts.phoneHref,
      label: "Позвонить",
      bg: "bg-green-500",
      shadow: "shadow-green-500/30",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      href: contacts.telegramHref,
      label: "Telegram",
      bg: "bg-[#229ED9]",
      shadow: "shadow-[#229ED9]/30",
      external: true,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
    },
    {
      href: `mailto:${contacts.email}`,
      label: "Email",
      bg: "bg-primary",
      shadow: "shadow-primary/30",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      href: contacts.maxHref,
      label: "MAX",
      bg: "bg-gradient-to-br from-[#00B2FF] to-[#006AFF]",
      shadow: "shadow-[#006AFF]/30",
      external: true,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.301 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.2l3.131 3.26 5.886-3.26-6.558 6.763z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Child buttons */}
      <AnimatePresence>
        {open &&
          buttons.map((btn, i) => (
            <motion.div
              key={btn.label}
              initial={{ opacity: 0, y: 20, scale: 0.7 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.7 }}
              transition={{ delay: (buttons.length - 1 - i) * 0.05, type: "spring", stiffness: 300, damping: 22 }}
              className="flex items-center gap-2"
            >
              <span className="bg-white text-text text-sm font-medium px-3 py-1.5 rounded-xl shadow-card whitespace-nowrap">
                {btn.label}
              </span>
              <a
                href={btn.href}
                target={btn.external ? "_blank" : undefined}
                rel={btn.external ? "noopener noreferrer" : undefined}
                aria-label={btn.label}
                className={`w-12 h-12 ${btn.bg} rounded-full flex items-center justify-center shadow-lg ${btn.shadow} hover:scale-110 transition-transform`}
                onClick={() => setOpen(false)}
              >
                {btn.icon}
              </a>
            </motion.div>
          ))}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((v) => !v)}
        aria-label="Контакты"
        className="flex items-center gap-2 bg-primary text-white pl-4 pr-5 h-14 rounded-full shadow-lg shadow-primary/40 hover:bg-primary-dark transition-colors"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </motion.div>
          ) : (
            <motion.div key="phone" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
        <span className="font-unbounded text-xs font-semibold whitespace-nowrap">
          {open ? "Закрыть" : "Написать"}
        </span>
      </motion.button>
    </div>
  );
}
