import styles from "./layout.module.css";
import Image from "next/image";
import Logo from "../public/images/logo.svg";
import Head from "next/head";
import Link from "next/link";
import { SvgIcon } from "@material-ui/core";
import React from "react";
import { useRouter } from "next/dist/client/router";

export default function Layout({ children }) {
  const router = useRouter();

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
              <span>Dhanashee</span>
            </Link>
          </div>
          <div className={styles.menuContainer}>
            <ul>
              <li className={router.pathname === "/about" ? styles.active : ""}>
                <Link href="/about">About</Link>
              </li>
              <li
                className={
                  router.pathname.startsWith("/blog") ? styles.active : ""
                }
              >
                <Link href="/blog">Blog</Link>
              </li>
              <li
                className={router.pathname === "/contact" ? styles.active : ""}
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.contentRow}>{children}</div>
      </div>
    </div>
  );
}
