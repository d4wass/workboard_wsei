import styled from 'styled-components';
import ProfileInput from 'components/atoms/Profile/ProfileInput';
import React, { useState } from 'react';
import Delete from 'assets/icons/times-solid.svg'

type SpecificationInputType = {
    value: string,
    handleRemoveBtn: (e: React.MouseEvent<HTMLElement>) => void,
    id: string
}

const StyledWrapper = styled.div`
    display: flex;
`;

const StyledButton = styled.button <{ id: string }>`
    border: none;
    position: relative;
    z-index: 1;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: ${() => `url(${Delete})`};
    background-repeat: no-repeat;
    background-size: 60% 60%;
    background-position: center;
    background-color: transparent;
    margin: 0 5px;
    cursor: pointer;
`;

const StyledInputWrapper = styled.div`
    display: flex;
`;

const SpecificationInput = ({ value, handleRemoveBtn, id }: SpecificationInputType) => {
    const [inputValue, setInputValue] = useState<string>(value);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    return (
        <StyledWrapper>
            <StyledInputWrapper>
                <ProfileInput value={inputValue} fnChange={handleInput} />
                <StyledButton onClick={(e) => handleRemoveBtn(e)} id={id}></StyledButton>
            </StyledInputWrapper>
        </StyledWrapper>
    )
}

export default SpecificationInput;