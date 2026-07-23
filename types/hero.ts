export type Hero = {
  resistenza: number,
  combattivita: number,
  armamento: string[],
  artiRamas: string[],
  borsa: number,
  oggettiSpeciali: string[],
  zaino: {
    oggetti: string[];
    pasti: number;
  };
  bonus: {
    name: string;
    value: number;
  }[];
}