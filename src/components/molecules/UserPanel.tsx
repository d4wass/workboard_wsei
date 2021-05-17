import * as React from 'react';
import styled, { css } from 'styled-components';
import { Wrapper, UserTitle } from 'utils/Components';
import SidebarBtn from 'components/atoms/SidebarBtn';
import person from 'assets/person.jpg'

const StyledWrapper = styled(Wrapper)`
    width: auto;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 20px;
    border-radius: 10px;
    background-color: #fff;
`;

const StyledContent = styled(Wrapper)<IContentStyled>`
    flex-direction: column;
    box-shadow: none;
    width: 100%;

    ${({ center }) => center && css`
        justify-content: center;
        align-items: center;
    `}
`

const StyledUserTitle = styled(UserTitle)`
    color: ${({theme}) => theme.color.grey};
`

const StyledSpan = styled.span`
    width: 100%;
    height: 1px;
    margin: 20px 0;
    background-color: ${({ theme }) => theme.color.iconGrey};
`

const StyledImg = styled.div`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-image: url(${person});
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 20px;
`;

interface IContentStyled {
    center?: boolean
}

const UserPanel: React.FC = () => (
    <StyledWrapper>
        <StyledContent center>
            <StyledImg/>
            <UserTitle>John Doe</UserTitle>
            <StyledUserTitle>Job Title - Company</StyledUserTitle>
        </StyledContent>
        <StyledSpan/>
        <StyledContent>
            <SidebarBtn content="Your Network" icon="Network"/>
            <SidebarBtn content="Your publications" icon="Publications"/>
        </StyledContent>
    </StyledWrapper>
);

export default UserPanel;