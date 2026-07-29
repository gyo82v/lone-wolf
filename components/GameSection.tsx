import type { Hero } from "@/types/hero"
import { Dispatch, SetStateAction } from "react";
import { baseButtonStyle } from "@/styles/button";
import { inputBasestyle } from "@/styles/input";
import ActionSection from "./ui/ActionSection";
import BonusSection from "./ui/BonusSection";
import {
  FaHeart,
  FaShieldHalved,
  FaCirclePlus,
} from "react-icons/fa6";
import {
  GiBackpack,
  GiSwapBag,
  GiMeal,
  GiOpenBook,
  GiEmerald,
  GiCrossedSwords,
} from "react-icons/gi";
import HeroSection from "./Hero";

type Props = {
    hero: Hero,
    health: number,
    strenght: number,
    setHealth: Dispatch<SetStateAction<number>>
    setStrenght: Dispatch<SetStateAction<number>>
}

export default function GameSection({hero, health, strenght, setHealth, setStrenght}:Props){
    return(
        <div className="flex w-11/12 gap-10">
            <div className="w-full">
                <HeroSection hero={hero} />
            </div>
            <div className="w-full border-2 border-stone-500 rounded-lg p-6">
                <div>
                    <h2 className="font-semibold text-lg mb-2">Current stats:</h2>
                    <div className="flex justify-between">
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
                      <button className={`${baseButtonStyle} uppercase`}>Combat</button>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                  <ActionSection title="Health" type="number" />
                  <ActionSection title="strenght" type="number" />
                  <ActionSection title="Pasti" type="number"  />
                  <ActionSection title="Corone" type="number"/>
                  <ActionSection title="Armamenti"  />
                  <ActionSection title="Oggetti zaino" />
                  <ActionSection title="Oggetti speciali" />
                  <BonusSection  />
                </div>

          
            </div>
        </div>
    )
}