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

    }
    catch(error){
        console.log("Custmer is left",error);
    }
    finally{
        console.log("Day ended, Shop is closed");
    }
}

kitchen();