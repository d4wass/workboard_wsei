import React from 'react';
import styled from 'styled-components';

type ProfileInputType = {
    value: string,
    name: string,
    fnChange?: any
}

const StyledInput = styled.input`
    padding: 0px 10px;
    background-color: rgba(42, 63, 157, 0.1);
    border-radius: 5px;
    margin-bottom: 5px;
`;

const ProfileInput = ({ value, name, fnChange }: ProfileInputType) => (
    <StyledInput type='text' value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => fnChange(e)} name={name} />
);

export default ProfileInput;