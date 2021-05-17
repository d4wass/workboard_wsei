import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
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

export const Title = styled.h1`
    color: ${({ theme }) => theme.color.darkblue};
    font-size: 2.2rem;
    font-weight: ${({theme}) => theme.font.weight.bold};
    margin-bottom: 20px;
    width: 100%;
`;