import { Hero } from "@/types/hero"
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


export default function HeroSection({hero}:{hero: Hero}) {
    return(
        <section className={`p-6 mx-auto flex max-w-4xl gap-10`}>
            <div className={`shadow-xl bg-stone-200 p-4 rounded-lg w-full flex flex-col gap-8 `}>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <FaHeart className="text-red-500 h-6 w-6" />
                        {hero?.resistenza}
                    </div>
                    <div className="flex items-center gap-2">
                        <GiCrossedSwords className="text-stone-600 h-6 w-6"/>
                        {hero?.combattivita}
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <GiOpenBook className="text-gray-400 h-6 w-6" />
                        <p className="font-semibold text-lg">Arti Ramas:</p>
                    </div>
                    <ul className="list-decimal ml-4">
                        {hero.artiRamas.map(a => <li key={a}>{a}</li> )}
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <FaCirclePlus className="text-blue-500 h-6 w-6" />
                        <p className="font-semibold text-lg">Bonus:</p>
                    </div>
                    {hero.bonus.length > 0 ? 
                        <ul>
                          {hero.bonus.map(b => <li key={b.name}>{b.name}: {b.value}</li>)}
                        </ul> : "No bonus yet;"
                    }
                </div>
            </div>
            <div className={`bg-stone-200 shadow-xl p-4 rounded-lg w-full flex flex-col gap-8`}>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <GiSwapBag className="text-yellow-700 h-6 w-6" />
                        <p>{hero.borsa}<span className="font-extralight text-xs">(Max:50)</span></p>
                    </div>
                    <div className="flex items-center gap-2">
                        <GiMeal className="text-amber-800 h-6 w-6" />
                        <p>{hero.zaino.pasti}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <FaShieldHalved className="text-gray-400 h-6 w-6" />
                        <p className="font-semibold text-lg">Armamenti<span className="font-extralight text-xs">(Max:2)</span>:</p>
                    </div>
                    {hero.armamento.length > 0 ?
                        <ul className="list-decimal ml-4">
                          {hero.armamento.map(a => <li key={a}>{a}</li>)}
                        </ul> :
                        "no armamenti yet..."
                    }
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <GiBackpack className="text-amber-900 h-6 w-6" />
                        <p className="font-semibold text-lg">Oggetti zaino<span className="font-extralight text-xs">(Max:8, pasti included)</span></p>
                    </div>
                    {hero.zaino.oggetti.length > 0 ?
                        <ul className="list-decimal ml-4">
                          {hero.zaino.oggetti.map(o => <li key={o}>{o}</li>)}
                        </ul> :
                        "The zaino is empty..."
                    }
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <GiEmerald className="text-purple-500 h-6 w-6" />
                        <p className="font-semibold text-lg">Oggetti speciali: </p>
                    </div>
                    {hero.oggettiSpeciali.length > 0 ? 
                        <ul className="list-decimal ml-4">
                          {hero.oggettiSpeciali.map(o => <li key={o}>{o}</li>)}
                        </ul> : 
                        "No oggetti speciali yet..."
                    }
                </div>
            </div>
        </section>
    )
}