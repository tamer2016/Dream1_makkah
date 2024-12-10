import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

// دالة مساعدة لحفظ رسائل العملاء
export const saveContactMessage = async (message: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      ...message,
      createdAt: new Date(),
    });
    console.log("Message saved with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error saving message: ", error);
    throw error;
  }
};

// دالة مساعدة لتحميل الملفات
export const uploadFile = async (file: File, path: string) => {
  try {
    const storageRef = ref(storage, path);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading file: ", error);
    throw error;
  }
};