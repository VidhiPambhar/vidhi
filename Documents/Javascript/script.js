console.log('hello ');
const  mygreet=function(name,thank='thanks you')
{
    let msg=`Hapy birthday ${name} hope your celebration gives you many happy memories! ${thank}`;
    return msg;

}
let name='Khushi';
let val=mygreet(name,'Thanks a lot');
console.log(val);



const myobj={
    name:"Skilf",
    game:function(){
        return "GTA";
    }
}
console.log(myobj.game());