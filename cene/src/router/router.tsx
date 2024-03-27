import WelcomeScreen from '../screens/welcome/welcome.screen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'

export type RootStackParamList = {
  Welcome: undefined
  Signup: undefined
  Login: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
