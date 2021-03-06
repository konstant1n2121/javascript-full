const getMesageForPassedStudents = (allStudents, failedStudents) =>
  allStudents
    .filter((name) => !failedStudents.includes(name))

    .map((name) => "Good job, " + name);

const allStudents = ["Ann", "Tom", "Bob", "Kate"];
const failedStudents = ["Tom", "Bob"];

console.log(getMesageForPassedStudents(allStudents, failedStudents));
