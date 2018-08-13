import {GraphQLList} from 'graphql';

import {ReservationsType} from '../../types/reservations';

import Reservations from '../../../models/reservations';


const queryAllReservations = {
    type: new GraphQLList(ReservationsType),
    resolve() {
        const reservations = Reservations.find().exec();

        return reservations;
    }
}

export default queryAllReservations;