const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;


// user : Coffee-Store
// pass : bJzjKd9cJNZqNnod


// middle were

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  res.send('coffee server is running')
})

app.listen(port, () => {
  console.log(`coffee server in running on port: ${port}`)
})