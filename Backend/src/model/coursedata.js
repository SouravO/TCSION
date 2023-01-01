const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://osourav5:sourav@cluster0.w8zt0fc.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });


const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: String,
    duration:String,
    image:String,
    professor:String,
    email:String,
    details:String,
    qualification:String,
    type:String,
    startdate:String,
    level:String
    
});

var Coursedata = mongoose.model('coursedata',CourseSchema);

module.exports = Coursedata;