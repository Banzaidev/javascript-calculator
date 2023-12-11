import $ from "jquery";
import './numberButtons.css'

export default function NumberButtons(id, value){
    return(
        `<button value=${value} id=${id}>${value}</button>`
    )
}