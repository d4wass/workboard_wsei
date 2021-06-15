import styled from 'styled-components';
import ProfileInput from 'components/atoms/Profile/ProfileInput';
import {ReactComponent as Delete} from 'assets/icons/times-solid.svg'

type SpecificationInputType = {
    value: string,
    handleInput?: () => void
    handleRemoveBtn?: () => void
}

const StyledWrapper = styled.div`
    display: flex;
`;

const StyledButton = styled.button`
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

const StyledDelete = styled(Delete)`
    height: 20px;
    width: 20px;
`;

const StyledInputWrapper = styled.div`
    display: flex;
`;

const SpecificationInput = ({ value, handleInput, handleRemoveBtn }: SpecificationInputType) => {

    return (
        <StyledWrapper>
            <StyledInputWrapper>
                <ProfileInput value={value} fnChange={handleInput} />
                <StyledButton><StyledDelete/></StyledButton>
            </StyledInputWrapper>
        </StyledWrapper>
    )
}

export default SpecificationInput;