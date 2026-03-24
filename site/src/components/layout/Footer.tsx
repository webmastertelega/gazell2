export default function Footer() {
  return (
    <footer className="bg-text py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-unbounded font-bold text-xl text-white mb-3">
              Артем <span className="text-primary-light">на газели</span>
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
              <a href="tel:+70001234567" className="hover:text-white transition-colors">
                +7 (000) 123-45-67
              </a>
              <a href="mailto:info@example.com" className="hover:text-white transition-colors">
                info@example.com
              </a>
              <span>Тюмень и область</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Артем на газели. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
