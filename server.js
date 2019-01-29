// CONSTANTS TO REQUIRE FROM EXTERNAL FILES
const
    express = require('express'),
    app = express(),
    path = require('path'),
    logger = require('morgan'),
    bodyParser = require('body-paraser'),
    mongoose = require('mongoose'),
    MONGDB_URI = process.env.MONGDB_URI || 'mongodb://localhost:27017/react-express-jwt',
    PORT = process.env.PORT || 3000;

// DATABASE
mongoose.connect(MONDB_URI, { useNewUrlParser: true }, ( err ) => {
    console.log(err || `Connected to MongoDB.`)
})

// CONFIGURATIONS


// MIDDLEWARE
app.use(express.json());
app.use(logger('dev'));
app.use(bodyParser.json())

app.get('/api', (req, res) => {
    res.json({ message: "API root."})
})


// ROUTES
app.use('/api/users', usersRoutes)

// LISTENING PORT
app.listen(PORT, err => {
    console.log(err || `Listening on PORT ${PORT}.`);
});