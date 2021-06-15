import styled from 'styled-components';
import SpecificationInput from 'components/molecules/Profile/SpecificationInput';
import {ReactComponent as Plus} from 'assets/icons/plus-solid.svg'

type ParagraphType = {
    value?: string[],
    spanContent: string,
    isEdited?: boolean
}

const StyledParagraph = styled.p`
    color: ${({ theme }) => theme.color.blue};
    padding: 5px 10px;
    margin-right: 10px;
    border-radius: 5px;
    background-color: rgba(42, 63, 157, 0.1);
`;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledContentWrapper = styled.div`
    display: flex;
`;

const StyledSpan = styled.span`
    color: ${({ theme }) => theme.color.iconGray};
    font-size: 1.1rem ;
    margin: 10px 0;
`;

const StyledPlus = styled(Plus)`
    height: 20px;
    width: 20px;
`;

const StyledButton = styled.button`
    border: none;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: ${({ theme }) => theme.color.blue};
    margin-left: 5px;
    cursor: pointer;
`;

const ProfileSpecParagraph = ({ value, spanContent, isEdited }: ParagraphType) =>{
    return (
        <>
            {
                isEdited ?
                    <StyledWrapper>
                        <StyledSpan>{spanContent}</StyledSpan>
                        <StyledContentWrapper>
                            {value?.map(item => <SpecificationInput value={item} />)}
                            <StyledButton><StyledPlus/></StyledButton>
                        </StyledContentWrapper>
                    </StyledWrapper> :
                    <StyledWrapper>
                        <StyledSpan>{spanContent}</StyledSpan>
                        <StyledContentWrapper>
                            {value?.map((item: string) => <StyledParagraph>{item}</StyledParagraph>)}
                        </StyledContentWrapper>
                    </StyledWrapper>
            }
        </>
    )
}

export default ProfileSpecParagraph;