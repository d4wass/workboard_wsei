import React from 'react';
import styled from 'styled-components';
import { ProfileWrapper } from 'utils/Components';
import ProfileImg from 'components/atoms/Profile/ProfileImg';
import { ReactComponent as Edit } from 'assets/icons/edit-regular.svg';
import ProfileData from 'components/atoms/Profile/ProfileData';
import { TUser } from 'app/reducers/stateTypes';

const StyledContentWrapper = styled.div<{ column?: boolean, end?: boolean }>`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: ${({ end }) => end && 'flex-end'};
    justify-content: ${({ end }) => end && 'flex-start'};
    padding-bottom: 10px;
`;

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    color: ${({ theme }) => theme.color.blue};
    transition: all ease-in-out 0.3s;
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover{
        background-color: rgba(42,63,157, 0.2);
    }
`;

const StyledEdit = styled(Edit)`
    height: 20px;

`
type ProfileInfoType = {
    user: TUser
}

const ProfileInfo = ({ user }: ProfileInfoType) => {
    const {name, phone, company, address, email} = user
    return (
        <ProfileWrapper>
            <StyledContentWrapper>
                <StyledContentWrapper end>
                    <ProfileImg image="https://via.placeholder.com/600/92c952" />
                    <ProfileData name={name} phone={phone} company={company} address={address} email={email}/>
                </StyledContentWrapper>
                <StyledButton><StyledEdit/></StyledButton>
            </StyledContentWrapper>
        </ProfileWrapper>
    )
}

export default ProfileInfo;