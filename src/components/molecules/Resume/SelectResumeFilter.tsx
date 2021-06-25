import { useState } from 'react';
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


type SelectResumeFilterType = {
    handleSelectFn: (option: Options) => void,
}

const SelectResumeFilter = ({handleSelectFn} : SelectResumeFilterType) => {

    const [option, setOption] = useState<Options>();
    const handleChange = (option: Options) => {
        setOption(option)
    }

    return (
        <StyledSelect
            value={option}
            options={optionsResumeFilter}
            getOptionLabel={(option: Options) => option.name}
            getOptionValue={(option: Options) => option.value}
            onChange={(option: Options) => {
                handleChange({name: option.name, value: option.value})
                handleSelectFn(option)
            }}
        />
    )
}

export default SelectResumeFilter;