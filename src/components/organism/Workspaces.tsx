import Workspace from 'components/molecules/Workspace';
import * as React from 'react';
import styled from 'styled-components';
import { Wrapper, Title } from 'utils/Components';
import { WorkspacesData } from 'utils/WorkspaceData';

interface Iitem {
    id: number,
    name: string,
    type: string,
    users: number,
    lastUpdate: number,
    image: string,
    icon: any,
}

const StyledWrapper = styled(Wrapper) <{ column?: boolean }>`
    flex-direction: ${({ column }) => column ? 'column' : 'row'};
    padding: 0 30px;
    width: calc(80vw - 30px);
`;

const StyledGridWrapper = styled.div`
    display: grid;
    grid-template-rows: 400px;
    grid-template-columns: repeat(7, 400px);
    overflow: auto;
    width: calc(80vw - 60px);
    padding-bottom: 20px;
`

const StyledTitle = styled(Title)`
    font-weight: ${({ theme }) => theme.font.weight.bold};
    margin-bottom: 20px;
`;


const Workspaces: React.FC = () => (
    <StyledWrapper column>
        <StyledWrapper style={{padding: 0}}>
            <StyledTitle>Workspaces</StyledTitle>
        </StyledWrapper>
        <StyledGridWrapper>
            {WorkspacesData.map((item: Iitem) => <Workspace
                key={item.id}
                name={item.name}
                type={item.type}
                users={item.users}
                image={item.image}
                lastUpdate={item.lastUpdate}
                icon={item.icon}
            />)}
        </StyledGridWrapper>
    </StyledWrapper>
);

export default Workspaces;