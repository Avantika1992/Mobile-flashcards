import React,{Component} from 'react'
import {View,Text,Slider,StyleSheet,TextInput,TouchableOpacity,AsyncStorage} from 'react-native'
import {purple,white} from '../utils/colors'
import {addDeck} from '../actions'
import {connect} from 'react-redux'
import Decks from './Decks'
import {submitEntry} from '../utils/api'
import Ex from './example'

export let deckAdding=[{"name":'deck1'},{"name":'deck2'}]


class AddDeck extends Component{
  state = {
      deckAdded: '',
      arr:[]
   }
   handleDeck = (text) => {
      this.setState({ deckAdded: text })
   }
   submitDeck = () => {
     const key='name'
     let da=this.state.deckAdded
     let arr=this.state.arr
     this.setState({
       arr: arr.concat(da)
     })
     this.props.dispatch(addDeck({[key]:da}))
     alert(arr)
     submitEntry({key,da})
   }


   SubmitSaveDeckAsync=() => {
     d=this.state.deckAdded
     AsyncStorage.getItem('decksAsy')
     .then((decksAsy) => {
       const c = decksAsy ? JSON.parse(decksAsy) : [];
       c.push(d);
       AsyncStorage.setItem('decksAsy', JSON.stringify(c));
       this.setState({
         arr: this.state.arr.concat(d)
       })
       alert(c)
     });
   }

   clearAsyncStorage = async() => {
    AsyncStorage.clear();
   }




  render(){
  return(
    <View>
    <Text style = {styles.textdeco}>What is the Title of your New Deck</Text>
    <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = " Deck Title"
             placeholderTextColor = "lightgrey"
             autoCapitalize = "none"
             onChangeText = {this.handleDeck}
             />

    <TouchableOpacity style = {styles.submitButton}
    onPress = {() => this.submitDeck()}>
    <Text style = {styles.submitButtonText}>Create Deck</Text>
    </TouchableOpacity>

    {Decks===[] ?<Decks arry={'hi'}/> : null}
    {Ex===[]?null:<Ex arry={this.state.arr}/>}

    </View>
  )
 }
}


export default connect()(AddDeck)

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   textdeco:{
     textAlign: 'center',
     fontSize: 30,
     margin:10
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
      color: 'white'
   }
})
