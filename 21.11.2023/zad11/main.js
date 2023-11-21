const check = (response) => {
  if (response.status === 200) {
    return response.json();
  } else {
    throw Error('Błąd - status się nie zgadza');
  }
};

const print = (json) => {
  for (const post of json) {
    console.log('Title:', post.title);
    console.log('Body:', post.body);
    console.log('');
  }
};

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(check)
  .then(print)
  .catch(err => console.error("Błąd.", err));