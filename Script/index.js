import fs from "fs";

import { createClass } from "./utils/createClass.js";

fs.writeFile("../Rendu/class.csv", "", () => {
  try {
    console.log("file has been writen");
  } catch (error) {
    console.log(error.message);
  }
});

fs.appendFileSync(
  "../Rendu/class.csv",
  `nom,prenom, anglais, allemand, francais, mathematique, histoire, geographie, chimie, biologie, physique, philosophie, psychologie \n`,
  (err) => {
    if (err) console.log("The lyrics were updated!");
  }
);

createClass(100);
