import React from 'react';
import atm from './atm.png';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Container = styled.div`
    position: relative;
    width: 300px;
    margin: 0 auto;
`;

const Image = styled.img`
    width: 100%;
`;

const Layer = styled.div`
    position: absolute;
    left: 190px;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: bold;
    color: ${({selected}) => selected ? 'black' : '#777777'};
`;

const Troposfera = styled(Layer)`
    top: 260px;
`;

const Estratosfera = styled(Layer)`
    top: 220px; 
`;

const Mesosfera = styled(Layer)`
    top: 175px;
`;

const Ionosfera = styled(Layer)`
    top: 110px;
`;

const Exosfera = styled(Layer)`
    top:30px;
`;

const Atmosphere = ({ layerPosition }) => {
    return (
        <Container>
            <Troposfera selected={layerPosition === 0}>🚀 Troposfera</Troposfera>
            <Estratosfera selected={layerPosition === 1}>🚀 Estratosfera</Estratosfera>
            <Mesosfera selected={layerPosition === 2}>🚀 Mesosfera</Mesosfera>
            <Ionosfera selected={layerPosition === 3}>🚀 Ionosfera</Ionosfera>
            <Exosfera selected={layerPosition === 4}>🚀 Exosfera</Exosfera>
            <Image src={atm} alt='' />
        </Container>
    );
};

const mapStateToProps = (state) => ({layerPosition: state.atmosphereReducer.atmosphereLayerPosition});

const ConnectedAtmosphere = connect(mapStateToProps)(Atmosphere);

export { ConnectedAtmosphere as Atmosphere};