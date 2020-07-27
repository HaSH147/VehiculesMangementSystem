import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import Promotions from './Promotions';
import MesPromotions from './MesPromotions';
import ToutesLesPromotions from './ToutesLesPromotions';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

const TabPromosScreen = () => (
  <Tab.Navigator
      initialRouteName="MesPromotions"
      activeColor="#000"
      style={{ backgroundColor: '#ffd79d' }}
    >
    <Tab.Screen
        name="MesPromotions"
        component={MesPromotions}
        options={{
          tabBarLabel: 'Mes Promotions',
          tabBarColor: '#ffd79d',
          tabBarIcon: () => (
            <Icon name="ios-star" color='#F93822FF' size={26} />
          ),
        }}
      />
    <Tab.Screen
                  name="Toutes Les Promotions"
                  component={ToutesLesPromotions}
                  options={{
                    tabBarLabel: 'Toutes Les Promotions',
                    tabBarColor: '#F93822FF',
                    tabBarIcon: () => (
                      <Icon name="ios-basket" color='#F93822FF' size={26} />
                    ),
                  }}
      />
    </Tab.Navigator>
);

export default TabPromosScreen;

// const PromotionsStackScreen = ({navigation}) => (

//           <PromotionsStack.Navigator screenOptions={{
//               headerStyle: {
//                 backgroundColor: "#F93822FF",
//               },
//               headerTinitColor: '#fff',
//               headerTitleStyle: {
//                 // fontWeight: 'bold'
//               }
//             }} >
//              <PromotionsStack.Screen name="Promotions" component={Promotions} options={{
//                title: 'Promotions',
//                headerLeft: () => (
//                    <Icon.Button name="ios-menu" size={25}
//                    backgroundColor="#F93822FF" onPress={ () => navigation.
//                    openDrawer()}></Icon.Button>
//                )
//              }}
//               />
//               <Tab.Screen
//                   name="Toutes Les Promos"
//                   component={ToutesLesPromotions}
//                   options={{
//                     tabBarLabel: 'Toutes les promos',
//                     tabBarColor: '#F93822FF',
//                     tabBarIcon: () => (
//                       <Icon name="ios-basket" color='#F93822FF' size={26} />
//                     ),
//                   }}
//       />
//           </PromotionsStack.Navigator>
// );

// <Tab.Screen
//     //     name="Promotions"
//     //     component={Promotions}
//     //     options={{
//     //       tabBarLabel: 'Promotions',
//     //       tabBarColor: '#ffd79d',
//     //       tabBarIcon: () => (
//     //         <Icon name="ios-card" color='#F93822FF' size={26} />
//     //       ),
//     //     }}
//     //   />
// <Tab.Screen
//         name="Toutes Les Promos"
//         component={ToutesLesPromotions}
//         options={{
//           tabBarLabel: 'Toutes les promos',
//           tabBarColor: '#F93822FF',
//           tabBarIcon: () => (
//             <Icon name="ios-basket" color='#F93822FF' size={26} />
//           ),
//         }}
//       />