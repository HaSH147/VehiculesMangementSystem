import React, { Component } from 'react';
import { AppRegistry, TouchableHighlight, TouchableOpacity, Image, FlatList, Platform, StyleSheet, Text, View } from 'react-native';
import FlatListData from '../model/flatListData';
import DetailsModel from './Detailsmodel'

class FlatListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeRowKey: null,
		};
		this._onPressDetails = this._onPressDetails.bind(this);
	}

	_onPressDetails = () => {
		this.props.parentFlatList.refs.detailsModal.showDetailsModal(FlatListData[this.props.index], this);
	}

	render() {
		return (
				<View style={{
				flex: 1,
				flexDirection: 'column',
				marginTop: 2
				}}>
				<TouchableOpacity
					underlayColor="#25258e"
					onPress={this._onPressDetails}
				>
				<View style={{
					flex: 1,
					flexDirection: 'row',
					backgroundColor: '#e5e5dc',
					height: 100,
					borderRadius: 8
					}}>
						<View style={{
							flex: 1,
							flexDirection: 'column'
						}}>
							<Text style={{fontSize:20, marginLeft: 19, fontWeight: 'bold', color: "#606060FF"}}>Véhicule</Text>
							<Text style={styles.flatListItem}>{this.props.item.marque}</Text>

						</View>
						 <View style={{
							flex: 1,
							flexDirection: 'column'
						}}>
							<Text style={{fontSize:19, marginLeft: 19, fontWeight: 'bold', color: "#606060FF"}}>Numéro d'immatriculation</Text>
							<Text style={styles.flatListItem}>{this.props.item.numéro_immatriculation}</Text>
						</View>
						
				</View>
					</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	flatListItem: {
		color: 'black',
		padding: 18,
		// fontWeight: 'bold',
		fontSize: 16,
	}
})

export default class InterventionsFlatList extends Component {
	
	constructor(props) {
		super(props);
		this.state = ({
			deleteRowKey: null,
		})
	}
	render() {
		return (
			<View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 2}}>
				<FlatList 
					ref= {"flatList"}
					data={FlatListData}
					renderItem={({item, index}) => {
						return (
							<FlatListItem item={item} index={index} parentFlatList={this}>
							</FlatListItem>
						);						
					}}
				>
				</FlatList>
				<DetailsModel ref={'detailsModal'} parentFlatList={this}>
				</DetailsModel>
			</View>
			
		);
	}
}
//#8f246b
// <Text style={{fontSize:19, marginLeft: 19, color: "black"}}>Date d'Intervention</Text>
// <Text style={styles.flatListItem}>{this.props.item.dateintervention}</Text>


 // <View style={{
	// 						flex: 1,
	// 						flexDirection: 'column'
	// 					}}>
	// 						<Text style={{fontSize:19, marginLeft: 19, color: "black"}}>Date d'Intervention</Text>
	// 						<Text style={styles.flatListItem}>{this.props.item.dateintervention}</Text>
	// 					</View>