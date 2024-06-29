const languages = ["Pyton", "C++", "C#", "PHP"];
const javaScript = "Java Script";
let message;

for (let i = 0; i < languages.length; i += 1) {
  if (languages[i] !== javaScript) {
    languages.push(javaScript);
    message = "Значення Java Script в списку немає, додаємо в масив";
    break;
  } else {
    message = "Значення Java Script є в списку";
  }
}
console.log(message);
console.log(languages);
