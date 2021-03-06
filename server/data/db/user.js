import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
const envJSON = require('./../../.env.info.json');
var node_env = process.env.NODE_ENV || 'development';
const db =envJSON[node_env].DB;
const ip =envJSON[node_env].DBADRESS;
mongoose.connect(`mongodb://${ip}/${db}`, { useNewUrlParser: true });
const UserSchema = new mongoose.Schema({
    names:String,
    nickname:{type:String, index:true,unique : true, required : true},
    password:{type:String, required : true},
    photo:String
})
const User=mongoose.model('users',UserSchema);
export {User}