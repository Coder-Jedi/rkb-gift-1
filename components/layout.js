import styles from "./layout.module.css";
import Image from "next/image";
import Logo from "../public/images/logo.svg";
import Head from "next/head";
import Link from "next/link";
import { SvgIcon } from "@material-ui/core";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="preload"
          href="/fonts/Cormorant_SC/CormorantSC-SemiBold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/PT_Mono/PTMono-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <div className={styles.headRow}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.vl}></div>
          <span>Danielasman</span>
        </div>
        <div className={styles.menuContainer}>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className={styles.contentRow}>{children}</div>
      <div className={styles.footerRow}></div>
    </div>
  );
}
