/* eslint-disable import/no-extraneous-dependencies */

import {map} from 'most';
import epicFactory from 'redux-most-factory';

const epics = {
    increment: action$ => map(() => ({type: 'INCREMENT'}), action$),
    decrement: action$ => map(() => ({type: 'DECREMENT'}), action$),
};

export default epicFactory(epics, '@@epic/');
