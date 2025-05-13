import { Box, colors, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import "bootstrap/dist/css/bootstrap.min.css";
import clsx from "clsx";
import styles from './styles.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { memo, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdArrowRight } from "react-icons/md";
// import AdBanner from "../../Components/Advertisement/AdBanner";


const listInfor = [
    {
        id: 1,
        imgAdver: "https://static.wikia.nocookie.net/72d946e9-fe07-4ef3-8969-e17818c96596/scale-to-width-down/500",
        header: "header",
        title: "title",
        text: "You made an extra 35,000 this year asdfasduf hasdf gjasdgfjh agsdhjf aksddhh",
        cate: {
            id: 1,
            nameCate: "Games"
        }
    },
    {
        id: 2,
        imgAdver: "https://static.wikia.nocookie.net/72d946e9-fe07-4ef3-8969-e17818c96596/scale-to-width-down/500",
        header: "header",
        title: "title",
        text: "You made an extra 35,000 this year asdfasduf hasdf gjasdgfjh agsdhjf aksddhh",
        cate: {
            id: 1,
            nameCate: "Games"
        }
    }, {
        id: 3,
        imgAdver: "https://static.wikia.nocookie.net/72d946e9-fe07-4ef3-8969-e17818c96596/scale-to-width-down/500",
        header: "header",
        title: "title",
        text: "You made an extra 35,000 this year asdfasduf hasdf gjasdgfjh agsdhjf aksddhh fasdf ajsdhfjkads vfvsd gjvfgsdajv gsdavfadsgh",
        cate: {
            id: 1,
            nameCate: "TV"
        }
    }, {
        id: 4,
        imgAdver: "https://static.wikia.nocookie.net/72d946e9-fe07-4ef3-8969-e17818c96596/scale-to-width-down/500",
        header: "header",
        title: "title",
        text: "You made an extra 35,000 this year asdfasduf hasdf gjasdgfjh agsdhjf aksddhh",
        cate: {
            id: 1,
            nameCate: "TV"
        }
    }, {
        id: 5,
        imgAdver: "https://static.wikia.nocookie.net/72d946e9-fe07-4ef3-8969-e17818c96596/scale-to-width-down/500",
        header: "header",
        title: "title",
        text: "The Biggest Game Releases Of April 2025",
        cate: {
            id: 1,
            nameCate: "Books"
        }
    },
    {
        id: 6,
        imgAdver: "https://static.wikia.nocookie.net/72d946e9-fe07-4ef3-8969-e17818c96596/scale-to-width-down/500",
        header: "header",
        title: "title",
        text: "CoD Season 3 Patch Notes: Big Movement Changes, Camo Hub In Black Ops 6/Warzone",
        cate: {
            id: 1,
            nameCate: "Movies"
        }
    },
    {
        id: 7,
        imgAdver: "https://static.wikia.nocookie.net/72d946e9-fe07-4ef3-8969-e17818c96596/scale-to-width-down/500",
        header: "header",
        title: "title",
        text: "Are you a drama bingeaholic? Complete a quiz & enter for a chance to win",
        cate: {
            id: 1,
            nameCate: "Movies"
        }
    },
    {
        id: 8,
        imgAdver: "https://static.wikia.nocookie.net/72d946e9-fe07-4ef3-8969-e17818c96596/scale-to-width-down/500",
        header: "header",
        title: "title",
        text: "Best Assassin's Creed Games: Every Game, Ranked",
        cate: {
            id: 1,
            nameCate: "Movies"
        }
    },
    {
        id: 9,
        imgAdver: "https://static.wikia.nocookie.net/72d946e9-fe07-4ef3-8969-e17818c96596/scale-to-width-down/500",
        header: "header",
        title: "title",
        text: "Mortal Kombat 2 Movie: Release Date And Everything We Know So Far",
        cate: {
            id: 1,
            nameCate: "Movies"
        }
    },
]

const listWikiAd = [
    {
        id: 1,
        title: "Hary Potter",
        nameChar: "Harry Potter Wiki",
        img: "https://static.wikia.nocookie.net/aad30c25-f98b-4aae-b024-901c456af1ec/scale-to-height-down/400",
    },
    {
        id: 2,
        title: "Hary Potter",
        nameChar: "Harry Potter Wiki",
        img: "https://static.wikia.nocookie.net/aad30c25-f98b-4aae-b024-901c456af1ec/scale-to-height-down/400",
    },
    {
        id: 3,
        title: "Hary Potter",
        nameChar: "Harry Potter Wiki",
        img: "https://static.wikia.nocookie.net/aad30c25-f98b-4aae-b024-901c456af1ec/scale-to-height-down/400",
    },
    {
        id: 4,
        title: "Hary Potter",
        nameChar: "Harry Potter Wiki",
        img: "https://static.wikia.nocookie.net/aad30c25-f98b-4aae-b024-901c456af1ec/scale-to-height-down/400",
    },
    {
        id: 5,
        title: "Neo",
        nameChar: "Matrix Wiki",
        img: "https://static.wikia.nocookie.net/49e38102-534d-4e73-9730-83964d09c832/scale-to-height-down/400",
    },
    {
        id: 6,
        title: "Hary Potter",
        nameChar: "Harry Potter Wiki",
        img: "https://static.wikia.nocookie.net/aad30c25-f98b-4aae-b024-901c456af1ec/scale-to-height-down/400",
    }
]

const listWikiGame = [
    {
        id: 1,
        title: "Lara Croft",
        nameChar: "Tomb Raider Wiki",
        img: "https://static.wikia.nocookie.net/f55ef1ba-0a9f-4149-b680-ab6b10e1f107/scale-to-height-down/400",
    },
    {
        id: 2,
        title: "Lara Croft",
        nameChar: "Tomb Raider Wiki",
        img: "https://static.wikia.nocookie.net/f55ef1ba-0a9f-4149-b680-ab6b10e1f107/scale-to-height-down/400",
    },
    {
        id: 3,
        title: "Lara Croft",
        nameChar: "Tomb Raider Wiki",
        img: "https://static.wikia.nocookie.net/f55ef1ba-0a9f-4149-b680-ab6b10e1f107/scale-to-height-down/400",
    },
    {
        id: 4,
        title: "Lara Croft",
        nameChar: "Tomb Raider Wiki",
        img: "https://static.wikia.nocookie.net/f55ef1ba-0a9f-4149-b680-ab6b10e1f107/scale-to-height-down/400",
    },
    {
        id: 5,
        title: "Lara Croft",
        nameChar: "Tomb Raider Wiki",
        img: "https://static.wikia.nocookie.net/f55ef1ba-0a9f-4149-b680-ab6b10e1f107/scale-to-height-down/400",
    },
    {
        id: 6,
        title: "Lara Croft",
        nameChar: "Tomb Raider Wiki",
        img: "https://static.wikia.nocookie.net/f55ef1ba-0a9f-4149-b680-ab6b10e1f107/scale-to-height-down/400",
    },
    {
        id: 7,
        title: "Lara Croft",
        nameChar: "Tomb Raider Wiki",
        img: "https://static.wikia.nocookie.net/f55ef1ba-0a9f-4149-b680-ab6b10e1f107/scale-to-height-down/400",
    },
    {
        id: 8,
        title: "Lara Croft",
        nameChar: "Tomb Raider Wiki",
        img: "https://static.wikia.nocookie.net/f55ef1ba-0a9f-4149-b680-ab6b10e1f107/scale-to-height-down/400",
    },
]

const listWikiTV = [
    {
        id: 1,
        title: "Grogu",
        nameChar: "Star Wars Wiki",
        img: "https://static.wikia.nocookie.net/d29ff5b7-25c3-467a-aad7-3980dc9f5f32/scale-to-height-down/400",
    },
    {
        id: 2,
        title: "Grogu",
        nameChar: "Star Wars Wiki",
        img: "https://static.wikia.nocookie.net/d29ff5b7-25c3-467a-aad7-3980dc9f5f32/scale-to-height-down/400",
    },
    {
        id: 3,
        title: "Grogu",
        nameChar: "Star Wars Wiki",
        img: "https://static.wikia.nocookie.net/d29ff5b7-25c3-467a-aad7-3980dc9f5f32/scale-to-height-down/400",
    },
    {
        id: 4,
        title: "Grogu",
        nameChar: "Star Wars Wiki",
        img: "https://static.wikia.nocookie.net/d29ff5b7-25c3-467a-aad7-3980dc9f5f32/scale-to-height-down/400",
    },
    {
        id: 5,
        title: "Grogu",
        nameChar: "Star Wars Wiki",
        img: "https://static.wikia.nocookie.net/d29ff5b7-25c3-467a-aad7-3980dc9f5f32/scale-to-height-down/400",
    },
    {
        id: 6,
        title: "Grogu",
        nameChar: "Star Wars Wiki",
        img: "https://static.wikia.nocookie.net/d29ff5b7-25c3-467a-aad7-3980dc9f5f32/scale-to-height-down/400",
    },
    {
        id: 7,
        title: "Grogu",
        nameChar: "Star Wars Wiki",
        img: "https://static.wikia.nocookie.net/d29ff5b7-25c3-467a-aad7-3980dc9f5f32/scale-to-height-down/400",
    },
    {
        id: 8,
        title: "Grogu",
        nameChar: "Star Wars Wiki",
        img: "https://static.wikia.nocookie.net/d29ff5b7-25c3-467a-aad7-3980dc9f5f32/scale-to-height-down/400",
    },
]

const topNewsStories = [
    {
        id: 1,
        cate: {
            id: 1,
            cateName: "GameSpot"
        },
        hour: "2.5h",
        imgNews: "https://static.wikia.nocookie.net/d29ad170-78df-4829-acee-3c2c4710dbea/scale-to-width-down/800",
        titleNews: `New Resident Evil Movie Will Be "Unlike Any Of The Previous Films" Director Says`,
        subTitleNews: `The new movie will be "built in the spirit" of the video game series.`
    },
    {
        id: 2,
        cate: {
            id: 1,
            cateName: "GameSpot"
        },
        hour: "2.5h",
        imgNews: "https://static.wikia.nocookie.net/d29ad170-78df-4829-acee-3c2c4710dbea/scale-to-width-down/800",
        titleNews: `New Resident Evil Movie Will Be "Unlike Any Of The Previous Films" Director Says`,
        subTitleNews: `The new movie will be "built in the spirit" of the video game series.`

    },
    {
        id: 3,
        cate: {
            id: 1,
            cateName: "GameSpot"
        },
        hour: "2.5h",
        imgNews: "https://static.wikia.nocookie.net/d29ad170-78df-4829-acee-3c2c4710dbea/scale-to-width-down/800",
        titleNews: `New Resident Evil Movie Will Be "Unlike Any Of The Previous Films" Director Says`,
        subTitleNews: `The new movie will be "built in the spirit" of the video game series.`

    },
    {
        id: 4,
        cate: {
            id: 1,
            cateName: "GameSpot"
        },
        hour: "2.5h",
        imgNews: "https://static.wikia.nocookie.net/d29ad170-78df-4829-acee-3c2c4710dbea/scale-to-width-down/800",
        titleNews: `New Resident Evil Movie Will Be "Unlike Any Of The Previous Films" Director Says`,
        subTitleNews: `The new movie will be "built in the spirit" of the video game series.`

    }
]

const topNewsStories2 = [
    {
        id: 1,
        cate: {
            id: 1,
            cateName: "GameSpot"
        },
        hour: "2.5",
        imgNews: "https://static.wikia.nocookie.net/6a6094c3-0f92-450c-ae7a-5ae0bb814aaa/scale-to-width-down/800",
        titleNews: `New Resident Evil Movie Will Be "Unlike Any Of The Previous Films" Director Says`,
        subTitleNews: `The new movie will be "built in the spirit" of the video game series.`
    },
    {
        id: 2,
        cate: {
            id: 1,
            cateName: "GameSpot"
        },
        hour: "2.5",
        imgNews: "https://static.wikia.nocookie.net/6a6094c3-0f92-450c-ae7a-5ae0bb814aaa/scale-to-width-down/800",
        titleNews: `New Resident Evil Movie Will Be "Unlike Any Of The Previous Films" Director Says`,
        subTitleNews: `The new movie will be "built in the spirit" of the video game series.`

    },
    {
        id: 3,
        cate: {
            id: 1,
            cateName: "GameSpot"
        },
        hour: "2.5",
        imgNews: "https://static.wikia.nocookie.net/6a6094c3-0f92-450c-ae7a-5ae0bb814aaa/scale-to-width-down/800",
        titleNews: `New Resident Evil Movie Will Be "Unlike Any Of The Previous Films" Director Says`,
        subTitleNews: `The new movie will be "built in the spirit" of the video game series.`

    },
    {
        id: 4,
        cate: {
            id: 1,
            cateName: "GameSpot"
        },
        hour: "2.5",
        imgNews: "https://static.wikia.nocookie.net/6a6094c3-0f92-450c-ae7a-5ae0bb814aaa/scale-to-width-down/800",
        titleNews: `New Resident Evil Movie Will Be "Unlike Any Of The Previous Films" Director Says`,
        subTitleNews: `The new movie will be "built in the spirit" of the video game series.`

    },
    {
        id: 5,
        cate: {
            id: 1,
            cateName: "GameSpot"
        },
        hour: "2.5",
        imgNews: "https://static.wikia.nocookie.net/6a6094c3-0f92-450c-ae7a-5ae0bb814aaa/scale-to-width-down/800",
        titleNews: `New Resident Evil Movie Will Be "Unlike Any Of The Previous Films" Director Says`,
        subTitleNews: `The new movie will be "built in the spirit" of the video game series.`

    },
    {
        id: 6,
        cate: {
            id: 1,
            cateName: "GameSpot"
        },
        hour: "2.5",
        imgNews: "https://static.wikia.nocookie.net/6a6094c3-0f92-450c-ae7a-5ae0bb814aaa/scale-to-width-down/800",
        titleNews: `New Resident Evil Movie Will Be "Unlike Any Of The Previous Films" Director Says`,
        subTitleNews: `The new movie will be "built in the spirit" of the video game series.`

    }
]


const topNewsStories3 = [
    {
        id: 1,
        cate: {
            id: 1,
            cateName: "GameSpot"
        },
        hour: "3d",
        imgNews: "https://static.wikia.nocookie.net/db76595c-5d69-4fa7-af1f-0fc83cacb9d9/scale-to-width-down/800",
        titleNews: `Netflix's Devil May Cry Review - A Devilishly Good Adaptation`,
        subTitleNews: `Devil May Cry makes a hell of a first impression with its debut season on Netflix.`
    },
    {
        id: 2,
        cate: {
            id: 1,
            cateName: "GameSpot"
        },
        hour: "3d",
        imgNews: "https://static.wikia.nocookie.net/db76595c-5d69-4fa7-af1f-0fc83cacb9d9/scale-to-width-down/800",
        titleNews: `Netflix's Devil May Cry Review - A Devilishly Good Adaptation`,
        subTitleNews: `Devil May Cry makes a hell of a first impression with its debut season on Netflix.`

    },
    {
        id: 3,
        cate: {
            id: 1,
            cateName: "GameSpot"
        },
        hour: "3d",
        imgNews: "https://static.wikia.nocookie.net/db76595c-5d69-4fa7-af1f-0fc83cacb9d9/scale-to-width-down/800",
        titleNews: `Netflix's Devil May Cry Review - A Devilishly Good Adaptation`,
        subTitleNews: `Devil May Cry makes a hell of a first impression with its debut season on Netflix.`

    },
    {
        id: 4,
        cate: {
            id: 1,
            cateName: "GameSpot"
        },
        hour: "3d",
        imgNews: "https://static.wikia.nocookie.net/db76595c-5d69-4fa7-af1f-0fc83cacb9d9/scale-to-width-down/800",
        titleNews: `Netflix's Devil May Cry Review - A Devilishly Good Adaptation`,
        subTitleNews: `Devil May Cry makes a hell of a first impression with its debut season on Netflix.`

    },
    {
        id: 5,
        cate: {
            id: 1,
            cateName: "GameSpot"
        },
        hour: "3d",
        imgNews: "https://static.wikia.nocookie.net/db76595c-5d69-4fa7-af1f-0fc83cacb9d9/scale-to-width-down/800",
        titleNews: `Netflix's Devil May Cry Review - A Devilishly Good Adaptation`,
        subTitleNews: `Devil May Cry makes a hell of a first impression with its debut season on Netflix.`

    },
    {
        id: 6,
        cate: {
            id: 1,
            cateName: "GameSpot"
        },
        hour: "3d",
        imgNews: "https://static.wikia.nocookie.net/db76595c-5d69-4fa7-af1f-0fc83cacb9d9/scale-to-width-down/800",
        titleNews: `Netflix's Devil May Cry Review - A Devilishly Good Adaptation`,
        subTitleNews: `Devil May Cry makes a hell of a first impression with its debut season on Netflix.`

    }
]

const listWikisHomeFandomAd = [
    {
        id: 1,
        cate: {
            id: 1,
            cateName: "movies"
        },
        listItemWikis: listWikiAd,
        listTopNews: topNewsStories,
        advertisement: true,
        adDataList: [
            {
                imageUrl: "https://cdn.flashtalking.com/190737/4600434/FY24Q1_CC_Individual_CCIAllApps_vn_en_UnWrp-Creator_AN_300x250.gif?386044654",
                link: "https://www.adobe.com/vn_en/creativecloud.html?sdid=GVTYXXRY&mv=display&mv2=display",
            },
            {
                imageUrl: "https://cdn.flashtalking.com/190737/4600434/FY24Q1_CC_Individual_CCIAllApps_vn_en_UnWrp-Creator_AN_300x250.gif?386044654",
                link: "https://www.adobe.com/vn_en/creativecloud.html?sdid=GVTYXXRY&mv=display&mv2=display",
            }
        ]
    },
    {
        id: 2,
        cate: {
            id: 1,
            cateName: "games"
        },
        listItemWikis: listWikiGame,
        listTopNews: topNewsStories2,
        advertisement: false,
        adDataList: [

        ]
    },
    {
        id: 3,
        cate: {
            id: 1,
            cateName: "tv"
        },
        listItemWikis: listWikiTV,
        listTopNews: topNewsStories3,
        advertisement: false,
        adDataList: [
        ]
    }
]

const CardComponent = (props: any) => {
    const { titleIn, headerIn, textIn, id, img, cate } = props;
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Card className={styles.contain__main__card} style={{ marginBottom: "1.5rem" }}>
            <Card.Header style={{ padding: 0 }}>
                <div>
                    <div className={styles.contain__header__card}>
                        <img className={styles.contain__header__card_img} src={img} />
                        <div className={styles.contain__header__card_cate}>
                            <span className={styles.contain__header__card_cate_detail}>
                                {cate.nameCate}
                            </span>
                        </div>
                    </div>
                </div>
            </Card.Header>
            <Card.Body style={{ padding: 0 }}>
                <div className={styles.a__list__card__text}>
                    <h3 className={styles.a__list__card__text_detail}>{textIn}</h3>
                </div>
            </Card.Body>
        </Card>
    )
}


