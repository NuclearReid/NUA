const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    // this is listed as 'email' but it doesn't need to be an email
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
        // set up requirments for the password later on
    },
    callsRecieved: {
        type: Number,
    },
    peopleServed: {
        type: Number,
    },
    reversals: {
        type: Number,
    }
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
}

const User = model('User', userSchema);

module.exports = User;