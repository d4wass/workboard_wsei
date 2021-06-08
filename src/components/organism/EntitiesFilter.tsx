import FilterButton from 'components/atoms/Entites/FilterBtn';
import FilterSelect from 'components/atoms/Entites/FilterSelect'
import {useState} from 'react';
import styled from 'styled-components';
import {Wrapper} from 'utils/Components'

const StyledWrapper = styled(Wrapper)`
    flex-direction: column;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 8px 6px -6px #ccc;
    background-color: ${({theme}) => theme.color.white};
`;

const StyledFilterWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const EntitiesFilter = () => {
    const [selectedFilter, setSelectedFilter] = useState<string>('');
    const [isFilterActive, setActiveFilter] = useState(false);
    const [] = useState();

    const handleSelect = () => {
        console.log('działa')
    }

    return (
        <StyledWrapper>
            <StyledFilterWrapper>
                <FilterButton handleClickFn={() => setActiveFilter(!isFilterActive)} activeFilter={isFilterActive}/>
                <FilterSelect handleSelectFn={handleSelect} activeFilter={isFilterActive} />
            </StyledFilterWrapper>
        </StyledWrapper>
    );
}

export default EntitiesFilter;