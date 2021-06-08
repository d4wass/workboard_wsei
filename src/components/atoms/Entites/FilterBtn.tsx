import React, { useState } from 'react';
import { ReactComponent as Plus } from 'assets/icons/plus-solid.svg';
import { ReactComponent as Close } from 'assets/icons/times-solid.svg';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 20px;
    max-width: 100px;
    cursor: pointer;
`;

const StyledParagraph = styled.p`
    color: ${({ theme }) => theme.color.blue};
    width: 100%;
    text-align: end;
`;

const StyledPlus = styled(Plus)`
    width: 25px;
`

const StyledClose = styled(Close)`
    width: 25px;
`;

const FilterButton = ({handleClickFn, activeFilter}: {handleClickFn: () => void, activeFilter: boolean}) => {

    // const [isFilterActive, setActiveFilter] = useState(false);

    return (
        <StyledWrapper onClick={handleClickFn}>
            {!activeFilter ? <StyledPlus /> : <StyledClose/>}
            <StyledParagraph>{!activeFilter ? 'Add filter' : 'Where'}</StyledParagraph>
        </StyledWrapper>
    )
}

export default FilterButton;