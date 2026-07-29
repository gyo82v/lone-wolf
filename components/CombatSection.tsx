

type Props = {
    health: number,
    strenght: number,
    enemyHealth: number,
    enemyStrenght: number
}



export default function CombatSection({health, strenght, enemyHealth, enemyStrenght}:Props){
    return(
        <section>
            <p>lone wolf health: {health}</p>
            <p>lone wolf strenght: {strenght}</p>
            <p>enemy health: {enemyHealth}</p>
            <p>enemy strenght: {enemyStrenght}</p>
        </section>
    )
}