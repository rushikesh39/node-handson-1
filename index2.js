const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000; // Set the port

const user=require("./Routes/userRoute")


// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello from your MERN server!');
});
user.use('/user',user)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
