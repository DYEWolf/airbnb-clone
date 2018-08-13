import {GraphQLNonNull} from 'graphql'

import {ReservationsType, ReservationsInputType} from '../../types/reservations';
import Reservations from '../../../models/reservations';

export default {
    type: ReservationsType,
    args:{
        data:{
            type: new GraphQLNonNull(ReservationsInputType)
        }
    },
    resolve(root,params){
        const reservation = new Reservations(params.data);
        const newReservation = reservation.save();
        if (!newReservation) throw Error("Error al crear la reservacion");
        return newReservation;
    }
}