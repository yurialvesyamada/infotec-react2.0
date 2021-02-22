import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../Views/Home'
import Produtos from '../Views/Produtos'
import Contato from '../Views/Contato'

const routeTab = createBottomTabNavigator()

const Tab = () => {
  return (
    <routeTab.Navigator initialRouteName='Home' tabBarOptions={{
      activeTintColor: 'red',
      inactiveTintColor: 'blue',
      labelStyle: {fontSize: 30},
      
    }}>
      <routeTab.Screen name="Home" component={Home}/>
      <routeTab.Screen name="Produtos" component={Produtos}/>
      <routeTab.Screen name="Contato" component={Contato}/>
    </routeTab.Navigator>
  )
}

export default Tab