const genText = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK.");
      } else {
        return response.json();
      }
    })
    .then((myJson) => {
      const id3 = myJson.filter((post) => post.id == 3)[0];
      let h1 = document.createElement("h1");
      h1.textContent = id3["title"];
      document.querySelector("body").appendChild(h1);
      let div = document.createElement("div");
      div.textContent = id3["body"];
      document.querySelector("h1").appendChild(div);
    })
    .catch((error) => console.error("Error: ", error))
}