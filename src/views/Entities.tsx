import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'app/actions/actions';
import { AppState } from 'app/store/store';
import { TUser } from 'app/reducers/stateTypes'
import SiteTemplate from 'templates/SiteTemplate';
import EntityItem from 'components/molecules/Entities/EntityItem';
import { Title, Wrapper } from 'utils/Components';
import ChangeViewBtn from 'components/atoms/Entites/ChangeViewBtn';
import EntitiesFilter from 'components/organism/EntitiesFilter';

const StyledWrapper = styled(Wrapper)`
    flex-direction: column;
    padding: 30px;
    width: 100%;
`;

const StyledContentWrapper = styled.div<{heading?: string, list?: string}>`
    width: 100%;

    ${({ list }) => list === 'true' && css`
        display: flex;
        flex-direction: column;
    `}

    ${({ list }) => !(list === 'true') && css`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
    `}

    ${({ heading }) => heading === 'true' && css`
        display: flex;
        justify-content: space-between;
        padding-bottom: 20px;
    `}
`

const Entities = () => {

    const [isList, setListView] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch]);

    const users = useSelector((state: AppState) => state.users)
    const photos = useSelector((state: AppState) => state.photos)
    const userItem = users.map((user: TUser) => (<EntityItem user={user} key={user.id} photoUrl={photos[user.id - 1].url} />))

    const handleView = () => setListView(!isList)

    return (
        <SiteTemplate>
            <StyledWrapper>
                <StyledContentWrapper heading="true">
                    <Title>Entities</Title>
                    <ChangeViewBtn handleView={handleView} />
                </StyledContentWrapper>
                <EntitiesFilter/>
                <StyledContentWrapper list={isList.toString()}>
                    {userItem}
                </StyledContentWrapper>
            </StyledWrapper>
        </SiteTemplate>
    )
};

export default Entities;