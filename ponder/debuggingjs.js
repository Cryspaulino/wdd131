/*const PI = 3.14;
let radius = 3;
let area = 0;
area = radius * radius * PI;
console.log("First calculation: ", area)
radius = 4;
area = radius * radius * PI;
console.log("Second calculation: ", area)

function circleArea(radius) {
    
    return radius
}*/

const PI = 3.14;
let area = 0;
function circleArea(radius) {
  const area = radius * radius * PI;
  return area;
}
area = circleArea(3);
console.log("First calculation: ", area);
area = circleArea(4);
console.log("Second calculation: ", area);