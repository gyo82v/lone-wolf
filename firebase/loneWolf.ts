import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import type { Hero } from "@/types/hero";


type SaveData = {
  hero: Hero;
  chapter: number;
};


export async function saveGame(hero: Hero, chapter: number) {
  try {
    await setDoc(
      doc(db, "lone-wolf", "current"),
      {
        hero,
        chapter,
      }
    );

    return true;
  } catch (error) {
    console.error("Error saving game:", error);
    return false;
  }
}


export async function loadGame(): Promise<SaveData | null> {
  try {
    const snapshot = await getDoc(
      doc(db, "lone-wolf", "current")
    );

    if (!snapshot.exists()) {
      return null;
    }

    return snapshot.data() as SaveData;

  } catch (error) {
    console.error("Error loading game:", error);
    return null;
  }
}