import {useState} from 'react';
import styled from 'styled-components';
import FilterButton from 'components/atoms/Entites/FilterBtn';
import FilterSelect from 'components/atoms/Entites/FilterSelect';


const StyledFilterWrapper = styled.div`
    display: flex;
    align-items: center;
`;

type EntityFilterType = {
    removeFilter: (id: number) => void,
    filterType: string,
    idFilter: number
}

const EntityFilter = ({removeFilter, filterType, idFilter}: EntityFilterType) => {

    const [selectedFilter, setSelectedFilter] = useState<string>('');
    const [selectedFilterStatus, setStatusFilter] = useState<string>('');

    const handleSelect = (option: {name: string, value: string}, filterType: string) => {
        if (filterType === 'status') {
            setSelectedFilter(option.name);
        } else if (filterType === 'contains') {
            setStatusFilter(option.name)
        }
    }

    return (
        <StyledFilterWrapper>
            <FilterButton handleClickFn={() => removeFilter(idFilter)} buttonType={filterType}/>
            <FilterSelect handleSelectFn={handleSelect} filterType="status" />
            <FilterSelect handleSelectFn={handleSelect} filterType="contains" />
            { selectedFilterStatus === 'Contains' && <input type="text"/>}
            { selectedFilterStatus === 'Is' && <><input type="text"/><FilterSelect handleSelectFn={handleSelect} filterType="negation"/><input type="text"/></>}
            { selectedFilterStatus === 'Ends before' && <><input type="date"/><FilterSelect handleSelectFn={handleSelect} filterType="negation"/><input type="text"/></>}
        </StyledFilterWrapper>
    )
}

export default EntityFilter;