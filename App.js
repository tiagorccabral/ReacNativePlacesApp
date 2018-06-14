import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import PlaceInputComponent from './src/components/PlaceInputComponent/PlaceInputComponent'
import ListComponent from './src/components/ListComponent/ListComponent';

export default class App extends React.Component {
  state = {
    placeName: "",
    places: []
  }

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    })

  }

  placeDeletedHandles = (index) => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place, i) => {
          return i !== index;
        })
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInputComponent 
          placeName={this.state.placeName} 
          placeNameChangeHandler={this.placeNameChangeHandler}
          placeSubmitHandler={this.placeSubmitHandler}
        />
        <View style={styles.listContainer}>
          <ListComponent placesName={this.state.places} onItemDeleted={this.placeDeletedHandles}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  listContainer: {
    width: '100%'
  }
});
