import {DECKS} from '../actions'

export default function deck(state=null,action){
  switch(action.type){
    case DECKS:
      return {
      ...state,
    }
    default:
      return state
  }
}
