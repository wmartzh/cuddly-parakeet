var {buildSchema} = require('graphql');

module.exports = buildSchema(`
    type Query {
        dummy:String
    }
    type Order {
        id:Int
        date:String
        clientId:String
        items: [Items]

    }
    type Items{
        id:Int
        name:String
        description:String
        price: Float

    }

`);