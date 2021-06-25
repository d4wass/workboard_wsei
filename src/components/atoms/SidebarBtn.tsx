import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Paragraph } from 'utils/Components';
import Button from 'components/atoms/Button';
import { ReactComponent as Network } from 'assets/icons/people.svg';
import { ReactComponent as Publications } from 'assets/icons/file-alt-solid.svg';
import { ReactComponent as Ecosystem } from 'assets/icons/ecosystem.svg';
import { ReactComponent as Entites } from 'assets/icons/entities.svg';
import { ReactComponent as Atom } from 'assets/icons/atom-solid.svg';

const StyledContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;

const StyledParagraph = styled(Paragraph)`
    margin-left: 10px;
`;

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px;
    justify-content: space-between;
`;

interface SidebarBtnProps {
    icon: string,
    content: string
    link: string
}

const SidebarBtn = ({ icon, content, link }: SidebarBtnProps) => (
    <StyledLink to={link}>
        <StyledContent>
            {icon === 'Ecosystem' && <Ecosystem />}
            {icon === 'Publications' && <Publications/>}
            {icon === 'Entites' && <Entites/>}
            {icon === 'Network' && <Network />}
            {icon === 'Atom' && <Atom />}
            <StyledParagraph>{content}</StyledParagraph>
        </StyledContent>
        {icon === 'Network' ? <Button icon={icon} /> : <></> }
        {icon === 'Publications' ? <Button icon={icon} /> : <></> }
    </StyledLink>

);

export default SidebarBtn;