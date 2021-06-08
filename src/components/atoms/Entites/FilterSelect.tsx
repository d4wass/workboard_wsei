import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';


const StyledSelect = styled(Select)`
    width: 150px;
    margin: 0 20px;
`;

type Options = {
    name: string,
    value: string
}

const optionsFilter: Options[] = [
    {
        name: 'Where',
        value: 'Where'
    },
    {
        name: 'And',
        value: 'And'
    }
]

const optionsType: Options[] = [
    {
        name: 'Company',
        value: 'Company'
    },
    {
        name: 'Status',
        value: 'Status'
    }
]

const optionsFilterType: Options[] = [
    {
        name: 'Contains',
        value: 'Contains'
    },
    {
        name: 'Is',
        value: 'Is'
    },
    {
        name: 'Ends before',
        value: 'Ends before'
    }
]

const optionsFilterNegation: Options[] = [
    {
        name: 'Is',
        value: 'Is'
    },
    {
        name: 'Is not',
        value: 'Is not'
    },
]

const FilterSelect = ({handleSelectFn, activeFilter} : {handleSelectFn: () => void, activeFilter: boolean}) => {

    // const [activeFilter, setActiveFilter] = useState(false);

    return (
        <div>
            <StyledSelect
                options={optionsFilter}
                getOptionLabel={(option: Options) => option.name}
                getOptionValue={(option: Options) => option.value}
                onChange={handleSelectFn}
            />
            {/* <StyledSelect
                options={optionsType}
                getOptionLabel={(option: Options) => option.name}
                getOptionValue={(option: Options) => option.value}
            />
            <StyledSelect
                options={optionsFilterType}
                getOptionLabel={(option: Options) => option.name}
                getOptionValue={(option: Options) => option.value}
            />
            <StyledSelect
                options={optionsFilterNegation}
                getOptionLabel={(option: Options) => option.name}
                getOptionValue={(option: Options) => option.value}
            /> */}
        </div>
    )
}

export default FilterSelect;