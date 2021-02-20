import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import TelaA from '../Views/TelaA'
import TelaB from '../Views/TelaB'
import TelaC from '../Views/TelaC'

const routeDrawer = createDrawerNavigator()

const Drawer = () => {
  return (
    <routeDrawer.Navigator initialRouteName="TelaA">
      <routeDrawer.Screen name="TelaA" component={TelaA}/>
      <routeDrawer.Screen name="TelaB" component={TelaB}/>
      <routeDrawer.Screen name="TelaC" component={TelaC}/>
    </routeDrawer.Navigator>
  )
}

export default Drawer
