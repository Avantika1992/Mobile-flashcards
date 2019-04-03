import React,{Component} from 'react'
import {View,Text,Slider,StyleSheet,TextInput,ListItem,List} from 'react-native'
import {connect} from 'react-redux'
import {deckAdding} from './AddDeck'


class Decks extends Component{

  render(){

    alert(this.props.arry)
    dec=Object.keys(deckAdding).map((key) => {
    return (
      <Text key={key}>{deckAdding[key].name}{"\n"}</Text>
    )
 })
 return(
   <View>
   <Text onPress={()=>this.props.navigation.navigate(
     'DeckView'
   )} style={styles.textdeco}>{dec}</Text>
   <Text>{'hi'+this.props.arry}</Text>
   </View>
 )
}
}


export default connect()(Decks)

const styles = StyleSheet.create({
   container: {
      alignItems: 'center',
      paddingTop: 23
   },
   textdeco:{
     alignItems: 'center',
     textAlign: 'center',
     fontSize: 30,
     margin:10
   }
})
