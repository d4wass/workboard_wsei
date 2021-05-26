import * as React from 'react';
import styled from 'styled-components';
import logo from 'assets/logo.png'

const StyledLogo = styled.img`
    max-height: 50px;
    width: auto;
`

const Logo: React.FC = () => (
    <a href="/">
        <StyledLogo src={logo} alt="company logo" />
    </a>
)

export default Logo;