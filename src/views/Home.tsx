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
    const [isPublicationsLoaded, setLoaded] = useState<boolean>(false)
    const dispatch = useDispatch()
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
        const asyncDispach = async () => {
            await dispatch(fetchDataUsers())
            if (photos && posts && users) {
                await combineData()
                setLoaded(true);
            } else {
                console.log('dipsa')
            }
        };

        asyncDispach()
    }, []);

    return (
        <SiteTemplate>
            <StyledWrapper>
                {!isPublicationsLoaded ? <LastestPublications lastestPublications={lastestPublications} /> : <h1>Loading</h1>}
                <Workspaces />
                <Resume loading={loading} users={users} comments={comments}/>
            </StyledWrapper>
        </SiteTemplate>
    )
};

export default Home;