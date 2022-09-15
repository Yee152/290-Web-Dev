import mongoose from 'mongoose';
import 'dotenv/config';


mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

const db = mongoose.connection;

/*
* This defines a schema
*/
const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    email:{type: String, required: true},
    phoneNumber: {type: Number, required: false}
});

/**
 * Compile the model from the schema. THis must be done after defining the schema.
 */
const User = mongoose.model("User", userSchema);

/**
 * 
 * @param {String} name 
 * @param {*} age 
 * @param {*} email 
 * @param {*} phoneNumber 
 * @param {*} _id
 * @returns A promise. Resolves to JS object for document created by save.
 */
const createUser = async(name,age,email,phoneNumber) => {
    const user = new User({name: name, age: age, email: email, phoneNumber: phoneNumber})
    //created by mongoose
    return user.save();
}


const findUsers = async(filter) => {
    const query = User.find(filter)
    return query.exec();
}

const updateUser = async(filter, update) => {
    const result = await User.updateOne(filter, update);
    return result.modifiedCount;

}

const deleteUser = async(filter) => {
    const result = await User.deleteMany(filter)
    return result.deletedCount;

}


db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});



export {createUser, findUsers, updateUser, deleteUser};