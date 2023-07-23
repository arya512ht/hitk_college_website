import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    name: String,
    fname: String,
    mname: String,
    mobile: Number,
    email: String,
    dob: Date,
    gender: String,
    rel: String,
    uname: String,
    pass: String,
    street: String,
    post: String,
    police: String,
    dist: String,
    state: String,
    pin: Number,
    course: String,
    department: String,
    adate: Date,
    roll: Number,
    image: String
});



const user = mongoose.model('hitk', userSchema);

export default user;