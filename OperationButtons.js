import $ from "jquery";
import './operationButtons.css';

export default function OperationButtons(id, value){
    return(
        `<button id=${id} value=${value}>${value}</button>`
    )
}