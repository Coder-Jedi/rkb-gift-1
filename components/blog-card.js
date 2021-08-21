import styles from "./blog-card.module.css";

export default function BlogCard(props) {
  const { post } = props;

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
            <span>{post.content}</span>
          </div>
        </div>
      </div>
    </>
  );
}
