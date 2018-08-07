import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const EstatesSchema = new Schema({
    "name": {
        type: String,
        required: true
    },
    "short_description": {
        type: String,
        required: true
    },
    "long_description": {
        type: String,
        required: true
    },
    "location": {
        type: String,
        required: true
    },
    "country": {
        type: String,
        required: true
    },
    "user": {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    "type": {
        type: Number,
        required: true
    },
    "value": {
        type: Number,
        required: true
    },
    "rating": {
        type: [{
            "comment": String,
            "stars": Number
        }],
        required: true
    },
    "features": [{
        type: Schema.Types.ObjectId,
        ref: 'Features',
        required: true
    }],
    "services": [{
        type: Schema.Types.ObjectId,
        ref: 'Services',
        required: true
    }],
    "photos": [],
    "start_availability": {
        type: Date,
        required: true
    },
    "end_availability": {
        type: Date,
        required: true
    }
}, {collection: "Estates", timestamps: true});

export default mongoose.model('Estates', EstatesSchema);