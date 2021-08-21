import { htmlToText } from "html-to-text";
import styles from "./blog-card.module.css";

export default function BlogCard(props) {
  const { post } = props;

  const content = htmlToText(post.content, { wordwrap: 130 });

  return (
    <>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.title}>
            <span>{post.title}</span>
          </div>
          <div className={styles.date}>
            <span>{post.date}</span>
          </div>
          <div className={styles.content}>
            <span>{content}</span>
          </div>
        </div>
      </div>
    </>
  );
}
