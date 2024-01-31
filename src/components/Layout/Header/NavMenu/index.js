import React, {useCallback} from 'react';
import {AppBar, Toolbar} from "@mui/material";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardGiftCardIcon from "@mui/icons-material/CardGiftcard";
import Col from "../../../mui/Layout/Col";
import Row from "../../../mui/Layout/Row";
import ProductsCategorization from "../productsCategorization/productsCategorization";
import NMenuButton from "./NMenuButton";
import menuData from "../../../../Data/menuData";
import styles from "./NMenu.module.scss";

const NavMenu = () => {
    const processElements = useCallback((data) => (
        data.map((item, index) => (
            <NMenuButton key={index} fontSize="1.2rem"{...item}>
                {
                    item.children?.length && (
                        item.type === "button" ?
                            <Row spacing={2} sx={{padding: "10px"}}>
                                {
                                    item.children.map((discountDataItem) => (
                                        <Col xs={2.2}>
                                            <ProductsCategorization
                                                titleColor="white"
                                                discount="۲۰٪ تخفیف"
                                                {...discountDataItem}
                                            />
                                        </Col>
                                    ))
                                }
                            </Row>
                            :
                            <Row spacing={3} sx={{padding: "10px 24px"}}>
                                <Col className={styles.NMenuList}>
                                    {
                                        item.children?.length ?
                                            processElements(item.children) : null
                                    }
                                </Col>
                            </Row>
                    )
                }
            </NMenuButton>
        ))
    ), [])

    return (
        <AppBar position="static" color="tertiary" className={styles.navAppBar}>
            <Toolbar className={styles.navToolbar}>
                <List component="nav" aria-label="main mailbox folders" className={styles.navList}>
                    {
                        processElements(menuData)
                    }
                </List>
                <Button variant="contained" className={styles.giftButton}>
                    <CardGiftCardIcon className={styles.giftIcon}/>
                    <Typography fontSize="1rem">
                        تخففیفات روزانه
                    </Typography>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavMenu;