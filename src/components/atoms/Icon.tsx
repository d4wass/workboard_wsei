import * as React from 'react';
import styled from 'styled-components';


const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    width: 45px;
    background-color: ${({theme}) => theme.color.iconGrey};
    border-radius: 50%;
    margin-left: 10px;
`

const Icon: React.FC = ({ children }: { children?: React.ReactNode }) => (
    <StyledWrapper>
        {children}
    </StyledWrapper>
)

export default Icon;