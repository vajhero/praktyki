function convertToLowerCase(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);

    if (code > 64 && code < 91) {
      result += String.fromCharCode(code + 32)
    } else {
      result += str.charAt(i);
    }
  }

  return result
}

function palindrome(word) {
  let start = 0;
  let end = word.length - 1;
  word = convertToLowerCase(word);

  if (word.length == 1) {
    return true;
  } else {
    while (start < end) {
      if (word.charAt(start) != word.charAt(end)) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  }
}

function check() {
  const word = document.getElementById("word").value;

  if (palindrome(word)) {
    console.log("Podane słowo jest palindromem");
  } else {
    console.log("Podane słowo nie jest palindromem");
  }
}