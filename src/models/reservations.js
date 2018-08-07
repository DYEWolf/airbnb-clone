import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ReservationsSchema = new Schema({
    "user": {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    "Estates": {
        type: Schema.Types.ObjectId,
        ref: 'Estates',
        required: true
    },
    "payment_status": {
        type: boolean,
        required: true,
        default: false
    },
    "number_people": {
        type: Number,
        required: true,
        default: 1
    },
    "reservation_status": {
        type: boolean,
        required: true,
        default: false
    },
    "extra_charges": {
        type: Number
    }
}, {collection: "Reservations", timestamps: true});

export default mongoose.model('Reservations', ReservationsSchema);