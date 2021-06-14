import ProfileSpecParagraph from 'components/atoms/Profile/ProfileSpecParagraph';
import React from 'react';
import styled from 'styled-components';

const SpecificationInput = ({ isEdited, value }: {isEdited: boolean, value: string}) => {

    return (
        <>
            {isEdited ? <input /> : <ProfileSpecParagraph>{value}</ProfileSpecParagraph>}
        </>
    )
}

export default SpecificationInput;