import React from 'react';
import styled from 'styled-components';
import ProfileInput from 'components/atoms/Profile/ProfileInput';
import {Paragraph, Wrapper} from 'utils/Components'
import { Users } from 'utils/ProfileTypes';

const StyledWrapper = styled(Wrapper)`
    height: 100%;
`;

const StyledContentWrapper = styled.div<{ contact?: boolean }>`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    margin-right: 20px;
`;

const StyledParagraph = styled(Paragraph)`
    margin-top: 10px;
`;

type ProfileDataType = {
    fnChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    isEdited: boolean,
    user: Users
}

const ProfileData = ({user, fnChange, isEdited}: ProfileDataType) => {
        const { name, phone, email, company, address } = user
    return (
        <StyledWrapper>
            <StyledContentWrapper>
                {isEdited ? <ProfileInput value={name} name="name" fnChange={fnChange}/> : <StyledParagraph>{name}</StyledParagraph>}
                {isEdited ? <ProfileInput value={company.name} name="company" fnChange={fnChange}/> : <StyledParagraph>{company.name}</StyledParagraph>}
                {isEdited ? <ProfileInput value={address.city} name="city" fnChange={fnChange} /> : <StyledParagraph>{address.city}</StyledParagraph>}
            </StyledContentWrapper>
            <StyledContentWrapper contact>
                {isEdited ? <ProfileInput value={email} name="email" fnChange={fnChange}/> :  <StyledParagraph>{email}</StyledParagraph>}
                {isEdited ? <ProfileInput value={phone} name="phone" fnChange={fnChange}/> :  <StyledParagraph>{phone}</StyledParagraph>}
            </StyledContentWrapper>
        </StyledWrapper>
    )
};

export default ProfileData;