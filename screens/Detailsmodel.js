import React, { Component } from 'react';
import {
	AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert
	, Platform, TouchableHightlight, Dimensions, TextInput, TouchableOpacity
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../model/flatListData';
import ExtraDetailsModal from './ExtraDetailsModel'

// var screen = Dimensions.get('widow');
export default class DetailsModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			brandName: '',
			numberDescription: '',
			dernierevidange: '',
			kilometrage: ''
		}
		// this._onPressExtraDetails = this._onPressExtraDetails.bind(this);
	}
	 	
	showDetailsModal = (detailsvehicule, flatListItem) => {
		this.setState({
			key: detailsvehicule.key,
			numberDescription: detailsvehicule.numéro_immatriculation,
			dernierevidange: detailsvehicule.dernierevidange,
			kilometrage: detailsvehicule.kilometrage,
			detail1: detailsvehicule.detail1,
			flatListItem: flatListItem,
			dateintervention: detailsvehicule.dateintervention,
			detailderniereintervention: detailsvehicule.detailderniereintervention
			// useNativeDriver: false,
		});
		this.refs.myModal.open();
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
					height: 400
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
				}}>Détails des Interventions</Text>
				<Text>.</Text>
				<Text style={{marginLeft: 30, fontWeight: 'bold'}}>Dernière Vidange</Text>
				<TextInput 
					style={{
						height: 40,
						borderBottomColor: 'gray',
						marginLeft: 30,
						marginRight: 30,
						// marginTop: 20,
						marginBottom: 10,
						borderBottomWidth: 1
					}}
					value={this.state.dernierevidange}
					editable={false}
				/>
				<Text style={{marginLeft: 30, fontWeight: 'bold'}}>Kilometrage</Text>
				<TextInput 
					style={{
						height: 40,
						borderBottomColor: 'gray',
						marginLeft: 30,
						marginRight: 30,
						// marginTop: 20,
						marginBottom: 10,
						borderBottomWidth: 1
					}}
					value={this.state.kilometrage}
					editable={false}
				/>
				<Text style={{marginLeft: 30, fontWeight: 'bold'}}>Derniere Intervention</Text>
				<View style={{flexDirection: "row"}}>
				<TextInput 
					style={{
						height: 40,
						borderBottomColor: 'gray',
						marginLeft: 30,
						marginRight: 30,
						// marginTop: 20,
						marginBottom: 10,
						borderBottomWidth: 1
					}}
					value={this.state.dateintervention}
					editable={false}
				/>
				<TextInput 
					style={{
						height: 40,
						borderBottomColor: 'gray',
						marginLeft: 30,
						marginRight: 30,
						// marginTop: 20,
						marginBottom: 10,
						borderBottomWidth: 1
					}}
					value={this.state.detailderniereintervention}
					editable={false}
				/>

				</View>
			</Modal>
		);
	}
}