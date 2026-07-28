type Props = {
    title?: string,
    array: {name:string, value:number}[]
}


export default function ListBonus({title, array}:Props){
    return(
        <div>
            <p className="font-bold">{title}:</p>
            <span>
                {array?.length > 0 ?
                 <ul className="list-disc ml-5">
                    {array.map(i => <li key={i.name}>{i.name} : {i.value}</li>)}
                 </ul> :
                "No items yet..."}
            </span>

        </div>
    )
}