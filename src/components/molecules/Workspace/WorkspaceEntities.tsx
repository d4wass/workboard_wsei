import WorkspaceEntityItem from 'components/atoms/Workspace/WorkspaceEntityItem';
import React, {useState} from 'react';
import styled from 'styled-components';
import { Paragraph, Wrapper } from 'utils/Components';
import { WorkspaceEntitiesData } from 'utils/WorkspaceEntitiesData'

const StyledWrapper = styled(Wrapper)`
    flex-direction: column;
`
const StyledContentWrapper = styled(Wrapper)`
    width: 100%;
`
const StyledButton = styled.button<{onClick?: () => void}>``


const WorkspaceEntities = () => {
    const [isOpen, setOpenState] = useState(true);

    return (
        <StyledWrapper>
            <StyledContentWrapper>
                <Paragraph>Start working on tasks</Paragraph>
                <StyledButton onClick={() => setOpenState(!isOpen)}>{isOpen ? 'Hide' : 'Show'}</StyledButton>
            </StyledContentWrapper>
            <StyledContentWrapper>
                {WorkspaceEntitiesData.map(({id, title, content}) => <WorkspaceEntityItem key={id} title={title} content={content}/>)}
            </StyledContentWrapper>
        </StyledWrapper>
    );
};

export default WorkspaceEntities