import React from 'react';
import styled from 'styled-components';
import { Wrapper, Title } from 'utils/Components';
import Publication from 'components/molecules/LastestPublications/Publication';
import FullPublication from 'components/molecules/LastestPublications/FullPublication';

interface ILastestPublications {
    children?: React.ReactNode,
    lastestPublications?: any,
}

const StyledWrapper = styled(Wrapper)<{ column?: boolean, children?: any }>`
    padding: 30px;
    max-height: 480px;
    width: 80vw;
`;

const StyledContentWrapper = styled(Wrapper)<{ column?: boolean, children?: any, full?: boolean }>`
    flex-direction: column;
    background-color: ${({ theme }) => theme.color.white};
    padding: ${({ column }) => column ? '20px' : 0};
    justify-content: ${({ column }) => column && 'space-between'};
    max-width: ${({ full }) => full && '480px'};
    width: 100%;
`;

const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.color.iconGrey};
    border: none;
    border-radius: 10px;
    padding: 10px 10px;
    cursor: pointer;
    transition: all ease-in-out 0.3s;
    &:hover {
        color: ${({ theme }) => theme.color.white};
        background-color: ${({ theme }) => theme.color.grey};
    }
`;

const LastestPublications: React.FC<ILastestPublications> = ({ lastestPublications }) => (
    <StyledWrapper column>
            <StyledContentWrapper full>
                {lastestPublications.length > 0 ? <FullPublication
                    image={lastestPublications[0].image}
                    title={lastestPublications[0].title}
                    imageAlt={lastestPublications[0].imageAlt}
                    userName={lastestPublications[0].userName}
                    userImage={lastestPublications[0].userImage}
                    />
                    : <h1>Loading</h1>}
            </StyledContentWrapper>
            <StyledContentWrapper column>
                <Title>Lastest Publications</Title>
                {lastestPublications.length > 0 ? lastestPublications.map((item: any, index: number) =>
                    index >= 3 ? null : (<Publication
                            key={index}
                            image={item.image}
                            title={item.title}
                            imageAlt={item.imageAlt}
                            userName={item.userName}
                            userImage={item.userImage}
                    />)
            ) : <h1>Loading</h1>}
            <StyledButton>See more</StyledButton>
            </StyledContentWrapper>
    </StyledWrapper>
)




export default LastestPublications;