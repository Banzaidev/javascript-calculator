import { configureStore, createAction, createReducer} from "@reduxjs/toolkit";


export const basicOperation = createAction('basicOperation')
export const submit = createAction('submit')
export const addNumber = createAction('addNumber')
export const clear = createAction('clear')

const initialState = {
    'value': '0',
    'tempValue': '0',
    'ans': '',
}


const valueReducer = createReducer(initialState, (builder) =>{

    builder.addCase(addNumber, (state,action) => {
        if(state.value == '0'){
            state.value = ''
        }
        if(!(state.value.startsWith('0'))){
            if(state.ans != ''){
                state.tempValue = ''
                state.value = ''
                state.ans = ''
            }
            else{
                state.value += action.payload
                state.tempValue = state.value
            }
        
        }

    })

    builder.addCase(basicOperation, (state,action) => {
        if(state.value != ''){
            switch(action.payload){
                case '+':
                case '-':
                case 'x':
                case '/':
                    const symbol = action.payload == 'x' ? '*' : action.payload
                    if(state.ans != ''){
                        state.tempValue = state.ans
                        state.ans = ''
                    }
                    state.value = `${state.tempValue}${symbol}`
                    
                    break
                default:
                    break
            }
        }

    })

    builder.addCase(clear, (state) => {
        state.value = '0'
        state.tempValue = '0'
        state.ans = ''
    })

    builder.addCase(submit, (state) => {
        state.ans = `${eval(state.tempValue)}`
        state.value = state.ans
    })

})

export const valueStore = configureStore({reducer: valueReducer})