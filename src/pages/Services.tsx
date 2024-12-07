const Services = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-law-primary">
          خدماتنا القانونية
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 border rounded-lg hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-4 text-law-primary">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    title: "استشارات قانونية",
    description: "نقدم استشارات قانونية شاملة ومتخصصة",
    features: [
      "استشارات في القضايا المدنية",
      "استشارات في القضايا التجارية",
      "استشارات في قضايا الأحوال الشخصية",
      "استشارات في القضايا العمالية",
    ],
  },
  {
    title: "تمثيل قانوني",
    description: "نمثل عملائنا بكفاءة واحترافية",
    features: [
      "التمثيل أمام المحاكم",
      "التمثيل في قضايا التحكيم",
      "التمثيل في المفاوضات القانونية",
      "متابعة القضايا وتنفيذ الأحكام",
    ],
  },
  {
    title: "صياغة العقود",
    description: "نقدم خدمات صياغة ومراجعة العقود",
    features: [
      "صياغة العقود التجارية",
      "صياغة عقود الشركات",
      "صياغة عقود العمل",
      "مراجعة وتعديل العقود",
    ],
  },
  {
    title: "خدمات الشركات",
    description: "نقدم خدمات قانونية متكاملة للشركات",
    features: [
      "تأسيس الشركات",
      "الاستشارات القانونية للشركات",
      "حل النزاعات التجارية",
      "إعداد اللوائح الداخلية",
    ],
  },
];

export default Services;