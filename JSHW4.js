function Triangle (high, sigh) {      //З for
    let cons = sigh;
    for (i=0; i<high; i++) {console.log (cons);
       cons += sigh; 
    }
}
Triangle (8, '*') 

function triangle (high, sigh) {      //З while
    let cons = '';
    let i = 0;
    while (i<high) { 
        console.log (cons+= sigh);
        i++;  
     }
}
triangle (8, '&')


let high = 8;        // А от тут без функції
let sigh = '+';
let cons = sigh;
for (i=0; i<high; i++) {console.log (cons);
    cons += sigh; 
} 
