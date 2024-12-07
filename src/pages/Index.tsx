import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
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

      <section className="py-16 bg-law-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-law-primary">
            تواصل معنا
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            نحن هنا لمساعدتك في جميع احتياجاتك القانونية
          </p>
          <div className="flex justify-center gap-4">
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