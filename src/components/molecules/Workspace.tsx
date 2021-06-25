import * as React from 'react';
import styled, {css} from 'styled-components';
import WorkspaceIconText from 'components/atoms/Workspace/WorkspaceIconText';
import { Title } from 'utils/Components';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

interface IWorkspace {
    name?: string,
    description: string,
    type?: string,
    users?: number,
    lastUpdate?: number,
    image?: string,
    id: number,
    icon?: React.ReactNode,
}

const StyledContentWrapper = styled.div<{column?: boolean, image?: string, info?: boolean}>`
    display: flex;
    flex-direction: ${({ column }) => column && 'column'};
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 10px;

    ${({ image }) => image && css`
        background: url(${image});
        width: 100%;
        height: 300px;
        background-size: cover;
        border-radius: 10px 10px 0 0;
    `}

    ${({info}) => info && css`
        flex-direction: column;
        padding: 20px;
    `}
`;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 400px;
    height: 400px;
    text-decoration: none;
    color: black;
`;

const StyledIcon = styled(WorkspaceIconText)`
    height: 20px;
    background-color: red;
    width: auto;
`;

const StyledSpan = styled.span`
    color: ${({ theme }) => theme.color.grey};
    font-size: 1.4rem;
    margin-top: 20px;
`;

const Workspace = ({ name, type, users, lastUpdate, image, icon, id, description }: IWorkspace) => (
    <StyledWrapper as={NavLink} to={{
        pathname: `workspace/${id}`,
        state: {title: name, content: description}
    }}>
        <StyledContentWrapper image={image} />
        <StyledContentWrapper info>
            <StyledContentWrapper>
                <Title>{name}</Title>
            </StyledContentWrapper>
            <StyledContentWrapper column>
                <StyledContentWrapper>
                    <StyledIcon>{type}</StyledIcon>
                    <WorkspaceIconText>users: {users}</WorkspaceIconText>
                </StyledContentWrapper>
                <StyledContentWrapper>
                    <StyledSpan>
                        {lastUpdate} days ago
                    </StyledSpan>
                </StyledContentWrapper>
            </StyledContentWrapper>
        </StyledContentWrapper>
    </StyledWrapper>
)

export default Workspace;
