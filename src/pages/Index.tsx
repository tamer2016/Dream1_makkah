import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-law-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            مكتب المحامي محمد بجوي
          </h1>
          <p className="text-xl mb-8">
            خبرة قانونية موثوقة في خدمتكم
          </p>
          <Link to="/contact">
            <Button className="bg-law-secondary hover:bg-law-secondary/90 text-white">
              تواصل معنا
            </Button>
          </Link>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-law-primary">
            خبرتنا القانونية
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl mb-6 text-gray-700">
              أكثر من 10 سنوات من الخبرة في مجال القانون
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-law-primary mb-2">+10</h3>
                <p className="text-gray-600">سنوات من الخبرة</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-law-primary mb-2">+500</h3>
                <p className="text-gray-600">قضية ناجحة</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-law-primary mb-2">+1000</h3>
                <p className="text-gray-600">عميل راضٍ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-law-primary">
            خدماتنا القانونية
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-law-primary">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-law-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-law-primary">
            تواصل معنا
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-law-primary">
                العنوان
              </h3>
              <p className="text-gray-600">
                المملكة العربية السعودية
                <br />
                جازان، حي الروضة
                <br />
                شارع الملك فهد بن عبدالعزيز
              </p>
              <a 
                href="https://maps.app.goo.gl/svs71Ge4W93b582H6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-law-primary hover:underline mt-2 inline-block"
              >
                عرض الموقع على الخريطة
              </a>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-law-primary">
                معلومات التواصل
              </h3>
              <p className="text-gray-600 ltr">
                +966 56 774 4027
                <br />
                mb_law@outlook.sa
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button asChild className="bg-law-primary hover:bg-law-primary/90">
              <Link to="/contact">احجز استشارة</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "استشارات قانونية",
    description: "نقدم استشارات قانونية شاملة في مختلف المجالات",
  },
  {
    title: "تمثيل قانوني",
    description: "نمثل عملائنا في المحاكم وأمام الجهات القضائية",
  },
  {
    title: "صياغة العقود",
    description: "نقدم خدمات صياغة ومراجعة العقود القانونية",
  },
];

export default Index;
