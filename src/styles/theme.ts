import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    typography: {
        h1: {
            fontWeight: 600
        },
        h2: {
            fontWeight: 600
        },
        h3: {
            fontWeight: 600
        },
        h4: {
            fontWeight: 600
        },
    },
    palette: {
        primary: {
            main: '#134ea8'
        },
        secondary: {
            main: '#f6c91e'
        }
    },
    components: {
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: 0
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 0
                }
            }
        }
    }
});