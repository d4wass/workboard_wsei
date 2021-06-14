import styled, {css} from 'styled-components'
import { Wrapper, Title } from 'utils/Components';

interface TPublication {
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
    img?: boolean,
    fullPublication?: boolean,
    info?: boolean
}

const StyledWrapper = styled(Wrapper)<TStyledElem>`
    flex-direction: row;
    width: 100%;
    margin-bottom: 15px;

    ${({ info }) => info && css`
        margin-bottom: 10px;
        align-items: center;
    `}
`;

const StyledContentWrapper = styled(Wrapper)<TStyledElem>`
    flex-direction: column;
    justify-content: space-between;
    width: ${({ img }) => img ? '80px' : '100%'};
    margin-right: ${({ img }) => img && '20px'};
    height: 100%;
`

const StyledSpan = styled.span`
    font-size: 1.4rem;
`

const StyledImage = styled.img<TStyledElem>`
    width: 80px;
    height: 80px;
    ${({ userImg }) => userImg && css`
        border-radius: 50%;
        width: 30px;
        height: 30px;
        margin: 0 10px;
    ` }
`

const StyledTitle = styled(Title)`
    width: 100%;
    font-size: 1.8rem;
    font-weight: ${({ theme }) => theme.font.weight.semi};
    margin: 0;
`;

const Publication = ({image, title, imageAlt, userName, userImage}: TPublication): JSX.Element => (
    <StyledWrapper>
        <StyledContentWrapper img>
            <StyledImage src={image} alt={imageAlt}/>
        </StyledContentWrapper>
        <StyledContentWrapper>
            <StyledTitle>{title}</StyledTitle>
            <StyledWrapper info>
                <StyledSpan>7 Jun 2021</StyledSpan>
                <StyledImage src={userImage} userImg/>
                <StyledSpan>{userName}</StyledSpan>
            </StyledWrapper>
        </StyledContentWrapper>
    </StyledWrapper>
);

export default Publication;