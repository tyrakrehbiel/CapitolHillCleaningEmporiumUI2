import { Box, Typography } from '@mui/material';
import { DryCleaning as LogoIcon } from '@mui/icons-material';

// import pkg from '../../../package.json';

// const appName = pkg.description;
const appName = 'Capitol Hill Cleaning Emporium';

/**
 * Styled company logo for header component
 */
const Logo = () => {

    return (
        <Box
            // component={Link}
            // href='#header'
            sx={({ palette }) => ({
                display: 'flex',
                gap: 1,
                alignItems: 'center',
                textDecoration: 'none',
                color: palette.text.primary
            })}
        >
            <LogoIcon fontSize='large' />
            <Typography fontSize='large' fontWeight={600}>
                {appName}
            </Typography>
        </Box>
    );
};

export default Logo;