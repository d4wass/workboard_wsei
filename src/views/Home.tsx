import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SiteTemplate from 'templates/SiteTemplate';
import LastestPublications from 'components/organism/LastestPublications'
import Resume from 'components/organism/Resume'
import { fetchDataUsers } from 'app/actions/actions';
import Workspaces from 'components/organism/Workspaces';
import { Wrapper } from 'utils/Components';
import styled from 'styled-components'
import { AppState } from 'app/store/store';

const StyledWrapper = styled(Wrapper)`
    flex-direction: column;
    width: 80vw;
`

const Home = () => {
    const dispatch = useDispatch()
    const user = useSelector((state: AppState) => (state.user))
    const users = useSelector((state: AppState) => (state.users));
    const comments = useSelector((state: AppState) => (state.comments));
    const loading = useSelector((state: AppState) => (state.loading));
    const lastestPublications = useSelector((state: AppState) => (state.lastPublications))

    useEffect(() => {
        dispatch(fetchDataUsers())
    },[dispatch]);

    return (
        <SiteTemplate>
            <StyledWrapper>
                <LastestPublications lastestPublications={lastestPublications} />
                <Workspaces />
                <Resume loading={loading} users={users} comments={comments} user={user}/>
            </StyledWrapper>
        </SiteTemplate>
    )
};

export default Home;