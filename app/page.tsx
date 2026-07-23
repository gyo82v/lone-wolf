"use client"

import {useState} from "react"
import SetupSection from "@/components/SetupSection";
import GameSection from "@/components/GameSection";
import CombatSection from "@/components/CombatSection";

type Hero = {
  resistenza: number,
  combattivita: number,
  armamento: string[],
  artiRamas: string[],
  borsa: number,
  oggettiSpeciali: string[],
  zaino: {
    oggetti: string[];
    pasti: string[];
  };
  bonus: {
    name: string;
    value: number;
  }[];
}

export default function Home() {
  const [hero, setHero] = useState<Hero>({
    resistenza: 0,
    combattivita: 0,
    armamento: [],
    artiRamas: [],
    zaino: {oggetti: [], pasti: []},
    borsa: 0,
    oggettiSpeciali: [],
    bonus: []
  })



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
