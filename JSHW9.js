
var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];
const getEmail = function (arr) {
    const validEmail = [];
    let message = " ";
    for (const ar of arr) {
        let email = ar.email;
        if (email.includes("yahoo.com") || email.includes("gmail.com")) {
            validEmail.push(ar.email);
            message = `Список валідниї email: ${validEmail}`
        };
    };
    return message;
};
console.log(getEmail(arr));


