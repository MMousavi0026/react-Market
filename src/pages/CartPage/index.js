import React, {useState} from 'react';
import Col from "../../components/mui/Grid/Col";
import {
    Breadcrumbs, IconButton,
    styled,
    Table, TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import {Link} from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import Row from "../../components/mui/Grid/Row";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from "./CartPage.module.css"
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import SideBox from "../../components/pages/ShopPage/SideBox";
import Product from "../../components/pages/ShopPage/Product";
import {productsList} from "../../data/productsData";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // '&:nth-of-type(odd)': {
    //     backgroundColor: theme.palette.action.hover,
    // },
    // hide last border
    // '&:last-child td, &:last-child th': {
    //     border: 0,
    // },
}));

const breadcrumbs = [
    <Link style={{display: 'flex'}} underline="hover" key="1" color="#999999" to="/">
        <HomeIcon style={{fontSize:'18px'}}/>
    </Link>,
    <Typography fontSize={"18px"} key="2" color="text.primary">
        سبد خرید
    </Typography>,
];

const CartPage = () => {

    const [someProductsList] = useState(productsList.slice(0, 2))

    const [cartNumber, setCartNumber] = useState(1)

    const decrementCartNumber = () => {
        if (cartNumber > 1) {
            setCartNumber(cartNumber - 1);
        }
    }

    const incrementCartNumber = () => {
        setCartNumber(cartNumber + 1)
    }

    return (
        <Row spacing={4}>
            <Col xs={12} />
            <Col xs={12}>
                <Breadcrumbs separator={<NavigateBeforeIcon fontSize="16px" />} aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
            </Col>
            <Col xs={12} sx={{ display: {xs: "none", sm: "block"} }}>
                <div className={styles.titleWrapper}>
                    <Typography fontSize={25}>سبد خرید</Typography>
                    <ArrowBackIcon sx={{m: "0 20px"}}/>
                    <Link to="/checkout" style={{ fontSize: "25px", color: "#999999" }}>جزئیات تسویه حساب</Link>
                    <ArrowBackIcon sx={{m: "0 20px"}}/>
                    <Typography fontSize={25} color="inherit.main">ثبت سفارش</Typography>
                </div>
            </Col>
            <Col xs={12}>
                <TableContainer>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell> </StyledTableCell>
                                <StyledTableCell align="left"> </StyledTableCell>
                                <StyledTableCell align="left">محصول</StyledTableCell>
                                <StyledTableCell align="left">قیمت</StyledTableCell>
                                <StyledTableCell align="left">تعداد</StyledTableCell>
                                <StyledTableCell align="left">جمع جزء</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">
                                    <IconButton color="error">
                                        <CloseIcon color="error"/>
                                    </IconButton>
                                </StyledTableCell>
                                <StyledTableCell>
                                    <img width={100} src="/img/water.jpg" alt="water"/>
                                </StyledTableCell>
                                <StyledTableCell>سس پاستا</StyledTableCell>
                                <StyledTableCell>۲۲ تومان</StyledTableCell>
                                <StyledTableCell>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginBottom: "10px"
                                    }}>
                                        <Button onClick={decrementCartNumber} color="secondary">-</Button>
                                        <div style={{
                                            border: "rgba(128, 128, 128, 0.4) solid 1px",
                                            padding: "5px 15px",
                                            borderRadius: "10px",
                                            margin: "0 5px"
                                        }}>{cartNumber}</div>
                                        <Button onClick={incrementCartNumber} color="secondary">+</Button>
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell>{cartNumber * 22}</StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Row spacing={2} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Col xs={12} sm={6}>
                        <Button variant="contained" color="secondary" sx={{ width: {xs: '100%', sm: 'fit-content'} }}>ادامه خرید</Button>
                    </Col>
                    <Col xs={12} sm={6} sx={{display: 'flex', alignItems: 'center', justifyContent: {xs: 'center', sm: 'end'} }}>
                        <TextField
                            variant="outlined"
                            label="کد تخفیف"
                        />
                        <Button variant="contained" color="secondary" sx={{ml: "10px"}}>اعمال کد تخفیف</Button>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} md={6}>
                <SideBox title="محصولاتی که ممکنه دوست داشته باشید">
                    <Row spacing={4}>
                        {
                            someProductsList.map((item) => (
                                <Col xs={12} md={6}>
                                    <Product {...item}/>
                                </Col>
                            ))
                        }
                    </Row>
                </SideBox>
            </Col>
            <Col xs={12} md={6}>
                <SideBox title="جمع کل سبد خرید">
                    <TableRow>
                        <StyledTableCell>جمع جزء</StyledTableCell>
                        <StyledTableCell>۲۰۰ هزار تومان</StyledTableCell>
                    </TableRow>
                    <TableRow>
                        <StyledTableCell>مجموع</StyledTableCell>
                        <StyledTableCell>۲۰۰ هزار تومان</StyledTableCell>
                    </TableRow>
                    <Button variant="contained" component={Link} to="/checkout" color= "secondary" sx={{mt: "20px"}}>ادامه جهت تسویه حساب</Button>
                </SideBox>
            </Col>
            <Col xs={12}/>
        </Row>
    );
};

export default CartPage;