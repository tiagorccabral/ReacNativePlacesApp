import React, { Component } from 'react';

import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class PlaceDetail extends Component {
  render() {
    let modalContent = null;
    if (this.props.selectedPlace) {
      modalContent = (
        <View>
          <Image source={this.props.selectedPlace.image} style={styles.placeImage} />
          <Text style={styles.placeName} >{this.props.selectedPlace.name}</Text>
        </View>
      );
    }
    return (
      <Modal
        onRequestClose={this.props.onModalClosed}
        visible={this.props.selectedPlace !== null} 
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          {modalContent}
          <View>
            <TouchableOpacity onPress={this.props.onItemDeleted}>
              <View style={styles.deleteButton}>
                <Icon size={30} name="ios-trash" color="red" />
              </View>
            </TouchableOpacity>
            <Button title="Close" onPress={this.props.onModalClosed} />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  deleteButton: {
    alignItems: "center"
  }
})

export default PlaceDetail;