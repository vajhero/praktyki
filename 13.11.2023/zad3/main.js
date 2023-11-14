function sortNumbers(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

function sortStrings(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let temp = arr[i];
    let j = i - 1;

    while (j >= 0 && temp.length < arr[j].length) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }

  return arr;
}

function secondBiggest(arr) {
  const sortedArray = sortNumbers(arr);
  return sortedArray[sortedArray.length - 2];
}

function secondLongest(arr) {
  const sortedArray = sortStrings(arr);
  return sortedArray[sortedArray.length - 2];
}

function check() {
  const input = document.getElementById("arrayElements").value;
  const arr = input.split(",");

  if (arr.length < 2) {
    console.log("Podaj minimum 2 elementy");
    return;
  }

  if (typeof arr[0] === "number") {
    console.log(secondBiggest(arr));
  } else if (typeof arr[0] === "string") {
    console.log(secondLongest(arr));
  } else {
    console.log("Nieprawidłowy typ danych");
  }
}