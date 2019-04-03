import React from 'react';
import { StyleSheet, Text, View,Platform,StatusBar} from 'react-native';
import AddDeck from './components/AddDeck'
import Decks from './components/Decks'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import { createBottomTabNavigator,createAppContainer,createStackNavigator} from 'react-navigation'
import {purple,white} from './utils/colors'
import {FontAwesome,Ionicons} from '@expo/vector-icons'
import {Constants} from 'expo'
import reducer from './reducers/index'
import DeckView from './components/DeckView'
import AddCard from './components/AddCard'
import Ex from './components/example'

function StatusBarProj({backgroundColor,...props}){
  return(
    <View style={{backgroundColor,height:Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = createBottomTabNavigator({

  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='md-folder-open' size={30} color={tintColor} />
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  },
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
});

const NavTabs=createAppContainer(Tabs)

const StackNav=createStackNavigator({
  Home:{
    screen:NavTabs,
  },
  DeckView:{
    screen:DeckView,
    navigationOptions:{
      title:'Decks',
      headerTintColor:white,
      headerStyle:{
        backgroundColor:purple,
      }
    }
  }
})
const StackNavi=createAppContainer(StackNav)

const RootStackNav=createStackNavigator({
  Home:{
    screen:StackNavi
  },
  AddCard:{
    screen:AddCard,
    navigationOptions:{
      title:'Deck Details',
      headerTintColor:white,
      headerStyle:{
        backgroundColor:purple,
      }
    }
  }
})
const RootStackNavi=createAppContainer(RootStackNav)

export default class App extends React.Component {
  state = {
      deckAdded: ''
   }

  render() {
    return (
      <Provider store={createStore(reducer)}>
       <View style={styles.container}>
        <StatusBarProj backgroundColor={purple} barStyle='light-content'/>
        <RootStackNavi/>
        {/*<NavTabs
        screenProps={{deckAdded:this.state.deckAdded}}/>*/}
       </View>
      </Provider>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    marginLeft:0,
    marginRight:0,
    alignItems:'stretch',
    justifyContent:'center'
  },
  btn:{
    backgroundColor:'#E53224',
    padding:10,
    paddingLeft:50,
    paddingRight:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
  },
  btnText:{
    color:'#fff'
  }
})
