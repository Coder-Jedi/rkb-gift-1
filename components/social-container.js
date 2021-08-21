import styles from "./social-container.module.css";
import { SvgIcon } from "@material-ui/core";
import Twitter from "../public/images/twitter.svg";
import Instagram from "../public/images/instagram.svg";
import Facebook from "../public/images/facebook.svg";
import Gmail from "../public/images/gmail.svg";

export default function SocialContainer() {
  return (
    <div className={styles.socialContainer}>
      <SvgIcon component={Twitter} style={{ fontSize: "2.5rem" }} />
      <SvgIcon component={Instagram} style={{ fontSize: "2.5rem" }} />
      <SvgIcon component={Facebook} style={{ fontSize: "2.5rem" }} />
      <SvgIcon component={Gmail} style={{ fontSize: "2.5rem" }} />
    </div>
  );
}
