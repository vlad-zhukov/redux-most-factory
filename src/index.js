/* eslint-disable import/no-unresolved, import/extensions */
import {select, combineEpics} from 'redux-most';

export default function epicFactory(epics, prefix) {
    const result = {};
    const epicsToCombine = [];
    const epicKeys = Object.keys(epics);

    for (let i = 0, l = epicKeys.length; i < l; i++) {
        const key = epicKeys[i];
        const type = `${prefix}${key}`;
        result[key] = payload => ({type, payload});

        const filteredEpic = (action$, store) => epics[key](select(type, action$), store);
        epicsToCombine.push(filteredEpic);
    }

    result.epic = combineEpics(epicsToCombine);

    return result;
}
