import {ReactNode} from 'react';
import styled from 'styled-components';

type ParagraphType = {
    children?: string
}

const StyledParagraph = styled.p`
    color: ${({ theme }) => theme.color.blue};

`;


const ProfileSpecParagraph = ({children} : ParagraphType) => (
    <StyledParagraph>{children}</StyledParagraph>
)

export default ProfileSpecParagraph;