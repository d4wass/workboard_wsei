import * as React from 'react';
import styled from 'styled-components';
import { Wrapper } from 'utils/Components';
import DropdownList from 'components/molecules/Topbar/DropdownList';

const StyledWrapper = styled(Wrapper)`
    box-shadow: none;
    margin-right: 30px;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 300px;
`;

const Dropdown: React.FC = () => (
    <StyledWrapper>
        <DropdownList />
    </StyledWrapper>
);

export default Dropdown;