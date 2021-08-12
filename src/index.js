
import store from './store';
import { bugAdded } from './actions';

import * as actions from './actionTypes';


const unsubscribe = store.subscribe(()=>{console.log("Store changed!", store.getState())})

// state = reducer(state, action)
// notify the subscribers

store.dispatch(bugAdded('Bug 1'))
//unsubscribe()

store.dispatch(bugAdded('Bug 2'))


store.dispatch({
    type: actions.BUG_RESOLVED,
    payload:{
        id:2
    }
})

store.dispatch({
    type: actions.BUG_REMOVED,
    payload:{
        id: 1
    }
})


console.log(store.getState())