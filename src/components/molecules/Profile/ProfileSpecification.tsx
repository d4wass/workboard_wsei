import {useState} from 'react';
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
    initialValue: string[]
}

const ProfileSpecification = () => {
    const [isEdited, setEdited] = useState<boolean>(false)

    return (
        <StyledProfileWrapper>
            <StyledContentWrapper>
                {SpecificationData.map((item: SpecificationElement) => (
                    <ProfileSpecParagraph value={item.initialValue} spanContent={item.spanContent} isEdited={isEdited} id={item.id}/>
                    ))}
            </StyledContentWrapper>
            <ProfileSaveBtn isEdited={isEdited} handleClick={setEdited}/>
        </StyledProfileWrapper>
    )
};

export default ProfileSpecification;