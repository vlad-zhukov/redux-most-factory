import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-most';
import Counter from './components/Counter';
import rootReducer from './reducers/';
import rootEpic from './epics/';

const epicMiddleware = createEpicMiddleware(rootEpic.epic);
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

const rootEl = document.getElementById('root');

function render() {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() => store.dispatch(rootEpic.increment())}
            onDecrement={() => store.dispatch(rootEpic.decrement())}
        />,
        rootEl
    );
}

render();
store.subscribe(render);
