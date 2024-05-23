const fs = require("fs");
const folderPath = "./audio/part1";
const fileNames = fs.readdirSync(folderPath); // 所有文件名


const newNames = [
  "1_1 subject.mp3",
  "1_10 finance.mp3",
  "1_11 tourism.mp3",
  "1_12 character.mp3",
  "1_13 transportation.mp3",
  "1_14 accommodation_type.mp3",
  "1_15 furniture_and_facilities.mp3",
  "1_16 food_and_drink.mp3",
  "1_17 leisure_and_lifestyle.mp3",
  "1_18 animals_and_plants.mp3",
  "1_19 plants.mp3",
  "1_2 course.mp3",
  "1_20 company_and_business.mp3",
  "1_21 crime.mp3",
  "1_22 medical_scenario.mp3",
  "1_23 environment.mp3",
  "1_24 sports.mp3",
  "1_25 movie.mp3",
  "1_26 architecture_and_construction.mp3",
  "1_3 thesis_vocabulary.mp3",
  "1_4 library_vocabulary.mp3",
  "1_5 student_types_and_certificate_types.mp3",
  "1_6 publications.mp3",
  "1_7 common_words.mp3",
  "1_8 basic_vocabulary_1.mp3",
  "1_9 basic_vocabulary_2.mp3",
];

// fileNames.forEach((item, index) => {

//   fs.renameSync(`./audio/part1/${item}`, `./audio/part1/${item.replace(' ','_')}`);
// });

console.log(fileNames);