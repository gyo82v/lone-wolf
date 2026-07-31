import { randomNumber } from "@/lib/randomNumberGenerator";

const weapons = [
  "pugnale",
  "lancia",
  "mazza",
  "daga",
  "martello",
  "spada",
  "ascia",
  "spada",
  "asta",
  "spadone",
];

export function weaponSelector(){
  return weapons[randomNumber()]
}