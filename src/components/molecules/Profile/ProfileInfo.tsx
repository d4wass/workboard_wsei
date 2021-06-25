import { useState } from 'react';
import styled from 'styled-components';
import { ProfileWrapper } from 'utils/Components';
import ProfileImg from 'components/atoms/Profile/ProfileImg';
import ProfileData from 'components/atoms/Profile/ProfileData';
import ProfileSaveBtn from 'components/atoms/Profile/ProfileSaveBtn';
import { TUser } from 'app/reducers/stateTypes';

const StyledContentWrapper = styled.div<{ end?: string }>`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: ${({ end }) => end === 'true' && 'flex-end'};
    justify-content: ${({ end }) => end === 'true' && 'flex-start'};
    padding-bottom: 10px;
`;


type ProfileInfoType = {
    user: TUser
    fnChange: any
}

const ProfileInfo = ({ user, fnChange }: ProfileInfoType) => {
    const [isEdited, setEditingMode] = useState<boolean>(false)

    return (
        <ProfileWrapper>
            <StyledContentWrapper>
                <StyledContentWrapper end="true">
                    <ProfileImg image="https://via.placeholder.com/600/92c952" />
                    <ProfileData user={user} isEdited={isEdited} fnChange={fnChange}/>
                </StyledContentWrapper>
                <ProfileSaveBtn handleClick={setEditingMode} isEdited={isEdited} />
            </StyledContentWrapper>
        </ProfileWrapper>
    )
}

export default ProfileInfo;