import React from 'react';
import styled from '@emotion/styled';

const MensajeError = styled.p`
    background-color: red;
    color: white;
    padding: 1rem;
    text-align: center;
    text-transform: uppercase;
`;

const Error = ( { mensaje } ) => {
    return (  
        <MensajeError> { mensaje } </MensajeError>
    );
}

export default Error;