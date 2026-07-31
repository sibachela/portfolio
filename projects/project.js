function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

let average = "";
let grade = "";
let pass = "";
let fail = "";
let message = average+grade+fail||pass
function studentMsg(totalScores, studentScore) {
if (totalScores= getAverage(totalScores)){
  return average= "Class average:"+" "+ totalScores+"."
}else if(studentScore = getGrade(studentScore)){
  return grade ="Your grade:"+" "+studentScore+"."
}/*else if(studentScore=="F"){
  return fail="You failed the course."
}else{
  return pass="You passed the course."
}*/

//"Class average: 71.7. Your grade: F.
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));






let name= "isaac";
console.log(name);