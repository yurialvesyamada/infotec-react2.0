import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from '../Views/Home'
import Produtos from '../Views/Produtos'
import Contato from '../Views/Contato'

const routeDrawer = createDrawerNavigator()

const Drawer = () => {
  return (
    <routeDrawer.Navigator initialRouteName="Home">
      <routeDrawer.Screen name="Home" component={Home}/>
      <routeDrawer.Screen name="Produtos" component={Produtos}/>
      <routeDrawer.Screen name="Contato" component={Contato}/>
    </routeDrawer.Navigator>
  )
}

export default Drawer
