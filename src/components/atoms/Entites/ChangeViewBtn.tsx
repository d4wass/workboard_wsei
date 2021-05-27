import React, {useState} from 'react';
import styled from 'styled-components';
import { Wrapper } from 'utils/Components';

const StyledWrapper = styled(Wrapper)`
    border-radius: 10px;
    border: ${({ theme }) => `solid 1px ${theme.color.darkblue}`};
`;

const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    padding: 10px;
    cursor: pointer;
`;

const ChangeViewBtn = ({ handleView }: { handleView: () => void }) => {

    const [] = useState()

    return (
        <StyledWrapper>
            <StyledButton onClick={handleView}>mosaic</StyledButton>
            <StyledButton onClick={handleView}>list</StyledButton>
        </StyledWrapper>
    )
};

export default ChangeViewBtn;