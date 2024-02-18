const services = {
    'haircut': "700 грн",
    'manicure': "600 грн",
    'brows': "550 грн",
    price() {
        let totalPrice = 0;
        const values = Object.values(this); 

        for (const value of values) {
            if (!isNaN(Number.parseInt(value))) {
                const numValue = Number.parseInt(value)
                //console.log (numValue)
                totalPrice += numValue;
            };
        };
        return totalPrice + 'грн';
    },

 minPrice() {
        let miniPrice = 0;
        const values = Object.values(this);
        const isNumberValues = [];
       
     for (let i = 0; i < values.length; i += 1) {
            if (!isNaN(Number.parseInt(values[i]))) {
                const numValue = Number.parseInt (values[i]);
                isNumberValues.push(numValue);
            };
        };

        miniPrice = isNumberValues[0];
        for (const isNumberValue of isNumberValues) {
            if (miniPrice > isNumberValue) {
                miniPrice = isNumberValue;     
            };
        };
        return miniPrice + 'грн'    
    },
 
    maxPrice() {
        let maxPrice = 0;
        const values = Object.values(this);
        const isNumberValues = [];
       
        for (let i = 0; i < values.length; i += 1) {
            if (!isNaN(Number.parseInt(values[i]))) {
                const numValue = Number.parseInt(values[i]);
                isNumberValues.push(numValue);
            };
        };

        maxPrice = isNumberValues[0];
        for (const isNumberValue of isNumberValues) {
            if (maxPrice < isNumberValue) {
                maxPrice = isNumberValue;          
            };
        };
        return maxPrice + 'грн';
    },
};
services.makeup = "1000 грн"
console.log(services.price());
console.log(services.minPrice());
console.log(services.maxPrice())
;



