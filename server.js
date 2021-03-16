const express = require('express');
//initialize app variable
const app = express();
//single end point to test
app.get('/', (req, res) => res.send('API Running'));
//listen on a port and have port look for an enviroment variable default to 5000
const PORT = process.env.PORT || 5000;
//pass in the port then do a call back, want a console log to do a back tick
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));