import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { SET_POSITION } from '../../redux/ducks/atmosphere';


const Button1 = ({ layerPosition, topPosition, dispatch }) => {
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

const ConnectedButton1 = connect(mapStateToProps)(Button1);

export { ConnectedButton1 as Button1};