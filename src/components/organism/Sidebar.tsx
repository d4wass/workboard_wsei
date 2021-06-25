import styled from 'styled-components';
import UserPanel from 'components/molecules/Sidebar/UserPanel';
import SidebarBtn from 'components/atoms/SidebarBtn';


const StyledWrapper = styled.div`
    width: 20vw;
    padding: 30px;
`

const StyledContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`


const Sidebar = () => (
    <StyledWrapper>
        <UserPanel />
        <StyledContentWrapper>
            <SidebarBtn icon="Entites" content="Your Entities" link="/entities"/>
            <SidebarBtn icon="Atom" content="Ecosystem" link="/entities"/>
        </StyledContentWrapper>
    </StyledWrapper>
)

export default Sidebar;