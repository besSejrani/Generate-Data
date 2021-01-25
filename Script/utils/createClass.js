import fs from "fs";
import faker from "faker";

export const createClass = (nomberRows) => {
  for (let i = 1; i <= nomberRows; i++) {
    const student = `${faker.name.firstName()}, ${faker.name.lastName()},${(Math.random() * (6 - 1) + 1).toFixed(2)},${(
      Math.random() * (6 - 1) +
      1
    ).toFixed(2)},${(Math.random() * (6 - 1) + 1).toFixed(2)},${(Math.random() * (6 - 1) + 1).toFixed(2)},${(
      Math.random() * (6 - 1) +
      1
    ).toFixed(2)},${(Math.random() * (6 - 1) + 1).toFixed(2)},${(Math.random() * (6 - 1) + 1).toFixed(2)},${(
      Math.random() * (6 - 1) +
      1
    ).toFixed(2)},${(Math.random() * (6 - 1) + 1).toFixed(2)},${(Math.random() * (6 - 1) + 1).toFixed(2)},${(
      Math.random() * (6 - 1) +
      1
    ).toFixed(2)}`;

    console.log(student);

    fs.appendFileSync("../Rendu/class.csv", `${student} \n`, (err) => {
      if (err) console.log("The lyrics were updated!");
    });
  }
};
