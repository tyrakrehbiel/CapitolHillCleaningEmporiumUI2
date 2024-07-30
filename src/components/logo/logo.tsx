import { Box, Link, Typography } from '@mui/material';
import { DryCleaning as LogoIcon } from '@mui/icons-material';
import { companyInfo } from '../../content';


/**
 * Styled company logo for header component
 */
export const Logo = () => {

    return (
        <Box
            component={Link}
            href=''
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
                {companyInfo.name}
            </Typography>
        </Box>
    );
};