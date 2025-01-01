//For Each
let forEachArr = [1,2,3,4,5,6,7,8,9,10]
forEachArr.forEach((element,index)=>console.log(`${index}: ${element}`))
//MAP
let mapArray = [1,2,3,4,5]
console.log(mapArray.map(i=>i*i)) //Returns the newArray with square of elements 

//FILTER
let array = [10,25,55, 444,40]
let newArray = array.filter(i=>i%2==0)
console.log(newArray)

f//ind
let findArray = [-10,-4,-5,-76,7,10,44,-23, -65,13]
console.log(findArray.find((Element,index)=>{
    if(Element>0){
        console.log(`${index}: ${Element}`)
    }
})) 

let findArray1 = [-10,-4,-5,-76,7,10,44,-23, -65,13]
let found = findArray1.find(function(element){
    if(element>0){
        return element
    }
})
console.log(found)


//every()
let arr = [1,2,3,4,5,0,-4,7]
let resArr = arr.every(element=>(element>0))
console.log(resArr)

// JavaScript code for every() method
function isEven(element) {
    return element % 2 == 0;
}
function func() {
    let arr = [56, 92, 18, 88, 123];

    // Check for even number
    let value = arr.every(isEven);
    console.log(value);
}
func();

//Reduce() without Intitial Value
let reduceArray = [1,2,3,4,5]
let res = reduceArray.reduce((Pv,Cv)=>Pv+Cv)
console.log(res)

//Reduce() with Intial value
let reduceArray1 = [1,2,3,4,5]
let res1 = reduceArray.reduce((Pv,Cv)=>Pv+Cv,10)
console.log(res1)


//reduceRight() without Intitial Value
let reduceRightArray = [1,2,3,4,5]
let reduceRightres = reduceArray.reduceRight((Pv,Cv)=>Pv+Cv)
console.log(reduceRightres)

//reduceRight() with Intial value
let reduceRightArray1 = [1,2,3,4,5]
let reduceRes1 = reduceArray.reduceRight((Pv,Cv)=>Pv+Cv,10)
console.log(reduceRes1)