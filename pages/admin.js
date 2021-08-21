import Layout from "../components/layout";

// export default function Admin() {
//   return (
//     <Layout>
//       <button onClick={() => console.log(text)}>Print Text</button>
//     </Layout>
//   );
// }

import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import { postPostsFirebase } from "../lib/firebaseApi";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

export default function Admin(props) {
  const editor = useRef();

  let [isLoggedIn, setIsLoggedIn] = useState(false);

  let [title, setTitle] = useState("");

  function handleLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "testing123" && password === "pass321")
      setIsLoggedIn(true);
    else alert("invalid username or password");
  }

  if (!isLoggedIn) {
    return (
      <div>
        <label htmlFor="username">Username: </label>
        <input id="username" type="text" />
        <label htmlFor="password">Password: </label>
        <input id="password" type="password" />
        <button onClick={handleLogin} type="submit">
          Login
        </button>
      </div>
    );
  }

  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor) => {
    editor.current = sunEditor;
  };

  function onClickPost() {
    const content = document.getElementsByClassName("sun-editor-editable")[0]
      .innerHTML;
    postPostsFirebase(title, content);
    alert("The post has been saved!");
  }

  return (
    <Layout>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          id="title"
        />
        <p> My Other Contents </p>
        <SunEditor getSunEditorInstance={getSunEditorInstance} />
        <button onClick={onClickPost}>Save Post</button>
      </div>
    </Layout>
  );
}
