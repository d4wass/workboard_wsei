import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Wrapper } from 'utils/Components';
import Heading from 'components/molecules/Resume/Heading';
import Work from 'components/molecules/Resume/Work';

type ResumeType = {
    children?: React.ReactNode,
    loading: boolean,
    comments: any[],
    users: any[]
}

type CombineArrayType = {
    userName: string,
    userId: number,
    posts: WorkDataType[]
}

type WorkDataType = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

const StyledWrapper = styled(Wrapper)`
    padding: 30px;
    width: 80vw;
    flex-direction: column;
`;

const StyledContentWrapper = styled(Wrapper)`
    flex-direction: column;
`

const Resume = ({ loading, comments, users}: ResumeType) => {

    const [usersData, setUsersData] = useState<CombineArrayType[]>([]);
    const [posts, setPosts] = useState<WorkDataType[]>([])

    useEffect(() => {
        console.log('działa');
        let combineArray: Array<CombineArrayType> = [];
        let combinePost: Array<WorkDataType> = []

        users.forEach(
            (item: any, index: number) => combineArray.push({
                userName: item.name,
                userId: item.id,
                posts: comments.filter((item: { postId: number, id: number, name: string, email: string, body: string}) => item.postId === index + 1)
            })
        )

        combineArray.forEach(({ posts }) => combinePost.push(...posts));

        setUsersData(combineArray)
        setPosts(combinePost);


    }, [loading, comments, users]);

    return (
        <StyledWrapper>
            <Heading />
            <StyledContentWrapper>
                {!loading && usersData.length > 0 ? (posts.map((item, index) => (<Work data={item} user={usersData[0].userName} key={item.postId}/>))) : <h1>Loading</h1>}
            </StyledContentWrapper>
        </StyledWrapper>
    )
}

export default Resume;