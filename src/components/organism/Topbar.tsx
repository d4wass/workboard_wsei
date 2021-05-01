import * as React from 'react';
import styled from 'styled-components';
import { Wrapper } from 'utils/Components';
import Logo from 'components/atoms/Logo';
import Dropdown from 'components/molecules/Dropdown';
import Input from 'components/molecules/Input';
import Notification from 'components/molecules/Notification'


const StyledWrapper = styled(Wrapper)`
    width: auto;
    padding: 15px 30px;
    width: 100%;
    box-shadow: 0 8px 6px -6px #ccc;
`;

const StyledContentWrapper = styled(Wrapper)`
    width: 25%;
    justify-content: space-between;
`;



const Topbar: React.FC = () => (
    <StyledWrapper>
        <StyledContentWrapper>
            <Logo />    
            <Dropdown />    
        </StyledContentWrapper>
        <Input label="Search"/>
        <Notification />
    </StyledWrapper>
);

export default Topbar;