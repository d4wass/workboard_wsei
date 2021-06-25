import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Wrapper } from 'utils/Components';
import Heading from 'components/molecules/Resume/Heading';
import Work from 'components/molecules/Resume/Work';
import Pagination from 'components/molecules/Resume/Pagination';
import { withRouter, RouteComponentProps } from 'react-router';
import WorkspaceResumeBtn from 'components/molecules/Resume/WorkspaceResumeBtn';


interface ResumeType extends RouteComponentProps {
    children?: React.ReactNode,
    loading: boolean,
    comments: any[],
    users: any[],
    user: any
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

const Resume = ({ loading, comments, users, location, user}: ResumeType) => {

    const [usersData, setUsersData] = useState<CombineArrayType[]>([]);
    const [posts, setPosts] = useState<WorkDataType[]>([]);
    const [inputValue, setInputValue] = useState<string>("");
    const [selectValue, setSelectValue] = useState<string>("All Items")

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [postsPerPage] = useState<number>(5);
    //Get current posts - pagination
    const indexOflastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOflastPost - postsPerPage;
    const [currentPosts, setCurrentPosts] = useState<WorkDataType[]>([]);


    //Change page
    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber)
        setCurrentPosts(posts.slice(indexOfFirstPost, indexOflastPost))
    }

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
        setInputValue(ev.target.value);
        const post = posts.filter(item => {
            if (inputValue === "") {
                return item;
            } else if (item.name.toLowerCase().includes(inputValue.toLowerCase())) {
                return item;
            }
        });

        if (currentPosts.length >= 5) {
            setCurrentPosts(post.slice(indexOfFirstPost, indexOflastPost))
        } else {
            setCurrentPosts(post)
        }
    }

    //Handle Select
    const handleSelect = (option: {name: string, value: string}) => {
        setSelectValue(option.name)
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
        setCurrentPosts(combinePost.slice(indexOfFirstPost, indexOflastPost));
    }, [comments, users, indexOfFirstPost, indexOflastPost]);

    return (
        <StyledWrapper pathname={location.pathname}>
            <Heading
                handleInput={handleInput}
                inputValue={inputValue}
                handleSelect={handleSelect}
            />
            {location.pathname.includes('workspace') && <WorkspaceResumeBtn/>}
            <StyledContentWrapper>
                {!loading && usersData.length > 0 ? (currentPosts.map((item) => (<Work data={item} user={usersData[item.postId - 1].userName} key={item.id} imageId={usersData[item.postId - 1].userId}/>))) : <h1>Loading</h1>}
                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
            </StyledContentWrapper>
        </StyledWrapper>
    )
}

export default withRouter<ResumeType, React.FunctionComponent<ResumeType>>(Resume);