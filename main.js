import $ from 'jquery';
import './main.css'
import NumberButtons from './NumberButtons';
import OperationButtons from './OperationButtons';
import { numbers, operations } from './numberAndOperations';
import { addNumber, valueStore, basicOperation, submit,clear} from './store';



$('#app').html(
  `
    <h1 id='title'>Javascript Calculator</h1> 
    <div id='calculator'>
      <div id='display'>${valueStore.getState().value}</div>
      <div id='prevValue'></div>
      <div id='container'>
        <div id='numbers'>
          ${numbers.map((number=> NumberButtons(number.id, number.value))).join('')}
        </div>
        <div id='operations'>
          ${operations.map(operation => OperationButtons(operation.id, operation.value)).join('')}
        </div>
      
      </div>
    </div>
    <p id="author">by <a target='_blank' href='https://github.com/Banzaidev'>banzaidev</a></p>
  `
)
$.when($.ready).then(()=>{
  $('.numberButtons').on('click', (e)=>{
    valueStore.dispatch(addNumber(e.target.value))
    $('#display').html(valueStore.getState().value)
  })


  $('.operationButtons').on('click', (e) =>{
    if(e.target.value != '=' && e.target.value != 'AC'){
      valueStore.dispatch(basicOperation(e.target.value))
    }
    else if(e.target.value == '='){
      valueStore.dispatch(submit())
    }
    else{
      valueStore.dispatch(clear())
    }

    $('#display').html(valueStore.getState().value)
    $('#prevValue').html(valueStore.getState().tempValue)
  })


})
