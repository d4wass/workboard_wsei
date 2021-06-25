import React, { useState } from 'react';
import styled from 'styled-components';
import SpecificationInput from 'components/molecules/Profile/SpecificationInput';
import {ReactComponent as Plus} from 'assets/icons/plus-solid.svg'
import { useEffect } from 'react';
import { useStore } from 'react-redux';

type ParagraphType = {
    spanContent: string,
    isEdited?: boolean,
    id: number,
    handleDelete: (e: React.MouseEvent<HTMLElement>) => void,
    handleAdd: () => void,
    value: {id: number, content: string}[]
}

const StyledParagraph = styled.p`
    color: ${({ theme }) => theme.color.blue};
    padding: 5px 10px;
    margin-right: 10px;
    border-radius: 5px;
    background-color: rgba(42, 63, 157, 0.1);
`;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledContentWrapper = styled.div`
    display: flex;
`;

const StyledSpan = styled.span`
    color: ${({ theme }) => theme.color.iconGray};
    font-size: 1.1rem ;
    margin: 10px 0;
`;

const StyledPlus = styled(Plus)`
    height: 20px;
    width: 20px;
`;

const StyledButton = styled.button`
    border: none;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: ${({ theme }) => theme.color.blue};
    margin-left: 5px;
    cursor: pointer;
`;

const ProfileSpecParagraph = ({ value, spanContent, isEdited, handleDelete, handleAdd }: ParagraphType) => {
    const [values, setValues] = useState<{id: number, content: string }[]>(value)
    useEffect(() => {
        setValues(value)
    }, [value])

    return (
        <>
            {
                isEdited ?
                    <StyledWrapper>
                        <StyledSpan>{spanContent}</StyledSpan>
                        <StyledContentWrapper>
                            {values.map((item: { id: number, content: string }) =>
                                <>
                                    <SpecificationInput key={item.id} value={item.content} id={`${item.id}`} handleRemoveBtn={handleDelete} />
                                </>
                            )}
                            <StyledButton onClick={handleAdd}><StyledPlus/></StyledButton>
                        </StyledContentWrapper>
                    </StyledWrapper> :
                    <StyledWrapper>
                        <StyledSpan>{spanContent}</StyledSpan>
                        <StyledContentWrapper>
                            {value.map((item, index) => <StyledParagraph key={index}>{item.content}</StyledParagraph>)}
                        </StyledContentWrapper>
                    </StyledWrapper>
            }
        </>
    )
}
export default ProfileSpecParagraph;