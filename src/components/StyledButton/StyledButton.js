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
`;

const ButtonWithStyles = styled.button`
    background: DarkOrange;
    font-weight: 900;
    border: 2px solid black;
    border-radius: 2em;
    padding: 10px;
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