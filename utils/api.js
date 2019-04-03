import {AsyncStorage} from 'react-native'

export function submitEntry({entry,key}){
  return AsyncStorage.mergeItem('name',JSON.stringify({
    [key]:entry,
  }))
}
