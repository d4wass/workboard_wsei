import * as React from 'react';
import styled from 'styled-components';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import { ReactComponent as NetworkBtn } from 'assets/icons/network.svg';


const StyledWrapper = styled.button`
    border-radius: 10px;
    border: ${({ theme }) => `solid 1px ${theme.color.darkblue}`};
    padding: 5px 10px;
    background-color: #fff;
    cursor: pointer;
`
type ButtonProps = {
    icon: string
}

const Button: React.FC<ButtonProps> = ({icon}) => (
    <StyledWrapper>
        {icon === 'Network' && <NetworkBtn />}
        {icon === 'Publications' && <Plus />}
    </StyledWrapper>
)

export default Button;