import { dropListType } from "./type"
import { useState } from "react"
import './dropList.scss'

export const DropList = ({array, start, callback} : dropListType) => {

    const [open, setOpen] = useState(false)
    const setData = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        changeOpen()
        callback(event.currentTarget.innerText)
    }

    const changeOpen = () => setOpen(!open)

    return <div className="drop-list">
        <div className="drop-list-option">
            <li className="drop-list-text">{start}</li>
            <div className={open ? "drop-list-button open" : "drop-list-button"} onClick={changeOpen}></div>
        </div>
        {open && array && <ul className="drop-container">
            {array.map((value: string) => <li className="drop-list-text" key={value} onClick={setData}>{value}</li>)}
        </ul>}
    </div>

}