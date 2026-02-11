let obj={
    item:"pen",
    price:20,
};
// it is a boring way to write object/string
console.log("the cost of ",obj.item, "is" ,obj.price,"rupees");
let output=`the cost of \n${obj.item} is ${obj.price} rupees`;
console.log(output);
// Template literal

let sentence = `This is a template litral`
console.log(sentence)