import React from 'react';
import styled, {css} from 'styled-components'
import { Wrapper, Title } from 'utils/Components';

interface TFullPublication {
    children?: any,
    fullPublication?: boolean,
    image: string,
    title: string,
    imageAlt: string,
    userName: string,
    userImage: string
}

type TStyledElem = {
    userImg?: boolean,
    fullPublication?: boolean,
    image?: string
    userInfo?: boolean
}

const StyledWrapper = styled(Wrapper)<TStyledElem>`
    flex-direction: row;
    width: 100%;
    background-color: ${({ userInfo }) => userInfo && 'transparent'};
    align-items: ${({userInfo}) => userInfo && 'center'};
    ${({ image }) => image && css`
        height: 450px;
        background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117,19,93,0.73)), url(${image});
        background-size: cover;
    `}
`;

const StyledContentWrapper = styled(Wrapper)<TStyledElem>`
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;
    height: 100%;
    width: 100%;
    background-color: transparent;
`

const StyledSpan = styled.span`
    color: ${({theme}) => theme.color.white};
`

const StyledImage = styled.img<TStyledElem>`
    width: 100px;
    height: 100px;
    ${({ userImg }) => userImg && css`
        border-radius: 50%;
        width: 30px;
        height: 30px;
        margin: 0 10px;
    ` }
`

const StyledTitle = styled(Title)`
    width: 100%;
    color: ${({theme}) => theme.color.white};
`;

const FullPublication = ({image, title, userName, userImage}: TFullPublication): JSX.Element => (
    <StyledWrapper image={image}>
        <StyledContentWrapper>
            <StyledTitle>{title}</StyledTitle>
            <StyledWrapper userInfo>
                <StyledSpan>7 Jun 2021</StyledSpan>
                <StyledImage src={userImage} userImg/>
                <StyledSpan>{userName}</StyledSpan>
            </StyledWrapper>
        </StyledContentWrapper>
    </StyledWrapper>
);

export default FullPublication;