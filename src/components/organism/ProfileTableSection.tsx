import React from 'react';
import styled from 'styled-components'
import ProfileTable from 'components/molecules/Profile/ProfileTable';
import { ProfileTableProposalData, ProfileTableInteralData, ProfileTableFeeData } from 'utils/ProfileSpecData';
import { ProfileWrapper } from 'utils/Components';

const StyledProfileWrapper = styled(ProfileWrapper)`
    flex-direction: column;
`;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledTitle = styled.h3`
    color: ${({ theme }) => theme.color.blue};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: 1.8rem;
    margin-bottom: 20px;
`;

const ProfileTableSection = () => {
    return (
        <>
            <StyledProfileWrapper>
                <StyledTitle>Proposals</StyledTitle>
                <ProfileTable tableData={ProfileTableProposalData}/>
            </StyledProfileWrapper>
            <StyledProfileWrapper>
                <StyledTitle>Interal rewiews</StyledTitle>
                <ProfileTable tableData={ProfileTableInteralData}/>
            </StyledProfileWrapper>
            <StyledWrapper>
                <StyledTitle>Amount of fee</StyledTitle>
                <ProfileTable tableData={ProfileTableFeeData}/>
            </StyledWrapper>
        </>
    )

};

export default ProfileTableSection