const ItemWikiComponent = (props: any) => {
    const { idItem, titleItem, nameCharItem, imgItem, adBanners } = props;
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const outputName = titleItem.replace(/\s+/g, '_');
    console.log("render ItemWikiComponent")
    return (
        <>
            <Link to={`/wiki/${outputName}`} className={clsx(styles.popular__wikis__wrapper__link, adBanners ? styles.with__ad : "")}>
                <div className={styles.popular__wiki__container}>
                    <div className={styles.popular__wiki__container__image_wrapper}>
                        <img className={styles.popular__wiki__container_img} src={imgItem} />
                    </div>
                    <div style={{ color: colors.grey[100] }} className={styles.popular__wiki__container_title}>
                        {titleItem}
                    </div>
                    <div style={{ color: colors.grey[100] }} className={styles.sub__title__container}>
                        <BsBook />
                        <div className={styles.sub__title__text}>
                            {nameCharItem}
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

const ItemTopNewsStories = (propsss: any) => {
    const { props, adBanners } = propsss;
    return (
        <div className={clsx(styles.feed__card, adBanners ? styles.with__ad : "")}>
            <Link to="/" className={styles.feed__card_item_link}>
                <img className={styles.img__feed_header} src={props.imgNews} />
                <div className={styles.feed__card__inner}>
                    <div className={styles.feed__card__attribution}>
                        {props.cate.cateName}
                        <span className={styles.feed__card__time}>
                            <time> {props.hour}</time>
                        </span>
                    </div>
                    <div className={styles.feed__card__title_summary}>
                        <div className={styles.feed__card__title}>
                            {props.subTitleNews}
                        </div>
                        <div className={styles.feed__card__summary}>
                            {props.titleNews}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

const ItemsWikisComponent = (propsss: any) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    console.log("render ItemsWikisComponent to")
    const { props } = propsss;
    return (
        <div className={styles.feed__section}>
            <div className={styles.feed__section__content_well}>
                <div className={styles.feed__section__heading}>
                    <h2 className={styles.feed__section__heading_title}>
                        {props.cate.cateName}
                    </h2>
                    <Link to="/" className={styles.feed__section__heading_link}
                        style={{ color: colors.grey[100] }}
                    >TOUT AFFICHER
                        <MdArrowRight className={styles.feed__section__heading_icon} />
                    </Link>
                </div>
                <div className={styles.feed__section__content}>
                    <Row>
                        <Col md={props.advertisement ? 8 : 12}>
                            <div className={styles.feed__section__content_detail}>
                                <div className={styles.feed__popular__wikis}>
                                    <div style={{
                                        color: colors.grey[100]
                                    }} className={styles.popular__wikis__title}>
                                        Pages wiki populaires dans {props.cate.cateName}
                                    </div>
                                    <div className={styles.popular__wikis__wrapper}>
                                        {
                                            props.listItemWikis.map((eItem: any) => (

                                                <ItemWikiComponent
                                                    idItem={eItem.id}
                                                    titleItem={eItem.title}
                                                    nameCharItem={eItem.nameChar}
                                                    imgItem={eItem.img}
                                                    adBanners={props.advertisement}
                                                />

                                            ))
                                        }
                                    </div>
                                    <div style={{
                                        color: colors.grey[100]
                                    }} className={clsx(styles.popular__wikis__title, styles.feed__section__news__stories_topic)}>
                                        Top News Stories in movies
                                    </div>
                                    <div className={styles.feed__section__cards} >
                                        {/* feedCard */}
                                        {
                                            props.listTopNews.map((item: any) => (
                                                <ItemTopNewsStories
                                                    props={item}
                                                    adBanners={props.advertisement}
                                                />
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col style={
                            props.advertisement ? { display: "block" } : { display: "none" }
                        } md={props.advertisement ? 4 : 0}>
                            <div className={styles.feed__section__ad}>
                                {/* <AdBanner /> */}
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}
function HomePage() {
    console.log("render homepage")
    useEffect(() => {
        document.title = "Fandom";
    }, []);
    return (
        <>
            <div className={styles.nav__bg_hack}>
                <div className={styles.feed__header}>
                    <img className={styles.img__feed_header_logo} src="https://static.wikia.nocookie.net/6a181c72-e8bf-419b-b4db-18fd56a0eb60" />
                    <div className={styles.form__container}>
                        <form action="" className={styles.search__box}>
                            <div className={styles.search__box__container}>
                                <label className={styles.search__box__search_label}>
                                    <input placeholder="Search" type="text" className={styles.search__box__input_search_box} />
                                    <button className={styles.search__box__search_submit}>
                                        <FaSearch style={{ fontSize: "2rem" }} />
                                    </button>
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className={styles.sliderContainer}>
                        <Swiper
                            className={styles.swiper}
                            spaceBetween={20}
                            loop={true}
                            centeredSlides={true}
                            autoplay={{
                                delay: 5500,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                nextEl: `.${styles.nextButton}`,
                                prevEl: `.${styles.prevButton}`,
                            }}
                            modules={[Navigation, Autoplay]}
                            breakpoints={{
                                0: { slidesPerView: 3 },
                                450: { slidesPerView: 4 },
                                768: { slidesPerView: 6 },
                                1024: { slidesPerView: 7 },
                            }}
                        >
                            {listInfor.map((item, index) => (
                                <SwiperSlide className={styles.swiper__slide_item} key={index}>
                                    <CardComponent
                                        titleIn={item.title}
                                        headerIn={item.header}
                                        textIn={item.text}
                                        img={item.imgAdver}
                                        cate={item.cate}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {/* Nút điều hướng bằng React Icons */}
                        <button className={styles.prevButton}>
                            <AiOutlineLeft size={30} />
                        </button>
                        <button className={styles.nextButton}>
                            <AiOutlineRight size={30} />
                        </button>
                    </div>
                </div>
            </div>
            {/* Top wikis */}
            <div className={styles.top__wikis__block}>
                <div className={styles.top__wikis__block__bounding_container}>
                    <div className={clsx(styles.top__wikis__block__item_container, styles.is__first)}>
                        <div className={styles.top__wikis__block__title_block}>
                            <BsBook className={styles.top__wikis__block__icon} />
                            <div className={styles.top__wikis__block__title}>
                                top wikis
                            </div>
                        </div>
                    </div>
                    <div className={styles.top__wikis__block__item_container}>
                        <div className={styles.top__wikis__block__wiki_category_title}>
                            Games
                        </div>
                        <Link to="/" className={styles.top__wikis__block__wiki_category_item} >
                            Terraria
                        </Link>
                        <Link to="/" className={styles.top__wikis__block__wiki_category_item} >
                            Minecraft
                        </Link>
                        <Link to="/" className={styles.top__wikis__block__wiki_category_item} >
                            Genshin Impact
                        </Link>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.top__wikis__block__item_container}>
                        <div className={styles.top__wikis__block__wiki_category_title}>
                            Games
                        </div>
                        <Link to="/" className={styles.top__wikis__block__wiki_category_item} >
                            Star Wars
                        </Link>
                        <Link to="/" className={styles.top__wikis__block__wiki_category_item} >
                            Harry Potter
                        </Link>
                        <Link to="/" className={styles.top__wikis__block__wiki_category_item} >
                            Marvel
                        </Link>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.top__wikis__block__item_container}>
                        <div className={styles.top__wikis__block__wiki_category_title}>
                            Games
                        </div>
                        <Link to="/" className={styles.top__wikis__block__wiki_category_item} >
                            Terraria
                        </Link>
                        <Link to="/" className={styles.top__wikis__block__wiki_category_item} >
                            Terraria
                        </Link>
                        <Link to="/" className={styles.top__wikis__block__wiki_category_item} >
                            Terraria
                        </Link>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.top__wikis__block__item_container}>
                        <div className={styles.top__wikis__block__wiki_category_title}>
                            Games
                        </div>
                        <Link to="/" className={styles.top__wikis__block__wiki_category_item} >
                            One Piece
                        </Link>
                        <Link to="/" className={styles.top__wikis__block__wiki_category_item} >
                            Naruto
                        </Link>
                        <Link to="/" className={styles.top__wikis__block__wiki_category_item} >
                            My Hero Academia
                        </Link>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={clsx(styles.top__wikis__block__item_container, styles.explore__more__wikis_container, styles.is__last)}>
                        <Link to="/" className={styles.top__wikis__block__explore_text}>
                            Et plus de <b>250 000</b> autres à explorer
                        </Link>
                        <Link to="/" className={styles.top__wikis__block__explore_arrow}>
                            <FaArrowRight className={styles.wds__icon} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.feed__layout__wrapper}>
                {
                    listWikisHomeFandomAd.map((item) => (
                        <ItemsWikisComponent
                            key={item.id}
                            props={item}
                        />
                    ))
                }
            </div>
            <div className={styles.search__box__bottom__wrapper}>
                <div className={styles.form__container}>
                    <form action="" className={styles.search__box}>
                        <div className={styles.search__box__container}>
                            <label className={styles.search__box__search_label}>
                                <input placeholder="Search" type="text" className={styles.search__box__input_search_box} />
                                <button className={styles.search__box__search_submit}>
                                    <FaSearch style={{ fontSize: "2rem" }} />
                                </button>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
            <div className={styles.newsletter}>
                <div className={styles.newsletter__info}>
                    <h3 className={styles.newsletter__heading}>
                        Les dernières tendances, directement dans votre boîte de réception.
                    </h3>
                    <div className={styles.newsletter__small__heading}>
                        Quelles sont les nouvelles ? - Inscription à la newsletter de Fandom
                    </div>
                    <form action="" className={styles.newsletter__form}>
                        <input type="email" placeholder="Adresse e-mail" className={styles.newsletter__email} />
                        <br />
                        <input type="submit" className={styles.newsletter__submit} value="Créer un compte" />
                    </form>
                </div>
                <div className={styles.newsletter__graphic}>
                    <img className={styles.newsletter__graphic_img}
                        src="https://static.wikia.nocookie.net/f986bbe3-d988-415a-be90-95912d7a7bdc" alt="" />
                </div>
            </div>
        </>
    )
}
export default memo(HomePage);