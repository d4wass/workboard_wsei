import styled from 'styled-components';
import { Wrapper, Title, Paragraph } from 'utils/Components';

type WorkspaceHeadingType = {
    title: string,
    content: string
}

const StyledWrapper = styled(Wrapper)`
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
    width: 100%;
    background-color: ${({theme}) => theme.color.white};
`;

const StyledWrapperContent = styled.div`
    padding: 20px;
`;

const StyledImage = styled.div`
    height: 300px;
    border-radius: 10px 10px 0 0;
    width: 100%;
    background-image: url('https://source.unsplash.com/1600x900?office');
`;

const WorkspaceHeading = ({title, content}: WorkspaceHeadingType) => (
    <StyledWrapper>
        <StyledImage/>
        <StyledWrapperContent>
            <Title>{title}</Title>
            <Paragraph>{content}</Paragraph>
        </StyledWrapperContent>
    </StyledWrapper>
);

export default WorkspaceHeading;