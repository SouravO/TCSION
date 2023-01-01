const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://osourav5:sourav@cluster0.w8zt0fc.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });


const Schema = mongoose.Schema;

const EnrollSchema = new Schema({
    c_name: String,
    c_professor:String,
    p_email:String,
    s_name:String,
    s_email:String,
    s_education:String,
    status:String,
    c_id:String
    

});

var Enrolldata = mongoose.model('enrolldata',EnrollSchema);

module.exports = Enrolldata;