import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ListItem from '../ListItem/ListItem';

class ListComponent extends Component {

  render () {
    const renderListItems = this.props.placesName.map((place, i) => (
      <ListItem
        key={i} 
        placeName={place} 
        onItemPressed={() => this.props.onItemDeleted(i) } 
      />
    ))
    return (
      <ScrollView style={styles.listContainer}>
        {renderListItems}
      </ScrollView>
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