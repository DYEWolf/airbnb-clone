import mongoose from 'mongoose'
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const SALT = 10;

const UserSchema = new Schema({
    "name": {
        type: String,
        require: true
    }, 
    "last_name": {
        type: String,
        require: true
    },
    "mail": {
        type: String,
        require: true
    },
    "birthdate": {
        type: Date
    },
    "password": {
        type: String,
        require: true
    },
    "username": {
        type: String,
        require: true,
        unique: true
    },
    "photo": {
        type: String,
        default: "https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2016/01/wallpaper-for-facebook-profile-photo.jpg"
    },
    "genre": {
        type: String,
        require: true
    },
    "country": {
        type: String
    },
    "location": {
        type: String,
        required: true
    },
    "role": {
        type: String,
        required: true
    },
    "user_pay": {
        type: String,
    }
}, {collection: "Users", timestamps: true});


UserSchema.pre('save', function(next)  {
    let user = this;
    if(!user.isModified('password')) {return next();}
    bcrypt.genSalt(SALT, (err, salt) => {
        if(err) return next(err);
        bcrypt.hash(user.password, salt, (err, hash) => {
            if(err) return next(err);
            user.password = hash;
            next();
        });
    });
});

export default mongoose.model('Users', UserSchema);