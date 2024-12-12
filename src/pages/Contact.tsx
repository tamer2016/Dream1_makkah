const Contact = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-law-primary">
            اتصل بنا
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-law-light rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-law-primary">
                العنوان
              </h2>
              <p className="text-gray-600">
                المملكة العربية السعودية
                <br />
                مكة المكرمة
                <br />
                4243 طريق الأمير سلطان بن عبد العزيز
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
            <div className="text-center p-6 bg-law-light rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-law-primary">
                معلومات التواصل
              </h2>
              <p className="text-gray-600 ltr">
                +966 55 558 2378
                <br />
                mb_law@outlook.sa
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;