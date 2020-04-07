import * as React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import './Config/ReactotronConfig';

import Principal from './pages/Principal';
import Selected from './pages/Selected';
import StoreImage from './pages/StoreImage';

const Stack = createStackNavigator();

function PrincipalStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Galeria" component={Principal} />
      <Stack.Screen name="Foto Selecionada" component={Selected} />
    </Stack.Navigator>
  );
}

function FotoStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Nova Foto" component={StoreImage} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        showHideTransition="slide"
        translucent={true}
      />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Galeria') {
              iconName = focused ? 'image' : 'image';
            } else if (route.name === 'Nova Foto') {
              iconName = focused ? 'folder-open-o' : 'folder-open-o';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Galeria" component={PrincipalStackScreen} />
        <Tab.Screen name="Nova Foto" component={FotoStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
