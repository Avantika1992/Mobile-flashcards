export const DECKS='DECKS'
export const ADD_DECK='ADD_DECK'
export const ADD_CARD='ADD_CARD'

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

export function addCard(que,ans){
  return{
    type:ADD_CARD,
    que,
    ans
  }
}
