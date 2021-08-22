import { Avatar } from "@material-ui/core";
import { useRouter } from "next/router";
import Layout from "../../../components/layout";
import SocialContainer from "../../../components/social-container";
import styles from "./post.module.css";
import Head from "next/head";
import { PostsContext } from "../../../lib/context";
import { useContext } from "react";
import getDateString from "../../../lib/date-utils";
import { ArrowBack } from "@material-ui/icons";
import Link from "next/link";

export default function Post() {
  const router = useRouter();
  const { pid } = router.query;

  const [posts, setPosts] = useContext(PostsContext);

  const post = posts.find((obj) => {
    return obj.id === pid;
  });

  if (!post) {
    return (
      <Layout>
        <Head>
          <title>Blog | Dhanashree</title>
        </Head>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <p>The post does not exists.</p>
        </div>
      </Layout>
    );
  }

  //get Date formatted
  const date = getDateString(post.date);

  return (
    <Layout>
      <Head>
        <title>Blog - {post.title}</title>
      </Head>
      <div className={styles.mainContainer}>
        <Link href="/blog" passHref={true}>
          <ArrowBack
            className={styles.backArrow}
            style={{ fontSize: "1.7rem" }}
          />
        </Link>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <Avatar
              src="/images/profile_image.jpg"
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>
        <div className={styles.outerBlogContainer}>
          <div className={styles.innerBlogContainer}>
            <div className={styles.title}>
              <span>{post.title}</span>
            </div>
            <div className={styles.date}>
              <span>{date}</span>
            </div>
            <div className={styles.content}>
              <span dangerouslySetInnerHTML={{ __html: post.content }}></span>
            </div>
          </div>
        </div>
        <div className={styles.footerContainer}>
          <SocialContainer />
        </div>
      </div>
    </Layout>
  );
}
