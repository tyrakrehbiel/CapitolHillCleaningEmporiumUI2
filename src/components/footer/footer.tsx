// import { useEffect, useState } from 'react';
// import { Menu as MenuIcon } from '@mui/icons-material';
import { Grid } from '@mui/material';
// import Link from 'next/link';
// import { useParams } from 'next/navigation';

// import { getSiteNavigation } from '@/sanity/api/navigation';
// import { getCompanyInfo } from '@/sanity/api/companyInfo';
// import { CompanyInfo, NavigationItem } from '@/types';

import Logo from '../logo/logo';

/**
 * Application footer including logo, navigation, and secondary actions
 * todo: implementation
 */
const Footer = () => {

    // const [primary, setPrimary] = useState<NavigationItem[]>([]);
    // const [companyInfo, setCompanyInfo] = useState<CompanyInfo>();

    // /**
    //  * Load site navigation on render via sanity.
    //  * Load company info that is needed for contact action buttons
    //  */
    // useEffect(() => {
    //     getSiteNavigation().then((res) => {
    //         setPrimary(res.primary);
    //     }).catch(() => {
    //         setPrimary([]);
    //     });

    //     // todo: store value in redux?
    //     getCompanyInfo().then((res) => {
    //         setCompanyInfo(res);
    //     }).catch(() => {
    //         setCompanyInfo(undefined);
    //     });
    // }, []);

    return (
        <Grid container sx={{
            backgroundColor: 'gray',
            minHeight: '40vh',
        }}>
            <Logo />
        </Grid>
    );
};

export default Footer;