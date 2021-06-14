import React from 'react';
import styled from 'styled-components';
import {Paragraph, Wrapper} from 'utils/Components'

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
    name: string,
    phone: string,
    email: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    },
    address: {
        city: string,

    }
}

const ProfileData = ({name, phone, email, company, address}: ProfileDataType) => (
    <StyledWrapper>
        <StyledContentWrapper>
            <StyledParagraph>{name}</StyledParagraph>
            <StyledParagraph>{company.name}</StyledParagraph>
            <StyledParagraph>{address.city}</StyledParagraph>
            {/* tutaj musisz dać selecta z opcjami wyboru stanowiska */}
        </StyledContentWrapper>
        <StyledContentWrapper contact>
            <StyledParagraph>{email}</StyledParagraph>
            <StyledParagraph>{phone}</StyledParagraph>
        </StyledContentWrapper>
    </StyledWrapper>
);

export default ProfileData;