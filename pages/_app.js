import '../styles/globals.css'
import React, { useEffect, useState } from 'react'
import { PostsContext } from '../lib/context'
import { getPostsFirebase } from '../lib/firebaseApi'

function MyApp({ Component, pageProps }) {
  const [data, setData] = useState([])
  useEffect(() => {
    getPostsFirebase().then((d) => setData(d))
  }, [])

  // console.log(data)

  return (
    <PostsContext.Provider value={[data, setData]}>
      <Component {...pageProps} />
    </PostsContext.Provider>
  )
}

export default MyApp
