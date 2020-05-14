import React from 'react';
import { Atmosphere } from './components/Atmosphere/Atmosphere';  
import { WithHooksButton } from './components/WithHooksButton/WithHooksButton';  
import { WithoutHooksButton } from './components/WithoutHooksButton/WithoutHooksButton';  
import { ButtonWithoutMap } from './components/SyncButtons/ButtonWithoutMap';  
import { ButtonWithMapFunction } from './components/SyncButtons/ButtonWithMapFunction';  
import { ButtonWithMapObject } from './components/SyncButtons/ButtonWithMapObject';  
import { ButtonWithoutMap as AsyncButtonWithoutMap } from './components/AsyncButtons/ButtonWithoutMap';  
import { ButtonWithMapFunction as AsyncButtonWithMapFunction } from './components/AsyncButtons/ButtonWithMapFunction';  
import { ButtonWithMapObject as AsyncButtonWithMapObject } from './components/AsyncButtons/ButtonWithMapObject';  
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 700px;
    margin: 0 auto;
    margin-bottom: 42px;
`;

const Title = styled.h2`
    font-family: sans-serif;
    margin-top: 0;
`;

function App() {
    return (
        
            <Provider store={store}>
                <Container>
                    <div>
                        <Title>Simple Case</Title>
                        <WithHooksButton />
                        <WithoutHooksButton />
                    </div>
                </Container>
                <Container>
                    <div>
                        <Title>Sync Buttons</Title>
                        <ButtonWithoutMap />
                        <ButtonWithMapFunction originalProp={true} />
                        <ButtonWithMapObject originalProp={true} />
                    </div>
                </Container>
                <Container>
                    <div>
                        <Title>Async Buttons</Title>
                        <AsyncButtonWithoutMap />
                        <AsyncButtonWithMapFunction originalProp={true} />
                        <AsyncButtonWithMapObject originalProp={true} />
                    </div>
                </Container>
                <Atmosphere />
            </Provider>
    );
}

export default App;
