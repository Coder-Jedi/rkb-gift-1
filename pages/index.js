import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import SocialContainer from "../components/social-container";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>My website</title>
        <link
          rel="preload"
          href="/fonts/Cormorant/Cormorant-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/PT_Mono/PTMono-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Podkova/Podkova-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <Image
            width={288}
            height={431}
            src="/images/profile_image.jpeg"
            alt=""
          />
        </div>
        <div className={styles.vl}>
          <div className={styles.vlmask}></div>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.title}>
            <div className={styles.the}>
              <span>the</span>
            </div>
            <div className={styles.gooddoctor}>
              <span>Good</span>
              <span>Doctor.</span>
            </div>
          </div>
          <div className={styles.content}>
            <p>
              Neurosurgery is an art and every neurosurgeon is an artist. I am
              an aspiring medical student who one day wants to be that artist! I
              want to make it my destiny to master brain: "the organ of
              destiny".
            </p>
            <p>Check out my blog for my latest posts.</p>
          </div>
        </div>
      </div>
      <div className={styles.homeFooterContainer}>
        <SocialContainer />
      </div>
    </Layout>
  );
}
