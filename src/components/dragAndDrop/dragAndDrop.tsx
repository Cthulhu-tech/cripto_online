import { DragAndDropPropsType } from './type'
import './dragAndDrop.scss'

export const DragAndDrop = ({children, size} : DragAndDropPropsType) => {

    return <div className='dragAndDrop' style={size}>{children}</div>
}