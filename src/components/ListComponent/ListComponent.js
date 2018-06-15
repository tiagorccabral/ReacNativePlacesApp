import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';

class ListComponent extends Component {

  render() {
    return (
      <FlatList
        style={styles.listContainer}
        data={this.props.placesName}
        renderItem={(info) => (
          <ListItem
            placeName={info.item.name}
            placeImage={info.item.image}
            onItemPressed={() => this.props.onItemDeleted(info.item.key)}
          />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    paddingLeft: 40,
    paddingRight: 40,
  }
});

export default ListComponent;