let stocks = {
    Fruits : ["strawberry","Grapes","Banana","Apple"],
    liquid:["Water","Ice"],
    holder:["Cone","Cup","stick"],
    toppings:["Chocalate","Peanuts"]
}

let is_shop_open=true;

function time(ms){
    return new Promise( (resolve,reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms) ;
        }
            else{
                reject(console.log("Shop is closed  ):"))
            }
        
    });
}

async function kitchen() {
    try{
        await time(2000)
        console.log(`${stocks.Fruits[2]} was selected`);

        await time(0000);
        console.log("Start the Production");

        await time(2000);
        console.log("cut the fruit.");

        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

        await time(2000);
        console.log("Start the machine");

        await time(3000);
        console.log(`Ice cream placed on ${stocks.holder[2]}`);

        await time(3000);
        console.log(`${stocks.toppings[1]} was selected`);

        await time(2000);
        console.log("Serve Ice cream..!!!");
    }
    catch(error){
        console.log("Custmer is left",error);
    }
    finally{
        console.log("Day ended, Shop is closed");
    }
}

kitchen();