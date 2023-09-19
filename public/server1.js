require('dotenv').config();


const express = require('express');
const app= express();

app.request(express.json());


const stripe =require('stripe')(process.env.stripe_api);

const storeItems =new Map([
    [1, {priceIncents: 1000, name:'Learn React Today'}]
    [2, {priceIncents: 2000, name:"Learn CSS today"}]
    
])


app.listen(3000);