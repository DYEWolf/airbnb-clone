import {GraphQLObjectType, GraphQLInt, GraphQLBoolean, GraphQLNonNull, GraphQLID, GraphQLInputObjectType} from 'graphql';

import {UserType} from './users';
import {EstatesType} from './estates';

import User from '../../models/user';
import Estates from '../../models/estates';

export const ReservationsType = new GraphQLObjectType({
    name: 'Reservations',
    description: 'Reservation for the airbnb',
    fields: () => ({
        _id: {
            type: GraphQLNonNull(GraphQLID)
        },
        user: {
            type: UserType,
            resolve(property){
                const {user} = property;
                return User.findById(user).exec();
            }
        },
        estates: {
            type: EstatesType,
            resolve(property){
                const {estates} = property;
                return Estates.findById(estates).exec();
            }
        },
        payment_status: {
            type: GraphQLBoolean
        },
        number_people: {
            type: GraphQLInt
        },
        reservation_status: {
            type: GraphQLBoolean
        },
        extra_charges: {
            type: GraphQLInt
        }
    })
});

export const ReservationsInputType = new GraphQLInputObjectType({
    name: 'addReservation',
    description: 'add reservation',
    fields: () => ({
        user: {
            type: GraphQLNonNull(GraphQLID)
        },
        estates: {
            type: GraphQLNonNull(GraphQLID)
        },
        payment_status: {
            type: GraphQLBoolean
        },
        number_people: {
            type: GraphQLInt
        },
        reservation_status: {
            type: GraphQLBoolean
        },
        extra_charges: {
            type: GraphQLInt
        }
    })
});