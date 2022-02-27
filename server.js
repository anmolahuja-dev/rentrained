const express = require('express');
const app = express();

const connectDB = require('./config/db');
connectDB();

const PORT = process.env.PORT || 5000;

// Initialize middleware
app.use(express.json({extended:false}));

// Define Routes
app.use('/api/users', require('./routes/api/users'));

app.get('/',(req,res)=> res.send('API Running....'));

app.listen(PORT, ()=>console.log(`Server is listening on port ${PORT}`));
