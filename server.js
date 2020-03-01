let express = require('express');
let app = express();
let path = require("path");

let port = 8000;

app.use(express.static(path.join(process.cwd(), 'dist')));

app.listen(port, () => console.log(`App listening on port ${port}!`))