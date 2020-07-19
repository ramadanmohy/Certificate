function StringChallenge(str) {
  var cNums = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    plus: "+",
    minus: "-",
  };

  var result = "";
  var x = "";

  // Convert to numbers
  var english = Object.keys(cNums);
  str.split("").map((item) => {
    x += item;
    if (english.indexOf(x) != -1) {
      result += cNums[x];
      x = "";
    }
  });

  //get The Result
  result = eval(result);

  //   Convert to English
  var finalResult = result < 0 ? "negative" : "";
  console.log(result.toString().split(""));
  result
    .toString()
    .split("")
    .map((item) => {
      if (item == "-") return;
      finalResult += Object.keys(cNums).filter(
        (key) => cNums[key] === Number(item) && cNums[key] != undefined
      )[0];
    });

  return finalResult;
}

// keep this function call here
console.log(StringChallenge("oneminusoneone"));
