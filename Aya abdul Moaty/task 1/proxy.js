var obj = {
    name: "aya",
    age: 23,
    address: "Sinai"
}
var handler = {
    get: function (target, prop, prox) {
        if (!(prop in target)) {
            throw ("property not found")
        }
        return target[prop];
    },
    set: function (target, prop, value, prox) {
        if (prop === "name") {
            if (typeof value !== "string" && value.length != 7) {
                throw ("you cant setname")
            }
        }
       else if (prop === "address") {
            if (typeof value !== "string") {
                throw ("you cant setname")
            }
        }
        else if (prop === "age") {
            if (!Number.isInteger(value) && (value<=25 || value>=60)) {
                throw ('The age is not an number and must be between 25 and 60');
              }
              
        }

        target[prop] = value;
    }

}
var p = new Proxy(obj, handler)
console.log(p);
//p.name=3;      //error you cant setname
//p.name="ayaaaaaaaaaaaa";      //error you cant setname
//console.log(p);
//p.age=30;
p.age=61;

console.log(p);
