import React from 'react';
import { View, Text,TextInput, Button, AsyncStorage, Alert, ImageBackground,TouchableOpacity, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';
import Users from '../model/users';
import { AuthContext } from '../components/context';

class  PageChangerpwd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentpassword: '',
            modifiedpassword: '',
            confirmmodifiedpassword: ''
        };
        this.handleChangemodifiedpasswordInput = this.handleChangemodifiedpasswordInput.bind(this);
        this.handleChangecurrentpasswordInput = this.handleChangecurrentpasswordInput.bind(this);
        this.handleChangeconfirmmodifiedpasswordInput = this.handleChangeconfirmmodifiedpasswordInput.bind(this);
        this.saveData = this.saveData.bind(this);
    }
    handleChangemodifiedpasswordInput = (input) =>  {
        this.setState({modifiedpassword:input});
    }
    handleChangecurrentpasswordInput = (input) =>  {
        this.setState({currentpassword:input});
    }
    handleChangeconfirmmodifiedpasswordInput = (input) =>  {
        this.setState({confirmmodifiedpassword:input});
    }
    saveData() {
        AsyncStorage.setItem("key", JSON.stringify(this.state));
    }
        

    render() {
        return (
         <ImageBackground
        style={{ flex: 1 }}
        source={{
          uri:
            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg',
        }}
      >
      <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.TextStyle}>Modifiez Vos</Text><Text style={styles.TextStyleParamètres}>Paramètres</Text>
      </View>
        
        <Text></Text><Text></Text><Text></Text>
        <Text style={[styles.text_footer, {
                color: "black",
                marginTop: 10,
                marginLeft: -174,
                fontSize: 19
            }]}>Mot de Passe Actuel</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="black"
                    size={20}
                />
                <TextInput 
                    placeholder="Entrez Le mot de passe actuel"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: "black",
                        fontSize: 17
                    }]}
                    autoCapitalize="none"
                    onChangeText={this.handleChangecurrentpasswordInput}
                />
      </View>


              <Text style={[styles.text_footer, {
                color: 'black',
                marginTop: 35,
                marginLeft: -150,
                fontSize: 19
            }]}>Nouveau Mot de Passe</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="black"
                    size={20}
                />
                <TextInput 
                    placeholder="Entrez Le nouveau mot de passe"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: "black",
                        fontSize:17
                    }]}
                    autoCapitalize="none"
                    onChangeText={this.handleChangemodifiedpasswordInput}
                    value={this.state.modifiedpassword}
                />
      </View>


              <Text style={[styles.text_footer, {
                color: "black",
                marginTop: 35,
                marginLeft: -28,
                fontSize: 19
            }]}>Confirmer Le Nouveau Mot de Passe</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="black"
                    size={20}
                />
                <TextInput 
                    placeholder="Confirmez le nouveau mot de passe"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: "black",
                        fontSize: 17
                    }]}
                    autoCapitalize="none"
                    onChangeText={this.handleChangeconfirmmodifiedpasswordInput}
                    value={this.state.confirmmodifiedpassword}
                />
      </View>
          <Text></Text>
        <TouchableOpacity
            style={styles.Button}
           onPress={ () => 
                            {
                              if (this.state.currentpassword.length == 0 || this.state.modifiedpassword.length == 0 || this.state.confirmmodifiedpassword.length == 0) {
                              alert("Veuillez remplir tous les champs!");
                              return;
                              }
                              if (this.state.currentpassword !== 'password1') {
                              alert("Le mot de passe entré ne correspond pas à votre mot de passe actuel");
                              return;
                              }
                              if (this.state.modifiedpassword.length < 8) {
                              alert("Le mot de passe doit comporter au moins 8 caractères");
                              return;
                              }
                              if (this.state.modifiedpassword !== this.state.confirmmodifiedpassword) {
                              alert("Veuillez entrer le meme mot de passe pour les deux derniers champs");
                              return;
                              }

                              this.saveData()
                              console.log("Modifications de paramètres d'Authentification : ",this.state);
                              Alert.alert('Modification Réussie', 'Modifié avec Succès')
                              // Users.push(this.state);
                            }
                        }  
        >
        <Text style={styles.textbutton}>Sauvegarder</Text>
        </TouchableOpacity>
    </View>
    </ImageBackground>
    );
 }
}

export default PageChangerpwd;

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
    TextStyle: {
    fontSize: 30,
    fontWeight: '800',
    marginTop: '15%',
    marginLeft: '10%',
    marginRight: '10%',
    color: '#05375a',
    fontStyle: 'italic',
    textShadowColor: '#fcf0e4', 
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10, 
  },
  TextStyleParamètres: {
    fontSize: 30,
    fontWeight: '800',
    marginTop: '15%',
    marginLeft: '-7%',
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
      backgroundColor: '#694fad',
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
})