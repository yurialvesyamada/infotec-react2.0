import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import TelaA from '../Views/TelaA'
import TelaB from '../Views/TelaB'
import TelaC from '../Views/TelaC'

const routeTab = createBottomTabNavigator()

const Tab = () => {
  return (
    <routeTab.Navigator initialRouteName='TelaA' tabBarOptions={{
      activeTintColor: 'red',
      inactiveTintColor: 'blue',
      labelStyle: {fontSize: 30},
      
    }}>
      <routeTab.Screen name="TelaA" component={TelaA}/>
      <routeTab.Screen name="TelaB" component={TelaB}/>
      <routeTab.Screen name="TelaC" component={TelaC}/>
    </routeTab.Navigator>
  )
}

export default Tab