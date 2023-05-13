const express = require('express');
const app = express();

app.use(express.static(__dirname + '/views')); 
app.use(express.static(__dirname + '/public')); // js, css, images

app.get('/', (req, res) => {
  res.sendFile('index.html');
});


const server = app.listen(3000, () => {
    console.log("App Running on PORT: 3000");
});
