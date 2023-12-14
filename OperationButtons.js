import $ from "jquery";
import './operationButtons.css';

export default function OperationButtons(id, value){
    return(
        `<button class='operationButtons' id=${id} value=${value}>${value}</button>`
    )
}