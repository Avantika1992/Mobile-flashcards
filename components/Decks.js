import React,{Component} from 'react'
import {View,Text,Slider,StyleSheet,TextInput,ListItem,List,AsyncStorage} from 'react-native'
import {connect} from 'react-redux'
import {deckAdding} from './AddDeck'


class Decks extends Component{
  state = {
      arrayDecks:['hi','deck2']
   }
  componentDidMount(){
    d=this.props.deckAdded
    AsyncStorage.getItem('decksAsy')
    .then((decksAsy) => {
      const c = decksAsy ? JSON.parse(decksAsy) : [];
      c.push(d);
      AsyncStorage.setItem('decksAsy', JSON.stringify(c));
      this.setState({
        arrayDecks: this.state.arrayDecks.concat(c)
      })
    });
  }

  render(){
    alert(this.state.arrayDecks)
    dec=this.state.arrayDecks&&Object.keys(this.state.arrayDecks).map((key) => {
    return (
      <Text key={key}>{this.state.arrayDecks[key]}{"\n"}</Text>
    )
 })
 return(
   <View>
   <Text onPress={()=>this.props.navigation.navigate(
     'DeckView'
   )} style={styles.textdeco}>{dec}</Text>
   <Text>{this.state.arrayDecks}</Text>
   </View>
 )
}
}

{/*  render(){

    alert(this.state.arr)
    dec=this.props.arry&&Object.keys(this.props.arry).map((key) => {
    return (
      <Text key={key}>{this.props.arry[key]}{"\n"}</Text>
    )
 })
 return(
   <View>
   <Text onPress={()=>this.props.navigation.navigate(
     'DeckView'
   )} style={styles.textdeco}>{dec}</Text>
   <Text>{this.state.arrayDecks}</Text>
   </View>
 )
}
}

*/}
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
