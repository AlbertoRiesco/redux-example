import React from 'react';
import { Atmosphere } from './components/Atmosphere/Atmosphere';  
import { ButtonWithoutMap } from './components/SyncButtons/ButtonWithoutMap';  
import { ButtonWithMapFunction } from './components/SyncButtons/ButtonWithMapFunction';  
import { ButtonWithMapObject } from './components/SyncButtons/ButtonWithMapObject';  
import { ButtonWithoutMap as AsyncButtonWithoutMap } from './components/AsyncButtons/ButtonWithoutMap';  
import { ButtonWithMapFunction as AsyncButtonWithMapFunction } from './components/AsyncButtons/ButtonWithMapFunction';  
import { ButtonWithMapObject as AsyncButtonWithMapObject } from './components/AsyncButtons/ButtonWithMapObject';  
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

function App() {
  return (
    <Provider store={store}>
      <h2>Sync Buttons</h2>
      <ButtonWithoutMap />
      <ButtonWithMapFunction originalProp={true} />
      <ButtonWithMapObject originalProp={true} />
      <h2>Async Buttons</h2>
      <AsyncButtonWithoutMap />
      <AsyncButtonWithMapFunction originalProp={true} />
      <AsyncButtonWithMapObject originalProp={true} />
      <Atmosphere />
    </Provider>
  );
}

export default App;
