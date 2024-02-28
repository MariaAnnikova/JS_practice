const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу квітків',
    selsSolution: 'Рішення для продажу квітків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для родажу квітків',
            sells: 'Рішення для продажу квітків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квітків',
                    sells: 'рішення для продажу квітків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квітків',
                    sells: 'рішення для продажу квітків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квітків',
                            sells: 'рішення для продажу квітків',
                        },
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квітків',
            sells: 'Рішення для продажу квітків'
        }
    ]
}
function findValueByKey (obj, companyName) {
    if (obj.name === companyName) {
        return obj;
     }
     if (obj.clients) {
    for (const client of obj.clients) {
        const result = findValueByKey (client, companyName) 
            if (result) {
                return result;  
            } 
        }
    }
    if (obj.partners) {
        for (const partner of obj.partners) {
            const result = findValueByKey (partner, companyName);
           if (result) {
            return result 
           }
        }  
    }
    return undefined
}
console.log (findValueByKey (company, 'Велика Компанія'))
console.log (findValueByKey (company, 'Клієнт 1'))
console.log (findValueByKey (company, 'Клієнт 1.1'))
console.log (findValueByKey (company, 'Клієнт 1.2.3'));

