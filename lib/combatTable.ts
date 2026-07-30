export const KILL = true;

export type CombatGroup =
  | "LE_-11"
  | "-10_-9"
  | "-8_-7"
  | "-6_-5"
  | "-4_-3"
  | "-2_-1_0"
  | "1_2"
  | "3_4"
  | "5_6"
  | "7_8"
  | "9_10"
  | "GE_11";

export type CombatResult = {
  heroDamage: number;
  enemyDamage: number;
  heroKilled?: boolean;
  enemyKilled?: boolean;
};

export const combatTable: Record<
  number,
  Record<CombatGroup, CombatResult>
> = {
  // we'll fill this
};