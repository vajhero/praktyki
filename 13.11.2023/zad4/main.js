function sort(arr) {
  arr = arr.split("");
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr.join("");
}

function areAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  str1 = sort(str1);
  str2 = sort(str2);

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] != str2[i]) {
      return false;
    }
  }

  return true;
}

function check() {
  str1 = document.getElementById("input1").value;
  str2 = document.getElementById("input2").value;

  if (areAnagram(str1, str2)) {
    console.log("Podane słowa to anagram");
  } else {
    console.log("Podane słowa to nie anagram");
  }
}