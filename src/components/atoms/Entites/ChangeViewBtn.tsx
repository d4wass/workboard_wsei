import {useState} from 'react';
import { Wrapper } from 'utils/Components';
import styled from 'styled-components';

const StyledWrapper = styled(Wrapper)`
    border: ${({ theme }) => `solid 1px ${theme.color.darkblue}`};
`;

const StyledButton = styled.button<{active: boolean}>`
    border: none;
    padding: 10px;
    cursor: pointer;
    background-color: ${({active}) => active ? 'rgba(42,63,157, 0.2)' : 'transparent'};
`;

const ChangeViewBtn = ({ handleView }: { handleView: () => void }) => {

    const [isMosaicActive, setMosaicActive] = useState<boolean>(true);
    const [isListActive, setListActive] = useState<boolean>(false);

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