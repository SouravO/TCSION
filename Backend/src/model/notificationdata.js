const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://osourav5:sourav@cluster0.w8zt0fc.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });


const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
    message: String,
    c_id:String,
    time:String   
});

var Notificationdata = mongoose.model('notificationdata',NotificationSchema);

module.exports = Notificationdata;