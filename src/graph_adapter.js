const orderReg = [
    {
        id:1,
        date:"20-11-2020",
        clientId:25,
        items: [{
            id:22,
            name:"Shoes",
            description:"best shoes EVER",
            price:100.00,

        }]
    }
]

const orders = ()=>{
    return  orderReg;
}

module.exports = {
    orders,
}