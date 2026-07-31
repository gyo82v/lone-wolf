import type { Hero } from "@/types/hero"
import { Dispatch, SetStateAction } from "react";
import { baseButtonStyle } from "@/styles/button";
import { inputBasestyle } from "@/styles/input";
import ActionSection from "./ui/ActionSection";
import BonusSection from "./ui/BonusSection";
import {FaHeart} from "react-icons/fa6";
import {GiCrossedSwords} from "react-icons/gi";
import HeroSection from "./Hero";
import { saveGame } from "@/firebase/loneWolf";
import { useState } from "react";
import { randomNumber } from "@/lib/randomNumberGenerator";

type HeroStringArrayKey =
  | "armamento"
  | "artiRamas"
  | "oggettiSpeciali";

type HeroNumberKey =
  | "resistenza"
  | "combattivita"
  | "borsa"

type Props = {
    hero: Hero,
    health: number,
    strenght: number,
    addItem: (item:string, key:string) => void
    removeItem: (item:string, key:HeroStringArrayKey) => void
    addZaino: (item:string) => void
    removeZaino: (item:string) => void
    addBonus: (name:string, value:number) => void
    removeBonus: (name:string) => void
    addStats: (value:number, key:HeroNumberKey) => void
    removeStats: (value:number, key:HeroNumberKey) => void
    updatePasti: (amount:number) => void
    removePasti: (amount:number) => void
    addHealth: (value:number) => void
    removeHealth: (value:number) => void
    addStrenght: (value:number) => void
    removeStrenght: (value:number) => void
    setShowGame: Dispatch<SetStateAction<boolean>>
    setShowCombat: Dispatch<SetStateAction<boolean>>
    setEnemyHealth: Dispatch<SetStateAction<number>>
    setCombatStrenght: Dispatch<SetStateAction<number>>

}

