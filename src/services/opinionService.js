import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, serverTimestamp, onSnapshot, query, orderBy, limit } from "firebase/firestore";

const COLLECTION_NAME = "opinions";

/**
 * Menyimpan data opini baru ke Firebase Firestore
 */
export const addOpinion = async (opinionData) => {
  try {
    const docRef = await collection(db, COLLECTION_NAME);
    await addDoc(docRef, {
      username: opinionData.username || "Anonymous",
      title: opinionData.title || "Refleksi Sipil",
      content: opinionData.content,
      category: opinionData.category,
      createdAt: serverTimestamp()
    });
    return { success: true };
  } catch (error) {
    console.error("Gagal mengarsipkan opini ke Firestore:", error);
    throw error;
  }
};

/**
 * Mendengarkan perubahan data Firestore secara Realtime (onSnapshot)
 */
export const getOpinionsRealtime = (callback) => {
  const q = query(
    collection(db, COLLECTION_NAME), 
    orderBy("createdAt", "desc"),
    limit(25) // Membatasi demi performa instalasi visual di browser
  );

  return onSnapshot(q, (snapshot) => {
    const opinions = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      // Fallback jika serverTimestamp masih bernilai null saat proses sync lokal
      createdAt: doc.data().createdAt?.toDate() || new Date()
    }));
    callback(opinions);
  }, (error) => {
    console.error("Firestore Realtime Stream Error:", error);
  });
};