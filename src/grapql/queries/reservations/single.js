import {GraphQLNonNull, GraphQLID} from 'graphql';

import {ReservationsType} from '../../types/reservations';

import Reservations from '../../../models/reservations';

const querySingleReservation = {
    type: ReservationsType,
    args: {
        id: {
            name: 'ID',
            type: GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        const reservation = Reservations.findById(params.id).exec();
        
        return reservation;
    }
}

export default querySingleReservation;