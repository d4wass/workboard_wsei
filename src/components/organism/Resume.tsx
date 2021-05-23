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
    posts: any
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

    const [usersPosts, setUsersPosts] = useState<CombineArrayType[]>([])
    
    useEffect(() => {
        console.log('działa');
        let combineArray: Array<CombineArrayType> = [];
            
        users.forEach(
            (item: any, index: number) => combineArray.push({
                userName: item.name,
                userId: item.id,
                posts: comments.filter((item: { postId: number, id: number, name: string, email: string, body: string}) => item.postId === index+1)
            })
        )
        setUsersPosts(combineArray)
        
    }, [loading, comments, users]);

    return (
        <StyledWrapper>
            <Heading />
            <StyledContentWrapper>
                {!loading && usersPosts.length > 0 ? (usersPosts.map(item => (<Work />))) : <h1>Loading</h1>}
            </StyledContentWrapper>
        </StyledWrapper>
    )
}

export default Resume;