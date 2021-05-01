import * as React from 'react';
import styled from 'styled-components';
import { Wrapper, Paragraph } from 'utils/Components';
import Button from 'components/atoms/Button';
import { ReactComponent as Network } from 'assets/icons/people.svg';
import { ReactComponent as Publications } from 'assets/icons/publications.svg';
import { ReactComponent as Ecosystem } from 'assets/icons/ecosystem.svg';
import { ReactComponent as Entites } from 'assets/icons/entities.svg';


const StyledContent = styled.div`
    display: flex;
`;

const StyledParagraph = styled(Paragraph)`
    margin-left: 10px;
`;

const StyledWrapper = styled(Wrapper)`
    box-shadow: none;
    width: 100%;
    justify-content: space-between;
    border-radius: 10px;
    align-items: center;
    padding-bottom: 10px;
`;

type SidebarBtnProps = {
    icon: string,
    content: string
}

const SidebarBtn: React.FC<SidebarBtnProps> = ({ icon, content }) => (
    <StyledWrapper>
        <StyledContent>
            {icon === 'Ecosystem' && <Ecosystem />}
            {icon === 'Publications' && <Publications/>}
            {icon === 'Entites' && <Entites/>}
            {icon === 'Network' && <Network />}
            <StyledParagraph>{content}</StyledParagraph>
        </StyledContent>
        {icon === 'Network' ? <Button icon={icon} /> : <></> }
        {icon === 'Publications' ? <Button icon={icon} /> : <></> }
    </StyledWrapper>

);

export default SidebarBtn;