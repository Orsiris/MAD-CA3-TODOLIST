import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './components/DrawerNavigator';
import { TaskProvider } from './components/Context';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
const Stack = createStackNavigator();

const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#8AE645', elevation:7}}
      contentContainerStyle={{ padding: 15 }}
      text1Style={{
        fontSize: 24,
        fontWeight: '300'
      }}
      text2Style={{
        fontSize: 16,
        fontWeight: '200'
      }}
    />
  ), 

  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 24,
        fontWeight:'300'
      }}
      
    />
  ),
    }

const App = () => {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="DrawerNavigator">
          <Stack.Screen
            name="DrawerNavigator"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast config={toastConfig} />
    </TaskProvider>
  );
};

export default App;