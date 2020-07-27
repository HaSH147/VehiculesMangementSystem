import React, { Component } from 'react';
import {
	AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert
	, Platform, TouchableHightlight, Dimensions, TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../model/flatListData';

// var screen = Dimensions.get('widow');
export default class AddModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newBrandName: '',
			newNumberDescription: ''
		}
	}
	showAddModal = () => {
		this.refs.myModal.open()
	}
	generateKey =  (numberOfCharacters) => {
		return require('random-string')({length: numberOfCharacters});
	}
	render(){
		return (
			<Modal
				ref={"myModal"}
				style={{
					justifyContent: 'center',
					borderradius: Platform.OS === 'ios' ? 30 : 0,
					showRadius: 10,
					borderRadius: 15,
					width: 350,
					height: 280
				}}
				position='center'
				backdrop={true}
				onClosed={() => {
					
				}}
			>
				<Text style={{
					fontSize: 16,
					fontWeight: 'bold',
					textAlign: 'center',
					marginTop: 40
				}}>Saisir les informations du nouveau véhicule</Text>
				<TextInput 
					style={{
						height: 40,
						borderBottomColor: 'gray',
						marginLeft: 30,
						marginRight: 30,
						marginTop: 20,
						marginBottom: 10,
						borderBottomWidth: 1
					}}
					onChangeText={(text) => this.setState({newBrandName: text})}
					placeholder="Entrer La Marque"
					value={this.state.newBrandName}
				/>
				<TextInput 
					style={{
						height: 40,
						borderBottomColor: 'gray',
						marginLeft: 30,
						marginRight: 30,
						marginTop: 20,
						marginBottom: 10,
						borderBottomWidth: 1
					}}
					onChangeText={(text) => this.setState({newNumberDescription: text})}
					placeholder="Entrer Le Numéro d'immatriculation"
					value={this.state.newNumberDescription}
				/>
				<Text>.</Text>
				<Button
					style={{ fontSize: 18, color: 'white' }}
					containerStyle={{
						padding: 8,
						marginLeft: 70,
						marginRight: 70,
						height: 40,
						borderRadius: 6,
						backgroundColor: '#ff6e40'
					}}
					onPress={ () => {
						if (this.state.newBrandName.length == 0 || this.state.newNumberDescription.length == 0) {
							alert("Vous devez remplir tous les champs!");
							return;
						}
						const newKey = this.generateKey(24);
						const newVehicule = {
							key: newKey,
							imageUrl: "https://www.caroom.fr/uploads/models/peugeot-208.png",
							marque: this.state.newBrandName,
							numéro_immatriculation: this.state.newNumberDescription
						}
						flatListData.push(newVehicule);
						this.props.parentFlatList.refreshFlatList(newKey);
						this.refs.myModal.close();
					}}>
				Valider
				</Button>

			</Modal>
		);
	}
}