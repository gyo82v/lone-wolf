"use client"

import {useState} from "react"
import SetupSection from "@/components/SetupSection";
import GameSection from "@/components/GameSection";
import CombatSection from "@/components/CombatSection";
import type { Hero } from "@/types/hero";

export default function Home() {
  const [hero, setHero] = useState<Hero>({
    resistenza: 0,
    combattivita: 0,
    armamento: [],
    artiRamas: [],
    zaino: {oggetti: [], pasti: 0},
    borsa: 0,
    oggettiSpeciali: [],
    bonus: []
  })

  const handleHeroStat = (value:number, key:string) => setHero(p => ({...p, [key]: value}))
  const handleAddItemToArray = (item: string, key: string) => {
    setHero((prev) => ({
      ...prev,
      [key]: [...(prev[key as keyof Hero] as string[]), item],
    }));
  };
  const handleRemoveItemFromArray = (item:string, key:string) => {
    setHero(prev => ({
      ...prev,
      [key]: (prev[key as keyof Hero] as string[]).filter(i => i !== item)
    }))
  }

  return (
    <main>
      <h1>Lone Wolf</h1>
      <div>
        <SetupSection setHero={setHero} />
      </div>
      <div>
        <GameSection />
      </div>
      <div>
        <CombatSection />
      </div>
    </main>
  );
}
