import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Wrapper, UserTitle } from 'utils/Components';
import SidebarBtn from 'components/atoms/SidebarBtn';
import person from 'assets/person.jpg'
import { NavLink } from 'react-router-dom';
import { AppState } from 'app/store/store';
import { fetchUsers } from 'app/actions/actions';
import { TUser } from 'app/reducers/stateTypes';

interface IProfile extends TUser {
    img: string
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

    ${({ center }) => center && css`
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

interface IContentStyled {
    center?: boolean
}

const UserPanel = () => {
    const [profile, setProfile] = useState({} as IProfile)
    const dispatch = useDispatch()
    const user = useSelector((state: AppState) => (state.user));
    const photos = useSelector((state: AppState) => (state.photos))

    const createUserProfile = () => {
        const image = photos.filter(photo => photo.id === user.id)[0]
        const extendedUser: any = user;
        extendedUser['img'] = image
        console.log(image)
        setProfile(extendedUser)
    }

    useEffect(() => {
        if (!photos.length) {
            dispatch(fetchUsers())
            createUserProfile()
        }
    });

    return (
        <StyledWrapper>
            <StyledContent as={NavLink} to="/profile" center>
                <StyledImg />
                <UserTitle>{user.name}</UserTitle>
                <StyledUserTitle>Inter - lkjlkjlkj</StyledUserTitle>
            </StyledContent>
            <StyledSpan/>
            <StyledContent>
                <SidebarBtn content="Your Network" icon="Network" />
                <SidebarBtn content="Your publications" icon="Publications" />
            </StyledContent>
        </StyledWrapper>
    )
};

export default UserPanel;