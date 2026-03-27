"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import type { SiteConfig, FaqItem, PricingItem, Service, CoverageZone } from "@/config/siteConfig";

// ─── helpers ─────────────────────────────────────────────────────────────────
function Field({ label, value, onChange, type = "text" }: {
  label: string; value: string; onChange: (v: string) => void; type?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-500 mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none text-sm transition-all"
      />
    </div>
  );
}

function Textarea({ label, value, onChange }: {
  label: string; value: string; onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-500 mb-1">{label}</label>
      <textarea
        value={value}
        rows={3}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none text-sm transition-all resize-none"
      />
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-5">{title}</h2>
      {children}
    </section>
  );
}

function SaveBar({ saving, saved }: { saving: boolean; saved: boolean }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4 flex items-center justify-between z-50">
      <span className="text-sm text-gray-500">
        {saving ? "Сохраняем..." : saved ? "✓ Сохранено" : "Есть несохранённые изменения"}
      </span>
      <button
        type="submit"
        form="admin-form"
        disabled={saving}
        className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-indigo-700 transition-all disabled:opacity-60"
      >
        {saving ? "Сохраняем..." : "Сохранить всё"}
      </button>
    </div>
  );
}

// ─── main ─────────────────────────────────────────────────────────────────────
export default function AdminPage() {
  const router = useRouter();
  const [config, setConfig] = useState<SiteConfig | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [tab, setTab] = useState("contacts");
  const fileRef1 = useRef<HTMLInputElement>(null);
  const fileRef2 = useRef<HTMLInputElement>(null);
  const fileRef3 = useRef<HTMLInputElement>(null);
  const fileRef4 = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("/api/config").then((r) => r.json()).then(setConfig);
  }, []);

  const set = (path: string, value: unknown) => {
    setSaved(false);
    setConfig((prev) => {
      if (!prev) return prev;
      const next = structuredClone(prev) as unknown as Record<string, unknown>;
      const keys = path.split(".");
      let cur = next;
      for (let i = 0; i < keys.length - 1; i++) {
        cur = cur[keys[i]] as Record<string, unknown>;
      }
      cur[keys[keys.length - 1]] = value;
      return next as unknown as SiteConfig;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    await fetch("/api/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config),
    });
    setSaving(false);
    setSaved(true);
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  };

  const handleUpload = async (field: "photo1" | "photo2" | "photo3" | "photo4", file: File) => {
    const fd = new FormData();
    fd.append("file", file);
    fd.append("field", field);
    const res = await fetch("/api/upload", { method: "POST", body: fd });
    const data = await res.json();
    if (data.url) set(`vehicle.${field}`, data.url);
  };

  if (!config) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-400">Загрузка...</p>
      </div>
    );
  }

  const tabs = [
    { id: "contacts", label: "Контакты" },
    { id: "services", label: "Услуги" },
    { id: "pricing", label: "Тарифы" },
    { id: "coverage", label: "Зоны" },
    { id: "faq", label: "FAQ" },
    { id: "vehicle", label: "Транспорт" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-gray-900 text-lg">Админка</h1>
          <p className="text-gray-500 text-sm">Артем на газели</p>
        </div>
        <div className="flex items-center gap-3">
          <a href="/" target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-600 hover:underline">
            Открыть сайт →
          </a>
          <button onClick={handleLogout} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Выйти
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="px-6 mt-4 flex gap-2 flex-wrap">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              tab === t.id
                ? "bg-indigo-600 text-white shadow-sm"
                : "bg-white text-gray-600 border border-gray-200 hover:border-indigo-300"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <form id="admin-form" onSubmit={handleSubmit} className="max-w-3xl mx-auto px-6 mt-6 space-y-6">

        {/* CONTACTS */}
        {tab === "contacts" && (
          <Card title="Контакты">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Логотип — имя (напр. «Артем»)" value={config.logo.text} onChange={(v) => set("logo.text", v)} />
              <Field label="Логотип — акцент (напр. «на газели»)" value={config.logo.accent} onChange={(v) => set("logo.accent", v)} />
              <Field label="Телефон (отображаемый)" value={config.contacts.phone} onChange={(v) => set("contacts.phone", v)} />
              <Field label="Телефон (href, напр. tel:+7...)" value={config.contacts.phoneHref} onChange={(v) => set("contacts.phoneHref", v)} />
              <Field label="Telegram (напр. @max)" value={config.contacts.telegram} onChange={(v) => set("contacts.telegram", v)} />
              <Field label="Telegram ссылка (должна начинаться с https://t.me/)" value={config.contacts.telegramHref} onChange={(v) => set("contacts.telegramHref", v)} />
              <Field label="Email" value={config.contacts.email} onChange={(v) => set("contacts.email", v)} type="email" />
              <Field label="Ссылка MAX (href)" value={config.contacts.maxHref} onChange={(v) => set("contacts.maxHref", v)} />
              <Field label="Город (отображаемый)" value={config.contacts.city} onChange={(v) => set("contacts.city", v)} />
            </div>
          </Card>
        )}

        {/* SERVICES */}
        {tab === "services" && (
          <Card title="Услуги">
            <div className="space-y-6">
              {config.services.map((s: Service, i: number) => (
                <div key={i} className="border border-gray-100 rounded-xl p-4 space-y-3">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Карточка {i + 1}</p>
                  <Field label="Заголовок" value={s.title} onChange={(v) => set(`services.${i}.title`, v)} />
                  <Textarea label="Описание" value={s.description} onChange={(v) => set(`services.${i}.description`, v)} />
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* PRICING */}
        {tab === "pricing" && (
          <Card title="Тарифы">
            <div className="space-y-6">
              {config.pricing.map((t: PricingItem, i: number) => (
                <div key={i} className="border border-gray-100 rounded-xl p-4 space-y-3">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Тариф {i + 1}</p>
                  <Field label="Название" value={t.label} onChange={(v) => set(`pricing.${i}.label`, v)} />
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Цена (число)" value={t.price} onChange={(v) => set(`pricing.${i}.price`, v)} />
                    <Field label="Единица (напр. / час)" value={t.unit} onChange={(v) => set(`pricing.${i}.unit`, v)} />
                  </div>
                  <Field label="Бейдж (напр. 1.5ч мин.) — необязательно" value={t.badge} onChange={(v) => set(`pricing.${i}.badge`, v)} />
                  <Textarea label="Описание" value={t.description} onChange={(v) => set(`pricing.${i}.description`, v)} />
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* COVERAGE */}
        {tab === "coverage" && (
          <Card title="Зоны покрытия">
            <div className="space-y-6">
              {config.coverage.map((z: CoverageZone, i: number) => (
                <div key={i} className="border border-gray-100 rounded-xl p-4 space-y-3">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Зона {i + 1}</p>
                  <Field label="Название" value={z.title} onChange={(v) => set(`coverage.${i}.title`, v)} />
                  <Textarea label="Описание" value={z.description} onChange={(v) => set(`coverage.${i}.description`, v)} />
                  <Field label="Цена (отображаемая строка)" value={z.price} onChange={(v) => set(`coverage.${i}.price`, v)} />
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* FAQ */}
        {tab === "faq" && (
          <Card title="Часто задаваемые вопросы">
            <div className="space-y-4">
              {config.faq.map((f: FaqItem, i: number) => (
                <div key={i} className="border border-gray-100 rounded-xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Вопрос {i + 1}</p>
                    <button
                      type="button"
                      onClick={() => {
                        const next = config.faq.filter((_, idx) => idx !== i);
                        set("faq", next);
                      }}
                      className="text-xs text-red-500 hover:text-red-700 transition-colors"
                    >
                      Удалить
                    </button>
                  </div>
                  <Field label="Вопрос" value={f.question} onChange={(v) => set(`faq.${i}.question`, v)} />
                  <Textarea label="Ответ" value={f.answer} onChange={(v) => set(`faq.${i}.answer`, v)} />
                </div>
              ))}

              <button
                type="button"
                onClick={() => set("faq", [...config.faq, { question: "Новый вопрос", answer: "Ответ" }])}
                className="w-full border-2 border-dashed border-gray-200 hover:border-indigo-300 text-gray-500 hover:text-indigo-600 rounded-xl py-3 text-sm font-medium transition-all"
              >
                + Добавить вопрос
              </button>
            </div>
          </Card>
        )}

        {/* VEHICLE */}
        {tab === "vehicle" && (
          <Card title="Транспорт — фотографии">
            <p className="text-xs text-gray-400 mb-4">Загрузите от 2 до 4 фотографий. При наличии 3+ — первое фото станет большим.</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {(["photo1", "photo2", "photo3", "photo4"] as const).map((field, idx) => {
                const fileRef = [fileRef1, fileRef2, fileRef3, fileRef4][idx];
                const src = config.vehicle[field];
                return (
                  <div key={field} className="space-y-3">
                    <p className="text-sm font-medium text-gray-700">Фото {idx + 1}</p>
                    <div
                      className="aspect-[4/3] rounded-xl border-2 border-dashed border-gray-200 hover:border-indigo-300 transition-all flex items-center justify-center overflow-hidden cursor-pointer bg-gray-50"
                      onClick={() => fileRef.current?.click()}
                    >
                      {src ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={src} alt={`Фото ${idx + 1}`} className="w-full h-full object-cover" />
                      ) : (
                        <div className="text-center p-4">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-300 mx-auto mb-2">
                            <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                          </svg>
                          <p className="text-gray-400 text-sm">Нажмите для загрузки</p>
                        </div>
                      )}
                    </div>
                    <input
                      ref={fileRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleUpload(field, file);
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => fileRef.current?.click()}
                      className="w-full text-sm text-indigo-600 border border-indigo-200 hover:bg-indigo-50 rounded-lg py-2 transition-all"
                    >
                      {src ? "Заменить фото" : "Загрузить фото"}
                    </button>
                    {src && (
                      <button
                        type="button"
                        onClick={() => set(`vehicle.${field}`, "")}
                        className="w-full text-sm text-red-500 hover:text-red-700 transition-colors"
                      >
                        Удалить фото
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </Card>
        )}

      </form>

      <SaveBar saving={saving} saved={saved} />
    </div>
  );
}
