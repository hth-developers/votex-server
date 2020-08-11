require('./models/User');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const requireAuth = require('./middlewares/requireAuth');
const authRoutes = require('./routes/authRoutes');
const http = require('http');

const port = 3000;

const app = express();
const server = http.createServer(app);
app.use(authRoutes);

//Database
mongoose.connect(process.env.DB_Connection,{ useNewUrlParser: true,useUnifiedTopology: true },()=>console.log("we are connected"));
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
mongoose.set('useFindAndModify', false);
db.once("open", function() {
  console.log("Connection Successful!");
});



//Middleware
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

//Controllers
const ECControll = require('./controllers/ECControll')
const OControll = require('./controllers/OControll')


//Routes

app.post('/o/add', OControll.add)
app.put('/o/update', OControll.update)

app.post('/ec/signup', ECControll.signup)
app.post('/ec/update', ECControll.update)
app.get('/ec/login', ECControll.login)
app.delete('/ec/delete', ECControll.delete)


//Start Server
server.listen(port, () => {
    console.log(`Server running at port ${port}`);
   });