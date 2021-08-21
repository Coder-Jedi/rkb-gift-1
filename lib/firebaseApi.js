export async function getPostsFirebase() {
  let res = await fetch(
    "https://rkb-gift-1-default-rtdb.firebaseio.com/blogs.json"
  );
  let data = await res.json();
  //   console.log(data);
  return data;
}

export async function postPostsFirebase(title, content) {
  fetch("https://rkb-gift-1-default-rtdb.firebaseio.com/blogs.json", {
    // Adding method type
    method: "POST",

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
    .then((json) => console.log(json));
}
