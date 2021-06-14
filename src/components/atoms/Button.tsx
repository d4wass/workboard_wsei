import * as React from 'react';
import styled from 'styled-components';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import { ReactComponent as NetworkBtn } from 'assets/icons/network.svg';


const StyledWrapper = styled.button`
    border-radius: 10px;
    border: ${({ theme }) => `solid 1px ${theme.color.darkblue}`};
    padding: 5px 10px;
    cursor: pointer;
    background-color: #fff;
`
type ButtonProps = {
    icon?: string,
    children?: string
}

const Button: React.FC<ButtonProps> = ({icon, children}) => (
    <StyledWrapper>
        {icon === 'Network' && <NetworkBtn />}
        {icon === 'Publications' && <Plus />}
        {children}
    </StyledWrapper>
)

export default Button;