import React, { Component } from 'react';
import { AppRegistry, TouchableHighlight, TouchableOpacity, Image, FlatList, Platform, StyleSheet, Text, View } from 'react-native';
import flatListData from '../model/flatListData';
import DetailsPromospubModel from './DetailsPromospubModel';

class FlatListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeRowKey: null,
		};
		this._onPressDetails = this._onPressDetails.bind(this);
	}

	_onPressDetails = () => {
		this.props.parentFlatList.refs.detailsPromospubModal.showPromosDetailspubModal(flatListData[this.props.index], this);
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
						<Image
							source={{uri: this.props.item.imagepromoUrl}}
							style={{width: 	100, height: 100}}
						>
						</Image>
						<View style={{
							flex: 1,
							flexDirection: 'column'
						}}>
							
							<Text style={styles.flatListItem}>{this.props.item.dureepromopub}</Text>
							<Text style={styles.flatListItemdesc}>{this.props.item.descriptionpromopub}</Text>

						</View>
						
						
				</View>
					</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	flatListItem: {
		color: '#F93822FF',
		padding: 18,
		marginTop: -18,
		// fontWeight: 'bold',
		fontSize: 16,
	},
	flatListItemdesc: {
		color: '#606060FF',
		padding: 18,
		marginTop: -33,
		// fontWeight: 'bold',
		fontSize: 12,
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
					data={flatListData}
					renderItem={({item, index}) => {
						return (
							<FlatListItem item={item} index={index} parentFlatList={this}>
							</FlatListItem>
						);						
					}}
				>
				</FlatList>
				<DetailsPromospubModel ref={'detailsPromospubModal'} parentFlatList={this}>
				</DetailsPromospubModel>
			</View>
			
		);
	}
}