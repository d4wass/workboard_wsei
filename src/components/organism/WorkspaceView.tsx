import {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Wrapper } from 'utils/Components';
import WorkspaceHeading from 'components/molecules/Workspace/WorkspaceHeading';
import WorkspaceEntities from 'components/molecules/Workspace/WorkspaceEntities';
import { useLocation } from 'react-router-dom';
import SiteTemplate from 'templates/SiteTemplate';

interface LocationState {
    state: {title: string}
}

const StyledWrapper = styled(Wrapper)`
    flex-direction: column;
    width: 100%;
    padding: 30px;
`;

const WorkspaceView = () => {
    const {state} = useLocation<LocationState>();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        Object.entries(state).map(([key, value]) => {
            if (key === "title") {
                setTitle(value)
            } else if (key === "content") {
                setContent(value)
            }
        })
    })

    return (
        <SiteTemplate>
            <StyledWrapper>
                <WorkspaceHeading title={title} content={content} />
                <WorkspaceEntities/>
            </StyledWrapper>
        </SiteTemplate>
    )
};

export default WorkspaceView;
