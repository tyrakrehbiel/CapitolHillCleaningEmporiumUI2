import { Close as CloseIcon } from '@mui/icons-material';
import { Button, Divider, Link, Drawer as MuiDrawer, Tab, Tabs } from '@mui/material';
import { navigationContent } from '../../../content';

interface Props {
    open: boolean;
    onClose: () => void;
    activePath: string | false;
}

/**
 * Drawer navigation component
 */
const Drawer = (props: Props) => {

    const {
        open,
        onClose,
        activePath
    } = props;

    return (
        <MuiDrawer
            open={open}
            onClose={onClose}
            anchor='right'
            sx={{
                '.MuiPaper-root': {
                    width: '75%'
                }
            }}
        >
            <Button startIcon={<CloseIcon />} onClick={onClose}>
                Close Menu
            </Button>
            <Divider />
            <Tabs
                value={activePath}
                orientation='vertical'
                variant='fullWidth'
                sx={{ marginTop: 4 }}
            >
                {navigationContent.links.map(({ href, label }) => {
                    return (
                        <Tab
                            value={href}
                            key={`primary-nav-item-${label}`}
                            LinkComponent={Link}
                            href={href}
                            label={label}
                        />
                    );
                })}
            </Tabs>
        </MuiDrawer>
    );
};

export default Drawer;