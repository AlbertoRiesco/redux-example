import { AsyncCall } from '../../mocks/AsyncCall'
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

// action creators
export function changeAtmosphereLayerPosition(position, xxx) {
  console.log(xxx);
  return { type: SET_POSITION, payload: position };
}

// thunks
export function asyncChangeAtmosphereLayerPosition(position) {
  return (dispatch, getState) => {
    new AsyncCall()
    .customAction({ position })
    .then(res => {
      dispatch(changeAtmosphereLayerPosition(res));
    })
  }
}