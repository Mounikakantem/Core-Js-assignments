function add(...args) {
    sum = args.reduce((total,value)=>{
        return 
      },0)
}

let array = [20, 30, 40];
let [x, y, z] = array;
console.log(x,y,z)
let obj = { fname: "mounika", lname: "kantem" }
let { fname, lname } = obj;
console.log(fname+' - '+lname)

let array2=[1,2,3,4,5,6,7,8,9,10];
let evenNumbers=array2.filter(value => value>5);
console.log(evenNumbers);

let array3 = [1,2,3,4,5]
let cubeArray=array3.map(value=> value*value*value);
console.log(cubeArray)

let employee=[
    {name:"reethu",salary:35549,dept:"analyst"},
    {name:"mounika",salary:45549,dept:"IT"},
    {name:"Praveena",salary:75549,dept:"analyst"},
    {name:"Sahaja",salary:75549,dept:"IT"},
    {name:"Binnu",salary:56549,dept:"IT"},
    {name:"Vishal",salary:85549,dept:"analyst"}
]
let accountsEmp=employee.filter(value=> value.dept=="analyst");
let filtered=employee.filter(value=> value.salary>=50000 )
console.log(accountsEmp)
console.log(filtered) 

let salary=[14000, 11000, 13000, 25000, 27000];
let totalSalary=salary.reduce((total,value)=>{
  return total+value
},0)
console.log(totalSalary)


