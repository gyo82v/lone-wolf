import { randomNumber } from "./randomNumberGenerator";


export function combat(rapportoForza:number, lupoSolitarioHP:number, enemyHP:number ){
    const randomInt = randomNumber();
    
    
    if( randomInt === 1){
        if(rapportoForza <= -11){
            lupoSolitarioHP = 0;
        }else if(rapportoForza === -10 || rapportoForza === -9){
            lupoSolitarioHP = 0;
        }else if(rapportoForza === -8 || rapportoForza === -7){
            lupoSolitarioHP -= 8;
        }else if(rapportoForza === -6 || rapportoForza === -5){
            lupoSolitarioHP -= 6;
        }else if(rapportoForza === -4 || rapportoForza === -3){
            lupoSolitarioHP -= 6;
            enemyHP -= 1;
        }else if(rapportoForza === -2 || rapportoForza === -1 || rapportoForza === 0){
            lupoSolitarioHP -= 5
            enemyHP -= 3;
        }else if(rapportoForza === 1 || rapportoForza === 2){
            lupoSolitarioHP -= 5;
            enemyHP -= 4;
        }else if(rapportoForza === 3 || rapportoForza === 4){
            lupoSolitarioHP -= 4;
            enemyHP -= 5;
        }else if(rapportoForza === 5 || rapportoForza === 6){
            lupoSolitarioHP -= 4;
            enemyHP -= 6;
        }else if(rapportoForza === 7 || rapportoForza === 8){
            lupoSolitarioHP -= 4;
            enemyHP -= 7;
        }else if(rapportoForza === 9 || rapportoForza === 10){
            lupoSolitarioHP -= 3;
            enemyHP -= 8;
        }else if(rapportoForza >= 11){
            lupoSolitarioHP -= 3;
            enemyHP -= 9;
        }else{
            console.log("no valid number")
        }
        return {randomInt ,lupoSolitarioHP, enemyHP}
    }else if(randomInt === 2){
        if(rapportoForza <= -11){
            lupoSolitarioHP = 0;
        }else if(rapportoForza === -10 || rapportoForza === -9){
            lupoSolitarioHP -= 8;
        }else if(rapportoForza === -8 || rapportoForza === -7){
            lupoSolitarioHP -= 7;
        }else if(rapportoForza === -6 || rapportoForza === -5){
            lupoSolitarioHP -= 6;
            enemyHP -= 1
        }else if(rapportoForza === -4 || rapportoForza === -3){
            lupoSolitarioHP -= 5;
            enemyHP -= 2;
        }else if(rapportoForza === -2 || rapportoForza === -1 || rapportoForza === 0){
            lupoSolitarioHP -= 4
            enemyHP -= 4;
        }else if(rapportoForza === 1 || rapportoForza === 2){
            lupoSolitarioHP -= 4;
            enemyHP -= 5;
        }else if(rapportoForza === 3 || rapportoForza === 4){
            lupoSolitarioHP -= 3;
            enemyHP -= 6;
        }else if(rapportoForza === 5 || rapportoForza === 6){
            lupoSolitarioHP -= 3;
            enemyHP -= 7;
        }else if(rapportoForza === 7 || rapportoForza === 8){
            lupoSolitarioHP -= 3;
            enemyHP -= 8;
        }else if(rapportoForza === 9 || rapportoForza === 10){
            lupoSolitarioHP -= 3;
            enemyHP -= 9;
        }else if(rapportoForza >= 11){
            lupoSolitarioHP -= 2;
            enemyHP -= 10;
        }else{
            console.log("no valid number")
        }
        return {randomInt ,lupoSolitarioHP, enemyHP}
    }else if(randomInt === 3){
        if(rapportoForza <= -11){
            lupoSolitarioHP -= 8;
        }else if(rapportoForza === -10 || rapportoForza === -9){
            lupoSolitarioHP -= 7;
        }else if(rapportoForza === -8 || rapportoForza === -7){
            lupoSolitarioHP -= 6;
            enemyHP -= 1;
        }else if(rapportoForza === -6 || rapportoForza === -5){
            lupoSolitarioHP -= 5;
            enemyHP -= 2;
        }else if(rapportoForza === -4 || rapportoForza === -3){
            lupoSolitarioHP -= 5;
            enemyHP -= 3;
        }else if(rapportoForza === -2 || rapportoForza === -1 || rapportoForza === 0){
            lupoSolitarioHP -= 4;
            enemyHP -= 5;
        }else if(rapportoForza === 1 || rapportoForza === 2){
            lupoSolitarioHP -= 3;
            enemyHP -= 6;
        }else if(rapportoForza === 3 || rapportoForza === 4){
            lupoSolitarioHP -= 3;
            enemyHP -= 7;
        }else if(rapportoForza === 5 || rapportoForza === 6){
            lupoSolitarioHP -= 3;
            enemyHP -= 8;
        }else if(rapportoForza === 7 || rapportoForza === 8){
            lupoSolitarioHP -= 2;
            enemyHP -= 9;
        }else if(rapportoForza === 9 || rapportoForza === 10){
            lupoSolitarioHP -= 2;
            enemyHP -= 10;
        }else if(rapportoForza >= 11){
            lupoSolitarioHP -= 2;
            enemyHP -= 11;
        }else{
            console.log("no valid number")
        }
        return {randomInt ,lupoSolitarioHP, enemyHP}
    }else if(randomInt === 4){
        if(rapportoForza <= -11){
            lupoSolitarioHP -= 8;
        }else if(rapportoForza === -10 || rapportoForza === -9){
            lupoSolitarioHP -= 7;
            enemyHP -= 1;
        }else if(rapportoForza === -8 || rapportoForza === -7){
            lupoSolitarioHP -= 6;
            enemyHP -= 2;
        }else if(rapportoForza === -6 || rapportoForza === -5){
            lupoSolitarioHP -= 5;
            enemyHP -= 3;
        }else if(rapportoForza === -4 || rapportoForza === -3){
            lupoSolitarioHP -= 4;
            enemyHP -= 4;
        }else if(rapportoForza === -2 || rapportoForza === -1 || rapportoForza === 0){
            lupoSolitarioHP -= 3;
            enemyHP -= 6;
        }else if(rapportoForza === 1 || rapportoForza === 2){
            lupoSolitarioHP -= 3;
            enemyHP -= 7;
        }else if(rapportoForza === 3 || rapportoForza === 4){
            lupoSolitarioHP -= 2;
            enemyHP -= 8;
        }else if(rapportoForza === 5 || rapportoForza === 6){
            lupoSolitarioHP -= 2;
            enemyHP -= 9;
        }else if(rapportoForza === 7 || rapportoForza === 8){
            lupoSolitarioHP -= 2;
            enemyHP -= 10;
        }else if(rapportoForza === 9 || rapportoForza === 10){
            lupoSolitarioHP -= 2;
            enemyHP -= 11;
        }else if(rapportoForza >= 11){
            lupoSolitarioHP -= 2;
            enemyHP -= 12;
        }else{
            console.log("no valid number")
        }
        return {randomInt ,lupoSolitarioHP, enemyHP}
    }else if(randomInt === 5){
        if(rapportoForza <= -11){
            lupoSolitarioHP -= 7;
            enemyHP -= 1;
        }else if(rapportoForza === -10 || rapportoForza === -9){
            lupoSolitarioHP -= 6;
            enemyHP -= 2;
        }else if(rapportoForza === -8 || rapportoForza === -7){
            lupoSolitarioHP -= 5;
            enemyHP -= 3;
        }else if(rapportoForza === -6 || rapportoForza === -5){
            lupoSolitarioHP -= 4;
            enemyHP -= 4;
        }else if(rapportoForza === -4 || rapportoForza === -3){
            lupoSolitarioHP -= 4;
            enemyHP -= 5;
        }else if(rapportoForza === -2 || rapportoForza === -1 || rapportoForza === 0){
            lupoSolitarioHP -= 2;
            enemyHP -= 7;
        }else if(rapportoForza === 1 || rapportoForza === 2){
            lupoSolitarioHP -= 2;
            enemyHP -= 8;
        }else if(rapportoForza === 3 || rapportoForza === 4){
            lupoSolitarioHP -= 2;
            enemyHP -= 9;
        }else if(rapportoForza === 5 || rapportoForza === 6){
            lupoSolitarioHP -= 2;
            enemyHP -= 10;
        }else if(rapportoForza === 7 || rapportoForza === 8){
            lupoSolitarioHP -= 2;
            enemyHP -= 11;
        }else if(rapportoForza === 9 || rapportoForza === 10){
            lupoSolitarioHP -= 2;
            enemyHP -= 12;
        }else if(rapportoForza >= 11){
            lupoSolitarioHP -= 1;
            enemyHP -= 14;
        }else{
            console.log("no valid number")
        }
        return {randomInt ,lupoSolitarioHP, enemyHP}
    }else if(randomInt === 6){
        if(rapportoForza <= -11){
            lupoSolitarioHP -= 6;
            enemyHP -= 2;
        }else if(rapportoForza === -10 || rapportoForza === -9){
            lupoSolitarioHP -= 6;
            enemyHP -= 3;
        }else if(rapportoForza === -8 || rapportoForza === -7){
            lupoSolitarioHP -= 5;
            enemyHP -= 4;
        }else if(rapportoForza === -6 || rapportoForza === -5){
            lupoSolitarioHP -= 4;
            enemyHP -= 5;
        }else if(rapportoForza === -4 || rapportoForza === -3){
            lupoSolitarioHP -= 3;
            enemyHP -= 6;
        }else if(rapportoForza === -2 || rapportoForza === -1 || rapportoForza === 0){
            lupoSolitarioHP -= 2;
            enemyHP -= 8;
        }else if(rapportoForza === 1 || rapportoForza === 2){
            lupoSolitarioHP -= 2;
            enemyHP -= 9;
        }else if(rapportoForza === 3 || rapportoForza === 4){
            lupoSolitarioHP -= 2;
            enemyHP -= 10;
        }else if(rapportoForza === 5 || rapportoForza === 6){
            lupoSolitarioHP -= 1;
            enemyHP -= 11;
        }else if(rapportoForza === 7 || rapportoForza === 8){
            lupoSolitarioHP -= 1;
            enemyHP -= 12;
        }else if(rapportoForza === 9 || rapportoForza === 10){
            lupoSolitarioHP -= 1;
            enemyHP -= 14;
        }else if(rapportoForza >= 11){
            lupoSolitarioHP -= 1;
            enemyHP -= 16;
        }else{
            console.log("no valid number")
        }
        return {randomInt ,lupoSolitarioHP, enemyHP}
    }else if(randomInt === 7){
        if(rapportoForza <= -11){
            lupoSolitarioHP -= 5;
            enemyHP -= 3;
        }else if(rapportoForza === -10 || rapportoForza === -9){
            lupoSolitarioHP -= 5;
            enemyHP -= 4;
        }else if(rapportoForza === -8 || rapportoForza === -7){
            lupoSolitarioHP -= 4;
            enemyHP -= 5;
        }else if(rapportoForza === -6 || rapportoForza === -5){
            lupoSolitarioHP -= 3;
            enemyHP -= 6;
        }else if(rapportoForza === -4 || rapportoForza === -3){
            lupoSolitarioHP -= 2;
            enemyHP -= 7;
        }else if(rapportoForza === -2 || rapportoForza === -1 || rapportoForza === 0){
            lupoSolitarioHP -= 1;
            enemyHP -= 9;
        }else if(rapportoForza === 1 || rapportoForza === 2){
            lupoSolitarioHP -= 1;
            enemyHP -= 10;
        }else if(rapportoForza === 3 || rapportoForza === 4){
            lupoSolitarioHP -= 1;
            enemyHP -= 11;
        }else if(rapportoForza === 5 || rapportoForza === 6){
            enemyHP -= 12;
        }else if(rapportoForza === 7 || rapportoForza === 8){
            enemyHP -= 14;
        }else if(rapportoForza === 9 || rapportoForza === 10){
            enemyHP -= 14;
        }else if(rapportoForza >= 11){
            enemyHP -= 18;
        }else{
            console.log("no valid number")
        }
        return {randomInt ,lupoSolitarioHP, enemyHP}
    }else if(randomInt === 8){
        if(rapportoForza <= -11){
            lupoSolitarioHP -= 4;
            enemyHP -= 4;
        }else if(rapportoForza === -10 || rapportoForza === -9){
            lupoSolitarioHP -= 4;
            enemyHP -= 5;
        }else if(rapportoForza === -8 || rapportoForza === -7){
            lupoSolitarioHP -= 3;
            enemyHP -= 6;
        }else if(rapportoForza === -6 || rapportoForza === -5){
            lupoSolitarioHP -= 2;
            enemyHP -= 7;
        }else if(rapportoForza === -4 || rapportoForza === -3){
            lupoSolitarioHP -= 1;
            enemyHP -= 8;
        }else if(rapportoForza === -2 || rapportoForza === -1 || rapportoForza === 0){
            enemyHP -= 10;
        }else if(rapportoForza === 1 || rapportoForza === 2){
            enemyHP -= 11;
        }else if(rapportoForza === 3 || rapportoForza === 4){
            lupoSolitarioHP -= 4;
            enemyHP -= 12;
        }else if(rapportoForza === 5 || rapportoForza === 6){
            enemyHP -= 14;
        }else if(rapportoForza === 7 || rapportoForza === 8){
            enemyHP -= 16;
        }else if(rapportoForza === 9 || rapportoForza === 10){
            enemyHP -= 18;
        }else if(rapportoForza >= 11){
            enemyHP = 0;
        }else{
            console.log("no valid number")
        }
        return {randomInt ,lupoSolitarioHP, enemyHP}
    }else if(randomInt === 9){
        if(rapportoForza <= -11){
            lupoSolitarioHP -= 3;
            enemyHP -= 5;
        }else if(rapportoForza === -10 || rapportoForza === -9){
            lupoSolitarioHP -= 3;
            enemyHP -= 6;
        }else if(rapportoForza === -8 || rapportoForza === -7){
            lupoSolitarioHP -= 2;
            enemyHP -= 7;
        }else if(rapportoForza === -6 || rapportoForza === -5){
            enemyHP -= 8;
        }else if(rapportoForza === -4 || rapportoForza === -3){
            enemyHP -= 9;
        }else if(rapportoForza === -2 || rapportoForza === -1 || rapportoForza === 0){
            enemyHP -= 11;
        }else if(rapportoForza === 1 || rapportoForza === 2){
            enemyHP -= 12;
        }else if(rapportoForza === 3 || rapportoForza === 4){
            enemyHP -= 14;
        }else if(rapportoForza === 5 || rapportoForza === 6){
            enemyHP -= 16;
        }else if(rapportoForza === 7 || rapportoForza === 8){
            enemyHP -= 18;
        }else if(rapportoForza === 9 || rapportoForza === 10){
            enemyHP = 0;
        }else if(rapportoForza >= 11){
            enemyHP = 0;
        }else{
            console.log("no valid number")
        }
        return {randomInt ,lupoSolitarioHP, enemyHP}
    }else if(randomInt === 0){
        if(rapportoForza <= -11){
            enemyHP -= 6;
        }else if(rapportoForza === -10 || rapportoForza === -9){
            enemyHP -= 7;
        }else if(rapportoForza === -8 || rapportoForza === -7){
            enemyHP -= 8;
        }else if(rapportoForza === -6 || rapportoForza === -5){
            enemyHP -= 9;
        }else if(rapportoForza === -4 || rapportoForza === -3){
            enemyHP -= 10;
        }else if(rapportoForza === -2 || rapportoForza === -1 || rapportoForza === 0){
            enemyHP -= 12;
        }else if(rapportoForza === 1 || rapportoForza === 2){
            enemyHP -= 14;
        }else if(rapportoForza === 3 || rapportoForza === 4){
            enemyHP -= 16;
        }else if(rapportoForza === 5 || rapportoForza === 6){
            enemyHP -= 18;
        }else if(rapportoForza === 7 || rapportoForza === 8){
            enemyHP = 0;
        }else if(rapportoForza === 9 || rapportoForza === 10){
            enemyHP = 0;
        }else if(rapportoForza >= 11){
            enemyHP = 0;
        }else{
            console.log("no valid number")
        }
        return {randomInt ,lupoSolitarioHP, enemyHP}
    }else{
        console.log("no valid number")
    }
    console.log(rapportoForza)
};