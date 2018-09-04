import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

const SomeComponent = ({dispatch}) => (
    <button onClick={e => {
        dispatch({type: 'some action'})
    }}>Some button</button>
)

const SomeContainer = connect()(SomeComponent)

const someReducer = (state = {someDefaultProperty: 'some state'}, action) => {
    switch (action.type) {
        case 'some action': 
            alert('Some action was dispatched')
            return {someNewAttribute: 'some new state'}
        defualt: 
            return state
    }
}

const someStore = createStore(someReducer)

ReactDOM.render(
    <Provider store={someStore}>    
        <SomeContainer/>
    </Provider>,
    document.getElementById('root')
)