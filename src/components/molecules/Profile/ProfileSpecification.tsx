import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ProfileWrapper } from 'utils/Components';
import { SpecificationData } from 'utils/ProfileSpecData'
import ProfileSpecParagraph from './ProfileSpecParagraph';
import ProfileSaveBtn from 'components/atoms/Profile/ProfileSaveBtn';

const StyledProfileWrapper = styled(ProfileWrapper)`
    margin: 0;
`;

const StyledContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 20px;
`;

type SpecificationElement = {
    id: number,
    spanContent: string,
    initialValue: Array<{id: number, content: string}>
}

const ProfileSpecification = () => {
    const [isEdited, setEdited] = useState<boolean>(false)
    const [initialValues, setInitialValues] = useState<SpecificationElement[]>(SpecificationData)
    const [editedValues, setEditedValues] = useState<SpecificationElement[] | []>([])

    const handleDelete = (e: React.MouseEvent<HTMLElement>) => {
        let copyState = initialValues;
        let copyInitial: Array<{ id: number, content: string }[]> = [];
        const id = (e.target as Element).id

        copyState.forEach((item) => copyInitial.push(item.initialValue))

        copyInitial = copyInitial.map(arr => arr.filter(item => item.id !== Number(id)))
        copyState.forEach((item, index) => item.initialValue = copyInitial[index])

        setEditedValues(copyState)
    }

    useEffect(() => {
        if (editedValues.length === 0) {
            setInitialValues(SpecificationData)
            console.log('poszedl render if')
        } else {
            setInitialValues(editedValues)
            console.log('poszedl render else')
        }
    })

    return (
        <StyledProfileWrapper>
            <StyledContentWrapper>
                {initialValues.map((item: SpecificationElement) => (
                    <ProfileSpecParagraph
                        value={item.initialValue}
                        spanContent={item.spanContent}
                        isEdited={isEdited}
                        id={item.id}
                        handleDelete={handleDelete}
                    />
                    ))}
            </StyledContentWrapper>
            <ProfileSaveBtn isEdited={isEdited} handleClick={setEdited}/>
        </StyledProfileWrapper>
    )
};

export default ProfileSpecification;