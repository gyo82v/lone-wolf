import { Dispatch, SetStateAction } from "react";
import type { Hero } from "@/types/hero";

type Props = {
  setHero: Dispatch<SetStateAction<Hero>>;
};

export default function SetupSection({setHero}:Props){
    return(
        <section>
            <p>set up here</p>
        </section>
    )
}