"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default function Calculator() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    cargoType: "",
    needLoader: false,
  });
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
    setTimeout(() => setShowResult(false), 5000);
  };

  return (
    <SectionWrapper id="calculator">
      <SectionTitle
        label="Узнай цену"
        title="Калькулятор стоимости"
        description="Рассчитайте примерную стоимость перевозки"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-10 shadow-glass"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-unbounded text-sm font-medium text-text mb-2">
                  Откуда
                </label>
                <input
                  type="text"
                  placeholder="Адрес загрузки"
                  value={formData.from}
                  onChange={(e) =>
                    setFormData({ ...formData, from: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, to: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white/80 text-text"
                />
              </div>
            </div>

            <div>
              <label className="block font-unbounded text-sm font-medium text-text mb-2">
                Тип груза
              </label>
              <select
                value={formData.cargoType}
                onChange={(e) =>
                  setFormData({ ...formData, cargoType: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white/80 text-text"
              >
                <option value="">Выберите тип груза</option>
                <option value="furniture">Мебель / Бытовая техника</option>
                <option value="construction">Стройматериалы</option>
                <option value="boxes">Коробки / Личные вещи</option>
                <option value="equipment">Оборудование</option>
                <option value="other">Другое</option>
              </select>
            </div>

            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={formData.needLoader}
                  onChange={(e) =>
                    setFormData({ ...formData, needLoader: e.target.checked })
                  }
                  className="sr-only peer"
                />
                <div className="w-6 h-6 rounded-lg border-2 border-gray-300 peer-checked:border-primary peer-checked:bg-primary transition-all flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>
              <span className="text-text font-medium">
                Нужен грузчик{" "}
                <span className="text-accent-orange font-unbounded text-sm">
                  +700 ₽/час
                </span>
              </span>
            </label>

            <Button type="submit" size="lg" className="w-full">
              Рассчитать стоимость
            </Button>
          </form>

          {/* Result placeholder */}
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0 }}
              className="mt-6 p-6 bg-primary/5 rounded-2xl border border-primary/20 text-center"
            >
              <p className="text-text-secondary text-sm mb-2">
                Примерная стоимость
              </p>
              <div className="font-unbounded text-4xl font-bold text-primary">
                от 900 ₽
              </div>
              <p className="text-text-light text-xs mt-2">
                Точную стоимость уточните при оформлении заявки
              </p>
              <Button href="#contact" variant="outline" size="sm" className="mt-4">
                Оформить заявку
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
