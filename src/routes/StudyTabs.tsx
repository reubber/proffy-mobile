import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import TeacherList from '../pages/teacherList'
import Favorites from '../pages/favorites'

const { Navigator, Screen } = createBottomTabNavigator()

function StudyTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: { 
          flexDirection: 'row', //it's to add a icon next to each other
          alignItems: 'center',
          justifyContent: 'center'
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor:'#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d'
      }}
    >
      <Screen 
        name = "teacherList"
        component={TeacherList}
        options={{
         tabBarLabel: 'Proffys',
         tabBarIcon: ({color, size, focused }) => {
           return (
             <Ionicons name='ios-easel' size={size} color={focused ? '#8257e5' : color } />
           )
         }
        }} 
      />
      <Screen 
        name = "Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({color, size, focused }) => {
            return (
              <Ionicons name='ios-heart' size={size} color={focused ? '#C83741' : color }/>
            )
          }
         }}
      />
    </Navigator>
  )
}

export default StudyTabs
