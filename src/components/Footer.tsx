import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-law-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* تواصل معنا */}
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <div className="space-y-3">
              <a 
                href="https://wa.me/966555582378" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-law-secondary transition-colors"
              >
                <Phone size={18} />
                <span className="ltr">+966 55 558 2378</span>
              </a>
              <a 
                href="mailto:mb_law@outlook.sa" 
                className="flex items-center gap-2 hover:text-law-secondary transition-colors"
              >
                <Mail size={18} />
                <span className="ltr">mb_law@outlook.sa</span>
              </a>
              <a 
                href="https://maps.google.com/?q=21.3891,39.8579" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-law-secondary transition-colors"
              >
                <MapPin size={18} />
                <span>مكة المكرمة، 4243 طريق الأمير سلطان بن عبد العزيز</span>
              </a>
            </div>
          </div>

          {/* ساعات العمل */}
          <div>
            <h3 className="text-xl font-bold mb-4">ساعات العمل</h3>
            <div className="space-y-2">
              <p>الأحد - الخميس</p>
              <p>9:00 صباحاً - 5:00 مساءً</p>
            </div>
          </div>

          {/* مجالات الممارسة */}
          <div>
            <h3 className="text-xl font-bold mb-4">مجالات الممارسة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-law-secondary transition-colors">
                  استشارات قانونية
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-law-secondary transition-colors">
                  تمثيل قانوني
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-law-secondary transition-colors">
                  صياغة العقود
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* حقوق النشر */}
        <div className="mt-12 pt-4 border-t border-white/10 text-center">
          <p>© 2024 مكتب المحامي عبدالعزيز بن إبراهيم الدريبي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;