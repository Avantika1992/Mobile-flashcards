import React,{Component} from 'react'
import {View,Text,Slider,StyleSheet,TextInput,ListItem,List,Button} from 'react-native'
import {connect} from 'react-redux'
import {deckAdding} from './AddDeck'


class Ex extends Component{
 render(){

   dec=Object.keys(this.props.arry).map((key) => {
   return (
     <Text key={key}>{this.props.arry[key]}{"\n"}</Text>
   )
})
 return(
   <View>
   <Text onPress={()=>this.props.navigation.navigate(
     'DeckView'
   )} style={styles.textdeco}>{dec}</Text>
   <Button title='hgf' onPress={()=>alert(this.props.arry)}/>
   <Text>{this.props.arry}</Text>
   <Text>{dec}</Text>
   </View>
 )
}
}



export default Ex

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
