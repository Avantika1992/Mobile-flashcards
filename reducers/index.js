import {DECKS,ADD_DECK} from '../actions'

function reducer(state={},action){
  switch(action.type){
    case DECKS:
      return{
        ...state,
      }
    case ADD_DECK:
      return{
        ...state,
        ...action.dek
      }
  }
}

export default reducer
