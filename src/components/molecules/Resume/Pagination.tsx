import React from 'react';
import styled from 'styled-components';

type PaginationType = {
    postsPerPage: number,
    totalPosts: number,
    paginate: any,
    prevPage: any,
    nextPage: any
}

const StyledButton = styled.button`
    padding: 10px 15px;
    cursor: pointer;
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
                    <StyledButton onClick={() => prevPage(pageNumbers.length)}>Prev</StyledButton>
                </li>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <StyledButton onClick={() => paginate(number)} >
                            {number}
                        </StyledButton>
                    </li>
                ))}
                <li>
                    <StyledButton onClick={() => nextPage(pageNumbers.length)}>next</StyledButton>
                </li>
            </StyledList>
        </nav>
    )
};

export default Pagination;