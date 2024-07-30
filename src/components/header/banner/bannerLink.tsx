import { ReactNode } from 'react';
import { Box, Link, Typography } from '@mui/material';

interface BannerLinkProps {
    href: string;
    icon: ReactNode;
    label: string;
}

/**
 * Custom Link component for navigation banner
 */
export const BannerLink = (props: BannerLinkProps) => {

    const { href, icon, label } = props;

    return (
        <Box
            component={Link}
            href={href}
            px={2}
            py={1}
            sx={({ palette }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                color: 'white',
                textDecoration: 'none',
                textTransform: 'uppercase',
                '&:hover': {
                    backgroundColor: '#ffffff11'
                },
                '&:active': {
                    color: palette.secondary.main
                }
            })}
        >
            {icon}
            <Typography fontSize='small' fontWeight={500}>
                {label}
            </Typography>
        </Box>
    );
};