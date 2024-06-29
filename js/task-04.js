const languages = ["1-Pyton", "2-C++", "3-C#", "4-PHP"];
// let cleanedLanguages = languages.split("-");
// console.log(cleanedLanguages);
let cleanedLanguages = [];

for (const language of languages) {
  let cleanedLanguage = language.split("-")[1];
  cleanedLanguages.push(cleanedLanguage);
}
console.log(cleanedLanguages);
