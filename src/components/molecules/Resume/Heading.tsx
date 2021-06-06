import * as React from 'react';
import styled from 'styled-components';
import { Wrapper, Title } from 'utils/Components';
import Input from 'components/molecules/Input';

type HeadingType = {
    handleInput?: any,
    inputValue?: string
}

const StyledWrapper = styled(Wrapper)`
    justify-content: space-between;
    width: 100%;
    padding-bottom: 20px;
    align-items: center;
`;

const StyledContentWrapper = styled(Wrapper)`
    width: 50%;
    justify-content: flex-end;
`;

const StyledTitle = styled(Title)`
    width: 50%;
    margin: 0;
`;

const StyledInput = styled(Input)`
    position: static;
`;

const Heading = ({ handleInput, inputValue }: HeadingType) => (
    <StyledWrapper>
        <StyledTitle>Resume your work</StyledTitle>
        <StyledContentWrapper>
            <StyledInput label="Filter by title" type="text" value={inputValue} fnChange={handleInput} />
        </StyledContentWrapper>
    </StyledWrapper>
);

export default Heading;
