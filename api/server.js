const express = require('express');
const cors = require('cors');
const registerRouter = require('./routes/index'); // Import the register router

const app = express();

app.use(cors());
app.use(express.json());

// Mount the register router at the desired base path
app.use('/api', registerRouter); // You can change '/api' to any base path you prefer

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
