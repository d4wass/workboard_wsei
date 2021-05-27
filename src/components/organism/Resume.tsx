import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Wrapper } from 'utils/Components';
import Heading from 'components/molecules/Resume/Heading';
import Work from 'components/molecules/Resume/Work';
import Pagination from 'components/molecules/Resume/Pagination';

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

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [postsPerPage] = useState<number>(5);

    //Get current posts
    const indexOflastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOflastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOflastPost);

    //Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    const nextPage = (pages: number) => {
        console.log(currentPage)
        if (currentPage === pages) {
            setCurrentPage(1)
        } else if (currentPage < pages) {
            setCurrentPage(currentPage + 1)
        }
    }
    const prevPage = (pages: number) => {
        console.log(pages)
        console.log(currentPage)

        if (currentPage === 1) {
            setCurrentPage(pages)
        } else if (currentPage <= pages) {
            setCurrentPage(currentPage - 1)
        }
    }

    useEffect(() => {
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

        setUsersData(combineArray);
        setPosts(combinePost);

    }, [loading, comments, users]);

    return (
        <StyledWrapper>
            <Heading />
            <StyledContentWrapper>
                {!loading && usersData.length > 0 ? (currentPosts.map((item) => (<Work data={item} user={usersData[item.postId - 1].userName} key={item.id} imageId={usersData[item.postId - 1].userId}/>))) : <h1>Loading</h1>}
                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage}/>
            </StyledContentWrapper>
        </StyledWrapper>
    )
}

export default Resume;