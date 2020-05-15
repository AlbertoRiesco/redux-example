import React from 'react';
import { connect } from 'react-redux';
import { asyncSetAtmosphereLayerNextPosition } from '../../redux/ducks/atmosphere';
import { StyledButton } from '../StyledButton/StyledButton';

const Button = ({ atmosphereLayerPosition, dispatch }) => {
    const tokenId = '123123';

    const handleClick = () => {
        dispatch(asyncSetAtmosphereLayerNextPosition(tokenId));
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
    const { atmosphereLayerPosition } = state.atmosphereReducer;

    return {
        atmosphereLayerPosition, 
    }
};

const ConnectedButton = connect(mapStateToProps)(Button);

export { ConnectedButton as ButtonWithoutMap};