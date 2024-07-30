import { useEffect, useState } from 'react';
import { Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Box, IconButton, Link, Tab, Tabs } from '@mui/material';
import { useLocation } from 'react-router-dom';

import { useMobile } from '../../hooks';
import { Logo } from '../logo/logo';
import { Banner} from './banner/banner';
import { Drawer } from './drawer/drawer';
import { navigationContent } from '../../content';

/**
 * Application header including logo, navigation, and secondary actions
 */
export const Header = () => {

    const isMobile = useMobile();
    const { hash } = useLocation();

    // const [companyInfo, setCompanyInfo] = useState<CompanyInfo>();
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const [activePath, setAcivePath] = useState<string | false>(false);

    useEffect(() => {
        setAcivePath(hash != '' ? hash : false);
    }, [hash]);

    /**
     * Close drawer on path change
     */
    useEffect(() => {
        closeDrawer();
    }, [activePath]);

    const openDrawer = () => setDrawerOpen(true);

    const closeDrawer = () => setDrawerOpen(false);

    return (
        <>
            <AppBar elevation={0} position='fixed'>
                <Banner />
                <Box sx={{
                    backgroundColor: 'white',
                    color: 'text.primary',
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderColor: 'divider',
                    borderBottomWidth: 1,
                    borderBottomStyle: 'solid',
                    alignItems: isMobile ? 'center' : 'flex-end',
                    px: isMobile ? 0: 2
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        my: 'auto',
                        px: 2
                    }}>
                        <Logo />
                    </Box>
                    {isMobile
                        ? <IconButton onClick={openDrawer}>
                            <MenuIcon />
                        </IconButton>
                        : <Tabs
                            value={activePath ?? false}
                            sx={{ padding: 0, height: '100%', display: 'flex' }}
                            variant='scrollable'
                        >
                            {navigationContent.links.map(({ href, label }) => {
                                return (
                                    <Tab
                                        value={href}
                                        key={`primary-nav-item-${label}`}
                                        LinkComponent={Link}
                                        href={href}
                                        label={label}
                                        sx={{
                                            '&:hover': {
                                                backgroundColor: '#0000000a'
                                            }
                                        }}
                                    />
                                );
                            })}
                        </Tabs>
                    }
                </Box>
            </AppBar>
            <Drawer
                open={drawerOpen}
                onClose={closeDrawer}
                activePath={activePath}
            />
        </>
    );
};