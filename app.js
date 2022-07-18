console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const arr = [2, 22, 12, 17, 18, 39, 129];
function arraySum(arr) {
  let sum = 0;
  arr.forEach((number) => {
    sum += number;
  });
  return sum;
}
console.log(arraySum(arr));
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
let favBook = {
  title: "Red Rising",
  pages: "672",
  readCount: "2",
  info,
};
console.log(favBook);

function info() {
  return `${this.title} is a book containing ${this.pages} page(s) and has been read ${this.readCount} time(s).`;
}
console.log(favBook.info());

let runnerup = {
  title: "Ranger's Apprentice",
  pages: "495",
  readCount: "1",
  info,
};
console.log(runnerup.info());
// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let sentence = "The quick brown fox jumps over the lazy dog";

function reversal(sentence) {
  let result = [];
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    let letters = words[i].split("");
    letters.reverse();
    let reversal = letters.join("");
    result.push(reversal);
  }
  return result.join(" ");
}
console.log(reversal(sentence));
// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function csvConverter(data) {
  let headers = data.slice(0, data.indexOf("\n")).split(",");

  let valueList = data.slice(data.indexOf("\n") + 1).split("\n");

  const customArr = valueList.map((row) => {
    let values = row.split(",");
    let obj = {}

    values.forEach((value, idx) => {
      if (idx < headers.length) {
        obj[headers[idx]] = value;
      } else {
        obj[`misc${idx}`] = value;
      }
    });
    return obj;
  });
  return customArr;
}

console.log(csvConverter(csvData))
