const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'dist/ngApp')));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/ngApp', 'index.html'));
});
app.listen(8080, () => {
    console.log('App run on 8080')
});