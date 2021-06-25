import styled, {css} from 'styled-components';

type PaginationType = {
    postsPerPage: number,
    totalPosts: number,
    paginate: any,
    prevPage: any,
    nextPage: any
}

const StyledButton = styled.button<{prev?: string, next?: string}>`
    font-weight: ${({theme}) => theme.font.weight.bold};
    padding: 10px 15px;
    margin: 10px 5px;
    cursor: pointer;
    border-radius: 50%;
    border: none;
    background-color: transparent;
    transition: background-color ease-in-out .3s;

    &:hover {
        color: ${({theme}) => theme.color.primaryBtn};
    }

    ${({ prev, next }) => prev !== 'true' && next !== 'true' && css`
        &:hover {
            color: ${({theme}) => theme.color.primaryBtn};
            background-color: rgba(42,63,157, 0.2);
        }
    `}


`;

const StyledList = styled.ul`
    display: flex;
    justify-content: center;
`;

const Pagination = ({ postsPerPage, totalPosts, paginate, prevPage, nextPage}: PaginationType) => {
    const pageNumbers: number[] = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav>
            <StyledList>
                <li>
                    <StyledButton onClick={() => prevPage(pageNumbers.length)} prev="true">Prev</StyledButton>
                </li>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <StyledButton onClick={() => paginate(number)} >
                            {number}
                        </StyledButton>
                    </li>
                ))}
                <li>
                    <StyledButton onClick={() => nextPage(pageNumbers.length)} next="true">next</StyledButton>
                </li>
            </StyledList>
        </nav>
    )
};

export default Pagination;