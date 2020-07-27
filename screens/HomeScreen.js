import React from 'react';
import { ImageBackground, View, Text, Button, StyleSheet, StatusBar } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
  	    <ImageBackground
          style={{ flex: 1 }}
          source={{
            uri:
              'https://fr.justexw.com/wp-content/uploads/sites/4/2017/03/enregistrement-entretien-vehicule.jpg',
        }}
        >
        <Text style={[styles.text_footer, {
                color: "#F1F4FFFF",
                marginTop: 150,
                marginLeft: 15,
                fontSize: 25,
                fontWeight: 'bold',
                fontStyle: 'italic'
            }]}>Avec Notre Service En Ligne</Text>
            <Text style={[styles.text_footer, {
                color: "white",
                marginTop: 12,
                marginLeft: 5,
                fontSize: 25,
                fontWeight: 'bold',
                fontStyle: 'italic'
            }]}> Vous pouvez désormais faire : </Text>
            <Text style={[styles.text_footer, {
                color: "#FDDB27FF",
                marginTop: 50,
                marginLeft: 15,
                fontSize: 25,
                fontWeight: 'bold',
                fontStyle: 'italic'
            }]}>Réservations</Text>
            <Text style={[styles.text_footer, {
                color: "#FDDB27FF",
                marginTop: 50,
                marginLeft: 15,
                fontSize: 25,
                fontWeight: 'bold',
                fontStyle: 'italic'
            }]}>Consultations</Text>
            <Text style={[styles.text_footer, {
                color: "#FDDB27FF",
                marginTop: 50,
                marginLeft: 15,
                fontSize: 25,
                fontWeight: 'bold',
                fontStyle: 'italic'
            }]}>Profiter De Nos Promotions</Text>
            
	    </ImageBackground>
 	</View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "#e6ffee",
    fontSize: 60,
    marginTop: 170,
    marginLeft: 70,
    fontWeight: "bold",
    fontStyle: 'italic',
    textDecorationStyle: 'double'
  }
});

