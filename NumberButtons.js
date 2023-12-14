import $ from "jquery";
import './numberButtons.css'


export default function NumberButtons(id, value){
    return(
        `<button class='numberButtons' value=${value} id=${id}>${value}</button>`
    )
}