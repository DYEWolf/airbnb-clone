import {GraphQLNonNull, GraphQLID} from 'graphql'

import {ReservationsType, ReservationsInputType} from '../../types/reservations';
import Reservations from '../../../models/reservations';

export default {
    type:ReservationsType,
    args:{
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data:{
            type: new GraphQLNonNull(ReservationsInputType)
        }
    },
    resolve(root,params){
        return Reservations.findByIdAndUpdate(params.id,{$set:{...params.data}},{new:true})
        .then(reservation => reservation)
        .catch(erre =>  Error('Error al hacer el update'))
    }
}