const mongoose = require('mongoose');
const crypto = require('crypto');
const uuid = require('uuid/v1');

const userShema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        require: true,
        unique: true
    },
    email: {
        type: String,
        trim: true,
        require: true,
        unique: true
    },
    hashed_password: {
        type: String,
        required: true
    },
    about: {
        type: String,
        trim: true
    },
    salt: String,
    role: {
        type: Number,
        default: 0
    },
    history: {
        type: Array,
        default: [],
    }
}, { timestamps: true })


// virtual fields

userSchema.virtual('password')
    .set((password) => {
        this._password = password;
        this.salt = uuid();
        this.hashed_password = this.encryptPassword(password)
    })
    .get(() => {
        return this._password
    })

userShema.methods = {
    encryptPassword: (password) => {
        if (!password) return '';

        try {
            return crypto.createHmac('sha1', this.salt)
                .update(password)
                .digest('hex');
        } catch (error) {
            console.log(error.message)
            return ''
        }
    }
}

module.exports = mongoose.model('User', userShema);