export default function GameSection({
  hero, health, strenght, addItem, removeItem, addZaino,
  removeZaino, addBonus, removeBonus, addStats, removeStats, updatePasti, removePasti,
  addHealth, removeHealth, addStrenght, removeStrenght, setShowGame, setShowCombat,
  setEnemyHealth, setCombatStrenght
}:Props){
  const [destinyNumber, setDestinyNumber] = useState<number | null>(null)

  const handleHealth = (formData:FormData) => {
    const health = formData.get("add")
    const numberHealth = Number(health)
    if(typeof numberHealth !== "number") return
    addHealth(numberHealth)
  }

  const handleRemoveHealth = (formData:FormData) => {
    const health = formData.get("remove")
    const numberHealth = Number(health)
    if(typeof numberHealth !== "number") return
    removeHealth(numberHealth)
  }

  const handleStrenght = (formData:FormData) => {
    const strenght = formData.get("add")
    const numberStrenght = Number(strenght)
    if(typeof numberStrenght !== "number") return
    addStrenght(numberStrenght)
  }

  const handleRemoveStrenght = (formData:FormData) => {
    const strenght = formData.get("remove")
    const numberStrenght = Number(strenght)
    if(typeof numberStrenght !== "number") return
    removeStrenght(numberStrenght)
  }

  const handleCorone = (formData:FormData) => {
    const corone = formData.get("add")
    const numberCorone = Number(corone)
    if(typeof numberCorone !== "number") return
    addStats(numberCorone, "borsa")
  }

  const handleRemoveCorone = (formData:FormData) => {
    const corone = formData.get("remove")
    const numberCorone = Number(corone)
    if(typeof numberCorone !== "number") return
    removeStats(numberCorone, "borsa")
  }

  const handlePasti = (formData:FormData) => {
    const pasti = formData.get("add")
    const numberPasti = Number(pasti)
    if(typeof numberPasti !== "number") return
    updatePasti(numberPasti)
  }

  const handleRemovePasti = (formData:FormData) => {
    const pasti = formData.get("remove")
    const numberPasti = Number(pasti)
    if(typeof numberPasti !== "number") return
    removePasti(numberPasti)
  }


  const handleArmamento = (formData: FormData) => {
    const armamento = formData.get("add")
    if (typeof armamento !== "string" || armamento.trim() === "") return;
    addItem(armamento, "armamento")
  }

  const handleRemoveArmamento = (formData:FormData) => {
    const armamento = formData.get("remove")
    if (typeof armamento !== "string" || armamento.trim() === "") return;
    removeItem(armamento, "armamento")
  }

  const handleSpecial = (formData:FormData) => {
    const special = formData.get("add")
    if(typeof special !== "string" || special.trim() === "") return
    addItem(special, "oggettiSpeciali")
  }

  const handleRemoveSpecial = (formData:FormData) => {
    const special = formData.get("remove")
    if(typeof special !== "string" || special.trim() === "") return
    removeItem(special, "oggettiSpeciali")
  }

  const handleZaino = (formData:FormData) => {
    const oggetto = formData.get("add")
    if(typeof oggetto !== "string" || oggetto.trim() === "") return
    addZaino(oggetto)
  }

  const handleRemoveZaino = (formData:FormData) => {
    const oggetto = formData.get("remove")
    if(typeof oggetto !== "string" || oggetto.trim() === "") return
    removeZaino(oggetto)
  }

  const handleBonus = (formData:FormData) => {
    const name = formData.get("name")
    const value = formData.get("value")
    const numberValue = Number(value)
    if(typeof name !== "string" || name.trim() === "") return
    if(typeof numberValue !== "number" || !value) return
    addBonus(name, numberValue)
  }

  const handleRemoveBonus = (formData:FormData) => {
    const name = formData.get("name")
    if(typeof name !== "string" || name.trim() === "") return
    removeBonus(name)
  }

  const handleDestinyNumber = () => {
    const destinyNumber = randomNumber()
    setDestinyNumber(destinyNumber)
  }

  const startCombat = (formData:FormData) => {
    const loneWolfStrenght = formData.get("strenght")
    const enemyHealth = formData.get("enemy-health")
    const enemyStrenght = formData.get("enemy-strenght")
    const numberLoneWolfStrenght = Number(loneWolfStrenght)
    const numberEnemyStrenght = Number(enemyStrenght)
    const numberEnemyHealth = Number(enemyHealth)
    if(typeof numberEnemyHealth !== "number" || typeof numberEnemyStrenght !== "number" || typeof numberLoneWolfStrenght !== "number")return
    setEnemyHealth(numberEnemyHealth)
    setCombatStrenght(numberLoneWolfStrenght)
    setShowGame(false)
    setShowCombat(true)
  }

  const handleSave = async (formData:FormData) => {
    const chapter = formData.get("chapter")
    const chapternumber = Number(chapter)
    if(typeof chapternumber !== "number") return
    const success = await saveGame(hero, chapternumber)
    if(success) console.log("Game saved.")
  }


    return(
      <div className="flex w-11/12 gap-10">
          <div className="w-full">
              <HeroSection hero={hero} />
          </div>
          <div className="w-full border-2 border-stone-500 rounded-lg p-6">
              <div className="flex justify-between">
                <div>
                  <h2 className="font-semibold text-lg mb-2">Current stats:</h2>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <FaHeart className="text-red-500 h-6 w-6" />
                      {health}
                    </div>
                    <div className="flex items-center gap-2"> 
                      <GiCrossedSwords className="text-stone-600 h-6 w-6"/>
                      {strenght}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <h2 className="font-semibold text-lg ">Destiny Table</h2>
                  <button onClick={handleDestinyNumber} className={`${baseButtonStyle} uppercase `}>Try your luck</button>
                  <p>destiny number: <span className="text-amber-700">{destinyNumber}</span></p>
                </div>
              </div>
              <div className="my-4">
                <h2 className="font-semibold text-lg mb-2">Combat</h2>
                <form className="flex flex-col gap-3" action={startCombat}>
                  <div className="flex gap-2">
                    <input className={`${inputBasestyle}`} type="number" placeholder="combat strenght" name="strenght" />
                    <input className={`${inputBasestyle}`} type="text" placeholder="enemy health" name="enemy-health" />
                  </div>
                  <button type="submit" className={`${baseButtonStyle} uppercase`}>start combat</button>
                </form>
              </div>
              <div className="flex flex-col gap-4">
                <ActionSection title="Health" type="number" addAction={handleHealth} removeAction={handleRemoveHealth} />
                <ActionSection title="strenght" type="number" addAction={handleStrenght} removeAction={handleRemoveStrenght} />
                <ActionSection title="Pasti" type="number" addAction={handlePasti} removeAction={handleRemovePasti}  />
                <ActionSection title="Corone" type="number" addAction={handleCorone} removeAction={handleRemoveCorone}/>
                <ActionSection title="Armamenti" addAction={handleArmamento} removeAction={handleRemoveArmamento}/>
                <ActionSection title="Oggetti zaino" addAction={handleZaino} removeAction={handleRemoveZaino} />
                <ActionSection title="Oggetti speciali" addAction={handleSpecial} removeAction={handleRemoveSpecial} />
                <BonusSection addAction={handleBonus} removeAction={handleRemoveBonus}  />
              </div>
              <form className="flex flex-col gap-4 mt-10" action={handleSave}>
                <h2 className="font-bold text-xl underline">Save progress</h2>
                <input type="number" className={`${inputBasestyle}`} name="chapter" />
                <button type="submit" className={`${baseButtonStyle} uppercase`} >Save</button>
              </form>
          </div>
      </div>
    )
}