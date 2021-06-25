import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Wrapper } from 'utils/Components';
import ProfileInfo from 'components/molecules/Profile/ProfileInfo';
import ProfileBtn from 'components/molecules/Profile/ProfileBtn';
import { createUser } from 'app/actions/actions';
import { AppState } from 'app/store/store';
import SiteTemplate from 'templates/SiteTemplate';
import ProfileSpecification from 'components/molecules/Profile/ProfileSpecification';
import PanelInformation from 'components/molecules/Profile/PanelInformation';
import ProfileTableSection from 'components/organism/ProfileTableSection';

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
    const user = useSelector((state: AppState) => (state.user));
    const photos = useSelector((state: AppState) => (state.photos))
    const loading = useSelector((state: AppState) => (state.photos))


    const [profile, setProfile] = useState<any>({})
    const [inputValue, setInputValue] = useState<string>("")
    const [isLoading, setLoading] = useState<boolean>(true)

    const dispatch = useDispatch()

    const editProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
        let copyProfile = profile
        const { name, value }: { name: string, value: string } = e.target


        if (name === 'city') {
            setInputValue(copyProfile['address'].city)
            copyProfile['address'].city = value
            setProfile(copyProfile)
        } else if (name === 'company') {
            setInputValue(copyProfile['company'].name)
            copyProfile['company'].name = value
            setProfile(copyProfile)
        } else {
            setInputValue(value);
            (copyProfile as any)[name] = value;
            setProfile(copyProfile)
        }
    }

    useEffect(() => {
        dispatch(createUser())
        if (user) {
           setProfile(user)
        }
        if (profile) {
            setLoading(false)
        }
    }, [dispatch, loading])

    return (
        <SiteTemplate>
            <StyledWrapper>
                    <ProfileBtn/>
                    {isLoading ? <span>Loading...</span> : <ProfileInfo user={profile} fnChange={editProfile} />}
                <ProfileSpecification />
                <PanelInformation />
                <ProfileTableSection />
            </StyledWrapper>
        </SiteTemplate>
    )
};

export default ProfileView