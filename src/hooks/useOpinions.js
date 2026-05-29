import { useState, useEffect } from "react";
import { getOpinionsRealtime } from "../services/opinionService";

export function useOpinions() {
  const [opinions, setOpinions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Berlangganan ke stream realtime Firestore
    const unsubscribe = getOpinionsRealtime((data) => {
      setOpinions(data);
      setLoading(false);
    });

    // Otomatis memutus koneksi/stream saat komponen unmount
    return () => unsubscribe();
  }, []);

  return { opinions, loading };
}