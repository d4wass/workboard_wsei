import {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Wrapper } from 'utils/Components';
import { WorkspacesData } from 'utils/WorkspaceData';
import WorkspaceHeading from 'components/molecules/Workspace/WorkspaceHeading';
import WorkspaceEntities from 'components/molecules/Workspace/WorkspaceEntities';
import { useLocation, useParams } from 'react-router-dom';
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
    const { state } = useLocation<LocationState>();
    const {id} = useParams<{id: string}>();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    useEffect(() => {
        if (state) {
            Object.entries(state).map(([key, value]) => {
                if (key === "title") {
                    setTitle(value)
                } else if (key === "content") {
                    setContent(value)
                }
            })
        } else {
            const getData = WorkspacesData.filter(item => item.id === Number(id))[0];
            setTitle(getData.name)
            setContent(getData.description)
        }

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
