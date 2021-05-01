import * as React from 'react';
import Topbar from 'components/organism/Topbar';
import Sidebar from 'components/organism/Sidebar';
import { Wrapper } from 'utils/Components'
import styled from 'styled-components'

const StyledWrapper = styled(Wrapper)`
    box-shadow: none;
    background-color: transparent;
`

const SiteTemplate = ({ children }: {children?: React.ReactNode}) => {
    return (
        <>
            <Topbar />
            <StyledWrapper>
            <Sidebar />
                {children}
            </StyledWrapper>
        </>
    );
}


export default SiteTemplate;