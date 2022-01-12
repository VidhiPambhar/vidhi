//synchronous

//async setTimeout
// console.log(" I ");

// setTimeout(()=>{
//     console.log(" eat ");
// },3000);


// setTimeout(()=>{
//     console.log(" ice cream ");
// },4000);

// setTimeout(()=>{
//     console.log(" with a ");
// },5000);

// setTimeout(()=>{
//     console.log(" spoon ")
// },6000);

//callback method
// function one(){
//     console.log( " step 1 ");
// }

// function two(){
//     console.log(" step 2 ")
// }

// one();
// two();
//it is regular function.

function one(call_two){
    console.log( " step 1 complete. Please call step 2 ");
    call_two();
}
function two(){
         console.log(" step 2 ")
     }
    
one(two);