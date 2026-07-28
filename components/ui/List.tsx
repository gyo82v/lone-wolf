type Props = {
    array: string[],
    title?: string
}
export default function List({title, array}:Props){
    return(
        <div>
            <p className="font-bold">{title}:</p>
            <span>
                {array?.length > 0 ?
                 <ul className="list-disc ml-5">
                    {array.map(i => <li key={i}>{i}</li>)}
                 </ul> :
                "No items yet..."}
            </span>
        </div>
    )
}