import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Wrapper, Title, Paragraph } from 'utils/Components';

type WorkDataType = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

const StyledWrapper = styled(Wrapper)`
    flex-direction: column;
    box-shadow: 0 8px 6px -6px #ccc;
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: ${({theme}) => theme.color.white};
`;

const StyledContentWrapper = styled(Wrapper)`
    padding-top: 20px;
`

const StyledSpan = styled.span`
    color: ${({ theme }) => theme.color.grey};
    font-size: ${({ theme }) => theme.font.weight.bold};
`;

const Work = ({ data, user }: { data: WorkDataType, user: string }) => {

    return (
            <StyledWrapper>
            <Title>{data.name}</Title>
                <Paragraph>{data.body}</Paragraph>
                <StyledContentWrapper>
                    <StyledSpan>
                        {user}
                    </StyledSpan>
                </StyledContentWrapper>
            </StyledWrapper>
)};

export default Work;