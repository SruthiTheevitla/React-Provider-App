import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MedicineScreen from './MedicineScreen';
import NewComponent from './NewComponent';
import AppointmentDetails from './AppointmentDetails';

const Stack = createNativeStackNavigator();


  


function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Home" component={MedicineScreen} />
        <Stack.Screen name="new" component={NewComponent}/>
        <Stack.Screen name="appointmentDetails" component={AppointmentDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
  export default App