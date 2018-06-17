import React, { Component } from 'react';

import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

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
            <Button title="Delete" color="red" onPress={this.props.onItemDeleted} />
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
  }
})

export default PlaceDetail;