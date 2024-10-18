import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    clerkID: { type: String, required: true, unique: true },  // Change 'string' to 'String'
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    photo: { type: String, required: false }
});

const userModel = mongoose.model('User', userSchema);

export default userModel;
