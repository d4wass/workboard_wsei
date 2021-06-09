import {useState} from 'react';
import styled from 'styled-components';
import FilterButton from 'components/atoms/Entites/FilterBtn';
import FilterSelect from 'components/atoms/Entites/FilterSelect';


const StyledFilterWrapper = styled.div`
    display: flex;
    align-items: center;
`;

type FilterType = {
    name: string,
    value: string,
}

const AddFilter = ({handleAddedFilter}: {handleAddedFilter: (option: FilterType) => void}) => {

    const [selectedFilter, setSelectedFilter] = useState<FilterType>();

    const handleSelect = (option: {name: string, value: string}) => {
        setSelectedFilter(option);
    }

    const addFilter = () => {
        if (selectedFilter) {
            handleAddedFilter(selectedFilter)
        } else {
            alert('Please select value of filter')
        }
    }

    return (
        <StyledFilterWrapper>
            <FilterButton handleClickFn={addFilter} buttonType="add"/>
            <FilterSelect handleSelectFn={handleSelect} filterType="adding"/>
        </StyledFilterWrapper>
    )
}

export default AddFilter;