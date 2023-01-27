const express = require("express")
const router = express.Router();

router.get('/', (req, resp) =>{
    resp.send("NodeJS")
})

const app = express();

app.use("/", router);

module.exports = app;