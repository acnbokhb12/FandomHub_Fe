import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from '@/pages/home/styles.module.scss';
import { WikiPageResponse } from '@/features/wiki/types';
import { BsBook } from "react-icons/bs";
import { useColors } from "@/hooks/useColors";
import { ArticleResponse } from "@/features/article/types";
import { formatDistanceToNow } from 'date-fns';

export const WikiByHubComponent = (props: WikiPageResponse) => {
    const colors = useColors();
    return (
        <Link to={`/wiki/${props.Slug}`} className={clsx(styles.popular__wikis__wrapper__link)}>
            <div className={styles.popular__wiki__container}>
                <div className={styles.popular__wiki__container__image_wrapper}>
                    <img className={styles.popular__wiki__container_img} src={props.Avatar} />
                </div>
                <div style={{ color: colors.grey[100] }} className={styles.popular__wiki__container_title}>
                    {props.Title}
                </div>
                <div style={{ color: colors.grey[100] }} className={styles.sub__title__container}>
                    <BsBook />
                    <div className={styles.sub__title__text}>
                        {props.Community?.Name}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export const PopularArticlesByCategoryComponent = (props: ArticleResponse) => {
    return (
        <div className={clsx(styles.feed__card)}>
            <Link to="/" className={styles.feed__card_item_link}>
                <img className={styles.img__feed_header} src={props.Avatar} />
                <div className={styles.feed__card__inner}>
                    <div className={styles.feed__card__attribution}>
                        {props.ArticleCategory?.Name} <span className={clsx(styles.feed__card__inner, "ml-2")}>
                            <time>
                                {formatDistanceToNow(new Date(props.UpdatedAt), { addSuffix: true })}
                            </time>
                        </span>
                        
                    </div>
                    <div className={styles.feed__card__title_summary}>
                        <div className={styles.feed__card__title}>
                            {props.SubTitle}
                        </div>
                        <div className={styles.feed__card__summary}>
                            {props.Title}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}