function makeAddFunc(x) {
    return function add(y) {
        return x + y;
    };
}

const add5 = makeAddFunc(5);
console.log(add5(1)); // 6
const add7 = makeAddFunc(7);
console.log(add7(1)); // 8
console.log(add5(1)); // 6
