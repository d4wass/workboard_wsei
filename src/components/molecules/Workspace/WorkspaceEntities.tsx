import WorkspaceEntityItem from 'components/atoms/Workspace/WorkspaceEntityItem';
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Title, Wrapper } from 'utils/Components';
import { WorkspaceEntitiesData } from 'utils/WorkspaceEntitiesData';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'app/store/store';
import { fetchDataUsers } from 'app/actions/actions';
import Resume from 'components/organism/Resume';

const StyledWrapper = styled(Wrapper)`
    flex-direction: column;
    padding: 20px 0;
`
const StyledContentWrapper = styled(Wrapper)`
    width: 100%;
    justify-content: space-between;
    padding-bottom: 20px;
`
const StyledButton = styled.button<{ onClick?: () => void }>`
    cursor: pointer;
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.color.primaryBtn};
    border: none;
    border-radius: 10px;
    color: ${({ theme }) => theme.color.white};
    font-weight: ${({theme}) => theme.font.weight.bold};
`

const StyledContentEntityWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledTitle = styled(Title)`
    margin: 0;
`;

const WorkspaceEntities = () => {
    const [isOpen, setOpenState] = useState(true);
    const dispatch = useDispatch();
    const user = useSelector((state: AppState) => (state.user));    const comments = useSelector((state: AppState) => (state.comments));
    const users = useSelector((state: AppState) => (state.users));
    const isLoading = useSelector((state: AppState) => (state.loading))

    useEffect(() => {
        if (!comments.length && !users.length) {
            dispatch(fetchDataUsers())
        }
    }, []);

    return (
        <StyledWrapper>
            <StyledContentWrapper>
                <StyledTitle>Start working on tasks</StyledTitle>
                <StyledButton onClick={() => setOpenState(!isOpen)}>{isOpen ? 'Hide' : 'Show'}</StyledButton>
            </StyledContentWrapper>
            {
                isOpen && <StyledContentEntityWrapper>
                    {WorkspaceEntitiesData.map(({ id, title, content, link }) => <WorkspaceEntityItem key={id} title={title} content={content} link={link}/>)}
            </StyledContentEntityWrapper>
            }
            <Resume loading={isLoading} comments={comments} users={users} user={user}/>
        </StyledWrapper>
    );
};

export default WorkspaceEntities