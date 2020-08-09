const obj ={
    value: 1,
    increase: function() {
        this.value++;
    },
};
obj.increase();
console.log(obj.value); //2

const increase = obj.increase;
increase();
console.log(obj.value); // 2

console.log("====================");

function Something() {
    this.value = 1;
    this.increase = () => this.value++;
}
const obj02 = new Something();
obj02.increase();
console.log(obj02.value); // 2
const increase02 =obj02.increase;
increase02();
console.log(obj02.value); // 3
