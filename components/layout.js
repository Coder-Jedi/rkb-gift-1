import styles from "./layout.module.css";
import Logo from "../public/images/logo.svg";
import Head from "next/head";
import Link from "next/link";
import { SvgIcon } from "@material-ui/core";
import React, { useState } from "react";
import { useRouter } from "next/dist/client/router";
import { ArrowBack, Menu } from "@material-ui/icons";

export default function Layout({ children }) {
  const router = useRouter();

  const [showMenu, setShowMenu] = useState(false);

  function onClickToggle() {
    setShowMenu((old) => !old);
  }

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
            <Link href="/" passHref={true}>
              <SvgIcon component={Logo} className={styles.logo} />
            </Link>
            <div className={styles.vl}></div>
            <Link href="/" passHref={true}>
              <span>Dhanashree</span>
            </Link>
          </div>

          <div
            className={`${styles.outerMenuContainer} ${
              showMenu ? styles.activeMenu : styles.inactiveMenu
            }`}
          >
            <div className={styles.mask} onClick={onClickToggle}></div>
            <div className={styles.menuContainer}>
              <div className={styles.menuBack}>
                <ArrowBack onClick={onClickToggle} />
              </div>
              <ul>
                <li
                  className={router.pathname === "/about" ? styles.active : ""}
                >
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
                  className={
                    router.pathname === "/contact" ? styles.active : ""
                  }
                >
                  Contact
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.toggleButton}>
            <Menu style={{ fontSize: "inherit" }} onClick={onClickToggle} />
          </div>
        </div>
        <div className={styles.contentRow}>{children}</div>
      </div>
    </div>
  );
}
