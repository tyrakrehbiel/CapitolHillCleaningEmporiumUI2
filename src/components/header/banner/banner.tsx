'use client';

import { MailOutline as ContactIcon, PhoneOutlined as PhoneIcon } from '@mui/icons-material';
import { Box } from '@mui/material';

import { useMobile } from '../../../hooks';
import { BannerLink } from './bannerLink';
import { companyInfo } from '../../../content';

/**
 * Application banner that contains secondary actions
 */
export const Banner = () => {

    const isMobile = useMobile();

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: isMobile ? 'center' : 'flex-end',
            px: 2
        }}>
            <BannerLink
                href={`tel:${companyInfo.phone}`}
                label={companyInfo.phone}
                icon={<PhoneIcon fontSize='small' />}
            />
            <BannerLink
                href='/contact'
                label='Contact Us'
                icon={<ContactIcon fontSize='small' />}
            />
        </Box>
    );
};