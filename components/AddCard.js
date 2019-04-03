import React,{Component} from 'react'
import {View,Text,Slider,StyleSheet,TextInput,ListItem,List,TouchableOpacity} from 'react-native'
import {deckAdding} from './AddDeck'
import {purple,white,black,red} from '../utils/colors'

class AddCard extends Component{
  render(){
  return(
   <View>
   <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Question"
            placeholderTextColor = "lightgrey"
            autoCapitalize = "none"
            />
    <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "Answer"
             placeholderTextColor = "lightgrey"
             autoCapitalize = "none"
              />
    <TouchableOpacity  style = {styles.submitButtondel}>
    <Text style = {styles.submitButtonTextdel}>Submit</Text>
    </TouchableOpacity>
   </View>
 )
}
}


export default AddCard

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
      margin: 15,
      height: 40,
      margin:60
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
