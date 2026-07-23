export type Hero = {
  resistenza: number,
  combattivita: number,
  armamento: string[],
  artiRamas: string[],
  borsa: number,
  oggettiSpeciali: string[],
  zaino: {
    oggetti: string[];
    pasti: string[];
  };
  bonus: {
    name: string;
    value: number;
  }[];
}