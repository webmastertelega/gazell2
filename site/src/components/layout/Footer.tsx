import type { Contacts, Logo } from "@/config/siteConfig";

export default function Footer({ contacts, logo }: { contacts: Contacts; logo: Logo }) {
  return (
    <footer className="bg-text py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-unbounded font-bold text-xl text-white mb-3">
              {logo.text} <span className="text-primary-light">{logo.accent}</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Грузоперевозки по Тюмени и межгороду. Быстро, аккуратно, по честной цене.
            </p>
          </div>

          <div>
            <h4 className="font-unbounded font-semibold text-white text-sm mb-3">
              Навигация
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "#services", label: "Услуги" },
                { href: "#pricing", label: "Тарифы" },
                { href: "#calculator", label: "Калькулятор" },
                { href: "#faq", label: "FAQ" },
                { href: "#contact", label: "Контакты" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-unbounded font-semibold text-white text-sm mb-3">
              Контакты
            </h4>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a href={contacts.phoneHref} className="hover:text-white transition-colors">
                {contacts.phone}
              </a>
              <a href={`mailto:${contacts.email}`} className="hover:text-white transition-colors">
                {contacts.email}
              </a>
              <span>{contacts.city}</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {logo.text} {logo.accent}. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
