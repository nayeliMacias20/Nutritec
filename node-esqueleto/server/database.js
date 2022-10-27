const mongoose = require('mongoose');

const URI = 'mongodb+srv://Nayeli:<Capgemini21>@cluster0.titcwjb.mongodb.net/?retryWrites=true&w=major';
mongoose.connect(URI,{ useNewUrlParser: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;

