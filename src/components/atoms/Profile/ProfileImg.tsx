import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div<{image: string}>`
    border-radius: 50%;
    background-image: ${({ image }) => `url(${image})`};
    height: 100px;
    width: 100px;
    margin-right: 20px;
`;

const ProfileImg = ({ image }: { image: string }) => <StyledWrapper image={image} />

export default ProfileImg;