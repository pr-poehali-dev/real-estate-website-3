import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Home" className="text-white" size={20} />
              </div>
              <span className="font-bold text-xl">СтройДом</span>
            </div>
            <p className="text-white/80 text-sm">
              Профессиональное строительство и ремонт с 2008 года. Ваш надёжный партнёр в создании комфортного жилья.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/houses" className="text-white/80 hover:text-white transition-colors">
                  Купить дом
                </Link>
              </li>
              <li>
                <Link to="/renovation" className="text-white/80 hover:text-white transition-colors">
                  Ремонт помещений
                </Link>
              </li>
              <li>
                <Link to="/tiles" className="text-white/80 hover:text-white transition-colors">
                  Заказать плитку
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/80">
                <Icon name="Phone" size={16} />
                <a href="tel:+79991234567" className="hover:text-white transition-colors">
                  +7 (999) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Icon name="Mail" size={16} />
                <a href="mailto:info@stroydom.ru" className="hover:text-white transition-colors">
                  info@stroydom.ru
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Icon name="MapPin" size={16} />
                <span>г. Москва, ул. Строителей, 15</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Мы в соцсетях</h3>
            <div className="flex gap-3">
              <a 
                href="https://vk.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="VK"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.45 14.41h-1.4c-.48 0-.63-.39-1.49-1.26-.75-.75-1.09-.85-1.28-.85-.26 0-.34.08-.34.49v1.15c0 .31-.1.49-1.02.49-1.52 0-3.21-.92-4.39-2.64-1.78-2.5-2.27-4.38-2.27-4.76 0-.19.08-.37.49-.37h1.4c.37 0 .51.17.65.56.71 2.05 1.91 3.84 2.4 3.84.18 0 .27-.08.27-.54v-2.09c-.06-.98-.58-1.06-.58-1.41 0-.16.13-.31.34-.31h2.2c.31 0 .42.16.42.52v2.8c0 .31.14.42.22.42.18 0 .33-.11.67-.45 1.04-1.17 1.79-2.97 1.79-2.97.1-.21.27-.37.64-.37h1.4c.42 0 .51.21.42.52-.16.74-1.88 3.51-1.88 3.51-.15.24-.21.35 0 .62.15.2.64.63 1.09 1.11.48.51.91 1.08 1.02 1.43.11.35-.08.52-.49.52z"/>
                </svg>
              </a>
              <a 
                href="https://t.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <Icon name="Send" size={20} />
              </a>
              <a 
                href="https://wa.me/79991234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Icon name="Instagram" size={20} />
              </a>
            </div>
            <p className="text-xs text-white/60 mt-4">
              Пн-Пт: 9:00 - 19:00<br />
              Сб-Вс: 10:00 - 17:00
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>&copy; 2024 СтройДом. Все права защищены.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
