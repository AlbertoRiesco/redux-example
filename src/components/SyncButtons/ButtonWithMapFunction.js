import React from 'react';
import { connect } from 'react-redux';
import { setAtmosphereLayerPosition } from '../../redux/ducks/atmosphere';

const Button = ({ atmosphereLayerPosition, atmosphereLayers, handleClick }) => {
    const topPosition = atmosphereLayers.length - 1;
    let position = atmosphereLayerPosition + 1;

    if (topPosition === atmosphereLayerPosition) {
        position = 0;
    }

    return (
        <button onClick={handleClick(position)}>Next layer (map dispatch func)</button>
    );
};

const mapStateToProps = (state) => {
    const { atmosphereLayerPosition, atmosphereLayers } = state.atmosphereReducer;

    return {
        atmosphereLayerPosition, 
        atmosphereLayers
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleClick: (position) => (event) => dispatch(setAtmosphereLayerPosition(position))
});

const ConnectedButton = connect(mapStateToProps, mapDispatchToProps)(Button);

export { ConnectedButton as ButtonWithMapFunction};