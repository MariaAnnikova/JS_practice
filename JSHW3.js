let num = '10';
let m = '';
let min = '';
let gr = '';
let variable = 'годещгср';
switch (variable) {
    case 'км':
        m = num * 1000;
        console.log(`${num} ${variable} - це ${m} м`);
        break;
    case 'год':
        min = num * 60;
        console.log(`${num} ${variable} - це ${min} хв`);
        break;
    case 'кг':
        gr = num * 1000;
        console.log(`${num} ${variable} - це ${gr} гр`);
        break;
    default:
    console.log('Введіть будьласка число та одиницю виміру: км, год або кг!');
 }
