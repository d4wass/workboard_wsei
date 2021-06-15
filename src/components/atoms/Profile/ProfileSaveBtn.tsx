import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Edit } from 'assets/icons/edit-regular.svg';
import { ReactComponent as Save } from 'assets/icons/save-regular.svg';

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    color: ${({ theme }) => theme.color.blue};
    transition: all ease-in-out 0.3s;
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover{
        background-color: rgba(42,63,157, 0.2);
    }
`;

const StyledEdit = styled(Edit)`
    height: 20px;
`

const StyledSave = styled(Save)`
    height: 20px;
`

const ProfileSaveBtn = ({ handleClick, isEdited }: { handleClick: (isEdited: boolean) => void, isEdited: boolean }) => (
    <StyledButton onClick={() => handleClick(!isEdited)}>{isEdited ? <StyledSave /> : <StyledEdit />}</StyledButton>
);

export default ProfileSaveBtn;