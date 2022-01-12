let jsonObj={
    name:"Khushi",
    language:"Nodejs",
    Dept:"IT",
    Organization:"DRC"
}
console.log(jsonObj);

let myJsonstr= JSON.stringify(jsonObj);
console.log(myJsonstr);

myJsonstr=myJsonstr.replace('Khushi','Vidhi');
console.log(myJsonstr);

newJsonObj=JSON.parse(a);
console.log(newJsonObj);




