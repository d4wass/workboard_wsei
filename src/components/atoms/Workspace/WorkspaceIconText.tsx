import * as React from 'react';
import styled from 'styled-components';
import { Wrapper } from 'utils/Components';
import { ReactComponent as People } from 'assets/icons/people.svg';
import { ReactComponent as File } from 'assets/icons/file-alt-solid.svg';
import { ReactComponent as Corporate } from 'assets/icons/building-solid.svg';
import { ReactComponent as Book } from 'assets/icons/book-solid.svg';

const StyledWrapper = styled(Wrapper)`
    width: 100%;
    align-items: center;
`
type WorkspaceText = {
    children: string | any
}

const StyledFile = styled(File)`
    height: 25px;
    width: 25px;
    margin-right: 10px;
`;

const StyledCorporate = styled(Corporate)`
    height: 25px;
    width: 25px;
    margin-right: 10px;
`;

const StyledBook = styled(Book)`
    height: 25px;
    width: 25px;
    margin-right: 10px;
`;

const StyledPeople = styled(People)`
    height: 25px;
    width: 25px;
    margin-right: 10px;
`;

const WorkspaceIconText: React.FC<WorkspaceText> = ({children}) => (
    <StyledWrapper>
        {children.includes('Contract') && <StyledFile/>}
        {children.includes('Corporate') && <StyledCorporate/> }
        {children.includes('Norms') && <StyledBook/>}
        {children.includes('users: ', 0) && <StyledPeople/>}
        {children}
    </StyledWrapper>
)

export default WorkspaceIconText;