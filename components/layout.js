import styles from "./layout.module.css";
import Image from "next/image";
import Logo from "../public/images/logo.svg";
import Head from "next/head";
import Link from "next/link";
import { SvgIcon } from "@material-ui/core";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
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
            <Link href="/">
              <div className={styles.logo}>
                <SvgIcon component={Logo} style={{ fontSize: "6rem" }} />
              </div>
            </Link>
            <div className={styles.vl}></div>
            <Link href="/">
              <span>Danielasman</span>
            </Link>
          </div>
          <div className={styles.menuContainer}>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className={styles.contentRow}>{children}</div>
      </div>
    </div>
  );
}
