let arr=[
    {
    name:"Achal",
    age:24,
    country:"India",
    hobbies:["cricket","songs","movies"]
    },

    {
        name:"Saurabh",
        age:28,
        country:"Australia",
        hobbies:["cricket","javascript","teaching","web-dev"]
    },

    {
        name:"Sid",
        age:35,
        country:"Kenya",
        hobbies:["startup","python","digital"]
    },

    {
        name:"Alekhya",
        age: 26,
        country:"India",
        hobbies:["songs","movies","dance"]
    }   

]

function display(){
    arr.forEach((ele)=>{
        console.log(ele)

    })
}

display();

function age(){
    arr.forEach((ele)=>{
        if(ele.age<30){
            console.log(ele)
        }
    })
}

age();

function country(){
    arr.forEach((ele)=>{
        if(ele.country.toLowerCase()==="india"){
            console.log(ele)
        }
    })
}

country();