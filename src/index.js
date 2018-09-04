import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

const ACTION1 = 'ACTION1';
const ACTION2 = 'ACTION2';
// Action Creator
const someActionCreator = (someOptionalArgument) => {
    return {
        type: someOptionalArgument,
        someOptionalAtrribute: 'some value'
    }
}

// Component
const SomeComponent = ({someComponentProperty, dispatch}) => (
    <div>
        <h2>Some Component</h2>
        <button onClick={
            () => dispatch(someActionCreator(ACTION1))
        }>Action1</button>
        <button onClick={
            () => dispatch(someActionCreator(ACTION2))
        }>Action2</button>
        <h3>{someComponentProperty}</h3>
    </div>
)

// Mapper
function someStateToPropsMapper(state) {
    return {
        someComponentProperty: state.someStateAttribute
    }
}

// Container
const SomeContainer = connect(someStateToPropsMapper)(SomeComponent)

// Reducer
const someReducer = (state = {someDefaultProperty: 'some state'}, action) => {
    switch (action.type) {
        case 'ACTION1': 
            // alert('ACTION1');
            return {someStateAttribute: 'some new state 1'}
        case 'ACTION2': 
            // alert('ACTION2');
            return {someStateAttribute: 'some new state 2'}
        default: 
            return state;
    }
}

// Store
const someStore = createStore(someReducer)

// Render
ReactDOM.render(
    <Provider store={someStore}>    
        <SomeContainer/>
    </Provider>,
    document.getElementById('root')
)