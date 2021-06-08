import * as React from 'react';
import styled from 'styled-components';
import UserPanel from 'components/molecules/UserPanel';
import SidebarBtn from 'components/atoms/SidebarBtn';
import { NavLink } from 'react-router-dom';

const StyledWrapper = styled.div`
    width: 20vw;
    padding: 30px;
`

const StyledContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`


const Sidebar: React.FC = () => (
    <StyledWrapper>
        <UserPanel />
        <StyledContentWrapper>
            <SidebarBtn icon="Entites" content="Your Entities" />
            <SidebarBtn icon="Atom" content="Ecosystem" />
        </StyledContentWrapper>
    </StyledWrapper>
)

export default Sidebar;