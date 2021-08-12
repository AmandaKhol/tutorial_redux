
import * as actions from './actionTypes';


export const bugAdded= descriptionInput=>(
 { 
    type: actions.BUG_ADDED,
    payload: {
        description: descriptionInput
    }}
)

export const bugResolved = id => ({
    type: actions.BUG_RESOLVED,
    payload: {
        id //tambien es valido asi
    }

})