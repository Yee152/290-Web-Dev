'use strict';

const PORT = 3000;

// The variable stocks has the same value as the variable stocks in the file 'stocks.js'
const stocks = require('./stocks.js').stocks;

const express = require("express");
const app = express();


app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));
// Note: Don't add or change anything above this line.




app.get("/review", (req,res) => {
    const number = req.query.number;
    const symbol = req.query.symbol
    const stock_array = findStockBySymbol(symbol)
    const name = stock_array.company
    const price = stock_array.price
    const total_price = stock_array.price * number

    res.send(`You placed an order to buy ${number} stocks of ${name}. The price of one stock is ${price} and the total price for this order is ${total_price}`);
    
});
function findStockBySymbol(symbol){
    let company;
    for (let i = 0; i < stocks.length; i++) {
        if (stocks[i].symbol === symbol)
            company = stocks[i]
    }
 return company
}


app.get("/stock-search", (req,res) => {
    const choice = req.query.search
    res.send(findStockByPrice(choice))
 
});

function findMin(value){
    value = stocks[0].price
    for(let i = 1; i < stocks.length; ++i)
        if(stocks[i].price < value)
        value = stocks[i].price

return value
}

function findMax(value){
    value = stocks[0].price
    for(let i = 1; i < stocks.length; ++i){
        if(stocks[i].price > value)
        value = stocks[i].price
    }

return value
}

function findStockByPrice(choice) {
    let company;
    let stock;

    for(let i = 1; i < stocks.length; i++){
        if(choice == "lowest"){
            company = findMin(stocks[i])
            
        } else if(choice == "highest") {    
            company = findMax(stocks[i])
    
        }
        if (stocks[i].price === company)
            stock = stocks[i]
        
    }

return stock
}


// Note: Don't add or change anything below this line.
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});