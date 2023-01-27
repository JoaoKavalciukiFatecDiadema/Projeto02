const app = require("./app")
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
require('dotenv').config({path: 'variaveis.env'})

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true})
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) =>{
    console.log("Ërror: " + error.message);
})

app.set('port', process.env.PORT || 8080);

const server = app.listen(app.get('port'), () =>{
    console.log("server running at port " + server.address().port);
})