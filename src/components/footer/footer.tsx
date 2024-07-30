import { Grid } from '@mui/material';

import { Logo } from '../logo/logo';

/**
 * Application footer including logo, navigation, and secondary actions
 * todo: implementation
 */
export const Footer = () => {

    return (
        <Grid container sx={{
            backgroundColor: 'gray',
            minHeight: '40vh',
        }}>
            <Logo />
        </Grid>
    );
};