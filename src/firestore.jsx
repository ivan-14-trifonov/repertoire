import { useEffect, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function AddWork(name, number, db) {
  alert(name);
  try {
    const docRef = await addDoc(collection(db, "work"), {
      name: name,
      number: number,
    });
  } catch (e) {
    // An error happened.
    // console.error("Error adding document: ", e);
  }
}

export function GetWorks(db, flag) {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const asyncEffect = async () => {
      const querySnapshot = await getDocs(collection(db, "work"));

      let result = [];
      querySnapshot.forEach((doc) => {
        result.push([doc.id, doc.data()]);
      });

      setWorks(result);
    };

    asyncEffect();
  }, [flag]);

  return works;
}
