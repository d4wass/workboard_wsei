import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SiteTemplate from 'templates/SiteTemplate';
import LastestPublications from 'components/organism/LastestPublications'
import Resume from 'components/organism/Resume'
import { fetchDataUsers } from 'app/actions/actions';
import Workspaces from 'components/organism/Workspaces';
import { Wrapper } from 'utils/Components';
import styled from 'styled-components'
import { AppState } from 'app/store/store';

interface IHome {
    children?: React.ReactNode,
    lastestPublications: any,
    loading: boolean,
    users: any,
    comments: any,
}

type TLastPublication = {
    userName: string,
    userImage: string,
    imageAlt: string,
    title: string,
    image: string
}

const StyledWrapper = styled(Wrapper)`
    flex-direction: column;
    width: 80vw;
`

const Home = () => {

    const [lastestPublications, setLastestPublications] = useState<TLastPublication[]>([])

    const dispatch = useDispatch()
    const user = useSelector((state: AppState) => (state.user));
    const users = useSelector((state: AppState) => (state.users));
    const posts = useSelector((state: AppState) => (state.posts));
    const photos = useSelector((state: AppState) => (state.photos));
    const comments = useSelector((state: AppState) => (state.comments));
    const loading = useSelector((state: AppState) => (state.loading));

    const combineData = () => {
        let stateData: Array<TLastPublication> = [];
        users.forEach(
            (item: any, index: number) => stateData.push({
                image: photos[index].url,
                title: posts[index].title,
                imageAlt: photos[index].title,
                userName: item.name,
                userImage: photos[index].url
            })
        );
        setLastestPublications(stateData)
    }

    useEffect(() => {
        dispatch(fetchDataUsers())
            combineData()
    }, []);

    return (
        <SiteTemplate>
            <StyledWrapper>
                {!loading && lastestPublications.length > 0 ? <LastestPublications lastestPublications={lastestPublications} /> : <h1>Loading</h1>}
                <Workspaces />
                <Resume loading={loading} users={users} comments={comments}/>
            </StyledWrapper>
        </SiteTemplate>
    )
};

const mapDispatchToProps = (dispatch: any) => ({
    fetchUserData: () => dispatch(fetchDataUsers())
})

const mapStateToProps = (state: any) => {

    const { users, photos, posts, loading, comments } = state
    let lastestPublications: Array<TLastPublication> = [];

    users.forEach(
        (item: any, index: number) => lastestPublications.push({
            image: photos[index].url,
            title: posts[index].title,
            imageAlt: photos[index].title,
            userName: item.name,
            userImage: photos[index].url
        })
    );

    return { lastestPublications, loading, comments, users };
};

export default Home;