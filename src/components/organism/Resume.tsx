import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Wrapper } from 'utils/Components';
import Heading from 'components/molecules/Resume/Heading';
import Work from 'components/molecules/Resume/Work';
import Pagination from 'components/molecules/Resume/Pagination';
import { withRouter, RouteComponentProps } from 'react-router';

interface ResumeType extends RouteComponentProps {
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

const StyledWrapper = styled(Wrapper)<{pathname?: string}>`
    padding: ${({pathname}) => pathname === '/' ? '30px' : '60px 0px'};
    width: 80vw;
    flex-direction: column;
`;

const StyledContentWrapper = styled(Wrapper)`
    flex-direction: column;
`

const Resume = ({ loading, comments, users, location}: ResumeType) => {

    const [usersData, setUsersData] = useState<CombineArrayType[]>([]);
    const [posts, setPosts] = useState<WorkDataType[]>([]);
    const [inputValue, setInputValue] = useState<string>("");

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [postsPerPage] = useState<number>(5);

    //Get current posts
    const indexOflastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOflastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOflastPost);

    //Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    const nextPage = (pages: number) => {
        if (currentPage === pages) {
            setCurrentPage(1)
        } else if (currentPage < pages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const prevPage = (pages: number) => {
        if (currentPage === 1) {
            setCurrentPage(pages)
        } else if (currentPage <= pages) {
            setCurrentPage(currentPage - 1)
        }
    }

    //HandleInput
    const handleInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(ev.target.value)
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
        posts.filter(item => item.name === inputValue)

    }, [loading, comments, users]);

    return (
        <StyledWrapper pathname={location.pathname}>
            <Heading handleInput={handleInput} inputValue={inputValue}/>
            <StyledContentWrapper>
                {!loading && usersData.length > 0 ? (currentPosts.map((item) => (<Work data={item} user={usersData[item.postId - 1].userName} key={item.id} imageId={usersData[item.postId - 1].userId}/>))) : <h1>Loading</h1>}
                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage}/>
            </StyledContentWrapper>
        </StyledWrapper>
    )
}

export default withRouter<ResumeType, React.FunctionComponent<ResumeType>>(Resume);