import * as React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    background-color: ${({ theme }) => theme.color.grey};
    border-radius: 50%;
    padding: 25px;
    margin-left: 10px;
`

const StyledParagraph = styled.p`
    color: ${({ theme }) => theme.color.blue};
`;

const NavigationItem: React.FC = ({ children }: {children?: React.ReactNode}) => (
    <StyledWrapper>
        <StyledParagraph>
            {children}
        </StyledParagraph>
    </StyledWrapper>
)

export default NavigationItem;