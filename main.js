import $ from 'jquery';
import './Main.css'
import NumberButtons from './NumberButtons';
import OperationButtons from './operationButtons';
import { numbers, operations } from './numberAndOperations';
$('#app').html(
  `
    <div id='calculator'>
      <div id='display'>
      
      </div>
      <div id='numbers'>
        ${numbers.map((number=> NumberButtons(number.id, number.value))).join('')}
      </div>
      <div id='operations'>
        ${operations.map(operation => OperationButtons(operation.id, operation.value)).join('')}
      </div>
      
    </div>
  `
  
)
