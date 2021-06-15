import styled from 'styled-components';
import ProfileInput from 'components/atoms/Profile/ProfileInput';
import React, { useState } from 'react';
import {ReactComponent as Delete} from 'assets/icons/times-solid.svg'

type SpecificationInputType = {
    value: string,
    handleRemoveBtn?: () => void,
    id: string
}

const StyledWrapper = styled.div`
    display: flex;
`;

const StyledButton = styled.button <{id: string}>`
    border: none;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: ${({ theme }) => theme.color.blue};
    margin-left: 5px;
    cursor: pointer;
`;

const StyledDelete = styled(Delete)<{id: string}>`
    height: 20px;
    width: 20px;
`;

const StyledInputWrapper = styled.div`
    display: flex;
`;

const SpecificationInput = ({ value, handleRemoveBtn, id }: SpecificationInputType) => {
    const [inputValue, setInputValue] = useState<string>(value);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handleDelete = (e: React.MouseEvent<HTMLElement>) => {
        console.log((e.target as Element).id)
    }

    return (
        <StyledWrapper>
            <StyledInputWrapper>
                <ProfileInput value={inputValue} fnChange={handleInput} />
                <StyledButton onClick={(e) => handleDelete(e)} id={id}><StyledDelete id={id}/></StyledButton>
            </StyledInputWrapper>
        </StyledWrapper>
    )
}

export default SpecificationInput;