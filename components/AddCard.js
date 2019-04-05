import React,{Component} from 'react'
import {View,Text,Slider,StyleSheet,TextInput,ListItem,List,TouchableOpacity,AsyncStorage} from 'react-native'
import {deckAdding} from './AddDeck'
import {purple,white,black,red} from '../utils/colors'
import {addCard} from '../actions'
import {connect} from 'react-redux'

class AddCard extends Component{
  state = {
      que: '',
      ans:'',
      qu:[]
   }
  submit=()=>{
    this.props.dispatch(addCard(this.state.que,this.state.ans))
    let que = this.state.que
    let ans = this.state.ans
    if(que===''||ans===''){
      AsyncStorage.getItem('cardsAsy')
      .then((cardsAsy) => {
        const c = cardsAsy ? [] : [];
        AsyncStorage.setItem('cardsAsy', JSON.stringify(c));
        this.setState({
          qu: this.state.qu
        })
       alert(this.state.qu)
      });
    }
    else{
    AsyncStorage.getItem('cardsAsy')
    .then((cardsAsy) => {
      const c = cardsAsy ? JSON.parse(cardsAsy) : [];
      c.push(que,ans);
      AsyncStorage.setItem('cardsAsy', JSON.stringify(c));
      this.setState({
        qu: this.state.qu.concat(c)
      })
     alert(this.state.qu)
    });
}
  }
  clearAsyncStorage = async() => {
   AsyncStorage.clear();
  }

  render(){
  return(
   <View>
   <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Question"
            placeholderTextColor = "lightgrey"
            autoCapitalize = "none"
            onChangeText={(que) => this.setState({que})}
            />
    <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "Answer"
             placeholderTextColor = "lightgrey"
             autoCapitalize = "none"
             onChangeText={(ans) => this.setState({ans})}
              />
    <TouchableOpacity  style = {styles.submitButtondel}>
    <Text onPress={this.submit} style = {styles.submitButtonTextdel}>Submit</Text>
    </TouchableOpacity>
    <TouchableOpacity style = {styles.submitButton}
    onPress = {() => this.clearAsyncStorage()}>
    <Text style = {styles.submitButtonText}>clearAsyncStorage</Text>
    </TouchableOpacity>
    <Text>{this.state.que}</Text>
   </View>
 )
}
}


export default connect()(AddCard)

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
