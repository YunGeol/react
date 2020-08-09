const add = (a, b) => a + b;
console.log(add(1,2));

const add5 = a => a + 5;
console.log(add5(1));

const addAndReturnObject = (a, b) => ({ result: a + b});
console.log(addAndReturnObject(5, 8));

const add02 = (a, b) => {
    if (a <= 0 || b <= 0) {
        throw new Error('must be positive number');
    }
    return a + b;
};
console.log(add02(7, 8));
//console.log(add02(-7, 8)); // Error !!

const printLog = (...rest) => console.log(rest);
printLog(1,2,3, 'a');
