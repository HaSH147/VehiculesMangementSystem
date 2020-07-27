import React, { Component } from 'react';

import { Alert, Clipboard, TextInput, StyleSheet, Image, StatusBar, ImageBackground, Text, View, TouchableOpacity, Linking, Platform } from 'react-native';
import { Button } from 'react-native-elements';

export default class ContactPage extends Component {

    constructor(props) {
    super(props);

    this.state = {
      text: '',
      clipboardContent: null,
    };
  }
  //Call function
  Call = () => {

    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:+212659602718';
    }
    else {
      phoneNumber = 'telprompt:+212659602718';
    }

    Linking.openURL(phoneNumber);
  };

   //Copy to clipboard function

   writeToClipboard = async () => {
      await Clipboard.setString('contact147@gmail.com');
      Alert.alert(
        'Email Copié',
        'Retrouvez-le en cliquant sur coller',
      )
  }

  render() {
    // const image = { uri: "../assets/logo.png" };
    return (
          
      <ImageBackground
        style={{ flex: 1 }}
        source={{
          uri:
            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg',
        }}
        >
        <View style={styles.MainContainer}>
          <Image
            source={{
              uri:
                '../assets/logo.png',
            }}
            style={{ width: 40, height: 40, marginTop: 90 }}
          />
          <Text style={styles.TextStyle}>Contactez-Nous Pour Tout Renseignement</Text>
              <View>
                <Text>  
                </Text>
                <Text>  
                </Text>
                <Text>  
                </Text>
                <Text>  
                </Text>
                <Text>  
                </Text>
              </View>
              <View style={{flexDirection:'row'}}>
              <TextInput style={styles.TextEmailInput_style} value="Email : contact147@gmail.com"  editable={false} />
              <Text>    </Text>
              <Button
                  onPress={this.writeToClipboard}
                  title=" Copier "
                  type="outline"
                  color="#d02860"           
              />
              </View>
              <View>
                <Text>  
                </Text>
              </View>
               <View style={{flexDirection:'row'}}>
              <TextInput style={styles.TextPhoneInput_style} value="Tel : +212659602718" editable={false} />
              <Text>                          </Text>             
              <Button
                  onPress={this.Call}
                  title="Appeler"
                  type="outline"
                  color="#d02860"           
              />
              </View>

         </View>
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50
  },
  button: {
    width: '45%',
    padding: 6,
    backgroundColor: '#1bbdf3',
    borderRadius: 7,
    textAlign: 'center',
  },
  TextStyle: {
    fontSize: 30,
    fontWeight: '800',
    marginTop: '-67%',
    marginLeft: '10%',
    marginRight: '10%',
    color: '#05375a',
    fontStyle: 'italic',
    textShadowColor: '#fcf0e4', 
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10, 
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  TextPhoneInput_style: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: '0%',
    borderColor: '#410c1e',
  },
  TextEmailInput_style: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: '0%',
    borderColor: '#410c1e',
  }

});


 // <View style={styles.MainContainer}>
 //        <StatusBar backgroundColor='#009387' barStyle="light-content"/>
 //        <View style={styles.header}>
 //          <Text style={styles.TextStyle}>N'hésitez Pas de Nous Contacter Pour Tout Renseignement</Text>
 //        </View>
 //        <TouchableOpacity onPress={this.Call} activeOpacity={0.7} style={styles.button}>
 //          <Text>Appeler</Text>
 //        </TouchableOpacity>
 //      </View>


 // <TouchableOpacity   
 //                title="Solid button"
 //                type="outline" 
 //                onPress={this.Call} 
 //                activeOpacity={0.7} 
 //                style={styles.button}>
 //              <Text>Appeler</Text>
 //          </TouchableOpacity>