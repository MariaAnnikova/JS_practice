
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
    {userName:"Hello",
    lastName:"",
    email:"Rvjcvs12!!!@gmail.com"
},
];

const getEmail = function (arr) {
    const validEmail = [];
    let message = " ";
    const re = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/; 
    for (const ar of arr) {
        let email = ar.email;
        if (re.test(email)) {
            validEmail.push(ar.email);
            message = `МИ довіряємо тільки користувачам з email: ${validEmail}`
        }
    };
    return message;
};
console.log(getEmail(arr));








