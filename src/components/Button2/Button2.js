import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { changeAtmosphereLayerPosition } from '../../redux/ducks/atmosphere';

const Button2 = ({ layerPosition, topPosition, onClick }) => {
    let position = layerPosition + 1;

    if (topPosition === layerPosition) {
        position = 0;
    }

    return (
        <button onClick={onClick(position)}>Next layer</button>
    );
};

const mapStateToProps = (state) => ({layerPosition: state.atmosphereReducer.atmosphereLayerPosition, topPosition: state.atmosphereReducer.atmosphereLayers.length - 1});
const mapDispatchToProps = (dispatch, xx) => ({onClick: (position) => (event) => {
    console.log(xx);
    dispatch(changeAtmosphereLayerPosition(position));
}
});

const ConnectedButton2 = connect(mapStateToProps, mapDispatchToProps)(Button2);

export { ConnectedButton2 as Button2};