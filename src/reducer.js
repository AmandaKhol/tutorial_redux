//import { BUG_ADDED, BUG_REMOVED} from './actionTypes'
import * as actions from './actionTypes'

let lastId = 0

export default function reducer(state = [], action){
    switch (action.type){
        case actions.BUG_ADDED:
            return [
                ...state,
                {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }];
        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id != action.payload.id)

        case actions.BUG_RESOLVED:
            const changeItem = state.find(bug => bug.id == action.payload.id).resolved = true;

            // return state.map(bug=> 
            //bug.id != action.payload.id ? bug : {...bug, resolved: true})
            return state
        default:   
            return state;                 
    }
}

        
