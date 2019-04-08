import React from 'react';
import {
  View,
  Platform,
  StatusBar
} from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { createBottomTabNavigator,createAppContainer,createStackNavigator} from 'react-navigation'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { primary, white,purple } from './utils/colors'
import { Constants } from 'expo'
import { decks} from './reducers'
import AddDeck from './components/AddDeck'
import Decks from './components/Decks'
import DeckDetails from './components/DeckDetails'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import { setLocalNotification } from './utils/helpers'

function AppStatusBar ({ backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
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
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add New Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-add' size={30} color={tintColor} />
    }
  }
}, {
  navigationOptions: {
    header: null
  },
  animationEnabled: true,
  lazy: true,
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 50,
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
})

const NavTabs=createAppContainer(Tabs)

const MainNav = createStackNavigator({
  Home: {
    screen: Tabs
  },
  Deck: {
    screen: DeckDetails
  },
  AddCard: {
    screen: AddCard
  },
  Quiz: {
    screen: Quiz
  }
},
{
  navigationOptions: {
    headerStyle: {
      backgroundColor: purple,
    },
    headerTitleStyle: {
      color: white
    },
    headerTintColor: white,
  }
})

const StackNavi=createAppContainer(MainNav)

export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification()
  }


  render() {
    return (
      <Provider store={createStore(decks)}>
        <View style={{ flex: 1 }}>
          <AppStatusBar backgroundColor={purple} barStyle="light-content" />
          <StackNavi  />
        </View>
      </Provider>
    )
  }
}
