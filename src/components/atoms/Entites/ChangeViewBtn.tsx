import React, {useState} from 'react';
import { Wrapper } from 'utils/Components';
import styled, {css} from 'styled-components';

const StyledWrapper = styled(Wrapper)`
    border-radius: 10px;
    border: ${({ theme }) => `solid 1px ${theme.color.darkblue}`};
`;

const StyledButton = styled.button<{active: boolean}>`
    border: none;
    padding: 10px;
    cursor: pointer;
    background-color: ${({active}) => active ? 'red' : 'transparent'};

`;

const ChangeViewBtn = ({ handleView }: { handleView: () => void }) => {

    const [isMosaicActive, setMosaicActive] = useState(true);
    const [isListActive, setListActive] = useState(false);

    const handleActive = () => {
        if (isMosaicActive) {
            setListActive(true)
            setMosaicActive(false)
        } else if (!isMosaicActive) {
            setMosaicActive(true)
            setListActive(false)
        }
    }

    return (
        <StyledWrapper>
            <StyledButton
                onClick={() => {
                    console.log()
                    handleView()
                    handleActive()
                }}
                active={isMosaicActive}
            >mosaic</StyledButton>
            <StyledButton
                onClick={() => {
                    handleView()
                    handleActive()
                }}
                active={isListActive}
            >list</StyledButton>
        </StyledWrapper>
    )
};

export default ChangeViewBtn;