import { valueStore } from './store';
import { basicOperation, submit, clear } from './store';

export const numbers = [
    {
        id: 'zero',
        value: 0
    },
    {
        id: 'one',
        value: 1
    },
    {
        id: 'two',
        value: 2
    },
    {
        id: 'three',
        value: 3
    },
    {
        id: 'four',
        value: 4
    },
    {
        id: 'five',
        value: 5
    },
    {
        id: 'six',
        value: 6
    },
    {
        id: 'seven',
        value: 7
    },
    {
        id: 'eight',
        value: 8
    },
    {
        id: 'nine',
        value: 9
    },
    {
        id: 'decimal',
        value: '.'
    }
]

export const operations = [
    {
        id:'add',
        value: '+',
    },
    {
        id:'subtract',
        value: '-',
    },
    {
        id:'multiply',
        value: 'x',
    },
    {
        id:'divide',
        value: '\/',
    },
    {
        id: 'equals',
        value: '=',
        
    },
    {
        id: 'clear',
        value: 'AC',
    }
]