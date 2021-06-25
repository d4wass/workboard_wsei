import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import SelectItem from 'components/atoms/Dropdown/SelectItem';
import { routes, workspaceRoutes, profileRoutes } from 'routes/routes';
import NavItemSVG from 'components/atoms/NavItemSVG';
import { ReactComponent as DownArrow } from 'assets/icons/arrow-down.svg';
import { Wrapper, Paragraph } from 'utils/Components';
import Input from './Input'


interface IDropdownList {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

type TStyledNavigation = {
    isopen: string;
}

const StyledWrapper = styled(Wrapper)`
    align-items: center;
`;
const StyledWrapperNavItems = styled(Wrapper)`
    flex-direction: column;
    padding: 10px 0;
`

const StyledOverflowWrapper = styled.div`
    max-height: 300px;
    overflow: auto;
`

const StyledNavigation = styled.div`
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
  visibility: ${({isopen}) => isopen === 'true' ? 'visible' : 'hidden'};
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

const StyledDownArrow = styled(DownArrow)<TStyledNavigation>`
    transition: all 0.3s ease-in-out;
    transform: ${({isopen}) => isopen === 'false' ? 'rotateX(0deg)' : 'rotateX(180deg)'};
`;

const StyledInput = styled(Input)`
    width: 100%;
`;

const StyledParagraph = styled(Paragraph)`
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: 1.3rem;
`;

const DropdownList: React.FC<IDropdownList> = () => {

    const [isOpen, setOpen] = useState<boolean>(false);
    const [isActive, setActive] = useState<string>("");
    const [navItems, setNavItems] = useState<{id: number, name: string, to: string }[]>(routes);
    const [workspaceItems] = useState<{id: number, name: string, to: string }[]>(workspaceRoutes);
    const [profileItems] = useState<{id: number, name: string, to: string }[]>(profileRoutes)
    const [inputValue, setInputValue] = useState<string>("");

    const handleOpen = () => setOpen(!isOpen)

    const getActivePath = (text: string) => {
        let formatedText = text.charAt(0).toUpperCase() + text.slice(1)
        setActive(formatedText)
    };

    const handleInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(ev.target.value);

        if (inputValue === "") {
            setNavItems(routes)
        } else {
            setNavItems(routes.filter(item => item.name.toLowerCase().includes(ev.target.value.toLowerCase())))
        }
    }

    useEffect(() => {
        const pathname: string = window.location.pathname.replace('/', '');

        if (pathname === '') {
            getActivePath('Home');
        } else {
            getActivePath(pathname.replace('/', ' '))
        }
    });

    return (
        <>
            <StyledNavigation>
                <StyledNavItem onClick={handleOpen}>
                    <StyledWrapper>
                        <NavItemSVG namePage={isActive}/>
                        {isActive}
                    </StyledWrapper>
                    <StyledDownArrow isopen={isOpen.toString()}/>
                </StyledNavItem>
            </StyledNavigation>
            <StyledNavbarList isopen={isOpen.toString()} >
                <StyledInput type="text" label="Search" location="navigation" value={inputValue} fnChange={handleInput} />

                    <StyledOverflowWrapper>
                        <StyledWrapperNavItems>
                            <StyledParagraph>Platform</StyledParagraph>
                            {isOpen && navItems.map(item => (
                                <StyledNavItem key={item.id}>
                                <SelectItem path={item.to} >{item.name}</SelectItem>
                            </StyledNavItem>
                        ))}
                        </StyledWrapperNavItems>

                        <StyledWrapperNavItems>
                            <StyledParagraph>Workspaces</StyledParagraph>
                            {isOpen && workspaceItems.map(item => (
                            <StyledNavItem key={item.id}>
                                <SelectItem path={item.to} >{item.name}</SelectItem>
                            </StyledNavItem>
                        ))}
                        </StyledWrapperNavItems>
                    </StyledOverflowWrapper>

                <StyledWrapperNavItems>
                    <StyledParagraph>Account</StyledParagraph>
                    {isOpen && profileItems.map(item => (
                    <StyledNavItem key={item.id}>
                        <SelectItem path={item.to} >{item.name}</SelectItem>
                    </StyledNavItem>
                ))}
                </StyledWrapperNavItems>

            </StyledNavbarList>
        </>
    )
};

export default DropdownList;