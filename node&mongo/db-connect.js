const mongoose = require('mongoose');
//const dbURL= "mongodb+srv://serag:serag123@serag-jmhxv.mongodb.net/shop?retryWrites=true&w=majority";
const dbURL ="mongodb://127.0.0.1:27017/ecomm" 
mongoose.connect(dbURL, {useNewUrlParser: true,useUnifiedTopology: true});