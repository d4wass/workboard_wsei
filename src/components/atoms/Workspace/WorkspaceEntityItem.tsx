import React from 'react';
import styled from 'styled-components';
import { Wrapper } from 'utils/Components';
import { NavLink } from 'react-router-dom';

type WorkspaceEntityItemType = {
    title: string,
    content: string,
    link: string,
}

const StyledWrapper = styled(Wrapper)`
    border-radius: 10px;
    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
    flex-direction: column;
    padding: 20px;
    justify-content: space-between;
    width: 100%;
    max-width: calc(95% / 3);
    background-color: ${({theme}) => theme.color.white};
`;

const StyledTitle = styled.h3`
    font-weight: ${({ theme }) => theme.color.darkblue};
    font-size: 2rem;
    margin-bottom: 20px;
`;

const StyledParagraph = styled.p`
    color: ${({ theme }) => theme.color.blue};
    font-size: 1.4rem;
`

const WorkspaceEntityItem = ({title, content, link}: WorkspaceEntityItemType) => (
    <StyledWrapper as={NavLink} to={link}>
        <StyledTitle>{title}</StyledTitle>
        <StyledParagraph>{content}</StyledParagraph>
    </StyledWrapper>
);

export default WorkspaceEntityItem