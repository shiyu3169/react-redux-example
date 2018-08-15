import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

const SomeComponent = ({dispatch}) => (
    <button onClick={e => {
        dispatch({type: 'some action'})
    }

    }>Some button</button>
)

ReactDOM.render(
    <SomeComponent/>,
    document.getElementById('root')
)