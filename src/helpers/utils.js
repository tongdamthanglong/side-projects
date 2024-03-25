export const reverseString = (str) => {
  //   return console.log(Array.from(str).reverse().join(""));
  //   =============================
  //   return console.log(str.split("").reverse().join(""));
  //   =============================
  //   let reversed = "";
  //   str.split("").forEach((el) => (reversed = el + reversed));
  //   console.log(reversed);
  //   =============================
  //   let reversed = "";
  //   for (let char of str) {
  //     reversed = char + reversed;
  //   }
  //   return console.log(reversed);
  //   =============================
  return console.log(str.split("").reduce((acc, curr) => curr + acc, "")); // empty string is initial val, default acc will get the first item in array, curr will be the second
};
