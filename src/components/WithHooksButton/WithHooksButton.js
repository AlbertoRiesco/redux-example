import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAtmosphereLayerPosition } from '../../redux/ducks/atmosphere';
import { StyledButton } from '../StyledButton/StyledButton';

const Button = () => {
    const dispatch = useDispatch();
    const position = useSelector(state => state.atmosphereReducer.atmosphereLayerPosition);

    return (
        <StyledButton 
            onClick={() => dispatch(addAtmosphereLayerPosition())}
            label='with hooks'
        >
            Next layer (pos: { position })
        </StyledButton>
    );
};

export { Button as WithHooksButton};