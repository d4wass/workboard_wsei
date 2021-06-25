import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Wrapper, UserTitle } from 'utils/Components';
import SidebarBtn from 'components/atoms/SidebarBtn';
import person from 'assets/person.jpg'
import { NavLink } from 'react-router-dom';
import { AppState } from 'app/store/store';
import { createUser } from 'app/actions/actions';

type IContentStyled = {
    center?: string
}

const StyledWrapper = styled(Wrapper)`
    width: auto;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 20px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 8px 6px -6px #ccc;
`;

const StyledContent = styled(Wrapper)<IContentStyled>`
    flex-direction: column;
    box-shadow: none;
    width: 100%;

    ${({ center }) => center === 'true' && css`
        justify-content: center;
        padding: 10px;
        border-radius: 10px;
        align-items: center;
        transition: all ease-in-out 0.3s;
        &:hover{
            background-color: ${({theme}) => theme.color.lightgrey}
        }
    `}
`

const StyledUserTitle = styled(UserTitle)`
    color: ${({theme}) => theme.color.grey};
`

const StyledSpan = styled.span`
    width: 100%;
    height: 1px;
    margin: 20px 0;
    background-color: ${({ theme }) => theme.color.iconGrey};
`

const StyledImg = styled.div<{image?: string}>`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-image: url(${({image}) => image ? image : person});
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 20px;
`;

const UserPanel = () => {
    const [profile, setProfile] = useState<any>();
    const [isLoading, setLoading] = useState<boolean>(true)

    const dispatch = useDispatch()
    const user = useSelector((state: AppState) => (state.user));
    const photos = useSelector((state: AppState) => (state.photos))
    const loading = useSelector((state: AppState) => (state.photos))


    useEffect(() => {
        dispatch(createUser())

        if (user) {
           setProfile(user)
        }
        if (profile) {
            setLoading(false)
        }
        if (window.location.pathname === '/profile') {
            setLoading(true)
        }
    }, [dispatch, loading]);

    return (
        <StyledWrapper>
            <StyledContent as={NavLink} to="/profile" center="true">
                {
                    isLoading ? <span>Loading...</span> : profile ? (
                        <>
                            <StyledImg image={photos[0].url}/>
                            <UserTitle>{profile.name}</UserTitle>
                            <StyledUserTitle>Inter - {profile.company.name}</StyledUserTitle>
                        </>
                    ) : (
                        <span>Loading...</span>
                    )
                }

            </StyledContent>
            <StyledSpan/>
            <StyledContent>
                <SidebarBtn content="Your Network" icon="Network" link="/" />
                <SidebarBtn content="Your publications" icon="Publications" link="/" />
            </StyledContent>
        </StyledWrapper>
    )
};

export default UserPanel;