import React from 'react';
import styled from 'styled-components';
import { Wrapper } from 'utils/Components';
import WorkspaceHeading from 'components/molecules/Workspace/WorkspaceHeading';
import WorkspaceEntities from 'components/molecules/Workspace/WorkspaceEntities';

const StyledWrapper = styled(Wrapper)`
    flex-direction: column;
    width: 100%;
    padding: 30px;
`;

const WorkspaceView = () => (
    <StyledWrapper>
        <WorkspaceHeading title="new Investigation" content="lorem ipsum on dolores ist elenotr" />
        <WorkspaceEntities/>
    </StyledWrapper>
);

export default WorkspaceView;
