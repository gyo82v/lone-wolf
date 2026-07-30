import { Dispatch, SetStateAction } from "react";
import {FaHeart} from "react-icons/fa6";
import {GiCrossedSwords} from "react-icons/gi";
import { baseButtonStyle } from "@/styles/button";
import { combat } from "@/lib/combat";
import {useState} from "react"

type Props = {
    health: number,
    enemyHealth: number,
    combatStrenght: number,
    setHealth: Dispatch<SetStateAction<number>>
    setEnemyHealth: Dispatch<SetStateAction<number>>
    setShowGame: Dispatch<SetStateAction<boolean>>
    setShowCombat: Dispatch<SetStateAction<boolean>>
    setGameOver: Dispatch<SetStateAction<boolean>>
}

export default function CombatSection({health, enemyHealth, combatStrenght, setHealth, setEnemyHealth, setShowGame, setShowCombat, setGameOver}:Props){

    const [text, setText] = useState({wolf: 0, enemy:0, randomNumber:0})
    const [battleWon, setBattleWon] = useState(false)


    const handleCombat = () => {
      const result = combat(combatStrenght, health, enemyHealth)
      if(!result) throw new Error("cannot complie result")
      setText(t => ({...t, wolf: health - result.lupoSolitarioHP}))
      setText(t => ({...t, enemy: enemyHealth - result.enemyHP}))
      setText(t => ({...t, randomNumber: result.randomInt}))
      setHealth(result.lupoSolitarioHP)
      setEnemyHealth(result.enemyHP)
      if(health <= 0) setGameOver(true)
      if(enemyHealth <= 0) setBattleWon(true)

      console.log("result: ", result)
    }

    const handleBattleWon = () => {
        setShowCombat(false)
        setShowGame(true)
        setBattleWon(false)
        setText({wolf: 0, enemy:0, randomNumber:0})
    }
    return(
        <section className="flex flex-col gap-5 w-11/12 mx-auto mt-20  ">
            <div className="flex w-full gap-5">
                <div className="flex-1 flex flex-col gap-6 px-5 py-20 bg-stone-200 items-center ">
                  <div className="flex flex-col items-center">
                    <FaHeart className="text-red-500 h-9 w-9" />
                    <h2 className="font-bold text-2xl">Lone Wolf</h2>
                  </div>
                  <p className="font-semibold text-xl">{health}</p>
                </div>
                <div className="flex-1 flex flex-col gap-4 px-5 py-20 items-center bg-stone-400 ">
                  <div className="flex flex-col items-center">
                    <GiCrossedSwords className="text-stone-800 h-9 w-9" />
                    <p className="font-semibold text-xl">{combatStrenght}</p>
                  </div>
                  <button onClick={handleCombat} className={`${baseButtonStyle} uppercase`}>Combat</button>
                </div>
                <div className="flex-1 flex flex-col gap-6 px-5 py-20 bg-stone-200 items-center">
                  <div className="flex flex-col items-center ">
                    <FaHeart className="text-red-500 h-9 w-9" />
                    <h2 className="font-bold text-2xl">Enemy</h2>
                  </div>
                  <p className="font-semibold text-xl">{enemyHealth}</p>
                </div>
            </div>
            <div className="flex flex-col gap-7">
                <div className="flex flex-col items-center">
                    <h2 className="font-semibold text-lg underline">battle result:</h2>
                    <div className="flex gap-3">
                        <p>Lone Wolf: {text.wolf}</p>
                        <p>Enemy: {text.enemy}</p>
                        <p>Number: {text.randomNumber}</p>
                    </div>
                </div>
                {battleWon && 
                    <div className="flex flex-col gap-3 items-center">
                        <p className="font-bold text-2xl">Battle won!</p>
                        <button className={`${baseButtonStyle} uppercase`}  onClick={handleBattleWon}>Continue</button>
                    </div>
                }
            </div>
        </section>
    )
}