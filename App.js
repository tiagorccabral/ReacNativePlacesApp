import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import PlaceInputComponent from './src/components/PlaceInputComponent/PlaceInputComponent'
import ListComponent from './src/components/ListComponent/ListComponent';
import imagemNuvem from './src/assets/imagem-nuvem.jpg';

export default class App extends React.Component {
  state = {
    places: []
  };

  placeSubmitHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: `${Math.random()}`,
          name: placeName,
          image: imagemNuvem
        })
      };
    });
  }

  placeDeletedHandler = (key) => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key;
        })
      };
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInputComponent onPlaceAdded={this.placeSubmitHandler} />
        <ListComponent
          placesName={this.state.places}
          onItemDeleted={this.placeDeletedHandler}
        />
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
