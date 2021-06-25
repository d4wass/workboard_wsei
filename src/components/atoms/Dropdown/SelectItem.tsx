import styled from 'styled-components';
import NavItemSVG from 'components/atoms/NavItemSVG'
import { Paragraph, Wrapper } from 'utils/Components';
import { NavLink } from 'react-router-dom'

const StyledWrapper = styled(Wrapper)`
    box-shadow: none;
    background-color: none;
    align-items: center;
`;

type SelectItemProps = {
    children: string,
    path: string
}

const SelectItem = ({children, path}: SelectItemProps) => (
    <StyledWrapper as={NavLink} to={path}>
        <NavItemSVG namePage={children}/>
        <Paragraph>{children}</Paragraph>
    </StyledWrapper>
)

export default SelectItem;