function powcount (x, y) {
let pow = x
for (let i = 1; i<y; i++) { 
    console.log(pow*=x);
     } 
}
powcount (5, 3)


//const result = Math.pow (5,3)  // Так набагато швидше і легше :) - знайшла в інтернеті
//console.log (result)
