const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/groups', require('./routes/group'));
app.use('/expenses', require('./routes/expense'));

// Default Route
app.get('/', (req, res) => {
  res.send('SplitManager API is running!');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
