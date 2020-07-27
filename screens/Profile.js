import React from 'react';
import { View, Text, Button, Alert, AsyncStorage, TouchableOpacity, TextInput, ImageBackground, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';
import Users from '../model/users';
class Profile extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            EmailAdress: '',
            PhoneNumber: ''
        };

        this.handleChangeEmailInput = this.handleChangeEmailInput.bind(this);
        this.handleChangePhoneInput = this.handleChangePhoneInput.bind(this);
        this.saveData = this.saveData.bind(this);
    }

    handleChangeEmailInput = (input) =>  {
        this.setState({EmailAdress:input});
    }
    handleChangePhoneInput = (input) =>  {
        this.setState({PhoneNumber:input});
    }
    saveData() {
        AsyncStorage.setItem("key", JSON.stringify(this.state));
    }
    render(){
        return (
      <ImageBackground
        style={{ flex: 1 }}
        source={{
          uri:
            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg',
        }}
      >
      <View style={styles.container}>
        <Text style={styles.TextStyle}>Modifiez Votre Profil</Text>
        
        <Text style={[styles.text_footer, {
                color: 'black',
                marginTop: 35,
                marginLeft: -255,
                fontSize: 20
            }]}>Nom Complet</Text>
            <View style={styles.action}>
                <TextInput 
                    value="Hajar Skalli-Houssaini"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: 'black',
                        fontSize: 22
                    }]}
                    autoCapitalize="none"
                    editable={false}

                />
      </View>
              <Text style={[styles.text_footer, {
                color: 'black',
                marginTop: 35,
                marginLeft: -105,
                fontSize: 20
            }]}>Modifier Votre Adresse email
            </Text>
             <View style={styles.action}>
                <TextInput 
                    placeholder="Entrez La nouvelle adresse mail"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: 'black',
                        fontSize:17
                    }]}
                    autoCapitalize="none"
                    keyboardType={'email-address'}
                    // onChangeText={(text) => this.setState({EmailAdress: text})}
                    // value={this.state.EmailAdress}
                    onChangeText={this.handleChangeEmailInput}
                    value={this.state.EmailAdress}
                />
     </View>
            <Text>
               {this.state.name}
            </Text>


              <Text style={[styles.text_footer, {
                color: 'black',
                marginTop: 35,
                marginLeft: -30,
                fontSize: 20
            }]}>Modifier Votre Numéro de Téléphone</Text>
            <View style={styles.action}>
                <TextInput 
                    placeholder="Le Nouveau Numéro de Téléphone"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: 'black',
                        fontSize: 17
                    }]}
                    autoCapitalize="none"
                    keyboardType={'phone-pad'}
                    autoCompleteType="tel"
                    onChangeText={this.handleChangePhoneInput}
                    value={this.state.PhoneNumber}
                />
      </View>
      <Text></Text>
          <TouchableOpacity
            style={styles.Button}
             onPress={ () => 
                            {
                              if (this.state.EmailAdress.length == 0 || this.state.PhoneNumber.length == 0) {
                              alert("Veuillez remplir tous les champs!");
                              return;
                                }
                              this.saveData()
                              console.log('Modifications du Profile : ',this.state);
                              Alert.alert('Modification Réussie', 'Modifié avec Succès')
                              Users.push(this.state);
                            }
                        }  
          >
        <Text style={styles.textbutton}>Sauvegarder</Text>
        </TouchableOpacity>
    </View>
    </ImageBackground>
    );
    }
};

export default Profile;

const styles = StyleSheet.create({
    container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    },
  // TextStyle: {
  //   fontSize: 30,
  //   fontWeight: '800',
  //   marginTop: '-15%',
  //   marginLeft: '10%',
  //   marginRight: '10%',
  //   color: '#05375a',
  //   fontStyle: 'italic',
  //   textShadowColor: '#fcf0e4', 
  //   textShadowOffset: { width: -1, height: 0 },
  //   textShadowRadius: 10, 
  // },
  TextStyle: {
    fontSize: 30,
    fontWeight: '800',
    marginTop: '10%',
    marginLeft: '10%',
    marginRight: '10%',
    color: '#05375a',
    fontStyle: 'italic',
    textShadowColor: '#fcf0e4', 
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10, 
  },
  text_footer: {
        color: '#05375a',
        fontSize: 18
  },
  Button: {
      backgroundColor: '#1f65ff',
      paddingHorizontal: 30,
      height: 40,
      justifyContent: 'center',
      borderRadius: 15,
      overflow: 'hidden',
      alignSelf: 'center',
      marginTop: 15
  },
  textbutton:  {
      color: "white",
      fontSize: 20
  }
});