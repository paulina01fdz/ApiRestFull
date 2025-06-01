const mongoose = require('mongoose');

const URI =`mongodb+srv:${process.env.user}:${process.env.pass}@2873441.qcqybnj.mongodb.net/${process.env.dataBase}`

mongoose.connect(URI);

module.exports = mongoose;