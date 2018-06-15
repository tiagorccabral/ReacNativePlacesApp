import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


class ListItem extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onItemPressed}>
        <View style={styles.listItem}>
          <Image resizeMode="cover" source={this.props.placeImage} style={styles.placeImage} />
          <Text>{this.props.placeName}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    backgroundColor: '#eee',
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
    marginRight: 8,
    height: 30,
    width: 30
  }
})

export default ListItem;