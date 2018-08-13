import {GraphQLNonNull, GraphQLID} from 'graphql'

import {ReservationsType} from '../../types/reservations';
import Reservations from '../../../models/reservations';

export default {
    type:ReservationsType,
    args:{
        data:{
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const deleteReservation = Reservations.findByIdAndRemove(params.id).exec()
        if (!deleteReservation) throw Error("Error al borrar la reservacion");
        return deleteReservation;
    }
}