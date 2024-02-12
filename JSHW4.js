'use strict';
function Triangle (high, sigh) {      //З for
    let cons = sigh;
    for (let i=0; i<high; i+=1) {console.log (cons);
       cons += sigh; 
    }
}
Triangle (8, '*') 

function triangle (high, sigh) {      //З while
    let cons = '';
    let i = 0;
    while (i<high) { 
        console.log (cons+= sigh);
        i+=1;  
     }
}
triangle (8, '&')



