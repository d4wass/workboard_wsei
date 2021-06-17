import ProfileAttachement from 'components/atoms/Profile/ProfileAttachement';
import styled from 'styled-components';
import { ProfileWrapper } from 'utils/Components';

const StyledTitle = styled.h4`
    color: ${({ theme }) => theme.color.blue};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: 1.3rem;
`;

const StyledProfileWrapper = styled(ProfileWrapper)`
    flex-direction: column;
`;

const StyledSpan = styled.span`
    color: ${({ theme }) => theme.color.iconGray};
    font-size: 1.1rem ;
    margin: 10px 0;
`;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledContentWrapper = styled.div`
    display: flex;
    flex-dire
`;

const StyledParagraph = styled.p`
    color: ${({ theme }) => theme.color.blue};
    padding: 5px 10px;
    border-radius: 5px;
    background-color: rgba(42, 63, 157, 0.1);
    width: auto;
    margin-bottom: 10px;
`;

const PanelInformation = () => {
    return (
        <StyledProfileWrapper>
            <StyledTitle>Panel Informations</StyledTitle>
            <StyledWrapper>
                <StyledSpan>Hourly fee</StyledSpan>
                <StyledContentWrapper>
                    <StyledParagraph>500$/hour</StyledParagraph>
                </StyledContentWrapper>
            </StyledWrapper>
            <StyledWrapper>
                <StyledSpan>Terms & conditions</StyledSpan>
                <StyledWrapper>
                    <StyledParagraph>Monthly 10k$</StyledParagraph>
                    <ProfileAttachement correspondants={false}>Attachement_lorem_ipsum2.svg</ProfileAttachement>
                </StyledWrapper>
            </StyledWrapper>
            <StyledWrapper>
                <StyledTitle>Service & projects</StyledTitle>
                <StyledWrapper>
                    <StyledParagraph style={{marginTop:'10px'}}>Monthly 10k$</StyledParagraph>
                </StyledWrapper>
            </StyledWrapper>
            <StyledWrapper>
                <StyledTitle style={{ marginBottom: '10px' }}>Internal correspondantss</StyledTitle>
                <StyledWrapper>
                    <ProfileAttachement correspondants={true}>Jan Nowak</ProfileAttachement>
                    <ProfileAttachement correspondants={true}>Tomasz Kowalski</ProfileAttachement>
                </StyledWrapper>
            </StyledWrapper>
        </StyledProfileWrapper>
    )
};

export default PanelInformation