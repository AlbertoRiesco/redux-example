import React from 'react';
import { connect } from 'react-redux';
import { asyncChangeAtmosphereLayerPosition } from '../../redux/ducks/atmosphere';


const Button = ({ layerPosition, topPosition, dispatch }) => {
    const handleClick = () => {
        let position = layerPosition + 1;

        if (topPosition === layerPosition) {
            position = 0;
        }
        
        asyncChangeAtmosphereLayerPosition(position)(dispatch);
    }
    
    return (
        <button onClick={handleClick}>Next layer (without map dispatch)</button>
    );
};

const mapStateToProps = (state) => ({layerPosition: state.atmosphereReducer.atmosphereLayerPosition, topPosition: state.atmosphereReducer.atmosphereLayers.length - 1});

const ConnectedButton = connect(mapStateToProps)(Button);

export { ConnectedButton as ButtonWithoutMap};