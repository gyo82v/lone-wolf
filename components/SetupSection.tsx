import { Dispatch, SetStateAction } from "react";
import type { Hero } from "@/types/hero";
import { baseButtonStyle } from "@/styles/button";
import { inputBasestyle } from "@/styles/input";
import { SmallDivider} from "./ui/dividers";

type Props = {
  setHero: Dispatch<SetStateAction<Hero>>;
  hero: Hero
};

export default function SetupSection({setHero, hero}:Props){
    console.log(hero?.zaino?.oggetti)
    return(
        <section className="flex flex-col items-center">
            <h2 className="mb-10">Set up</h2>
            <div className="flex gap-10 w-8/12">
                <div className="flex flex-col gap-5 border-2 border-stone-500 rounded-lg p-8 w-full">
                  <div className="flex flex-col gap-3">
                    <p className="font-bold ">Add Resistenza:</p>
                    <button className={`${baseButtonStyle} w-1/2 uppercase`}>Add</button>
                  </div>
                  <SmallDivider />
                  <div className="flex flex-col gap-3">
                    <p className="font-bold ">Add Combattivita</p>
                    <button className={`${baseButtonStyle} w-1/2 uppercase`}>Add</button>
                  </div>
                  <SmallDivider />
                  <div className="flex flex-col gap-3">
                    <p className="font-bold">Add Corone in Borsa</p>
                    <button className={`${baseButtonStyle} w-1/2 uppercase`}>Add</button>
                  </div>
                  <SmallDivider />
                  <div className="flex flex-col gap-4">
                    <label htmlFor="oggettin" className="font-bold ">Add oggetti in zaino</label>
                    <input id="oggetti" type="text" className={`${inputBasestyle}`} />
                    <button className={`${baseButtonStyle} w-1/2 uppercase`}>Add</button>
                  </div>
                  <SmallDivider />
                  <div className="flex flex-col gap-4">
                    <label htmlFor="pasti" className="font-bold ">Add pasti in zaino</label>
                    <input id="pasti" type="number" className={`${inputBasestyle}`} />
                    <button className={`${baseButtonStyle} w-1/2 uppercase`}>Add</button>
                  </div>
                  <SmallDivider />
                  <div className="flex flex-col gap-4">
                    <label htmlFor="speciali" className="font-bold ">Add oggetti speciali</label>
                    <input id="speciali" type="text" className={`${inputBasestyle}`} />
                    <button className={`${baseButtonStyle} w-1/2 uppercase`}>Add</button>
                  </div>
                  <SmallDivider />
                  <div className=" flex flex-col gap-4">
                    <p className="font-bold ">Add bonus</p>
                    <div>
                        <label className="uppercase" htmlFor="name">Name</label>
                        <input type="text" id="name" className={`${inputBasestyle}`} />
                    </div>
                    <div>
                        <label className="uppercase" htmlFor="value">Value</label>
                        <input type="number" id="value" className={`${inputBasestyle}`} />
                    </div>
                    <button className={`${baseButtonStyle} w-1/2 uppercase`}>Add</button>
                  </div>
                  <SmallDivider />
                  <div className="flex flex-col gap-4">
                    <p className="font-bold">Select arti ramas</p>
                    <select>
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
                    <button className={`${baseButtonStyle} w-1/2 uppercase`}>Add</button>
                  </div>
                </div>
                <div className="border-2 border-stone-500 rounded-lg p-4 w-full">
                    <h3 className="font-bold text-lg">Lone Wolf</h3>
                    <p>Resistenza: <span>{hero?.resistenza}</span></p>
                    <p>Combattivita: <span>{hero?.combattivita}</span></p>
                    <p>Borsa: <span>{hero?.borsa}</span></p>
                    <div>oggetti zaino: 
                        <span className="ml-2">
                            {hero?.zaino?.oggetti.length > 0 ? 
                             <ul>
                              {hero.zaino.oggetti.map(o => { ( <li key={o}>{o}</li>)})}
                              </ul>
                             :
                             "The Zaino is empty."}
                        </span>
                    </div>
                    <p>Pasti: <span>{hero?.zaino?.pasti}</span></p>
                    <p>Oggetti speciali: <span>speciali here</span></p>
                    <p>Arti ramas: <span> arti ramas here</span></p>
                    <p>Bonus: <span>bonus here</span></p>
                </div>
            </div>
            <div>
                <button>Start game</button>
                <button>Load game</button>
            </div>
        </section>
    )
}