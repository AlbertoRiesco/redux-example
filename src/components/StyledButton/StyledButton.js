import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-right: 20px;
    padding: 8px 20px 8px 0;
    display: inline-flex;
    flex-direction: column;
    border-right: 1px solid lightGray;
    :last-child {
        border-right: none;
    }
`;

const Label = styled.span`
    font-family: sans-serif;
    display: inline-block;
    margin-bottom: 12px;
    font-size: 14px;
    font-weight: bold;
    color: #777777;
`;

const ButtonWithStyles = styled.button`
    background: #2c70ae;
    color: white;
    border: none;
    font-weight: 900;
    padding: 12px;
    display: inline-block;
    font-family: sans-serif;
    text-transform: uppercase;
    cursor: pointer;
`;

export const StyledButton = ({ label, children, ...props }) => {
    return (
        <Container>
            <Label>{ label }</Label>
            <ButtonWithStyles {...props}>
                { children }
            </ButtonWithStyles>
        </Container>
    );
};