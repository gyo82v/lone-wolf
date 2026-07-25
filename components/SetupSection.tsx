import { Dispatch, SetStateAction } from "react";
import type { Hero } from "@/types/hero";

type Props = {
  setHero: Dispatch<SetStateAction<Hero>>;
};

export default function SetupSection({setHero}:Props){
    return(
        <section>
            <form className="flex flex-col gap-5 justify-center items-center">
                <input placeholder="resistenza" type="number" />
                <input placeholder="combattivita" type="number" />
                <input placeholder="borsa" type="number" />
                <input placeholder="oggetti" type="text" />
                <input placeholder="pasti" type="number" />
                <input placeholder="oggetti speciali" type="text" />
                <div>
                    <input placeholder="bonus name" type="text" />
                    <input placeholder="bonus value" type="number" />
                </div>
                <div>
                    <select>
                        <option>Guarigione</option>
                        <option>Mimetismo</option>
                        <option>Orientamento</option>
                        <option>Psicoschermo</option>
                        <option>Psicolaser</option>
                        <option>Scherma</option>
                        <option>Sesto senso</option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                    <button>
                        add
                    </button>
                </div>

            </form>
            <button>button here</button>
        </section>
    )
}