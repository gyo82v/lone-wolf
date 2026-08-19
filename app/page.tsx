"use client"

import {useState} from "react"
import SetupSection from "@/components/SetupSection";
import GameSection from "@/components/GameSection";
import CombatSection from "@/components/CombatSection";
import type { Hero } from "@/types/hero";
import { baseButtonStyle } from "@/styles/button";

type HeroStringArrayKey =
  | "armamento"
  | "artiRamas"
  | "oggettiSpeciali";

type HeroNumberKey =
  | "resistenza"
  | "combattivita"
  | "borsa";

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
  const [health, setHealth] = useState(0)
  const [strenght, setStrenght] = useState(0)
  const [enemyHealth, setEnemyHealth] = useState(0)
  const [combatStrenght, setCombatStrenght] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)
  const [chapter, setChapter] = useState(0)
  const gameOver = gameStarted && health <= 0;

  const addHealth = (value:number) => setHealth(h => h + value)
  const removeHealth = (value:number) => setHealth(h => h - value)
  const addStrenght = (value:number) => setStrenght(s => s + value)
  const removeStrenght = (value:number) => setStrenght(s => s - value)
  const handleHeroStat = (value:number, key:string) => setHero(p => ({...p, [key]: value}))
  const handleAddHeroStats = (value:number, key:HeroNumberKey) => setHero(p => ({...p, [key]: p[key] + value}))
  const handleRemoveHeroStats = (value:number, key:HeroNumberKey) => setHero(p => ({...p, [key]: p[key] - value}))
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

  const updatePasti = (amount: number) => {
  setHero((prev) => ({
    ...prev,
    zaino: {
      ...prev.zaino,
      pasti: Math.max(0, prev.zaino.pasti + amount),
    },
  }));
};

const removePasti = (amount: number) => {
  setHero((prev) => ({
    ...prev,
    zaino: {
      ...prev.zaino,
      pasti: Math.max(0, prev.zaino.pasti - amount),
    },
  }));
};

const restartGame = () => {
  setShowGame(false)
  setShowCombat(false)
  setShowSetup(true)
  setHealth(0)
  setStrenght(0)
  setEnemyHealth(0)
  setCombatStrenght(0)
  setGameStarted(false)
  setHero({
    resistenza: 0,
    combattivita: 0,
    armamento: [],
    artiRamas: [],
    zaino: {oggetti: [], pasti: 0},
    borsa: 0,
    oggettiSpeciali: [],
    bonus: []
  })
}

  return (
    <main>
      <h1 className="font-bold text-3xl text-center my-4 text-stone-600 underline">
        Lone Wolf Game
        {(chapter > 0) && <span className="ml-3">chapter:{chapter}</span>}
      </h1>
      {gameOver ?
      <div className="flex flex-col mx-auto w-4/12 items-center gap-6 mt-20">
        <h2 className="text-6xl font-bold">Game over</h2>
        <button onClick={restartGame} className={`${baseButtonStyle} uppercase`}>Restart</button>
      </div> :
      
      <>
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
          setHealth={setHealth}
          setStrenght={setStrenght}
          setGameStarted={setGameStarted}
          setHero={setHero}
          setChapter={setChapter}
        />
      }

      {showGame && 
        <GameSection
          hero={hero}
          health={health}
          strenght={strenght}
          addItem={handleAddItemToArray}
          removeItem={handleRemoveItemFromArray}
          addZaino={addZainoOggetto}
          removeZaino={removeZainoOggetto}
          addBonus={handleAddItemToBonusArray}
          removeBonus={handleRemoveItemFromBonusArray}
          addStats={handleAddHeroStats}
          removeStats={handleRemoveHeroStats}
          updatePasti={updatePasti}
          removePasti={removePasti}
          addHealth={addHealth}
          removeHealth={removeHealth}
          addStrenght={addStrenght}
          removeStrenght={removeStrenght}
          setShowGame={setShowGame}
          setShowCombat={setShowCombat}
          setEnemyHealth={setEnemyHealth}
          setCombatStrenght={setCombatStrenght}
        />
      }

      {showCombat && 
        <CombatSection
         enemyHealth={enemyHealth}
         health={health}
         combatStrenght={combatStrenght}
         setHealth={setHealth}
         setEnemyHealth={setEnemyHealth}
         setShowGame={setShowGame}
         setShowCombat={setShowCombat}
        />
     }            
      </>        
      }
    </main>
  );
}
