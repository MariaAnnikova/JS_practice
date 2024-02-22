let mondayMenu = {
    a: "oatmeal (150g)",
    b: "apple (200g)",
    c: "wellnut (25g)",
    getInfo() {
        for (let key in this) {
            console.log (key + ": " + this[key]);
      }
   }
}
   mondayMenu.drink = 'green tea' 
   mondayMenu.getInfo ()
       
 
   
