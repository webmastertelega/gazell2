"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import type { FaqItem } from "@/config/siteConfig";

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className="font-unbounded font-medium text-text pr-4 group-hover:text-primary transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="8" y1="3" x2="8" y2="13" />
            <line x1="3" y1="8" x2="13" y2="8" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-text-secondary leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ({ faq }: { faq: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper id="faq" alt>
      <SectionTitle
        label="Вопросы"
        title="Часто спрашивают"
        description="Ответы на популярные вопросы о перевозках"
      />

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-card p-6 md:p-8">
        {faq.map((item, i) => (
          <FAQItem
            key={i}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === i}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
