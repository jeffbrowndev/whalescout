import styles from "../scss/app.scss";
import ellipsis from "text-ellipsis";
import Link from "next/link";
import ReactHtmlParser from "react-html-parser";
const moment = require("moment");
import ScrollAnimation from "react-animate-on-scroll";

const NewsCard = props => {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
      <Link as={`article/${props.slug}`} href={`article?slug=${props.slug}`}>
        <div className={styles.news_card}>
          <div className={styles.news_content_left}>
            <img src={props.image} />
          </div>
          <div className={styles.news_content_right}>
            <p>{moment(props.date).format("LL")}</p>
            <h2>{props.title}</h2>
            <div className={styles.read_more}>
              <p>READ MORE →</p>
            </div>
          </div>
        </div>
      </Link>
    </ScrollAnimation>
  );
};

export default NewsCard;
