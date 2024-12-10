import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Message {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: Timestamp;
}

const Admin = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const messagesRef = collection(db, "messages");
        const q = query(messagesRef, orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        
        // Transform the data immediately after fetching
        const messagesData: Message[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          messagesData.push({
            id: doc.id,
            name: data.name || "",
            email: data.email || "",
            phone: data.phone || "",
            message: data.message || "",
            createdAt: data.createdAt as Timestamp,
          });
        });
        
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
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>الاسم</TableHead>
              <TableHead>البريد الإلكتروني</TableHead>
              <TableHead>رقم الهاتف</TableHead>
              <TableHead>تاريخ الإرسال</TableHead>
              <TableHead>الرسالة</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {messages.map((message) => (
              <TableRow key={message.id}>
                <TableCell>{message.name}</TableCell>
                <TableCell className="ltr">{message.email}</TableCell>
                <TableCell className="ltr">{message.phone}</TableCell>
                <TableCell>
                  {message.createdAt.toDate().toLocaleDateString("ar-SA", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </TableCell>
                <TableCell className="max-w-md">
                  <div className="whitespace-pre-wrap">{message.message}</div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Admin;