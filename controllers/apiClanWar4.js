const fs = require('fs');

module.exports = function(req, res) {
  fs.readFile('resultado_resta4.json', 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al leer el archivo JSON');
      return;
    }
    const jsonData = JSON.parse(data);
    res.send(jsonData);
  });
};
