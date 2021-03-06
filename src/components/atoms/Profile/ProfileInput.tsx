import React from 'react';
import styled from 'styled-components';

type ProfileInputType = {
    value: string,
    name?: string,
    fnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const StyledInput = styled.input`
    padding: 5px 10px;
    background-color: rgba(42, 63, 157, 0.1);
    border-radius: 5px;
    margin-bottom: 5px;
    border: none;
`;

const ProfileInput = ({ value, name, fnChange }: ProfileInputType) => (
    <StyledInput type='text' value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => fnChange(e)} name={name} />
);

export default ProfileInput;