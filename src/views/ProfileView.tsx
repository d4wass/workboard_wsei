import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Wrapper } from 'utils/Components';
import ProfileInfo from 'components/molecules/Profile/ProfileInfo';
import ProfileBtn from 'components/molecules/Profile/ProfileBtn';
import { fetchUsers } from 'app/actions/actions';
import { AppState } from 'app/store/store';
import SiteTemplate from 'templates/SiteTemplate';
import { TUser } from 'app/reducers/stateTypes';


const StyledWrapper = styled(Wrapper)`
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 8px 6px -6px #ccc;
    background-color: ${({ theme }) => theme.color.white};
    margin: 30px;
    padding: 20px;
    width: 100%;
`;


const ProfileView = () => {

    const [profile, setProfile] = useState<TUser>()
    const dispatch = useDispatch()
    const user = useSelector((state: AppState) => (state.user));
    const photos = useSelector((state: AppState) => (state.photos))

    const createUserProfile = () => {
        const image = photos.filter(photo => photo.id === user.id)

    }

    useEffect(() => {
        console.log(photos.length)
        console.log(user)
        if (!photos.length) {
            dispatch(fetchUsers())
            setProfile(user)
        }
    });

    return (
        <SiteTemplate>
            <StyledWrapper>
                <ProfileBtn/>
                <ProfileInfo user={user}/>
            </StyledWrapper>
        </SiteTemplate>
    )
};

export default ProfileView