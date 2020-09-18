Employees=[
    {
        name:"Achal",
        age:24,
        city:"Gwalior",
        salary:28000

    },

    {
        name:"Ashi",
        age:23,
        city:"Gwalior",
        salary:30000
    },

    {
        name:"Tanish",
        age:26,
        city:"Bangalore",
        salary:35000
    },

    {
        name:"Raj",
        age:24,
        city:"Mandla",
        salary:22000
    },

    {
        name:"Shubh",
        age:30,
        city:"Bihar",
        salary:40000
    }
]

function display(show){
    document.getElementById("tbody").innerHTML=""

   show.forEach((ele,i)=>{
        document.getElementById("tbody").innerHTML+=`<tr>
        <td>${i+1}</td>
        <td>${ele.name}</td>
        <td>${ele.age}</td>
        <td>${ele.city}</td>
        <td>${ele.salary}</td>
        <td><button class="btn btn-primary" onclick="deleterow(${i})">Delete</button></td>      

        </tr>`
   })
         
}

display(Employees);

function searchbyname(){
    searchname=document.getElementById("name").value
    let result=Employees.filter((ele,i)=>{
        return ele.name.toLowerCase().indexOf(searchname.toLowerCase())!=-1;
    })

    // console.log(result)
    display(result)
    
}

function searchbycity(){
    searchcity=document.getElementById("city").value;
    let result=Employees.filter((ele,i)=>{
        return ele.city.toLowerCase().indexOf(searchcity.toLowerCase())!=-1;

    })

    // console.log(result)
    display(result)
}

function deleterow(i){
    Employees.splice(i,1)
    display(Employees)

}