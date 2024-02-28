/*const company = {
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
    ],
    findValueByKey(obj, companyName) {
        const values = Object.values(this);
        if (companyName === this.name) {
            return obj;
        } else {
            for (let i = 0; i < this.clients.length; i += 1) {
                const clientsValues = Object.values(this.clients[i]);   
                if (companyName === this.clients[i].name) {
                    
                    return this.clients[i];
                    
                }
                else {
                    for (const clientsValue of clientsValues) {
                        if (typeof (clientsValue) === "object") {
                            for (let j = 0; j < clientsValue.length; j += 1) {
                                
                                const clientsPartnersValues = clientsValue[j];
                                const ys = Object.values(clientsPartnersValues);
                                if (companyName === clientsPartnersValues.name) { 
                                    return clientsPartnersValues;
                                }
                                else {
                        
                                for (const y of ys) {
                                    // console.log(y) 
                                    if (typeof (y) === "object") {
                                        for (let k = 0; k < y.length; k += 1){
                                            if (companyName === y[k].name) {
                                                 return y[k];
                                            }
                                        }
                                    }
                                }
                        }    
                            };
                        }
                                  
                    }
                }
            }

        }        
        return 'Вибачте, компанії з такою назвою не має в базі. Будь ласка перевірте вірність введених данних'        
},
}
console.log(company.findValueByKey(company, 'Велика Компанія')) 
console.log(company.findValueByKey(company, 'Клієнт 1')) 
console.log(company.findValueByKey(company, 'Клієнт 1.1'));
console.log(company.findValueByKey(company,'Клієнт 1.2.3')) */

  
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

