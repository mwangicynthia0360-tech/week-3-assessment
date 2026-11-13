let fullName = prompt("Enter fullName");
 alert("This field cannot be empty. Please try again.");

let courseName = prompt("Enter courseName");
 alert("This field cannot be empty. Please try again.");

console.log("fullName " + fullName);
console.log("courseName " + courseName);


let mathematics = Number(prompt("Enter mathematics"));
let english = Number(prompt("Enter english"));
let science = Number(prompt("Enter science"));
alert("Marks cannot be empty. Please try again.");

console.log("mathematics " + mathematics);
console.log("english " + english);
console.log("science " + science);

let average = calculateAverage(mathematics, english, science);
let grade = calculateGrade(average);

function calculateAverage(mathematics, english, science) {
    return (mathematics + english + science) / 3
}
   
function calculateGrade(average) {
  if (average >= 80) return "A";
  if (average >= 70) return "B";
  if (average >= 60) return "C";
  if (average >= 50) return "D";
  return "E";
}

console.log("Average: " + average);
console.log("Grade: " + grade);  
