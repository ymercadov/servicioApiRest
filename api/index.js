const express = require('express');
const app = express();


app.get('/',function (req, res) {
 res.send('saludos desde express');
});

app.listen(3000,() => {
    console.log('el servidor se incio en el puerto 3000');
});