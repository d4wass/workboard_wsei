import { useState } from 'react';
import styled from 'styled-components';
import Select, { ValueType } from 'react-select';


const StyledSelect = styled(Select)`
    width: 150px;
    margin: 0 20px;
`;

const StyledWrapper = styled.div`
    display: flex;
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

const optionsResumeFilter: Options[] = [
    {
        name: 'All Items',
        value: 'All Items'
    },
    {
        name: 'User Items',
        value: 'User Items'
    }
]


type FilterSelectType = {
    handleSelectFn: (option: Options, filterType: string) => void,
    filterType: string
}

const FilterSelect = ({handleSelectFn, filterType} : FilterSelectType) => {

    const [option, setOption] = useState<Options>();
    const handleChange = (option: Options) => {
        setOption(option)
    }

    return (
        <div>
            {filterType === 'adding' && <StyledSelect
                value={option}
                options={optionsFilter}
                getOptionLabel={(option: Options) => option.name}
                getOptionValue={(option: Options) => option.value}
                onChange={(option: Options) => {
                    handleChange({name: option.name, value: option.value})
                    handleSelectFn(option, filterType)
                }}
            />}
            {filterType === 'status' && <StyledSelect
                value={option}
                options={optionsType}
                getOptionLabel={(option: Options) => option.name}
                getOptionValue={(option: Options) => option.value}
                onChange={(option: Options) => {
                    handleChange({name: option.name, value: option.value})
                    handleSelectFn(option, filterType)
                }}
            />
            }
            {filterType === 'contains' &&
                <StyledSelect
                    value={option}
                    options={optionsFilterType}
                    getOptionLabel={(option: Options) => option.name}
                    getOptionValue={(option: Options) => option.value}
                    onChange={(option: Options) => {
                        handleChange({name: option.name, value: option.value})
                        handleSelectFn(option, filterType)
                    }}
                />
            }
            {filterType === 'negation' &&
                <StyledSelect
                    value={option}
                    options={optionsFilterNegation}
                    getOptionLabel={(option: Options) => option.name}
                    getOptionValue={(option: Options) => option.value}
                    onChange={(option: Options) => {
                        handleChange({name: option.name, value: option.value})
                        handleSelectFn(option, filterType)
                    }}
                />
            }
            {filterType === 'resume' &&
                <StyledSelect
                    value={option}
                    options={optionsResumeFilter}
                    getOptionLabel={(option: Options) => option.name}
                    getOptionValue={(option: Options) => option.value}
                    onChange={(option: Options) => {
                        handleChange({name: option.name, value: option.value})
                        handleSelectFn(option, filterType)
                    }}
                />
            }
        </div>
    )
}

export default FilterSelect;