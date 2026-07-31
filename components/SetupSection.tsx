import type { Hero } from "@/types/hero";
import { baseButtonStyle } from "@/styles/button";
import { inputBasestyle } from "@/styles/input";
import { SmallDivider} from "./ui/dividers";
import List from "@/components/ui/List"
import ListBonus from "@/components/ui/ListBonus";
import { randomNumber } from "@/lib/randomNumberGenerator";
import { Dispatch, SetStateAction } from "react";
import { loadGame } from "@/firebase/loneWolf";

type Props = {
  hero: Hero
  handleStats?: (value:number, key:string) => void
  addItemToArray?: (item:string, key:string) => void
  addItemToZaino?: (item:string) => void
  handlePasti?: (amount:1|-1) => void
  addBonus?: (name:string, value:number) => void
  setShowGame:  Dispatch<SetStateAction<boolean>>
  setShowSetup:  Dispatch<SetStateAction<boolean>>
  setHealth: Dispatch<SetStateAction<number>>
  setStrenght:  Dispatch<SetStateAction<number>>
  setGameStarted: Dispatch<SetStateAction<boolean>>
  setHero: Dispatch<SetStateAction<Hero>>
  setChapter: Dispatch<SetStateAction<number>>
};

export default function SetupSection({hero, handleStats, addItemToArray, addItemToZaino, handlePasti, addBonus, setShowGame, setShowSetup, setHealth, setStrenght, setGameStarted, setHero, setChapter}:Props){

    const handleResistenza = (formData: FormData) => {
      if(!handleStats) return
      const prevResistenza = Number(formData.get("resistenza"));
      const resistenza = randomNumber() + 20
      if(prevResistenza){
        handleStats(prevResistenza, "resistenza")
      }else{
        handleStats(resistenza, "resistenza")
      }
    }

    const handleCombattivita = (formData: FormData) => {
      if(!handleStats) return
      const prevCombattivita = Number(formData.get("combattivita"))
      const combattivita = randomNumber() + 10
      if(prevCombattivita){
        handleStats(prevCombattivita, "combattivita")
      }else{
        handleStats(combattivita, "combattivita")
      }
    }

    const handleCorone = (formData: FormData) => {
      if(!handleStats) return
      const prevCorone = Number(formData.get("corone"))
      const corone = randomNumber() + 10
      if(prevCorone){
        const totalCorone = prevCorone + corone
        handleStats(totalCorone, "borsa")
      }else{
        handleStats(corone, "borsa")
      }
    }

    const handleArmamento = (formData: FormData) => {
      if(!addItemToArray) return
      const armamento = formData.get("armamento")
      if (typeof armamento !== "string" || armamento.trim() === "") return;
      addItemToArray(armamento, "armamento")
    }

    const handleAddItemToZaino = (formData: FormData) => {
      if(!addItemToZaino) return
      const item = formData.get("item")
      if(typeof item !== "string" || item.trim() === "") return
      addItemToZaino(item)
    }

    const handleAddSpecialOggetti = (formData:FormData) => {
      if(!addItemToArray) return
      const specialitem = formData.get("special")
      if(typeof specialitem !== "string" || specialitem.trim() === "") return
      addItemToArray(specialitem, "oggettiSpeciali")
    }

    const handleAddBonus = (formData: FormData) => {
      if(!addBonus) return
      const name = formData.get("name")
      const value = formData.get("value")
      const numberValue = Number(value)
      if(typeof name !== "string" || name.trim() === "") return
      if(typeof numberValue !== "number" || !value) return
      addBonus(name, numberValue)
    }

    const handleAddArtiRamas = (formData:FormData) => {
      if(!addItemToArray) return
      const arte = formData.get("arte")
      if(typeof arte !== "string" || arte.trim() === "") return
      addItemToArray(arte, "artiRamas")
    }

    const handleAddPasti = () => {
      if(!handlePasti) return
      handlePasti(1)
    }

    const handleStart = () => {
      setHealth(hero.resistenza)
      setStrenght(hero.combattivita)
      setGameStarted(true)
      setShowGame(true)
      setShowSetup(false)
      setChapter(0)
    }

    const handleLoadGame = async () => {
      const data = await loadGame()
      if(!data){
        console.log("no save data found.")
        return
      }
      setHero(data.hero)
      setChapter(data.chapter)
      setGameStarted(true)
      setShowGame(true)
      setShowSetup(false)
    }

    return(
        <section className="flex flex-col items-center">
            <h2 className="mb-10 text-xl font-bold">Set up</h2>
            <div className="flex gap-10 w-8/12">
                <div className="flex flex-col gap-5 border-2 border-stone-500 rounded-lg p-8 w-full">
                  <form className="flex flex-col gap-3" action={handleResistenza}>
                    <p className="font-bold ">Add Resistenza:</p>
                    <input className={`${inputBasestyle}`} type="number" placeholder="optionally use old value" name="resistenza" />
                    <button type="submit" className={`${baseButtonStyle} w-1/2 uppercase`}>Save</button>
                  </form>
                  <SmallDivider />
                  <form className="flex flex-col gap-3" action={handleCombattivita}>
                    <p className="font-bold ">Add Combattivita</p>
                    <input className={`${inputBasestyle}`} type="number" placeholder="optionally use old value" name="combattivita" />
                    <button type="submit" className={`${baseButtonStyle} w-1/2 uppercase`}>Save</button>
                  </form>
                  <SmallDivider />
                  <form className="flex flex-col gap-3" action={handleCorone}>
                    <p className="font-bold">Add corone in borsa</p>
                    <input className={`${inputBasestyle}`} type="number" name="corone" placeholder="optionally add corone"/>
                    <button type="submit" className={`${baseButtonStyle} w-1/2 uppercase`}>Save</button>
                  </form>
                  <SmallDivider />
                  <form className="flex flex-col gap-3" action={handleArmamento}>
                    <p className="font-bold">Add armamento</p>
                    <input className={`${inputBasestyle}`} type="text" name="armamento"/>
                    <button type="submit" className={`${baseButtonStyle} w-1/2 uppercase`}>Add</button>
                  </form>
                  <SmallDivider />
                  <form className="flex flex-col gap-3" action={handleAddItemToZaino}>
                    <p className="font-bold">Add oggetti in Zaino</p>
                    <input className={`${inputBasestyle}`} type="text" name="item" />
                    <button type="submit" className={`${baseButtonStyle} w-1/2 uppercase`}>Add</button>
                  </form>
                  <SmallDivider />
                  <form className="flex flex-col gap-3" action={handleAddPasti}>
                    <p className="font-bold">Add pasti in Zaino</p>
                    <button type="submit" className={`${baseButtonStyle} w-1/2 uppercase`}>Add</button>
                  </form>
                  <SmallDivider />
                  <form className="flex flex-col gap-3" action={handleAddSpecialOggetti}>
                    <p className="font-bold">Add oggetti speciali</p>
                    <input className={`${inputBasestyle}`} type="text" name="special" />
                    <button type="submit" className={`${baseButtonStyle} w-1/2 uppercase`} >Add</button>
                  </form>
                  <SmallDivider />
                  <form className="flex flex-col gap-3" action={handleAddBonus}>
                    <p className="font-bold">Add bonus</p>
                    <div>
                      <label htmlFor="name" className="uppercase">Name</label>
                      <input className={`${inputBasestyle}`} type="text" name="name" id="name" />
                    </div>
                    <div>
                      <label htmlFor="value" className="uppercase">Value</label>
                      <input className={`${inputBasestyle}`} type="number" name="value" id="value" />
                    </div>
                    <button type="submit" className={`${baseButtonStyle} w-1/2 uppercase`}>Add</button>
                  </form>
                  <SmallDivider />
                  <form className="flex flex-col gap-3" action={handleAddArtiRamas}>
                    <p className="font-bold">Select arti ramas</p>
                    <select name="arte">
                      <option value="Guarigione">Guarigione</option>
                      <option value="Mimetismo">Mimetismo</option>
                      <option value="Orientamento">Orientamento</option>
                      <option value="Psicoschermo">Psicoschermo</option>
                      <option value="Psicolaser">Psicolaser</option>
                      <option value="Scherma">Scherma</option>
                      <option value="Sesto-senso">Sesto senso</option>
                      <option value="Caccia">Caccia</option>
                      <option value="Affinita-animale">Affinita animale</option>
                      <option value="Telecinesi">Telecinesi</option>
                    </select>
                    <button type="submit" className={`${baseButtonStyle} w-1/2 uppercase`}>Add</button>
                  </form>
                </div>
                <div className="border-2 border-stone-500 rounded-lg p-4 w-full">
                    <h3 className="font-bold text-xl mb-6">Lone Wolf</h3>
                    <div className="flex flex-col gap-3">
                      <p className="font-bold">Resistenza: <span className="font-light">{hero?.resistenza}</span></p>
                      <p className="font-bold">Combattivita: <span className="font-light">{hero?.combattivita}</span></p>
                      <p className="font-bold">Borsa: <span className="font-light">{hero?.borsa}</span></p>
                      <p className="font-bold">Pasti: <span className="font-light">{hero?.zaino?.pasti}</span></p>
                      <List title="Armamenti" array={hero?.armamento} />
                      <List title="Oggetti zaino" array={hero?.zaino?.oggetti} />
                      <List title="Oggetti speciali" array={hero?.oggettiSpeciali} />
                      <List title="Arti ramas" array={hero?.artiRamas} />
                      <ListBonus title="Bonus" array={hero?.bonus} />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-5 my-10 w-full">
                <button className={`${baseButtonStyle} w-1/4`} onClick={handleStart}>
                  Start game
                </button>
                <button className={`${baseButtonStyle} w-1/4`} onClick={handleLoadGame}>
                  Load game
                </button>
            </div>
        </section>
    )
}