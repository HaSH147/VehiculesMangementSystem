import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Reservation from './screens/Reservation';
import BasicFlatList from './screens/BasicFlatList'
import InterventionsFlatList from './screens/Interventions';
import { createStackNavigator } from '@react-navigation/stack';
import MesPromotions from './screens/MesPromotions';
import TabPromosScreen from './screens/TabPromosScreen';
// import ResetPwdStackScreen from './screens/ResetPasswordScreen';
import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import { DrawerContent } from './screens/DrawerContent';

import MainTabScreen from './screens/MainTabScreen';
import SupportScreen from './screens/SupportScreen';
import { AuthContext } from './components/context';
import RootStackScreen from './screens/RootStackScreen';
import AsyncStorage from '@react-native-community/async-storage';

const Drawer = createDrawerNavigator();
const ReservationStack = createStackNavigator();
const InterventionsStack = createStackNavigator();
const PromotionsStack = createStackNavigator();
const VehiculesStack = createStackNavigator();


const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null); 

  // const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;
      
      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
  }), []);

  useEffect(() => {
    setTimeout(async() => {
      //setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if( loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
  return (
    <PaperProvider >
        <AuthContext.Provider value={authContext}>
        <NavigationContainer >
          { loginState.userToken !== null ? (
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
              <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
              <Drawer.Screen name="BasicFlatList" component={VehiculesStackScreen} />
              <Drawer.Screen name="Interventions" component={InterventionsStackScreen} />
              <Drawer.Screen name="Reservation" component={ReservationStackScreen} />
              <Drawer.Screen name="Promotions" component={PromotionsStackScreen} />
            </Drawer.Navigator>
          )
        :(
          <RootStackScreen/>
          )
        }
        </NavigationContainer>
        </AuthContext.Provider>
    </PaperProvider>
  );
}


const ReservationStackScreen = ({navigation}) => (

          <ReservationStack.Navigator screenOptions={{
              headerStyle: {
                backgroundColor: "#330066",
              },
              headerTinitColor: '#fff',
              headerTitleStyle: {
                // fontWeight: 'bold'
              }
            }} >
             <ReservationStack.Screen name="Reservation" component={Reservation} options={{
               title: 'Reservation',
               headerLeft: () => (
                   <Icon.Button name="ios-menu" size={40} style={{marginLeft: 5}} 
                   backgroundColor="#330066" onPress={ () => navigation.
                   openDrawer()}></Icon.Button>
               )
             }}
              />
          </ReservationStack.Navigator>
);
const InterventionsStackScreen = ({navigation}) => (

          <InterventionsStack.Navigator screenOptions={{
              headerStyle: {
                backgroundColor: "#f3ca20",
              },
              headerTinitColor: '#fff',
              headerTitleStyle: {
                // fontWeight: 'bold'
              }
            }} >
             <InterventionsStack.Screen name="Interventions" component={InterventionsFlatList} options={{
               title: 'Interventions',
               headerLeft: () => (
                   <Icon.Button name="ios-menu" size={40} style={{marginLeft: 5}}
                   backgroundColor="#f3ca20" onPress={ () => navigation.
                   openDrawer()}></Icon.Button>
               )
             }}
              />
          </InterventionsStack.Navigator>
);


const PromotionsStackScreen = ({navigation}) => (

          <PromotionsStack.Navigator screenOptions={{
              headerStyle: {
                backgroundColor: "#F93822FF",
              },
              headerTinitColor: '#fff',
              headerTitleStyle: {
                // fontWeight: 'bold'
              }
            }} >
             <PromotionsStack.Screen name="Promotions" component={TabPromosScreen} options={{
               title: 'Promotions',
               headerLeft: () => (
                   <Icon.Button name="ios-menu" size={40} style={{marginLeft: 5}}
                   backgroundColor="#F93822FF" onPress={ () => navigation.
                   openDrawer()}></Icon.Button>
               )
             }}
              />
          </PromotionsStack.Navigator>
);


const VehiculesStackScreen = ({navigation}) => (

          <VehiculesStack.Navigator screenOptions={{
              headerStyle: {
                backgroundColor: "#ff6e40",
              },
              headerTinitColor: '#fff',
              headerTitleStyle: {
                // fontWeight: 'bold'
              }
            }} >
             <VehiculesStack.Screen name="Vehicules" component={BasicFlatList} options={{
               title: 'Mes Véhicules',
               headerLeft: () => (
                   <Icon.Button name="ios-menu" size={40} style={{marginLeft: 5}}
                   backgroundColor="#ff6e40" onPress={ () => navigation.
                   openDrawer()}></Icon.Button>
               )
             }}
              />
          </VehiculesStack.Navigator>
);


export default App;
//#b82e8a

// const ResetPwdStackScreen = ({navigation}) => (

//           <ResetPwdStack.Navigator screenOptions={{
//               headerStyle: {
//                 backgroundColor: "#330066",
//               },
//               headerTinitColor: '#fff',
//               headerTitleStyle: {
//                 // fontWeight: 'bold'
//               }
//             }} >
//              <ResetPwdStack.Screen name="Reservation" component={Reservation} options={{
//                title: 'Reservation',
//                headerLeft: () => (
//                    <Icon.Button name="ios-menu" size={40} style={{marginLeft: 5}} 
//                    backgroundColor="#330066" onPress={ () => navigation.
//                    openDrawer()}></Icon.Button>
//                )
//              }}
//               />
//           </ResetPwdStack.Navigator>
// );