const express = require('express');
const connectDB = require('./config/db');
//initialize app variable
const app = express();

//connect to database
connectDB();

//Init Middlewear

app.use(express.json({ extended: false}));

//single end point to test
app.get('/', (req, res) => res.send('API Running'));

//Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

//listen on a port and have port look for an enviroment variable default to 5000
const PORT = process.env.PORT || 5000;
//pass in the port then do a call back, want a console log to do a back tick
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));