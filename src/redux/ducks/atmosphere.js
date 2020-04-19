// initial value
const initialValue = {
    atmosphereLayers: ['Troposfera', 'Estratosfera', 'Mesosfera', 'Ionosfera', 'Exosfera'],
    atmosphereLayerPosition: 0
}

// actions
export const SET_POSITION = 'redux-example/atmosphereLayerPosition/SET_POSITION';

// reducer
export default function reducer(state = initialValue, action = {}) {
  switch (action.type) {
    case SET_POSITION:
      return { ...state, atmosphereLayerPosition: action.payload };
    default:
      return state;
  }
}

// creador de acciones
export function changeAtmosphereLayerPosition(position,xx) {
  console.log(xx);
  return { type: SET_POSITION, payload: position };
}