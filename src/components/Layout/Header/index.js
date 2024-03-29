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
import {Link} from "react-router-dom";
import Drawer from "../../mui/Drawer";
import Row from "../../mui/Grid/Row";
import Col from "../../mui/Grid/Col";
import ResponsiveMenu from "./ResponsiveMenu/";
import NavMenu from "./NavMenu";
import styles from "./Header.module.css";

const Header = () => {
    const counterCart = useSelector(x => x.counterCart)
    const counterBeloved = useSelector(x => x.counterBeloved)

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
                    width: '20vw',
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
                            <Link to="/"  className={styles.logoWrapper}>
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
                                <Link href="tel:0098922334455" className={styles.call} to={"tel:0098922334455"}>
                                    <IconButton className={styles.iconButton}>
                                        <PhoneInTalkIcon fontSize='20' className={styles.icon + " " + styles.callIcon}/>
                                    </IconButton>
                                    <div className={styles.callTitle}>
                                        <Typography fontSize=".6rem" color="#e6e6e6" textAlign='left' marginBottom='0' >شماره تماس</Typography>
                                        <Typography fontSize="1rem" color="white.main" fontWeight='bold'>۰۹۲۲۳۳۴۴۵۵</Typography>
                                    </div>
                                </Link>
                                <IconButton component={Link} to="/cart-list" className={styles.iconButton}>
                                    <Badge badgeContent={counterCart} color="error" sx={{'& span': {fontSize: 15}}}>
                                        <ShoppingCartIcon fontSize="20" className={styles.icon}/>
                                    </Badge>
                                </IconButton>
                                <IconButton component={Link} to="favorite-list" className={styles.favorite}>
                                    <Badge badgeContent={counterBeloved} color="error" sx={{'& span': {fontSize: 15}}}>
                                        <FavoriteIcon fontSize='20' className={styles.icon}/>
                                    </Badge>
                                </IconButton>
                                <IconButton component={Link} to="/login" className={styles.person}>
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