import React, { useEffect } from 'react';
import SiteTemplate from 'templates/SiteTemplate';
import LastestPublications from 'components/organism/LastestPublications'
import Resume from 'components/organism/Resume'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { FetchDispatchType, DispatchTypeAction } from 'app/actions/actionTypes';
import { fetchDataUsers } from 'app/actions/actions';
import Workspaces from 'components/organism/Workspaces';
import { Wrapper } from 'utils/Components';
import styled from 'styled-components'

interface IHome {
    children?: React.ReactNode,
    lastestPublications: any,
    fetchUserData: () => Promise<void>,
    loading: boolean,
    users: any,
    comments: any,
}

interface MapDispatchToPropsTypes {
    fetchUserData: () => Promise<void>;
}

type TLastPublication = {
    userName: string,
    userImage: string,
    imageAlt: string,
    title: string,
    image: string
}

interface MapStateToPropsTypes {
    // Your properties here
    // lastestPublications: Array<TLastPublication>,
    // loading: boolean
}

const StyledWrapper = styled(Wrapper)`
    flex-direction: column;
    width: 80vw;
`

const Home: React.FC<IHome> = ({ fetchUserData, lastestPublications, loading, comments, users }) => {

    useEffect(() => {
        const getData = async () => await fetchUserData()
        getData()
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

export default connect<MapStateToPropsTypes, MapDispatchToPropsTypes>(mapStateToProps, mapDispatchToProps)(Home);