// initial value
const initialValue = {
    atmosphereLayers: ['Troposfera', 'Estratosfera', 'Mesosfera', 'Ionosfera', 'Exosfera'],
    atmosphereLayerPosition: 0
}

// actions
export const SET_POSITION = 'redux-example/atmosphereLayerPosition/SET_POSITION';

// reducer
export default function reducer(state = initialValue, action = {}) {
  console.log(action);
  switch (action.type) {
    case SET_POSITION:
      console.log({ ...state, atmosphereLayerPosition: action.payload });
      return { ...state, atmosphereLayerPosition: action.payload };
    default:
      console.log(state);
      return state;
  }
}

// creador de acciones
export function changeAtmosphereLayerPosition(xxx) {
  console.log(xxx);
  return { type: SET_POSITION, payload: position };
}