

import logoImg from '../../assets/icons/logo-header.png'
import Image from 'next/image';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material'
import TopNav from './topNav';


interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const drawerWidth = 240;

const navItems = ['Home', 'About Us', 'services', 'projects', 'Contact Us', 'Team'];

export default function DrawerAppBar(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ background: "rgba(204, 204, 204, 1)", boxShadow:"0px 1px 2px #A49FA1", position:"sticky", width:"100%" }}>
                <Container>

                    <Toolbar>
                        <Box sx={{ display: "flex", justifyContent: "space-between", flex: 1 }}>
                            <Image src={logoImg} width={100} height={50} alt="logo" />
                            <Box sx={{alignSelf: "center", justifySelf:"end", display:"flex", textAlign:"right"}}>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                    sx={{ mr: 2, display: { md: 'none' } }}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                        </Box>
                        <Box sx={{ display: { xs: 'none', sm: 'none', md: "block", mr: "20px", marginLeft: "80px" } }}>
                            {navItems.map((item) => (
                                <Button key={item} sx={{ color: 'rgba(133, 133, 133, 1)', textTransform: "capitalize", fontSize: "16px", marginRight: "15px" }}>
                                    {item}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'block', md: "none" },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

