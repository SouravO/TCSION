const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://osourav5:sourav@cluster0.w8zt0fc.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });


const Schema = mongoose.Schema;

const ProfSchema = new Schema({
    name: String,
    email:String,
    password1:String,
    password2:String,
    email:String,
    address:String,
    dob:String,
    hobbies:String,
    mothertongue:String,
    languages:String,
    education:String,
    number:String
    

});

var Profdata = mongoose.model('profdata',ProfSchema);

module.exports = Profdata;