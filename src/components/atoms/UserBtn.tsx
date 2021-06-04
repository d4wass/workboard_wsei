import React from 'react';
import styled from 'styled-components';
import { Paragraph } from 'utils/Components';

const StyledWrapper = styled.div`
    display: flex;
    border-radius: 10px;

`;

const UserBtn = ({ children } : {children: string}) => (
    <StyledWrapper>
        {/* tutaj trzeba dodać ikone */}
        <Paragraph>{children}</Paragraph>
    </StyledWrapper>
);

export default UserBtn;