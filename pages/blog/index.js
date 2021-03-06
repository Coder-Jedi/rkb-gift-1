import Layout from "../../components/layout";
import Head from "next/dist/shared/lib/head";
import styles from "./blog.module.css";
import SocialContainer from "../../components/social-container";
import { Avatar } from "@material-ui/core";
import BlogCard from "../../components/blog-card";
import { useContext } from "react";

import { PostsContext } from "../../lib/context";

export default function Blog() {
  const [posts, setPosts] = useContext(PostsContext);

  return (
    <Layout>
      <Head>
        <title>Blog | Dhanashree</title>
        <link
          rel="preload"
          href="/fonts/PT_Mono/PTMono-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <div className={styles.mainContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <Avatar
              src="/images/profile_image.jpg"
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>
        <div className={styles.blogContainer}>
          {posts.map((post) => (
            <BlogCard post={post} key={post.id} />
          ))}
        </div>
        <div className={styles.footerContainer}>
          <SocialContainer />
        </div>
      </div>
    </Layout>
  );
}
