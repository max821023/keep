const express = require('express');
const app = express();

app.get('/', (req, res) => res.send("this works!"))

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is serving on port ${port}`))