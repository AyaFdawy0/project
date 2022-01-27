///options object/////////
// function test(options={name,age,salary,email}){
//     var defults = {
//         name:"notfound",age:0,salary:0,email:"not found"
//     }

// //{name:menna,age:0,salary:0,email:"menna@aaa"}
// options = Object.assign({},defults,options);
//  console.log(options);
//  return options;
 
// }
// var obj = test(
//     {
//         name:"menna",
//         email:"meee@aaa"
//     }
// );


// $.ajax({
//     url:"",
//     sucess:function(){

//     }
// })
// var obj1={
//     name:"menna",
//     age:24
// }
//console.log("salary" in obj1);
// var obj2={
//     salary:2000,
//     age:30
// }
// var newObj = Object.assign({},obj1,obj2);
// console.log(newObj);
//static function
// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));

//////////proxy=====//////////
// var obj = {
//     name:"menna",
//     age:25
// }

// console.log(obj.ag);
// var handler = {
//     get:function(target,prop,prox){
//         if(!(prop in target))
//         {
//             throw("property not found");
//         }
        
//         return target[prop];

//     },
//     set:function(target,prop,value,prox){
//         if(prop ==="name"){
//             if(typeof value!=="string"){
//                 throw("you cant setname")
//             }
//         }
//         target[prop] = value;
//         //console.log(arguments);

// }}
// var p = new Proxy(obj,handler)
// // console.log(p);
// console.log(p.name);
// // p.name = 25;
// p.salary = 25;
/////////////////////////////////
////===class======///////////
// function Emploee(){
//     this.name = 
// }
// Emploee.test = function(){

// }
// class Employee{
//     constructor(n="not set",a=0,s=0){

//         this.name = n;
//         this.age = a;
//         this.salary = s
//     }
//     display(){
//         console.log(this.name,this.age);
//     }
//     static test(){
//         console.log("static func");
//     }
 
// }

// var emp1  = new Employee("menna",25,2000);
// var emp2 = new Employee();
// Employee.test();
// class User{
//     constructor(name,age){
//         // if(this.constructor===User){
//         //     throw("abstract")
//         // }
//         this.name = name;
//         this.age = age;

//     }
//     display(){
//         console.log(this.name,this.age);
//     }
// }
// export default class Employee extends User{
//     constructor(n="not set",a=0,s=0){

//         // this.name = n;
//         // this.age = a;
//         super(n,a);
//         this.salary = s
//     }
//     // display(){
//     //     console.log(this.name,this.age);
//     // }
//     calcSalary(){
//         console.log(this.salary+2000);
//     }
// }

// export class Student extends User{
//     constructor(name,age,grades){
//         super(name,age);

//         // this.name = name;
//         // this.age = age;
//         this.grades = grades;
//     }
//     calcGrades(){
//         console.log(this.grades);
//     }
//     display(){
//        // super.display();
//         console.log("student");
//     }
// }
// var emp1 = new Employee("hamada",25,2000);
// var stu = new Student("menna",23,"d");
// stu.display();

// console.log("hello");
////////////////////////////////