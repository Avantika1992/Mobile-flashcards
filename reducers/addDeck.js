import {ADD_DECK} from '../actions'

export default function addDeck(state=null,action){
  switch(action.type){
    case ADD_DECK:
      return {
      ...state,
      ...action.dek
    }
    default:
      return state
  }
}
