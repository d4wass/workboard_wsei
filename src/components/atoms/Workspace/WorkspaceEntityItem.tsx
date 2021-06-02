import React from 'react';
import styled from 'styled-components';
import { Wrapper } from 'utils/Components';

type WorkspaceEntityItemType = {
    title: string,
    content: string,

}

const StyledWrapper = styled(Wrapper)`
    border-radius: 10px;
    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
    flex-direction: column;
    padding: 20px;
`;

const StyledTitle = styled.h3`
    font-weight: ${({ theme }) => theme.color.darkblue};
    font-size: 2rem;
`;

const StyledParagraph = styled.p`
    color: ${({ theme }) => theme.color.blue};
    font-size: 1.4rem;
`

const WorkspaceEntityItem = ({title, content}: WorkspaceEntityItemType) => (
    <StyledWrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledParagraph>{content}</StyledParagraph>
    </StyledWrapper>
);

export default WorkspaceEntityItem