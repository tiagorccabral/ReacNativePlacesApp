import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class PlaceInputComponent extends Component {
  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder="Awesome place"
          value={this.props.placeName}
          onChangeText={this.props.placeNameChangeHandler}
        />
        <Button 
          title="Add"
          style={styles.placeButton}
          onPress={this.props.placeSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    //flex: 1,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  }
})

export default PlaceInputComponent;
