import React from 'react';
import { connect } from 'react-redux';
import { setAtmosphereLayerPosition } from '../../redux/ducks/atmosphere';


const Button = ({ atmosphereLayerPosition, atmosphereLayers, dispatch }) => {
    const topPosition = atmosphereLayers.length - 1;
    const handleClick = () => {
        let position = atmosphereLayerPosition + 1;

        if (topPosition === atmosphereLayerPosition) {
            position = 0;
        }
        
        dispatch(setAtmosphereLayerPosition(position));
    }
    
    return (
        <button onClick={handleClick}>Next layer (without map dispatch)</button>
    );
};

const mapStateToProps = (state) => {
    const { atmosphereLayerPosition, atmosphereLayers } = state.atmosphereReducer;

    return {
        atmosphereLayerPosition, 
        atmosphereLayers
    }
};

const ConnectedButton = connect(mapStateToProps)(Button);

export { ConnectedButton as ButtonWithoutMap};