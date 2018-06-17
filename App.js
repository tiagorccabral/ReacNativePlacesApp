import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import PlaceInputComponent from './src/components/PlaceInputComponent/PlaceInputComponent'
import ListComponent from './src/components/ListComponent/ListComponent';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import imagemNuvem from './src/assets/imagem-nuvem.jpg';

export default class App extends React.Component {
  state = {
    places: [],
    selectedPlace: null
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

  placeSelectedHandler = (key) => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    })
  }

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  }

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail 
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInputComponent onPlaceAdded={this.placeSubmitHandler} />
        <ListComponent
          placesName={this.state.places}
          onItemSelected={this.placeSelectedHandler}
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
