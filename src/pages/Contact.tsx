import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "تم إرسال رسالتك بنجاح",
      description: "سنتواصل معك في أقرب وقت ممكن",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-law-primary">
            اتصل بنا
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-center p-6 bg-law-light rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-law-primary">
                العنوان
              </h2>
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
            <div className="text-center p-6 bg-law-light rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-law-primary">
                معلومات التواصل
              </h2>
              <p className="text-gray-600 ltr">
                +966 56 774 4027
                <br />
                mb_law@outlook.sa
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="الاسم"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="البريد الإلكتروني"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Input
                type="tel"
                placeholder="رقم الهاتف"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="رسالتك"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="h-32"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-law-primary hover:bg-law-primary/90"
            >
              إرسال
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;