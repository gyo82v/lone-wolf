import { randomNumber } from "@/lib/randomNumberGenerator";

const objects = [
  "spadone/armamento",
  "spada/armamento",
  "elmo/oggetti-speciali/+2/resistenza",
  "due-pasti",
  "cotta-di-maglia/oggetti-speciali/+4/resistenza",
  "mazza/armamento",
  "pozione-magica/zaino/+4/resistenza/una-dose",
  "asta",
  "lancia",
  "12-corone",
];


export function objectSelector(){
    return objects[randomNumber()]
}