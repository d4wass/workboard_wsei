import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import SelectItem from 'components/atoms/SelectItem';
import { routes } from 'routes/routes';
import NavItemSVG from 'components/atoms/NavItemSVG';
import { ReactComponent as DownArrow } from 'assets/icons/arrow-down.svg';
import { Wrapper } from 'utils/Components';

interface IDropdownList {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

type TStyledNavigation = {
    isopen: boolean;
}

const StyledNavigation = styled.div<TStyledNavigation>`
    display: flex;
    height: 50px;
    padding: 0 1rem;
    width: 100%;
    background-color: transparent;
    overflow: hidden;
    transition: height 0.3s ease;
`;

const StyledNavbarList = styled.ul<TStyledNavigation>`
    position: absolute;
  top: 58px;
  visibility: ${({isopen}) => isopen ? 'visible' : 'hidden'};
  background-color: #fff;
  padding: 1rem;
  width: 100%;
  box-shadow: 9px 9px 10px -5px #ccc;
`;

const StyledNavItem = styled.li`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    font-weight: ${({theme}) => theme.font.weight.bold};
    cursor: pointer;
`;

const StyledDownArrow = styled(DownArrow)`
    transition: all 0.3s ease-in-out;
    transform: ${({isopen}) => isopen ? 'rotateX(180deg)' : 'rotateX(0deg)'};
`;

const DropdownList: React.FC<IDropdownList> = () => {

    const [isOpen, setOpen] = useState<boolean>(false);
    const [isActive, setActive] = useState<string>("")

    const handleOpen = () => setOpen(!isOpen)

    const getActivePath = (text: string) => {
        let formatedText = text.charAt(0).toUpperCase() + text.slice(1)
        setActive(formatedText)
    };

    useEffect(() => {
        const pathname: string = window.location.pathname.replace('/', '');

        if (pathname === '') {
            getActivePath('Home');
        } else {
            getActivePath(pathname)
        }
    })

    return (
        <>
            <StyledNavigation isopen={isOpen} >
                <StyledNavItem onClick={handleOpen}>
                    <Wrapper>
                        <NavItemSVG namePage={isActive}/>
                        {isActive}
                    </Wrapper>
                    <StyledDownArrow isopen={isOpen}/>
                </StyledNavItem>
            </StyledNavigation>
            <StyledNavbarList isopen={isOpen} >
                {isOpen && routes.map(item => (
                    <StyledNavItem>
                        <SelectItem path={item.to} >{item.name}</SelectItem>
                    </StyledNavItem>
                ))}
            </StyledNavbarList>
        </>
    )
};

export default DropdownList;