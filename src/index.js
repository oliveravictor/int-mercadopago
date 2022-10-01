const express = require('express')
const app = express()

// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: "PROD_ACCESS_TOKEN",
});

// Route
app.get('/checkout', (req, res) => {
  res.send('<h1>Hola desde checkout re</h1>')
})

// Server
app.listen(3000, () => {
  console.log('server on port 3000')
})
