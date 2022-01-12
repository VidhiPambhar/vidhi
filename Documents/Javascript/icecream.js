let stocks = {
    Fruits : ["strawberry","grapes","banana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocalate","peanuts"]
    
};
let order = (Fruit_name,call_production) => {
    setTimeout(()=>{
        console.log(`${stocks.Fruits[Fruit_name]} was selected`);   
         call_production()

    },2000) ;   
};

let production = () => {
    setTimeout(()=>{
        console.log("Production has started");

        setTimeout(()=>{
            console.log("the fruits has been chopped");

        setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

        setTimeout(()=>{
            console.log("the Machine was started");

        setTimeout(()=>{
            console.log(`ice cream was placed on the ${stocks.holder[0]}`);

        setTimeout(()=>{
            console.log(`${stocks.toppings[1]} was added as toppings...!!`);

        setTimeout(()=>{
            console.log("Yeyyy...!! Serve ice cream..");
        })
                        },3000)
                    },2000);
                },1000);
            },1000);
        },2000);
    },0000);
};

order(0,production);