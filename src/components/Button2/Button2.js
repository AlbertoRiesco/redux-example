import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { SET_POSITION } from '../../redux/ducks/atmosphere';

const Container = styled.div`
    position: relative;
    width: 300px;
    margin: 0 auto;
    border: 2px solid blue;
`;

const Button2 = ({ layerPosition, topPosition, dispatch }) => {
    const handleClick = () => {
        let position = layerPosition + 1;

        if (topPosition === layerPosition) {
            position = 0;
        }
        
        dispatch({type: SET_POSITION, payload: position});
    }
    
    return (
        <button onClick={handleClick}>Next layer</button>
    );
};

const mapStateToProps = (state) => ({layerPosition: state.atmosphereReducer.atmosphereLayerPosition, topPosition: state.atmosphereReducer.atmosphereLayers.length - 1});
const mapDispatchToProps = (state) => ({layerPosition: state.atmosphereReducer.atmosphereLayerPosition, topPosition: state.atmosphereReducer.atmosphereLayers.length - 1});

const ConnectedButton2 = connect(mapStateToProps, mapDispatchToProps)(Button2);

export { ConnectedButton2 as Button2};