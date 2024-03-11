 const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (accumlator, currentValue) {
//     console.log(`acc: ${accumlator} and currVal: ${currentValue}`);            // readbilty
//     return accumlator + currentValue
// }, 0)


const myTotal = myNums.reduce( (accumlator, currentValue) => accumlator + currentValue, 0 )       // smart code

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
 ]


const priceToPay = shoppingCart.reduce( (accumlator, item) => accumlator + item.price,0 )

console.log(priceToPay);