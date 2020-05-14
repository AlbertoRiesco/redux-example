import React from 'react';
import { connect } from 'react-redux';
import { asyncSetAtmosphereLayerPosition } from '../../redux/ducks/atmosphere';
import { StyledButton } from '../StyledButton/StyledButton';

const Button = ({ atmosphereLayerPosition, atmosphereLayers, dispatch }) => {
    const topPosition = atmosphereLayers.length - 1;
    const handleClick = () => {
        let position = atmosphereLayerPosition + 1;

        if (topPosition === atmosphereLayerPosition) {
            position = 0;
        }
        
        asyncSetAtmosphereLayerPosition(position)(dispatch);
    }
    
    return (
        <StyledButton 
            onClick={handleClick}
            label='without map dispatch'
        >
            Next layer (pos: { atmosphereLayerPosition })
        </StyledButton>
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