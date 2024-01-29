import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import {Autocomplete, TextField} from "@mui/material";
import RMenuButton from "./RMenuButton";
import ProductsCategorization from "../../productsCategorization/productsCategorization";
import Row from "../../mui/Layout/Row";
import Col from "../../mui/Layout/Col";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import {useCallback} from "react";


const ResponsiveMenu = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = useCallback((event, index) => {
        setSelectedIndex(index);
    }, []);

    const processElements = useCallback((data) => (
        data.map((item, index) => (
            <>
                <RMenuButton
                    fontSize="1.2rem"
                    selected={selectedIndex === item.title}
                    onClick={(event) => {
                        handleListItemClick(event, item.title)
                    }}
                    {...item}
                >
                    {
                        item.children && item.children.length > 0 && (
                            item.type === "button" ?
                                <Row rowSpacing={2} marginTop="-15px" marginBottom width="15rem">
                                    {
                                        item.children.map((discountDataItem) => {
                                            return (
                                                <Col xs={12}>
                                                    <ProductsCategorization
                                                        titleColor="white"
                                                        discount="۲۰٪ تخفیف"
                                                        {...discountDataItem}
                                                    />
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                                :
                                <Row>
                                    <List sx={{width: '80%', padding: "0 0 20px 0"}}>
                                        {
                                            item.children && item.children.length > 0 ?
                                                processElements(item.children) : null
                                        }
                                    </List>
                                </Row>
                        )
                    }
                </RMenuButton>
                {(index + 1) !== data.length && (<Divider color="white"/>)}
            </>
        ))
    ), [selectedIndex, handleListItemClick])

    const menuData = [
        {
            title: "خانه",
            to: "/"
        },
        {
            title: "ورود / ثبت نام",
            to: "/login"
        },
        {
            title: "همه محصولات",
            to: "/products"
        },
        {
            title: "تخفیفات ویژه",
            type: "button",
            children: [
                {
                    imgSrc: "/img/s1.png",
                    title: "ماهی و آبزیان",
                    to: "/fish",
                },
                {
                    imgSrc: "/img/s2.png",
                    title: "میوه و سبزیجات",
                    to: "/fish",
                },
                {
                    imgSrc: "/img/s3.png",
                    title: "نان و غلات",
                    to: "/fish",
                },
                {
                    imgSrc: "/img/s4.png",
                    title: "لبنیات و پروتئین",
                    to: "/fish",
                },
                {
                    imgSrc: "/img/s5.png",
                    title: "شوینده و نظافتی",
                    to: "/fish",
                },
                {
                    imgSrc: "/img/s6.png",
                    title: "گوشت و استیک",
                    to: "/fish",
                },
            ]
        },
        {
            title: "دسترسی سریع",
            type: "list",
            children: [
                {
                    title: "دسته بندی",
                    type: "list",
                    children: [
                        {
                            title: "سوپر مارکت",
                            to: "/fish"
                        },
                        {
                            title: "مرغ و ماهی",
                            to: "/fish"
                        },
                        {
                            title: "سبزیجات",
                            to: "/fish"
                        },
                        {
                            title: "لبنیات",
                            to: "/fish"
                        },
                        {
                            title: "نظافت و شستشو",
                            to: "/fish"
                        },
                        {
                            title: "پرفروش ترین ها",
                            to: "/fish"
                        },
                    ]
                },
                {
                    title: "برچسب ها",
                    type: "list",
                    children: [
                        {
                            title: "سس",
                            to: "/fish"
                        },
                        {
                            title: "سبزیجات",
                            to: "/fish"
                        },
                        {
                            title: "گوشت استیک",
                            to: "/fish"
                        },
                        {
                            title: "برگر",
                            to: "/fish"
                        },
                        {
                            title: "اسپری",
                            to: "/fish"
                        },
                    ]
                },
                {
                    title: "دسترسی سریع",
                    type: "list",
                    children: [
                        {
                            title: "سس",
                            to: "/fish"
                        },
                        {
                            title: "سبزیجات",
                            to: "/fish"
                        },
                        {
                            title: "گوشت استیک",
                            to: "/fish"
                        },
                        {
                            title: "برگر",
                            to: "/fish"
                        },
                        {
                            title: "اسپری",
                            to: "/fish"
                        },
                    ]
                },
            ]
        },
        {
            title: "اخبار",
            to: "/news"
        },
        {
            title: "تماس با ما",
            to: "/contact-us"
        },
        {
            title: "خرید قالب",
            to: "/buy-template"
        },
    ]

    return (
        <Box padding="0 16px">
            <List component="nav" aria-label="main mailbox folders">
                <Autocomplete
                    sx={{marginTop: '15px', color: 'white', marginBottom: '10px'}}
                    id="free-solo-demo"
                    freeSolo
                    options={top100Films.map((option) => option.title)}
                    renderInput={(params) =>
                        <TextField style={{color: 'white'}} color="secondary" {...params} label="جستجو"/>
                    }
                    slotProps={{paper: {style: {color: '#122d40', backgroundColor: '#01e281'}}}}
                />
                {processElements(menuData)}
            </List>
        </Box>
    );
}

export default ResponsiveMenu;

const top100Films = [
    {title: 'The Shawshank Redemption', year: 1994},
    {title: 'The Godfather', year: 1972},
    {title: 'The Godfather: Part II', year: 1974},
    {title: 'The Dark Knight', year: 2008},
    {title: '12 Angry Men', year: 1957},
    {title: "Schindler's List", year: 1993},
    {title: 'Pulp Fiction', year: 1994},
]