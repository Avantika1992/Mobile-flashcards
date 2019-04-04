import React,{Component} from 'react'
import {View,Text,Slider,StyleSheet,TextInput,ListItem,List,AsyncStorage} from 'react-native'
import {connect} from 'react-redux'
import {deckAdding} from './AddDeck'


class Decks extends Component{
  state = {
      deckAdded: '',
      arr:[]
   }
  componentDidMount(){
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
  render(){

    alert(this.props.arr)
    dec=this.state.arr&&Object.keys(this.state.arr).map((key) => {
    return (
      <Text key={key}>{this.state.arr[key]}{"\n"}</Text>
    )
 })
 return(
   <View>
   <Text onPress={()=>this.props.navigation.navigate(
     'DeckView'
   )} style={styles.textdeco}>{dec}</Text>
   <Text>{this.state.arr}</Text>
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
