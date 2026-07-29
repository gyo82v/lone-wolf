import { baseButtonStyle } from "@/styles/button"
import { inputBasestyle } from "@/styles/input"

type Props = {
    title: string
    addAction?: (formData:FormData) => void
    removeAction?: (formData:FormData) => void
    type?: string
}

export default function ActionSection({title, addAction, removeAction, type = "text"}:Props){
    return(
        <div>
            <h2 className="font-semibold text-lg mb-2">{title}</h2>
            <div className="flex gap-8">
                <form className="flex gap-2" action={addAction}>
                  <button type="submit" className={`${baseButtonStyle} uppercase`}>Add</button>
                  <input className={`${inputBasestyle}`} name="add" type={type} />
                </form>
                <form className="flex gap-2" action={removeAction}>
                  <button type="submit" className={`${baseButtonStyle} uppercase`}>Remove</button>
                  <input className={`${inputBasestyle}`} name="remove" type={type} />
                </form>
            </div>
        </div>
    )
}