import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CartScreen, Dashboard, SuggestionScreen } from '../screens/Index'

const Tab = createBottomTabNavigator();

export default function DashboardNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="Suggestions" component={SuggestionScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
}