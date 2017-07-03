# redux-most-factory · [![npm](https://img.shields.io/npm/v/redux-most-factory.svg)](https://npm.im/redux-most-factory)

I am tired of managing actions, actions creators and reducers in Redux.
Luckily, I am not alone, so there are many cool libraries simplifying
that. I am also tired of managing actions, actions creators and epics
in [`redux-most`](https://github.com/joshburgess/redux-most).
Well, I hope I am alone on this one too, but there are no such libraries
yet, so here is it. These 20 lines of code cut half of my files with
epics, and make me much happier as a result.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Examples](#examples)
- [API](#api)

## Install

```bash
yarn add redux-most-factory
  # or
npm install --save redux-most-factory
```

## Usage

First setup the [`redux-most`](https://github.com/joshburgess/redux-most),
see its documentation on how to do that.

Then instead of doing this:

```js
import {map} from 'most';
import {select, combineEpics} from 'redux-most';

/* Actions */

const INCREMENT = '@epic/INCREMENT';
const DECREMENT = '@epic/DECREMENT';

/* Epics */

const incrementEpic = (action$) => {
    const increment$ = select(INCREMENT, action$);
    return map(() => ({type: 'INCREMENT'}), increment$);
}

const decrementEpic = (action$) => {
    const decrement$ = select(DECREMENT, action$);
    return map(() => ({type: 'DECREMENT'}), decrement$);
}

/* Action Creators */

export const increment = () => ({
    type: INCREMENT,
});

export const decrement = () => ({
    type: DECREMENT,
});

export default combineEpics([incrementEpic, decrementEpic]);
```

You can do this:

```js
import {map} from 'most';
import epicFactory from 'redux-most-factory';

const epics = {
    increment: action$ => map(() => ({type: 'INCREMENT'}), action$),
    decrement: action$ => map(() => ({type: 'DECREMENT'}), action$),
};

export default epicFactory(epics, '@epic/');
/*
 * {
 *     epic, // the result of combineEpics
 *     increment,
 *     decrement,
 * }
 */
```

## Examples

A very plain example with `redux-most` and `redux-most-factory`. It's
for testing purposes mostly.

- [Counter](https://github.com/Vlad-Zhukov/redux-most-factory/tree/master/examples/counter)

## API

### epicFactory(epics, prefix)

__Arguments__

1. `epics` _(Object)_: An object of functions. Each property key will
be used as both an action type prefixed with a `prefix`, and a name of
an action creator function. An action creator takes three arguments
&ndash; `payload`, `error` (defaults to `false`) and `meta` (defaults
to `null`) &ndash; and returns a dispatchable object (action).
2. `prefix` _(String)_: It will be used to prefix all actions from the
`epics`.
