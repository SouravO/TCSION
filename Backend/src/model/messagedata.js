const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://osourav5:sourav@cluster0.w8zt0fc.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });


const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    message: String,
    s_id:String,
    r_id:String,
    s_name:String,
    about:String   
});

var Messagedata = mongoose.model('messagedata',MessageSchema);

module.exports = Messagedata;