import React from 'react';
import { Atmosphere } from './components/Atmosphere/Atmosphere';  
import { Button1 } from './components/Button1/Button1';  
import { Button2 } from './components/Button2/Button2';  
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

function App() {
  return (
    <Provider store={store}>
      <Button1 />
      <Button2 originalProp={true} />
      <Atmosphere />
    </Provider>
  );
}

export default App;
