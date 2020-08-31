// QUESTION 1- Program to search for a particular character in a string

let str="achalgupta"
let char="p"
if(str.indexOf(char)!=-1){
    console.log(`element ${char} is present at position ${str.indexOf(char)}`)
}
else{
    console.log("element not found")
}

// ------------------------------------------------------------------------------------------------------------------

// QUESTION 2- Program to convert minutes to seconds

let minute=40 ;
let second= minute*60;
console.log(second);

//-------------------------------------------------------------------------------------------------------------------

//QUESTION 3- Program to search for an element in an array of strings

let arr=["achal","gupta","Lets","UpGrade","Javascript"];
arr.forEach((ele,i)=>{
    if(ele==="UpGrade"){
        console.log(`${ele} is present at position ${i}`);
    }
})

//-------------------------------------------------------------------------------------------------------------------

//QUESTION 4- Program to display only elements containing 'a' in them from an array

let arr1=["achal","guptA","Lets","UpGrAde","Javascript","python"];
arr1.forEach((ele,i)=>{
    if(ele.match(/a/gi)){
        console.log(ele);
        //gi is used for global case insensitive
        //g for global case sensitive
    }
    
})

//-------------------------------------------------------------------------------------------------------------------

//QUESTION 5- Print an array in reverse order

let arr2=["achal","gupta","Lets","UpGrade","Javascript","python"];
let arr3=arr2.reverse();
console.log(arr3);

//OR
let arr4=["achal","gupta","Lets","UpGrade","Javascript","python"];
let arr5=[];
len=arr4.length;
for(let i=0;i<len;i++){
    arr5.push(arr4.pop());
}
console.log(arr5);

//--------------------------------------------------------------------------------------------------------------------








