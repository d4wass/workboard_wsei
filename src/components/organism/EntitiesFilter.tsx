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

const StyledContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const EntitiesFilter = () => {
    const [selectedFilter, setSelectedFilter] = useState<string>('');
    const [isFilterActive, setActiveFilter] = useState(false);

    const handleSelect = (option: {name: string, value: string}) => {
        console.log('działa')
        setSelectedFilter(option.name);
    }

    const addFilter = () => {
        if (selectedFilter) {
            setActiveFilter(!isFilterActive)
        } else {
            alert('Please select value of filter')
        }
    }

    return (
        <StyledWrapper>
            <StyledContentWrapper>
                {/*
                    tutaj robisz div który będzie trzymać wszystkie kolejne filtry
                */}
            </StyledContentWrapper>
            <StyledFilterWrapper>
                <FilterButton handleClickFn={addFilter} activeFilter={isFilterActive}/>
                <FilterSelect handleSelectFn={handleSelect} activeFilter={isFilterActive} />
            </StyledFilterWrapper>
        </StyledWrapper>
    );
}

export default EntitiesFilter;