import React from 'react';
import { connect } from 'react-redux';
import { asyncSetAtmosphereLayerNextPosition } from '../../redux/ducks/atmosphere';
import { StyledButton } from '../StyledButton/StyledButton';

const Button = ({ atmosphereLayerPosition, asyncSetAtmosphereLayerNextPosition }) => {
    const tokenId = '123123';

    return (
        <StyledButton 
            onClick={asyncSetAtmosphereLayerNextPosition(tokenId)}
            label='map dispatch func'
        >
            Next layer (pos: { atmosphereLayerPosition })
        </StyledButton>
    );
};

const mapStateToProps = (state) => {
    const { atmosphereLayerPosition, } = state.atmosphereReducer;

    return {
        atmosphereLayerPosition
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        asyncSetAtmosphereLayerNextPosition: (tokenId) => (event) => {
            dispatch(asyncSetAtmosphereLayerNextPosition(tokenId)); //without thunk asyncSetAtmosphereLayerPosition(position)(dispatch)
        }
    };
};

const ConnectedButton = connect(mapStateToProps, mapDispatchToProps)(Button);

export { ConnectedButton as ButtonWithMapFunction};