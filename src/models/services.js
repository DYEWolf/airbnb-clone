import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ServicesSchema = new Schema({
    "name": {
        type: String,
        required: true
    },
    "description": {
        type: String,
        required: true
    }
}, {collection: "Services", timestamps: true});

export default mongoose.model('Services', ServicesSchema);