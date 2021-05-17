import React, { useEffect } from 'react';
import SiteTemplate from 'templates/SiteTemplate';
import LastestPublications from 'components/organism/LastestPublications'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { FetchDispatchType, DispatchTypeAction } from 'app/actions/actionTypes';
import { fetchDataUsers } from 'app/actions/actions';

interface IHome {
    children?: React.ReactNode,
    lastestPublications: any,
    fetchUserData: () => Promise<void>,
    loading: boolean
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

const Home: React.FC<IHome> = ({ fetchUserData, lastestPublications, loading }) => {

    useEffect(() => {
        const getData = async () => await fetchUserData()
        getData()
    }, []);

    return (
        <SiteTemplate>
           {!loading && lastestPublications.length > 0 ? <LastestPublications lastestPublications={lastestPublications}/> : <h1>Loading</h1>} 
        </SiteTemplate>
    )
};



const mapDispatchToProps = (dispatch: any) => ({
    fetchUserData: () => dispatch(fetchDataUsers())
})

const mapStateToProps = (state: any) => {

    const { users, photos, posts, loading } = state
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

    return { lastestPublications, loading };
};

export default connect<MapStateToPropsTypes, MapDispatchToPropsTypes>(mapStateToProps, mapDispatchToProps)(Home);