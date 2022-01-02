import Layout from '../components/layout'
import { Avatar } from '@material-ui/core'
import SocialContainer from '../components/social-container'
import getDateString from '../lib/date-utils'
import styles from './blog/post/post.module.css'
import { useContext } from 'react'

import { PostsContext } from '../lib/context'
import { deletePostsFirebase, getPostsFirebase } from '../lib/firebaseApi'

// export default function Admin() {
//   return (
//     <Layout>
//       <button onClick={() => console.log(text)}>Print Text</button>
//     </Layout>
//   );
// }

import React, { useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import 'suneditor/dist/css/suneditor.min.css' // Import Sun Editor's CSS File
import { postPostsFirebase } from '../lib/firebaseApi'
import BlogCard from '../components/blog-card'

const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false,
})

export default function Admin(props) {
  const [posts, setPosts] = useContext(PostsContext)

  const editor = useRef()

  let [isLoggedIn, setIsLoggedIn] = useState(false)

  let [title, setTitle] = useState('')
  let [content, setContent] = useState('')
  let [date, setDate] = useState('')

  function handleLogin() {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    if (username === 'testing123' && password === 'pass321') setIsLoggedIn(true)
    else alert('invalid username or password')
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
    )
  }

  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor) => {
    editor.current = sunEditor
  }

  function onClickPost() {
    const cont = document.getElementsByClassName('sun-editor-editable')[0]
      .innerHTML
    setContent(cont)
    postPostsFirebase(title, content)
    getPostsFirebase().then((d) => setPosts(d))
    alert('The post has been saved!')
  }

  function deletePost(id) {
    deletePostsFirebase(id)
    getPostsFirebase().then((d) => setPosts(d))
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
      <br />
      <br />
      <br />
      <div id="previousPosts">
        <div className={styles.blogContainer}>
          {posts.map((post) => {
            return (
              <div key={post.id}>
                <BlogCard post={post} />{' '}
                <button onClick={() => deletePost(post.id)}>Delete</button>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
