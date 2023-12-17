import { configureStore, createAction, createReducer} from "@reduxjs/toolkit";


export const basicOperation = createAction('basicOperation')
export const submit = createAction('submit')
export const addNumber = createAction('addNumber')


const initialState = {
    'value': '',
    'tempValue': ''
}




/* const valueReducer = createReducer(initialState, (builder) => {
    builder.addCase(addNumber, (state,action) => {
        if(state.value != '0'){
            state.value += action.payload
        }
        
    })
    
    builder.addCase(basicOperation, (state,action) => {
        if(state.value != ''){
            switch(action.payload){
                case '+':
                    state.tempValue += parseFloat(state.value)
                    state.value = ''
                    break
                case '-':
                    state.tempValue -= parseFloat(state.value)
                    state.value = ''
                    break
                case 'x':
                    if(state.tempValue == 0){
                        state.tempValue = 1
                    }
                    state.tempValue *= parseFloat(state.value)
                    state.value = ''
                    break
                case '/':
                    if(state.tempValue == 0){
                        state.tempValue = 1
                    }
                    state.tempValue /= parseFloat(state.value)
                    state.value = ''
                default:
                    break
            }
        }

    })

    builder.addCase(submit, (state) => {
        state.value = state.tempValue
        state.tempValue = 0
    })
}) */

const valueReducer = createReducer(initialState, (builder) =>{
    

    builder.addCase(addNumber, (state,action) => {
        if(state.value != '0'){
            state.value += action.payload
            
        }
        
    })

    builder.addCase(basicOperation, (state,action) => {
        if(state.value != ''){
            switch(action.payload){
                case '+':
                case '-':
                case 'x':
                case '/':
                    let isValid = state.value
                    isValid += action.payload

                    let checkSymbols = (isValid.match(/[x+-\/]+/gm))
                    if(checkSymbols.every((el) => el.length < 2)){
                        state.value += action.payload
                    }
                    
                    break
                default:
                    break
            }
        }

    })


    builder.addCase(submit, (state) => {
        
    })
})

export const valueStore = configureStore({reducer: valueReducer})