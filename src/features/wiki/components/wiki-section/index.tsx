import { useColors } from "@/hooks/useColors";
import { ItemsWikisProps } from "../../types";
import styles from '@/pages/home/styles.module.scss';
import { Link } from "react-router-dom";
import { MdArrowRight } from "react-icons/md";
import { Col, Row } from "react-bootstrap";
import clsx from "clsx";
import { WikiByHubComponent, PopularArticlesByCategoryComponent } from '@/features/wiki/components/home-sections/index';
import { mockWikiPages, mockArticlesFandom } from '@/features/wiki/fake-datas/index';
import { WikiPageResponse } from '@/features/wiki/types';

const HomeWikiSectionComponent = ({ hubID, articleCategoryID }: ItemsWikisProps) => {
     
    const colors = useColors();
    return (
        <>
            <div className={styles.feed__section}>
                <div className={styles.feed__section__content_well}>
                    <div className={styles.feed__section__heading}>
                        <h2 className={styles.feed__section__heading_title}>
                            GAMES
                        </h2>
                        <Link to="/" className={styles.feed__section__heading_link}
                            style={{ color: colors.grey[100] }}
                        >TOUT AFFICHER
                            <MdArrowRight className={styles.feed__section__heading_icon} />
                        </Link>
                    </div>
                    <div className={styles.feed__section__content}>
                        <Row style={{ margin: 0 }}>
                            <Col md={12}>
                                <div className={styles.feed__section__content_detail}>
                                    <div className={styles.feed__popular__wikis}>
                                        <div style={{
                                            color: colors.grey[100]
                                        }} className={styles.popular__wikis__title}>
                                            Pages wiki populaires dans Games
                                        </div>
                                        <div className={styles.popular__wikis__wrapper}>
                                            {
                                                mockWikiPages.map((item: WikiPageResponse) => (
                                                    <WikiByHubComponent
                                                        key={item.WikiPageId}
                                                        {...item} />
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
                                                mockArticlesFandom.map((item: any) => (
                                                    <PopularArticlesByCategoryComponent
                                                        key={item.ArticleId}
                                                        {...item}
                                                    />
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={0}>
                                <div className={styles.feed__section__ad}>
                                    {/* <AdBanner /> */}
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeWikiSectionComponent;