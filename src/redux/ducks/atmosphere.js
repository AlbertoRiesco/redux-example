import { AsyncCall } from '../../mocks/AsyncCall'
// initial value
const initialValue = {
    atmosphereLayers: ['Troposfera', 'Estratosfera', 'Mesosfera', 'Ionosfera', 'Exosfera'],
    atmosphereLayerPosition: 0
}

// actions
export const ADD_POSITION = 'redux-example/atmosphereLayerPosition/ADD_POSITION';
export const SET_POSITION = 'redux-example/atmosphereLayerPosition/SET_POSITION';

// reducer
export default function reducer(state = initialValue, action = {}) {
  switch (action.type) {
    case ADD_POSITION:
      let atmosphereLayerPosition = state.atmosphereLayerPosition + 1;

      if(state.atmosphereLayers.length - 1 === state.atmosphereLayerPosition) {
        atmosphereLayerPosition = 0;
      }

      return { ...state, atmosphereLayerPosition };
    case SET_POSITION:
      return { ...state, atmosphereLayerPosition: action.payload };
    default:
      return state;
  }
}

// action creators
export function addAtmosphereLayerPosition() {
  return { type: ADD_POSITION };
}

// action creators
export function setAtmosphereLayerPosition(payload) {
  return { type: SET_POSITION, payload };
}

// thunks
export function asyncSetAtmosphereLayerNextPosition(tokenId) {
  return (dispatch, getState) => {
    const { atmosphereLayerPosition, atmosphereLayers } = getState().atmosphereReducer;

    new AsyncCall()
    .customAction({ atmosphereLayerPosition, atmosphereLayers, tokenId })
    .then(res => {
      dispatch(setAtmosphereLayerPosition(res));
    })
  }
}