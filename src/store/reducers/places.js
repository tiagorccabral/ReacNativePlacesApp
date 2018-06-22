import {
  ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE
} from '../actions/actionTypes';

const INITIAL_STATE = {
  places: [],
  selectedPlace: null
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: `${Math.random()}`,
          name: action.placeName,
          image: {
            uri:
              "https://2.bp.blogspot.com/-eu8hpUFb4jo/VyFsjHQGONI/AAAAAAAAAOc/du3SFPlGBoISGuxPrgm_TE3r6l77drH8wCLcB/s1600/onomatopeya_recort1.jpg"
          }
        })
      }
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== action.placeKey;
        }),
        selectedPlace: null
      }
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return place.key === action.placeKey;
        })
      }
    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      }
    default: return state
  }
}

export default reducer;