const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
app.use( function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' +  req.hostname + req.url);
  }
});

app.listen(PORT, () => console.log('server start' + PORT ));
