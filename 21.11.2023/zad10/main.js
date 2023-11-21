const multiplyAsync = (x, y) => {
  return myPromise = new Promise((resolve, reject) => {
    if (typeof x === 'number' && typeof y === 'number') {
      resolve(x * y);
    } else {
      reject("Argument musi być liczbą.");
    }
  });
}

multiplyAsync(3, 5)
  .then((res) => {
    console.log("Wynik: " + res);
  })
  .catch(console.error);

multiplyAsync("3", "5")
  .then((res) => {
    console.log("Wynik: " + res);
  })
  .catch(console.error);