import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


class ListItem extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onItemPressed}>
        <View style={styles.listItem}>
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
    backgroundColor: '#eee'
  }
})

export default ListItem;