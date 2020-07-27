import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import PageChangerpwd from './PageChangerpwd';
import Profile from './Profile';
import SupportScreen from './SupportScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const ChangepwdStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SupportStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Acceuil',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profil',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Changer Le mot de passe actuel"
        component={ChangepwdStackScreen}
        options={{
          tabBarLabel: 'Paramètres',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={SupportStackScreen}
        options={{
          tabBarLabel: 'Contact',
          tabBarColor: '#00ace6',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (

          <HomeStack.Navigator screenOptions={{
              headerStyle: {
                backgroundColor: "#009387",
              },
              headerTinitColor: '#fff',
              headerTitleStyle: {
                // fontWeight: 'bold'
              }
            }} >
             <HomeStack.Screen name="Home" component={HomeScreen} options={{
               title: "Acceuil",
               headerLeft: () => (
                   <Icon.Button name="ios-menu" size={40} style={{marginLeft: 5}}
                   backgroundColor="#009387" onPress={ () => navigation.
                   openDrawer()}></Icon.Button>
               )
             }}
              />
          </HomeStack.Navigator>
);

const ChangepwdStackScreen = ({navigation}) => (

          <ChangepwdStack.Navigator screenOptions={{
              headerStyle: {
                backgroundColor: "#694fad",
              },
              headerTinitColor: '#fff',
              headerTitleStyle: {
                // fontWeight: 'bold'
              }
            }} >
             <ChangepwdStack.Screen name="PageChangerpwd" component={PageChangerpwd} options={{
               title: 'Modifier Vos Paramètres',
               headerLeft: () => (
                   <Icon.Button name="ios-menu" size={40} style={{marginLeft: 5}}
                   backgroundColor="#694fad" onPress={ () => navigation.
                   openDrawer()}></Icon.Button>
               )
             }}
              />
          </ChangepwdStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (

          <ProfileStack.Navigator screenOptions={{
              headerStyle: {
                backgroundColor: "#1f65ff",
              },
              headerTinitColor: '#fff',
              headerTitleStyle: {
                // fontWeight: 'bold'
              }
            }} >
             <ProfileStack.Screen name="Profile" component={Profile} options={{
               title: 'Menu',
               headerLeft: () => (
                   <Icon.Button name="ios-menu" size={40} style={{marginLeft: 5}}
                   backgroundColor="#1f65ff" onPress={ () => navigation.
                   openDrawer()}></Icon.Button>
               )
             }}
              />
          </ProfileStack.Navigator>
);

const SupportStackScreen = ({navigation}) => (

          <SupportStack.Navigator screenOptions={{
              headerStyle: {
                backgroundColor: "#00ace6",
              },
              headerTinitColor: '#fff',
              headerTitleStyle: {
                // fontWeight: 'bold'
              }
            }} >
             <SupportStack.Screen name="SupportScreen" component={SupportScreen} options={{
               title: 'Menu',
               headerLeft: () => (
                   <Icon.Button name="ios-menu" size={40} style={{marginLeft: 5}}
                   backgroundColor="#00ace6" onPress={ () => navigation.
                   openDrawer()}></Icon.Button>
               )
             }}
              />
          </SupportStack.Navigator>
);