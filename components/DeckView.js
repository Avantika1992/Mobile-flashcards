import React,{Component} from 'react'
import {View,Text,Slider,StyleSheet,TextInput,ListItem,List,TouchableOpacity} from 'react-native'
import {deckAdding} from './AddDeck'
import {purple,white,black,red} from '../utils/colors'
import AddCard from './AddCard'

class DeckView extends Component{
  onButtonPress=()=>{
    this.props.navigation.navigate('AddCard')
  }
  render(){
  return(
   <View>
   <Text style={styles.textDeck}>Deck N</Text>
   <Text style={styles.textCard}>N cards</Text>
   <TouchableOpacity  style = {styles.submitButton}>
   <Text onPress={this.onButtonPress} style = {styles.submitButtonText}>Add Card</Text>
   </TouchableOpacity>
   <TouchableOpacity  style = {styles.submitButton}>
   <Text style = {styles.submitButtonText}>Start Quiz</Text>
   </TouchableOpacity>
   <TouchableOpacity  style = {styles.submitButtondel}>
   <Text style = {styles.submitButtonTextdel}>Delete Deck</Text>
   </TouchableOpacity>
   </View>
 )
}
}


export default DeckView

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   textDeck:{
     textAlign: 'center',
     fontSize: 30,
     margin:10
   },
   textCard:{
     textAlign: 'center',
     fontSize: 20,
     margin:10,
     color: 'grey'
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: purple,
      borderWidth: 1,
      margin:10
   },
   submitButton: {
      backgroundColor: purple,
      alignItems: 'center',
      padding: 10,
      margin: 5,
      height: 40,
      margin:20
   },
   submitButtonText:{
      color: white
   },
   submitButtondel: {
      backgroundColor: white,
      alignItems: 'center',
      padding: 10,
      margin: 15,
      height: 40,
      margin:60
   },
   submitButtonTextdel:{
      color: red
   }
})
