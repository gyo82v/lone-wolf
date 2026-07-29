import { baseButtonStyle } from "@/styles/button"
import { inputBasestyle } from "@/styles/input"

type Props = {
    addAction?: (formData:FormData) => void
    removeAction?: (formData:FormData) => void
}

export default function BonusSection({addAction, removeAction}:Props){
    return(
        <div>
            <h2 className="font-semibold text-lg mb-2">Bonus</h2>
            <div className="flex gap-4">
              <form action={addAction} className="flex gap-2">
                <button type="submit" className={`${baseButtonStyle} uppercase`}>Add</button>
                <input className={`${inputBasestyle}`} type="text" placeholder="name" name="name" />
                <input className={`${inputBasestyle}`} type="number" placeholder="value" name="value" />
             </form>
             <form action={removeAction} className="flex gap-2">
                <button type="submit" className={`${baseButtonStyle} uppercase`}>Remove</button>
                <input className={`${inputBasestyle}`} type="text" placeholder="name" name="name" />
            </form>
            </div>
        </div>
    )
}