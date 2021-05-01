import * as React from 'react';
import styled from 'styled-components';
import Icon from 'components/atoms/Icon';
import { Wrapper } from 'utils/Components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Home } from 'assets/icons/house.svg';
import { ReactComponent as Bell } from 'assets/icons/bell.svg';
import { ReactComponent as Comment } from 'assets/icons/comments.svg';

const StyledIcon = styled.div`
    background-color: transparent;
`;

const StyledWrapper = styled(Wrapper)`
    background-color: none;
    align-items: center;
    width: 24%;
    justify-content: flex-end;
`;

const Notification: React.FC = () => (
    <StyledWrapper>
        <StyledIcon as={NavLink} to="/">
            <Home/>
        </StyledIcon>
        <Icon>
            <Bell/>
        </Icon>
        <Icon>
            <Comment/>
        </Icon>
    </StyledWrapper>
)

export default Notification;