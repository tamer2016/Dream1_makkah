import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Message {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: {
    toDate: () => Date;
  };
}

const Admin = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const messagesQuery = query(
          collection(db, "messages"),
          orderBy("createdAt", "desc")
        );
        const querySnapshot = await getDocs(messagesQuery);
        const messagesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Message[];
        setMessages(messagesData);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-600">جاري تحميل الرسائل...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12 text-law-primary">
          الرسائل المستلمة
        </h1>
        <div className="grid gap-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className="font-semibold text-law-primary">الاسم:</h3>
                  <p>{message.name}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-law-primary">البريد الإلكتروني:</h3>
                  <p className="ltr">{message.email}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-law-primary">رقم الهاتف:</h3>
                  <p className="ltr">{message.phone}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-law-primary">تاريخ الإرسال:</h3>
                  <p>
                    {message.createdAt?.toDate().toLocaleDateString("ar-SA", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-law-primary">الرسالة:</h3>
                <p className="whitespace-pre-wrap">{message.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;