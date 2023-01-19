import { ReactElement } from "react"

export type DragAndDropSize = {
    width: string
    height: string
}

export type DragAndDropPropsType = {
    children: ReactElement
    size: DragAndDropSize
}