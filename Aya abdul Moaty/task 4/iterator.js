var obj = {
    name: "aya",
    age: 23
}
function iteratorObj() {
    let keys = Object.keys(this);
    let start = 0;
    return {
        next: function () {
            //start = start+1;

            if (start < keys.length) {
                return {
                    value: this[keys[start++]],
                    done: false
                }

            }
            else {
                return {
                    value: undefined,
                    done: true
                }

            }

        }
    }
}

obj[Symbol.iterator] = iteratorObj;
for (let x of obj) {
    console.log(x,obj[x]);
}
