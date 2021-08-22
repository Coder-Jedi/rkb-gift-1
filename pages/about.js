import styles from "../styles/about.module.css";
import Layout from "../components/layout";
import SocialContainer from "../components/social-container";
import Image from "next/image";
import Head from "next/head";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About | Dhanashree</title>
      </Head>
      <div className={styles.mainContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <Image
              width={411}
              height={548}
              src="/images/profile_image.jpg"
              alt=""
            />
          </div>
        </div>
        <div className={styles.aboutContainer}>
          <p style={{ textAlign: "center" }}>
            Hi! This is Dhanashree. I'm a medical student currently in my 2nd
            year. I love to play basketball!
          </p>
        </div>
        <div className={styles.footerContainer}>
          <SocialContainer />
        </div>
      </div>
    </Layout>
  );
}
