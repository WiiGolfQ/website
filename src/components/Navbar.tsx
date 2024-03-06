"use client";

import {
    AppBar,
    Button,
    Box,
    Divider,
    Toolbar,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Drawer,
    IconButton,
} from "@mui/material";
import MenuIconRounded from "@mui/icons-material/MenuRounded";
import Link from "next/link";

import { useState } from "react";

const navItems = [
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Test 1",
        href: "/test1",
    },
    {
        title: "Test 2",
        href: "/test2",
    },
    {
        title: "Test 3",
        href: "/test3",
    },
];

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <List>
                {navItems.map((item) => (
                    <Link key={item.title} href={item.href} passHref>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <AppBar component="nav">
                    <Toolbar>
                        <Link href="/" passHref>
                            <Typography variant="h6">WiiGolfQ</Typography>
                        </Link>

                        <Box
                            sx={{
                                display: "flex",
                                flexGrow: 1,
                                justifyContent: "flex-end",
                            }}
                        >
                            <IconButton
                                color="inherit"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{
                                    display: { sm: "none" },
                                }}
                            >
                                <MenuIconRounded />
                            </IconButton>

                            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                                {navItems.map((item) => (
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        passHref
                                    >
                                        <Button sx={{ color: "#fff" }}>
                                            {item.title}
                                        </Button>
                                    </Link>
                                ))}
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <nav>
                <Drawer
                    variant="temporary"
                    anchor="right"
                    open={drawerOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: 240,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </>
    );
};

export default Navbar;
