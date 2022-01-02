export async function getPostsFirebase() {
  let res = await fetch(
    'https://rkb-gift-1-default-rtdb.firebaseio.com/blogs.json',
  )
  let data = await res.json()
  //   console.log(data);
  let dataArray = Object.entries(data).map(([key, value]) => {
    return { id: key, ...value }
  })

  return dataArray.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

export async function postPostsFirebase(title, content) {
  fetch('https://rkb-gift-1-default-rtdb.firebaseio.com/blogs.json', {
    // Adding method type
    method: 'POST',

    // Adding body or contents to send
    body: JSON.stringify({
      title: title,
      date: new Date().toString(),
      content: content,
    }),

    // Adding headers to the request
    // headers: {
    //   "Content-type": "application/json; charset=UTF-8",
    // },
  })
    // Converting to JSON
    .then((response) => response.json())

  // Displaying results to console
  // .then((json) => console.log(json))
}

export async function deletePostsFirebase(id) {
  const pre_url = 'https://rkb-gift-1-default-rtdb.firebaseio.com/blogs/'
  const suff_url = '.json'

  const final_url = pre_url + id + suff_url

  fetch(final_url, {
    // Adding method type
    method: 'DELETE',

    // Adding body or contents to send
    // body: JSON.stringify({
    //   title: title,
    //   date: new Date().toString(),
    //   content: content,
    // }),

    // Adding headers to the request
    // headers: {
    //   "Content-type": "application/json; charset=UTF-8",
    // },
  })
    // Converting to JSON
    .then((response) => response.json())

  // Displaying results to console
  // .then((json) => console.log(json))
}
