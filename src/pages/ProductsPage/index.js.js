import React from 'react';
import {Breadcrumbs} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import styles from './products.module.css'
import Row from "../../components/mui/Layout/Row";
import Col from "../../components/mui/Layout/Col";

const ProductsPage = () => {
    const breadcrumbs = [
        <Link style={{display: 'flex'}} underline="hover" key="1" color="inherit" href="/">
            <HomeIcon style={{fontSize:'18px'}}/>
        </Link>,
        <Typography fontSize={"18px"} key="2" color="text.primary">
            محصولات
        </Typography>,
    ];

    return (
        <Row rowSpacing={4} className={styles.pageWrapper}>
            <Col className={styles.breadcrumbs}>
                <Breadcrumbs separator={<NavigateNextIcon fontSize="16px" />} aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
            </Col>
            <Col>

            </Col>
        </Row>
    );
};

export default ProductsPage;