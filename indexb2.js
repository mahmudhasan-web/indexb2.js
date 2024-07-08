const array= [1,2,3,4,5,6,7,8,9,10]
const names =['Mahmud', "Nitol", "Masud", 'Noman', 'Raju']

for(let i=1; i<array.length; i++){
    const value = array[i]
    if(value<5){

        // console.log(value);
    }
    else{
        // console.log("No Value Match");
        // return
    }
}

// const mapArray = array.filter(e=> e<6?console.log(e): console.log("Nai baba"))
const reduceArray = array.reduce((p,c)=> p+c,10)
// console.log(reduceArray);
// const newArray =array.slice(0,5)
// array.splice(5,2,15)
// array.push(111)
// array.pop()
// array.shift()
// array.unshift(200)
const newArray =array.find((e)=>e==5)
console.log(newArray);
// console.log(array);

const nam = "Mahmud Hasan Siddique"
const num = 5;
const condition = "true";

console.log(typeof(nam));
console.log(typeof(num));
console.log(typeof(condition));

if(num == "5"){
    console.log("same");
}