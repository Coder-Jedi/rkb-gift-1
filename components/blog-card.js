import { htmlToText } from "html-to-text";
import Link from "next/link";
import getDateString from "../lib/date-utils";
import styles from "./blog-card.module.css";

export default function BlogCard(props) {
  const { post } = props;

  //get Date formatted
  const date = getDateString(post.date);

  //convert the htmlContent to plain text to show in BlogCard as summary
  const rawContent = htmlToText(post.content, { wordwrap: 250 });

  const content = rawContent.trim().slice(0, 200);

  return (
    <>
      <Link href={`/blog/post/${post.id}`}>
        <div className={styles.outerContainer}>
          <div className={styles.innerContainer}>
            <div className={styles.title}>
              <span>{post.title}</span>
            </div>
            <div className={styles.date}>
              <span>{date}</span>
            </div>
            <div className={styles.content}>
              <span>{content}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
