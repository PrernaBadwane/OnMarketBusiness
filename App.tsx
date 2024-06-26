import {View, Text} from 'react-native';
import React from 'react';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import Billing from './screens/Billing';
import AddNewCoin from './screens/AddNewCoin';
import AddNewCategory from './screens/AddNewCategory';
import GenerateBill from './screens/GenerateBill';
import Orders from './screens/Orders';
import Products from './screens/Products';
import Bill from "./screens/Bill"
import Coins from "./screens/Coins"

const Stack = createNativeStackNavigator<RootStackPramList>();

export type RootStackPramList = {
  Login: undefined;
  Dashboard: undefined;
  Billing: undefined;
  AddNewCoin: undefined;
  AddNewCategory: undefined;
  GenerateBill: undefined;
  Orders:undefined;
  Products:undefined;
  Bill:undefined;
  Coins:undefined;
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Billing"
          component={Billing}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="AddNewCategory"
          component={AddNewCategory}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="AddNewCoin"
          component={AddNewCoin}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="GenerateBill"
          component={GenerateBill}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Orders"
          component={Orders}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Bill"
          component={Bill}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Coins"
          component={Coins}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
