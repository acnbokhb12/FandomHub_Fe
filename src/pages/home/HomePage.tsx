import { useTheme } from "@mui/material";
import { tokens } from '@/theme';
import "bootstrap/dist/css/bootstrap.min.css";
import clsx from "clsx";
import styles from './styles.module.scss';
import Card from 'react-bootstrap/Card';
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { memo, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { Link } from "react-router-dom";
import HomeWikiSectionComponent from "@/features/wiki/components/wiki-section"; 


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
 
const HomePage = () => {
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
                <HomeWikiSectionComponent hubID={1} articleCategoryID={1} />
                <HomeWikiSectionComponent hubID={1} articleCategoryID={1} /> 
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