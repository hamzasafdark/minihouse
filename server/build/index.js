"use strict";
const express = require("express");
const app = express();
const port = 9000;
const one = 22;
const two = 33;
app.get('/', (req, res) => res.send(`1+2 = ${one + two}`));
app.listen(port);
console.log(`[app]: http://localhost:${port}`);
