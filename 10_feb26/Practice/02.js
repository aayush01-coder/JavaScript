
//  for a given arrr with price of 5 item .aall item have an offer of 10% on thme . change the arra to store final price after applying offter
let items =[250,645,300,900,50];

// let i=0;
// for( let val of items ) {
// //  console.log(`value at index ${i} = ${val}`);
//  let offer = val/ 10;
//  items[i] = items[i] -offer;
//  console.log(`value after offer = ${items[i]}`);
// i++;
// }
for ( let i=0;items.length;i++){
  let offer = items[i]/ 10;
 items[i]-=offer;
 console.log(`value  offer = ${items[i]}`);

}
console.log (items);