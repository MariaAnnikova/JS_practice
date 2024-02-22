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
console.log(company.findValueByKey(company,'Клієнт 1.2.3'))*/


/*let company = { // тот же самый объект, сжатый для краткости
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };
  
  // Функция для подсчёта суммы зарплат
  function sumSalaries(department) {
    if (Array.isArray(department)) { 
        // случай (1)
      return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
    } else { // случай (2)
      let sum = 0;
      for (let subdep of Object.values(department)) {
        sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
      }
      return sum;
    }
  }
  
  console.log(sumSalaries(company)); // 6700 */


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
function findValueByKey(obj, companyName) {
    const values = Object.values(obj);
    if (Array.isArray(company)) {
        return obj;
    }
    else { 
        for (const value of Object.values (obj.clients)) {   
            if (companyName === obj.clients.name) {   
                return obj.clients;  
                
            }
        }  
    }
}
    console.log(findValueByKey(company, 'Велика Компанія'))
    console.log(findValueByKey(company, 'Компанія 1'))