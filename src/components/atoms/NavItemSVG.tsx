import styled from 'styled-components';
import { ReactComponent as Home } from 'assets/icons/home-solid.svg';
import { ReactComponent as Publications } from 'assets/icons/file-alt-solid.svg';
import { ReactComponent as People } from 'assets/icons/user-friends-solid.svg';
import { ReactComponent as Entities } from 'assets/icons/building-solid.svg';
import { ReactComponent as Admin } from 'assets/icons/user-shield-solid.svg';

const StyledNavItemSVG = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    width: 25px;
    margin-right: 10px;
`

const NavItemSVG = ({namePage}: {namePage: string}): JSX.Element => (
    <StyledNavItemSVG>
        {namePage === 'Home' && <Home />}
        {namePage === 'Publications' && <Publications/> }
        {namePage === 'People' && <People/> }
        {namePage === 'Entities' && <Entities/> }
        {namePage === 'Admininstration' && <Admin /> }
    </StyledNavItemSVG>
);

export default NavItemSVG;