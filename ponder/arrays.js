/* const steps = ["one", "two", "three"];
const listTemplate = (step) => {
    listTemplate.innerHTML += `<li>${step}</li>`;   
  return stepsHtml;//the html string made from step
}
const stepsHtml = // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = // set the innerHTML
*/

// MAP WITH LIST
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>` //the html string made from step
}
const stepsHtml = steps.map(listTemplate)// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join("") // set the innerHTML 

/*IF I GET AN ERROR THAT SAYS ***CANNOT SET PROPERTIES OF NULL ('INNERHTML')  IS BECAUSE I DIDN'T DO DEFER ON SCRIPT*/

//MAP
const grades = ["A", "B", "C"];
function convertToGpaPoints(grade) {
    grade = grade.toUpperCase();
    switch (grade) {
        case "A":
            return 4.0;
            break;
        case "B":
            return 3.0;
            break;
        case "C":
            return 2.0;
            break;
        default:
            return 0.0;
    }
}

//REDUCE
const gpaPoints = grades.map(convertToGpaPoints);
console.log(gpaPoints)

function sum(total, current) {
    return total + current;
}
const gpaTotal = gpaPoints.reduce(sum, 0) /*If I want to add another number I can add it where the cero is, for example if I want to add 10 i put it after the comma and it will sum that and the other stuff*/
console.log(gpaTotal);

//FILTER
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape']
const shortFruits = fruits.filter(function(item) {
    return item.length < 6;
})
console.log(shortFruits);

//INDEXOF
const numbers = [12, 34, 21, 54]
const luckyNumber = 21
const result = numbers.indexOf(luckyNumber);
console.log(result);