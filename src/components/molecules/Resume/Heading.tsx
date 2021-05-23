import * as React from 'react';
import styled from 'styled-components';
import { Wrapper, Title } from 'utils/Components';
import Input from 'components/molecules/Input';


const StyledWrapper = styled(Wrapper)`
    justify-content: space-between;
    width: 100%;

`;

const StyledContentWrapper = styled(Wrapper)`
    
`;

const StyledInput = styled(Input)`
    position: static;
`;

const Heading = () => (
    <StyledWrapper>
        <Title>Resume your work</Title>
        <StyledContentWrapper>
            <StyledInput label="Filter by title" type="text" />
        </StyledContentWrapper>
    </StyledWrapper>
);

export default Heading;
