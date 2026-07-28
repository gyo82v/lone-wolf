import type { Hero } from "@/types/hero"
import { Dispatch, SetStateAction } from "react";
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
        <div className="flex w-full">
            <div className="w-full">
                <HeroSection hero={hero} />
            </div>
            <div className="w-full border-2 border-stone-500 rounded-lg p-6">
                <div>
                    <h2 className="font-semibold text-lg mb-4">Current stats:</h2>
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
            </div>
        </div>
    )
}