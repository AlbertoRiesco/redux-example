import React from 'react';
import { connect } from 'react-redux';
import { addAtmosphereLayerPosition } from '../../redux/ducks/atmosphere';
import { StyledButton } from '../StyledButton/StyledButton';

const Button = ({ atmosphereLayerPosition, addAtmosphereLayerPosition }) => {
    return (
        <StyledButton 
            onClick={addAtmosphereLayerPosition}
            label='without hooks'
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

const mapDispatchToProps = { addAtmosphereLayerPosition };

const ConnectedButton = connect(mapStateToProps, mapDispatchToProps)(Button);

export { ConnectedButton as WithoutHooksButton};