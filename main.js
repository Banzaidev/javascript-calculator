import $ from 'jquery';
import './Main.css'
import NumberButtons from './NumberButtons';
import OperationButtons from './operationButtons';
import { numbers, operations } from './numberAndOperations';
import { addNumber, valueStore, basicOperation, submit } from './store';

console.log(parseFloat('32-1'))

$('#app').html(
  `
    <div id='calculator'>
      <div id='display'>
        <div id='prevValue'></div>
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
$.when($.ready).then(()=>{
  $('.numberButtons').on('click', (e)=>{
    valueStore.dispatch(addNumber(e.target.value))
    $('#display').html(valueStore.getState().value)
  })

  $('.operationButtons').on('click', (e) =>{
    console.log(e.target.value)
    if(e.target.value != '='){
      valueStore.dispatch(basicOperation(e.target.value))
    }else{
      valueStore.dispatch(submit())
    }

    $('#display').html(valueStore.getState().value)
    $('#prevValue').html(valueStore.getState().tempValue)
  })


})
