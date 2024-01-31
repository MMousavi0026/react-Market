import React from 'react';
import {useSelector} from "react-redux";
import {AppBar, IconButton, InputBase, styled, Toolbar} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from '@mui/icons-material/Menu';
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Drawer from "../../mui/Drawer";
import Row from "../../mui/Layout/Row";
import Col from "../../mui/Layout/Col";
import ResponsiveMenu from "./ResponsiveMenu/";
import NavMenu from "./NavMenu";
import styles from "./Header.module.css";

const Header = () => {
    const counterCart = useSelector(x => x.counterCart)

    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setOpen(open)
    };

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '27vw',
                '&:focus': {
                    width: '30vw',
                },
            },
            [theme.breakpoints.up('xl')]: {
                width: '15vw',
                '&:focus': {
                    width: '33vw',
                },
            },
        },
    }));

    return (
        <>
            <AppBar position="sticky" color="primary" className={styles.appBar}>
                <Toolbar className={styles.toolbarWrapper}>
                    <Row columnSpacing={1} className={styles.toolbar}>
                        <Col xs={4} sm={3} lg={3}>
                            <Link href="/"  className={styles.logoWrapper}>
                                <img className={styles.logo} alt='logo' src="/img/logo-sm.png"/>
                            </Link>
                        </Col>
                        <Col>
                            <div className={styles.search}>
                                <StyledInputBase
                                    placeholder="دنبال چه محصولی هستید؟"
                                    inputProps={{'aria-label': 'search'}}
                                />
                                <IconButton className={styles.searchIcon}>
                                    <SearchIcon fontSize='20' fontWeight="bold" className={styles.icon}/>
                                </IconButton>
                            </div>
                        </Col>
                        <Col sx={2} lg={4} className={styles.iconsWrapper}>
                            <div className={styles.icons}>
                                <button className={styles.call}>
                                    <IconButton className={styles.iconButton}>
                                        <PhoneInTalkIcon fontSize='20' className={styles.icon + " " + styles.callIcon}/>
                                    </IconButton>
                                    <div className={styles.callTitle}>
                                        <Typography fontSize=".6rem" color="#e6e6e6" textAlign='left' marginBottom='0' >شماره تماس</Typography>
                                        <Typography fontSize="1rem" fontWeight='bold'>۰۹۲۲۳۳۴۴۵۵</Typography>
                                    </div>
                                </button>
                                <IconButton className={styles.iconButton}>
                                    <Badge badgeContent={counterCart} color="error" sx={{'& span': {fontSize: 15}}}>
                                        <ShoppingCartIcon fontSize="20" className={styles.icon}/>
                                    </Badge>
                                </IconButton>
                                <IconButton className={styles.favorite}>
                                    <FavoriteIcon fontSize='20' className={styles.icon}/>
                                </IconButton>
                                <IconButton className={styles.person}>
                                    <PersonIcon fontSize='20' className={styles.icon}/>
                                </IconButton>
                                <IconButton onClick={toggleDrawer(true)} className={styles.menu}>
                                    <MenuIcon fontSize='20' className={styles.icon}/>
                                </IconButton>
                                <Drawer
                                    open={open}
                                    anchor="right"
                                    onClose={toggleDrawer(false)}
                                    PaperProps={{className: styles.drawerPaperProps}}
                                >
                                    <ResponsiveMenu/>
                                </Drawer>
                            </div>
                        </Col>
                    </Row>
                </Toolbar>
            </AppBar>
            <NavMenu/>
        </>
    );
};

export default Header;