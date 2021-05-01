import * as React from 'react';
import styled from 'styled-components';
import UserPanel from 'components/molecules/UserPanel';

const StyledWrapper = styled.div`
    width: 20%;
    padding: 30px;
`

const Sidebar: React.FC = () => (
    <StyledWrapper>
        <UserPanel />
    </StyledWrapper>
)

export default Sidebar;