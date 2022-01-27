 var arr = [2,3,6];
// for(let x of arr){
//     console.log(x);
// }

var obj = {
    name:"menna",
    age:24
}

// for(let x of obj){
//     console.log(x);
// }

// var s = Symbol();//fwerwtw4R3
// // var s2 = Symbol();
// // console.log(s==s2);
// var k = "name";

// var person = {
//   [ k]:"menna",
//   [Symbol()]:25
// }

// person.name = "hamada";
// person["name"] = 25;

//1- function return object
//2- returned object has next func;
//3- next return object {value:,done:false     true}

//2 10

// function EvenIt(){
//     var start = 0;
//     var it = {
//         next :function(){
//             start = start+2;
//             if(start<=10){

//                 return {
//                     value:start,
//                     done:false
//                 }
//             }
//             else{
//                 return{
//                     value:undefined,
//                     done:true
//                 }
//             }
//         }
//     }
//     return it;
// }
//  var it = EvenIt();
//  obj[Symbol.iterator] = EvenIt;
//  for(let x of obj){
//     console.log(x);
// }
//  it.next();//{value:2,done:false}
//  it.next();//{value:4,done:false}
//  it.next();//{value:6,done:false}
//  it.next();//{value:8,done:false}
//  it.next();//{value:10,done:false}
//  it.next();//{value:undefiend,done:true}
//  it.next();//{value:undefiend,done:true}

// ///generator function//////
// function* EvenGen(){
//     for(let i =2;i<=10;i+=2){
//         yield i;
//     }
//     // yield 2;
//     // yield 2;
//     // yield 2;

//     // yield 2;
//     // yield 2;
//     // console.log("hello");
//     // yield 5;
//     // yield 10;
//     // console.log("hamada");

// }
// var it = EvenGen();

function* objGen(){
    var keys = Object.keys(this);
    for(var i =0;i<keys.length;i++){
        var propvalue = this[keys[i]]
        yield [keys[i],propvalue];
    }

}
obj[Symbol.iterator] = objGen;
for(let x of obj){
    console.log(x);
}

