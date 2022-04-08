const first = {a:1, b:2};
const second = {a:1, b:2};
const third = first;

if(first === third){
    // console.log('objects are equal');
}
else{
    // console.log('objects are different');
}

// console.log(JSON.stringify(first));
// console.log(JSON.stringify(second));
const first2 = {a:1, b:2};
const second2 = {b:2, a:1};
console.log(JSON.stringify(first2));
console.log(JSON.stringify(second2));
if(JSON.stringify(first2) === JSON.stringify(second2)){
    console.log('objects are equal');
}

function compareObjects(obj1, obj2){
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }
    for(const prop in obj1){
        if(obj1[prop] !== obj2[prop]){
            return false;
        }
    }
    return true;
}

const isEqual = compareObjects(first2, second2);
console.log(isEqual);

/*
JS object er compare korte gele tokhon referential intigrity taake check kore. so jokhon eki reference e thake object tokhon taake same hisebe dhore js. bt dekhte jdi same o hoy kintu reference jdi alada hoy taholeo comparison e setaa alada hisebe dhorbe.
*/