import styles from "../styles/about.module.css";
import Layout from "../components/layout";
import { getPostsFirebase, postPostsFirebase } from "../lib/firebaseApi";
import { useEffect, useState } from "react";

export default function About() {
  let [data, setData] = useState({});

  useEffect(() => {
    // Update the document title using the browser API
    getPostsFirebase().then((d) => setData(d));
  }, []);

  // async function onClickGet() {

  // }

  return (
    <Layout>
      <div>This is the About Page!</div>
      {/* <button onClick={postPostsFirebase}>Post</button>
      <button onClick={onClickGet}>Get</button> */}

      {/* {Object.entries(data).map(([key, value]) => {
        console.log("key: ", key, " value: ", value);
      })} */}

      {/* {Object.values(data).map((e) => {
        console.log(e);
        return (
          <div key={e.title}>
            {e.title}
            <br />
            {e.date}
            <br />
            <p dangerouslySetInnerHTML={{ __html: e.content }}></p>
            <br />
            <br />
          </div>
        );
      })} */}
    </Layout>
  );
}
