//let age = ''
let userAge = prompt("Будь ласка вкажіть ваш вік", '')
if (userAge <0 || userAge >100) {
    alert('введіть число від 0 до 100')};
let reminder = userAge%10
if (userAge >=10 && userAge <=20) {
    userAge = userAge + 'років'}
else if (reminder ===1) {
    userAge = userAge + 'рік'}
else if (reminder >=2 && reminder <=4) {
    userAge = userAge + 'роки'}
else {
    userAge = userAge + 'років'}
console.log (userAge)
