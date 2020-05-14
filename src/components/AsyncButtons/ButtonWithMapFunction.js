import React from 'react';
import { connect } from 'react-redux';
import { asyncSetAtmosphereLayerPosition } from '../../redux/ducks/atmosphere';
import { StyledButton } from '../StyledButton/StyledButton';

const Button = ({ atmosphereLayerPosition, atmosphereLayers, asyncSetAtmosphereLayerPosition }) => {
    const topPosition = atmosphereLayers.length - 1;
    let position = atmosphereLayerPosition + 1;

    if (topPosition === atmosphereLayerPosition) {
        position = 0;
    }

    return (
        <StyledButton 
            onClick={asyncSetAtmosphereLayerPosition(position)}
            label='map dispatch func'
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

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        asyncSetAtmosphereLayerPosition: (position) => (event) => {
            dispatch(asyncSetAtmosphereLayerPosition(position)); //without thunk asyncSetAtmosphereLayerPosition(position)(dispatch)
        }
    };
};

const ConnectedButton = connect(mapStateToProps, mapDispatchToProps)(Button);

export { ConnectedButton as ButtonWithMapFunction};