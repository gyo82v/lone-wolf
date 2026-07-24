import { Dispatch, SetStateAction } from "react";
import type { Hero } from "@/types/hero";

type Props = {
  setHero: Dispatch<SetStateAction<Hero>>;
};

export default function SetupSection({setHero}:Props){
    return(
        <section>
            <form>
                <p>form here</p>
            </form>
            <button>button here</button>
        </section>
    )
}