import {DECKS,ADD_DECK,ADD_CARD} from '../actions'

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
    case ADD_CARD:
      return{
        ...state,
        ...action.que,
        ...action.ans
      }
  }
}

export default reducer
