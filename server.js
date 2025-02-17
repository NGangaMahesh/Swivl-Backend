require('dotenv').config();
const app = require('./src/app');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
  })
  
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });