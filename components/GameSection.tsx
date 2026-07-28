import type { Hero } from "@/types/hero"
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
    hero: Hero
}

export default function GameSection({hero}:Props){
    return(
        <div>
            <HeroSection hero={hero} />
            <div>
                <p>actions here</p>
            </div>
        </div>
    )
}