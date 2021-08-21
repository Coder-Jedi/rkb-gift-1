import Layout from "../../components/layout";
import Head from "next/dist/shared/lib/head";
import { getSortedPostsData } from "../../lib/posts";
import styles from "./blog.module.css";
import SocialContainer from "../../components/social-container";
import { Avatar } from "@material-ui/core";
import BlogCard from "../../components/blog-card";

export default function Blog({ allPostsData }) {
  // const posts = [
  //   {
  //     id: "pre-rendering",
  //     title: "Two Forms of Pre-rendering",
  //     date: "01-Jan-2020",
  //     content:
  //       "Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** ...",
  //   },
  //   {
  //     id: "ssg-ssr",
  //     title: "When to Use Static Generation v.s. Server-side Rendering",
  //     date: "10-Dec-2019",
  //     content:
  //       "We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and .....",
  //   },
  // ];
  const posts = allPostsData.map((post) => {
    return {
      ...post,
      content:
        "Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** ...",
    };
  });

  return (
    <Layout>
      <Head>
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
              src="/images/profile_image.jpeg"
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>
        <div className={styles.blogContainer}>
          {posts.map((post) => {
            return <BlogCard post={post} key={post.id} />;
          })}
        </div>
        <div className={styles.footerConatiner}>
          <SocialContainer />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  console.log(allPostsData);

  return {
    props: { allPostsData },
  };
}
