import React from 'react';
import styled from 'styled-components';
import { TUser } from 'app/reducers/stateTypes';
import { Wrapper, Title } from 'utils/Components';

const StyledWrapper = styled(Wrapper)`
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0 8px 6px -6px #ccc;
    padding: 10px;
    margin: 10px;
`;

const StyledTitle = styled(Title)`
    font-size: 1.5rem;
`;

const StyledContentWrapper = styled(Wrapper)`
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 0;
`

const StyledSpan = styled.span`
    color: ${({ theme }) => theme.color.grey};
    font-size: 1.4rem;
`;

const StyledImage = styled.img`
    width: 100px;
    height: 100px;
    margin-right: 20px;
`;

const EntityItem = ({ user, photoUrl }: { user: TUser, photoUrl: string }) => {
    const { company: {name}, address: {street, suite, city}  } = user

    return (
        <StyledWrapper>
            <StyledImage src={photoUrl} />
            <StyledContentWrapper>
                <StyledTitle>{name}</StyledTitle>
                <StyledSpan>{`${city}, ${suite}, ${street}`}</StyledSpan>
            </StyledContentWrapper>
        </StyledWrapper>
    )
};

export default EntityItem;