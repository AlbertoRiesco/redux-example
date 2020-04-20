import React from 'react';
import { connect } from 'react-redux';
import { asyncChangeAtmosphereLayerPosition } from '../../redux/ducks/atmosphere';

const Button = ({ layerPosition, topPosition, onClick }) => {
    let position = layerPosition + 1;

    if (topPosition === layerPosition) {
        position = 0;
    }

    return (
        <button onClick={onClick(position)}>Next layer (map dispatch func)</button>
    );
};

const mapStateToProps = (state) => ({layerPosition: state.atmosphereReducer.atmosphereLayerPosition, topPosition: state.atmosphereReducer.atmosphereLayers.length - 1});
const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: (position) => (event) => dispatch(asyncChangeAtmosphereLayerPosition(position)) //without thunk asyncChangeAtmosphereLayerPosition(position)(dispatch)
});

const ConnectedButton = connect(mapStateToProps, mapDispatchToProps)(Button);

export { ConnectedButton as ButtonWithMapFunction};