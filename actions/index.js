export const DECKS='DECKS'
export const ADD_DECK='ADD_DECK'

export function decks(){
  return{
    type:DECKS,
  }
}

export function addDeck(dek){
  return{
    type:ADD_DECK,
    dek
  }
}
