import * as React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';

const MainTemplate = ({ children }: {children?: React.ReactNode}) => {
    return (
        <>
            <GlobalStyle/>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </>
    );
}


export default MainTemplate;