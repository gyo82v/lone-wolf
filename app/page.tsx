"use client"

import {useState} from "react"
import SetupSection from "@/components/SetupSection";
import GameSection from "@/components/GameSection";
import CombatSection from "@/components/CombatSection";
import type { Hero } from "@/types/hero";

type HeroStringArrayKey =
  | "armamento"
  | "artiRamas"
  | "oggettiSpeciali";

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
  const [showSetup, setShowSetup] = useState(true)
  const [showGame, setShowGame] = useState(false)
  const [showCombat, setShowCombat] = useState(false)

  const handleHeroStat = (value:number, key:string) => setHero(p => ({...p, [key]: value}))
  const handleAddItemToArray = (item: string, key: string) => {
    setHero((prev) => ({
      ...prev,
      [key]: [...(prev[key as keyof Hero] as string[]), item],
    }));
  };
  const handleRemoveItemFromArray = (item:string, key:HeroStringArrayKey) => {
    setHero(prev => ({
      ...prev,
      [key]: (prev[key as keyof Hero] as string[]).filter(i => i !== item)
    }))
  }
  const handleAddItemToBonusArray = (name: string,value: number) => {
    setHero((prev) => ({
      ...prev,
      bonus: [...prev.bonus, {name, value}]
    }));
  };
  const handleRemoveItemFromBonusArray = (name: string) => {
    setHero((prev) => ({...prev, bonus: prev.bonus.filter((bonus) => bonus.name !== name),
    }));
  };
 const addZainoOggetto = (item: string) => {
  setHero((prev) => ({
    ...prev,
    zaino: {
      ...prev.zaino,
      oggetti: [...prev.zaino.oggetti, item],
    },
  }));
};

  const removeZainoOggetto = (item: string) => {
  setHero((prev) => ({
    ...prev,
    zaino: {
      ...prev.zaino,
      oggetti: prev.zaino.oggetti.filter((i) => i !== item),
    },
  }));
};

  const updatePasti = (amount: 1 | -1) => {
  setHero((prev) => ({
    ...prev,
    zaino: {
      ...prev.zaino,
      pasti: Math.max(0, prev.zaino.pasti + amount),
    },
  }));
};

  return (
    <main>
      <h1 className="font-bold text-3xl text-center my-4 text-stone-600 underline">Lone Wolf</h1>
      {showSetup && 
        <SetupSection 
          hero={hero}
          handleStats={handleHeroStat}
          addItemToArray={handleAddItemToArray}
          addItemToZaino={addZainoOggetto}
          handlePasti={updatePasti}
          addBonus={handleAddItemToBonusArray}
          setShowGame={setShowGame}
          setShowSetup={setShowSetup}
        />
      }
      {showGame && <GameSection />}
      {showCombat && <CombatSection /> }
    </main>
  );
}
