import styles from "../styles/about.module.css";
import Layout from "../components/layout";
import SocialContainer from "../components/social-container";
import Image from "next/image";

export default function About() {
  return (
    <Layout>
      <div className={styles.mainContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <Image
              width={288}
              height={431}
              src="/images/profile_image.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className={styles.aboutContainer}>
          <p style={{ textAlign: "center" }}>
            Hi! This is Dhanashree. I'm a medical student currently in my 3rd
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
