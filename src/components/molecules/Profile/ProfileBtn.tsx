import React from 'react';
import styled from 'styled-components';
import { Wrapper } from 'utils/Components';
import { ReactComponent as Message } from 'assets/icons/paper-plane.svg';
import { ReactComponent as Request } from 'assets/icons/file-alt-solid.svg';
import { ReactComponent as Add } from 'assets/icons/plus-solid.svg';


const StyledWrapper = styled(Wrapper)`
    width: 100%;
    justify-content: flex-end;
`;

const StyledBtn = styled.button`
    margin-left: 10px;
    cursor: pointer;
    padding: 10px 15px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.blue};
    border: solid 1px transparent;
    background-color: rgba(42,63,157, 0.2);
    transition: all ease 0.3s;

    &:hover{
        border: ${({ theme }) => `solid 1px ${theme.color.blue}`};
    }
`

const StyledMessage = styled(Message)`
    height: 15px;
    margin-right: 10px;
`;

const StyledRequest = styled(Request)`
    height: 15px;
    margin-right: 10px;
`

const StyledAdd = styled(Add)`
    height: 15px;
    margin-right: 10px;
`

const ProfileBtn = () => (
    <StyledWrapper>
        <StyledBtn><StyledMessage/>message</StyledBtn>
        <StyledBtn><StyledRequest/>create a request</StyledBtn>
        <StyledBtn><StyledAdd/>add to cluster</StyledBtn>
    </StyledWrapper>
);

export default ProfileBtn
