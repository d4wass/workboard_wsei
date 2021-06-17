import styled from 'styled-components';
import { ReactComponent as User } from 'assets/icons/user-solid.svg';
import { ReactComponent as Msg } from 'assets/icons/paper-plane.svg';

const StyledWrapper = styled.div`
    display: flex;
    padding: 5px 15px;
    width: 100%;
    border-radius: 5px;
    background-color: rgba(42, 63, 157, 0.1);
    margin-bottom: 10px;
    align-items: center;
`;

const StyledParagraph = styled.p`
    color: ${({ theme }) => theme.color.blue};
`;

const StyledButton = styled.button`
    background-color: transparent;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    margin: 0 5px 0 5px;
    border: none;
    color: ${({ theme }) => theme.color.blue};
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    padding: 10px;
    &:hover {
        background-color: rgba(42, 63, 157, 0.2);
    }
`;

const StyledUser = styled(User)`
    height: 20px;
    width: 20px;
    margin-right: 5px;
`;

const StyledMessage = styled(Msg)`
    height: 20px;
    width: 20px;
    margin-right: 5px;
`;

const ProfileAttachement = ({ children, correspondants }: { children: string, correspondants: boolean }) => (
    <>
        {
            correspondants ?(
                <StyledWrapper>
                    <StyledParagraph>
                        {children}
                    </StyledParagraph>
                        <StyledButton><StyledMessage/>Message</StyledButton>
                        <StyledButton><StyledUser/>Profile</StyledButton>
                </StyledWrapper>
            ) : (
                <StyledWrapper>
                    <StyledParagraph>
                        {children}
                    </StyledParagraph>
                </StyledWrapper>
            )
        }
    </>
);

export default ProfileAttachement;