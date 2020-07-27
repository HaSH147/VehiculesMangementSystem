import React, { Component } from 'react';
import { AppRegistry, TouchableHighlight, TouchableOpacity, Image, FlatList, Platform, StyleSheet, Text, View } from 'react-native';
import flatListData from '../model/flatListData';
import AddModal from './AddModal';
import Swipeout from 'react-native-swipeout';
import EditModal from './EditModal';

class FlatListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeRowKey: null,
			numberOfRefresh: 0
		};
	}
	refreshFlatListItem = () => {
		this.setState((prevState) => {
			return {
				numberOfRefresh: prevState.numberOfRefresh +1
			};
		});
	}
	render() {
		const swipeSettings = {
			autoClose: true,
			onClose: (secId, rowId, direction) => {
				if(this.state.activeRowKey != null){
					this.setState({ activeRowKey: null });
				}
			},
			onOpen: (secId, rowId, direction) => {
				this.setState({ activeRowKey: this.props.item.key });
			},
			right: [
				{
					onPress: () => {
						this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this);
					},

					text: 'Modifier', color: '#ff6e40', fontSize: 19
				}
			],
			rowId: this.props.index,
			sectionId: 1

		};
		return (
			<Swipeout {...swipeSettings}>
				<View style={{
				flex: 1,
				flexDirection: 'column',
				marginTop: 1
				}}>
				<View style={{
					flex: 1,
					flexDirection: 'row',
					backgroundColor: '#f5f0e1',
					borderRadius: 8
					}}>

						<Image
							source={{uri: this.props.item.imageUrl}}
							style={{width: 	100, height: 100}}
						>
						</Image>
						<View style={{
							flex: 1,
							flexDirection: 'column',
							height: 20
						}}>
							<Text style={styles.flatListItem}>{this.props.item.marque}</Text>
							<Text style={styles.flatListItem}>{this.props.item.numéro_immatriculation}</Text>
						</View>
				</View>
					<View style={{
						// height: ,
						backgroundColor: "white"
					}}>
					</View>
			</View>
			</Swipeout>
		);
	}
}

const styles = StyleSheet.create({
	flatListItem: {
		color: 'black',
		padding: 18,
		fontSize: 16,
	}
})

export default class BasicFlatList extends Component {
	
	constructor(props) {
		super(props);
		this.state = ({
			deleteRowKey: null,
		})
		this._onPressAdd = this._onPressAdd.bind(this);
	}
	refreshFlatList = (activeKey) => {
		this.setState((prevState)=>{
			return{
				deleteRowKey: activeKey
			};
		});
		this.refs.flatList.scrollToEnd();
	}
	_onPressAdd () {
			this.refs.addModal.showAddModal();
		}
	render() {
		return (
			<View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 2}}>
				<View style={{
					backgroundColor: "#ff6e40",
					height: 60,
					flexDirection: 'row',
					justifyContent: 'flex-end',
					alignItems: 'center'
					}}>
					<TouchableOpacity
						style={{marginRight: 15}}
						underlayColor="#ff6e40"
						onPress={this._onPressAdd}
					>
					<Image
						style={{width: 40, height: 40, marginTop: 3}}
						source={require('../assets/add.png')}
					/>
					</TouchableOpacity>
				</View>
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
				<AddModal ref={'addModal'} parentFlatList={this}>
				</AddModal>
				<EditModal ref={'editModal'} parentFlatList={this}>
				</EditModal>
			</View>
			
		);
	}
}
//#009387