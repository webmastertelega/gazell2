"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";

const faqs = [
  {
    question: "Как оформить заказ?",
    answer:
      "Оставьте заявку на сайте, напишите в Telegram или позвоните. Я свяжусь с вами, уточню детали и назову точную стоимость.",
  },
  {
    question: "Какие грузы перевозите?",
    answer:
      "Мебель, бытовую технику, стройматериалы, личные вещи при переезде, товары для бизнеса, оборудование — практически всё, что помещается в кузов 4.2×2×1.8 м и весит до 1.5 тонн.",
  },
  {
    question: "Сколько стоит подача машины?",
    answer:
      "Подача по городу включена в стоимость. За пределами Тюмени — подача оплачивается дополнительно.",
  },
  {
    question: "Можно ли заказать перевозку в выходные или праздники?",
    answer:
      "Да, работаю без выходных. Стоимость в выходные и праздничные дни не меняется.",
  },
  {
    question: "Как производится оплата?",
    answer:
      "Наличные или перевод на карту. Оплата по факту выполнения работы.",
  },
  {
    question: "Помогаете ли с погрузкой/разгрузкой?",
    answer:
      "Да, я работаю как водитель-грузчик. Стоимость услуги грузчика — 700 ₽/час. Помогу занести вещи на лифте.",
  },
];

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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper id="faq" alt>
      <SectionTitle
        label="Вопросы"
        title="Часто спрашивают"
        description="Ответы на популярные вопросы о перевозках"
      />

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-card p-6 md:p-8">
        {faqs.map((faq, i) => (
          <FAQItem
            key={i}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === i}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
