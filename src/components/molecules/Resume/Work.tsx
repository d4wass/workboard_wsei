import * as React from 'react';
import styled from 'styled-components';
import { Wrapper, Title, Paragraph } from 'utils/Components';

const StyledWrapper = styled(Wrapper)`
    flex-direction: column;
    box-shadow: 0 8px 6px -6px #ccc;
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: ${({theme}) => theme.color.white};
`;

const StyledContentWrapper = styled(Wrapper)``

const Work = () => (
    <StyledWrapper>
        <Title>World company sas</Title>
        <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde modi excepturi nam fugiat enim totam aut officia magni aliquid, at ab corporis alias quisquam sit quis ratione rem cum cupiditate.</Paragraph>
        <StyledContentWrapper>
            {/* tutaj idzie komponent dane pobierane z api zdjęcie osoba  */}
        </StyledContentWrapper>
    </StyledWrapper>

);

export default Work;