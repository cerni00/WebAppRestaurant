const express = require('express');
const app = express(); 
const PORT = 3000;

 app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'content-type');
  next();
}); 

// Route to get 10 random restaurant names
app.get('/api/random-restaurants', (req, res) => {
  const restaurants = [];
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < 10; i++) {
      let name = 'Restaurant ';
      for (let j = 0; j < 1; j++) {
        name += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      }
      restaurants.push(name);
    }
  res.json(restaurants.slice(0,10));
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/api/random-restaurants`);
});


 
 