import * as React from 'react';
import styled from 'styled-components';
import logo from 'assets/logo.png'

const StyledLogo = styled.img`
    max-height: 50px;
    width: auto;
`

const Logo: React.FC = () => <StyledLogo src={logo} alt="company logo" />

export default Logo;