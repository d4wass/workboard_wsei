import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.color.white};
    align-items: center;
`;

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.color.darkblue};
    font-size: 1.5rem;
`

export const UserTitle = styled.h3`
    color: ${({ theme }) => theme.color.darkblue};
    font-size: 1.7rem;
    margin-bottom: 10px;
`;