import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FeaturesSchema = new Schema({
    "name": {
        type: String,
        required: true
    },
    "description": {
        type: String,
        required: true
    },
    "number_people": {
        type: Number,
        required: true
    }
}, {collection: "Features", timestamps: true});

export default mongoose.model('Features', FeaturesSchema);