import {useState} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Wrapper, Title, Paragraph } from 'utils/Components';

type WorkDataType = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

const StyledWrapper = styled(Wrapper)`
    flex-direction: column;
    box-shadow: 0 8px 6px -6px #ccc;
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: ${({theme}) => theme.color.white};
`;

const StyledContentWrapper = styled(Wrapper)`
    padding-top: 20px;
    align-items: center;
    justify-content: space-between;
`

const StyledImage = styled.img<{image: string}>`
    background-image: ${({image}) => `url(${image})`};
    border-radius: 50%;
    width: 50px;
    height: 50px;
`;

const StyledSpan = styled.span`
    color: ${({ theme }) => theme.color.grey};
    font-size: ${({ theme }) => theme.font.weight.bold};
    margin-left: 10px;
`;

type MapStateToPropsTypes = {
    // Your properties here
    // lastestPublications: Array<TLastPublication>,
    // loading: boolean
}


const Work = ({ data, user, photos, imageId }: { data: WorkDataType, user: string, photos?: any, imageId: number }) => {
    const [userPhotos] = useState<any>(photos);
    return (
            <StyledWrapper>
            <Title>{data.name}</Title>
                <Paragraph>{data.body}</Paragraph>
                <StyledContentWrapper>
                    <StyledContentWrapper>
                    <StyledImage image={userPhotos[imageId - 1].url}/>
                        <StyledSpan>
                            {user}
                        </StyledSpan>
                    </StyledContentWrapper>
                    <StyledContentWrapper>
                        <StyledSpan>
                            update 3 days ago
                        </StyledSpan>
                    </StyledContentWrapper>
                </StyledContentWrapper>
            </StyledWrapper>
    )
};

const mapStateToProps = (state: any) => {
    const { photos } = state;
    return { photos };
}

export default connect<MapStateToPropsTypes>(mapStateToProps)(Work);