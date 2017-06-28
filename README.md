# redux-most-factory · [![npm](https://img.shields.io/npm/v/redux-most-factory.svg)](https://npm.im/redux-most-factory)

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Examples](#examples)

## Install

```bash
yarn add redux-most-factory
  # or
npm install --save redux-most-factory
```

## Usage

Instead of doing this:

```jsx
import {select, combineEpics} from 'redux-most';

const INCREMENT_COUNTER = '@@epic/INCREMENT_COUNTER';
const DECREMENT_COUNTER = '@@epic/DECREMENT_COUNTER';

const incrementCounterEpic = action$ =>
    select(INCREMENT_COUNTER, action$)
        .map(() => ({type: 'INCREMENT'}));

const decrementCounterEpic = action$ =>
    select(DECREMENT_COUNTER, action$)
        .map(() => ({type: 'DECREMENT'}));

export const incrementCounter = () => ({
    type: INCREMENT_COUNTER,
});

export const decrementCounter = () => ({
    type: DECREMENT_COUNTER,
});

export default combineEpics([incrementCounterEpic, decrementCounterEpic]);
```

You can do this:

```jsx
import {map} from 'most';
import epicFactory from 'redux-most-factory';

const epics = {
    incrementCounter: action$ => map(() => ({type: 'INCREMENT'}), action$),
    decrementCounter: action$ => map(() => ({type: 'DECREMENT'}), action$),
};

export default epicFactory(epics, '@@epic/');
/*
 * {
 *     epic, // the result of combineEpics
 *     incrementCounter,
 *     decrementCounter,
 * }
 */
```

## Examples

- [Counter]()
