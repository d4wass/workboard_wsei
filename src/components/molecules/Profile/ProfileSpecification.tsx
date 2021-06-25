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
    const [initialValues, setInitialValues] = useState<SpecificationElement[] | []>([])

    const handleDelete = (e: React.MouseEvent<HTMLElement>) => {
        let copyState = initialValues;
        let copyInitial: Array<{ id: number, content: string }[]> = [];
        const id = (e.target as Element).id

        copyState.forEach((item) => copyInitial.push(item.initialValue))

        copyInitial = copyInitial.map(arr => arr.filter(item => item.id !== Number(id)))
        copyState.forEach((item, index) => item.initialValue = copyInitial[index])


        setInitialValues(copyState)
    }

    const handleAdd = (id: number) => {
        const selectedElement = initialValues.filter(item => item.id === id)[0];
        let copyState = initialValues

        selectedElement.initialValue.push({ id: id + 10, content: '' })
        copyState.filter(item => item.id !== id).push(selectedElement);
        setInitialValues(copyState)
    }

    useEffect(() => {
        if (initialValues.length === 0) {
            setInitialValues(SpecificationData);
        }
    }, [initialValues])

    return (
        <StyledProfileWrapper>
            <StyledContentWrapper>
                {initialValues.map((item: SpecificationElement) => (
                    <ProfileSpecParagraph
                        key={item.id}
                        value={item.initialValue}
                        spanContent={item.spanContent}
                        isEdited={isEdited}
                        id={item.id}
                        handleDelete={handleDelete}
                        handleAdd={() => handleAdd(item.id)}
                    />
                    ))}
            </StyledContentWrapper>
            <ProfileSaveBtn isEdited={isEdited} handleClick={setEdited}/>
        </StyledProfileWrapper>
    )
};

export default ProfileSpecification;