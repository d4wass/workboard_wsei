import FilterButton from 'components/atoms/Entites/FilterBtn';
import FilterSelect from 'components/atoms/Entites/FilterSelect'
import {useState} from 'react';
import styled from 'styled-components';
import { Wrapper } from 'utils/Components';
import AddFilter from 'components/molecules/Entities/AddFilter';
import EntityFilter from 'components/molecules/Entities/EntityFilter';

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

type FilterType = {
    name: string,
    value: string
}

const EntitiesFilter = () => {

    const [selectedFilters, setSelectedFilters] = useState<FilterType[]>([]);

    const handleAddedFilters = (option: FilterType) => {
        setSelectedFilters([...selectedFilters, option])
    }

    const handleRemoveFilter = (id: number) => {
        let filtered = selectedFilters.filter((item, index) => index !== id)
        setSelectedFilters(filtered)
    }


    return (
        <StyledWrapper>
            <StyledContentWrapper>
                {
                    selectedFilters.map(
                        (item, index) => <EntityFilter
                            removeFilter={handleRemoveFilter}
                            filterType={item.name}
                            key={index}
                            idFilter={index}
                    />)
                }
            </StyledContentWrapper>
            <StyledFilterWrapper>
                <AddFilter handleAddedFilter={handleAddedFilters}/>
            </StyledFilterWrapper>
        </StyledWrapper>
    );
}

export default EntitiesFilter;