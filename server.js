const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

// app.use(function (req, res, next) {
//   if (req.headers['x-forwarded-proto'] === 'http') {
//     next();
//   } else {
//     res.redirect('http://' +  req.hostname + req.url);
//   }
// });


app.use(express.static('public'));


app.listen(PORT, () => console.log('server start' + PORT ));
