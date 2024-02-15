function powcount (x, y) {
    let pow = x
if (y === 0)
    return 1;
for (let i = 1; i<y; i++) { 
    pow*=x;
} 
    return pow;

}
console.log (powcount (3, 0))



const result = Math.pow (5,3)  // Так набагато швидше і легше :) - знайшла в інтернеті
console.log (result)
