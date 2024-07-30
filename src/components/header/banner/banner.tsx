'use client';

import { useEffect, useState } from 'react';
import { MailOutline as ContactIcon, PhoneOutlined as PhoneIcon } from '@mui/icons-material';
import { Box } from '@mui/material';

// import { CompanyInfo } from '@/types';
import { useMobile } from '../../../hooks';

import BannerLink from './bannerLink';
import { companyInfo } from '../../../content';

/**
 * Application banner that contains secondary actions
 */
const Banner = () => {

    const isMobile = useMobile();

    const [phoneNumber, setPhoneNumber] = useState<string>();

    useEffect(() => {
        setPhoneNumber(companyInfo ? 'tel:' + companyInfo.phone : undefined);
    }, [companyInfo]);

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: isMobile ? 'center' : 'flex-end',
            px: 2
        }}>
            {companyInfo && phoneNumber &&
                <BannerLink
                    href={phoneNumber}
                    label={companyInfo.phone}
                    icon={<PhoneIcon fontSize='small' />}
                />
            }
            <BannerLink
                href='/contact'
                label='Contact Us'
                icon={<ContactIcon fontSize='small' />}
            />
        </Box>
    );
};

export default Banner;